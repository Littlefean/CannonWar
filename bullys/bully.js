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

        this.dr = 0;  // 这个子弹的半径每一个时间刻度发生的变化量
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
        this.bodyColor = new MyColor(100, 23, 1, 0);
        this.bodyStrokeWidth = 1;

        // 单次攻击减速特性
        this.freezeCutDown = 1;  // 越接近1表示减速效果越不明显

        // 分裂子弹特性
        this.splitAble = false;
        this.splitNum = 5;  // 分裂后子弹的数量
        this.splitRandomV = 1;
        this.splitBully = BullyFinally.Normal;
        this.splitRangeRate = 100;  // 分裂后的子弹可以存在的攻击范围 px
        this.isSliptedBully = false; // 当前这个子弹是不是分裂后的小子弹

        this.repel = 0;  // 单次击退能力 这个数值会让怪物倒退一步距离，这个数值是这一步距离乘以的倍数

        // 烟雾子弹特性
        this.dRGB = [0, 0, 0, 0]; // 随着时间迭代，每次颜色变化量
        this.burnRateAdd = 0;  // 每次击中增加 燃烧率

        this.laserDestoryAble = true;  // 是否可以被激光摧毁
    }

    goStep() {
        super.goStep();
        this.move();
        this.rChange();
        this.bodyColor.change(...this.dRGB);
        // super.bodyColorChange(...this.dRGB);


        this.collide(this.world);
        if (this.isSliptedBully) {
            if (this.pos.dis(this.originalPos) > this.splitRangeRate) {
                if (this.splitAble) {
                    // 这个分裂的子弹是否还可以继续分裂
                    this.split();
                }
                this.remove();
            }
        }
    }

    /**
     * 子弹本身与怪物的碰撞检测
     * @param world {World}
     */
    collide(world) {
        let c = new Circle(this.pos.x, this.pos.y, this.r); // 当前子弹形状
        for (let m of world.monsters) {
            if (c.impact(m.getBodyCircle())) {
                // 直接击中造成伤害
                m.hpChange(-this.damage);
                // 直接击中造成改变速速效果
                m.speedFreezeNumb *= this.freezeCutDown;  // 每次减速都会叠加
                // 燃烧属性
                if (this.burnRateAdd > 0) {
                    m.burnRate += this.burnRateAdd;
                    if (m.speedFreezeNumb < 1) {
                        // 清除冰冻属性
                        m.speedFreezeNumb = 1
                    }
                    m.bodyColor.change(+20, -1, -1, 0);
                }

                // 可以穿过
                if (this.throughable) {
                    // 被削减掉了
                    if (this.r <= 0) {
                        this.remove();
                        break;
                    }
                    this.bodyRadiusChange(-this.throughCutNum);
                    continue;
                }
                // 发生爆炸
                this.boom();
                // 造成击退
                // m.backMove(this.repel);
                m.changedSpeed.add(this.speed.mul(this.repel));
                // 发生分裂
                this.split();
                // 删除子弹
                this.remove();
                break;
            }
        }
    }

    /**
     * 子弹每走一步 半径的改变量
     */
    rChange() {
        this.r += this.dr;
        if (this.r < 0) {
            this.r = 0;
        }
    }

    /**
     * 更改子弹的伤害
     */
    damageChange(dn) {
        this.damage += dn;
        if (this.damage < 0) {
            this.damage = 0;
        }
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
     * 子弹分裂
     */
    split() {
        if (this.splitAble) {
            // console.log("开始分裂")
            for (let i = 0; i < this.splitNum; i++) {
                let b = this.splitBully();
                b.isSliptedBully = true;
                b.world = this.world;
                b.pos = this.pos.copy();
                b.originalPos = this.pos.copy();
                b.speed = Vector.randCircle().mul(this.splitRandomV);
                b.splitRangeRate = this.splitRangeRate;

                // 添加到世界
                this.world.othersBullys.push(b);
                // console.log("分裂蛋的数量：", this.world.othersBullys.length);
                // console.log("分裂蛋的数量：", this.world.othersBullys);
            }
        }
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
     * 产生一个冷却圆范围，让怪物都减速，
     * 改变怪物身体颜色，并添加一个特效圆。
     */
    bombFreeze() {
        // 爆炸区域圆
        let bC = new Circle(this.pos.x, this.pos.y, this.bombRange);
        for (let m of this.world.monsters) {
            if (m.getBodyCircle().impact(bC)) {
                // 均摊伤害
                m.hpChange(-this.bombDamage);
                m.speedFreezeNumb *= this.freezeCutDown;  // 每次减速都会叠加
                m.bodyColor.change(-1, -1, 20, 0);

                // 清除燃烧属性
                m.burnRate = 0;
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
        if (this.father !== null) {
            return diff > this.father.rangeR * this.slideRate;
        } else {
            return false;  // todo 独立子弹判断出界
        }
    }

    render(ctx) {
        let c = this.getBodyCircle();
        c.fillColor = this.bodyColor;
        c.setStrokeWidth(this.bodyStrokeWidth);
        c.render(ctx);
    }
}
