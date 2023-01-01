/**
 *
 * by littlefean
 */
class Line {
    /**
     *
     * @param p1 {Vector} 起点
     * @param p2 {Vector} 终点
     */
    constructor(p1, p2) {
        this.PosStart = p1;
        this.PosEnd = p2;
        this.x1 = p1.x;
        this.x2 = p2.x;
        this.y1 = p1.y;
        this.y2 = p2.y;

        this.strokeColor = MyColor.BLACK();
        this.strokeWidth = 1;
    }

    /**
     * 修改这个线的位置，通过两个端点
     * @param p1 {Vector} 起点
     * @param p2 {Vector} 终点
     */
    resetLine(p1, p2) {
        this.PosStart = p1;
        this.PosEnd = p2;
        this.x1 = p1.x;
        this.x2 = p2.x;
        this.y1 = p1.y;
        this.y2 = p2.y;
    }

    /**
     * 平移这个线段到某个位置上
     * @param loc {Vector} 平移到某个中心位置上
     */
    moveTo(loc) {
        let oldCenter = this.getCenter();
        let dv = loc.sub(oldCenter);
        this.resetLine(this.PosStart.plus(dv), this.PosEnd.plus(dv));
    }

    /**
     * 将线段平移一段距离
     * @param vec {Vector}
     */
    move(vec) {
        this.resetLine(this.PosStart.plus(vec), this.PosEnd.plus(vec));
    }

    render(ctx) {
        ctx.strokeStyle = this.strokeColor.toStringRGBA();
        ctx.lineWidth = this.strokeWidth;
        ctx.beginPath();
        ctx.moveTo(standardize(this.x1), standardize(this.y1));
        ctx.lineTo(standardize(this.x2), standardize(this.y2));
        ctx.closePath();
        ctx.stroke();
    }

    /**
     * 获取这个直线的中心点
     */
    getCenter() {
        return new Vector((this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2)
    }

    /**
     * 判断该直线是否与圆碰撞
     * @param c {Circle}
     */
    intersectWithCircle(c) {
        // 线段的两端点a、b分别在圆的内外时，一定碰撞。
        // 线段的两端点a、b均在圆内部时，一定碰撞。
        if (c.pointIn(this.x1, this.y1) || c.pointIn(this.x2, this.y2)) {
            return true;
        }
        // 线段的两端点a、b均在圆的外部时，无法确定。
        let p1 = {x: this.x1, y: this.y1};
        let p2 = {x: this.x2, y: this.y2};
        let A = p1.y - p2.y;
        let B = p2.x - p1.x;
        let C = p1.x * p2.y - p2.x * p1.y;
        //使用距离公式判断圆心到直线ax+by+c=0的距离是否大于半径
        let dist1 = A * c.x + B * c.y + C;
        dist1 *= dist1;
        let dist2 = (A * A + B * B) * c.r * c.r;
        if (dist1 > dist2)//圆心到直线p1p2的距离大于半径，不相交
            return false;
        let angle1 = (c.x - p1.x) * (p2.x - p1.x) + (c.y - p1.y) * (p2.y - p1.y);
        let angle2 = (c.x - p2.x) * (p1.x - p2.x) + (c.y - p2.y) * (p1.y - p2.y);
        //余弦为正，则是锐角，一定相交
        return angle1 > 0 && angle2 > 0;
    }
}
