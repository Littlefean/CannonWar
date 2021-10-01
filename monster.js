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
        this.speedNumb = 1; // 指向目的地方向的速度适量的倍数 用于设置
        this.speedFreezeNumb = 1;
        this.minFreezeNum = 0.2;  // 冰冻速度削减属性不能低于这个数值，如果将这个数字设置为1，表示该怪物免疫冰冻

        this.maxSpeedN = 15;  // 怪物的最大速度通常不能超过这个值
        this.burnRate = 0;  // 当前燃烧率 [0, 1]，怪物每一个tick会掉落总体血量的这么多倍数
        this.maxBurnRate = 0.005;  // 通常怪物的最大燃烧速率是 %，如果设置为0则表示免疫燃烧。

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

        // 穿过特性
        this.throwAble = false;

        // 场特性
        this.haveGArea = false;
        this.gAreaR = 0;  // 引力场半径
        this.gAreaNum = 0;  // 引力场强度
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
        this.speed = this.destination.sub(this.pos).to1().mul(this.speedNumb * this.speedFreezeNumb);
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
        /**
         * 这一段函数会造成一个bug
         * todo 游戏运行一段时间后会突然报错，就是copy这一行，然后突然多了一大堆怪物。卡得要死
         * @type {*|Vector}
         */
        let reversedSpeed = this.speed.copy();
        reversedSpeed = reversedSpeed.mul(-1 * rate);
        this.pos.add(reversedSpeed)
    }

    /**
     * 对周围产生引力场的效果
     */
    gravyPower() {
        if (this.haveGArea) {
            for (let b of this.world.getAllBuildingArr()) {
                if (this.pos.dis(b.pos) < this.gAreaR) {
                    b.speed = this.pos.sub(b.pos).to1().mul(this.gAreaNum);
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

    goStep() {
        super.goStep();
        // 死亡检测
        if (this.isDead()) {
            // 自爆
            this.bombSelf();
            this.remove();
        }
        this.gravyPower();
        // 碰撞检测
        // 与纯建筑碰撞
        for (let b of this.world.buildings) {
            if (this.getBodyCircle().impact(b.getBodyCircle())) {
                // 自爆
                this.bombSelf();
                b.hpChange(-this.colishDamage);
                // 没有穿过碾压属性直接清除自己
                if (!this.throwAble) {
                    console.log("clear...")
                    this.remove();
                    break;
                }
            }
        }
        // 与子炮塔碰撞
        for (let b of this.world.batterys) {
            if (this.getBodyCircle().impact(b.getBodyCircle())) {
                b.hpChange(-this.colishDamage);
                if (!this.throwAble) {
                    console.log("clear...")
                    this.remove();
                    break;
                }
            }
        }
        // 效果增加
        // 燃烧
        if (this.burnRate > this.maxBurnRate) {
            this.burnRate = this.maxBurnRate;
        }
        this.hpChange(-this.burnRate * this.maxHp);
        // 冻结 限制更新速度
        if (this.minFreezeNum > this.speedFreezeNumb) {
            this.minFreezeNum = this.speedFreezeNumb;
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

        // 渲染爆炸范围
        if (this.bombSelfAble) {
            let c = new Circle(this.pos.x, this.pos.y, this.bombSelfRange);
            c.renderView(ctx);
        }
        // 引力范围
        if (this.haveGArea) {
            new Circle(this.pos.x, this.pos.y, this.gAreaR).renderView(ctx);
        }
    }
}
