/**
 * 射线炮塔
 * by littlefean
 */

class BatteryRay extends Battery {
    constructor(x, y, world) {
        super(x, y, world);
        this.name = "射线塔";
        this.gameType = "Battery";
        this.clock = 1.1  // 设置为一个小数类型，表示这个炮塔永远不会发射圆圈形的炮弹

        this.target = null;  // 目标怪物
        this.rangeR = 200;
        this.hpInit(5000);
        this.price = 1000 // 这个炮塔需要花多少钱来买

        this.rayLen = 1000;  // 射线的长度
        this.damage = 1;  // 打击一次的伤害
        this.targetLiveTime = 0;  // 锁定目标的时间

        this.attackFunc = this.attack;
        this.scanningSpeed = 0.01;  // 旋转角速度 倍数
    }

    /**
     * 更新目标
     */
    refreshTarget() {
        for (let m of this.world.monsters) {
            if (this.getViewCircle().impact(m.getBodyCircle())) {
                this.target = m;
                this.dirction = this.target.pos.sub(this.pos).to1();
                return;
            }
        }
    }

    /**
     * 释放目标
     */
    loseTarget() {
        this.target = null;
    }

    /**
     * 普通进攻
     */
    attack() {
        this.refreshTarget();
        if (this.target === null || this.target === undefined || this.target.isDead()) {
            return;
        }
        // 进攻目标
        let line = new Line(this.pos, this.pos.plus(this.dirction.mul(this.rayLen)));
        for (let m of this.world.monsters) {
            if (line.intersectWithCircle(m.getBodyCircle())) {
                m.hpChange(-this.damage);
            }
        }
        let e = new EffectLine(line.PosStart, line.PosEnd);
        e.line.setStrokeColor(255, 10, 0, 1);
        e.line.strokeWidth = 1;
        e.duration = 1;
        this.world.addEffect(e);
        // 目标是否已经死亡
        if (this.target.isDead()) {
            this.loseTarget();
        }
    }

    /**
     * 转圈扫描进攻
     */
    scanningAttack() {
        // 旋转自动
        let theta = this.scanningSpeed * this.liveTime;
        this.dirction = new Vector(Math.sin(theta), Math.cos(theta));
        // 进攻目标
        let line = new Line(this.pos, this.pos.plus(this.dirction.mul(this.rayLen)));
        for (let m of this.world.monsters) {
            if (line.intersectWithCircle(m.getBodyCircle())) {
                m.hpChange(-this.damage);
            }
        }
        let e = new EffectLine(line.PosStart, line.PosEnd);
        e.line.setStrokeColor(255, 10, 0, 1);
        e.line.strokeWidth = 1;
        e.duration = 1;
        this.world.addEffect(e);
    }

    goStep() {
        super.goStep();
        this.attackFunc();
    }
}
