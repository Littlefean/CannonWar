/**
 * 特效类，用于渲染
 * by littlefean
 */

class SpecialEffect {

    constructor(pos) {
        this.pos = pos;
        this.duration = 10;  // 这个特效可以播放多少个时间刻度
        this.isPlay = true;
        this.time = 0;
        this.r = 10;
    }

    goStep() {
        this.time++;
    }

    render(ctx) {
        // 当前是一个爆炸的特效
        let r = this.r;
        let c = new Circle(this.pos.x, this.pos.y, r);
        c.setStrokeWidth(0);
        c.setStrokeColorStr("transparent");
        c.setColor(255, 255, 0, Functions.timeRateAlpha(this.time / this.duration));
        c.render(ctx);
        if (this.time >= this.duration) {
            this.isPlay = false;
        }
    }
}
