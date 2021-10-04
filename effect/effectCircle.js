/**
 * 特效圆 用于渲染出动画效果
 * by littlefean
 */

class EffectCircle extends Effect {

    constructor(pos) {
        super();
        this.animationFunc = this.flashFireAnimation;
        this.circle = new Circle(pos.x, pos.y, 10);
    }

    initCircleStyle(fillColor, strokeColor, width) {
        this.circle.strokeWidth = width;
        this.circle.strokeColor = strokeColor;
        this.circle.fillColor = fillColor;
    }

    /**
     * 没有特效
     */
    noneAnimation() {}
    /**
     * 炸了的的特效
     * 电炸
     */
    bombAnimation() {
        this.circle.fillColor.changeAlpha(Functions.timeRateAlpha(this.time / this.duration));
        this.circle.r = this.time * 5;
    }
    flashAnimation() {
        this.circle.fillColor.changeAlpha(Functions.timeRateAlpha(this.time / this.duration))
    }
    /**
     * 闪黄光特效
     * 用于火炮子弹爆炸
     */
    flashFireAnimation() {
        this.circle.setStrokeWidth(0);
        this.circle.strokeColor = MyColor.Transparent();
        this.circle.fillColor.setRGBA(255, 255, 0, Functions.timeRateAlpha(this.time / this.duration));
    }

    flashBlueAnimation() {
        this.circle.setStrokeWidth(0);
        this.circle.strokeColor = MyColor.Transparent();
        this.circle.fillColor.setRGBA(0, 100, 255, Functions.timeRateAlpha(this.time / this.duration));
    }

    flashRedAnimation() {
        this.circle.setStrokeWidth(0);
        this.circle.strokeColor = MyColor.Transparent();
        this.circle.fillColor.setRGBA(255, 100, 0, Functions.timeRateAlpha(this.time / this.duration));
    }

    /**
     * 绿光特效
     */
    flashGreenAnimation() {
        this.circle.setStrokeWidth(0);
        this.circle.strokeColor = MyColor.Transparent();
        this.circle.fillColor.setRGBA(20, 200, 0, Functions.timeRateAlphaDownFast(this.time / this.duration));
    }

    /**
     * 棕色光特效
     */
    flashBrownAnimation() {
        this.circle.setStrokeWidth(0);
        this.circle.strokeColor = MyColor.Transparent();
        this.circle.fillColor.setRGBA(101, 77, 39, Functions.timeRateAlphaDownFast(this.time / this.duration));
    }

    /**
     * 采集器采集特效
     */
    energeticAnimation() {
        this.circle.setStrokeWidth(0);
        this.circle.strokeColor = MyColor.Transparent();
        this.circle.fillColor.setRGBA(20, 200, 0, 1);
    }

    /**
     * 炮塔被摧毁的特效
     */
    destroyAnimation() {
        this.circle.fillColor.setRGBA(0, 0, 0, Functions.timeRateAlpha(this.time / this.duration));
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
