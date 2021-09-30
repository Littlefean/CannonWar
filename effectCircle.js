/**
 * 特效圆 用于渲染出动画效果
 * by littlefean
 */

class EffectCircle extends Effect {

    constructor(pos) {
        super();
        this.animationFunc = this.flashAnimation;
        this.circle = new Circle(pos.x, pos.y, 10);
    }

    /**
     * 闪黄光特效
     * 用于火炮子弹爆炸
     */
    flashAnimation() {
        this.circle.setStrokeWidth(0);
        this.circle.setStrokeColorStr("transparent");
        this.circle.setColor(255, 255, 0, Functions.timeRateAlpha(this.time / this.duration));
    }

    /**
     * 炮塔被摧毁的特效
     */
    destroyAnimation() {
        this.circle.setColor(0, 0, 0, Functions.timeRateAlpha(this.time / this.duration));
        this.circle.r = this.time * 10;
    }

    goStep() {
        super.goStep();
        this.animationFunc();
    }

    render(ctx) {
        this.circle.render(ctx);
    }
}
