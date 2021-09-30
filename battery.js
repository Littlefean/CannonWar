/**
 * 炮塔类
 * by littlefean
 */
class Battery extends CircleObject {
    /**
     * 生成一个普通炮塔
     * @param x {Number}
     * @param y {Number}
     * @param world {World}
     */
    constructor(x, y, world) {
        super(new Vector(x, y), world);
        this.name = "普通炮塔";
        this.r = 10; // px;
        this.rangeR = 100;  // 射程
        this.dirction = new Vector(1, 2).to1();
        this.clock = 5 // 间歇时间 1最短 必须是整数！ 越大攻击频率越慢  遇到怪物之后的反应刻

        this.bullys = [];  // 发射过的子弹

        this.getmMinBullyFunc = BullyFinally.Normal;

        this.bullySpeed = 8;  // 子弹基础速度
        this.bullySpeedAddMax = 0;  // 子弹速度增加随机量
        this.bullyDeviationRotate = 0;  // 子弹平面随机偏移 方向方面的
        this.bullyDeviation = 0;  // 子弹平面随机偏移
        this.attackBullyNum = 1;  // 一次性发射子弹的数量
        this.bullySlideRate = 1;  // 子弹可滑行距离

        this.hpInit(1000);

        this.price = 10 // 这个炮塔需要花多少钱来买

        this.bombDamage = 0;

        this.bodyColor = [100, 100, 100, 1];
        this.hpColor = [2, 230, 13, 0.8];
        this.bodyStrokeWidth = 10;
        this.bodyStrokeColor = [22, 22, 22, 1];
        this.hpBarHeight = 5;
    }


    goStep() {
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
        this.attackAction();
    }

    /**
     * 清除子弹库
     */
    removeOutRangeBullet() {
        if (this.bullys.length === 0) {
            return;
        }
        let arr = [];
        for (let b of this.bullys) {
            if (!b.outTowerViewRange()) {
                arr.push(b);
            } else {
                b.boom();
            }
        }
        this.bullys = arr;
    }

    /**
     * 一个普通炮塔的攻击机制
     */
    attackAction() {
        if (this.world.time % this.clock !== 0) {
            return;
        }
        for (let m of this.world.monsters) {
            if (this.getViewCircle().impact(m.getBodyCircle())) {
                this.dirction = m.pos.sub(this.pos).to1();
                for (let i = 0; i < this.attackBullyNum; i++) {
                    this.fire();
                }
                break;
            }
        }
    }

    /**
     * 获取一个正在运动的子弹
     *
     */
    getRunningBully() {
        let res = this.getmMinBullyFunc();
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
        this.bullys.push(b);
    }

    render(ctx) {
        // 渲染每一个子弹
        for (let b of this.bullys) {
            b.render(ctx);
        }
        if (this.isDead()) {
            return;
        }
        super.render(ctx);

        // 渲染视野半径圆
        if (!this.isDead()) {
            this.getViewCircle().renderView(ctx);
        }
    }

    /**
     * 获取视野圆形
     * @returns {Circle}
     */
    getViewCircle() {
        return new Circle(this.pos.x, this.pos.y, this.rangeR);
    }


}
