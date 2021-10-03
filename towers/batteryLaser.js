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
        this.attackFunc = this.laserAttack;

        this.hpInit(5000);
        this.price = 1000 // 这个炮塔需要花多少钱来买

        this.laserBaseDamage = 100;  // 直接打中的激光炮的伤害
        this.laserFreezeMax = 10;  // 多少个时间刻度
        this.laserFreezeNow = 0;   // 当前准别程度
        this.laserMaxDamage = 10000;  // 最大蓄力强度
        this.laserDamageAdd = 0;  // 目前已经蓄力的攻击力存储
        this.laserDamagePreAdd = 5;  // 蓄力后每个tick增加多少攻击力
    }

    goStep() {
        super.goStep();
        this.attackFunc();
        this.laserFreezeChange(1);
        this.addDamage();
    }

    /**
     * 以电击的方式进行攻击
     * 这个能够进行电击传导
     */
    zapAttack() {
        // 冷却好了，递归
        if (this.laserFreezeNow === this.laserFreezeMax) {
            let monsterSet = new Set();
            let len = this.rangeR;  // 一次闪电的长度 暂时不打算让它随着递归的变化而变化
            let nowPos = this.pos.copy();  // 当前闪电发射的起点
            let maxCount = 10;  // 允许递归的最大次数
            let damageMultipleRate = 5; // 每多打一个目标，攻击伤害就翻多少倍
            let zapDamage = this.laserBaseDamage + this.laserDamageAdd;
            let _width = 2;
            let attacked = false;

            let dfs = () => {
                let find = false;  // 是否找到下一个可以电击的怪物
                // 检查每一个怪物
                for (let m of this.world.monsters) {

                    let cc = new Circle(nowPos.x, nowPos.y, len);
                    if (cc.impact(m.getBodyCircle())) {
                        // 是寻找范围内的怪物

                        if (!monsterSet.has(m)) {
                            // 这个怪物不在范围内
                            find = true;
                            // 攻击这个怪物
                            zapDamage *= damageMultipleRate;

                            m.hpChange(-zapDamage);
                            monsterSet.add(m);
                            attacked = true;

                            // 添加一段特效
                            let e = new EffectLine(nowPos, m.pos);
                            e.duration = 20;
                            _width *= 2;
                            e.initLineStyle(new MyColor(0, 200, 255, 1), _width);
                            e.animationFunc = e.laserAnimation;
                            this.world.addEffect(e);

                            nowPos = m.pos.copy();
                            break;
                        }
                    }
                }
                if (find) {
                    maxCount--;
                    if (maxCount > 0) {
                        dfs();
                    }
                }
            }
            dfs();
            if (attacked) {
                // 归零
                this.laserFreezeNow = 0;
                this.laserDamageAdd = 0;
            }
        }
    }

    /**
     * 以地震的方式进行攻击
     */
    earthquakeAttack() {
        let isAttacked = false;
        for (let m of this.world.monsters) {
            if (this.getViewCircle().impact(m.getBodyCircle())) {
                // 准备攻击这个怪物
                if (this.laserFreezeNow === this.laserFreezeMax) {
                    // 冷却好了，开始进攻
                    let d = this.laserBaseDamage + this.laserDamageAdd;
                    m.hpChange(-d);
                    isAttacked = true;
                }
            }
        }
        if (isAttacked) {
            this.laserFreezeNow = 0;
            this.laserDamageAdd = 0;
            // 添加特效
            let c = new EffectCircle(this.pos);
            c.circle.r = this.rangeR;
            c.duration = 10;
            c.animationFunc = c.flashBrownAnimation;
            this.world.addEffect(c);
        }
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
     * 返回这个炮塔当前是否有目标
     * @returns {boolean} 是否有目标
     */
    haveTarget() {
        return !(this.target === null || this.target === undefined || this.target.isDead());
    }

    /**
     * 以镭射炮的方式进行攻击
     */
    laserAttack() {
        // 先获取目标
        this.getTarget();

        if (!this.haveTarget()) {
            return;
        }
        // 准备攻击这个怪物
        if (this.laserFreezeNow === this.laserFreezeMax) {
            // 冷却好了，开始进攻
            let d = this.laserBaseDamage + this.laserDamageAdd;
            this.laserFreezeNow = 0;
            this.laserDamageAdd = 0;
            this.target.hpChange(-d);

            // 添加特效
            let e = new EffectLine(this.pos, this.target.pos);
            e.initLineStyle(new MyColor(0, 100, 255, 0.7), 50);
            e.animationFunc = e.laserAnimation;
            e.duration = 10;
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
