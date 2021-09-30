/**
 *
 * by littlefean
 */
class Monster extends CircleObject {
    /**
     *
     * @param pos {Vector}
     * @param speed {Vector}
     * @param world {World}
     */
    constructor(pos, speed, world) {
        super(pos, world);
        this.gameType = "Monster";
        this.speed = speed;
        this.speedNumb = 1; // 指向目的地方向的速度适量的倍数
        this.hpInit(100);
        this.colishDamage = 100;
        this.r = 10 + Math.random() * 10;  // 身体半径
        this.addPrice = 10;  // 奖金
        this.destination = new Vector(this.world.width / 2, this.world.height / 2);  // 默认的目的地是中心点
        this.bodyColor = [25, 25, 25, 0.8];
        this.hpColor = [200, 20, 20, 0.5];
    }

    /**
     * 随机从边缘初始化一个
     */
    static randInit(world) {
        let vp = Vector.randRectBrim(0, 1000, 0, 600);
        let yMax = 600;
        let xMax = 1000;
        let speedY = -(2 / yMax) * (vp.y - yMax / 2);
        let speedX = -(2 / xMax) * (vp.x - xMax / 2);
        return new this(vp, new Vector(speedX, speedY), world);
    }

    move() {
        this.speed = this.destination.sub(this.pos).to1().mul(this.speedNumb);
        super.move();
    }

    goStep() {
        super.goStep();
        // 死亡检测
        if (this.isDead()) {
            this.remove();
        }
        // 碰撞检测
        for (let b of this.world.buildings) {
            if (this.getBodyCircle().impact(b.getBodyCircle())) {
                b.hpChange(-this.colishDamage);
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
}
