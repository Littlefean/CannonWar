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
        this.animationFunc = this.flashAnimation;
    }

    /**
     * 初始化特效线的颜色
     * @param color {MyColor}
     * @param width {Number}
     */
    initLineStyle(color, width) {
        this.line.strokeWidth = width;
        this.line.strokeColor = color;
    }

    randomColorAnimation() {
        let c = 10;
        this.line.strokeColor.change(Math.random() * c, Math.random() * c, Math.random() * c, 1);
    }

    /**
     * 线淡出动画
     */
    flashAnimation() {
        this.line.strokeColor.changeAlpha(Functions.timeRateAlpha(this.time / this.duration));
    }

    /**
     * 线变细动画
     */
    laserAnimation() {
        // 动态添加一个临时属性
        if (this.line.initWidth === undefined || this.line.initWidth === null) {
            this.line.initWidth = this.line.strokeWidth;
        }
        this.line.strokeWidth = Functions.timeRateAlpha(this.time / this.duration) * this.line.initWidth;
        // console.log(this.line.strokeWidth);
        // this.line.strokeWidth *= this.time / this.duration;
        // this.line.strokeWidth *= 0.01;
        // this.line.strokeColor.changeAlpha(Functions.timeRateAlpha(this.time / this.duration));
    }

    goStep() {
        super.goStep();
        this.animationFunc();
    }

    render(ctx) {
        this.line.render(ctx);
    }
}
