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
        this.duration = 20;
        this.pos = Vector.zero();
        this.textColor = "black";
        this.textSize = 16;
        this.text = text;
    }

    render(ctx) {
        ctx.fillStyle = this.textColor;
        ctx.font = `${this.textSize}px Microsoft YaHei`;
        ctx.textAlign = "center";
        ctx.fillText(this.text, this.pos.x, this.pos.y - this.time);
    }
}
