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
        this.lineColor = [255, 0, 0, 1];

        this.animationFunc = this.flashAnimation;
    }

    flashAnimation() {
        this.lineColor = [this.lineColor[0], this.lineColor[1], this.lineColor[2],
            Functions.timeRateAlpha(this.time / this.duration)];
    }

    goStep() {
        super.goStep();
        this.animationFunc();
        console.log(this.line.strokeColorStr);
        // alert(this.lineColor);
    }

    render(ctx) {
        this.line.setStrokeColor(...this.lineColor);
        this.line.render(ctx);
    }
}
