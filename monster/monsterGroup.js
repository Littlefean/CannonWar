/**
 * 怪物流
 * by littlefean
 */

class MonsterGroup {
    /**
     *
     * @param world {World}
     */
    constructor(world) {
        this.world = world;
        this.kinds = [];
        this.kindCount = [];
        this.monsterCount = 0;
        this.level = 0;  // 第n波
        for (let n of this.kindCount) {
            this.monsterCount += n;
        }
        // 不需要复制的默认属性
        this.delayTick = 200;  // 等待多少个时间刻正式开始
        this.state = 0;  // 0 还没开始 1 预备阶段 2 正在进行中
    }

    /**
     * 复制一份自己，用于双重怪物流迭代
     * @returns {MonsterGroup}
     */
    copySelf() {
        let res = new MonsterGroup(this.world);
        res.kinds = [];
        res.kindCount = [];
        for (let item of this.kinds) {
            res.kinds.push(item);
        }
        for (let item of this.kindCount) {
            res.kindCount.push(item);
        }
        res.monsterCount = this.monsterCount;
        res.level = this.level;
        return res;
    }

    updateCount() {
        for (let n of this.kindCount) {
            this.monsterCount += n;
        }
    }

    /**
     * 获取第n波怪物流的实例
     *
     * @param world {World}
     * @param level {Number} >= 1 不要等于 0
     * @param modeStr {String} "easy" "normal"  "hard"
     */
    static getMonsterFlow(world, level, modeStr) {
        let res = new this(world);
        res.level = level;
        res.kinds = [];
        res.kindCount = [];
        /**
         * 随机选择数组中的一个元素
         * @param arr 数组类型
         */
        let choice = (arr) => {
            return arr[Math.floor(Math.random() * arr.length)];
        };
        // todo 对mode进行分情况
        let monsterArr;
        if (level < 10) {
            monsterArr = Monster10BeforeArr;

        } else {
            monsterArr = MonsterAllArr;
        }
        if (modeStr === "easy") {
            monsterArr = MonsterEasyArr;
        }

        if (level % 10 === 0) {
            if (modeStr === "easy") {
                let sumNum = Functions.levelMonsterFlowNum(level);
                for (let i = 0; i < 5; i++) {
                    res.kinds.push(choice(monsterArr));
                    res.kindCount.push(Math.floor(sumNum / 3));
                }
            } else {
                let sumNum;
                if (modeStr === "normal") {
                    sumNum = Functions.levelT800Count(level);
                } else if (modeStr === "hard") {
                    sumNum = Functions.levelT800CountHard(level);
                }
                res.kinds.push(MonsterFinally.T800);
                res.kindCount.push(sumNum);
            }
        } else if (level % 5 === 0) {
            // 随机选择三种怪物,也有可能是同一种
            let sumNum;
            let kindNum;
            if (modeStr === "normal" || modeStr === "easy") {
                sumNum = Functions.levelMonsterFlowNum(level);
                kindNum = 3;
            } else if (modeStr === "hard") {
                sumNum = Functions.levelMonsterFlowNumHard(level);
                kindNum = 8;
            }
            for (let i = 0; i < kindNum; i++) {
                res.kinds.push(choice(monsterArr));
                res.kindCount.push(Math.floor(sumNum / 3));
            }
        } else {
            // 随机选择两种怪物,也有可能是同一种
            let sumNum;
            let kindNum;
            if (modeStr === "normal" || modeStr === "easy") {
                sumNum = Functions.levelMonsterFlowNum(level);
                kindNum = 2;
            } else if (modeStr === "hard") {
                sumNum = Functions.levelMonsterFlowNumHard(level);
                kindNum = 5;
            }
            for (let i = 0; i < kindNum; i++) {
                res.kinds.push(choice(monsterArr));
                res.kindCount.push(Math.floor(sumNum / 2));
            }
        }
        res.updateCount();
        return res;
    }

    /**
     * 判断是否可以进行下一波
     */
    couldNextFlow() {
        return this.world.monsters.size === 0;
    }

    /**
     * 判断当前这一波是否可以开始了
     */
    couldBegin() {
        if (this.world.monsters.size === 0) {
            this.state = 1;
            if (this.delayTick <= 0) {
                return true;
            } else {
                this.delayTick--;  // 当前函数确保是在world迭代中调用的
            }
        } else {
            this.state = 0;
        }
        return false;
    }

    /**
     * 将这一波怪物流添加到世界
     * @param modeStr {String}
     */
    addToWorld(modeStr) {
        if (this.couldBegin()) {
            // 添加文字提醒
            let et = new EffectText(`第 ${this.level} 波`);
            et.textSize = 40;
            et.duration = 100;
            et.pos = new Vector(this.world.width / 2, this.world.height / 2);
            this.world.addEffect(et);
            // 开始添加怪物
            for (let i = 0; i < this.kinds.length; i++) {
                let kind = this.kinds[i];
                let count = this.kindCount[i];
                for (let j = 0; j < count; j++) {
                    let m = kind(this.world);

                    if (modeStr === "easy") {
                        m.hpInit(m.maxHp + Functions.levelMonsterHpAddedEasy(this.level));
                        m.addPrice += Functions.levelAddPrice(this.level);
                    } else if (modeStr === "normal") {
                        m.hpInit(m.maxHp + Functions.levelMonsterHpAddedNormal(this.level));
                        m.colishDamage += Functions.levelCollideAdded(this.level);
                        m.addPrice += Functions.levelAddPriceNormal(this.level);
                    } else if (modeStr === "hard") {
                        m.hpInit(m.maxHp + Functions.levelMonsterHpAddedHard(this.level));
                        m.colishDamage += Functions.levelCollideAddedHard(this.level);
                        m.addPrice += Functions.levelAddPriceHard(this.level);
                    }
                    if (this.world.monsters.size < this.world.maxMonsterNum) {
                        this.world.monsters.add(m);
                    }
                }
            }
        }
    }

    toString() {
        let text1 = "";
        for (let item of this.kinds) {
            text1 += item(this.world).name + "、";
        }
        text1 += `，共${this.monsterCount}个`;

        return text1;
    }


}

let MonsterEasyArr = [
    MonsterFinally.Ox1,
    MonsterFinally.Ox2,
    MonsterFinally.Ox3,
    MonsterFinally.Runner,
    MonsterFinally.Bomber1,
    MonsterFinally.Slime_S,
    MonsterFinally.Slime_M,
    MonsterFinally.Slime_L,
    MonsterFinally.Medic,
    MonsterFinally.Medic_S,
];
let Monster10BeforeArr = [
    MonsterFinally.Normal,
    MonsterFinally.Runner,
    MonsterFinally.Ox1,
    MonsterFinally.Ox2,
    MonsterFinally.Bomber1,
    MonsterFinally.Thrower1,
    MonsterFinally.Bulldozer,
    MonsterFinally.Medic,
    MonsterFinally.Medic_M,
    MonsterFinally.Medic_S,
    MonsterFinally.AttackAdder,
    MonsterFinally.SpeedAdder,
    MonsterFinally.Shouter,

    MonsterFinally.Shouter_Spike,
];
let MonsterAllArr = [
    MonsterFinally.Ox1,
    MonsterFinally.Ox2,
    MonsterFinally.Ox3,
    MonsterFinally.Runner,
    MonsterFinally.Bomber1,
    MonsterFinally.Bomber2,
    MonsterFinally.Bomber3,
    MonsterFinally.Thrower1,
    MonsterFinally.BlackHole,
    MonsterFinally.Bulldozer,
    MonsterFinally.Glans,
    MonsterFinally.Medic,
    MonsterFinally.Medic_M,
    MonsterFinally.Medic_S,
    MonsterFinally.AttackAdder,
    MonsterFinally.SpeedAdder,
    MonsterFinally.BulletWearer,
    MonsterFinally.BulletRepellent,
    MonsterFinally.DamageReducers,
    MonsterFinally.Shouter,
    MonsterFinally.Shouter_Stone,
    MonsterFinally.Shouter_Bomber,
    MonsterFinally.Shouter_Spike,

    MonsterFinally.Slime_L,
    MonsterFinally.witch_N,
    MonsterFinally.bat,
    MonsterFinally.Spoke,
    MonsterFinally.SpokeMan,
    MonsterFinally.Exciting,
    MonsterFinally.Visitor,
    MonsterFinally.Enderman,
    MonsterFinally.Mts,
];
