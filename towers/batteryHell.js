/**
 * 地狱塔
 * by littlefean
 */
class BatteryHell extends Battery {
    constructor(x, y, world) {
        super(x, y, world);
        this.name = "地狱塔";
        this.gameType = "Battery";
        this.clock = 1.1  // 设置为一个小数类型，表示这个炮塔永远不会发射圆圈形的炮弹

        this.target = null;  // 目标怪物
        this.rangeR = 200;
        this.hpInit(5000);
        this.price = 1000 // 这个炮塔需要花多少钱来买

        this.nowDamage = 1;
        this.targetLiveTime = 0;  // 锁定目标的时间
    }

    /**
     * 寻找目标
     */
    getTarget() {
        for (let m of this.world.monsters) {
            if (this.getViewCircle().impact(m.getBodyCircle())) {
                this.target = m;
                return;
            }
        }
    }

    attack() {
        if (this.target === null || this.target === undefined || this.target.isDead()) {
            this.targetLiveTime = 0;
            return;
        }
        // 准备攻击这个怪物
        if (this.laserFreezeNow === this.laserFreezeMax) {
            // 冷却好了，开始进攻
            // this.target.hpChange(-Functions.timeHellTowerDamage_E(this.targetLiveTime));
            this.target.hpChange(-Functions.timeHellTowerDamage(this.targetLiveTime));
            this.targetLiveTime++;
            // 添加特效
            let e = new EffectLine(this.pos, this.target.pos);
            e.initLineStyle(new MyColor(255, 200, 2, 0.8), 5);
            // e.line.setStrokeColor(255, 200, 2, 0.8);
            // e.line.strokeWidth = 5;
            this.world.addEffect(e);
            e = new EffectLine(this.pos, this.target.pos);
            e.initLineStyle(new MyColor(255, 0, 2, 1), 2);
            // e.line.setStrokeColor(255, 0, 2, 1);
            // e.line.strokeWidth = 2;
            this.world.addEffect(e);
        }
        if (this.target.isDead()) {
            this.targetLiveTime = 0;
            this.target = null;
        }
    }

    goStep() {
        super.goStep();
        this.getTarget();
        this.attack();
    }
}
