/**
 *
 * by littlefean
 */
class World {
    moneyEle = document.querySelector("#money");

    /**
     *
     * @param width {Number}
     * @param height {Number}
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.batterys = [];
        this.monsters = [];
        this.effects = [];  // 特效层
        this.time = 0;
        this.user = {
            money: 250,
        };
    }

    addBattery(battery) {
        this.batterys.push(battery);
    }

    addMonsters() {
        let m = Monster.randInit(this);
        m.hpInit(m.maxHp + Functions.timeMonsterHp(this.time));
        m.colishDamage += Functions.timeMonsterAtt(this.time);
        this.monsters.push(m);
    }

    /**
     *
     * @param effect {SpecialEffect}
     */
    addEffect(effect) {
        this.effects.push(effect);
    }

    goTime() {
        // 清除怪物
        let mArr = [];
        for (let m of this.monsters) {
            if (!m.isDead()) {
                mArr.push(m);
            } else {
                console.log("打死了一个怪物");
                this.user.money += m.addPrice;
                this.moneyEle.innerHTML = this.user.money.toString();
            }
        }
        this.monsters = mArr;
        // 清除特效
        let eArr = [];
        for (let e of this.effects) {
            if (e.isPlay) {
                eArr.push(e);
            }
        }
        this.effects = eArr;
        // 添加怪物
        if (this.time % 20 === 0) {
            for (let i = 0; i < Functions.timeMonsterAddedNum(this.time); i++) {
                this.addMonsters();
            }
        }
        // 炮塔行动
        for (let b of this.batterys) {
            b.goStep();
        }
        // 怪物行动
        for (let m of this.monsters) {
            m.goStep();
        }
        // 特效步进
        for (let e of this.effects) {
            e.goStep();
        }
        this.time++;
    }

    /**
     *
     * @param canvasEle {HTMLElement}
     */
    render(canvasEle) {
        let canvasElement = document.querySelector("canvas");
        let ctx = canvasElement.getContext("2d");
        ctx.clearRect(0, 0, this.width, this.height);
        for (let b of this.batterys) {
            b.render(ctx);
        }

        for (let m of this.monsters) {
            m.render(ctx);
        }

        for (let e of this.effects) {
            e.render(ctx);
        }
    }
}
