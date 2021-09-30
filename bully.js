/**
 *
 * by littlefean
 */
class Bully extends CircleObject {
    /**
     *
     * @param pos {Vector}
     * @param speed {Vector} 速度
     * @param father {Battery}
     * @param damage {Number} 子弹伤害
     * @param r {Number} 子弹半径
     */
    constructor(pos, speed, father, damage, r) {
        super(pos, null);
        if (father !== null) {
            this.world = father.world;
        }
        this.hpInit(-1);

        this.speed = speed;
        this.r = r;

        this.originalPos = new Vector(this.pos.x, this.pos.y); // 最初发射点
        this.father = father;
        this.damage = damage;  // 击中伤害
        this.slideRate = 2;  // 子弹能够滑出自己炮塔视野的多少倍才会消失

        // 爆炸炮弹的特性
        this.haveBomb = false;
        this.bombDamage = 0;  // 这个应该是爆炸中心点的伤害
        this.bombRange = 0;
        this.bombFunc = this.bombFire;  // 默认是火炮的爆炸方式

        // 穿甲炮弹的特性
        this.throughable = false;
        this.throughCutNum = 0;  // 每次削减量

        // 子弹颜色
        this.bodyColor = [100, 23, 1, 0];
        this.bodyStrokeWidth = 1;

        // 单次攻击减速特性
        this.freezeCutDown = 0.98  // 越接近1表示减速效果越不明显
    }

    /**
     * 子弹本身与怪物的碰撞检测
     * @param world {World}
     */
    collide(world) {
        let c = new Circle(this.pos.x, this.pos.y, this.r); // 当前子弹形状
        for (let m of world.monsters) {
            if (c.impact(m.getBodyCircle())) {
                m.hpChange(-this.damage);
                if (this.throughable) {
                    if (this.r <= 0) {
                        this.remove();
                        break;
                    }
                    this.bodyRadiusChange(-this.throughCutNum);
                    continue;  // todo
                }
                this.boom();
                this.remove();
                break;
            }
        }
    }

    goStep() {
        super.goStep();
        this.move();
        this.collide(this.world);
    }

    /**
     * 子弹爆炸直接伤害效果
     */
    boom() {
        if (!this.haveBomb) {
            return;
        }
        this.bombFunc();
    }

    /**
     * 像火炮一样爆炸
     */
    bombFire() {
        // 爆炸区域圆
        let bC = new Circle(this.pos.x, this.pos.y, this.bombRange);
        for (let m of this.world.monsters) {
            if (m.getBodyCircle().impact(bC)) {
                let dis = this.pos.dis(m.pos);
                let damage = (1 - (dis / this.bombRange)) * this.bombDamage;
                m.hpChange(-Math.abs(damage));
            }
        }
        // 添加爆炸特效圆
        let e = new EffectCircle(this.pos.copy());
        e.circle.r = this.bombRange;
        this.world.addEffect(e);
    }

    /**
     * 像冰瓜投手一样
     */
    bombFreeze() {
        // 爆炸区域圆
        let bC = new Circle(this.pos.x, this.pos.y, this.bombRange);
        for (let m of this.world.monsters) {
            if (m.getBodyCircle().impact(bC)) {
                // 均摊伤害
                m.hpChange(-this.bombDamage);
                if (m.speedNumb > 0.2) {
                    m.speedNumb *= this.freezeCutDown;  // 每次减速都会叠加
                }
            }
        }
        // 添加爆炸特效圆
        let e = new EffectCircle(this.pos.copy());
        e.circle.r = this.bombRange;
        e.animationFunc = e.flashBlueAnimation;
        this.world.addEffect(e);
    }

    /**
     * 判断这个子弹是否超过了范围
     * @returns {boolean}
     */
    outTowerViewRange() {
        let diff = this.pos.dis(this.originalPos);
        return diff > this.father.rangeR * this.slideRate;
    }

    render(ctx) {
        let c = this.getBodyCircle();
        c.setColor(...this.bodyColor);
        c.setStrokeWidth(this.bodyStrokeWidth);
        c.render(ctx);
    }
}
