/**
 *
 * by littlefean
 */
class Building extends CircleObject {
    /**
     *
     * @param pos {Vector}
     * @param world {World}
     */
    constructor(pos, world) {
        super(pos, world);
        this.gameType = "Building";
        this.name = "默认建筑";
        this.price = 10;
        this.hpInit(1000);
        this.hpColor = MyColor.arrTo([2, 200, 50, 0.8]);

        // 生产特性
        this.moneyAddedAble = false;
        this.moneyAddedNum = 0;  // 一次增加多少金钱
        this.moneyAddedFreezeTime = 100;  // 多少个tick增加一次金钱

        // 自身回血特性
        this.hpAddNum = 0;
        this.hpAddNumFreezeTime = 100;

        // 对周围建筑产生影响
        this.otherHpAddAble = false;
        this.otherHpAddRadius = 100;
        this.otherHpAddNum = 0;
        this.otherHpAddFreezeTime = 100;

        this.levelUpArr = []
    }

    goStep() {
        super.goStep();
        // 增加金钱
        if (this.moneyAddedAble) {
            if (this.liveTime % this.moneyAddedFreezeTime === 0) {
                this.world.user.money += this.moneyAddedNum;
                // 添加采集特效
                let e = new EffectCircle(this.pos);
                e.circle.r = this.r;
                e.animationFunc = e.energeticAnimation;
                e.duration = Math.floor(this.moneyAddedFreezeTime / 2);
                this.world.addEffect(e);
            }
        }
        // 回血
        if (this.liveTime % this.hpAddNumFreezeTime === 0) {
            this.hpChange(this.hpAddNum);
        }
        // 给周围回血
        if (this.otherHpAddAble) {
            if (this.liveTime % this.otherHpAddFreezeTime === 0) {
                // 给周围的建筑和炮塔加血
                for (let b of this.world.buildings) {
                    if (b !== this) {
                        if (b.pos.dis(this.pos) <= this.otherHpAddRadius) {
                            b.hpChange(this.otherHpAddNum);
                        }
                    }
                }
                for (let b of this.world.batterys) {
                    if (b.pos.dis(this.pos) <= this.otherHpAddRadius) {
                        b.hpChange(this.otherHpAddNum);
                    }
                }
                // 加血特效
                let e = new EffectCircle(this.pos);
                e.animationFunc = e.flashGreenAnimation;
                e.duration = this.otherHpAddFreezeTime;
                e.circle.r = this.otherHpAddRadius;
                this.world.addEffect(e);
            }
        }
    }

    remove() {
        this.hpSet(0);
        super.remove();
    }

    render(ctx) {
        super.render(ctx);
        // 绘制加血范围圈
        if (this.otherHpAddAble) {
            let c = new Circle(this.pos.x, this.pos.y, this.otherHpAddRadius);
            c.fillColor = MyColor.Transparent();
            c.strokeColor.setRGBA(81, 139, 60, 1);
            c.setStrokeWidth(0.5);
            c.render(ctx);
        }
    }
}
