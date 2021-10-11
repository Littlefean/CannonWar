/**
 * 回旋镖
 * by littlefean
 */

class TowerBoomerang extends Tower {
    constructor(x, y, world) {
        super(x, y, world);
        this.name = "回旋镖";
        this.clock = 1.1  // 设置为一个小数类型，表示这个炮塔永远不会发射圆圈形的炮弹

        this.damage = 1000;

        this.rangeR = 200;
        this.barLen = 20;
        this.barDis = this.rangeR;  // 棒子中心到塔楼中心点的距离
        this.barWidth = 10;
        this.barRotateSelfSpeed = 0.5;  // 棒子自转角速度 弧度/tick

        this.barDirect = Vector.randCircle(); // 棒子的方向向量
        this.bar = this.initBar();
    }

    /**
     * 初始化一个棒子
     */
    initBar() {
        let barCenterLoc = this.pos.plus(Vector.randCircle().mul(this.barDis));
        let p1 = barCenterLoc.plus(this.barDirect.mul(this.barLen));
        let p2 = barCenterLoc.sub(this.barDirect.mul(this.barLen));

        let barLine = new Line(p1, p2);
        barLine.strokeColor = new MyColor(255, 124, 36, 0.8);
        barLine.strokeWidth = this.barWidth;
        // console.log(barLine);
        return barLine;
    }

    /**
     * 棒子前驱后伸展
     */
    barGo() {
        this.barDis = (Math.sin(this.liveTime / 10) + 1) * this.rangeR;
        let barCenterLoc = this.pos.plus(this.dirction.mul(this.barDis));
        this.bar.moveTo(barCenterLoc);
    }

    /**
     * 棒子自转
     */
    barRotate() {
        let center = this.bar.getCenter();
        let a = this.barRotateSelfSpeed; // 一次旋转度数
        let p1 = Vector.rotatePoint(center, this.bar.PosStart, a);
        let p2 = Vector.rotatePoint(center, this.bar.PosEnd, a);
        this.bar.resetLine(p1, p2);
    }

    /**
     * 更新 朝向
     */
    getTarget() {
        for (let m of this.world.monsters) {
            if (this.getViewCircle().impact(m.getBodyCircle())) {
                this.dirction = m.pos.sub(this.pos).to1();
            }
        }
    }


    /**
     * 迭代这个棒子
     */
    barGoStep() {
        // 检测是否碰撞
        for (let m of this.world.monsters) {
            if (this.bar.intersectWithCircle(m.getBodyCircle())) {
                m.hpChange(-this.damage);
            }
        }
        // 前后移动
        this.barGo();
        // 自转
        this.barRotate();

    }

    goStep() {
        super.goStep();
        this.getTarget();
        this.barGoStep();
    }

    render(ctx) {
        this.bar.render(ctx);
        super.render(ctx);
        // 渲染棒子与自己之间的连线
        let line = new Line(this.pos, this.bar.getCenter());
        line.strokeWidth = 0.1;
        line.strokeColor = this.bar.strokeColor;
        line.render(ctx)
    }
}
