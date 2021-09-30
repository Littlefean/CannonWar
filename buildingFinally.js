/**
 *
 * by littlefean
 */
class BuildingFinally {
    // 大本
    static Root(world) {
        let res = new Building(Vector.zero(), world);
        res.name = "大本";
        res.r = 20;
        res.hpInit(10000);
        return res;
    }

    // 采集器
    static Collector(world) {
        let res = new Building(Vector.zero(), world);
        res.name = "采集器";
        res.moneyAddedNum = 1;
        res.moneyAddedFreezeTime = 20;
        res.r = 3;
        res.hpInit(300);
        return res;
    }

    // 治疗仪器
    static Treatment(world) {
        let res = new Building(Vector.zero(), world);
        res.name = "维修塔楼";
        res.otherHpAddAble = true;
        res.otherHpAddNum = 20;
        res.otherHpAddRadius = 120;
        res.otherHpAddFreezeTime = 10;
        res.r = 5;
        res.hpInit(3000);
        res.price = 100;
        return res;
    }

}

const BUILDING_FUNC_ARR = [
    // BuildingFinally.Root,
    BuildingFinally.Collector,
    BuildingFinally.Treatment,
];

