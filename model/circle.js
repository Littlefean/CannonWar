/**
 * 抽象圆形图形
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

        this.strokeColor = MyColor.GRAY();
        this.fillColor = MyColor.BLACK();
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
        // console.log(this.fillColor);
        ctx.fillStyle = this.fillColor.toStringRGBA();  // todo bug 这个方法没有
        ctx.lineWidth = this.strokeWidth;
        ctx.strokeStyle = this.strokeColor.toStringRGBA();
        ctx.beginPath();
        ctx.arc(standardize(this.x), standardize(this.y), standardize(this.r), 0, 2 * Math.PI);
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
        this.fillColor = MyColor.Transparent();
        this.setStrokeWidth(0.1);
        this.strokeColor = MyColor.BLACK();
        this.render(ctx);
    }

}
