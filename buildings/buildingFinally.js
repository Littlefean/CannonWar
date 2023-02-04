/**
 * 一些特殊能力的建筑
 * by littlefean
 */
class BuildingFinally {
    // 大本
    static Root(world) {
        let res = new Building(Vector.zero(), world);
        res.name = "大本";
        res.r = 20;
        res.hpInit(10000);

        res.bodyStrokeColor = new MyColor(0, 0, 0, 1);
        res.bodyStrokeWidth = 5;
        res.bodyColor = new MyColor(50, 50, 50, 1);
        return res;
    }

    // 金矿
    static Collector(world) {
        let res = new Building(Vector.zero(), world);
        res.name = "金矿";
        res.moneyAddedAble = true;
        res.moneyAddedNum = 2;
        res.moneyAddedFreezeTime = 2000;
        res.r = 15;
        res.hpInit(3000);

        res.price = 3000;

        res.bodyStrokeColor = new MyColor(0, 0, 0, 1);
        res.bodyStrokeWidth = 1;
        res.bodyColor = new MyColor(0, 0, 0, 0);
        return res;
    }

    // 治疗仪器
    static Treatment(world) {
        let res = new Building(Vector.zero(), world);
        res.name = "维修塔";
        res.otherHpAddAble = true;
        res.otherHpAddNum = 200;
        res.otherHpAddRadius = 120;
        res.otherHpAddFreezeTime = 100;
        res.r = 10;
        res.hpInit(10000);
        res.price = 1200;

        res.bodyStrokeColor = new MyColor(0, 0, 0, 1);
        res.bodyStrokeWidth = 1;
        res.bodyColor = new MyColor(25, 25, 25, 0.8);
        return res;
    }

}

const BUILDING_FUNC_ARR = [
    // BuildingFinally.Root,
    BuildingFinally.Collector,
    BuildingFinally.Treatment,
];

