/**
 *
 * by littlefean
 */
class World {

    /**
     *
     * @param width {Number}
     * @param height {Number}
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.batterys = [];
        this.buildings = [];
        this.monsters = [];
        this.effects = [];  // 特效层
        this.othersBullys = [];  // 多余的子弹，比如子弹分裂后的子弹
        this.time = 0;

        // 安置大本
        let RootBuilding = BuildingFinally.Root(this);
        RootBuilding.pos = new Vector(this.width / 2, this.height / 2);
        this.rootBuilding = RootBuilding; // 大本建筑 （特殊）
        this.addBuilding(this.rootBuilding);

        this.user = {
            money: 600,
        };
    }

    /**
     * 获取我方所有实体
     */
    getAllBuildingArr() {
        let res = [];
        for (let item of this.buildings) {
            res.push(item);
        }
        for (let item of this.batterys) {
            res.push(item);
        }
        return res;
    }

    /**
     * 获取我方所有子弹，返回一个数组
     */
    getAllBullyToArr() {
        let res = [];
        for (let tower of this.batterys) {
            for (let b of tower.bullys) {
                res.push(b);
            }
        }
        for (let b of this.othersBullys) {
            res.push(b);
        }
        return res;
    }

    addBattery(battery) {
        this.batterys.push(battery);
    }

    addMonsters() {
        // todo 当前这个是随机增加一个怪物
        let randIndex = Math.floor(Math.random() * MONSTERS_FUNC_ARR.length);
        this.monsters.push(MONSTERS_FUNC_ARR[randIndex](this));
    }

    /**
     * 往世界中添加一个怪物
     * @param monster {Monster}
     */
    addMonster(monster) {
        this.monsters.push(monster);
    }

    addEffect(effect) {
        this.effects.push(effect);
    }

    /**
     *
     * @param building {Building}
     */
    addBuilding(building) {
        this.buildings.push(building);
    }

    goTick() {
        // 清除怪物
        let mArr = [];
        for (let m of this.monsters) {
            if (!m.isDead()) {
                mArr.push(m);
            } else {
                this.user.money += m.addPrice;
            }
        }
        this.monsters = mArr;
        // 清除独立子弹
        let pArr = [];
        for (let p of this.othersBullys) {
            if (!p.isOutScreen()) {
                pArr.push(p);
            }
        }
        this.othersBullys = pArr;
        // 清除炮塔
        let tArr = [];
        for (let t of this.batterys) {
            if (!t.isDead()) {
                tArr.push(t);
            } else {
                let e = new EffectCircle(t.pos);
                e.animationFunc = e.destroyAnimation;
                this.addEffect(e);
            }
        }
        this.batterys = tArr;
        // 清除建筑
        let bArr = [];
        for (let b of this.buildings) {
            if (!b.isDead()) {
                bArr.push(b);
            }
        }
        this.buildings = bArr;
        // 清除特效
        let eArr = [];
        for (let e of this.effects) {
            if (e.isPlay) {
                eArr.push(e);
            }
        }
        this.effects = eArr;
        // 添加怪物
        if (this.time % 100 === 0) {
            let addNum = Functions.timeMonsterAddedNum(this.time);
            // console.log("这波怪物增加量", addNum);
            for (let i = 0; i < addNum; i++) {
                this.addMonsters();
            }
            // console.log(this.monsters);
        }
        // 炮塔行动
        for (let b of this.batterys) {
            b.goStep();
        }
        // 独立子弹行动
        for (let p of this.othersBullys) {
            p.goStep();
        }
        // 建筑行动
        for (let b of this.buildings) {
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
        for (let b of this.othersBullys) {
            b.render(ctx);
        }
        for (let b of this.buildings) {
            b.render(ctx);
        }
        for (let m of this.monsters) {
            m.render(ctx);
        }
        for (let e of this.effects) {
            e.render(ctx);
        }
        // 写一些基本信息
        ctx.font = "16px Microsoft YaHei";
        ctx.fillStyle = "black";
        ctx.textAlign = "left";
        ctx.fillText("金钱：" + this.user.money.toString(), 20, 20);
        ctx.fillText("怪物数量：" + this.monsters.length, 20, 40);
        ctx.fillText("炮塔数量：" + this.batterys.length, 20, 60);
    }
}
