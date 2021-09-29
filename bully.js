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
        this.bombDamage = 0;
        this.bombRange = 0;

        // 穿甲炮弹的特性
        this.throughable = false;
        this.throughCutNum = 0;  // 每次削减量

        // 子弹颜色
        this.bodyColor = [100, 23, 1, 0];
        this.bodyStrokeWidth = 1;
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
                    // console.log("穿甲弹，穿过");
                    if (this.r <= 0) {
                        this.remove();
                        break;
                    }
                    this.bodyRadiusChange(-this.throughCutNum);
                    continue;  // todo
                }
                this.boom();
                this.remove();
                break; // 一个子弹只能打到一个怪物身上
            }
        }
    }

    goStep() {
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
        let bC = new Circle(this.pos.x, this.pos.y, this.bombRange);
        for (let m of world.monsters) {
            if (m.getBodyCircle().impact(bC)) {
                m.hpChange(-this.bombDamage);
            }
        }
        let e = new SpecialEffect(this.pos.copy());
        e.r = this.bombRange;
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
