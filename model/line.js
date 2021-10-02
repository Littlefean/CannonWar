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
        this.len = p1.sub(p2).abs();

        this.strokeColorStr = 'black';
        this.strokeWidth = 1;
    }

    setStrokeColorStr(str) {
        this.strokeColorStr = str;
    }

    setStrokeColor(r, g, b, a) {
        this.strokeColorStr = `rgba(${r},${g},${b},${a})`;
    }

    render(ctx) {
        ctx.strokeStyle = this.strokeColorStr;
        ctx.lineWidth = this.strokeWidth;
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.closePath();
        ctx.stroke();
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
        // let ABC = this.getABC();
        // let dist1 = ABC.A * c.x + ABC.B * c.y + ABC.C;
        // dist1 *= dist1;
        // let dist2 = (ABC.A * ABC.A + ABC.B * ABC.B) * c.r * c.r;
        // if (dist1 > dist2) {
        //     //圆心到直线p1p2的距离大于半径，不相交
        //     return false;
        // }
        // let angle1 = (c.x - this.x1) * (this.x2 - this.x1) + (c.y - this.y1) * (this.y2 - this.y1);
        // let angle2 = (c.x - this.x2) * (this.x1 - this.x2) + (c.y - this.y2) * (this.y1 - this.y2);
        // return angle1 > 0 && angle2 > 0;
    }

    /**
     * 求出一般式方程
     * 返回abc三个系数
     */
    getABC() {
        let a = this.y2 - this.y1;
        let b = this.x1 - this.y2;
        let g = this.gcd(a, b);
        a /= g;
        b /= g;
        let c = -(a * this.x1 + b * this.x2);
        return {A: a, B: b, C: c};
    }

    gcd(m, n) {
        //辗转相除法 求最大公约数
        let u = +m, v = +n, t = v;
        while (v !== 0) {
            t = u % v;
            u = v;
            v = t;
        }
        return u
    }
}
