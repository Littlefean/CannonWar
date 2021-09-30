/**
 * 特效圆 用于渲染出动画效果
 * by littlefean
 */

class EffectCircle extends Circle {

    constructor(pos) {
        super(pos.x, pos.y, 10);
        this.duration = 10;  // 这个特效可以播放多少个时间刻度
        this.isPlay = true;
        this.time = 0;
        this.animationFunc = this.flashAnimation;
    }

    /**
     * 闪黄光特效
     * 用于火炮子弹爆炸
     */
    flashAnimation() {
        this.setStrokeWidth(0);
        this.setStrokeColorStr("transparent");
        this.setColor(255, 255, 0, Functions.timeRateAlpha(this.time / this.duration));
    }

    /**
     * 炮塔被摧毁的特效
     */
    destroyAnimation() {
        this.setColor(0, 0, 0, Functions.timeRateAlpha(this.time / this.duration));
        this.r = this.time * 10;
    }

    goStep() {
        this.time++;
        this.animationFunc();
        if (this.time >= this.duration) {
            this.isPlay = false;
        }
    }
}
