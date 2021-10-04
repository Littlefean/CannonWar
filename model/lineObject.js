/**
 * 线性物体类
 * by littlefean
 */
class LineObject extends Line {
    /**
     *
     * @param line {Line}
     * @param world {World}
     */
    constructor(line, world) {
        super(line.PosStart, line.PosEnd);
        this.speed = Vector.zero();

        // this.acceleration = new Vector(0, 0);
        // this.maxSpeedN = 100;  // 指的是速度向量的长度不会超过这个值

    }

    lineGoStep() {
        super.move(this.speed);
    }
}
