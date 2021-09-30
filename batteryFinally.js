/**
 * 返回一些最终建筑
 * by littlefean
 */
class BatteryFinally {
    /**
     *
     * @param world {World}
     * @returns {Battery}
     */
    static Normal(world) {
        return new Battery(0, 0, world);
    }

    static F1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级重机枪";
        b.rangeR = 200;
        b.r += 2;
        b.bullySpeed += 5;
        b.bullySpeedAddMax = 2;
        b.clock = 3;
        b.getmMinBullyFunc = BullyFinally.F_S;
        b.price = 120;
        b.hpInit(1550);
        return b;
    }

    static F2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级重机枪";
        b.rangeR = 220;
        b.r += 3;
        b.bullySpeed += 2;
        b.getmMinBullyFunc = BullyFinally.F_S;
        b.bullySpeedAddMax = 5;
        b.clock = 2;
        b.bullyDeviation = 20;
        b.hpInit(2000);
        b.price = 150;
        return b;
    }

    static F3(world) {
        let b = new Battery(0, 0, world);
        b.name = "3级重机枪";
        b.rangeR = 190;
        b.r += 5;

        b.bullySpeed = 2;
        b.bullySlideRate = 1.1;
        b.bullySpeedAddMax = 10;
        b.getmMinBullyFunc = BullyFinally.F_M;
        b.clock = 1;
        b.hpInit(5000);
        b.bullyDeviation = 20;
        b.attackBullyNum = 3;
        b.price = 200;
        return b;
    }

    static F4(world) {
        let b = new Battery(0, 0, world);
        b.name = "4级重机枪";
        b.rangeR = 250;
        b.r += 15;

        b.bullySpeed = 8.2;
        b.bullySlideRate = 1;
        b.bullySpeedAddMax = 3;
        b.getmMinBullyFunc = BullyFinally.F_L;
        b.clock = 1;
        b.hpInit(10000);
        b.bullyDeviation = 50;
        b.attackBullyNum = 5;
        b.price = 400;
        return b;
    }

    static H1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级火炮";
        b.rangeR += 100;
        b.r += 4;

        b.bullySpeed = 2;
        b.bullySlideRate = 1.2;
        b.bullySpeedAddMax = 0;
        b.getmMinBullyFunc = BullyFinally.H_S;
        b.clock += 5;
        b.hpInit(1100);
        b.price = 150;
        return b;
    }

    static H2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级火炮";
        b.rangeR += 150;
        b.r += 6;
        b.bullySpeed = 1;
        b.bullySlideRate = 1.2;
        b.bullySpeedAddMax = 1;
        b.clock += 20;
        b.getmMinBullyFunc = BullyFinally.H_L;
        b.hpInit(2000);
        b.price = 300;
        return b;
    }

    static H3(world) {
        let b = new Battery(0, 0, world);
        b.name = "3级火炮";
        b.rangeR = 100;
        b.r += 6;
        b.bullySpeed = 1;
        b.bullySlideRate = 3;
        b.bullySpeedAddMax = 1;
        b.clock += 15;
        b.getmMinBullyFunc = BullyFinally.H_L;
        b.hpInit(2800);
        b.attackBullyNum = 2;
        b.bullyDeviationRotate = 0.2;
        b.price = 600;
        return b;
    }

    static H4(world) {
        let b = new Battery(0, 0, world);
        b.name = "4级火炮";
        b.rangeR = 150;
        b.r += 10;
        b.bullySpeed = 1;
        b.bullySlideRate = 2;
        b.clock += 30;
        b.getmMinBullyFunc = BullyFinally.H_LL;
        b.hpInit(10000);
        b.attackBullyNum = 1;
        b.bullyDeviationRotate = 0.8;
        b.price = 1000;
        return b;
    }

    static S1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级散弹";
        b.rangeR += 20;
        b.r += 2;

        b.bullySpeed += 0.5;
        b.bullySlideRate = 1.2;
        b.bullySpeedAddMax = 0;
        b.clock += 2;
        b.getmMinBullyFunc = BullyFinally.S;
        b.hpInit(1200);
        b.attackBullyNum = 3;
        b.bullyDeviationRotate = 5;
        b.price = 130;
        return b;
    }

    static S2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级散弹";
        b.rangeR += 25;
        b.r += 4;

        b.bullySpeed += 0.2;
        b.bullySlideRate = 2;
        b.bullySpeedAddMax = 3;
        b.clock += 5;
        b.hpInit(1000 + 700);
        b.attackBullyNum = 5;
        b.bullyDeviationRotate = 8;
        b.getmMinBullyFunc = BullyFinally.S;
        b.price = 160;
        return b;
    }

    static S3(world) {
        let b = new Battery(0, 0, world);
        b.name = "3级散弹";
        b.rangeR += 25;
        b.r += 6;

        b.bullySpeed += 0;
        b.bullySlideRate = 2;
        b.bullySpeedAddMax = 3;
        b.clock += 15;
        b.hpInit(1000 + 1200);
        b.attackBullyNum = 15;
        b.bullyDeviationRotate = 10;
        b.getmMinBullyFunc = BullyFinally.S;
        b.price = 200;
        return b;
    }

    static S4(world) {
        let b = new Battery(0, 0, world);
        b.name = "4级散弹";
        b.rangeR = 120;
        b.r += 10;
        b.bullySpeed += 4;
        b.bullySlideRate = 6;
        b.bullySpeedAddMax = 1;
        b.clock += 50;
        b.hpInit(3000);
        b.attackBullyNum = 50;
        b.bullyDeviationRotate = 20;
        b.getmMinBullyFunc = BullyFinally.S;
        b.price = 270;
        return b;
    }

    static T1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级穿甲炮塔";
        b.rangeR = 150;
        b.r += 2;
        b.bullySpeed += 1;
        b.bullySlideRate = 2;
        b.clock = 6;
        b.hpInit(1100);
        b.getmMinBullyFunc = BullyFinally.T_S;
        b.price = 130;
        return b;
    }

    static T2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级穿甲炮塔";
        b.rangeR = 150;
        b.r += 2;
        b.bullySpeed += 3;
        b.bullySlideRate = 3;
        b.clock = 4;
        b.hpInit(1500);
        b.getmMinBullyFunc = BullyFinally.T_M;
        b.price = 160;
        return b;
    }

    static T3(world) {
        let b = new Battery(0, 0, world);
        b.name = "3级穿甲炮塔";
        b.rangeR = 150;
        b.r += 2;
        b.bullySpeed += 3;
        b.bullySlideRate = 5;
        b.clock = 2;
        b.hpInit(5000);
        b.bullySpeedAddMax = 3;
        b.getmMinBullyFunc = BullyFinally.T_L;
        b.price = 280;
        return b;
    }

    static T4(world) {
        let b = new Battery(0, 0, world);
        b.name = "4级穿甲炮塔";
        b.rangeR = 170;
        b.r += 2;
        b.bullySpeed = 4;
        b.bullySlideRate = 5;
        b.clock = 10;
        b.hpInit(10000);
        b.bullySpeedAddMax = 4;
        b.getmMinBullyFunc = BullyFinally.T_LL;
        b.price = 400;
        return b;
    }

    static Fr1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级冰冻炮";
        b.rangeR = 130;
        b.r = 10;

        b.bullySpeed = 2;
        b.bullySlideRate = 1;
        b.getmMinBullyFunc = BullyFinally.Frozen_S;
        b.clock = 15;
        b.hpInit(250);
        b.price = 800;
        return b;
    }

    static Fr2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级冰冻炮";
        b.rangeR = 140;
        b.r = 12;

        b.bullySpeed = 3;
        b.bullySlideRate = 1;
        b.getmMinBullyFunc = BullyFinally.Frozen_M;
        b.clock = 10;
        b.hpInit(800);
        b.price = 1000;
        return b;
    }

    static Fr3(world) {
        let b = new Battery(0, 0, world);
        b.name = "3级冰冻炮";
        b.rangeR = 150;
        b.r = 12;

        b.bullySpeed = 4;
        b.bullySlideRate = 1;
        b.getmMinBullyFunc = BullyFinally.Frozen_L;
        b.clock = 10;
        b.hpInit(2000);
        b.price = 6000;
        return b;
    }
    static Fr4(world) {
        let b = new Battery(0, 0, world);
        b.name = "4级冰冻炮";
        b.rangeR = 200;
        b.r = 15;

        b.bullySpeed = 6;
        b.bullySlideRate = 1;
        b.getmMinBullyFunc = BullyFinally.Frozen_L;
        b.clock = 3;
        b.hpInit(3000);
        b.price = 8000;
        b.attackBullyNum = 3;
        b.bullyDeviationRotate = 5;
        return b;
    }
}

const TOWER_FUNC_ARR = [

    BatteryFinally.Normal,

    BatteryFinally.F1,
    BatteryFinally.F2,
    BatteryFinally.F3,
    BatteryFinally.F4,

    BatteryFinally.H1,
    BatteryFinally.H2,
    BatteryFinally.H3,
    BatteryFinally.H4,

    BatteryFinally.S1,
    BatteryFinally.S2,
    BatteryFinally.S3,
    BatteryFinally.S4,

    BatteryFinally.T1,
    BatteryFinally.T2,
    BatteryFinally.T3,
    BatteryFinally.T4,

    BatteryFinally.Fr1,
    BatteryFinally.Fr2,
    BatteryFinally.Fr3,
    BatteryFinally.Fr4,
];

