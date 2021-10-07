/**
 * 像《终结者》一样的怪物
 * by littlefean
 */


class MonsterTerminator extends Monster {
    constructor(pos, world) {
        super(pos, world);
        this.speedNumb = 0.3;
        this.meeleAttacking = false;  // 是否是近战攻击状态
        this.scar = new Set();  // 伤疤特效
    }

    hpChange(dh) {
        let damage = -dh;
        if (damage < 10) {
            return;
        }
        if (damage < 100) {
            super.hpChange(-0.001);
        } else if (damage < 300) {
            super.hpChange(-1);
        } else if (damage < 500) {
            super.hpChange(-10);
        } else if (damage < 1500) {
            super.hpChange(-100);
        } else if (damage < 3000) {
            super.hpChange(-300);
        }else {
            super.hpChange(dh);
        }
    }

    addScar() {
        let lc = new Line(this.pos.plus(Vector.randCircle().mul(Math.random() * this.r)),
            this.pos.plus(Vector.randCircle().mul(Math.random() * this.r)))
        lc.strokeColor = new MyColor(0, 0, 0, 0.2);
        lc.strokeWidth = 0.5;
        this.scar.add(lc);
    }

    goStep() {
        super.goStep();
        for (let s of this.scar) {
            if (!s.isPlay) {
                this.scar.delete(s);
            }
        }
    }

    /**
     * 碰撞检测
     */
    clash() {
        this.meeleAttacking = false;
        // 与纯建筑碰撞
        for (let b of this.world.getAllBuildingArr()) {
            if (this.getBodyCircle().impact(b.getBodyCircle())) {
                // 自爆
                this.bombSelf();
                //
                this.meeleAttacking = true;
                b.hpChange(-this.colishDamage);
            }
        }
    }

    move() {
        if (this.meeleAttacking) {
            return;  // 如果当前是近战状态，就不需要向前走
        }
        super.move();
    }

    render(ctx) {
        super.render(ctx);
        for (let s of this.scar) {
            s.render(ctx);
        }
    }
}
