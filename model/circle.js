/**
 *
 * by littlefean
 */
class Circle {
    /**
     *
     * @param x {Number}
     * @param y {Number}
     * @param r {Number}
     */
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.pos = new Vector(x, y);
        this.strokeWidth = 2; // px

        this.strokeColor = Color.GRAY();
        this.color = Color.BLACK();
    }

    /**
     * 检测两圆球是否碰撞
     * @param otherC {Circle}
     */
    impact(otherC) {
        let thisLoc = new Vector(this.x, this.y);
        let otherLoc = new Vector(otherC.x, otherC.y);
        return thisLoc.dis(otherLoc) <= this.r + otherC.r;
    }

    setStrokeWidth(n) {
        this.strokeWidth = n;
    }

    render(ctx) {
        ctx.fillStyle = this.color.toStringRGBA();
        ctx.lineWidth = this.strokeWidth;
        ctx.strokeStyle = this.strokeColor.toStringRGBA();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }

    /**
     * 判断某一个点是否在园内
     * @param x {Number}
     * @param y {Number}
     */
    pointIn(x, y) {
        let p = new Vector(x, y);
        return p.sub(this.pos).abs() < this.r;
    }

    /**
     * 当这个圆是视野圆形的时候，渲染形状
     */
    renderView(ctx) {
        this.color = Color.Transparent();
        this.setStrokeWidth(0.1);
        this.strokeColor = Color.BLACK();
        this.render(ctx);
    }

}
