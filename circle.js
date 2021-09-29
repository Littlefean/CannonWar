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
        this.strokeWidth = 2; // px
        this.strokeColor = "black";
        this.color = "rgb(0, 0, 0)";
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

    /**
     *
     * @param r {Number}
     * @param g {Number}
     * @param b {Number}
     * @param a {Number}
     */
    setColor(r, g, b, a) {
        this.color = `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    setColorStr(cStr) {
        this.color = cStr;
    }

    setStrokeWidth(n) {
        this.strokeWidth = n;
    }

    setStrokeColorStr(cStr) {
        this.strokeColor = cStr;
    }
    setStrokeColor(r, g, b, a) {
        this.strokeColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    /**
     *
     * @param r {Number}
     * @param g {Number}
     * @param b {Number}
     * @param a {Number}
     */
    setStrokeColorRGBA(r, g, b, a) {
        this.strokeColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.lineWidth = this.strokeWidth;
        ctx.strokeStyle = this.strokeColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    }

    /**
     * 当这个圆是视野圆形的时候，渲染形状
     */
    renderView(ctx) {
        this.setColorStr("transparent");
        this.setStrokeWidth(0.1);
        this.render(ctx);
    }

}
