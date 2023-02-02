/**
 * 炮塔类
 * by littlefean
 */
class Tower extends CircleObject {
    /**
     * 生成一个普通炮塔
     * @param x {Number}
     * @param y {Number}
     * @param world {World}
     */
    constructor(x, y, world) {
        super(new Vector(x, y), world);
        this.name = "普通炮塔";
        this.gameType = "Tower";
        this.r = 15; // px;
        this.rangeR = 100;  // 射程
        this.dirction = new Vector(1, 2).to1();  // 炮塔的朝向
        this.clock = 5 // 间歇时间 1最短 必须是整数！ 越大攻击频率越慢  遇到怪物之后的反应刻

        this.bullys = new Set();  // 发射过的子弹

        this.getmMainBullyFunc = BullyFinally.Normal;  // 炮塔发射的主子弹，获取新子弹对象的方法

        this.bullySpeed = 8;  // 子弹基础速度
        this.bullySpeedAddMax = 0;  // 子弹速度增加随机量
        this.bullyDeviationRotate = 0;  // 子弹平面随机偏移 方向方面的
        this.bullyDeviation = 0;  // 子弹平面随机偏移
        /**
         * 散弹单侧张角
         * @type {number} 弧度
         */
        this.bullyRotate = 0;
        this.attackBullyNum = 1;  // 一次性发射子弹的数量
        this.bullySlideRate = 1;  // 子弹可滑行距离
        this.attackFunc = this.normalAttack;

        this.hpInit(1000);

        this.price = 10 // 这个炮塔需要花多少钱来买

        this.levelUpArr = [  // 这个炮塔接下来可以升级成什么建筑
        ];
        this.levelDownGetter = null;

        this.bodyColor = MyColor.arrTo([100, 100, 100, 1]);
        this.hpColor = MyColor.arrTo([2, 230, 13, 0.8]);
        this.bodyStrokeWidth = 1;
        this.bodyStrokeColor = MyColor.Transparent();
        this.hpBarHeight = 5;

        // 贴图编号
        this.imgIndex = 0;
        // 发射子弹的音效
        this.audioSrcString = "sound/发射音效/默认发射音效.mp3"
    }


    goStep() {
        super.goStep();
        super.move();

        this.removeOutRangeBullet();
        // 移动自己射过的子弹
        for (let b of this.bullys) {
            b.goStep();
        }
        // 判断死亡
        if (this.isDead()) {
            // 此处代码似乎不会被执行到
            return;
        }
        this.attackFunc();
    }

    remove() {
        this.hpSet(0);
        super.remove();
    }

    /**
     * 清除子弹库
     */
    removeOutRangeBullet() {
        if (this.bullys.size === 0) {
            return;
        }
        for (let b of this.bullys) {
            if (b.outTowerViewRange()) {
                b.boom();
                b.split();
                this.bullys.delete(b);
            }
        }
    }

    /**
     * 一个普通炮塔的攻击机制
     */
    normalAttack() {
        if (this.liveTime % this.clock !== 0) {
            return;
        }

        for (let m of this.world.monsters) {
            if (this.getViewCircle().impact(m.getBodyCircle())) {
                this.dirction = m.pos.sub(this.pos).to1();
                for (let i = 0; i < this.attackBullyNum; i++) {
                    this.fire();
                }
                // 播放声音
                new Audio(this.audioSrcString).play().then();
                break;
            }
        }
    }

    /**
     * 散弹枪的攻击机制
     */
    shrapnelAttack() {
        if (this.liveTime % this.clock !== 0) {
            return;
        }

        for (let m of this.world.monsters) {
            if (this.getViewCircle().impact(m.getBodyCircle())) {
                let targetDir = m.pos.sub(this.pos).to1();  // 瞄准怪物的方向
                for (let i = 0; i < this.attackBullyNum; i++) {
                    this.dirction = Vector.rotatePoint(Vector.zero(), targetDir,
                        2 * this.bullyRotate * (i / this.attackBullyNum))
                    this.dirction = Vector.rotatePoint(Vector.zero(), this.dirction,
                        -this.bullyRotate);
                    this.fire();
                }
                // 播放声音
                new Audio(this.audioSrcString).play().then();

                break;
            }
        }
    }

    /**
     * 获取一个正在运动的子弹
     */
    getRunningBully() {
        let res = this.getmMainBullyFunc();
        if (res === undefined) {
            console.log("??????? 可能是finalBully忘了return了")
        }
        // 发射起始点
        res.originalPos = new Vector(this.pos.x, this.pos.y);
        // 炮台绑定
        res.father = this;
        // 世界绑定
        res.world = this.world;
        // 获取发射点位置
        res.pos = new Vector(this.pos.x, this.pos.y).deviation(this.bullyDeviation);
        // 获取发射方向，有方向偏移的情况
        let bDir = this.dirction.mul(Math.random() * this.bullySpeedAddMax + this.bullySpeed);
        bDir = bDir.deviation(this.bullyDeviationRotate);
        res.speed = bDir;
        res.slideRate = this.bullySlideRate;
        return res;
    }

    /**
     * 向自己当前的朝向发出一枚子弹
     */
    fire() {
        // 构造子弹实例
        let b = this.getRunningBully();
        // 添加子弹数组
        this.bullys.add(b);
    }

    /**
     * 通过索引获得当前这个炮塔的贴图在大图片中的切割起始位置
     *
     * @param n 索引
     */
    getImgStartPosByIndex(n) {
        let x = n % Math.floor(TOWERS_IMG.width / TOWER_IMG_PRE_WIDTH);
        let y = Math.floor(n / Math.floor(TOWERS_IMG.height / TOWER_IMG_PRE_HEIGHT));
        return new Vector(x * TOWER_IMG_PRE_WIDTH, y * TOWER_IMG_PRE_HEIGHT);
    }

    render(ctx) {
        if (this.isDead()) {
            return;
        }
        super.render(ctx);
        // 渲染贴图
        let imgStartPos = this.getImgStartPosByIndex(this.imgIndex);
        ctx.drawImage(
            TOWERS_IMG,
            imgStartPos.x,
            imgStartPos.y,
            TOWER_IMG_PRE_WIDTH,
            TOWER_IMG_PRE_HEIGHT,
            standardize(this.pos.x - this.r),
            standardize(this.pos.y - this.r),
            standardize(this.r * 2),
            standardize(this.r * 2),
        );
        // 渲染视野半径圆
        if (!this.isDead() && this.selected) {
            this.getViewCircle().renderView(ctx);
        }
        // 渲染每一个子弹  子弹在覆盖身体上层
        for (let b of this.bullys) {
            b.render(ctx);
        }
        // 渲染升级图
        if (this.isUpLevelAble()) {
            let upDateImgStartPos = this.pos.plus(new Vector(this.r * 0.2, -this.r * 1.5));
            ctx.drawImage(
                UP_LEVEL_ICON,
                standardize(0),
                standardize(0),
                standardize(100),
                standardize(100),
                standardize(upDateImgStartPos.x),
                standardize(upDateImgStartPos.y + Math.sin(this.liveTime / 5) * 5),
                standardize(20),
                standardize(20)
            );
        }
    }

    /**
     * 获取视野圆形
     * @returns {Circle}
     */
    getViewCircle() {
        return new Circle(this.pos.x, this.pos.y, this.rangeR);
    }

    /**
     * 判断是否可以升级了
     */
    isUpLevelAble() {
        for (let getterFunc of this.levelUpArr) {
            if (this.world.user.money >= getterFunc(this.world).price) {
                return true;
            }
        }
        return false;
    }
}
