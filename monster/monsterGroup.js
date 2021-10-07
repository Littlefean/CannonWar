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
     */
    static getMonsterFlow(world, level) {
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
        let monsterArr;
        if (level < 10) {
            monsterArr = MONSTERS_FUNC_ARR_1;
        } else {
            monsterArr = MONSTERS_FUNC_ARR_ALL;
        }

        if (level % 10 === 0) {
            let sumNum = Functions.levelT800Count(level);
            res.kinds.push(MonsterFinally.T800);
            res.kindCount.push(sumNum);
        } else if (level % 5 === 0) {
            // 随机选择三种怪物,也有可能是同一种
            let sumNum = Functions.levelMonsterFlowNum(level);
            for (let i = 0; i < 3; i++) {
                res.kinds.push(choice(monsterArr));
                res.kindCount.push(Math.floor(sumNum / 3));
            }
        } else {
            // 随机选择两种怪物,也有可能是同一种
            let sumNum = Functions.levelMonsterFlowNum(level);
            for (let i = 0; i < 2; i++) {
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
        return this.world.monsters.length === 0;
    }

    /**
     * 判断当前这一波是否可以开始了
     */
    couldBegin() {
        if (this.world.monsters.length === 0) {
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

    addToWorld() {
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
                    m.dataInit(this.level);
                    this.world.monsters.push(m);
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
