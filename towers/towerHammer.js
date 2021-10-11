/**
 * 流星锤塔楼
 * by littlefean
 */
class TowerHammer extends Tower {
    constructor(x, y, world) {
        super(x, y, world);
        this.name = "附属物品塔楼";
        this.clock = 1.1  // 设置为一个小数类型，表示这个炮塔永远不会发射圆圈形的炮弹

        this.itemRange = this.rangeR;  // 当前物品的旋转半径
        this.itemRidus = 20;
        this.itemDamage = 1000;
        this.itemSpeed = 10; // 1~100  越小越快
        this.additionItem = this.initAdditionItem();  // 进攻物品
    }

    /**
     * 初始化攻击工具
     * @returns {CircleObject} 攻击工具
     */
    initAdditionItem() {
        let loc = this.pos.plus(Vector.randCircle().mul(this.itemRange));
        let c = new CircleObject(loc, this.world);
        c.r = this.itemRidus;

        c.hpInit(-1);  // 这个工具是用不坏的

        c.bodyColor = new MyColor(60, 63, 65, 1);
        c.bodyStrokeColor = new MyColor(31, 31, 31, 0);
        return c;
    }

    /**
     * 这个工具迭代一次
     */
    itemGoStep() {
        // 位置更新
        let a = this.itemSpeed;
        let loc = new Vector(Math.sin(this.liveTime / a), Math.cos(this.liveTime / a)).mul(this.itemRange);
        this.additionItem.pos = this.pos.plus(loc);

        // 碰撞检测
        for (let m of this.world.monsters) {
            if (this.additionItem.getBodyCircle().impact(m.getBodyCircle())) {
                console.log("击中了");
                m.hpChange(-this.itemDamage);
            }
        }
    }

    /**
     * 瞄准，调整物品
     */
    toTarget() {
        let haveTarget = false;
        for (let m of this.world.monsters) {
            let distance = m.pos.dis(this.pos);
            if (distance < this.rangeR) {
                // 发现了一个敌人
                this.itemRange = distance;
                haveTarget = true;
                break;
            }
        }
    }

    itemRender(ctx) {
        this.additionItem.render(ctx);
        let line = new Line(this.pos, this.additionItem.pos);
        line.strokeWidth = 10;
        line.strokeColor = this.additionItem.bodyColor;
        line.render(ctx);
    }

    render(ctx) {
        super.render(ctx);
        // 渲染物品
        this.itemRender(ctx);

    }

    goStep() {
        super.goStep();
        this.toTarget();
        this.itemGoStep();
        // this.getTarget();
        // this.attack();
    }
}

