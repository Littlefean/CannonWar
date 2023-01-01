/**
 *
 * by littlefean
 */
class Rectangle {
    constructor(x, y, w, h) {
        this.pos = new Vector(x, y); // 一个角的顶点
        this.width = w;
        this.height = h;
        this.strokeWidth = 2;
        this.color = "black";
        this.strokeColor = "black";
    }

    setStrokeWidth(n) {
        this.strokeWidth = n;
    }

    setFillColor(r, g, b, a) {
        this.color = `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    setStrokeColor(r, g, b) {
        this.strokeColor = `rgb(${r}, ${g}, ${b})`;
    }

    render(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.lineWidth = String(this.strokeWidth);
        ctx.strokeStyle = this.strokeColor;
        ctx.rect(standardize(this.pos.x), standardize(this.pos.y), standardize(this.width), standardize(this.height));
        ctx.stroke();
        ctx.fill();
    }
}
