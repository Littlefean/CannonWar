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
        // this.speed = speed;
        this.name = "默认怪物";
        this.speed = null;
        this.speedNumb = 1; // 指向目的地方向的速度适量的倍数
        this.hpInit(100);
        this.colishDamage = 100;
        this.r = 15;  // 身体半径
        this.addPrice = 10;  // 奖金
        this.destination = new Vector(this.world.width / 2, this.world.height / 2);  // 默认的目的地是中心点
        this.bodyColor = [25, 25, 25, 0.8];
        this.hpColor = [200, 20, 20, 0.5];

        this.changedSpeed = Vector.zero();  // 叠加一个被外力改变了的速度

        // 死亡自爆特性
        this.bombSelfAble = false;
        this.bombSelfRange = 100;
        this.bombSelfDamage = 500;
    }

    /**
     * 随机从边缘初始化一个
     */
    static randInit(world) {
        let res = new this(Vector.randRectBrim(0, world.width, 0, world.height), world);
        res.bodyStrokeColor = [0, 0, 0, 1];
        return res;
    }

    move() {
        // 使得速度朝着目标移动
        this.speed = this.destination.sub(this.pos).to1().mul(this.speedNumb);
        this.acceleration = this.destination.sub(this.pos).to1().mul(this.accelerationV);
        this.changedSpeed.add(this.acceleration);
        this.speed.add(this.changedSpeed);
        super.move();
    }

    /**
     * 击退一步
     * 用于被击退的效果
     * @param rate {Number}  后退的距离是前进一步的多少倍
     */
    backMove(rate) {
        let reversedSpeed = this.speed.copy();
        reversedSpeed = reversedSpeed.mul(-1 * rate);
        this.pos.add(reversedSpeed)
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
                    // console.log("爆炸伤害是：", damage);
                    b.hpChange(-Math.abs(damage));
                }
            }
            let e = new EffectCircle(this.pos.copy());
            e.animationFunc = e.flashRedAnimation;
            e.circle.r = this.bombSelfRange;
            this.world.addEffect(e);
        }
    }

    goStep() {
        super.goStep();
        // 死亡检测
        if (this.isDead()) {
            // 自爆
            this.bombSelf();
            this.remove();
        }
        // 碰撞检测
        for (let b of this.world.buildings) {
            if (this.getBodyCircle().impact(b.getBodyCircle())) {
                b.hpChange(-this.colishDamage);
                // 自爆
                this.bombSelf();
                this.remove();
                break;
            }
        }
        for (let b of this.world.batterys) {
            if (this.getBodyCircle().impact(b.getBodyCircle())) {
                b.hpChange(-this.colishDamage);
                this.remove();
                break;
            }
        }
        // 移动
        this.move();
    }

    render(ctx) {
        super.render(ctx);
        // 写上名字
        ctx.fillStyle = "black";
        ctx.font = "12px Microsoft YaHei";
        ctx.textAlign = "center";
        ctx.fillText(this.name, this.pos.x, this.pos.y + this.r * 1.5);

        //
        if (this.bombSelfAble) {
            let c = new Circle(this.pos.x, this.pos.y, this.bombSelfRange);
            c.renderView(ctx);
        }
    }
}
