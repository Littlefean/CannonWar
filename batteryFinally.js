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
        b.rangeR = 200;
        b.r += 2;
        b.bullySpeed += 5;
        b.bullySpeedAddMax = 2;
        b.clock = 3;
        b.getmMinBullyFunc = BullyFinally.F_S;
        // b.
        // b.bullyDamage = 4;
        b.hpInit(1550);
        return b;
    }

    static F2(world) {
        let b = new Battery(0, 0, world);
        b.rangeR = 220;
        b.r += 3;
        b.bullySpeed += 2;
        b.getmMinBullyFunc = BullyFinally.F_S;
        b.bullySpeedAddMax = 5;
        b.clock = 2;
        // b.bullyDamage = 4.1;
        b.bullyDeviation = 20;
        b.hpInit(2000);
        return b;
    }

    static F3(world) {
        let b = new Battery(0, 0, world);
        b.rangeR = 190;
        b.r += 5;

        b.bullySpeed = 2;
        b.bullySlideRate = 2.5;
        b.bullySpeedAddMax = 10;
        b.getmMinBullyFunc = BullyFinally.F_M;
        b.clock = 1;
        // b.bullyDamage = 20;
        b.hpInit(5000);
        b.bullyDeviation = 20;
        b.attackBullyNum = 3;
        return b;
    }

    static F4(world) {
        let b = new Battery(0, 0, world);
        b.rangeR = 250;
        b.r += 15;

        b.bullySpeed = 8.2;
        b.bullySlideRate = 5;
        b.bullySpeedAddMax = 3;
        b.getmMinBullyFunc = BullyFinally.F_L;
        b.clock = 1;
        // b.bullyDamage = 50;
        b.hpInit(10000);
        b.bullyDeviation = 50;
        b.attackBullyNum = 5;
        return b;
    }

    static H1(world) {
        let b = new Battery(0, 0, world);
        b.rangeR += 100;
        b.r += 4;

        b.bullySpeed = 2;
        b.bullySlideRate = 1.2;
        b.bullySpeedAddMax = 0;
        b.getmMinBullyFunc = BullyFinally.H_S;
        b.clock += 5;
        // b.bullyDamage += 30;
        b.hpInit(1100);
        return b;
    }

    static H2(world) {
        let b = new Battery(0, 0, world);
        b.rangeR += 150;
        b.r += 6;
        b.bullySpeed = 1;
        b.bullySlideRate = 1.2;
        b.bullySpeedAddMax = 1;
        b.clock += 20;
        // b.bullyDamage += 500;
        b.getmMinBullyFunc = BullyFinally.H_L;
        b.hpInit(2000);
        return b;
    }

    static H3(world) {
        let b = new Battery(0, 0, world);
        b.rangeR = 100;
        b.r += 6;
        b.bullySpeed = 1;
        b.bullySlideRate = 3;
        b.bullySpeedAddMax = 1;
        b.clock += 15;
        // b.bullyDamage += 500;
        b.getmMinBullyFunc = BullyFinally.H_L;
        b.hpInit(2800);
        b.attackBullyNum = 2;
        b.bullyDeviationRotate = 0.2;
        return b;
    }
    static H4(world) {
        let b = new Battery(0, 0, world);
        b.rangeR = 150;
        b.r += 10; // todo
        b.bullySpeed = 1;
        b.bullySlideRate = 2;
        b.clock += 30;
        // b.bullyDamage += 500;
        b.getmMinBullyFunc = BullyFinally.H_LL;
        b.hpInit(10000);
        b.attackBullyNum = 3;
        b.bullyDeviationRotate = 0.8;
        return b;
    }

    static S1(world) {
        let b = new Battery(0, 0, world);
        b.rangeR += 20;
        b.r += 2;

        b.bullySpeed += 0.5;
        b.bullySlideRate = 1.2;
        b.bullySpeedAddMax = 0;
        b.clock += 2;
        // b.bullyDamage += 15;
        b.getmMinBullyFunc = BullyFinally.S;
        b.hpInit(1200);
        b.attackBullyNum = 3;
        b.bullyDeviationRotate = 5;
        return b;
    }

    static S2(world) {
        let b = new Battery(0, 0, world);
        b.rangeR += 25;
        b.r += 4;

        b.bullySpeed += 0.2;
        b.bullySlideRate = 2;
        b.bullySpeedAddMax = 3;
        b.clock += 5;
        // b.bullyDamage += 60;
        b.hpInit(1000 + 700);
        b.attackBullyNum = 5;
        b.bullyDeviationRotate = 8;
        b.getmMinBullyFunc = BullyFinally.S;
        return b;
    }

    static S3(world) {
        let b = new Battery(0, 0, world);
        b.rangeR += 25;
        b.r += 6;

        b.bullySpeed += 0;
        b.bullySlideRate = 2;
        b.bullySpeedAddMax = 3;
        b.clock += 15;
        // b.bullyDamage += 70;
        b.hpInit(1000 + 1200);
        b.attackBullyNum = 15;
        b.bullyDeviationRotate = 10;
        b.getmMinBullyFunc = BullyFinally.S;
        return b;
    }

    static S4(world) {
        let b = new Battery(0, 0, world);
        b.rangeR = 120;
        b.r += 10;
        b.bullySpeed += 4;
        b.bullySlideRate = 6;
        b.bullySpeedAddMax = 1;
        b.clock += 50;
        // b.bullyDamage += 100;
        b.hpInit(3000);
        b.attackBullyNum = 50;
        b.bullyDeviationRotate = 20;
        b.getmMinBullyFunc = BullyFinally.S;
        return b;
    }

    static T1(world) {
        let b = new Battery(0, 0, world);
        b.rangeR = 150;
        b.r += 2;
        b.bullySpeed += 1;
        b.bullySlideRate = 2;
        b.clock = 6;
        // b.bullyDamage = 3;
        b.hpInit(1100);
        b.getmMinBullyFunc = BullyFinally.T_S;
        return b;
    }

    static T2(world) {
        let b = new Battery(0, 0, world);
        b.rangeR = 150;
        b.r += 2;
        b.bullySpeed += 3;
        b.bullySlideRate = 3;
        b.clock = 4;
        b.hpInit(1500);
        b.getmMinBullyFunc = BullyFinally.T_M;
        return b;
    }

    static T3(world) {
        let b = new Battery(0, 0, world);
        b.rangeR = 150;
        b.r += 2;
        b.bullySpeed += 3;
        b.bullySlideRate = 5;
        b.clock = 2;
        b.hpInit(5000);
        b.bullySpeedAddMax = 3;
        b.getmMinBullyFunc = BullyFinally.T_L;
        return b;
    }
    static T4(world) {
        let b = new Battery(0, 0, world);
        b.rangeR = 170;
        b.r += 2;
        b.bullySpeed = 4;
        b.bullySlideRate = 5;
        b.clock = 10;
        b.hpInit(10000);
        b.bullySpeedAddMax = 4;
        b.getmMinBullyFunc = BullyFinally.T_LL;
        return b;
    }
}
