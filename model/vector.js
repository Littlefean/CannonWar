/**
 *
 * by littlefean
 */
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(otherVector) {
        this.x += otherVector.x;
        this.y += otherVector.y;
    }

    /**
     * 相对add函数来说，这个是有返回值的
     * @param otherVector
     * @returns {Vector}
     */
    plus(otherVector) {
        return new Vector(this.x + otherVector.x, this.y + otherVector.y);
    }

    /**
     * 归一化处理
     */
    to1() {
        let a = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
        let x = this.x /= a;
        let y = this.y /= a;
        return new Vector(x, y);
    }

    /**
     *
     * @param otherVector {Vector}
     */
    sub(otherVector) {
        let x = this.x - otherVector.x;
        let y = this.y - otherVector.y;
        return new Vector(x, y);
    }

    /**
     * 乘以多少倍
     * @param n
     * @returns {Vector}
     */
    mul(n) {
        return new Vector(this.x * n, this.y * n);
    }

    /**
     * 获取两个位置向量之间的距离
     * @param other
     */
    dis(other) {
        let diff = Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2);
        return Math.sqrt(diff);
    }

    /**
     * 取模
     * @returns {number}
     */
    abs() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    /**
     * 返回这个向量的弧度制形式数
     */
    toTheta() {
        let alpha = Math.atan(this.x / this.y);
        if (this.y < 0) {
            alpha *= -1;
        }
        return alpha;
    }

    /**
     * 将原有向量旋转并返回一个旋转后的向量
     */
    rotate(a) {
        if (a === 0) {
            return this;
        }
        let alpha = this.toTheta();
        alpha += a;
        let res = new Vector(Math.sin(alpha), Math.cos(alpha)).mul(this.abs());
        return res;
        // todo bug
        // let x = this.x * Math.cos(a) - this.y * Math.sin(a);
        // let y = this.x * Math.sin(a) - this.y * Math.cos(a);
        // return new Vector(x, y).to1().mul(this.abs());
    }

    /**
     * 一个点 p1 绕着旋转原点 p0 旋转 a 度
     返回旋转后的点
     https://jingyan.baidu.com/article/2c8c281dfbf3dd0009252a7b.html
     * @param p0 {Vector}
     * @param p1 {Vector}
     * @param a {Number}
     */
    static rotatePoint(p0, p1, a) {
        let ry0 = p0.y;
        let rx0 = p0.x;
        let x = p1.x;
        let y = p1.y;

        let cos = x => {
            return Math.cos(x);
        };
        let sin = x => {
            return Math.sin(x);
        };
        let x0 = (x - rx0) * cos(a) - (y - ry0) * sin(a) + rx0;
        let y0 = (x - rx0) * sin(a) + (y - ry0) * cos(a) + ry0;
        return new Vector(x0, y0);
    }

    /**
     * 将一个向量逆时针旋转90度
     */
    rotate90() {
        return new Vector(-this.y, this.x);
    }

    /**
     * 随机偏移
     * @param diff {Number} 便宜距离
     */
    deviation(diff) {
        let diffX = Math.random() * diff - diff / 2;
        let diffY = Math.random() * diff - diff / 2;
        let x = this.x + diffX;
        let y = this.y + diffY;
        return new Vector(x, y);
    }

    /**
     * 随机获得一个单位圆向量
     */
    static randCircle() {
        let a = Math.random() * 2 * Math.PI;
        let x = Math.sin(a);
        let y = Math.cos(a);
        return new Vector(x, y);
    }

    static zero() {
        return new Vector(0, 0);
    }

    /**
     * 随机矩形边缘位置
     * @param xMin {Number}
     * @param xMax {Number}
     * @param yMin {Number}
     * @param yMax {Number}
     */
    static randRectBrim(xMin, xMax, yMin, yMax) {
        let x, y;
        // 左右上下
        let rand = Math.random();
        if (rand < 0.25) {
            // 上边
            y = 0;
            x = Math.random() * (xMax - xMin);
        } else if (rand < 0.5) {
            // 下边
            y = (yMax - yMin);
            x = Math.random() * (xMax - xMin);
        } else if (rand < 0.75) {
            // 左边
            x = 0;
            y = Math.random() * (yMax - yMin);
        } else {
            // 右边
            x = (xMax - xMin);
            y = Math.random() * (yMax - yMin);
        }
        return new Vector(x, y);
    }

    toString() {
        return `(${this.x},${this.y})`
    }

    copy() {
        return new Vector(this.x, this.y);
    }
}
