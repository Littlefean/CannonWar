/**
 * 会喷射的怪物类
 * by littlefean
 *
 * todo 这部分API需要重新设计
 */
class MonsterShooter extends Monster {
    constructor(pos, world) {
        super(pos, world);
        this.gameType = "Monster";
        this.name = "射手怪物";

        this.rangeR = 100;
        // this.direction = Vector.randCircle();
        this.dirction = new Vector(1, 2).to1();  // 炮塔的朝向

        this.getmMainBullyFunc = BullyFinally.S;  // 发射的主子弹，获取新子弹对象的方法
        this.bullySpeed = 8;  // 子弹基础速度
        this.clock = 5; // 发射攻击时刻频率
        this.attackBullyNum = 1;  // 一次性发射子弹的数量
        this.bullyDeviationRotate = 0;  // 子弹平面随机偏移 方向方面的
        this.bullySpeedAddMax = 0;  // 子弹速度增加随机量
        this.bullyDeviation = 0;  // 子弹平面随机偏移
        this.bullySlideRate = 1;  // 子弹可滑行距离
        this.bullys = [];
    }

    goStep() {
        super.goStep();
        this.attackAction();

        // 移动自己射过的子弹
        for (let bully of this.bullys) {
            // b.goStep();
            bully.move();
            let c = new Circle(bully.pos.x, bully.pos.y, bully.r); // 当前子弹形状
            for (let building of this.world.getAllBuildingArr()) {
                if (c.impact(building.getBodyCircle())) {
                    // 直接击中造成伤害
                    building.hpChange(-bully.damage);
                    // // 直接击中造成改变速速效果
                    // b.speedFreezeNumb *= b.freezeCutDown;  // 每次减速都会叠加
                    // // 燃烧属性
                    // b.burnRate += b.burnRateAdd;
                    // 可以穿过
                    if (bully.throughable) {
                        // 被削减掉了
                        if (bully.r <= 0) {
                            bully.remove();
                            break;
                        }
                        bully.bodyRadiusChange(-bully.throughCutNum);
                        continue;
                    }
                    // 发生爆炸
                    bully.boom();
                    // 造成击退
                    // building.changedSpeed.add(bully.speed.mul(bully.repel));
                    // // 发生分裂
                    // b.split();
                    // 删除子弹
                    building.remove();
                    break;
                }
            }
        }
    }

    /**
     * 攻击机制
     */
    attackAction() {
        if (this.liveTime % this.clock !== 0) {
            return;
        }
        for (let building of this.world.getAllBuildingArr()) {
            if (this.getViewCircle().impact(building.getBodyCircle())) {
                this.dirction = building.pos.sub(this.pos).to1();
                for (let i = 0; i < this.attackBullyNum; i++) {
                    this.fire();
                }
                break;
            }
        }
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

    render(ctx) {
        super.render(ctx);
        // 远程攻击范围
        new Circle(this.pos.x, this.pos.y, this.rangeR).renderView(ctx);
        for (let b of this.bullys) {
            b.render(ctx);
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
