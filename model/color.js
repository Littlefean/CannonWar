/**
 *
 * by littlefean
 */
class Color {
    /**
     *
     * @param r {Number}
     * @param g {Number}
     * @param b {Number}
     * @param a {Number}
     */
    constructor(r, g, b, a) {
        this.r = this.limit0_255(r);
        this.g = this.limit0_255(g);
        this.b = this.limit0_255(b);
        this.a = this.limit0_1(a);
    }

    setRGB(r, g, b) {
        this.r = this.limit0_255(r);
        this.g = this.limit0_255(g);
        this.b = this.limit0_255(b);
    }

    setRGBA(r, g, b, a) {
        this.r = this.limit0_255(r);
        this.g = this.limit0_255(g);
        this.b = this.limit0_255(b);
        this.a = this.limit0_1(a);
    }

    /**
     * 改变自身的颜色
     * @param dr 改变量增量
     * @param dg 改变量增量
     * @param db 改变量增量
     * @param da 改变量增量
     */
    change(dr, dg, db, da) {
        this.r += dr;
        this.g += dg;
        this.b += db;
        this.a += da;

        this.r = this.limit0_255(this.r);
        this.g = this.limit0_255(this.g);
        this.b = this.limit0_255(this.b);
        this.a = this.limit0_1(this.a);
    }

    toArr() {
        return [this.r, this.g, this.b, this.a];
    }

    static BLACK() {
        return new Color(0, 0, 0, 1);
    }

    static GRAY() {
        return new Color(60, 63, 65, 1);
    }

    static Transparent() {
        return new Color(0, 0, 0, 0);
    }

    toStringRGB() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }

    toStringRGBA() {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }

    limit0_255(n) {
        let res = n;
        if (n > 255) {
            res = 255;
        }
        if (n < 0) {
            res = 0;
        }
        return res;
    }

    limit0_1(n) {
        let res = n;
        if (n > 1) {
            res = 1;
        }
        if (n < 0) {
            res = 0;
        }
        return res;
    }
}
