/**
 *
 * by littlefean
 */
class Monster extends CircleObject {
    /**
     * 一个默认的怪物
     * 撞击类型的怪物
     * @param pos {Vector} 初始位置
     * @param world {World} 世界
     */
    constructor(pos, world) {
        super(pos, world);
        this.gameType = "Monster";
        this.name = "默认怪物";

        this.speed = null;
        this.speedNumb = 1; // 指向目的地方向的速度适量的倍数 用于设置
        this.speedFreezeNumb = 1;
        this.minFreezeNum = 0.2;  // 冰冻速度削减属性不能低于这个数值，如果将这个数字设置为1，表示该怪物免疫冰冻

        this.changedSpeed = Vector.zero();  // 叠加一个被外力改变了的速度
        this.changeSpeedFunc = () => {
        };
        this.maxSpeedN = 15;  // 怪物的最大速度通常不能超过这个值
        this.burnMaxSpeedN = 2;  // 怪物通过点燃获得的最大急躁速度倍率，若1则不会获得点燃加速
        this.burnRate = 0;  // 当前燃烧率 [0, 1]，怪物每一个tick会掉落总体血量的这么多倍数
        this.maxBurnRate = 0.005;  // 通常怪物的最大燃烧速率是 %，如果设置为0则表示免疫燃烧。

        this.hpInit(100);
        this.colishDamage = 100;
        this.r = 15;  // 身体半径
        this.addPrice = 5;  // 奖金
        this.destination = new Vector(this.world.width / 2, this.world.height / 2);  // 默认的目的地是中心点
        this.bodyColor = MyColor.arrTo([25, 25, 25, 0.8]);
        this.hpColor = MyColor.arrTo([200, 20, 20, 0.5]);


        // 死亡自爆特性
        this.bombSelfAble = false;
        this.bombSelfRange = 100;
        this.bombSelfDamage = 500;

        // 穿过特性
        this.throwAble = false;

        // 引力场
        this.haveGArea = false;
        this.gAreaR = 0;  // 引力场半径
        this.gAreaNum = 0;  // 引力场强度

        // 子弹操控场
        this.haveBullyChangeArea = false;
        this.bullyChangeDetails = {
            r: 100, // 半径
            f: 5,  // 频率
            bullyDR: -0, // 每次子弹半径改变量
            bullyAN: 0, // 子弹排斥力系数
            bullyDD: -0, // 每次改变子弹的伤害，注
        }

        // 友军增益场
        this.haveGain = false;  // 是否有队友增益场
        this.gainDetails = {  // todo 这个里面要是增加东西，需要修改 monsterFinally.js
            gainRadius: 250,  // 给队友增益的范围
            gainFrequency: 10,  // 执行增益的频率
            gainR: 0,  // 给队友增加半径
            gainCollideDamageAddNum: 0,  // 一次增加伤害
            gainHpAddedNum: 0, // 一次加血量
            gainSpeedNAddNum: 0, // 一次增加速度量
            gainHpAddedRate: 0.0, // 一次加血量百分比
            gainMaxHpAddedNum: 0, // 一次加血量上限
        };

        // 激光防御能力
        this.haveLaserDefence = false;
        this.laserFreeze = 1;  // 多少个时间刻执行一次激光防御
        this.laserdefendPreNum = 10;  // 一次激光防御可以打几个子弹
        this.maxLaserNum = 1000;  // 激光防御最多子弹量
        this.laserDefendNum = 1000;
        this.laserRecoverFreeze = 10;  // 多少个时间刻度恢复一次子弹数量
        this.laserRecoverNum = 10;  // 一次恢复多少个激光防御数量
        this.laserRadius = 100;  // 激光防御范围的半径

        // 死亡召唤能力
        this.deadSummonAble = false;
        this.summonAble = false;  // 随时召唤能力
        this.summonFreezeTime = 100;  // 多少个时间刻度召唤一次
        this.summonCount = 4;  // 一次性召唤的数量
        this.summonDistance = 30;  // 召唤的怪物与自己的距离
        this.summonMonsterFunc = MonsterFinally.Normal;

        // 小黑特性
        this.teleportingAble = false;
        this.teleportingRange = 100;  // 一次瞬移半径
        this.teleportingCount = 3;

        this.imgIndex = 0;
    }

    /**
     * 随机从边缘初始化一个
     */
    static randInit(world) {
        let res = new this(Vector.randRectBrim(0, world.width, 0, world.height), world);
        res.bodyStrokeColor = MyColor.arrTo([0, 0, 0, 1]);
        return res;
    }

    /**
     * 初始化这个怪物的数据，根据波数
     */
    dataInit(flowNum) {
        this.hpInit(this.maxHp + Functions.levelMonsterHpAddedHard(flowNum));
        this.colishDamage += Functions.levelCollideAddedHard(flowNum);
        this.addPrice += Functions.levelAddPrice(flowNum);
    }

    /**
     * 瞬移
     */
    teleporting() {
        if (this.teleportingAble) {
            this.pos.add(Vector.randCircle().mul(this.teleportingRange));
            this.teleportingCount--;
            if (this.teleportingCount < 0) {
                this.teleportingCount = 0;
            }
        }
    }

    /**
     * 具有奇怪的自我步伐的能力
     * 一种更新 额外速度 的方法
     * 该方法存在后能够抵御击退效果，甚至可以躲避子弹
     */
    selfSwingMove() {
        let vec = this.destination.sub(this.pos).to1();
        this.changedSpeed = vec.rotate90().mul(Math.sin(this.liveTime / 10) * 10);
    }

    selfSuddenlyMove() {
        let vec = this.destination.sub(this.pos).to1();
        this.changedSpeed = vec.mul((Math.sin(this.liveTime / 10) + 1) * 2);
    }

    selfExcitingMove() {
        let vec = this.destination.sub(this.pos).to1();
        this.changedSpeed = vec.mul((Math.sin(this.liveTime / 4) + 0.3) * 6);
    }

    selfDoubleSwingMove() {
        // 像黑洞吸进去东西的轨迹
        let vec = this.destination.sub(this.pos).to1();
        this.changedSpeed = vec.rotate90().mul(Math.sin(Math.pow(this.liveTime / 10, 0.5)) * 10);
        this.changedSpeed.plus(vec.mul(Math.cos(Math.pow(this.liveTime / 10, 2))) * 20);
    }

    move() {
        // 使得速度朝着目标移动
        // 方向单位1矢量
        let vec = this.destination.sub(this.pos).to1();

        // 冰冻减速效果
        // 冻结 限制更新速度
        if (this.minFreezeNum > this.speedFreezeNumb) {
            this.speedFreezeNumb = this.minFreezeNum;
        }
        if (this.speedFreezeNumb > this.burnMaxSpeedN) {
            this.speedFreezeNumb = this.burnMaxSpeedN;
        }
        // 计算得到这个怪物自身的速度矢量
        this.speed = vec.mul(this.speedNumb).mul(this.speedFreezeNumb);
        // 计算加速度
        this.acceleration = vec.mul(this.accelerationV);
        // 额外速度矢量对速度增益 击退
        this.speed.add(this.changedSpeed);
        // 自我更新外界对自己的影响速度
        this.changeSpeedFunc();

        // 加速度对额外速度增益
        this.changedSpeed.add(this.acceleration);
        super.move();
    }

    /**
     * 进行激光防御
     */
    laserDefend() {
        /**
         * 判断一个子弹是不是在范围内
         */
        let inRange = (bully) => {
            return bully.pos.sub(this.pos).abs() < this.laserRadius;
        }
        /**
         * 对一个子弹进行激光防御，把它消灭
         * @param bully
         */
        let defend = (bully) => {
            if (inRange(bully)) {
                // 渲染特效
                let startPos = this.pos.copy();
                startPos.add(Vector.randCircle());
                let e = new EffectLine(startPos, bully.pos.copy());
                e.initLineStyle(new MyColor(255, 0, 0, 0.1), 1);
                // e.line.setStrokeColor(255, 0, 0, 0.1);
                this.world.addEffect(e);
                let ec = new EffectCircle(bully.pos.copy());
                ec.circle.fillColor.setRGBA(255, 0, 0, 0.1);
                this.world.addEffect(ec);
                // 删除子弹
                bully.remove();
            }
        }
        /**
         * 改变激光防御子弹的数量
         * @param dN 改变量，是一个整数
         */
        let laserNumChange = (dN) => {
            this.laserDefendNum += dN;
            if (this.laserDefendNum < 0) {
                this.laserDefendNum = 0;
            }
            if (this.laserDefendNum > this.maxLaserNum) {
                this.laserDefendNum = this.maxLaserNum;
            }
        }
        if (this.haveLaserDefence) {
            // 开始进行激光防御
            if (this.liveTime % this.laserFreeze === 0) {
                // 一次防御多少个子弹
                let arr = this.world.getAllBullyToArr();
                let count = 0;
                for (let bully of arr) {
                    if (bully.laserDestoryAble === false) {
                        continue;
                    }
                    if (count >= this.laserdefendPreNum || this.laserDefendNum <= 0) {
                        break;
                    }
                    if (inRange(bully)) {
                        defend(bully);
                        count++;
                        laserNumChange(-1);
                        // console.log("减少了")
                    }
                }
            }
            // 开始恢复子弹
            if (this.liveTime % this.laserRecoverFreeze === 0) {
                laserNumChange(this.laserRecoverNum);
                // console.log("恢复了")
            }
        }
    }

    /**
     * 对周围友军产生增益效果
     */
    gainOther() {
        if (this.haveGain) {
            if (this.liveTime % this.gainDetails.gainFrequency === 0) {
                // 开始执行增益
                for (let m of this.world.monsters) {
                    if (m !== this) {
                        if (m.pos.dis(this.pos) < this.gainDetails.gainRadius) {
                            // 对这个怪物产生增益效果
                            m.colishDamage += this.gainDetails.gainCollideDamageAddNum;
                            m.hpChange(m.maxHp * this.gainDetails.gainHpAddedRate);
                            m.hpChange(this.gainDetails.gainHpAddedNum);
                            m.maxHp += this.gainDetails.gainMaxHpAddedNum;
                            if (m.r < 100 || m.r > 0) {
                                m.r += this.gainDetails.gainR;
                            }
                            if (m.speedNumb < 2.5) {  // 增加速度的最大量不能超过 2.5
                                m.speedNumb += this.gainDetails.gainSpeedNAddNum;
                            }
                            // 添加增益特效
                            let e = new EffectLine(this.pos, m.pos);
                            e.initLineStyle(new MyColor(0, 200, 0, 0.5), 3);
                            // e.line.setStrokeColor(0, 200, 0, 0.5);
                            // e.line.strokeWidth = 3;
                            this.world.addEffect(e);
                        }
                    }
                }
            }
        }
    }

    /**
     * 子弹操控场生效
     */
    bullyChange() {
        if (this.haveBullyChangeArea) {
            if (this.liveTime % this.bullyChangeDetails.f === 0) {
                for (let b of this.world.getAllBullyToArr()) {
                    // alert(b.pos);
                    if (b.pos.dis(this.pos) < this.bullyChangeDetails.r + b.r) {
                        // 对这个子弹进行改变
                        b.bodyRadiusChange(this.bullyChangeDetails.bullyDR);
                        // 对这个子弹的加速度进行改变
                        let diffVec = b.pos.sub(this.pos);
                        let av = diffVec.to1().mul(this.bullyChangeDetails.bullyAN);
                        let q = 1 - diffVec.abs() / this.bullyChangeDetails.r;  // 距离权重
                        av = av.mul(q);
                        b.acceleration = av;
                        // 对这个子弹的伤害进行改变
                        b.damageChange(this.bullyChangeDetails.bullyDD);
                    }
                }
            }
        }
    }

    /**
     * 对周围产生引力场的效果
     */
    gravyPower() {
        if (this.haveGArea) {
            for (let b of this.world.getAllBuildingArr()) {
                if (this.pos.dis(b.pos) < this.gAreaR) {
                    let gSpeed = this.pos.sub(b.pos).to1().mul(this.gAreaNum);
                    b.pos.add(gSpeed);
                }
            }
        }
    }

    /**
     * 触发自爆
     */
    bombSelf() {
        if (this.bombSelfAble) {
            for (let b of this.world.getAllBuildingArr()) {
                if (b.getBodyCircle().impact(new Circle(this.pos.x, this.pos.y, this.bombSelfRange))) {
                    let dis = this.pos.dis(b.pos);
                    let damage = (1 - (dis / this.bombSelfRange)) * this.bombSelfDamage;
                    b.hpChange(-Math.abs(damage));
                }
            }
            // 添加爆炸特效
            let e = new EffectCircle(this.pos.copy());
            e.animationFunc = e.flashRedAnimation;
            e.circle.r = this.bombSelfRange;
            this.world.addEffect(e);
        }
    }

    /**
     * 进行召唤（分裂）
     */
    deadSummon() {
        if (this.deadSummonAble) {
            this.summonFunc();
        }
    }

    summonFunc() {
        for (let i = 0; i < this.summonCount; i++) {
            let m = this.summonMonsterFunc(this.world);
            m.pos = this.pos.plus(Vector.randCircle().mul(this.summonDistance));
            this.world.addMonster(m);
        }
    }

    /**
     * 随时召唤
     */
    summon() {
        if (this.summonAble) {
            if (this.liveTime % this.summonFreezeTime === 0) {
                this.summonFunc();
            }
        }
    }

    hpChange(dh) {
        return super.hpChange(dh);
    }

    /**
     * 删除这个
     */
    remove() {
        this.deadSummon();
        super.remove();
        this.hpSet(0);
        this.world.monsters.delete(this);
        this.world.user.money += this.addPrice;
    }

    /**
     * 碰撞检测
     */
    clash() {
        // 与纯建筑碰撞
        for (let b of this.world.getAllBuildingArr()) {
            if (this.getBodyCircle().impact(b.getBodyCircle())) {
                // 自爆
                this.bombSelf();
                b.hpChange(-this.colishDamage);
                if (!this.throwAble) {
                    this.remove();
                    break;
                }
            }
        }
    }

    goStep() {
        super.goStep();
        // 激光防御
        this.laserDefend();
        // 召唤
        this.summon();
        // 产生增益
        this.gainOther();
        // 子弹场
        this.bullyChange();
        // 死亡检测
        if (this.isDead()) {
            // 自爆
            this.bombSelf();
            this.remove();
        }
        // 引力场生效
        this.gravyPower();
        // 碰撞检测
        this.clash();
        // 效果增加
        // 燃烧
        if (this.burnRate > this.maxBurnRate) {
            this.burnRate = this.maxBurnRate;
        }
        if (this.burnRate !== 0) {
            this.hpChange(-this.burnRate * this.maxHp);
        }

        // 移动
        this.move();
    }

    render(ctx) {
        super.render(ctx);
        // 绘制贴图
        let imgStartPos = this.getImgStartPosByIndex(this.imgIndex);
        ctx.drawImage(
            MONSTERS_IMG,
            imgStartPos.x,
            imgStartPos.y,
            MONSTER_IMG_PRE_WIDTH,
            MONSTER_IMG_PRE_HEIGHT,
            standardize(this.pos.x - this.r),
            standardize(this.pos.y - this.r),
            standardize(this.r * 2),
            standardize(this.r * 2)
        );
        // 写上名字
        ctx.fillStyle = "black";
        ctx.font = "12px Microsoft YaHei";
        ctx.textAlign = "center";
        ctx.fillText(this.name, standardize(this.pos.x), standardize(this.pos.y + this.r * 1.5));

        // 渲染爆炸范围
        if (this.bombSelfAble) {
            let c = new Circle(this.pos.x, this.pos.y, this.bombSelfRange);
            c.renderView(ctx);
        }
        // 引力范围
        if (this.haveGArea) {
            new Circle(this.pos.x, this.pos.y, this.gAreaR).renderView(ctx);
        }
        // 子弹操控场范围
        if (this.haveBullyChangeArea) {
            new Circle(this.pos.x, this.pos.y, this.bullyChangeDetails.r).renderView(ctx);
        }
        // 增益范围
        if (this.haveGain) {
            new Circle(this.pos.x, this.pos.y, this.gainDetails.gainRadius).renderView(ctx);
        }
        // 激光防御范围
        if (this.haveLaserDefence) {
            new Circle(this.pos.x, this.pos.y, this.laserRadius).renderView(ctx);
            // 激光防御条
            let barH = this.hpBarHeight;
            let hpRate = this.laserDefendNum / this.maxLaserNum;
            let diff = 4;
            // 血条边框
            let rectB = new Rectangle(this.pos.x - this.r, this.pos.y - this.r - diff * barH, this.r * 2, barH);
            rectB.setStrokeWidth(1);
            rectB.setFillColor(0, 0, 0, 0);
            rectB.setStrokeColor(1, 1, 1);
            rectB.render(ctx);
            // 血条填充
            let rect = new Rectangle(this.pos.x - this.r, this.pos.y - this.r - diff * barH, this.r * 2 * hpRate, barH);
            rect.setStrokeWidth(0);
            rect.setFillColor(255, 0, 255, 0.5);
            rect.render(ctx);
            // 血条写数字
            let txt = Math.floor(this.laserDefendNum).toString();
            ctx.fillStyle = "black";
            ctx.font = "9px Microsoft YaHei";
            ctx.textAlign = "center";
            //垂直对齐方式
            ctx.textBaseline = "top";
            ctx.fillText(txt, standardize(this.pos.x), standardize(this.pos.y - this.r - diff * barH + 1));
        }
    }

    /**
     * 通过索引获得当前这个炮塔的贴图在大图片中的切割起始位置
     * @param n 索引
     */
    getImgStartPosByIndex(n) {
        let x = n % Math.floor(MONSTERS_IMG.width / MONSTER_IMG_PRE_WIDTH);
        let y = Math.floor(n / Math.floor(MONSTERS_IMG.height / MONSTER_IMG_PRE_HEIGHT));
        return new Vector(x * MONSTER_IMG_PRE_WIDTH, y * MONSTER_IMG_PRE_HEIGHT);
    }
}
