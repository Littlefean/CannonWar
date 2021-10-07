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
        res.price = 50 + Functions.TowerNumPriceAdded(world.batterys.length);
        return res;
    }

    static AncientCannon(world) {
        let res = new Battery(0, 0, world);
        res.name = "中世纪炮塔";
        res.r += 1;
        res.hpInit(2000);
        res.rangeR += 5;
        res.levelUpArr = [
            BatteryFinally.Boomerang,
            BatteryFinally.ArrowBow_1,
            BatteryFinally.Hammer,
            BatteryFinally.StoneCannon,
        ];
        res.getmMainBullyFunc = BullyFinally.littleStone;
        res.price = 100;
        res.levelDownGetter = BatteryFinally.BasicCannon;
        res.imgIndex = 1;
        res.price = 60;
        return res;
    }

    static TraditionalCannon(world) {
        let res = new Battery(0, 0, world);
        res.name = "军事炮塔";
        res.r += 1;
        res.hpInit(5000);
        res.rangeR += 5;
        res.levelDownGetter = BatteryFinally.BasicCannon;
        res.levelUpArr = [
            BatteryFinally.TraditionalCannon_Small,
            BatteryFinally.TraditionalCannon_Middle,
            BatteryFinally.TraditionalCannon_Large,
            BatteryFinally.TraditionalCannon_MultiTube,
        ];
        res.price = 120;
        res.imgIndex = 20;
        return res;
    }

    static FutureCannon_1(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "高科技炮塔";

        b.hpInit(5000);
        b.rangeR = 150;
        b.r += 1;
        b.rayMoveSpeed = 10;
        b.rayMaxRange = 200;
        b.rayClock = 10;
        b.rayNum = 1;
        b.rayDeviationRotate = 0;
        b.damage = 15;
        b.rayThrowAble = false;
        b.attackFunc = b.shootingAttack;
        b.rayLen = 15;  // 射线的长度
        b.rayWidth = 2;
        b.rayColor = new MyColor(69, 214, 165, 1);

        b.levelDownGetter = BatteryFinally.BasicCannon;
        b.levelUpArr = [
            BatteryFinally.FutureCannon_2,
            BatteryFinally.Thunder_1,
            BatteryFinally.Laser,
        ];
        b.price = 800;
        b.imgIndex = 50;
        return b;
    }

    /**
     *  中世纪塔部分-------------
     */

    static Boomerang(world) {
        let res = new BatteryBoomerang(0, 0, world);
        res.name = "回旋镖";
        res.hpInit(3000);
        res.damage = 100;
        res.rangeR = 120;
        res.r += 2;
        res.bar = res.initBar();
        res.levelUpArr = [BatteryFinally.Boomerang_Far_1, BatteryFinally.Boomerang_Power_1];
        res.levelDownGetter = BatteryFinally.AncientCannon;
        res.imgIndex = 2;
        res.price = 190;
        return res;
    }

    static Boomerang_Far_1(world) {
        let res = new BatteryBoomerang(0, 0, world);
        res.name = "远程回旋镖1级";
        res.r += 3;
        res.hpInit(6000);
        res.damage = 100;
        res.rangeR = 140;
        res.barRotateSelfSpeed = 0.6;
        res.bar = res.initBar();
        res.levelUpArr = [BatteryFinally.Boomerang_Far_2];
        res.levelDownGetter = BatteryFinally.Boomerang;
        res.imgIndex = 2;
        res.price = 230;
        return res;
    }

    static Boomerang_Far_2(world) {
        let res = new BatteryBoomerang(0, 0, world);
        res.name = "远程回旋镖2级";
        res.r += 4;
        res.hpInit(6000);
        res.damage = 100;
        res.rangeR = 160;
        res.barWidth = 10;
        res.barRotateSelfSpeed = 0.7;
        res.bar = res.initBar();
        res.levelUpArr = [BatteryFinally.Boomerang_Far_3];
        res.levelDownGetter = BatteryFinally.Boomerang_Far_1;
        res.imgIndex = 2;
        res.price = 350;
        return res;
    }

    static Boomerang_Far_3(world) {
        let res = new BatteryBoomerang(0, 0, world);
        res.name = "远程回旋镖3级";
        res.r += 5;
        res.hpInit(6000);
        res.damage = 120;
        res.rangeR = 200;
        res.barWidth = 10;
        res.barRotateSelfSpeed = 0.8;
        res.bar = res.initBar();
        res.levelUpArr = [];
        res.levelDownGetter = BatteryFinally.Boomerang_Far_2;
        res.imgIndex = 2;
        res.price = 300;
        return res;
    }

    static Boomerang_Power_1(world) {
        let res = new BatteryBoomerang(0, 0, world);
        res.name = "力量回旋镖1级";
        res.hpInit(3000);
        res.damage = 250;
        res.rangeR = 100;
        res.barWidth = 10;
        res.barLen = 20;
        res.r += 2;
        res.barRotateSelfSpeed = 0.2;
        res.bar = res.initBar();
        res.levelUpArr = [BatteryFinally.Boomerang_Power_2];
        res.levelDownGetter = BatteryFinally.Boomerang;
        res.imgIndex = 2;
        res.price = 300;
        return res;
    }

    static Boomerang_Power_2(world) {
        let res = new BatteryBoomerang(0, 0, world);
        res.name = "力量回旋镖2级";
        res.hpInit(5000);
        res.damage = 500;
        res.rangeR = 100;
        res.barWidth = 15;
        res.barLen = 30;
        res.r += 3;
        res.barRotateSelfSpeed = 0.1;
        res.bar = res.initBar();
        res.levelUpArr = [BatteryFinally.Boomerang_Power_3];
        res.levelDownGetter = BatteryFinally.Boomerang_Power_1;
        res.imgIndex = 2;
        res.price = 350;
        return res;
    }

    static Boomerang_Power_3(world) {
        let res = new BatteryBoomerang(0, 0, world);
        res.name = "力量回旋镖3级";
        res.hpInit(10000);
        res.damage = 800;
        res.rangeR = 110;
        res.barWidth = 20;
        res.barLen = 40;
        res.r += 4;
        res.barRotateSelfSpeed = 0.05;
        res.bar = res.initBar();
        res.levelUpArr = [];
        res.levelDownGetter = BatteryFinally.Boomerang_Power_2;
        res.imgIndex = 2;
        res.price = 400;
        return res;
    }

    static ArrowBow_1(world) {
        let res = new Battery(0, 0, world);
        res.name = "弓箭塔1级";
        res.r += 2;
        res.hpInit(1500);
        res.rangeR = 200;
        res.clock = 15;
        res.getmMainBullyFunc = BullyFinally.Arrow;

        res.levelUpArr = [BatteryFinally.ArrowBow_2, BatteryFinally.Crossbow_1];
        res.levelDownGetter = BatteryFinally.AncientCannon;
        res.imgIndex = 4;
        res.price = 60;
        return res;
    }

    static ArrowBow_2(world) {
        let res = new Battery(0, 0, world);
        res.name = "弓箭塔2级";
        res.r += 3;
        res.hpInit(2000);
        res.rangeR = 250;
        res.clock = 12;
        res.bullySpeed = 10;
        res.getmMainBullyFunc = BullyFinally.Arrow_L;

        res.levelUpArr = [BatteryFinally.ArrowBow_3];
        res.levelDownGetter = BatteryFinally.ArrowBow_1;
        res.imgIndex = 4;
        res.price = 70;
        return res;
    }

    static ArrowBow_3(world) {
        let res = new Battery(0, 0, world);
        res.name = "弓箭塔3级";
        res.r += 4;
        res.hpInit(5000);
        res.rangeR = 300;
        res.clock = 10;
        res.bullySpeed = 12;
        res.getmMainBullyFunc = BullyFinally.Arrow_L;

        res.levelUpArr = [BatteryFinally.ArrowBow_4];
        res.levelDownGetter = BatteryFinally.ArrowBow_2;
        res.imgIndex = 4;
        res.price = 80;
        return res;
    }

    static ArrowBow_4(world) {
        let res = new Battery(0, 0, world);
        res.name = "弓箭塔4级";
        res.hpInit(8000);
        res.rangeR = 320;
        res.clock = 8;
        res.bullySpeed = 13;
        res.r += 5;
        res.getmMainBullyFunc = BullyFinally.Arrow_LL;

        res.levelUpArr = [];
        res.levelDownGetter = BatteryFinally.ArrowBow_3;
        res.imgIndex = 4;
        res.price = 150;
        return res;
    }

    static Crossbow_1(world) {
        let res = new Battery(0, 0, world);
        res.name = "连弩1级";
        res.r += 3;
        res.hpInit(6000);
        res.rangeR = 160;
        res.clock = 11;
        res.bullySpeed = 10;
        res.attackBullyNum = 2;
        res.bullySpeedAddMax = 3;
        res.bullyDeviation = 3;
        res.getmMainBullyFunc = BullyFinally.Arrow;
        res.levelUpArr = [BatteryFinally.Crossbow_2];
        res.levelDownGetter = BatteryFinally.ArrowBow_1;
        res.imgIndex = 3;
        res.price = 120;
        return res;
    }

    static Crossbow_2(world) {
        let res = new Battery(0, 0, world);
        res.name = "连弩2级";
        res.r += 5;
        res.hpInit(10000);
        res.rangeR = 200;
        res.clock = 9;
        res.bullySpeed = 13;
        res.attackBullyNum = 3;
        res.bullySpeedAddMax = 5;
        res.bullyDeviation = 5;
        res.getmMainBullyFunc = BullyFinally.Arrow;
        res.levelUpArr = [BatteryFinally.Crossbow_3];
        res.levelDownGetter = BatteryFinally.Crossbow_1;
        res.imgIndex = 3;
        res.price = 130;
        return res;
    }

    static Crossbow_3(world) {
        let res = new Battery(0, 0, world);
        res.name = "连弩3级";
        res.r += 7;
        res.hpInit(20000);
        res.rangeR = 250;
        res.clock = 5;
        res.bullySpeed = 15;
        res.attackBullyNum = 4;
        res.bullySpeedAddMax = 5;
        res.bullyDeviation = 10;
        res.getmMainBullyFunc = BullyFinally.Arrow_L;
        res.levelUpArr = [];
        res.levelDownGetter = BatteryFinally.Crossbow_2;
        res.imgIndex = 3;
        res.price = 200;
        return res;
    }

    static Hammer(world) {
        let b = new BatteryHammer(0, 0, world);
        b.name = "流星锤";
        b.r += 3;

        b.hpInit(5000);
        b.rangeR = 80;
        b.itemDamage = 200;

        b.levelUpArr = [BatteryFinally.Hammer_Fast_1, BatteryFinally.Hammer_Power_1];
        b.levelDownGetter = BatteryFinally.AncientCannon;
        b.imgIndex = 5;
        b.price = 230;
        return b;
    }

    static Hammer_Fast_1(world) {
        let b = new BatteryHammer(0, 0, world);
        b.name = "快速流星锤1级";
        b.r += 5;

        b.hpInit(6000);
        b.rangeR = 100;
        b.itemRidus = 15;
        b.itemDamage = 250;
        b.itemSpeed = 4;
        b.additionItem = b.initAdditionItem()
        b.levelUpArr = [BatteryFinally.Hammer_Fast_2];
        b.levelDownGetter = BatteryFinally.Hammer;
        b.imgIndex = 5;
        b.price = 300;
        return b;
    }

    static Hammer_Fast_2(world) {
        let b = new BatteryHammer(0, 0, world);
        b.name = "快速流星锤2级";
        b.r += 7;

        b.hpInit(10000);
        b.rangeR = 150;
        b.itemRidus = 15;
        b.itemDamage = 300;
        b.itemSpeed = 3;
        b.additionItem = b.initAdditionItem()
        b.levelUpArr = [BatteryFinally.Hammer_Fast_3];
        b.levelDownGetter = BatteryFinally.Hammer_Fast_1;
        b.imgIndex = 5;
        b.price = 370;
        return b;
    }

    static Hammer_Fast_3(world) {
        let b = new BatteryHammer(0, 0, world);
        b.name = "快速流星锤3级";
        b.r += 8;
        b.hpInit(18000);
        b.rangeR = 180;
        b.itemRidus = 15;
        b.itemDamage = 400;
        b.itemSpeed = 2;
        b.additionItem = b.initAdditionItem()
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.Hammer_Fast_2;
        b.imgIndex = 5;
        b.price = 320;
        return b;
    }

    static Hammer_Power_1(world) {
        let b = new BatteryHammer(0, 0, world);
        b.name = "重型流星锤1级";
        b.r += 3;
        b.hpInit(10000);
        b.rangeR = 90;
        b.itemRidus = 30;
        b.itemDamage = 100;
        b.itemSpeed = 20;
        b.additionItem = b.initAdditionItem()
        b.levelUpArr = [BatteryFinally.Hammer_Power_2];
        b.levelDownGetter = BatteryFinally.Hammer_Power_2;
        b.imgIndex = 6;
        b.price = 400;
        return b;
    }

    static Hammer_Power_2(world) {
        let b = new BatteryHammer(0, 0, world);
        b.name = "重型流星锤2级";
        b.r += 5;
        b.hpInit(20000);
        b.rangeR = 100;
        b.itemRidus = 35;
        b.itemDamage = 100;
        b.itemSpeed = 30;
        b.additionItem = b.initAdditionItem()
        b.levelUpArr = [BatteryFinally.Hammer_Power_3];
        b.levelDownGetter = BatteryFinally.Hammer_Power_1;
        b.imgIndex = 6;
        b.price = 450;
        return b;
    }

    static Hammer_Power_3(world) {
        let b = new BatteryHammer(0, 0, world);
        b.name = "重型流星锤3级";
        b.r += 7;
        b.hpInit(30000);
        b.rangeR = 110;
        b.itemRidus = 38;
        b.itemDamage = 200;
        b.itemSpeed = 50;
        b.additionItem = b.initAdditionItem()
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.Hammer_Power_2;
        b.imgIndex = 6;
        b.price = 500;
        return b;
    }

    static StoneCannon(world) {
        let b = new Battery(0, 0, world);
        b.name = "加农炮";
        b.r += 3;
        b.rangeR = 120;
        b.clock = 20;
        b.bullySpeed = 3;
        b.bullySpeedAddMax = 7;
        b.bullySlideRate = 1.5;
        b.hpInit(3000);
        b.getmMainBullyFunc = BullyFinally.CannonStone_S;
        b.levelUpArr = [BatteryFinally.StoneCannon_Far_1, BatteryFinally.StoneCannon_Power_1];
        b.levelDownGetter = BatteryFinally.AncientCannon;
        b.imgIndex = 7;
        b.price = 100;
        return b;
    }

    static StoneCannon_Far_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "远程加农炮1级";
        b.r += 4;
        b.rangeR = 260;
        b.clock = 20;
        b.bullySpeed = 7;
        b.bullySpeedAddMax = 2;
        b.bullySlideRate = 2;
        b.hpInit(3000);
        b.getmMainBullyFunc = BullyFinally.CannonStone_S;
        b.levelUpArr = [BatteryFinally.StoneCannon_Far_2];
        b.levelDownGetter = BatteryFinally.StoneCannon;
        b.imgIndex = 8;
        b.price = 200;
        return b;
    }

    static StoneCannon_Far_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "远程加农炮2级";
        b.r += 5;
        b.rangeR = 270;
        b.clock = 20;
        b.bullySpeed = 7;
        b.bullySpeedAddMax = 3;
        b.bullySlideRate = 2.2;
        b.getmMainBullyFunc = BullyFinally.CannonStone_M;
        b.levelUpArr = [BatteryFinally.StoneCannon_Far_3];
        b.levelDownGetter = BatteryFinally.StoneCannon_Far_1;
        b.imgIndex = 8;
        b.price = 250;
        return b;
    }

    static StoneCannon_Far_3(world) {
        let b = new Battery(0, 0, world);
        b.name = "远程加农炮3级";
        b.r += 6;
        b.rangeR = 300;
        b.clock = 20;
        b.bullySpeed = 7;
        b.bullySpeedAddMax = 4;
        b.bullySlideRate = 2.2;
        b.getmMainBullyFunc = BullyFinally.CannonStone_M;
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.StoneCannon_Far_2;
        b.imgIndex = 8;
        b.price = 300;
        return b;
    }

    static StoneCannon_Power_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "重型加农炮1级";

        //
        b.rangeR = 180;
        b.clock = 50;
        b.bullySpeed = 8;
        b.bullySpeedAddMax = 1;
        b.bullySlideRate = 1.5;
        b.hpInit(9000);
        //
        b.r += 4;
        b.getmMainBullyFunc = BullyFinally.CannonStone_M;
        b.price = 1500;
        b.levelUpArr = [BatteryFinally.StoneCannon_Power_2];
        b.levelDownGetter = BatteryFinally.StoneCannon;
        b.imgIndex = 9;
        b.price = 120;
        return b;
    }

    static StoneCannon_Power_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "重型加农炮2级";
        b.r += 5;
        b.rangeR = 200;
        b.bullySpeed = 8;
        b.bullySlideRate = 2.5;
        b.clock = 50;
        b.hpInit(30000);
        b.getmMainBullyFunc = BullyFinally.CannonStone_L;
        b.price = 2000;
        b.levelUpArr = [BatteryFinally.StoneCannon_Power_3];
        b.levelDownGetter = BatteryFinally.StoneCannon_Power_1;
        b.imgIndex = 9;
        b.price = 300;
        return b;
    }

    static StoneCannon_Power_3(world) {
        let b = new Battery(0, 0, world);
        b.name = "重型加农炮3级";
        b.rangeR = 230;
        b.r += 6;
        b.bullySpeed = 10;
        b.clock += 55;
        b.hpInit(100000);
        b.getmMainBullyFunc = BullyFinally.R_M;
        b.getmMainBullyFunc = BullyFinally.CannonStone_L;
        b.price = 3000;
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.StoneCannon_Power_2;
        b.imgIndex = 9;
        b.price = 320;
        return b;
    }

    /**
     *  军事炮塔部分
     */
    static TraditionalCannon_Small(world) {
        let res = new Battery(0, 0, world);
        res.name = "小型炮塔";
        res.r += 2;
        res.rangeR = 200;
        res.clock = 3;
        res.getmMainBullyFunc = BullyFinally.Bully_S;
        res.levelUpArr = [BatteryFinally.Rifle_1, BatteryFinally.MachineGun_1, BatteryFinally.ArmorPiercing_1];
        res.levelDownGetter = BatteryFinally.TraditionalCannon;
        res.imgIndex = 21;
        res.price = 120;
        return res;
    }

    static TraditionalCannon_Middle(world) {
        let res = new Battery(0, 0, world);
        res.name = "中型炮塔";
        res.rangeR = 200;
        res.r += 3;
        res.clock = 3;
        res.getmMainBullyFunc = BullyFinally.Bully_M;
        res.levelDownGetter = BatteryFinally.TraditionalCannon;
        res.levelUpArr = [BatteryFinally.AirCannon_1, BatteryFinally.Earthquake];
        res.imgIndex = 22;
        res.price = 130;
        return res;
    }

    static TraditionalCannon_Large(world) {
        let res = new Battery(0, 0, world);
        res.name = "大型炮塔";
        res.rangeR = 200;
        res.r += 4;
        res.getmMainBullyFunc = BullyFinally.Bully_L;
        res.clock = 3;
        res.levelDownGetter = BatteryFinally.TraditionalCannon;
        res.imgIndex = 23;
        res.levelUpArr = [BatteryFinally.Artillery_1, BatteryFinally.MissileGun_1];
        res.price = 140;
        return res;
    }

    static TraditionalCannon_MultiTube(world) {
        let res = new Battery(0, 0, world);
        res.name = "双管炮塔";
        res.rangeR = 200;
        res.r += 4;
        res.getmMainBullyFunc = BullyFinally.Bully_M;
        res.bullyRotate = Math.PI / 36;
        res.attackFunc = res.shrapnelAttack;
        res.attackBullyNum = 2;
        res.clock = 4;

        res.levelDownGetter = BatteryFinally.TraditionalCannon;
        res.imgIndex = 24;
        res.levelUpArr = [BatteryFinally.ThreeTubeCannon, BatteryFinally.SprayCannon_1, BatteryFinally.PowderCannon];
        res.price = 135;
        return res;
    }

    static Rifle_1(world) {
        let res = new Battery(0, 0, world);
        res.name = "1级步枪";
        res.r += 3;
        res.rangeR = 200;
        res.clock = 4;
        res.bullySpeed += 3;
        res.getmMainBullyFunc = BullyFinally.Rifle_Bully_L;
        res.levelDownGetter = BatteryFinally.TraditionalCannon_Small;
        res.levelUpArr = [BatteryFinally.Rifle_2];
        res.imgIndex = 25;
        res.price = 160;
        return res;
    }

    static Rifle_2(world) {
        let res = new Battery(0, 0, world);
        res.name = "2级步枪";
        res.r += 3;
        res.rangeR = 230;
        res.clock = 3;
        res.bullySpeed += 4;
        res.getmMainBullyFunc = BullyFinally.Rifle_Bully_M;
        res.levelUpArr = [BatteryFinally.Rifle_3]
        res.levelDownGetter = BatteryFinally.Rifle_1;
        res.imgIndex = 25;
        res.price = 170;
        return res;
    }

    static Rifle_3(world) {
        let res = new Battery(0, 0, world);
        res.name = "3级步枪";
        res.r += 4;
        res.rangeR = 260;
        res.clock = 3;
        res.bullySpeed += 5;
        res.getmMainBullyFunc = BullyFinally.Rifle_Bully_L;
        res.levelUpArr = [];
        res.levelDownGetter = BatteryFinally.Rifle_2;
        res.imgIndex = 25;
        res.price = 180;
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
        b.price = 250;
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
        b.price = 300;
        return b;
    }

    static MachineGun_3(world) {
        let b = new Battery(0, 0, world);
        b.name = "3级重机枪";
        b.rangeR = 250;
        b.r += 7;

        b.bullySpeed = 8.2;
        b.bullySlideRate = 1;
        b.bullySpeedAddMax = 3;
        b.getmMainBullyFunc = BullyFinally.F_L;
        b.clock = 1;
        b.hpInit(10000);
        b.bullyDeviation = 30;
        b.attackBullyNum = 3;
        b.price = 400;
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.MachineGun_2;
        b.imgIndex = 27;
        b.price = 500;
        return b;
    }

    static ArmorPiercing_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级穿甲炮";
        b.rangeR = 200;
        b.r += 5;
        b.bullySpeed += 3;
        b.bullySlideRate = 3;
        b.clock = 4;
        b.hpInit(1500);
        b.getmMainBullyFunc = BullyFinally.T_M;
        b.price = 160;
        b.levelDownGetter = BatteryFinally.TraditionalCannon_Small;
        b.levelUpArr = [BatteryFinally.ArmorPiercing_2];
        b.imgIndex = 28;
        b.price = 220;
        return b;
    }

    static ArmorPiercing_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级穿甲炮";
        b.rangeR = 220;
        b.r += 7;
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
        b.price = 250;
        return b;
    }

    static ArmorPiercing_3(world) {
        let b = new Battery(0, 0, world);
        b.name = "3级穿甲炮";
        b.rangeR = 230;
        b.r += 9;
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
        b.price = 400;
        return b;
    }

    static Artillery_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级火炮";
        b.rangeR += 200;
        b.r += 7;
        b.bullySpeed = 1;
        b.bullySlideRate = 1.2;
        b.bullySpeedAddMax = 1;
        b.clock += 20;
        b.getmMainBullyFunc = BullyFinally.H_S;
        b.hpInit(5000);
        b.price = 300;
        b.levelDownGetter = BatteryFinally.TraditionalCannon_Large;
        b.levelUpArr = [BatteryFinally.Artillery_2];
        b.imgIndex = 33;
        b.price = 500;
        return b;
    }

    static Artillery_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级火炮";
        b.rangeR = 250;
        b.r += 9;
        b.bullySpeed = 1;
        b.bullySlideRate = 1.2;
        b.bullySpeedAddMax = 1;
        b.clock += 25;
        b.getmMainBullyFunc = BullyFinally.H_L;
        b.hpInit(8800);
        b.attackBullyNum = 2;
        b.attackFunc = b.shrapnelAttack;
        b.bullyDeviationRotate = 0.2;
        b.bullyRotate = Math.PI / 12;
        b.price = 600;
        b.levelDownGetter = BatteryFinally.Artillery_1;
        b.levelUpArr = [BatteryFinally.Artillery_3];
        b.imgIndex = 34;
        b.price = 800;
        return b;
    }

    static Artillery_3(world) {
        let b = new Battery(0, 0, world);
        b.name = "3级火炮";
        b.rangeR = 300;
        b.r += 11;
        b.bullySpeed = 1;
        b.bullySlideRate = 1.1;
        b.clock += 40;
        b.getmMainBullyFunc = BullyFinally.H_LL;
        b.hpInit(30000);
        b.attackBullyNum = 2;
        b.bullyDeviationRotate = 0.8;
        b.price = 1000;
        b.attackFunc = b.shrapnelAttack;
        b.bullyRotate = Math.PI / 12;
        b.levelDownGetter = BatteryFinally.Artillery_2;
        b.levelUpArr = [];
        b.imgIndex = 34;
        b.price = 1000;
        return b;
    }

    static MissileGun_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级跟踪导弹炮";
        b.rangeR = 250;
        b.r += 8;
        b.bullySpeed = 7;
        b.bullySlideRate = 6;
        b.clock += 10;
        b.getmMainBullyFunc = BullyFinally.H_Target_S;
        b.hpInit(10000);
        b.attackBullyNum = 1;
        b.price = 1000;
        b.levelDownGetter = BatteryFinally.TraditionalCannon_Large;
        b.levelUpArr = [BatteryFinally.MissileGun_2];
        b.imgIndex = 35;
        b.price = 700;
        return b;
    }

    static MissileGun_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级跟踪导弹炮";
        b.rangeR = 250;
        b.r += 11;
        b.bullySpeed = 8;
        b.bullySlideRate = 6;
        b.clock += 10;
        b.getmMainBullyFunc = BullyFinally.H_Target_S;
        b.hpInit(10000);
        b.attackBullyNum = 3;
        b.bullyRotate = Math.PI / 6;
        b.attackFunc = b.shrapnelAttack;
        b.price = 1000;
        b.levelDownGetter = BatteryFinally.MissileGun_1;
        b.levelUpArr = [BatteryFinally.MissileGun_3];
        b.imgIndex = 35;
        b.price = 750;
        return b;
    }

    static MissileGun_3(world) {
        let b = new Battery(0, 0, world);
        b.name = "3级跟踪导弹炮";
        b.rangeR = 250;
        b.r += 15;
        b.bullySpeed = 10;
        b.bullySlideRate = 6;
        b.clock += 10;
        b.getmMainBullyFunc = BullyFinally.H_Target_S;
        b.hpInit(10000);
        b.attackBullyNum = 5;
        b.bullyRotate = Math.PI / 6;
        b.attackFunc = b.shrapnelAttack;
        b.price = 1000;
        b.levelDownGetter = BatteryFinally.MissileGun_2;
        b.levelUpArr = [];
        b.imgIndex = 35;
        b.price = 1000;
        return b;
    }

    static AirCannon_1(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "1级空气炮"
        b.r += 5;
        b.rayMoveSpeed = 8;
        b.rayMaxRange = 300;

        b.rayClock = 50;
        b.rayLen = 30;  // 射线的长度
        b.rayColor = new MyColor(103, 150, 138, 0.5);
        b.rayWidth = 10;
        b.rayRepel = 0.1;
        b.hpInit(4000);
        b.rangeR = 120;
        b.attackFunc = b.gerAttack;
        b.levelDownGetter = BatteryFinally.TraditionalCannon_Middle;
        b.levelUpArr = [BatteryFinally.AirCannon_2];
        b.imgIndex = 30;
        b.price = 300;
        return b;
    }

    static AirCannon_2(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "2级空气炮"
        b.r += 7;
        b.rayMoveSpeed = 9;
        b.rayMaxRange = 300;
        b.rayClock = 50;
        b.rayLen = 40;  // 射线的长度
        b.rayRepel = 0.2;
        b.attackFunc = b.gerAttack;
        b.hpInit(5000);
        b.rangeR = 130;
        b.rayColor = new MyColor(103, 150, 138, 0.5);
        b.levelDownGetter = BatteryFinally.AirCannon_1;
        b.levelUpArr = [BatteryFinally.AirCannon_3];
        b.imgIndex = 30;
        b.price = 320;
        return b;
    }

    static AirCannon_3(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "3级空气炮"
        b.r += 8;
        b.rayMoveSpeed = 10;
        b.rayMaxRange = 300;
        b.rayClock = 50;
        b.rayLen = 50;  // 射线的长度
        b.rayRepel = 0.25;
        b.attackFunc = b.gerAttack;
        b.hpInit(10000);
        b.rangeR = 150;
        b.rayColor = new MyColor(103, 150, 138, 0.5);
        b.levelDownGetter = BatteryFinally.AirCannon_2;
        b.levelUpArr = [];
        b.imgIndex = 30;
        b.price = 400;
        return b;
    }

    static Earthquake(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "地震发生器"
        b.r += 5;

        b.laserBaseDamage = 500;
        b.laserFreezeMax = 50;
        b.laserMaxDamage = 200;
        b.laserDamagePreAdd = 5;
        b.rangeR = 120;
        b.hpInit(5000);

        b.attackFunc = b.earthquakeAttack;
        b.levelDownGetter = BatteryFinally.TraditionalCannon_Middle;
        b.levelUpArr = [BatteryFinally.Earthquake_Power_1, BatteryFinally.Earthquake_Speed_1];
        b.imgIndex = 31;
        b.price = 250;
        return b;
    }

    static Earthquake_Power_1(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "1级重型地震发生器";
        b.r += 10;

        b.laserBaseDamage = 5000;
        b.laserFreezeMax = 500;
        b.laserMaxDamage = 5000;
        b.laserDamagePreAdd = 20;
        b.rangeR = 250;
        b.hpInit(10000);

        b.attackFunc = b.earthquakeAttack;
        b.levelDownGetter = BatteryFinally.Earthquake;
        b.levelUpArr = [BatteryFinally.Earthquake_Power_2];
        b.imgIndex = 32;
        b.price = 260;
        return b;
    }

    static Earthquake_Power_2(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "2级重型地震发生器"
        b.r += 15;

        b.laserBaseDamage = 10000;
        b.laserFreezeMax = 500;
        b.laserMaxDamage = 10000;
        b.laserDamagePreAdd = 50;
        b.rangeR = 260;
        b.hpInit(100000);

        b.attackFunc = b.earthquakeAttack;
        b.levelDownGetter = BatteryFinally.Earthquake_Power_1;
        b.levelUpArr = [];
        b.imgIndex = 32;
        b.price = 300;
        return b;
    }

    static Earthquake_Speed_1(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "1级高频地震发生器"
        b.r += 10;

        b.laserBaseDamage = 100;
        b.laserFreezeMax = 5;
        b.laserMaxDamage = 200;
        b.laserDamagePreAdd = 5;
        b.rangeR = 250;
        b.hpInit(6000);

        b.attackFunc = b.earthquakeAttack;
        b.levelDownGetter = BatteryFinally.Earthquake;
        b.levelUpArr = [BatteryFinally.Earthquake_Speed_2];
        b.imgIndex = 31;
        b.price = 260;
        return b;
    }

    static Earthquake_Speed_2(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "2级高频地震发生器"
        b.r += 12;

        b.laserBaseDamage = 110;
        b.laserFreezeMax = 2;
        b.laserMaxDamage = 300;
        b.laserDamagePreAdd = 5;
        b.rangeR = 300;
        b.hpInit(9000);

        b.laserBaseDamage = 10;
        b.attackFunc = b.earthquakeAttack;
        b.levelDownGetter = BatteryFinally.Earthquake_Speed_1;
        b.levelUpArr = [];
        b.imgIndex = 31;
        b.price = 400;
        return b;
    }

    static PowderCannon(world) {
        let b = new Battery(0, 0, world);
        b.name = "粉尘炮塔"
        b.r += 5;
        b.rangeR = 150;
        b.bullySpeed = 10;
        b.clock = 1;
        b.laserBaseDamage = 10;
        b.getmMainBullyFunc = BullyFinally.Powder;
        b.bullyDeviationRotate = 3;

        b.levelDownGetter = BatteryFinally.TraditionalCannon_MultiTube;
        b.levelUpArr = [BatteryFinally.Flamethrower_1, BatteryFinally.FrozenCannon_1, BatteryFinally.Poison_1];
        b.imgIndex = 36;
        b.price = 260;
        return b;
    }

    static Flamethrower_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级喷火器";
        b.r += 7;
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
        b.price = 420;
        return b;
    }

    static Flamethrower_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级喷火器";
        b.r += 9;
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
        b.price = 500;
        return b;
    }

    static FrozenCannon_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级冰冻炮";
        b.rangeR = 150;
        b.r += 7;

        b.bullySpeed = 4;
        b.bullySlideRate = 1;
        b.getmMainBullyFunc = BullyFinally.Frozen_L;
        b.clock = 10;
        b.hpInit(2000);
        b.price = 6000;
        b.levelDownGetter = BatteryFinally.PowderCannon;
        b.levelUpArr = [BatteryFinally.FrozenCannon_2];
        b.imgIndex = 39;
        b.price = 620;
        return b;
    }

    static FrozenCannon_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级冰冻炮";
        b.rangeR = 200;
        b.r += 8;

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
        b.price = 1200;
        return b;
    }

    static Poison_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级毒气喷射器";
        b.r += 8;
        b.rangeR = 250;
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
        b.price = 400;
        return b;
    }

    static Poison_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级毒气喷射器";
        b.r += 9.5;
        b.rangeR = 260;
        b.bullySpeed = 9;
        b.clock = 13;

        b.hpInit(15000);
        b.getmMainBullyFunc = BullyFinally.P_M;
        b.attackBullyNum = 10;
        b.bullyDeviationRotate = 8;
        b.price = 3000;
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.Poison_1;
        b.imgIndex = 38;
        b.price = 600;
        return b;
    }

    static ThreeTubeCannon(world) {
        let b = new Battery(0, 0, world);
        b.name = "三管炮塔";
        b.r += 6;
        b.rangeR = 230;

        b.bullySpeed = 3;

        b.getmMainBullyFunc = BullyFinally.Bully_M;
        b.bullyRotate = Math.PI / 12;
        b.attackFunc = b.shrapnelAttack;
        b.attackBullyNum = 3;
        b.clock = 4;

        b.levelDownGetter = BatteryFinally.TraditionalCannon_MultiTube;
        b.levelUpArr = [BatteryFinally.Shotgun_1, BatteryFinally.ShotCannon_1];
        b.imgIndex = 42;
        b.price = 400;
        return b;
    }

    static Shotgun_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级快速散弹";

        b.rangeR = 250;
        b.bullySpeed = 3;
        b.bullySpeedAddMax = 0.5;
        b.getmMainBullyFunc = BullyFinally.Bully_M;
        b.bullyRotate = Math.PI / 10;
        b.attackFunc = b.shrapnelAttack;
        b.attackBullyNum = 5;
        b.clock = 3;
        b.r += 10;
        b.hpInit(5000);

        b.levelDownGetter = BatteryFinally.ThreeTubeCannon;
        b.levelUpArr = [BatteryFinally.Shotgun_2];
        b.imgIndex = 44;
        b.price = 500;
        return b;
    }

    static Shotgun_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级快速散弹";
        b.r += 11;
        b.rangeR = 260;
        b.bullySpeed = 2.8;
        b.bullySpeedAddMax = 0.7;
        b.getmMainBullyFunc = BullyFinally.Bully_M;
        b.bullyRotate = Math.PI / 6;
        b.attackFunc = b.shrapnelAttack;
        b.attackBullyNum = 10;
        b.clock = 2;
        b.r += 12;
        b.hpInit(10000);

        b.levelDownGetter = BatteryFinally.Shotgun_1;
        b.levelUpArr = [];
        b.imgIndex = 44;
        b.price = 800;
        return b;
    }

    static ShotCannon_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级喷泄炮";
        b.r += 10;
        b.rangeR = 225;
        b.clock = 15;
        b.bullySpeed = 3;
        b.bullySlideRate = 1;
        b.bullySpeedAddMax = 14;

        b.hpInit(5000);
        b.attackBullyNum = 40;
        b.bullyDeviationRotate = 5;
        b.getmMainBullyFunc = BullyFinally.Bully_M;

        b.price = 200;
        b.levelDownGetter = BatteryFinally.ThreeTubeCannon;
        b.levelUpArr = [BatteryFinally.ShotCannon_2];
        b.imgIndex = 43;
        b.price = 600;
        return b;
    }

    static ShotCannon_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级喷泄炮";
        b.r += 11;
        b.rangeR += 235;
        b.clock = 18;
        b.bullySpeed = 3;
        b.bullySlideRate = 1.1;
        b.bullySpeedAddMax = 16;

        b.hpInit(5000);
        b.attackBullyNum = 100;
        b.bullyDeviationRotate = 8;
        b.getmMainBullyFunc = BullyFinally.Bully_M;

        b.levelDownGetter = BatteryFinally.ShotCannon_1;
        b.levelUpArr = [];
        b.imgIndex = 43;
        b.price = 900;
        return b;
    }

    static SprayCannon_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级溅射炮塔";
        b.rangeR = 100;
        b.r += 10;
        b.bullySpeed = 5;
        b.clock += 20;
        b.hpInit(1000);

        b.getmMainBullyFunc = BullyFinally.SS_S;
        b.price = 300;
        b.levelDownGetter = BatteryFinally.TraditionalCannon_MultiTube;
        b.levelUpArr = [BatteryFinally.SprayCannon_2, BatteryFinally.SprayCannon_Double];
        b.imgIndex = 40;
        b.price = 250;
        return b;
    }

    static SprayCannon_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级溅射炮塔";
        b.rangeR = 150;
        b.r += 11;
        b.bullySpeed = 8;
        b.clock += 20;
        b.hpInit(3000);
        b.getmMainBullyFunc = BullyFinally.SS_M;
        b.price = 500;
        b.levelDownGetter = BatteryFinally.SprayCannon_1;
        b.levelUpArr = [BatteryFinally.SprayCannon_3];
        b.imgIndex = 40;
        b.price = 360;
        return b;
    }

    static SprayCannon_3(world) {
        let b = new Battery(0, 0, world);
        b.name = "3级溅射炮塔";
        b.rangeR = 200;
        b.r += 12;
        b.bullySpeed = 11;
        b.clock += 20;
        b.hpInit(5000);
        b.getmMainBullyFunc = BullyFinally.SS_L;
        b.price = 1000;
        b.levelDownGetter = BatteryFinally.SprayCannon_2;
        b.levelUpArr = [];
        b.imgIndex = 40;
        b.price = 500;
        return b;
    }

    static SprayCannon_Double(world) {
        let b = new Battery(0, 0, world);
        b.name = "二次溅射炮塔";
        b.rangeR = 250;
        b.r += 13;
        b.bullySpeed = 15;
        b.clock += 20;
        b.hpInit(10000);
        b.getmMainBullyFunc = BullyFinally.SS_Second;
        b.price = 10000;
        b.levelDownGetter = BatteryFinally.SprayCannon_1;
        b.levelUpArr = [BatteryFinally.SprayCannon_Three];
        b.imgIndex = 41;
        b.price = 600;
        return b;
    }

    static SprayCannon_Three(world) {
        let b = new Battery(0, 0, world);
        b.name = "三次溅射炮塔";
        b.rangeR = 250;
        b.r += 15;
        b.bullySpeed = 15;
        b.clock += 20;
        b.hpInit(10000);
        b.getmMainBullyFunc = BullyFinally.SS_Third;
        b.price = 10000;
        b.levelDownGetter = BatteryFinally.SprayCannon_Double;
        b.levelUpArr = [];
        b.imgIndex = 41;
        b.price = 900;
        return b;
    }

    static FutureCannon_2(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "2级高科技塔";
        b.r += 5;
        b.hpInit(10000);
        b.rangeR = 170;
        b.rayMoveSpeed = 15;
        b.rayMaxRange = 250;
        b.rayClock = 6;
        b.rayNum = 1;
        b.rayDeviationRotate = 0;
        b.damage = 20;
        b.rayThrowAble = false;
        b.attackFunc = b.shootingAttack;
        b.rayLen = 30;  // 射线的长度
        b.rayWidth = 4;
        b.rayColor = new MyColor(69, 200, 165, 0.9);

        b.levelDownGetter = BatteryFinally.FutureCannon_1;
        b.levelUpArr = [BatteryFinally.FutureCannon_3];
        b.imgIndex = 51;
        b.price = 300;
        return b;
    }

    static FutureCannon_3(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "3级高科技塔";
        b.r += 7;

        b.hpInit(20000);
        b.rangeR = 200;
        b.rayMoveSpeed = 17;
        b.rayMaxRange = 300;
        b.rayClock = 5;
        b.rayNum = 1;
        b.rayDeviationRotate = 0.1;
        b.damage = 35;
        b.rayThrowAble = true;
        b.attackFunc = b.shootingAttack;
        b.rayLen = 40;  // 射线的长度
        b.rayWidth = 5;
        b.rayColor = new MyColor(69, 195, 165, 0.6);

        b.levelDownGetter = BatteryFinally.FutureCannon_2;
        b.levelUpArr = [BatteryFinally.FutureCannon_4];
        b.imgIndex = 52;
        b.price = 600;
        return b;
    }

    static FutureCannon_4(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "4级高科技塔";
        b.r += 9;
        b.hpInit(50000);
        b.rangeR = 250;
        b.rayMoveSpeed = 16;
        b.rayMaxRange = 400;
        b.rayClock = 4;
        b.rayNum = 1;
        b.rayDeviationRotate = 0;
        b.damage = 37;
        b.rayThrowAble = true;
        b.attackFunc = b.shootingAttack;
        b.rayLen = 40;  // 射线的长度
        b.rayDeviationRotate = 0.2;
        b.rayWidth = 6;
        b.rayColor = new MyColor(69, 180, 165, 0.6);
        b.levelDownGetter = BatteryFinally.FutureCannon_3;
        b.levelUpArr = [BatteryFinally.FutureCannon_5];
        b.imgIndex = 53;
        b.price = 800;
        return b;
    }

    static FutureCannon_5(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "5级高科技塔";
        b.r += 12;
        b.hpInit(100000);
        b.rangeR = 280;
        b.rayMoveSpeed = 16;
        b.rayMaxRange = 400;
        b.rayClock = 2;
        b.rayNum = 1;
        b.rayDeviationRotate = 0.3;
        b.damage = 40;
        b.rayThrowAble = true;
        b.attackFunc = b.shootingAttack;
        b.rayLen = 45;  // 射线的长度
        b.rayWidth = 7;
        b.rayColor = new MyColor(69, 150, 165, 0.6);
        b.levelDownGetter = BatteryFinally.FutureCannon_4;
        b.levelUpArr = [];
        b.imgIndex = 54;
        b.price = 1200;
        return b;
    }

    static Thunder_1(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "1级雷电塔";
        b.r += 5;
        b.rangeR = 250;
        b.laserFreezeMax = 30;
        b.laserBaseDamage = 300;
        b.laserMaxDamage = 500;
        b.laserDamagePreAdd = 1;
        b.zapCount = 3;  // 最多目标打击数量
        b.damageMultipleRate = 1.1;  // 每多打一个目标，攻击伤害就翻多少倍
        b.zapLen = 100;  // 闪电连续段最长范围
        b.zapInitColor = new MyColor(0, 200, 255, 0.9);
        b.attackFunc = b.zapAttack;

        b.levelUpArr = [BatteryFinally.Thunder_2, BatteryFinally.ThunderBall_1];
        b.levelDownGetter = BatteryFinally.FutureCannon_1;
        b.imgIndex = 55;
        b.price = 400;
        return b;
    }

    static ThunderBall_1(world) {
        let b = new Battery(0, 0, world);
        b.name = "1级球状闪电发生器";
        b.rangeR = 280;
        b.r += 7;
        b.bullySpeed = 10;
        b.clock = 30;
        b.getmMainBullyFunc = BullyFinally.ThunderBall;
        b.price = 520;
        b.hpInit(15000);
        b.levelUpArr = [BatteryFinally.ThunderBall_2];
        b.levelDownGetter = BatteryFinally.Thunder_1;
        b.imgIndex = 56;
        b.price = 1000;
        return b;
    }

    static ThunderBall_2(world) {
        let b = new Battery(0, 0, world);
        b.name = "2级球状闪电发生器";
        b.rangeR = 290;
        b.r += 12;
        b.bullySpeed = 15;
        b.clock = 18;
        b.getmMainBullyFunc = BullyFinally.ThunderBall;
        b.price = 520;
        b.hpInit(16000);
        b.levelUpArr = [BatteryFinally.ThunderBall_3];
        b.levelDownGetter = BatteryFinally.ThunderBall_1;
        b.imgIndex = 56;
        b.price = 600;
        return b;
    }

    static ThunderBall_3(world) {
        let b = new Battery(0, 0, world);
        b.name = "3级球状闪电发生器";
        b.rangeR = 300;
        b.r += 13;
        b.bullySpeed = 20;
        b.clock = 16;
        b.getmMainBullyFunc = BullyFinally.ThunderBall;
        b.price = 520;
        b.hpInit(20000);
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.ThunderBall_2;
        b.imgIndex = 56;
        b.price = 600;
        return b;
    }

    static Thunder_2(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "2级雷电塔"
        b.r += 10;
        b.rangeR = 270;
        b.laserFreezeMax = 30;
        b.laserBaseDamage = 300;
        b.laserMaxDamage = 500;
        b.laserDamagePreAdd = 1;
        b.zapCount = 5;  // 最多目标打击数量
        b.damageMultipleRate = 1.2;  // 每多打一个目标，攻击伤害就翻多少倍
        b.zapLen = 110;  // 闪电连续段最长范围
        b.zapInitColor = new MyColor(0, 200, 255, 0.9);
        b.attackFunc = b.zapAttack;
        b.levelUpArr = [BatteryFinally.Thunder_Far_1, BatteryFinally.Thunder_Power_1];
        b.levelDownGetter = BatteryFinally.Thunder_1;
        b.imgIndex = 55;
        b.price = 600;
        return b;
    }

    static Thunder_Far_1(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "1级远程雷电塔"
        b.r += 12;
        b.rangeR = 300;
        b.laserFreezeMax = 20;
        b.laserBaseDamage = 150;
        b.laserMaxDamage = 100;
        b.laserDamagePreAdd = 10;
        b.zapCount = 10;  // 最多目标打击数量
        b.damageMultipleRate = 0.9;  // 每多打一个目标，攻击伤害就翻多少倍
        b.zapLen = 300;  // 闪电连续段最长范围
        b.zapInitColor = new MyColor(255, 20, 100, 0.9);
        b.attackFunc = b.zapAttack;
        b.levelUpArr = [BatteryFinally.Thunder_Far_2];
        b.levelDownGetter = BatteryFinally.Thunder_2;
        b.imgIndex = 55;
        b.price = 600;
        return b;
    }

    static Thunder_Far_2(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "2级远程雷电塔"
        b.r += 13;
        b.rangeR = 320;
        b.laserFreezeMax = 18;
        b.laserBaseDamage = 140;
        b.laserMaxDamage = 120;
        b.laserDamagePreAdd = 8;
        b.zapCount = 20;  // 最多目标打击数量
        b.damageMultipleRate = 0.85;  // 每多打一个目标，攻击伤害就翻多少倍
        b.zapLen = 500;  // 闪电连续段最长范围
        b.zapInitColor = new MyColor(255, 20, 20, 0.9);
        b.attackFunc = b.zapAttack;
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.Thunder_Far_1;
        b.imgIndex = 55;
        b.price = 600;
        return b;
    }

    static Thunder_Power_1(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "1级强力雷电塔"
        b.r += 10;
        b.rangeR = 250;
        b.laserFreezeMax = 60;
        b.laserBaseDamage = 500;
        b.laserMaxDamage = 500;
        b.laserDamagePreAdd = 3;
        b.zapCount = 3;  // 最多目标打击数量
        b.damageMultipleRate = 1.8;  // 每多打一个目标，攻击伤害就翻多少倍
        b.zapLen = 110;  // 闪电连续段最长范围
        b.zapInitColor = new MyColor(0, 20, 255, 0.9);
        b.attackFunc = b.zapAttack;
        b.levelUpArr = [BatteryFinally.Thunder_Power_2];
        b.levelDownGetter = BatteryFinally.Thunder_2;
        b.imgIndex = 55;
        b.price = 400;
        return b;
    }

    static Thunder_Power_2(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "2级强力雷电塔"
        b.r += 12;
        b.rangeR = 245;
        b.laserFreezeMax = 70;
        b.laserBaseDamage = 700;
        b.laserMaxDamage = 1000;
        b.laserDamagePreAdd = 3;
        b.zapCount = 3;  // 最多目标打击数量
        b.damageMultipleRate = 2;  // 每多打一个目标，攻击伤害就翻多少倍
        b.zapLen = 90;  // 闪电连续段最长范围
        b.zapInitColor = new MyColor(255, 0, 255, 0.9);
        b.attackFunc = b.zapAttack;
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.Thunder_Power_1;
        b.imgIndex = 55;
        b.price = 1000;
        return b;
    }

    static Laser(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "激光塔";
        b.r += 6;

        b.rangeR = 120;
        b.laserBaseDamage = 50;  // 直接打中的激光炮的伤害
        b.laserFreezeMax = 10;  // 多少个时间刻度
        b.laserMaxDamage = 300;  // 最大蓄力强度
        b.laserDamagePreAdd = 1;  // 蓄力后每个tick增加多少攻击力
        b.laserColor = new MyColor(100, 100, 100, 0.7);

        b.levelUpArr = [BatteryFinally.Laser_Blue_1, BatteryFinally.Laser_Red, BatteryFinally.Laser_Green_1];
        b.levelDownGetter = BatteryFinally.FutureCannon_1;
        b.imgIndex = 60;
        b.price = 350;
        return b;
    }

    static Laser_Blue_1(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "1级蓝激光";
        b.rangeR = 130;
        b.laserBaseDamage = 150;  // 直接打中的激光炮的伤害
        b.laserFreezeMax = 20;  // 多少个时间刻度
        b.laserMaxDamage = 700;  // 最大蓄力强度
        b.laserDamagePreAdd = 5;  // 蓄力后每个tick增加多少攻击力

        b.r += 7;
        b.levelUpArr = [BatteryFinally.Laser_Blue_2, BatteryFinally.Laser_Hell_1];
        b.levelDownGetter = BatteryFinally.Laser;
        b.imgIndex = 59;
        b.price = 600;
        return b;
    }

    static Laser_Blue_2(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "2级蓝激光";
        b.r += 10;
        b.rangeR = 150;
        b.laserBaseDamage = 300;  // 直接打中的激光炮的伤害
        b.laserFreezeMax = 20;  // 多少个时间刻度
        b.laserMaxDamage = 1000;  // 最大蓄力强度
        b.laserDamagePreAdd = 10;  // 蓄力后每个tick增加多少攻击力
        b.levelUpArr = [BatteryFinally.Laser_Blue_3];
        b.levelDownGetter = BatteryFinally.Laser_Blue_1;
        b.imgIndex = 59;
        b.price = 1200;
        return b;
    }

    static Laser_Blue_3(world) {
        let b = new BatteryLaser(0, 0, world);
        b.name = "3级蓝激光";
        b.r += 13;
        b.rangeR = 170;
        b.laserBaseDamage = 500;  // 直接打中的激光炮的伤害
        b.laserFreezeMax = 30;  // 多少个时间刻度
        b.laserMaxDamage = 5000;  // 最大蓄力强度
        b.laserDamagePreAdd = 10;  // 蓄力后每个tick增加多少攻击力
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.Laser_Blue_2;
        b.imgIndex = 59;
        b.price = 1000;
        return b;
    }

    static Laser_Hell_1(world) {
        let b = new BatteryHell(0, 0, world);
        b.name = "1级地狱激光塔";
        b.r += 13;
        b.damageRate = 1000;
        b.levelUpArr = [BatteryFinally.Laser_Hell_2]
        b.levelDownGetter = BatteryFinally.Laser_Blue_1;
        b.imgIndex = 69;
        b.price = 2000;
        return b;
    }

    static Laser_Hell_2(world) {
        let b = new BatteryHell(0, 0, world);
        b.name = "2级地狱激光塔";
        b.r += 15;
        b.damageRate = 100;
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.Laser_Hell_1;
        b.imgIndex = 69;
        b.price = 1000;
        return b;
    }

    static Laser_Green_1(world) {
        // 绿激光是快速的激光
        let b = new BatteryLaser(0, 0, world);
        b.name = "1级绿激光";
        b.r += 7;
        b.rangeR = 200;
        b.laserBaseDamage = 40;  // 直接打中的激光炮的伤害
        b.laserFreezeMax = 4;  // 多少个时间刻度
        b.laserMaxDamage = 100;  // 最大蓄力强度
        b.laserDamagePreAdd = 1;  // 蓄力后每个tick增加多少攻击力
        b.laserColor = new MyColor(24, 212, 107, 0.7);

        b.levelDownGetter = BatteryFinally.Laser;
        b.levelUpArr = [BatteryFinally.Laser_Green_2];
        b.imgIndex = 58;
        b.price = 400;
        return b;
    }

    static Laser_Green_2(world) {
        // 绿激光是快速的激光
        let b = new BatteryLaser(0, 0, world);
        b.name = "2级绿激光";
        b.r += 8;
        b.rangeR = 250;
        b.laserBaseDamage = 35;  // 直接打中的激光炮的伤害
        b.laserFreezeMax = 3;  // 多少个时间刻度
        b.laserMaxDamage = 120;  // 最大蓄力强度
        b.laserDamagePreAdd = 2;  // 蓄力后每个tick增加多少攻击力
        b.laserColor = new MyColor(24, 212, 107, 0.7);
        b.levelUpArr = [BatteryFinally.Laser_Green_3];
        b.levelDownGetter = BatteryFinally.Laser_Green_1;
        b.imgIndex = 58;
        b.price = 500;
        return b;
    }

    static Laser_Green_3(world) {
        // 绿激光是快速的激光
        let b = new BatteryLaser(0, 0, world);
        b.name = "3级绿激光";
        b.r += 10;
        b.rangeR = 300;
        b.laserBaseDamage = 55;  // 直接打中的激光炮的伤害
        b.laserFreezeMax = 2;  // 多少个时间刻度
        b.laserMaxDamage = 200;  // 最大蓄力强度
        b.laserDamagePreAdd = 4;  // 蓄力后每个tick增加多少攻击力
        b.laserColor = new MyColor(24, 212, 107, 0.7);
        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.Laser_Blue_2;
        b.imgIndex = 58;
        b.price = 700;
        return b;
    }

    static Laser_Red(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "红激光"
        b.r += 7;

        b.rangeR = 250;
        b.rayLen = 300;
        b.rayClock = 10;
        b.rayWidth = 5;
        b.damage = 100;
        b.hpInit(10000);
        b.rayColor = new MyColor(255, 0, 0, 1);

        b.levelUpArr = [BatteryFinally.Laser_Red_Alpha_1, BatteryFinally.Laser_Red_Beta_1];
        b.levelDownGetter = BatteryFinally.Laser;
        b.imgIndex = 57;
        b.price = 800;
        return b;
    }

    static Laser_Red_Alpha_1(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "1级Alpha红激光";
        b.r += 9;

        b.rangeR = 300;
        b.rayLen = 1000;
        b.rayClock = 30;
        b.rayWidth = 10;
        b.damage = 300;
        b.hpInit(20000);
        b.rayColor = new MyColor(255, 0, 0, 1);

        b.levelUpArr = [BatteryFinally.Laser_Red_Alpha_2];
        b.levelDownGetter = BatteryFinally.Laser_Red;
        b.imgIndex = 57;
        b.price = 800;
        return b;
    }

    static Laser_Red_Alpha_2(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "2级Alpha红激光"
        b.r += 12;

        b.rangeR = 320;
        b.rayLen = 1000;
        b.rayClock = 31;
        b.rayWidth = 15;
        b.damage = 500;
        b.hpInit(50000);
        b.rayColor = new MyColor(255, 0, 0, 1);

        b.levelUpArr = [];
        b.levelDownGetter = BatteryFinally.Laser_Red_Alpha_1;
        b.imgIndex = 57;
        b.price = 900;
        return b;
    }

    static Laser_Red_Beta_1(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "1级Beta红激光"
        b.r += 8;
        b.damage = 50;
        b.rangeR = 0;
        b.rayLen = 300;
        b.rayWidth = 2;
        b.hpInit(10000);
        b.rayColor = new MyColor(255, 0, 0, 1);

        b.attackFunc = b.scanningAttack;
        b.levelUpArr = [BatteryFinally.Laser_Red_Beta_2];
        b.levelDownGetter = BatteryFinally.Laser_Red;
        b.imgIndex = 57;
        b.price = 600;
        return b;
    }

    static Laser_Red_Beta_2(world) {
        let b = new BatteryRay(0, 0, world);
        b.name = "2级Beta红激光"
        b.r += 13;
        b.damage = 100;
        b.rangeR = 0;
        b.rayLen = 1000;
        b.rayWidth = 5;
        b.hpInit(50000);
        b.rayColor = new MyColor(255, 0, 0, 1);

        b.attackFunc = b.scanningAttack;
        b.levelDownGetter = BatteryFinally.Laser_Red_Beta_1;
        b.levelUpArr = [];
        b.imgIndex = 57;
        b.price = 1000;
        return b;
    }
}

const TOWER_FUNC_ARR = [

    BatteryFinally.BasicCannon,
    BatteryFinally.MachineGun_1,
    BatteryFinally.MachineGun_2,
    BatteryFinally.MachineGun_3,

    BatteryFinally.Artillery_1,
    BatteryFinally.Artillery_2,
    BatteryFinally.Artillery_3,

    BatteryFinally.MissileGun_1,

    BatteryFinally.Shotgun_1,

    BatteryFinally.ShotCannon_1,
    BatteryFinally.ShotCannon_2,

    BatteryFinally.ArmorPiercing_1,
    BatteryFinally.ArmorPiercing_2,
    BatteryFinally.ArmorPiercing_3,

    BatteryFinally.FrozenCannon_1,
    BatteryFinally.FrozenCannon_2,

    BatteryFinally.SprayCannon_1,
    BatteryFinally.SprayCannon_2,
    BatteryFinally.SprayCannon_3,
    BatteryFinally.SprayCannon_Double,

    BatteryFinally.Flamethrower_1,
    BatteryFinally.Flamethrower_2,

    BatteryFinally.Poison_1,
    BatteryFinally.Poison_2,

    BatteryFinally.FutureCannon_2,

    BatteryFinally.Laser_Hell_1,

    BatteryFinally.Laser_Red,

    BatteryFinally.Earthquake,
    BatteryFinally.Thunder_1,

    BatteryFinally.Hammer,
    BatteryFinally.Boomerang,

    BatteryFinally.ThunderBall_1,
    BatteryFinally.AirCannon_1,
];

const TOWERS_IMG = new Image();
TOWERS_IMG.src = "towers/imgs/towers.png";
const TOWER_IMG_PRE_WIDTH = 100;
const TOWER_IMG_PRE_HEIGHT = 100;
