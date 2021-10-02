/**
 * 激光塔类型的防御炮塔
 * by littlefean
 */
class BatteryLaser extends Battery {
    constructor(x, y, world) {
        super(x, y, world);
        this.name = "特殊类型炮塔";
        this.gameType = "Battery";
        this.clock = 1.1  // 设置为一个小数类型，表示这个炮塔永远不会发射圆圈形的炮弹

        this.target = null;  // 目标怪物

        this.hpInit(5000);
        this.price = 1000 // 这个炮塔需要花多少钱来买

        this.laserDamage = 100;  // 直接打中的激光炮的伤害
        this.laserFreezeMax = 10;  // 多少个时间刻度
        this.laserFreezeNow = 0;   // 当前准别程度
        this.laserMaxDamage = 10000;  // 最大蓄力强度
        this.laserDamageAdd = 0;  // 目前已经蓄力的攻击力存储
        this.laserDamagePreAdd = 5;  // 蓄力后每个tick增加多少攻击力
    }

    goStep() {
        super.goStep();
        this.getTarget();
        this.attack();
        this.laserFreezeChange(1);
        this.addDamage();
    }

    /**
     * 蓄力
     */
    addDamage() {
        if (this.laserFreezeNow === this.laserFreezeMax) {
            this.laserDamageAdd += this.laserDamagePreAdd;
            if (this.laserDamageAdd > this.laserMaxDamage) {
                this.laserDamageAdd = this.laserMaxDamage;
            }
        }
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

    /**
     * 直接攻击
     */
    attack() {
        if (this.target === null || this.target === undefined || this.target.isDead()) {
            return;
        }
        // 准备攻击这个怪物
        if (this.laserFreezeNow === this.laserFreezeMax) {
            // 冷却好了，开始进攻
            let d = this.laserDamage + this.laserDamageAdd;
            this.laserFreezeNow = 0;
            this.laserDamageAdd = 0;
            this.target.hpChange(-d);
            // 添加特效
            let e = new EffectLine(this.pos, this.target.pos);
            e.line.setStrokeColor(0, 100, 255, 0.8);
            e.line.strokeWidth = 5;
            this.world.addEffect(e);
        }
    }

    render(ctx) {
        super.render(ctx);

        // 渲染冷却
        let barH = this.hpBarHeight;
        let rate = this.laserFreezeNow / this.laserFreezeMax;
        // 边框
        let rectB = new Rectangle(this.pos.x - this.r, this.pos.y + this.r + 2.5 * barH, this.r * 2, barH);
        rectB.setStrokeWidth(1);
        rectB.setFillColor(0, 0, 0, 0);
        rectB.setStrokeColor(1, 1, 1);
        rectB.render(ctx);
        // 填充
        let rect = new Rectangle(this.pos.x - this.r, this.pos.y + this.r + 2.5 * barH, this.r * 2 * rate, barH);
        rect.setStrokeWidth(0);
        rect.setFillColor(0, 12, 200, 0.5);
        rect.render(ctx);

        // 渲染蓄力
        rate = this.laserDamageAdd / this.laserMaxDamage;
        // 边框
        rectB = new Rectangle(this.pos.x - this.r, this.pos.y + this.r + 3.8 * barH, this.r * 2, barH);
        rectB.setStrokeWidth(1);
        rectB.setFillColor(0, 0, 0, 0);
        rectB.setStrokeColor(1, 1, 1);
        rectB.render(ctx);
        // 填充
        rect = new Rectangle(this.pos.x - this.r, this.pos.y + this.r + 3.8 * barH, this.r * 2 * rate, barH);
        rect.setStrokeWidth(0);
        rect.setFillColor(255, 1, 255, 0.5);
        rect.render(ctx);
    }

    laserFreezeChange(df) {
        this.laserFreezeNow += df;
        if (this.laserFreezeNow > this.laserFreezeMax) {
            this.laserFreezeNow = this.laserFreezeMax;
        }
        if (this.laserFreezeNow < 0) {
            this.laserFreezeNow = 0;
        }
    }


}
