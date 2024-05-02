/**
 * 返回一些最终建筑
 * by littlefean
 */
class TowerFinally {
    /**
     *
     * @param world {World}
     * @returns {Tower}
     */
    static BasicCannon(world) {
        let res = new Tower(0, 0, world);
        res.name = "基础炮塔";
        res.levelUpArr = [
            TowerFinally.AncientCannon,
            TowerFinally.TraditionalCannon,
            TowerFinally.FutureCannon_1,
        ];
        res.levelDownGetter = null;
        res.price = 50 + Functions.TowerNumPriceAdded(world.batterys.length);
        res.comment = "最基础的炮塔，想获得厉害的炮塔就要从它开始进化，但是基础炮塔不太能无限获取，获取基础炮塔越多，需要的费用就越贵，其实只是在限制你不能在舞台上摆放太多的炮塔造成卡顿而已啦。";

        return res;
    }

    static AncientCannon(world) {
        let res = new Tower(0, 0, world);
        res.name = "中世纪炮塔";
        res.r += 1;
        res.hpInit(2000);
        res.rangeR += 5;
        res.levelUpArr = [
            TowerFinally.Boomerang,
            TowerFinally.ArrowBow_1,
            TowerFinally.Hammer,
            TowerFinally.StoneCannon,
        ];
        res.getmMainBullyFunc = BullyFinally.littleStone;
        res.price = 100;
        res.levelDownGetter = TowerFinally.BasicCannon;
        res.imgIndex = 1;
        res.price = 60;
        res.comment = "从基础炮塔升到这一个炮塔之后，接下来的炮塔都是中世纪风格的炮塔。";

        return res;
    }

    static TraditionalCannon(world) {
        let res = new Tower(0, 0, world);
        res.name = "军事炮塔";
        res.r += 1;
        res.hpInit(5000);
        res.rangeR += 5;
        res.levelDownGetter = TowerFinally.BasicCannon;
        res.levelUpArr = [
            TowerFinally.TraditionalCannon_Small,
            TowerFinally.TraditionalCannon_Middle,
            TowerFinally.TraditionalCannon_Large,
            TowerFinally.TraditionalCannon_MultiTube,
        ];
        res.price = 120;
        res.imgIndex = 20;
        res.comment = "接下来的风格都是军事风格的炮塔";
        res.audioSrcString = "sound/子弹音效/军事子弹.mp3";
        return res;
    }

    static FutureCannon_1(world) {
        let b = new TowerRay(0, 0, world);
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

        b.levelDownGetter = TowerFinally.BasicCannon;
        b.levelUpArr = [
            TowerFinally.FutureCannon_2,
            TowerFinally.Thunder_1,
            TowerFinally.Laser,
        ];
        b.price = 800;
        b.imgIndex = 50;
        b.comment = "想要获取更强大的激光、闪电等等的高科技武器，就要从此处升级开始，该高科技炮塔会发射激光粒子子弹";
        b.audioSrcString = "sound/发射音效/高科技塔发射.mp3";
        return b;
    }

    /**
     *  中世纪塔部分-------------
     */

    static Boomerang(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "回旋镖";
        res.hpInit(3000);
        res.damage = 100;
        res.rangeR = 120;
        res.r += 2;
        res.bar = res.initBar();
        res.levelUpArr = [TowerFinally.Boomerang_Far_1, TowerFinally.Boomerang_Power_1];
        res.levelDownGetter = TowerFinally.AncientCannon;
        res.imgIndex = 2;
        res.price = 190;
        res.comment = "一种威力不小的攻击东西，回旋镖能够穿过敌人，对所有穿过的敌人造成伤害";
        return res;
    }

    static Boomerang_Far_1(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "远程回旋镖1级";
        res.r += 3;
        res.hpInit(6000);
        res.damage = 100;
        res.rangeR = 140;
        res.barRotateSelfSpeed = 0.6;
        res.bar = res.initBar();
        res.levelUpArr = [TowerFinally.Boomerang_Far_2];
        res.levelDownGetter = TowerFinally.Boomerang;
        res.imgIndex = 2;
        res.price = 230;
        res.comment = "回旋镖的距离更远了";
        return res;
    }

    static Boomerang_Far_2(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "远程回旋镖2级";
        res.r += 4;
        res.hpInit(6000);
        res.damage = 100;
        res.rangeR = 160;
        res.barWidth = 10;
        res.barRotateSelfSpeed = 0.7;
        res.bar = res.initBar();
        res.levelUpArr = [TowerFinally.Boomerang_Far_3];
        res.levelDownGetter = TowerFinally.Boomerang_Far_1;
        res.imgIndex = 2;
        res.price = 350;
        res.comment = "距离又远了";
        return res;
    }

    static Boomerang_Far_3(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "远程回旋镖3级";
        res.r += 5;
        res.hpInit(6000);
        res.damage = 120;
        res.rangeR = 200;
        res.barWidth = 10;
        res.barRotateSelfSpeed = 0.8;
        res.bar = res.initBar();
        res.levelUpArr = [];
        res.levelDownGetter = TowerFinally.Boomerang_Far_2;
        res.imgIndex = 2;
        res.price = 300;
        res.comment = "距离又又又远了";
        return res;
    }

    static Boomerang_Power_1(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "力量回旋镖1级";
        res.hpInit(3000);
        res.damage = 250;
        res.rangeR = 100;
        res.barWidth = 10;
        res.barLen = 20;
        res.r += 2;
        res.barRotateSelfSpeed = 0.2;
        res.bar = res.initBar();
        res.levelUpArr = [TowerFinally.Boomerang_Power_2];
        res.levelDownGetter = TowerFinally.Boomerang;
        res.imgIndex = 2;
        res.price = 300;
        res.comment = "相对于普通的回旋镖，距离虽然没那么远了，但是伤害更大了，回旋镖也更大更强了";
        return res;
    }

    static Boomerang_Power_2(world) {
        let res = new TowerBoomerang(0, 0, world);
        res.name = "力量回旋镖2级";
        res.hpInit(5000);
        res.damage = 500;
        res.rangeR = 100;
        res.barWidth = 15;
        res.barLen = 30;
        res.r += 3;
        res.barRotateSelfSpeed = 0.1;
        res.bar = res.initBar();
        res.levelUpArr = [TowerFinally.Boomerang_Power_3];
        res.levelDownGetter = TowerFinally.Boomerang_Power_1;
        res.imgIndex = 2;
        res.price = 350;
        res.comment = "伤害又继续猛增";
        return res;
    }

    static Boomerang_Power_3(world) {
        let res = new TowerBoomerang(0, 0, world);
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
        res.levelDownGetter = TowerFinally.Boomerang_Power_2;
        res.imgIndex = 2;
        res.price = 400;
        res.comment = "伤害更大了，这恐怕不是回旋镖了，叫回旋的板砖儿...";
        return res;
    }

    static ArrowBow_1(world) {
        let res = new Tower(0, 0, world);
        res.name = "弓箭塔1级";
        res.r += 2;
        res.hpInit(1500);
        res.rangeR = 200;
        res.clock = 15;
        res.getmMainBullyFunc = BullyFinally.Arrow;

        res.levelUpArr = [TowerFinally.ArrowBow_2, TowerFinally.Crossbow_1];
        res.levelDownGetter = TowerFinally.AncientCannon;
        res.imgIndex = 4;
        res.price = 60;
        res.comment = "这个弓箭塔是中世纪最基本的一种塔楼";
        res.audioSrcString = "sound/发射音效/弓箭发射.mp3";
        return res;
    }

    static ArrowBow_2(world) {
        let res = new Tower(0, 0, world);
        res.name = "弓箭塔2级";
        res.r += 3;
        res.hpInit(2000);
        res.rangeR = 250;
        res.clock = 12;
        res.bullySpeed = 10;
        res.getmMainBullyFunc = BullyFinally.Arrow_L;

        res.levelUpArr = [TowerFinally.ArrowBow_3];
        res.levelDownGetter = TowerFinally.ArrowBow_1;
        res.imgIndex = 4;
        res.price = 70;
        res.comment = "弓箭塔是偏远程的一种防御塔";
        res.audioSrcString = "sound/发射音效/弓箭发射.mp3";
        return res;
    }

    static ArrowBow_3(world) {
        let res = new Tower(0, 0, world);
        res.name = "弓箭塔3级";
        res.r += 4;
        res.hpInit(5000);
        res.rangeR = 300;
        res.clock = 10;
        res.bullySpeed = 12;
        res.getmMainBullyFunc = BullyFinally.Arrow_L;

        res.levelUpArr = [TowerFinally.ArrowBow_4];
        res.levelDownGetter = TowerFinally.ArrowBow_2;
        res.imgIndex = 4;
        res.price = 80;
        res.comment = "没什么";
        res.audioSrcString = "sound/发射音效/弓箭发射.mp3";
        return res;
    }

    static ArrowBow_4(world) {
        let res = new Tower(0, 0, world);
        res.name = "弓箭塔4级";
        res.hpInit(8000);
        res.rangeR = 320;
        res.clock = 8;
        res.bullySpeed = 13;
        res.r += 5;
        res.getmMainBullyFunc = BullyFinally.Arrow_LL;

        res.levelUpArr = [];
        res.levelDownGetter = TowerFinally.ArrowBow_3;
        res.imgIndex = 4;
        res.price = 150;
        res.comment = "四级弓箭塔更换了弓箭子弹，伤害提高了";
        res.audioSrcString = "sound/发射音效/弓箭发射.mp3";
        return res;
    }

    static Crossbow_1(world) {
        let res = new Tower(0, 0, world);
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
        res.levelUpArr = [TowerFinally.Crossbow_2];
        res.levelDownGetter = TowerFinally.ArrowBow_1;
        res.imgIndex = 3;
        res.price = 120;
        res.comment = "连弩视野范围没有弓箭塔那么大，但是射速更快了";
        res.audioSrcString = "sound/发射音效/弓箭发射.mp3";
        return res;
    }

    static Crossbow_2(world) {
        let res = new Tower(0, 0, world);
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
        res.levelUpArr = [TowerFinally.Crossbow_3];
        res.levelDownGetter = TowerFinally.Crossbow_1;
        res.imgIndex = 3;
        res.price = 130;
        res.comment = `射速进一步加快，一次性能够射出${res.attackBullyNum}发子弹`;
        res.audioSrcString = "sound/发射音效/弓箭发射.mp3";
        return res;
    }

    static Crossbow_3(world) {
        let res = new Tower(0, 0, world);
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
        res.levelDownGetter = TowerFinally.Crossbow_2;
        res.imgIndex = 3;
        res.price = 200;
        res.comment = `射速更快了，一次性能射出${res.attackBullyNum}发子弹`;
        res.audioSrcString = "sound/发射音效/弓箭发射.mp3";
        return res;
    }

    static Hammer(world) {
        let b = new TowerHammer(0, 0, world);
        b.name = "流星锤";
        b.r += 3;

        b.hpInit(5000);
        b.rangeR = 80;
        b.itemDamage = 200;

        b.levelUpArr = [TowerFinally.Hammer_Fast_1, TowerFinally.Hammer_Power_1];
        b.levelDownGetter = TowerFinally.AncientCannon;
        b.imgIndex = 5;
        b.price = 230;
        b.comment = "他有一个转动的大铁球，这个转动的大铁球只要一碰到敌人，就能够造成很大的伤害。";
        return b;
    }

    static Hammer_Fast_1(world) {
        let b = new TowerHammer(0, 0, world);
        b.name = "快速流星锤1级";
        b.r += 5;

        b.hpInit(6000);
        b.rangeR = 100;
        b.itemRidus = 15;
        b.itemDamage = 250;
        b.itemSpeed = 4;
        b.additionItem = b.initAdditionItem()
        b.levelUpArr = [TowerFinally.Hammer_Fast_2];
        b.levelDownGetter = TowerFinally.Hammer;
        b.imgIndex = 5;
        b.price = 300;
        b.comment = "这个转动的大铁球变小了，伤害变小了，但是转的更快了，能够更好的应对突然过来的怪物了";
        return b;
    }

    static Hammer_Fast_2(world) {
        let b = new TowerHammer(0, 0, world);
        b.name = "快速流星锤2级";
        b.r += 7;

        b.hpInit(10000);
        b.rangeR = 150;
        b.itemRidus = 15;
        b.itemDamage = 300;
        b.itemSpeed = 3;
        b.additionItem = b.initAdditionItem()
        b.levelUpArr = [TowerFinally.Hammer_Fast_3];
        b.levelDownGetter = TowerFinally.Hammer_Fast_1;
        b.imgIndex = 5;
        b.price = 370;
        b.comment = "转的又更快了，伤害继续增加了一点，转动半径也增加了";
        return b;
    }

    static Hammer_Fast_3(world) {
        let b = new TowerHammer(0, 0, world);
        b.name = "快速流星锤3级";
        b.r += 8;
        b.hpInit(18000);
        b.rangeR = 180;
        b.itemRidus = 15;
        b.itemDamage = 400;
        b.itemSpeed = 2;
        b.additionItem = b.initAdditionItem()
        b.levelUpArr = [];
        b.levelDownGetter = TowerFinally.Hammer_Fast_2;
        b.imgIndex = 5;
        b.price = 320;
        b.comment = "转的飞快了，伤害继续增加，转动半径继续增加";
        return b;
    }

    static Hammer_Power_1(world) {
        let b = new TowerHammer(0, 0, world);
        b.name = "重型流星锤1级";
        b.r += 3;
        b.hpInit(10000);
        b.rangeR = 90;
        b.itemRidus = 30;
        b.itemDamage = 100;
        b.itemSpeed = 20;
        b.additionItem = b.initAdditionItem()
        b.levelUpArr = [TowerFinally.Hammer_Power_2];
        b.levelDownGetter = TowerFinally.Hammer;
        b.imgIndex = 6;
        b.price = 400;
        b.comment = "转的更慢了，但是大铁球变得更大了，转的慢了之后，对敌人的伤害也更高了，因为触碰一下就会伤害怪物，增加了铁球和敌人的触碰时间";
        return b;
    }

    static Hammer_Power_2(world) {
        let b = new TowerHammer(0, 0, world);
        b.name = "重型流星锤2级";
        b.r += 5;
        b.hpInit(20000);
        b.rangeR = 100;
        b.itemRidus = 35;
        b.itemDamage = 100;
        b.itemSpeed = 30;
        b.additionItem = b.initAdditionItem()
        b.levelUpArr = [TowerFinally.Hammer_Power_3];
        b.levelDownGetter = TowerFinally.Hammer_Power_1;
        b.imgIndex = 6;
        b.price = 450;
        b.comment = "更大，更慢，更强";
        return b;
    }

    static Hammer_Power_3(world) {
        let b = new TowerHammer(0, 0, world);
        b.name = "重型流星锤3级";
        b.r += 7;
        b.hpInit(30000);
        b.rangeR = 110;
        b.itemRidus = 38;
        b.itemDamage = 200;
        b.itemSpeed = 50;
        b.additionItem = b.initAdditionItem()
        b.levelUpArr = [];
        b.levelDownGetter = TowerFinally.Hammer_Power_2;
        b.imgIndex = 6;
        b.price = 500;
        b.comment = "更大，更慢，更强";
        return b;
    }

    static StoneCannon(world) {
        let b = new Tower(0, 0, world);
        b.name = "加农炮";
        b.r += 3;
        b.rangeR = 120;
        b.clock = 20;
        b.bullySpeed = 3;
        b.bullySpeedAddMax = 7;
        b.bullySlideRate = 1.5;
        b.hpInit(3000);
        b.getmMainBullyFunc = BullyFinally.CannonStone_S;
        b.levelUpArr = [TowerFinally.StoneCannon_Far_1, TowerFinally.StoneCannon_Power_1];
        b.levelDownGetter = TowerFinally.AncientCannon;
        b.imgIndex = 7;
        b.price = 100;
        b.comment = "发射石头蛋子，威力超过弓箭很多很多，但是攻击速度慢了";
        b.audioSrcString = "sound/子弹音效/石头蛋子.mp3";
        return b;
    }

    static StoneCannon_Far_1(world) {
        let b = new Tower(0, 0, world);
        b.name = "远程加农炮1级";
        b.r += 4;
        b.rangeR = 260;
        b.clock = 20;
        b.bullySpeed = 7;
        b.bullySpeedAddMax = 2;
        b.bullySlideRate = 2;
        b.hpInit(3000);
        b.getmMainBullyFunc = BullyFinally.CannonStone_S;
        b.levelUpArr = [TowerFinally.StoneCannon_Far_2];
        b.levelDownGetter = TowerFinally.StoneCannon;
        b.imgIndex = 8;
        b.price = 200;
        b.comment = "增加了攻击距离";
        b.audioSrcString = "sound/子弹音效/石头蛋子.mp3";
        return b;
    }

    static StoneCannon_Far_2(world) {
        let b = new Tower(0, 0, world);
        b.name = "远程加农炮2级";
        b.r += 5;
        b.rangeR = 270;
        b.clock = 20;
        b.bullySpeed = 7;
        b.bullySpeedAddMax = 3;
        b.bullySlideRate = 2.2;
        b.getmMainBullyFunc = BullyFinally.CannonStone_M;
        b.levelUpArr = [TowerFinally.StoneCannon_Far_3];
        b.levelDownGetter = TowerFinally.StoneCannon_Far_1;
        b.imgIndex = 8;
        b.price = 250;
        b.comment = "进一步增加了攻击距离";
        b.audioSrcString = "sound/子弹音效/石头蛋子.mp3";
        return b;
    }

    static StoneCannon_Far_3(world) {
        let b = new Tower(0, 0, world);
        b.name = "远程加农炮3级";
        b.r += 6;
        b.rangeR = 300;
        b.clock = 20;
        b.bullySpeed = 7;
        b.bullySpeedAddMax = 4;
        b.bullySlideRate = 2.2;
        b.getmMainBullyFunc = BullyFinally.CannonStone_M;
        b.levelUpArr = [];
        b.levelDownGetter = TowerFinally.StoneCannon_Far_2;
        b.imgIndex = 8;
        b.price = 300;
        b.comment = "攻击距离更远了，射出的子弹成了中型号的石头蛋子";
        b.audioSrcString = "sound/子弹音效/石头蛋子.mp3";
        return b;
    }

    static StoneCannon_Power_1(world) {
        let b = new Tower(0, 0, world);
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
        b.levelUpArr = [TowerFinally.StoneCannon_Power_2];
        b.levelDownGetter = TowerFinally.StoneCannon;
        b.imgIndex = 9;
        b.price = 120;
        b.comment = "发射大型石头蛋子，大型石头蛋子打中怪物之后会碎裂成一些有伤害的小石头蛋子";
        b.audioSrcString = "sound/子弹音效/石头蛋子.mp3";
        return b;
    }

    static StoneCannon_Power_2(world) {
        let b = new Tower(0, 0, world);
        b.name = "重型加农炮2级";
        b.r += 5;
        b.rangeR = 200;
        b.bullySpeed = 8;
        b.bullySlideRate = 2.5;
        b.clock = 50;
        b.hpInit(30000);
        b.getmMainBullyFunc = BullyFinally.CannonStone_L;
        b.price = 2000;
        b.levelUpArr = [TowerFinally.StoneCannon_Power_3];
        b.levelDownGetter = TowerFinally.StoneCannon_Power_1;
        b.imgIndex = 9;
        b.price = 300;
        b.comment = "增加了一点攻击范围，石头蛋子滑出视野的距离增加了";
        b.audioSrcString = "sound/子弹音效/石头蛋子.mp3";
        return b;
    }

    static StoneCannon_Power_3(world) {
        let b = new Tower(0, 0, world);
        b.name = "重型加农炮3级";
        b.rangeR = 230;
        b.r += 6;
        b.bullySpeed = 10;
        b.clock += 55;
        b.hpInit(100000);
        b.getmMainBullyFunc = BullyFinally.CannonStone_L;
        b.price = 3000;
        b.levelUpArr = [];
        b.levelDownGetter = TowerFinally.StoneCannon_Power_2;
        b.imgIndex = 9;
        b.price = 320;
        b.comment = "范围进一步增加";
        b.audioSrcString = "sound/子弹音效/石头蛋子.mp3";
        return b;
    }

    /**
     *  军事炮塔部分
     */
    static TraditionalCannon_Small(world) {
        let res = new Tower(0, 0, world);
        res.name = "小型炮塔";
        res.r += 2;
        res.rangeR = 200;
        res.clock = 3;
        res.getmMainBullyFunc = BullyFinally.Bully_S;
        res.levelUpArr = [TowerFinally.Rifle_1, TowerFinally.MachineGun_1, TowerFinally.ArmorPiercing_1];
        res.levelDownGetter = TowerFinally.TraditionalCannon;
        res.imgIndex = 21;
        res.price = 120;
        res.comment = "该炮塔是小型枪械的过渡";
        res.audioSrcString = "sound/子弹音效/军事子弹.mp3";
        return res;
    }

    static TraditionalCannon_Middle(world) {
        let res = new Tower(0, 0, world);
        res.name = "中型炮塔";
        res.rangeR = 200;
        res.r += 3;
        res.clock = 3;
        res.getmMainBullyFunc = BullyFinally.Bully_M;
        res.levelDownGetter = TowerFinally.TraditionalCannon;
        res.levelUpArr = [TowerFinally.AirCannon_1, TowerFinally.Earthquake];
        res.imgIndex = 22;
        res.price = 130;
        res.comment =  `该炮塔能发展成一些比较特殊的军事器械`;
        res.audioSrcString = "sound/子弹音效/军事子弹.mp3";
        return res;
    }

    static TraditionalCannon_Large(world) {
        let res = new Tower(0, 0, world);
        res.name = "大型炮塔";
        res.rangeR = 200;
        res.r += 4;
        res.getmMainBullyFunc = BullyFinally.Bully_L;
        res.clock = 3;
        res.levelDownGetter = TowerFinally.TraditionalCannon;
        res.imgIndex = 23;
        res.levelUpArr = [TowerFinally.Artillery_1, TowerFinally.MissileGun_1];
        res.price = 140;
        res.comment =  `该炮塔能够发展成更有火药，伤害更强的军事器械`;
        res.audioSrcString = "sound/子弹音效/军事子弹.mp3";
        return res;
    }

    static TraditionalCannon_MultiTube(world) {
        let res = new Tower(0, 0, world);
        res.name = "双管炮塔";
        res.rangeR = 200;
        res.r += 4;
        res.getmMainBullyFunc = BullyFinally.Bully_M;
        res.bullyRotate = Math.PI / 36;
        res.attackFunc = res.shrapnelAttack;
        res.attackBullyNum = 2;
        res.clock = 4;

        res.levelDownGetter = TowerFinally.TraditionalCannon;
        res.imgIndex = 24;
        res.levelUpArr = [TowerFinally.ThreeTubeCannon, TowerFinally.SprayCannon_1, TowerFinally.PowderCannon];
        res.price = 135;
        res.comment =  `该炮塔主要朝着多发、散弹、群体伤害方向发展`;
        res.audioSrcString = "sound/子弹音效/军事子弹.mp3";
        return res;
    }

    static Rifle_1(world) {
        let res = new Tower(0, 0, world);
        res.name = "1级步枪";
        res.r += 3;
        res.rangeR = 200;
        res.clock = 4;
        res.bullySpeed += 3;
        res.getmMainBullyFunc = BullyFinally.Rifle_Bully_L;
        res.levelDownGetter = TowerFinally.TraditionalCannon_Small;
        res.levelUpArr = [TowerFinally.Rifle_2];
        res.imgIndex = 25;
        res.price = 160;
        res.comment =  `就是步枪了啦`;
        res.audioSrcString = "sound/子弹音效/步枪子弹.mp3";
        return res;
    }

    static Rifle_2(world) {
        let res = new Tower(0, 0, world);
        res.name = "2级步枪";
        res.r += 3;
        res.rangeR = 230;
        res.clock = 3;
        res.bullySpeed += 4;
        res.getmMainBullyFunc = BullyFinally.Rifle_Bully_M;
        res.levelUpArr = [TowerFinally.Rifle_3]
        res.levelDownGetter = TowerFinally.Rifle_1;
        res.imgIndex = 25;
        res.price = 170;
        res.comment =  `范围和射速增加了啦`;
        res.audioSrcString = "sound/子弹音效/步枪子弹.mp3";
        return res;
    }

    static Rifle_3(world) {
        let res = new Tower(0, 0, world);
        res.name = "3级步枪";
        res.r += 4;
        res.rangeR = 260;
        res.clock = 3;
        res.bullySpeed += 5;
        res.getmMainBullyFunc = BullyFinally.Rifle_Bully_L;
        res.levelUpArr = [];
        res.levelDownGetter = TowerFinally.Rifle_2;
        res.imgIndex = 25;
        res.price = 180;
        res.comment =  `子弹的速度增加了，步枪子弹也加强了`;
        res.audioSrcString = "sound/子弹音效/步枪子弹.mp3";
        return res;
    }

    static MachineGun_1(world) {
        let b = new Tower(0, 0, world);
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
        b.levelUpArr = [TowerFinally.MachineGun_2];
        b.levelDownGetter = TowerFinally.TraditionalCannon_Small;
        b.imgIndex = 26;
        b.price = 250;
        b.comment =  `就是机枪了啦`;
        b.audioSrcString = "sound/子弹音效/机枪子弹.mp3";
        return b;

    }

    static MachineGun_2(world) {
        let b = new Tower(0, 0, world);
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
        b.levelUpArr = [TowerFinally.MachineGun_3];
        b.levelDownGetter = TowerFinally.MachineGun_1;
        b.imgIndex = 26;
        b.price = 300;
        b.comment =  `射速更快，子弹更多`;
        b.audioSrcString = "sound/子弹音效/机枪子弹.mp3";
        return b;
    }

    static MachineGun_3(world) {
        let b = new Tower(0, 0, world);
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
        b.levelDownGetter = TowerFinally.MachineGun_2;
        b.imgIndex = 27;
        b.price = 500;
        b.comment =  `射速又加强了，子弹也加强了`;
        b.audioSrcString = "sound/子弹音效/机枪子弹.mp3";
        return b;
    }

    static ArmorPiercing_1(world) {
        let b = new Tower(0, 0, world);
        b.name = "1级穿甲炮";
        b.rangeR = 200;
        b.r += 5;
        b.bullySpeed += 3;
        b.bullySlideRate = 3;
        b.clock = 4;
        b.hpInit(1500);
        b.getmMainBullyFunc = BullyFinally.T_M;
        b.price = 160;
        b.levelDownGetter = TowerFinally.TraditionalCannon_Small;
        b.levelUpArr = [TowerFinally.ArmorPiercing_2];
        b.imgIndex = 28;
        b.price = 220;
        b.comment =  `穿甲炮的子弹能够穿过敌人，在穿过敌人的过程中对敌人持续造成伤害，但是子弹半径会变小，直到子弹消失，消失前子弹伤害是不变的`;
        b.audioSrcString = "sound/子弹音效/穿甲弹.mp3";
        return b;
    }

    static ArmorPiercing_2(world) {
        let b = new Tower(0, 0, world);
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
        b.levelUpArr = [TowerFinally.ArmorPiercing_3];
        b.levelDownGetter = TowerFinally.AirCannon_1;
        b.imgIndex = 29;
        b.price = 250;
        b.comment =  `子弹加强了，射速也更快了`;
        b.audioSrcString = "sound/子弹音效/穿甲弹.mp3";
        return b;
    }

    static ArmorPiercing_3(world) {
        let b = new Tower(0, 0, world);
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
        b.levelDownGetter = TowerFinally.AirCannon_2;
        b.imgIndex = 29;
        b.price = 400;
        b.comment =  `射速更慢了，但是子弹变成大型的穿甲弹了`;
        b.audioSrcString = "sound/子弹音效/穿甲弹.mp3";
        return b;
    }

    static Artillery_1(world) {
        let b = new Tower(0, 0, world);
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
        b.levelDownGetter = TowerFinally.TraditionalCannon_Large;
        b.levelUpArr = [TowerFinally.Artillery_2];
        b.imgIndex = 33;
        b.price = 500;
        b.comment =  `这曾经是世界大战中的武器，发射出去的炮弹会持续加速，击中目标或者超出一定范围后发生爆炸，对范围内的怪物造成爆炸伤害，越接近爆炸中心，爆炸伤害越高`;
        b.audioSrcString = "sound/发射音效/火箭发射.ogg";
        return b;
    }

    static Artillery_2(world) {
        let b = new Tower(0, 0, world);
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
        b.levelDownGetter = TowerFinally.Artillery_1;
        b.levelUpArr = [TowerFinally.Artillery_3];
        b.imgIndex = 34;
        b.price = 800;
        b.comment =  `能够同时发射两枚炮弹了，发射的火炮弹伤害大大提高`;
        b.audioSrcString = "sound/发射音效/火箭发射.ogg";
        return b;
    }

    static Artillery_3(world) {
        let b = new Tower(0, 0, world);
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
        b.levelDownGetter = TowerFinally.Artillery_2;
        b.levelUpArr = [];
        b.imgIndex = 34;
        b.price = 1000;
        b.comment =  `每次攻击都会同时发射两枚超大型号的炮弹，造成很大的爆炸伤害`;
        b.audioSrcString = "sound/发射音效/火箭发射.ogg";
        return b;
    }

    static MissileGun_1(world) {
        let b = new Tower(0, 0, world);
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
        b.levelDownGetter = TowerFinally.TraditionalCannon_Large;
        b.levelUpArr = [TowerFinally.MissileGun_2];
        b.imgIndex = 35;
        b.price = 700;
        b.comment =  `发射出去的导弹具有追踪能力，同时也会爆炸，只不过因为会追踪，所以伤害没有火炮那么高了`;
        b.audioSrcString = "sound/发射音效/火箭发射.ogg";
        return b;
    }

    static MissileGun_2(world) {
        let b = new Tower(0, 0, world);
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
        b.levelDownGetter = TowerFinally.MissileGun_1;
        b.levelUpArr = [TowerFinally.MissileGun_3];
        b.imgIndex = 35;
        b.price = 750;
        b.comment =  `每次发射能够发射三个导弹`;
        b.audioSrcString = "sound/发射音效/火箭发射.ogg";
        return b;
    }

    static MissileGun_3(world) {
        let b = new Tower(0, 0, world);
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
        b.levelDownGetter = TowerFinally.MissileGun_2;
        b.levelUpArr = [];
        b.imgIndex = 35;
        b.price = 1000;
        b.comment =  `每次发射能够发射五个导弹，这可以说是多管导弹炮`;
        b.audioSrcString = "sound/发射音效/火箭发射.ogg";
        return b;
    }

    static AirCannon_1(world) {
        let b = new TowerRay(0, 0, world);
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
        b.levelDownGetter = TowerFinally.TraditionalCannon_Middle;
        b.levelUpArr = [TowerFinally.AirCannon_2];
        b.imgIndex = 30;
        b.price = 300;
        b.comment =  `发射出一个空气波，这个空气波对怪物具有击退作用`;
        return b;
    }

    static AirCannon_2(world) {
        let b = new TowerRay(0, 0, world);
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
        b.levelDownGetter = TowerFinally.AirCannon_1;
        b.levelUpArr = [TowerFinally.AirCannon_3];
        b.imgIndex = 30;
        b.price = 320;
        b.comment =  `击退作用加强，运用的好可能可以赖敌人`;
        return b;
    }

    static AirCannon_3(world) {
        let b = new TowerRay(0, 0, world);
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
        b.levelDownGetter = TowerFinally.AirCannon_2;
        b.levelUpArr = [];
        b.imgIndex = 30;
        b.price = 400;
        b.comment =  `击退进一步加强了`;
        return b;
    }

    static Earthquake(world) {
        let b = new TowerLaser(0, 0, world);
        b.name = "地震发生器"
        b.r += 5;

        b.laserBaseDamage = 500;
        b.laserFreezeMax = 50;
        b.laserMaxDamage = 200;
        b.laserDamagePreAdd = 5;
        b.rangeR = 120;
        b.hpInit(5000);

        b.attackFunc = b.earthquakeAttack;
        b.levelDownGetter = TowerFinally.TraditionalCannon_Middle;
        b.levelUpArr = [TowerFinally.Earthquake_Power_1, TowerFinally.Earthquake_Speed_1];
        b.imgIndex = 31;
        b.price = 250;
        b.comment =  `直接发生一个地震，对范围内的敌人统一造成伤害，妥妥的群伤`;
        return b;
    }

    static Earthquake_Power_1(world) {
        let b = new TowerLaser(0, 0, world);
        b.name = "1级重型地震发生器";
        b.r += 10;

        b.laserBaseDamage = 5000;
        b.laserFreezeMax = 500;
        b.laserMaxDamage = 5000;
        b.laserDamagePreAdd = 20;
        b.rangeR = 250;
        b.hpInit(10000);

        b.attackFunc = b.earthquakeAttack;
        b.levelDownGetter = TowerFinally.Earthquake;
        b.levelUpArr = [TowerFinally.Earthquake_Power_2];
        b.imgIndex = 32;
        b.price = 260;
        b.comment =  `很长时间才能地震一次，但是一旦地震，伤害巨大，并且还可以蓄力`;
        return b;
    }

    static Earthquake_Power_2(world) {
        let b = new TowerLaser(0, 0, world);
        b.name = "2级重型地震发生器"
        b.r += 15;

        b.laserBaseDamage = 10000;
        b.laserFreezeMax = 500;
        b.laserMaxDamage = 10000;
        b.laserDamagePreAdd = 50;
        b.rangeR = 260;
        b.hpInit(100000);

        b.attackFunc = b.earthquakeAttack;
        b.levelDownGetter = TowerFinally.Earthquake_Power_1;
        b.levelUpArr = [];
        b.imgIndex = 32;
        b.price = 300;
        b.comment =  `地震伤害本来很大了，但是这下子更大了`;
        return b;
    }

    static Earthquake_Speed_1(world) {
        let b = new TowerLaser(0, 0, world);
        b.name = "1级高频地震发生器"
        b.r += 10;

        b.laserBaseDamage = 100;
        b.laserFreezeMax = 5;
        b.laserMaxDamage = 200;
        b.laserDamagePreAdd = 5;
        b.rangeR = 250;
        b.hpInit(6000);

        b.attackFunc = b.earthquakeAttack;
        b.levelDownGetter = TowerFinally.Earthquake;
        b.levelUpArr = [TowerFinally.Earthquake_Speed_2];
        b.imgIndex = 31;
        b.price = 260;
        b.comment =  `地震伤害变得很小了，但是频率非常高`;
        return b;
    }

    static Earthquake_Speed_2(world) {
        let b = new TowerLaser(0, 0, world);
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
        b.levelDownGetter = TowerFinally.Earthquake_Speed_1;
        b.levelUpArr = [];
        b.imgIndex = 31;
        b.price = 400;
        b.comment =  `地震的频率进一步提高了，非常快`;
        return b;
    }

    static PowderCannon(world) {
        let b = new Tower(0, 0, world);
        b.name = "粉尘炮塔"
        b.r += 5;
        b.rangeR = 150;
        b.bullySpeed = 10;
        b.clock = 1;
        b.laserBaseDamage = 10;
        b.getmMainBullyFunc = BullyFinally.Powder;
        b.bullyDeviationRotate = 3;

        b.levelDownGetter = TowerFinally.TraditionalCannon_MultiTube;
        b.levelUpArr = [TowerFinally.Flamethrower_1, TowerFinally.FrozenCannon_1, TowerFinally.Poison_1];
        b.imgIndex = 36;
        b.price = 260;
        b.comment =  `这个炮塔发射的是呛人的瓦斯烟雾，同时也是为了进化成发射粉尘类，烟雾类等等的炮塔而过渡`;
        b.audioSrcString = "sound/子弹音效/烟雾.mp3";
        return b;
    }

    static Flamethrower_1(world) {
        let b = new Tower(0, 0, world);
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
        b.levelDownGetter = TowerFinally.PowderCannon;
        b.levelUpArr = [TowerFinally.Flamethrower_2];
        b.imgIndex = 37;
        b.price = 420;
        b.comment =  `喷射火焰，让敌人持续受到伤害，同时让敌人获得烧伤效果，敌人获得烧伤效果之后会按照比例持续掉血，血量再厚的敌人也撑不过多久，坏处就是烧伤会让敌人加速`;
        // b.audioSrcString = "sound/子弹音效/烟雾.mp3";
        return b;
    }

    static Flamethrower_2(world) {
        let b = new Tower(0, 0, world);
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
        b.levelDownGetter = TowerFinally.Flamethrower_1;
        b.levelUpArr = [];
        b.imgIndex = 37;
        b.price = 500;
        b.comment =  `喷射的火焰采用了冷火焰，好处是让敌人加速的不那么快了，伤害丝毫不会打折扣`;
        // b.audioSrcString = "sound/子弹音效/烟雾.mp3";
        return b;
    }

    static FrozenCannon_1(world) {
        let b = new Tower(0, 0, world);
        b.name = "1级冰冻炮";
        b.rangeR = 150;
        b.r += 7;

        b.bullySpeed = 4;
        b.bullySlideRate = 1;
        b.getmMainBullyFunc = BullyFinally.Frozen_L;
        b.clock = 10;
        b.hpInit(2000);
        b.price = 6000;
        b.levelDownGetter = TowerFinally.PowderCannon;
        b.levelUpArr = [TowerFinally.FrozenCannon_2];
        b.imgIndex = 39;
        b.price = 620;
        b.comment =  `击中之后的冰冻蛋子会发生小爆炸，爆炸范围内的敌人会减速，这个减速效果可以累加，直到达到一个上限。但是冰冻和烧伤是互斥的，二者不能同时存在`;
        b.audioSrcString = "sound/子弹音效/冰冻.mp3";
        return b;
    }

    static FrozenCannon_2(world) {
        let b = new Tower(0, 0, world);
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
        b.levelDownGetter = TowerFinally.FrozenCannon_1;
        b.imgIndex = 39;
        b.price = 1200;
        b.comment =  `迅速发射大量更密集的冰冻蛋子`;
        b.audioSrcString = "sound/子弹音效/冰冻.mp3";
        return b;
    }

    static Poison_1(world) {
        let b = new Tower(0, 0, world);
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
        b.levelDownGetter = TowerFinally.PowderCannon;
        b.levelUpArr = [TowerFinally.Poison_2];
        b.imgIndex = 38;
        b.price = 400;
        b.comment =  `被毒气烟雾熏到的敌人会受到伤害`;
        // b.audioSrcString = "sound/子弹音效/烟雾.mp3";
        return b;
    }

    static Poison_2(world) {
        let b = new Tower(0, 0, world);
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
        b.levelDownGetter = TowerFinally.Poison_1;
        b.imgIndex = 38;
        b.price = 600;
        b.comment =  `毒气伤害增加`;
        // b.audioSrcString = "sound/子弹音效/烟雾.mp3";
        return b;
    }

    static ThreeTubeCannon(world) {
        let b = new Tower(0, 0, world);
        b.name = "三管炮塔";
        b.r += 6;
        b.rangeR = 230;

        b.bullySpeed = 3;

        b.getmMainBullyFunc = BullyFinally.Bully_M;
        b.bullyRotate = Math.PI / 12;
        b.attackFunc = b.shrapnelAttack;
        b.attackBullyNum = 3;
        b.clock = 4;

        b.levelDownGetter = TowerFinally.TraditionalCannon_MultiTube;
        b.levelUpArr = [TowerFinally.Shotgun_1, TowerFinally.ShotCannon_1];
        b.imgIndex = 42;
        b.price = 400;
        b.comment =  `一种散弹`;
        b.audioSrcString = "sound/子弹音效/散弹子弹.mp3";
        return b;
    }

    static Shotgun_1(world) {
        let b = new Tower(0, 0, world);
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

        b.levelDownGetter = TowerFinally.ThreeTubeCannon;
        b.levelUpArr = [TowerFinally.Shotgun_2];
        b.imgIndex = 44;
        b.price = 500;
        b.comment =  `发射频率很快的散弹子弹`;
        b.audioSrcString = "sound/子弹音效/散弹子弹.mp3";
        return b;
    }

    static Shotgun_2(world) {
        let b = new Tower(0, 0, world);
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

        b.levelDownGetter = TowerFinally.Shotgun_1;
        b.levelUpArr = [];
        b.imgIndex = 44;
        b.price = 800;
        b.comment =  `发射的频率更快了，但是子弹的移动速度可能并不是很快`;
        b.audioSrcString = "sound/子弹音效/散弹子弹.mp3";
        return b;
    }

    static ShotCannon_1(world) {
        let b = new Tower(0, 0, world);
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
        b.levelDownGetter = TowerFinally.ThreeTubeCannon;
        b.levelUpArr = [TowerFinally.ShotCannon_2];
        b.imgIndex = 43;
        b.price = 600;
        b.comment =  `像人拉屎窜稀一样，快速的喷泄出大量子弹，喷泄出的子弹速度不一`;
        b.audioSrcString = "sound/发射音效/喷泄.mp3";
        return b;
    }

    static ShotCannon_2(world) {
        let b = new Tower(0, 0, world);
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

        b.levelDownGetter = TowerFinally.ShotCannon_1;
        b.levelUpArr = [];
        b.imgIndex = 43;
        b.price = 900;
        b.comment =  `喷泄量增加了`;
        b.audioSrcString = "sound/发射音效/喷泄.mp3";
        return b;
    }

    static SprayCannon_1(world) {
        let b = new Tower(0, 0, world);
        b.name = "1级溅射炮塔";
        b.rangeR = 200;
        b.r += 10;
        b.bullySpeed = 5;
        b.clock += 20;
        b.hpInit(1000);

        b.getmMainBullyFunc = BullyFinally.SS_S;
        b.price = 300;
        b.levelDownGetter = TowerFinally.TraditionalCannon_MultiTube;
        b.levelUpArr = [TowerFinally.SprayCannon_2, TowerFinally.SprayCannon_Double];
        b.imgIndex = 40;
        b.price = 250;
        b.comment =  `发射出去的子弹可以发生分裂`;
        b.audioSrcString = "sound/发射音效/喷泄.mp3";
        return b;
    }

    static SprayCannon_2(world) {
        let b = new Tower(0, 0, world);
        b.name = "2级溅射炮塔";
        b.rangeR = 220;
        b.r += 11;
        b.bullySpeed = 8;
        b.clock += 20;
        b.hpInit(3000);
        b.getmMainBullyFunc = BullyFinally.SS_M;
        b.price = 500;
        b.levelDownGetter = TowerFinally.SprayCannon_1;
        b.levelUpArr = [TowerFinally.SprayCannon_3];
        b.imgIndex = 40;
        b.price = 360;
        b.comment =  `发射的子弹由小型分裂弹变为中型分裂弹`;
        b.audioSrcString = "sound/发射音效/喷泄.mp3";
        return b;
    }

    static SprayCannon_3(world) {
        let b = new Tower(0, 0, world);
        b.name = "3级溅射炮塔";
        b.rangeR = 250;
        b.r += 12;
        b.bullySpeed = 11;
        b.clock += 20;
        b.hpInit(5000);
        b.getmMainBullyFunc = BullyFinally.SS_L;
        b.price = 1000;
        b.levelDownGetter = TowerFinally.SprayCannon_2;
        b.levelUpArr = [];
        b.imgIndex = 40;
        b.price = 500;
        b.comment =  `发射大型分裂弹`;
        b.audioSrcString = "sound/发射音效/喷泄.mp3";
        return b;
    }

    static SprayCannon_Double(world) {
        let b = new Tower(0, 0, world);
        b.name = "二次溅射炮塔";
        b.rangeR = 250;
        b.r += 13;
        b.bullySpeed = 15;
        b.clock += 20;
        b.hpInit(10000);
        b.getmMainBullyFunc = BullyFinally.SS_Second;
        b.price = 10000;
        b.levelDownGetter = TowerFinally.SprayCannon_1;
        b.levelUpArr = [TowerFinally.SprayCannon_Three];
        b.imgIndex = 41;
        b.price = 600;
        b.comment =  `发射的子弹能够发生分裂，发生分裂后的子弹碰到怪物还能继续发生分裂`;
        b.audioSrcString = "sound/发射音效/喷泄.mp3";
        return b;
    }

    static SprayCannon_Three(world) {
        let b = new Tower(0, 0, world);
        b.name = "三次溅射炮塔";
        b.rangeR = 250;
        b.r += 15;
        b.bullySpeed = 15;
        b.clock += 20;
        b.hpInit(10000);
        b.getmMainBullyFunc = BullyFinally.SS_Third;
        b.price = 10000;
        b.levelDownGetter = TowerFinally.SprayCannon_Double;
        b.levelUpArr = [];
        b.imgIndex = 41;
        b.price = 900;
        b.comment =  `发生出去的子弹发生分裂，分裂后继续分裂，分裂后还能分裂！总共能够分裂三次`;
        b.audioSrcString = "sound/发射音效/喷泄.mp3";
        return b;
    }

    static FutureCannon_2(world) {
        let b = new TowerRay(0, 0, world);
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

        b.levelDownGetter = TowerFinally.FutureCannon_1;
        b.levelUpArr = [TowerFinally.FutureCannon_3];
        b.imgIndex = 51;
        b.price = 300;
        b.comment =  `高科技塔，发射的光粒子弹加强了`;
        return b;
    }

    static FutureCannon_3(world) {
        let b = new TowerRay(0, 0, world);
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

        b.levelDownGetter = TowerFinally.FutureCannon_2;
        b.levelUpArr = [TowerFinally.FutureCannon_4];
        b.imgIndex = 52;
        b.price = 600;
        b.comment =  `发射的子弹进一步加强`;
        return b;
    }

    static FutureCannon_4(world) {
        let b = new TowerRay(0, 0, world);
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
        b.levelDownGetter = TowerFinally.FutureCannon_3;
        b.levelUpArr = [TowerFinally.FutureCannon_5];
        b.imgIndex = 53;
        b.price = 800;
        b.comment =  `发射的子弹能够穿过敌人了`;
        return b;
    }

    static FutureCannon_5(world) {
        let b = new TowerRay(0, 0, world);
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
        b.levelDownGetter = TowerFinally.FutureCannon_4;
        b.levelUpArr = [];
        b.imgIndex = 54;
        b.price = 1200;
        b.comment =  `发射的子弹进一步加强了`;
        return b;
    }

    static Thunder_1(world) {
        let b = new TowerLaser(0, 0, world);
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

        b.levelUpArr = [TowerFinally.Thunder_2, TowerFinally.ThunderBall_1];
        b.levelDownGetter = TowerFinally.FutureCannon_1;
        b.imgIndex = 55;
        b.price = 400;
        b.comment =  `能够发射一道闪电，击中敌人后会继续电传导击中附近${b.zapLen}范围内的敌人，进行如上操作${b.zapCount}次数，每次伤害是上一个击中目标的${b.damageMultipleRate}倍数累加，闪电的基础伤害是${b.laserBaseDamage}，最大蓄力伤害是${b.laserMaxDamage}`;
        return b;
    }

    static ThunderBall_1(world) {
        let b = new Tower(0, 0, world);
        b.name = "1级球状闪电发生器";
        b.rangeR = 280;
        b.r += 7;
        b.bullySpeed = 10;
        b.clock = 30;
        b.getmMainBullyFunc = BullyFinally.ThunderBall;
        b.price = 520;
        b.hpInit(15000);
        b.levelUpArr = [TowerFinally.ThunderBall_2];
        b.levelDownGetter = TowerFinally.Thunder_1;
        b.imgIndex = 56;
        b.price = 1000;
        b.comment =  `发射出去的球状闪电具有很强的跟踪能力`;
        return b;
    }

    static ThunderBall_2(world) {
        let b = new Tower(0, 0, world);
        b.name = "2级球状闪电发生器";
        b.rangeR = 290;
        b.r += 12;
        b.bullySpeed = 15;
        b.clock = 18;
        b.getmMainBullyFunc = BullyFinally.ThunderBall;
        b.price = 520;
        b.hpInit(16000);
        b.levelUpArr = [TowerFinally.ThunderBall_3];
        b.levelDownGetter = TowerFinally.ThunderBall_1;
        b.imgIndex = 56;
        b.price = 600;
        b.comment =  `发射出去的球状闪电具有很强的跟踪能力`;
        return b;
    }

    static ThunderBall_3(world) {
        let b = new Tower(0, 0, world);
        b.name = "3级球状闪电发生器";
        b.rangeR = 300;
        b.r += 13;
        b.bullySpeed = 20;
        b.clock = 16;
        b.getmMainBullyFunc = BullyFinally.ThunderBall;
        b.price = 520;
        b.hpInit(20000);
        b.levelUpArr = [];
        b.levelDownGetter = TowerFinally.ThunderBall_2;
        b.imgIndex = 56;
        b.price = 600;
        b.comment =  `发射出去的球状闪电具有很强的跟踪能力`;
        return b;
    }

    static Thunder_2(world) {
        let b = new TowerLaser(0, 0, world);
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
        b.levelUpArr = [TowerFinally.Thunder_Far_1, TowerFinally.Thunder_Power_1];
        b.levelDownGetter = TowerFinally.Thunder_1;
        b.imgIndex = 55;
        b.price = 600;
        b.comment =  `能够发射一道闪电，击中敌人后会继续电传导击中附近${b.zapLen}范围内的敌人，进行如上操作${b.zapCount}次数，每次伤害是上一个击中目标的${b.damageMultipleRate}倍数累加，闪电的基础伤害是${b.laserBaseDamage}，最大蓄力伤害是${b.laserMaxDamage}`;
        return b;
    }

    static Thunder_Far_1(world) {
        let b = new TowerLaser(0, 0, world);
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
        b.levelUpArr = [TowerFinally.Thunder_Far_2];
        b.levelDownGetter = TowerFinally.Thunder_2;
        b.imgIndex = 55;
        b.price = 600;
        b.comment =  `能够发射一道闪电，击中敌人后会继续电传导击中附近${b.zapLen}范围内的敌人，进行如上操作${b.zapCount}次数，每次伤害是上一个击中目标的${b.damageMultipleRate}倍数累加，闪电的基础伤害是${b.laserBaseDamage}，最大蓄力伤害是${b.laserMaxDamage}`;
        return b;
    }

    static Thunder_Far_2(world) {
        let b = new TowerLaser(0, 0, world);
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
        b.levelDownGetter = TowerFinally.Thunder_Far_1;
        b.imgIndex = 55;
        b.price = 600;
        b.comment =  `能够发射一道闪电，击中敌人后会继续电传导击中附近${b.zapLen}范围内的敌人，进行如上操作${b.zapCount}次数，每次伤害是上一个击中目标的${b.damageMultipleRate}倍数累加，闪电的基础伤害是${b.laserBaseDamage}，最大蓄力伤害是${b.laserMaxDamage}`;
        return b;
    }

    static Thunder_Power_1(world) {
        let b = new TowerLaser(0, 0, world);
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
        b.levelUpArr = [TowerFinally.Thunder_Power_2];
        b.levelDownGetter = TowerFinally.Thunder_2;
        b.imgIndex = 55;
        b.price = 400;
        b.comment =  `能够发射一道闪电，击中敌人后会继续电传导击中附近${b.zapLen}范围内的敌人，进行如上操作${b.zapCount}次数，每次伤害是上一个击中目标的${b.damageMultipleRate}倍数累加，闪电的基础伤害是${b.laserBaseDamage}，最大蓄力伤害是${b.laserMaxDamage}`;
        return b;
    }

    static Thunder_Power_2(world) {
        let b = new TowerLaser(0, 0, world);
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
        b.levelDownGetter = TowerFinally.Thunder_Power_1;
        b.imgIndex = 55;
        b.price = 1000;
        b.comment =  `能够发射一道闪电，击中敌人后会继续电传导击中附近${b.zapLen}范围内的敌人，进行如上操作${b.zapCount}次数，每次伤害是上一个击中目标的${b.damageMultipleRate}倍数累加，闪电的基础伤害是${b.laserBaseDamage}，最大蓄力伤害是${b.laserMaxDamage}`;
        return b;
    }

    static Laser(world) {
        let b = new TowerLaser(0, 0, world);
        b.name = "激光塔";
        b.r += 6;

        b.rangeR = 120;
        b.laserBaseDamage = 50;  // 直接打中的激光炮的伤害
        b.laserFreezeMax = 10;  // 多少个时间刻度
        b.laserMaxDamage = 300;  // 最大蓄力强度
        b.laserDamagePreAdd = 1;  // 蓄力后每个tick增加多少攻击力
        b.laserColor = new MyColor(100, 100, 100, 0.7);

        b.levelUpArr = [TowerFinally.Laser_Blue_1, TowerFinally.Laser_Red, TowerFinally.Laser_Green_1];
        b.levelDownGetter = TowerFinally.FutureCannon_1;
        b.imgIndex = 60;
        b.price = 350;
        b.comment = `蓄力发射激光直接瞬间命中敌人，攻击冷却是${b.laserFreezeMax}个时间刻度，每次击中基础伤害是${b.laserBaseDamage}，最大额外蓄力伤害是${b.laserMaxDamage}`;
        return b;
    }

    static Laser_Blue_1(world) {
        let b = new TowerLaser(0, 0, world);
        b.name = "1级蓝激光";
        b.rangeR = 130;
        b.laserBaseDamage = 150;  // 直接打中的激光炮的伤害
        b.laserFreezeMax = 20;  // 多少个时间刻度
        b.laserMaxDamage = 700;  // 最大蓄力强度
        b.laserDamagePreAdd = 5;  // 蓄力后每个tick增加多少攻击力

        b.r += 7;
        b.levelUpArr = [TowerFinally.Laser_Blue_2, TowerFinally.Laser_Hell_1];
        b.levelDownGetter = TowerFinally.Laser;
        b.imgIndex = 59;
        b.price = 600;
        b.comment = `蓄力发射激光直接瞬间命中敌人，攻击冷却是${b.laserFreezeMax}个时间刻度，每次击中基础伤害是${b.laserBaseDamage}，最大额外蓄力伤害是${b.laserMaxDamage}`;
        return b;
    }

    static Laser_Blue_2(world) {
        let b = new TowerLaser(0, 0, world);
        b.name = "2级蓝激光";
        b.r += 10;
        b.rangeR = 150;
        b.laserBaseDamage = 300;  // 直接打中的激光炮的伤害
        b.laserFreezeMax = 20;  // 多少个时间刻度
        b.laserMaxDamage = 1000;  // 最大蓄力强度
        b.laserDamagePreAdd = 10;  // 蓄力后每个tick增加多少攻击力
        b.levelUpArr = [TowerFinally.Laser_Blue_3];
        b.levelDownGetter = TowerFinally.Laser_Blue_1;
        b.imgIndex = 59;
        b.price = 1200;
        b.comment = `蓄力发射激光直接瞬间命中敌人，攻击冷却是${b.laserFreezeMax}个时间刻度，每次击中基础伤害是${b.laserBaseDamage}，最大额外蓄力伤害是${b.laserMaxDamage}`;
        return b;
    }

    static Laser_Blue_3(world) {
        let b = new TowerLaser(0, 0, world);
        b.name = "3级蓝激光";
        b.r += 13;
        b.rangeR = 170;
        b.laserBaseDamage = 500;  // 直接打中的激光炮的伤害
        b.laserFreezeMax = 30;  // 多少个时间刻度
        b.laserMaxDamage = 5000;  // 最大蓄力强度
        b.laserDamagePreAdd = 10;  // 蓄力后每个tick增加多少攻击力
        b.levelUpArr = [];
        b.levelDownGetter = TowerFinally.Laser_Blue_2;
        b.imgIndex = 59;
        b.price = 1000;
        b.comment = `蓄力发射激光直接瞬间命中敌人，攻击冷却是${b.laserFreezeMax}个时间刻度，每次击中基础伤害是${b.laserBaseDamage}，最大额外蓄力伤害是${b.laserMaxDamage}`;
        return b;
    }

    static Laser_Hell_1(world) {
        let b = new TowerHell(0, 0, world);
        b.name = "1级地狱激光塔";
        b.r += 13;
        b.damageRate = 1000;
        b.levelUpArr = [TowerFinally.Laser_Hell_2]
        b.levelDownGetter = TowerFinally.Laser_Blue_1;
        b.imgIndex = 69;
        b.price = 2000;
        b.comment = `锁定敌人之后会持续对敌人发射激光，激光会越来越强，随着时间推移伤害会越来越高，无限制增高，血量再厚的敌人也抵挡不过它`
        return b;
    }

    static Laser_Hell_2(world) {
        let b = new TowerHell(0, 0, world);
        b.name = "2级地狱激光塔";
        b.r += 15;
        b.damageRate = 100;
        b.levelUpArr = [];
        b.levelDownGetter = TowerFinally.Laser_Hell_1;
        b.imgIndex = 69;
        b.price = 1000;
        b.comment = `锁定目标后伤害增加的速度变得更快了`
        return b;
    }

    static Laser_Green_1(world) {
        // 绿激光是快速的激光
        let b = new TowerLaser(0, 0, world);
        b.name = "1级绿激光";
        b.r += 7;
        b.rangeR = 200;
        b.laserBaseDamage = 40;  // 直接打中的激光炮的伤害
        b.laserFreezeMax = 4;  // 多少个时间刻度
        b.laserMaxDamage = 100;  // 最大蓄力强度
        b.laserDamagePreAdd = 1;  // 蓄力后每个tick增加多少攻击力
        b.laserColor = new MyColor(24, 212, 107, 0.7);

        b.levelDownGetter = TowerFinally.Laser;
        b.levelUpArr = [TowerFinally.Laser_Green_2];
        b.imgIndex = 58;
        b.price = 400;
        b.comment = `蓄力发射激光直接瞬间命中敌人，攻击冷却是${b.laserFreezeMax}个时间刻度，每次击中基础伤害是${b.laserBaseDamage}，最大额外蓄力伤害是${b.laserMaxDamage}`;
        return b;
    }

    static Laser_Green_2(world) {
        // 绿激光是快速的激光
        let b = new TowerLaser(0, 0, world);
        b.name = "2级绿激光";
        b.r += 8;
        b.rangeR = 250;
        b.laserBaseDamage = 35;  // 直接打中的激光炮的伤害
        b.laserFreezeMax = 3;  // 多少个时间刻度
        b.laserMaxDamage = 120;  // 最大蓄力强度
        b.laserDamagePreAdd = 2;  // 蓄力后每个tick增加多少攻击力
        b.laserColor = new MyColor(24, 212, 107, 0.7);
        b.levelUpArr = [TowerFinally.Laser_Green_3];
        b.levelDownGetter = TowerFinally.Laser_Green_1;
        b.imgIndex = 58;
        b.price = 500;
        b.comment = `蓄力发射激光直接瞬间命中敌人，攻击冷却是${b.laserFreezeMax}个时间刻度，每次击中基础伤害是${b.laserBaseDamage}，最大额外蓄力伤害是${b.laserMaxDamage}`;
        return b;
    }

    static Laser_Green_3(world) {
        // 绿激光是快速的激光
        let b = new TowerLaser(0, 0, world);
        b.name = "3级绿激光";
        b.r += 10;
        b.rangeR = 300;
        b.laserBaseDamage = 55;  // 直接打中的激光炮的伤害
        b.laserFreezeMax = 2;  // 多少个时间刻度
        b.laserMaxDamage = 200;  // 最大蓄力强度
        b.laserDamagePreAdd = 4;  // 蓄力后每个tick增加多少攻击力
        b.laserColor = new MyColor(24, 212, 107, 0.7);
        b.levelUpArr = [];
        b.levelDownGetter = TowerFinally.Laser_Blue_2;
        b.imgIndex = 58;
        b.price = 700;
        b.comment = `蓄力发射激光直接瞬间命中敌人，攻击冷却是${b.laserFreezeMax}个时间刻度，每次击中基础伤害是${b.laserBaseDamage}，最大额外蓄力伤害是${b.laserMaxDamage}`;
        return b;
    }

    static Laser_Red(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "红激光"
        b.r += 7;

        b.rangeR = 250;
        b.rayLen = 300;
        b.rayClock = 10;
        b.rayWidth = 5;
        b.damage = 100;
        b.hpInit(10000);
        b.rayColor = new MyColor(255, 0, 0, 1);

        b.levelUpArr = [TowerFinally.Laser_Red_Alpha_1, TowerFinally.Laser_Red_Beta_1];
        b.levelDownGetter = TowerFinally.Laser;
        b.imgIndex = 57;
        b.price = 800;
        b.comment = `绿色激光是一种高频激光，蓝色激光是一种低频高伤害激光，而红色激光是一种大范围群体伤害激光，能够穿射`
        return b;
    }

    static Laser_Red_Alpha_1(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "1级Alpha红激光";
        b.r += 9;

        b.rangeR = 300;
        b.rayLen = 1000;
        b.rayClock = 30;
        b.rayWidth = 10;
        b.damage = 300;
        b.hpInit(20000);
        b.rayColor = new MyColor(255, 0, 0, 1);

        b.levelUpArr = [TowerFinally.Laser_Red_Alpha_2];
        b.levelDownGetter = TowerFinally.Laser_Red;
        b.imgIndex = 57;
        b.price = 800;
        b.comment = `这种激光的穿射能力更强了, 激光的长度几乎能够穿过整个战场`;
        return b;
    }

    static Laser_Red_Alpha_2(world) {
        let b = new TowerRay(0, 0, world);
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
        b.levelDownGetter = TowerFinally.Laser_Red_Alpha_1;
        b.imgIndex = 57;
        b.price = 900;
        b.comment = "增加了激光的伤害";
        return b;
    }

    static Laser_Red_Beta_1(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "1级Beta红激光"
        b.r += 8;
        b.damage = 50;
        b.rangeR = 0;
        b.rayLen = 300;
        b.rayWidth = 2;
        b.hpInit(10000);
        b.rayColor = new MyColor(255, 0, 0, 1);

        b.attackFunc = b.scanningAttack;
        b.levelUpArr = [TowerFinally.Laser_Red_Beta_2];
        b.levelDownGetter = TowerFinally.Laser_Red;
        b.imgIndex = 57;
        b.price = 600;
        b.comment = `激光不再有固定的目标，开始直接旋转扫射，只要被激光扫到，就会受到伤害`
        return b;
    }

    static Laser_Red_Beta_2(world) {
        let b = new TowerRay(0, 0, world);
        b.name = "2级Beta红激光"
        b.r += 13;
        b.damage = 100;
        b.rangeR = 0;
        b.rayLen = 1000;
        b.rayWidth = 5;
        b.hpInit(50000);
        b.rayColor = new MyColor(255, 0, 0, 1);

        b.attackFunc = b.scanningAttack;
        b.levelDownGetter = TowerFinally.Laser_Red_Beta_1;
        b.levelUpArr = [];
        b.imgIndex = 57;
        b.price = 1000;
        b.comment = `全屏扫射`
        return b;
    }
}

const TOWER_FUNC_ARR = [

    TowerFinally.BasicCannon,
    TowerFinally.MachineGun_1,
    TowerFinally.MachineGun_2,
    TowerFinally.MachineGun_3,

    TowerFinally.Artillery_1,
    TowerFinally.Artillery_2,
    TowerFinally.Artillery_3,

    TowerFinally.MissileGun_1,

    TowerFinally.Shotgun_1,

    TowerFinally.ShotCannon_1,
    TowerFinally.ShotCannon_2,

    TowerFinally.ArmorPiercing_1,
    TowerFinally.ArmorPiercing_2,
    TowerFinally.ArmorPiercing_3,

    TowerFinally.FrozenCannon_1,
    TowerFinally.FrozenCannon_2,

    TowerFinally.SprayCannon_1,
    TowerFinally.SprayCannon_2,
    TowerFinally.SprayCannon_3,
    TowerFinally.SprayCannon_Double,

    TowerFinally.Flamethrower_1,
    TowerFinally.Flamethrower_2,

    TowerFinally.Poison_1,
    TowerFinally.Poison_2,

    TowerFinally.FutureCannon_2,

    TowerFinally.Laser_Hell_1,

    TowerFinally.Laser_Red,

    TowerFinally.Earthquake,
    TowerFinally.Thunder_1,

    TowerFinally.Hammer,
    TowerFinally.Boomerang,

    TowerFinally.ThunderBall_1,
    TowerFinally.AirCannon_1,
];

const TOWERS_IMG = new Image();
TOWERS_IMG.src = "towers/imgs/towers.png";
const TOWER_IMG_WIDTH = 1000;
const TOWER_IMG_HEIGHT = 1000;
const TOWER_IMG_PRE_WIDTH = 100;
const TOWER_IMG_PRE_HEIGHT = 100;
