/**
 * 特效类
 * by littlefean
 */
class Effect {
    constructor() {
        this.isPlay = true;
        this.time = 0;
        this.duration = 10;  // 这个特效可以播放多少个时间刻度
    }

    goStep() {
        this.time++;
        if (this.time >= this.duration) {
            this.isPlay = false;
        }
    }
}

/**
 * 特效文字类
 */
class EffectText extends Effect {
    /**
     *
     * @param text {String}
     */
    constructor(text) {
        super();
        this.duration = 100;
        this.pos = Vector.zero();
        this.textColor = "black";
        this.textSize = 16;
        // this.textStrokeColor = "blue";
        this.text = text;
    }

    render(ctx) {
        ctx.fillStyle = this.textColor;
        ctx.font = `${this.textSize}px Microsoft YaHei`;
        // ctx.strokeStyle = this.textStrokeColor;
        // ctx.strokeWidth = "1px";
        ctx.textAlign = "center";
        // ctx.strokeText(this.text, this.pos.x, this.pos.y);
        ctx.fillText(this.text, this.pos.x, this.pos.y);
    }
}
