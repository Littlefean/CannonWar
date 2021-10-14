/**
 * 像荒野乱斗中莫提斯一样的角色怪物
 * by littlefean
 */
class MonsterMortis extends Monster {

    constructor(pos, world) {
        super(pos, world);

        this.throwAble = true;

        this.viewRadius = 100;
        this.bumpV = 12;  // 冲撞速度
        this.bumpDis = 50;  // 冲过距离
        this.bumpEndPoint = null;  // 冲撞结束点
        this.target = null;  // 目标
        this.bumpSpeedVector = Vector.zero();  // 当前冲撞矢量
        // this.colishDamage = 5;
        this.bumpDamage = 5;  // 冲撞伤害
        this.bodyColor = new MyColor(46, 5, 39, 1);
        this.bodyStrokeColor = new MyColor(218, 60, 251, 1);
        this.bodyStrokeWidth = 3;
    }

    /**
     * 设置冲撞结束点
     * 知道自己的位置，目标的位置
     */
    setEndPoint() {
        let dv = this.target.pos.sub(this.pos).to1() // 自己朝向目标的方向
        this.bumpEndPoint = this.target.pos.plus(dv.mul(this.bumpDis));
        this.bumpSpeedVector = this.target.pos.sub(this.pos).to1().mul(this.bumpV);
    }

    // 冲撞
    bump() {
        if (this.haveTarget()) {
            // 设置冲撞结束点
            if (this.bumpEndPoint === null) {
                this.setEndPoint();
            }
            // 开始冲撞
            if (new Circle(this.bumpEndPoint.x, this.bumpEndPoint.y, 12).pointIn(this.pos.x, this.pos.y)) {
                // 已经到达目的地附近 改变冲撞结束点
                // console.log("已经到达目的地，改变冲撞点")
                if (this.haveTarget()) {
                    this.setEndPoint();
                } else {
                    this.bumpEndPoint = null;
                    this.bumpSpeedVector = Vector.zero();
                }
            } else {
                // 添加特效
                let ec = new EffectCircle(this.pos.copy());
                ec.circle.r = this.r;
                ec.initCircleStyle(this.bodyColor, this.bodyStrokeColor, 0);
                ec.animationFunc = ec.flashAnimation;
                this.world.addEffect(ec);

                // 没有到达目的地，继续向前冲撞
                this.pos.add(this.bumpSpeedVector);

            }
        } else {
            this.bumpEndPoint = null;
        }

    }

    // 是否含有目标
    haveTarget() {
        return !(this.target === null || this.target === undefined || this.target.isDead());
    }

    // 更新目标
    refreshTarget() {
        for (let building of this.world.getAllBuildingArr()) {
            if (building.getBodyCircle().impact(new Circle(this.pos.x, this.pos.y, this.viewRadius))) {
                this.target = building;
                return;
            }
        }
    }

    goStep() {
        // 更新目标
        this.refreshTarget();
        // 冲撞检测
        this.bump();
        super.goStep();
    }

    clash() {
        // 与纯建筑碰撞
        for (let b of this.world.getAllBuildingArr()) {
            if (this.getBodyCircle().impact(b.getBodyCircle())) {
                // 自爆
                this.bombSelf();
                b.hpChange(-this.bumpDamage);  // 这里使用的是突刺冲撞伤害
                if (!this.throwAble) {
                    this.remove();
                    break;
                }
            }
        }
    }

    move() {
        if (!this.haveTarget()) {
            super.move();
        }
    }

    render(ctx) {
        super.render(ctx);

        // 渲染视野
        new Circle(this.pos.x, this.pos.y, this.viewRadius).renderView(ctx);
    }
}
