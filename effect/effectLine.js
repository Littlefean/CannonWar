/**
 * 特效线
 * by littlefean
 */

class EffectLine extends Effect {
    /**
     *
     * @param p1 {Vector} 起点
     * @param p2 {Vector} 终点
     */
    constructor(p1, p2) {
        super();
        this.line = new Line(p1, p2);
    }

    render(ctx) {
        this.line.render(ctx);
    }
}
