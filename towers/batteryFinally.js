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
    static BasicCannon(world) {
        let res = new Battery(0, 0, world);
        res.name = "基础炮塔";
        res.levelUpArr = [
            BatteryFinally.AncientCannon,
            BatteryFinally.TraditionalCannon,
            BatteryFinally.FutureCannon_1,
        ];
        res.levelDownGetter = null;
        return res;
    }

    static AncientCannon(world) {
        let res = new Battery(0, 0, world);
        res.name = "中世纪炮塔";
        res.levelUpArr = [
            BatteryFinally.Boomerang,
            BatteryFinally.ArrowBow_1,
            BatteryFinally.Hammer,
            BatteryFinally.StoneCannon,
        ];
        res.levelDownGetter = BatteryFinally.BasicCannon;
        res.imgIndex = 1;
        return res;
    }

    static TraditionalCannon(world) {
        let res = new Battery(0, 0, world);
        res.name = "军事炮塔";
        res.levelDownGetter = BatteryFinally.BasicCannon;
        res.levelUpArr = [
            BatteryFinally.TraditionalCannon_Small,
            BatteryFinally.TraditionalCannon_Middle,
            BatteryFinally.TraditionalCannon_Large,
            BatteryFinally.TraditionalCannon_MultiTube,
        ];
        res.imgIndex = 20;
        return res;
    }

    static FutureCannon_1(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "高科技炮塔";
        b.rayMoveSpeed = 10;
        b.rayMaxRange = 300;
        b.rayClock = 10;
        b.rayLen = 30;  // 射线的长度
        b.attackFunc = b.shootingAttack;
        b.levelDownGetter = BatteryFinally.BasicCannon;
        b.levelUpArr = [
            BatteryFinally.FutureCannon_2,
            BatteryFinally.Thunder_1,
            BatteryFinally.Laser,
        ];
        b.imgIndex = 50;
        return b;
    }

    /**
     *  中世纪塔部分-------------
     */

    static Boomerang(world) {
        let res = new BatteryBoomerang(0, 0, world);
        res.name = "回旋镖";
        res.levelUpArr = [BatteryFinally.Boomerang_Far_1, BatteryFinally.Boomerang_Power_1];
        res.levelDownGetter = BatteryFinally.AncientCannon;
        res.imgIndex = 2;
        return res;
    }

    static Boomerang_Far_1(world) {
        let res = new BatteryBoomerang(0, 0, world);
        res.name = "远程回旋镖1级";
        res.levelUpArr = [BatteryFinally.Boomerang_Far_2];
        res.levelDownGetter = BatteryFinally.Boomerang;
        res.imgIndex = 2;
        return res;
    }

    static Boomerang_Far_2(world) {
        let res = new BatteryBoomerang(0, 0, world);
        res.name = "远程回旋镖2级";
        res.levelUpArr = [BatteryFinally.Boomerang_Far_3];
        res.levelDownGetter = BatteryFinally.Boomerang_Far_1;
        res.imgIndex = 2;
        return res;
    }

    static Boomerang_Far_3(world) {
        let res = new BatteryBoomerang(0, 0, world);
        res.name = "远程回旋镖3级";
        res.levelUpArr = [];
        res.levelDownGetter = BatteryFinally.Boomerang_Far_2;
        res.imgIndex = 2;
        return res;
    }

    static Boomerang_Power_1(world) {
        let res = new BatteryBoomerang(0, 0, world);
        res.name = "力量回旋镖1级";
        res.levelUpArr = [BatteryFinally.Boomerang_Power_2];
        res.levelDownGetter = BatteryFinally.Boomerang;
        res.imgIndex = 2;
        return res;
    }

    static Boomerang_Power_2(world) {
        let res = new BatteryBoomerang(0, 0, world);
        res.name = "力量回旋镖2级";
        res.levelUpArr = [BatteryFinally.Boomerang_Power_3];
        res.levelDownGetter = BatteryFinally.Boomerang_Power_1;
        res.imgIndex = 2;
        return res;
    }

    static Boomerang_Power_3(world) {
        let res = new BatteryBoomerang(0, 0, world);
        res.name = "力量回旋镖3级";
        res.levelUpArr = [];
        res.levelDownGetter = BatteryFinally.Boomerang_Power_2;
        res.imgIndex = 2;
        return res;
    }

    static ArrowBow_1(world) {
        let res = new BatteryBoomerang(0, 0, world);
        res.name = "弓箭塔1级";
        res.levelUpArr = [BatteryFinally.ArrowBow_2, BatteryFinally.Crossbow_1];
        res.levelDownGetter = BatteryFinally.AncientCannon;
        res.imgIndex = 4;
        return res;
    }

    static ArrowBow_2(world) {
        let res = new BatteryBoomerang(0, 0, world);
        res.name = "弓箭塔2级";
        res.levelUpArr = [BatteryFinally.ArrowBow_3];
        res.levelDownGetter = BatteryFinally.ArrowBow_1;
        res.imgIndex = 4;
        return res;
    }

    static ArrowBow_3(world) {
        let res = new BatteryBoomerang(0, 0, world);
        res.name = "弓箭塔3级";
        res.levelUpArr = [BatteryFinally.ArrowBow_4];
        res.levelDownGetter = BatteryFinally.ArrowBow_2;
        res.imgIndex = 4;
        return res;
    }

    static ArrowBow_4(world) {
        let res = new BatteryBoomerang(0, 0, world);
        res.name = "弓箭塔4级";
        res.levelUpArr = [];
        res.levelDownGetter = BatteryFinally.ArrowBow_3;
        res.imgIndex = 4;
        return res;
    }

    static Crossbow_1(world) {
        let res = new BatteryBoomerang(0, 0, world);
        res.name = "连弩1级";
        res.levelUpArr = [BatteryFinally.Crossbow_2];
        res.levelDownGetter = BatteryFinally.ArrowBow_1;
        res.imgIndex = 3;
        return res;
    }

    static Crossbow_2(world) {
        let res = new BatteryBoomerang(0, 0, world);
        res.name = "连弩2级";
        res.levelUpArr = [BatteryFinally.Crossbow_3];
        res.levelDownGetter = BatteryFinally.Crossbow_1;
        res.imgIndex = 3;
        return res;
    }

    static Crossbow_3(world) {
        let res = new BatteryBoomerang(0, 0, world);
        res.name = "连弩3级";
        res.levelUpArr = [];
        res.levelDownGetter = BatteryFinally.Crossbow_2;
        res.imgIndex = 3;
        return res;
    }

    static Hammer(world) {
        let b = new BatteryHammer(0, 0, world);
        b.name = "流星锤";
        b.levelUpArr = [BatteryFinally.Hammer_Fast_1, BatteryFinally.Hammer_Power_1];
        b.levelDownGetter = BatteryFinally.AncientCannon;
        b.imgIndex = 5;
        return b;
    }

    static Hammer_Fast_1(world) {
        let b = new BatteryHammer(0, 0, world);
        b.name = "快速流星锤1级";
        b.levelUpArr = [BatteryFinally.Hammer_Fast_2];
        b.levelDownGetter = BatteryFinally.Hammer;
        b.imgIndex = 5;
        return b;
    }

    static Hammer_Fast_2(world) {
        let b = new BatteryHammer(0, 0, world);
        b.name = "快速流星锤2级";
        b.levelUpArr = [BatteryFinally.Hammer_Fast_3];
        b.levelDownGetter = BatteryFinally.Hammer_Fast_1;
        b.imgIndex = 5;
        return b;
    }

    static Hammer_Fast_3(world) {
        let b = new BatteryHammer(0, 0, world);
        b.name = "快速流星锤3级";
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.Hammer_Fast_2;
        b.imgIndex = 5;
        return b;
    }

    static Hammer_Power_1(world) {
        let b = new BatteryHammer(0, 0, world);
        b.name = "重型流星锤1级";
        b.levelUpArr = [BatteryFinally.Hammer];
        b.levelDownGetter = BatteryFinally.Hammer_Power_2;
        b.imgIndex = 6;
        return b;
    }

    static Hammer_Power_2(world) {
        let b = new BatteryHammer(0, 0, world);
        b.name = "重型流星锤2级";
        b.levelUpArr = [BatteryFinally.Hammer_Power_3];
        b.levelDownGetter = BatteryFinally.Hammer_Power_1;
        b.imgIndex = 6;
        return b;
    }

    static Hammer_Power_3(world) {
        let b = new BatteryHammer(0, 0, world);
        b.name = "重型流星锤3级";
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.Hammer_Power_2;
        b.imgIndex = 6;
        return b;
    }

    static StoneCannon(world) {
        let b = new Battery(0, 0, world);
        b.name = "加农炮";
        b.levelUpArr = [BatteryFinally.StoneCannon_Far_1, BatteryFinally.StoneCannon_Power_1];
        b.levelDownGetter = BatteryFinally.AncientCannon;
        b.imgIndex = 7;
        return b;
    }

    static StoneCannon_Far_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "远程加农炮1级";
        b.levelUpArr = [BatteryFinally.StoneCannon_Far_2];
        b.levelDownGetter = BatteryFinally.StoneCannon;
        b.imgIndex = 8;
        return b;
    }

    static StoneCannon_Far_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "远程加农炮2级";
        b.levelUpArr = [BatteryFinally.StoneCannon_Far_3];
        b.levelDownGetter = BatteryFinally.StoneCannon_Far_1;
        b.imgIndex = 8;
        return b;
    }

    static StoneCannon_Far_3(world) {
        let b = new Battery(0, 0, world);
        b.name = "远程加农炮3级";
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.StoneCannon_Far_2;
        b.imgIndex = 8;
        return b;
    }

    static StoneCannon_Power_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "重型加农炮1级";
        b.rangeR = 100;
        b.r += 5;
        b.bullySpeed = 1;
        b.clock += 45;
        b.hpInit(3000);
        b.getmMainBullyFunc = BullyFinally.R_M;
        b.price = 1500;
        b.levelUpArr = [BatteryFinally.StoneCannon_Power_2];
        b.levelDownGetter = BatteryFinally.StoneCannon;
        b.imgIndex = 9;
        return b;
    }

    static StoneCannon_Power_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "重型加农炮2级";
        b.rangeR = 100;
        b.r += 5;
        b.bullySpeed = 1;
        b.clock += 40;
        b.hpInit(3000);
        b.getmMainBullyFunc = BullyFinally.R_M;
        b.price = 2000;
        b.levelUpArr = [BatteryFinally.StoneCannon_Power_3];
        b.levelDownGetter = BatteryFinally.StoneCannon_Power_1;
        b.imgIndex = 9;
        return b;
    }

    static StoneCannon_Power_3(world) {
        let b = new Battery(0, 0, world);
        b.name = "重型加农炮3级";
        b.rangeR = 100;
        b.r += 5;
        b.bullySpeed = 2;
        b.clock += 30;
        b.hpInit(3000);
        b.getmMainBullyFunc = BullyFinally.R_M;
        b.price = 3000;
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.StoneCannon_Power_2;
        b.imgIndex = 9;
        return b;
    }

    /**
     *  军事炮塔部分
     */
    static TraditionalCannon_Small(world) {
        let res = new Battery(0, 0, world);
        res.name = "小型军事炮塔";
        res.levelUpArr = [BatteryFinally.Rifle_1, BatteryFinally.MachineGun_1, BatteryFinally.ArmorPiercing_1];
        res.levelDownGetter = BatteryFinally.TraditionalCannon;
        res.imgIndex = 21;
        return res;
    }

    static TraditionalCannon_Middle(world) {
        let res = new Battery(0, 0, world);
        res.name = "中型军事炮塔";

        res.levelDownGetter = BatteryFinally.TraditionalCannon;
        res.levelUpArr = [BatteryFinally.AirCannon_1, BatteryFinally.Earthquake];
        res.imgIndex = 22;
        return res;
    }

    static TraditionalCannon_Large(world) {
        let res = new Battery(0, 0, world);
        res.name = "大型军事炮塔";
        res.levelDownGetter = BatteryFinally.TraditionalCannon;
        res.imgIndex = 23;
        res.levelUpArr = [BatteryFinally.Artillery_1, BatteryFinally.MissileGun_1]
        return res;
    }

    static TraditionalCannon_MultiTube(world) {
        let res = new Battery(0, 0, world);
        res.name = "多管军事炮塔";
        res.levelDownGetter = BatteryFinally.TraditionalCannon;
        res.imgIndex = 24;
        res.levelUpArr = [BatteryFinally.ThreeTubeCannon, BatteryFinally.SprayCannon_1, BatteryFinally.PowderCannon]
        return res;
    }

    static Rifle_1(world) {
        let res = new Battery(0, 0, world);
        res.name = "1级步枪";
        res.levelDownGetter = BatteryFinally.TraditionalCannon_Small;
        res.levelUpArr = [BatteryFinally.Rifle_2];
        res.imgIndex = 25;
        return res;
    }

    static Rifle_2(world) {
        let res = new Battery(0, 0, world);
        res.name = "2级步枪";
        res.levelUpArr = [BatteryFinally.Rifle_3]
        res.levelDownGetter = BatteryFinally.Rifle_1;
        res.imgIndex = 25;
        return res;
    }

    static Rifle_3(world) {
        let res = new Battery(0, 0, world);
        res.name = "3级步枪";
        res.levelUpArr = [];
        res.levelDownGetter = BatteryFinally.Rifle_2;
        res.imgIndex = 25;
        return res;
    }

    static MachineGun_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级重机枪";
        b.rangeR = 220;
        b.r += 3;
        b.bullySpeed += 2;
        b.getmMainBullyFunc = BullyFinally.F_S;
        b.bullySpeedAddMax = 5;
        b.clock = 2;
        b.bullyDeviation = 20;
        b.hpInit(2000);
        b.price = 150;
        b.levelUpArr = [BatteryFinally.MachineGun_2];
        b.levelDownGetter = BatteryFinally.TraditionalCannon_Small;
        b.imgIndex = 26;
        return b;

    }

    static MachineGun_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级重机枪";
        b.rangeR = 190;
        b.r += 5;

        b.bullySpeed = 2;
        b.bullySlideRate = 1.1;
        b.bullySpeedAddMax = 10;
        b.getmMainBullyFunc = BullyFinally.F_M;
        b.clock = 1;
        b.hpInit(5000);
        b.bullyDeviation = 20;
        b.attackBullyNum = 3;
        b.price = 200;
        b.levelUpArr = [BatteryFinally.MachineGun_3];
        b.levelDownGetter = BatteryFinally.MachineGun_1;
        b.imgIndex = 26;
        return b;
    }

    static MachineGun_3(world) {
        let b = new Battery(0, 0, world);
        b.name = "3级重机枪";
        b.rangeR = 250;
        b.r += 15;

        b.bullySpeed = 8.2;
        b.bullySlideRate = 1;
        b.bullySpeedAddMax = 3;
        b.getmMainBullyFunc = BullyFinally.F_L;
        b.clock = 1;
        b.hpInit(10000);
        b.bullyDeviation = 50;
        b.attackBullyNum = 5;
        b.price = 400;
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.MachineGun_2;
        b.imgIndex = 27;
        return b;
    }

    static ArmorPiercing_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级穿甲炮";
        b.rangeR = 150;
        b.r += 2;
        b.bullySpeed += 3;
        b.bullySlideRate = 3;
        b.clock = 4;
        b.hpInit(1500);
        b.getmMainBullyFunc = BullyFinally.T_M;
        b.price = 160;
        b.levelDownGetter = BatteryFinally.TraditionalCannon_Small;
        b.levelUpArr = [BatteryFinally.ArmorPiercing_2];
        b.imgIndex = 28;
        return b;
    }

    static ArmorPiercing_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级穿甲炮";
        b.rangeR = 150;
        b.r += 2;
        b.bullySpeed += 3;
        b.bullySlideRate = 5;
        b.clock = 2;
        b.hpInit(5000);
        b.bullySpeedAddMax = 3;
        b.getmMainBullyFunc = BullyFinally.T_L;
        b.price = 280;
        b.levelUpArr = [BatteryFinally.ArmorPiercing_3];
        b.levelDownGetter = BatteryFinally.AirCannon_1;
        b.imgIndex = 29;
        return b;
    }

    static ArmorPiercing_3(world) {
        let b = new Battery(0, 0, world);
        b.name = "3级穿甲炮";
        b.rangeR = 170;
        b.r += 2;
        b.bullySpeed = 4;
        b.bullySlideRate = 5;
        b.clock = 10;
        b.hpInit(10000);
        b.bullySpeedAddMax = 4;
        b.getmMainBullyFunc = BullyFinally.T_LL;
        b.price = 400;
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.AirCannon_2;
        b.imgIndex = 29;
        return b;
    }

    static Artillery_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级火炮";
        b.rangeR += 150;
        b.r += 6;
        b.bullySpeed = 1;
        b.bullySlideRate = 1.2;
        b.bullySpeedAddMax = 1;
        b.clock += 20;
        b.getmMainBullyFunc = BullyFinally.H_L;
        b.hpInit(2000);
        b.price = 300;
        b.levelDownGetter = BatteryFinally.TraditionalCannon_Large;
        b.levelUpArr = [BatteryFinally.Artillery_2];
        b.imgIndex = 33;
        return b;
    }

    static Artillery_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级火炮";
        b.rangeR = 100;
        b.r += 6;
        b.bullySpeed = 1;
        b.bullySlideRate = 3;
        b.bullySpeedAddMax = 1;
        b.clock += 15;
        b.getmMainBullyFunc = BullyFinally.H_L;
        b.hpInit(2800);
        b.attackBullyNum = 2;
        b.bullyDeviationRotate = 0.2;
        b.price = 600;
        b.levelDownGetter = BatteryFinally.Artillery_1;
        b.levelUpArr = [BatteryFinally.Artillery_3];
        b.imgIndex = 34;
        return b;
    }

    static Artillery_3(world) {
        let b = new Battery(0, 0, world);
        b.name = "3级火炮";
        b.rangeR = 150;
        b.r += 10;
        b.bullySpeed = 1;
        b.bullySlideRate = 2;
        b.clock += 30;
        b.getmMainBullyFunc = BullyFinally.H_LL;
        b.hpInit(10000);
        b.attackBullyNum = 1;
        b.bullyDeviationRotate = 0.8;
        b.price = 1000;
        b.levelDownGetter = BatteryFinally.Artillery_2;
        b.levelUpArr = [];
        b.imgIndex = 34;
        return b;
    }

    static MissileGun_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级跟踪导弹炮";
        b.rangeR = 250;
        b.r += 10;
        b.bullySpeed = 10;
        b.bullySlideRate = 6;
        b.clock += 30;
        b.getmMainBullyFunc = BullyFinally.H_Target_L;
        b.hpInit(10000);
        b.attackBullyNum = 1;
        b.bullyDeviationRotate = 0.8;
        b.price = 1000;
        b.levelDownGetter = BatteryFinally.TraditionalCannon_Large;
        b.levelUpArr = [BatteryFinally.MissileGun_2];
        b.imgIndex = 35;
        return b;
    }

    static MissileGun_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级跟踪导弹炮";
        b.rangeR = 250;
        b.r += 10;
        b.bullySpeed = 10;
        b.bullySlideRate = 6;
        b.clock += 30;
        b.getmMainBullyFunc = BullyFinally.H_Target_L;
        b.hpInit(10000);
        b.attackBullyNum = 1;
        b.bullyDeviationRotate = 0.8;
        b.price = 1000;
        b.levelDownGetter = BatteryFinally.MissileGun_1;
        b.levelUpArr = [BatteryFinally.MissileGun_3];
        b.imgIndex = 35;
        return b;
    }

    static MissileGun_3(world) {
        let b = new Battery(0, 0, world);
        b.name = "3级跟踪导弹炮";
        b.rangeR = 250;
        b.r += 10;
        b.bullySpeed = 10;
        b.bullySlideRate = 6;
        b.clock += 30;
        b.getmMainBullyFunc = BullyFinally.H_Target_L;
        b.hpInit(10000);
        b.attackBullyNum = 1;
        b.bullyDeviationRotate = 0.8;
        b.price = 1000;
        b.levelDownGetter = BatteryFinally.MissileGun_2;
        b.levelUpArr = [];
        b.imgIndex = 35;
        return b;
    }

    static AirCannon_1(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "1级空气炮"
        b.rayMoveSpeed = 10;
        b.rayMaxRange = 300;
        b.rayClock = 20;
        b.rayLen = 30;  // 射线的长度
        b.rayRepel = 1;
        b.attackFunc = b.gerAttack;
        b.levelDownGetter = BatteryFinally.TraditionalCannon_Middle;
        b.levelUpArr = [BatteryFinally.AirCannon_2];
        b.imgIndex = 30;
        return b;
    }

    static AirCannon_2(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "2级空气炮"
        b.rayMoveSpeed = 10;
        b.rayMaxRange = 300;
        b.rayClock = 20;
        b.rayLen = 30;  // 射线的长度
        b.rayRepel = 1;
        b.attackFunc = b.gerAttack;
        b.levelDownGetter = BatteryFinally.AirCannon_1;
        b.levelUpArr = [BatteryFinally.AirCannon_3];
        b.imgIndex = 30;
        return b;
    }

    static AirCannon_3(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "3级空气炮"
        b.rayMoveSpeed = 10;
        b.rayMaxRange = 300;
        b.rayClock = 20;
        b.rayLen = 30;  // 射线的长度
        b.rayRepel = 1;
        b.attackFunc = b.gerAttack;
        b.levelDownGetter = BatteryFinally.AirCannon_2;
        b.levelUpArr = [];
        b.imgIndex = 30;
        return b;
    }

    static Earthquake(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "地震发生器"
        b.laserBaseDamage = 10;
        b.attackFunc = b.earthquakeAttack;
        b.levelDownGetter = BatteryFinally.TraditionalCannon_Middle;
        b.levelUpArr = [BatteryFinally.Earthquake_Power_1, BatteryFinally.Earthquake_Speed_1];
        b.imgIndex = 31;
        return b;
    }

    static Earthquake_Power_1(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "1级重型地震发生器"
        b.laserBaseDamage = 10;
        b.attackFunc = b.earthquakeAttack;
        b.levelDownGetter = BatteryFinally.Earthquake;
        b.levelUpArr = [BatteryFinally.Earthquake_Power_2];
        b.imgIndex = 32;
        return b;
    }

    static Earthquake_Power_2(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "2级重型地震发生器"
        b.laserBaseDamage = 10;
        b.attackFunc = b.earthquakeAttack;
        b.levelDownGetter = BatteryFinally.Earthquake_Power_1;
        b.levelUpArr = [];
        b.imgIndex = 32;
        return b;
    }

    static Earthquake_Speed_1(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "1级高频地震发生器"
        b.laserBaseDamage = 10;
        b.attackFunc = b.earthquakeAttack;
        b.levelDownGetter = BatteryFinally.Earthquake;
        b.levelUpArr = [BatteryFinally.Earthquake_Speed_2];
        b.imgIndex = 31;
        return b;
    }

    static Earthquake_Speed_2(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "2级高频地震发生器"
        b.laserBaseDamage = 10;
        b.attackFunc = b.earthquakeAttack;
        b.levelDownGetter = BatteryFinally.Earthquake_Speed_1;
        b.levelUpArr = [];
        b.imgIndex = 31;
        return b;
    }

    static PowderCannon(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "粉尘炮塔"
        b.laserBaseDamage = 10;
        b.attackFunc = b.earthquakeAttack;

        b.levelDownGetter = BatteryFinally.TraditionalCannon_MultiTube;
        b.levelUpArr = [BatteryFinally.Flamethrower_1, BatteryFinally.FrozenCannon_1, BatteryFinally.Poison_1];
        b.imgIndex = 36;
        return b;
    }

    static Flamethrower_0(world) {
        let b = new Battery(0, 0, world);
        b.name = "0级喷火器";
        b.rangeR = 150;
        b.bullySpeed = 10;
        b.clock = 1;

        b.hpInit(1000);
        b.getmMainBullyFunc = BullyFinally.Fire_M;
        b.attackBullyNum = 1;
        b.bullyDeviationRotate = 3;
        b.price = 552;
        return b;
    }

    static Flamethrower_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级喷火器";
        b.rangeR = 200;
        b.bullySpeed = 15;
        b.clock = 1;

        b.hpInit(5000);
        b.getmMainBullyFunc = BullyFinally.Fire_L;
        b.attackBullyNum = 2;
        b.bullyDeviationRotate = 4;
        b.price = 1000;
        b.levelDownGetter = BatteryFinally.PowderCannon;
        b.levelUpArr = [BatteryFinally.Flamethrower_2];
        b.imgIndex = 37;
        return b;
    }

    static Flamethrower_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级喷火器";
        b.rangeR = 200;
        b.bullySpeed = 18;
        b.clock = 1;

        b.hpInit(10000);
        b.getmMainBullyFunc = BullyFinally.Fire_LL;
        b.attackBullyNum = 2;
        b.bullyDeviationRotate = 4;
        b.price = 8000;
        b.levelDownGetter = BatteryFinally.Flamethrower_1;
        b.levelUpArr = [];
        b.imgIndex = 37;
        return b;
    }

    static FrozenCannon_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级冰冻炮";
        b.rangeR = 150;
        b.r = 12;

        b.bullySpeed = 4;
        b.bullySlideRate = 1;
        b.getmMainBullyFunc = BullyFinally.Frozen_L;
        b.clock = 10;
        b.hpInit(2000);
        b.price = 6000;
        b.levelDownGetter = BatteryFinally.PowderCannon;
        b.levelUpArr = [BatteryFinally.FrozenCannon_2];
        b.imgIndex = 39;
        return b;
    }

    static FrozenCannon_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级冰冻炮";
        b.rangeR = 200;
        b.r = 15;

        b.bullySpeed = 6;
        b.bullySlideRate = 1;
        b.getmMainBullyFunc = BullyFinally.Frozen_L;
        b.clock = 3;
        b.hpInit(3000);
        b.price = 8000;
        b.attackBullyNum = 3;
        b.bullyDeviationRotate = 5;
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.FrozenCannon_1;
        b.imgIndex = 39;
        return b;
    }

    static Poison_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级毒气喷射器";
        b.rangeR = 220;
        b.bullySpeed = 9;
        b.clock = 10;

        b.hpInit(10000);
        b.getmMainBullyFunc = BullyFinally.P_L;
        b.attackBullyNum = 10;
        b.bullyDeviationRotate = 8;
        b.price = 3000;
        b.levelDownGetter = BatteryFinally.PowderCannon;
        b.levelUpArr = [BatteryFinally.Poison_2];
        b.imgIndex = 38;
        return b;
    }

    static Poison_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级毒气喷射器";
        b.rangeR = 220;
        b.bullySpeed = 9;
        b.clock = 10;

        b.hpInit(15000);
        b.getmMainBullyFunc = BullyFinally.P_M;
        b.attackBullyNum = 10;
        b.bullyDeviationRotate = 8;
        b.price = 3000;
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.Poison_1;
        b.imgIndex = 38;
        return b;
    }

    static ThreeTubeCannon(world) {
        let b = new Battery(0, 0, world);
        b.name = "三管炮塔";
        b.levelDownGetter = BatteryFinally.TraditionalCannon_MultiTube;
        b.levelUpArr = [BatteryFinally.Shotgun_1, BatteryFinally.ShotCannon_1];
        b.imgIndex = 42;
        return b;
    }

    static Shotgun_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级快速散弹";
        b.rangeR += 20;
        b.r += 2;

        b.bullySpeed += 0.5;
        b.bullySlideRate = 1.2;
        b.bullySpeedAddMax = 0;
        b.clock += 2;
        b.getmMainBullyFunc = BullyFinally.S;
        b.hpInit(1200);
        b.attackBullyNum = 5;
        b.bullyRotate = 1;
        b.attackFunc = b.shrapnelAttack;
        b.price = 130;
        b.levelDownGetter = BatteryFinally.ThreeTubeCannon;
        b.levelUpArr = [BatteryFinally.Shotgun_2];
        b.imgIndex = 44;
        return b;
    }

    static Shotgun_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级快速散弹";
        b.rangeR += 20;
        b.r += 2;

        b.bullySpeed += 0.5;
        b.bullySlideRate = 1.2;
        b.bullySpeedAddMax = 0;
        b.clock += 2;
        b.getmMainBullyFunc = BullyFinally.S;
        b.hpInit(1200);
        b.attackBullyNum = 5;
        b.bullyRotate = 1;
        b.attackFunc = b.shrapnelAttack;
        b.price = 130;
        b.levelDownGetter = BatteryFinally.Shotgun_1;
        b.levelUpArr = [];
        b.imgIndex = 44;
        return b;
    }

    static ShotCannon_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级散弹炮塔";
        b.rangeR += 25;
        b.r += 6;

        b.bullySpeed += 0;
        b.bullySlideRate = 2;
        b.bullySpeedAddMax = 3;
        b.clock += 15;
        b.hpInit(1000 + 1200);
        b.attackBullyNum = 15;
        b.bullyDeviationRotate = 10;
        b.getmMainBullyFunc = BullyFinally.S;
        b.price = 200;
        b.levelDownGetter = BatteryFinally.ThreeTubeCannon;
        b.levelUpArr = [BatteryFinally.ShotCannon_2];
        b.imgIndex = 43;
        return b;
    }

    static ShotCannon_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级散弹炮塔";
        b.rangeR = 120;
        b.r += 10;
        b.bullySpeed += 4;
        b.bullySlideRate = 6;
        b.bullySpeedAddMax = 1;
        b.clock += 50;
        b.hpInit(3000);
        b.attackBullyNum = 50;
        b.bullyDeviationRotate = 20;
        b.getmMainBullyFunc = BullyFinally.S;
        b.price = 270;
        b.levelDownGetter = BatteryFinally.ShotCannon_1;
        b.levelUpArr = [];
        b.imgIndex = 43;
        return b;
    }

    static SprayCannon_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级溅射炮塔";
        b.rangeR = 100;
        b.r += 5;
        b.bullySpeed = 5;
        b.clock += 20;
        b.hpInit(1000);

        b.getmMainBullyFunc = BullyFinally.SS_S;
        b.price = 300;
        b.levelDownGetter = BatteryFinally.TraditionalCannon_MultiTube;
        b.levelUpArr = [BatteryFinally.SprayCannon_2, BatteryFinally.SprayCannon_Double];
        b.imgIndex = 40;
        return b;
    }

    static SprayCannon_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级溅射炮塔";
        b.rangeR = 150;
        b.r += 5;
        b.bullySpeed = 8;
        b.clock += 20;
        b.hpInit(3000);
        b.getmMainBullyFunc = BullyFinally.SS_M;
        b.price = 500;
        b.levelDownGetter = BatteryFinally.SprayCannon_1;
        b.levelUpArr = [BatteryFinally.SprayCannon_3];
        b.imgIndex = 40;
        return b;
    }

    static SprayCannon_3(world) {
        let b = new Battery(0, 0, world);
        b.name = "3级溅射炮塔";
        b.rangeR = 200;
        b.r += 5;
        b.bullySpeed = 11;
        b.clock += 20;
        b.hpInit(5000);
        b.getmMainBullyFunc = BullyFinally.SS_L;
        b.price = 1000;
        b.levelDownGetter = BatteryFinally.SprayCannon_2;
        b.levelUpArr = [];
        b.imgIndex = 40;
        return b;
    }

    static SprayCannon_Double(world) {
        let b = new Battery(0, 0, world);
        b.name = "二次溅射炮塔";
        b.rangeR = 250;
        b.r += 5;
        b.bullySpeed = 15;
        b.clock += 20;
        b.hpInit(10000);
        b.getmMainBullyFunc = BullyFinally.SS_LL;
        b.price = 10000;
        b.levelDownGetter = BatteryFinally.SprayCannon_1;
        b.levelUpArr = [BatteryFinally.SprayCannon_Three];
        b.imgIndex = 41;
        return b;
    }

    static SprayCannon_Three(world) {
        let b = new Battery(0, 0, world);
        b.name = "三次溅射炮塔";
        b.rangeR = 250;
        b.r += 5;
        b.bullySpeed = 15;
        b.clock += 20;
        b.hpInit(10000);
        b.getmMainBullyFunc = BullyFinally.SS_LL;
        b.price = 10000;
        b.levelDownGetter = BatteryFinally.SprayCannon_Double;
        b.levelUpArr = [];
        b.imgIndex = 41;
        return b;
    }

    static FutureCannon_2(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "2级高科技塔";
        b.rayMoveSpeed = 20;
        b.rangeR = 300;
        b.rayMaxRange = 300;
        b.rayClock = 2;
        b.rayLen = 40;  // 射线的长度
        b.rayNum = 1;
        b.rayDeviationRotate = 0.1;
        b.attackFunc = b.shootingAttack;
        b.levelDownGetter = BatteryFinally.FutureCannon_1;
        b.levelUpArr = [BatteryFinally.FutureCannon_3];
        b.imgIndex = 51;
        return b;
    }

    static FutureCannon_3(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "3级高科技塔";
        b.rayMoveSpeed = 20;
        b.rangeR = 300;
        b.rayMaxRange = 300;
        b.rayClock = 2;
        b.rayLen = 40;  // 射线的长度
        b.rayNum = 1;
        b.rayDeviationRotate = 0.1;
        b.attackFunc = b.shootingAttack;
        b.levelDownGetter = BatteryFinally.FutureCannon_2;
        b.levelUpArr = [BatteryFinally.FutureCannon_4];
        b.imgIndex = 52;
        return b;
    }

    static FutureCannon_4(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "4级高科技塔";
        b.rayMoveSpeed = 20;
        b.rangeR = 300;
        b.rayMaxRange = 300;
        b.rayClock = 2;
        b.rayLen = 40;  // 射线的长度
        b.rayNum = 1;
        b.rayDeviationRotate = 0.1;
        b.attackFunc = b.shootingAttack;
        b.levelDownGetter = BatteryFinally.FutureCannon_3;
        b.levelUpArr = [BatteryFinally.FutureCannon_5];
        b.imgIndex = 53;
        return b;
    }

    static FutureCannon_5(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "5级高科技塔";
        b.rayMoveSpeed = 20;
        b.rangeR = 300;
        b.rayMaxRange = 300;
        b.rayClock = 2;
        b.rayLen = 40;  // 射线的长度
        b.rayNum = 1;
        b.rayDeviationRotate = 0.1;
        b.attackFunc = b.shootingAttack;
        b.levelDownGetter = BatteryFinally.FutureCannon_4;
        b.levelUpArr = [];
        b.imgIndex = 54;
        return b;
    }

    static Thunder_1(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "1级雷电塔";
        b.rangeR = 300;
        b.laserFreezeMax = 50;
        b.laserFreezeNow = 25;
        b.laserBaseDamage = 10;
        b.laserMaxDamage = 100;
        b.laserDamagePreAdd = 2;
        b.attackFunc = b.zapAttack;
        b.levelUpArr = [BatteryFinally.Thunder_2, BatteryFinally.ThunderBall_1];
        b.levelDownGetter = BatteryFinally.FutureCannon_1;
        b.imgIndex = 55;
        return b;
    }

    static ThunderBall_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级球状闪电发生器";
        b.rangeR = 300;
        b.r += 1;
        b.bullySpeed = 20;
        b.clock = 30;
        b.getmMainBullyFunc = BullyFinally.PiperBully;
        b.price = 520;
        b.hpInit(150);
        b.levelUpArr = [BatteryFinally.ThunderBall_2];
        b.levelDownGetter = BatteryFinally.Thunder_1;
        b.imgIndex = 56;
        return b;
    }

    static ThunderBall_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级球状闪电发生器";
        b.rangeR = 300;
        b.r += 1;
        b.bullySpeed = 20;
        b.clock = 30;
        b.getmMainBullyFunc = BullyFinally.PiperBully;
        b.price = 520;
        b.hpInit(150);
        b.levelUpArr = [BatteryFinally.ThunderBall_3];
        b.levelDownGetter = BatteryFinally.ThunderBall_1;
        b.imgIndex = 56;
        return b;
    }

    static ThunderBall_3(world) {
        let b = new Battery(0, 0, world);
        b.name = "3级球状闪电发生器";
        b.rangeR = 300;
        b.r += 1;
        b.bullySpeed = 20;
        b.clock = 30;
        b.getmMainBullyFunc = BullyFinally.PiperBully;
        b.price = 520;
        b.hpInit(150);
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.ThunderBall_2;
        b.imgIndex = 56;
        return b;
    }

    static Thunder_2(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "2级雷电塔"
        b.rangeR = 300;
        b.laserFreezeMax = 50;
        b.laserFreezeNow = 25;
        b.laserBaseDamage = 10;
        b.laserMaxDamage = 100;
        b.laserDamagePreAdd = 2;
        b.attackFunc = b.zapAttack;
        b.levelUpArr = [BatteryFinally.Thunder_Far_1, BatteryFinally.Thunder_Power_1];
        b.levelDownGetter = BatteryFinally.Thunder_1;
        b.imgIndex = 55;
        return b;
    }

    static Thunder_Far_1(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "1级远程雷电塔"
        b.rangeR = 300;
        b.laserFreezeMax = 50;
        b.laserFreezeNow = 25;
        b.laserBaseDamage = 10;
        b.laserMaxDamage = 100;
        b.laserDamagePreAdd = 2;
        b.attackFunc = b.zapAttack;
        b.levelUpArr = [BatteryFinally.Thunder_Far_2];
        b.levelDownGetter = BatteryFinally.Thunder_2;
        b.imgIndex = 55;
        return b;
    }

    static Thunder_Far_2(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "2级远程雷电塔"
        b.rangeR = 300;
        b.laserFreezeMax = 50;
        b.laserFreezeNow = 25;
        b.laserBaseDamage = 10;
        b.laserMaxDamage = 100;
        b.laserDamagePreAdd = 2;
        b.attackFunc = b.zapAttack;
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.Thunder_Far_1;
        b.imgIndex = 55;
        return b;
    }

    static Thunder_Power_1(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "1级强力雷电塔"
        b.rangeR = 300;
        b.laserFreezeMax = 50;
        b.laserFreezeNow = 25;
        b.laserBaseDamage = 10;
        b.laserMaxDamage = 100;
        b.laserDamagePreAdd = 2;
        b.attackFunc = b.zapAttack;
        b.levelUpArr = [BatteryFinally.Thunder_Power_2];
        b.levelDownGetter = BatteryFinally.Thunder_2;
        b.imgIndex = 55;
        return b;
    }

    static Thunder_Power_2(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "2级强力雷电塔"
        b.rangeR = 300;
        b.laserFreezeMax = 50;
        b.laserFreezeNow = 25;
        b.laserBaseDamage = 10;
        b.laserMaxDamage = 100;
        b.laserDamagePreAdd = 2;
        b.attackFunc = b.zapAttack;
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.Thunder_Power_1;
        b.imgIndex = 55;
        return b;
    }

    static Laser(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "激光塔";
        b.levelUpArr = [BatteryFinally.Laser_Blue_1, BatteryFinally.Laser_Red, BatteryFinally.Laser_Green_1];
        b.levelDownGetter = BatteryFinally.FutureCannon_1;
        b.imgIndex = 60;
        return b;
    }

    static Laser_Blue_1(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "1级蓝激光";
        b.levelUpArr = [BatteryFinally.Laser_Blue_2, BatteryFinally.Laser_Hell_1];
        b.levelDownGetter = BatteryFinally.Laser;
        b.imgIndex = 59;
        return b;
    }

    static Laser_Blue_2(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "2级蓝激光";
        b.levelUpArr = [BatteryFinally.Laser_Blue_3];
        b.levelDownGetter = BatteryFinally.Laser_Blue_1;
        b.imgIndex = 59;
        return b;
    }

    static Laser_Blue_3(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "3级蓝激光";
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.Laser_Blue_2;
        b.imgIndex = 59;
        return b;
    }

    static Laser_Hell_1(world) {
        let b = new BatteryHell(0, 0, world);
        b.name = "1级地狱激光塔";
        b.levelUpArr = [BatteryFinally.Laser_Hell_2]
        b.levelDownGetter = BatteryFinally.Laser_Blue_1;
        b.imgIndex = 69;
        return b;
    }

    static Laser_Hell_2(world) {
        let b = new BatteryHell(0, 0, world);
        b.name = "2级地狱激光塔";
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.Laser_Hell_1;
        b.imgIndex = 69;
        return b;
    }

    static Laser_Green_1(world) {
        // 绿激光是快速的激光
        let b = new BatteryLaser(0, 0, world);
        b.name = "1级绿激光";
        b.levelDownGetter = BatteryFinally.Laser;
        b.levelUpArr = [BatteryFinally.Laser_Green_2];
        b.imgIndex = 58;
        return b;
    }

    static Laser_Green_2(world) {
        // 绿激光是快速的激光
        let b = new BatteryLaser(0, 0, world);
        b.name = "2级绿激光";
        b.levelUpArr = [BatteryFinally.Laser_Green_3];
        b.levelDownGetter = BatteryFinally.Laser_Green_1;
        b.imgIndex = 58;
        return b;
    }

    static Laser_Green_3(world) {
        // 绿激光是快速的激光
        let b = new BatteryLaser(0, 0, world);
        b.name = "3级绿激光";
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.Laser_Blue_2;
        b.imgIndex = 58;
        return b;
    }

    static Laser_Red(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "红激光"
        b.levelUpArr = [BatteryFinally.Laser_Red_Alpha_1, BatteryFinally.Laser_Red_Beta_1];
        b.levelDownGetter = BatteryFinally.Laser;
        b.imgIndex = 57;
        return b;
    }

    static Laser_Red_Alpha_1(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "1级Alpha红激光";
        b.levelUpArr = [BatteryFinally.Laser_Red_Alpha_2];
        b.levelDownGetter = BatteryFinally.Laser_Red;
        b.imgIndex = 57;
        return b;
    }

    static Laser_Red_Alpha_2(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "2级Alpha红激光"
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.Laser_Red_Alpha_1;
        b.imgIndex = 57;
        return b;
    }

    static Laser_Red_Beta_1(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "1级Beta红激光"
        b.damage = 10;
        b.attackFunc = b.scanningAttack;
        b.levelUpArr = [BatteryFinally.Laser_Red_Beta_2];
        b.levelDownGetter = BatteryFinally.Laser_Red;
        b.imgIndex = 57;
        return b;
    }

    static Laser_Red_Beta_2(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "2级Beta红激光"
        b.damage = 10;
        b.attackFunc = b.scanningAttack;
        b.levelDownGetter = BatteryFinally.Laser_Red_Beta_1;
        b.levelUpArr = [];
        b.imgIndex = 57;
        return b;
    }
}

const TOWER_FUNC_ARR = [

    BatteryFinally.BasicCannon,
    //
    // BatteryFinally.MachineGun_0,
    // BatteryFinally.MachineGun_1,
    // BatteryFinally.MachineGun_2,
    // BatteryFinally.MachineGun_3,
    //
    // BatteryFinally.Artillery_0,
    // BatteryFinally.Artillery_1,
    // BatteryFinally.Artillery_2,
    // BatteryFinally.Artillery_3,
    //
    // BatteryFinally.MissileGun_1,
    //
    // BatteryFinally.Shotgun_1,
    //
    // BatteryFinally.ShotCannon_1,
    // BatteryFinally.ShotCannon_2,
    //
    // BatteryFinally.ArmorPiercing_0,
    // BatteryFinally.ArmorPiercing_1,
    // BatteryFinally.ArmorPiercing_2,
    // BatteryFinally.ArmorPiercing_3,
    //
    // BatteryFinally.FrozenCannon_1,
    // BatteryFinally.FrozenCannon_2,
    //
    // BatteryFinally.SprayCannon_1,
    // BatteryFinally.SprayCannon_2,
    // BatteryFinally.SprayCannon_3,
    // BatteryFinally.SprayCannon_Double,
    //
    // BatteryFinally.Flamethrower_0,
    // BatteryFinally.Flamethrower_1,
    // BatteryFinally.Flamethrower_2,
    //
    // BatteryFinally.Poison_1,
    // BatteryFinally.Poison_2,
    //
    // BatteryFinally.FutureCannon_2,
    //
    // BatteryFinally.Laser_Hell_1,
    //
    // BatteryFinally.Laser_Red,
    //
    // BatteryFinally.Earthquake,
    // BatteryFinally.Thunder_1,
    //
    // BatteryFinally.Hammer,
    // BatteryFinally.Boomerang,
    //
    // BatteryFinally.ThunderBall_1,
    // BatteryFinally.AirCannon_1,

];

const TOWERS_IMG = new Image();
TOWERS_IMG.src = "towers/imgs/towers.png";
const TOWER_IMG_PRE_WIDTH = 100;
const TOWER_IMG_PRE_HEIGHT = 100;
