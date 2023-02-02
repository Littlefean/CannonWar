/**
 *
 * by littlefean
 */
class BullyFinally {
    static Normal() {
        let res = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        return res;
    }

    /**
     * 小石头蛋子
     */
    static littleStone() {
        let res = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        res.damage = 7;
        res.r = 3;
        res.bodyColor = new MyColor(130, 131, 133, 1);
        res.bodyStrokeColor = MyColor.BLACK();
        res.bodyStrokeWidth = 1;
        return res;
    }

    /**
     * 弓箭子弹
     * @constructor
     */
    static Arrow() {
        let res = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        res.damage = 10;
        res.r = 2;
        res.bodyColor = new MyColor(104, 128, 144, 1);
        res.bodyStrokeColor = MyColor.BLACK();
        res.bodyStrokeWidth = 0.5;
        res.dRGB = [-10, -10, -10, 0];
        return res;
    }

    /**
     * 大的弓箭
     * @constructor
     */
    static Arrow_L() {
        let res = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        res.damage = 15;
        res.r = 2.5;
        res.bodyColor = new MyColor(104, 128, 144, 1);
        res.bodyStrokeColor = MyColor.BLACK();
        res.bodyStrokeWidth = 0.5;
        res.dRGB = [-15, -15, -15, 0];
        return res;
    }

    /**
     * 弓箭而非连弩射出的子弹
     * @constructor
     */
    static Arrow_LL() {
        let res = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        res.damage = 70;
        res.r = 2.7;
        res.bodyColor = new MyColor(177, 119, 49, 1);
        res.bodyStrokeColor = MyColor.BLACK();
        res.bodyStrokeWidth = 0.6;
        res.dRGB = [-20, -20, -20, 0];
        return res;
    }

    /**
     * 加农石头炮
     * @constructor
     */
    static CannonStone_S() {
        let res = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        res.damage = 500;
        res.r = 4;
        res.bodyColor = new MyColor(66, 66, 66, 1);
        res.bodyStrokeColor = new MyColor(135, 147, 154, 1);
        res.bodyStrokeWidth = 2;
        return res;
    }

    static CannonStone_M() {
        let res = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        res.damage = 800;
        res.r = 6;
        res.bodyColor = new MyColor(66, 66, 66, 1);
        res.bodyStrokeColor = new MyColor(135, 147, 154, 1);
        res.bodyStrokeWidth = 2.2;
        return res;
    }

    static CannonStone_L() {
        let res = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        res.damage = 1000;
        res.r = 8;
        res.bodyColor = new MyColor(66, 66, 66, 1);
        res.bodyStrokeColor = new MyColor(135, 147, 154, 1);
        res.bodyStrokeWidth = 2.5;
        res.splitAble = true;
        res.splitNum = 13;
        res.splitRandomV = 5;
        res.splitRangeRate = 200;
        res.splitRotate = 1.5;
        res.splitBully = BullyFinally.littleStone;
        return res;
    }

    /**
     * 普通军事子弹
     * @constructor
     */
    static Bully_S() {
        let res = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        res.damage = 40;
        res.r = 1.5;
        res.bodyColor = new MyColor(86, 94, 39, 1);
        res.bodyStrokeColor = new MyColor(98, 151, 85, 1);
        res.bodyStrokeWidth = 1;
        return res;
    }

    static Bully_M() {
        let res = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        res.damage = 50;
        res.r = 1.7;
        res.bodyColor = new MyColor(86, 94, 39, 1);
        res.bodyStrokeColor = new MyColor(98, 151, 85, 1);
        res.bodyStrokeWidth = 1;
        return res;
    }

    static Bully_L() {
        let res = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        res.damage = 75;
        res.r = 2;
        res.bodyColor = new MyColor(86, 94, 39, 1);
        res.bodyStrokeColor = new MyColor(98, 151, 85, 1);
        res.bodyStrokeWidth = 1;
        return res;
    }

    /**
     * 步枪子弹
     * @constructor
     */
    static Rifle_Bully_S() {
        let res = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        res.damage = 70;
        res.r = 1;
        res.bodyColor = new MyColor(64, 182, 224, 1);
        res.bodyStrokeColor = new MyColor(98, 151, 85, 1);
        res.bodyStrokeWidth = 0.2;
        return res;
    }

    static Rifle_Bully_M() {
        let res = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        res.damage = 100;
        res.r = 1.1;
        res.bodyColor = new MyColor(64, 182, 224, 1);
        res.bodyStrokeColor = new MyColor(98, 151, 85, 1);
        res.bodyStrokeWidth = 0.2;
        return res;
    }

    static Rifle_Bully_L() {
        let res = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        res.damage = 150;
        res.r = 1.2;
        res.bodyColor = new MyColor(64, 182, 224, 1);
        res.bodyStrokeColor = new MyColor(98, 151, 85, 1);
        return res;
    }

    /**
     * 机枪类型子弹
     */
    static F_S() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        b.r = 0.8;
        b.damage = 10;
        b.bodyColor = new MyColor(20, 20, 20, 1);
        b.bodyStrokeWidth = 0;
        b.bodyStrokeColor = MyColor.arrTo([0, 0, 0, 0]);
        return b;
    }

    static F_M() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        b.r = 0.9;
        b.damage = 30;

        b.bodyColor = MyColor.arrTo([10, 10, 10, 1]);
        b.bodyStrokeWidth = 0;
        b.bodyStrokeColor = MyColor.arrTo([10, 10, 10, 0]);
        return b;
    }

    static F_L() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        b.r = 1;
        b.damage = 30;

        b.bodyColor = MyColor.arrTo([0, 0, 0, 1]);
        b.bodyStrokeWidth = 0;
        b.bodyStrokeColor = MyColor.arrTo([0, 0, 0, 0]);
        return b;
    }

    /**
     * 火炮子弹
     */
    static H_S() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        b.r = 4;
        b.damage = 100;

        b.haveBomb = true;
        b.bombDamage = 1000;
        b.bombRange = 35;
        b.bombFunc = b.bombFire;
        b.accelerationV = 0.05

        b.bodyColor = MyColor.arrTo([203, 91, 36, 1]);
        b.bodyStrokeColor = MyColor.arrTo([255, 100, 20, 1]);
        b.bodyStrokeWidth = 2;
        b.collideSound = new Audio("sound/子弹音效/火炮爆炸.ogg");
        return b;
    }

    static H_L() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        b.r = 6;
        b.damage = 200;

        b.haveBomb = true;
        b.bombDamage = 2000;
        b.bombRange = 60;
        b.bombFunc = b.bombFire;
        b.accelerationV = 0.05

        b.bodyColor = MyColor.arrTo([203, 60, 10, 1]);
        b.bodyStrokeColor = MyColor.arrTo([255, 100, 20, 1]);
        b.bodyStrokeWidth = 4;
        b.collideSound = new Audio("sound/子弹音效/火炮爆炸.ogg");
        return b;
    }

    static H_LL() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 10);
        b.damage = 500;

        b.haveBomb = true;
        b.bombDamage = 3500;
        b.bombRange = 120;
        b.bombFunc = b.bombFire;
        b.accelerationV = 0.05;

        b.bodyColor = MyColor.arrTo([255, 20, 10, 1]);
        b.bodyStrokeColor = MyColor.arrTo([255, 100, 20, 1]);
        b.bodyStrokeWidth = 6;
        b.collideSound = new Audio("sound/子弹音效/火炮爆炸.ogg");
        return b;
    }

    // 散弹子弹
    static S() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        b.r = 1.6;
        b.damage = 40;
        b.bodyColor = MyColor.arrTo([0, 0, 255, 1]);

        return b;
    }

    //穿甲子弹 中号
    static T_M() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        b.throughable = true;
        b.throughCutNum = 0.1;

        b.damage = 30;
        b.bodyColor = MyColor.arrTo([0, 200, 255, 1]);
        b.bodyStrokeColor = MyColor.BLACK();
        return b;
    }

    //穿甲子弹 号
    static T_L() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        b.throughable = true;
        b.throughCutNum = 1;

        b.r = 4;
        // b.accelerationV = -0.1;
        b.damage = 40;
        b.bodyColor = MyColor.arrTo([0, 150, 255, 1]);
        b.bodyStrokeColor = MyColor.BLACK();
        return b;
    }

    static T_LL() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 8);
        b.throughable = true;
        b.throughCutNum = 1;
        b.damage = 120;
        b.bodyColor = MyColor.arrTo([0, 100, 255, 1]);
        b.bodyStrokeColor = MyColor.BLACK();
        return b;
    }

    // 冰冻炸弹
    static Frozen_S() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 1);
        b.damage = 0.1;

        b.haveBomb = true;
        b.bombDamage = 0.1;
        b.bombRange = 10;
        b.bombFunc = b.bombFreeze;
        b.freezeCutDown = 0.98

        b.bodyColor = MyColor.arrTo([0, 100, 255, 1]);
        b.bodyStrokeColor = MyColor.arrTo([100, 100, 255, 1]);
        b.bodyStrokeWidth = 0.5;
        return b;
    }

    static Frozen_M() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 1);
        b.damage = 0.1;
        b.r = 2;

        b.haveBomb = true;
        b.bombDamage = 0.1;
        b.bombRange = 20;
        b.bombFunc = b.bombFreeze;
        b.freezeCutDown = 0.9;

        b.bodyColor = MyColor.arrTo([0, 50, 255, 1]);
        b.bodyStrokeColor = MyColor.arrTo([10, 100, 255, 1]);
        b.bodyStrokeWidth = 0.5;
        return b;
    }

    static Frozen_L() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 1);
        b.damage = 0.1;
        b.r = 5;

        b.haveBomb = true;
        b.bombDamage = 0.1;
        b.bombRange = 30;
        b.bombFunc = b.bombFreeze;
        b.freezeCutDown = 0.7;

        b.bodyColor = MyColor.arrTo([122, 159, 216, 0.75]);
        b.bodyStrokeColor = MyColor.arrTo([10, 50, 255, 1]);
        b.bodyStrokeWidth = 0.5;
        return b;
    }

    // 击退炮弹
    static R_M() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 5);

        b.damage = 20;
        b.bodyColor = MyColor.arrTo([204, 120, 50, 1]);
        b.repel = 0.1;
        b.collideSound = new Audio("sound/子弹音效/击退炮.mp3");
        return b;
    }

    // 小型分裂弹
    static SS_S() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 5);

        b.damage = 30;
        // 分裂子弹特性
        b.splitAble = true;
        b.splitNum = 6;  // 分裂后子弹的数量
        b.splitRandomV = 2;
        b.splitRotate = Math.PI / 6;
        b.splitBully = BullyFinally.Bully_S;
        b.splitRangeRate = 200;  // 分裂后的子弹可以存在的攻击范围 px
        b.bodyColor = MyColor.arrTo([0, 84, 71, 1]);
        return b;
    }

    // 中型分裂弹
    static SS_M() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 5);
        b.damage = 20;
        b.r = 6;
        // 分裂子弹特性
        b.splitAble = true;
        b.splitNum = 20;  // 分裂后子弹的数量
        b.splitRandomV = 10;
        b.splitBully = BullyFinally.Bully_M; // 分裂后的小子弹是散弹
        b.splitRangeRate = 250;  // 分裂后的子弹可以存在的攻击范围 px
        b.bodyColor = MyColor.arrTo([0, 84, 71, 1]);
        return b;
    }

    // 大型分裂弹
    static SS_L() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 5);
        b.damage = 50;
        b.r = 8;
        // 爆炸炮弹的特性
        b.haveBomb = true;
        b.bombDamage = 100;  // 这个应该是爆炸中心点的伤害
        b.bombRange = 50;
        b.bombFunc = b.bombFire;  // 默认是火炮的爆炸方式
        // 分裂子弹特性
        b.splitAble = true;
        b.splitNum = 20;  // 分裂后子弹的数量
        b.splitRandomV = 20;
        b.splitBully = BullyFinally.Bully_L;
        b.splitRangeRate = 300;  // 分裂后的子弹可以存在的攻击范围 px

        b.bodyColor = MyColor.arrTo([0, 84, 71, 1]);
        return b;
    }

    // 超级分裂弹
    static SS_Second() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 5);
        b.damage = 100;
        b.r = 15;
        // 爆炸炮弹的特性
        b.haveBomb = true;
        b.bombDamage = 200;  // 这个应该是爆炸中心点的伤害
        b.bombRange = 80;
        b.bombFunc = b.bombFire;  // 默认是火炮的爆炸方式
        // 分裂子弹特性
        b.splitAble = true;
        b.splitNum = 5;  // 分裂后子弹的数量
        b.splitRandomV = 10;
        b.splitBully = BullyFinally.SS_S; // 分裂后的小子弹是散弹
        b.splitRangeRate = 100;  // 分裂后的子弹可以存在的攻击范围 px

        b.bodyColor = MyColor.arrTo([0, 136, 111, 1]);
        return b;
    }

    static SS_Third() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 5);
        b.damage = 120;
        b.r = 20;
        // 爆炸炮弹的特性
        b.haveBomb = true;
        b.bombDamage = 300;  // 这个应该是爆炸中心点的伤害
        b.bombRange = 100;
        b.bombFunc = b.bombFire;  // 默认是火炮的爆炸方式
        // 分裂子弹特性
        b.splitAble = true;
        b.splitNum = 5;  // 分裂后子弹的数量
        b.splitRandomV = 10;
        b.splitBully = BullyFinally.SS_Second; // 分裂后的小子弹是二级分裂
        b.splitRangeRate = 100;  // 分裂后的子弹可以存在的攻击范围 px

        b.bodyColor = MyColor.arrTo([0, 234, 194, 1]);
        return b;
    }

    /**
     * 荒野乱斗中仙人掌斯派克的父亲爆裂子弹
     * @constructor
     */
    static SpikeBully() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 10);
        b.splitAble = true;
        b.splitNum = 10;
        b.splitRandomV = 0;
        b.splitV = 3;
        b.splitRotate = Math.PI * 2;
        b.splitRangeRate = 250;
        b.splitBully = BullyFinally.CactusNeedle;

        b.r = 10;
        b.bodyColor = MyColor.arrTo([97, 150, 66, 1]);
        b.bodyStrokeColor = new MyColor(41, 53, 29, 1);
        b.bodyStrokeWidth = 3;
        return b;
    }

    /**
     * 仙人掌针 子弹
     * @constructor
     */
    static CactusNeedle() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 10);

        b.r = 1;
        b.bodyColor = MyColor.arrTo([97, 150, 66, 1]);
        b.bodyStrokeColor = new MyColor(41, 53, 29, 1);
        b.bodyStrokeWidth = 3;
        return b;
    }

    // 普通烟雾子弹
    static Powder() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 10);
        b.damage = 0.8;
        b.r = 8;
        // 火焰贯穿
        b.throughable = true;
        b.throughCutNum = 0;
        b.accelerationV = -0.04;
        // 子弹颜色
        b.bodyColor = MyColor.arrTo([0, 0, 0, 0.2]);
        b.bodyStrokeWidth = 0;
        b.bodyStrokeColor = MyColor.arrTo([255, 255, 0, 0]);

        b.dr = 0.8;  // 扩散
        b.dRGB = [+10, +10, +10, -0.0003];  // 火焰颜色演变
        b.laserDestoryAble = false;

        return b;
    }

    // 火焰粒子弹
    static Fire_M() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 10);
        b.damage = 1;
        b.r = 10;
        // 火焰贯穿
        b.throughable = true;
        b.throughCutNum = 0;
        b.accelerationV = -0.04;
        // 子弹颜色
        b.bodyColor = MyColor.arrTo([255, 255, 31, 0.1]);
        b.bodyStrokeWidth = 0;
        b.bodyStrokeColor = MyColor.arrTo([255, 255, 0, 0]);
        b.freezeCutDown = 1.001;  // 加速效果

        b.dr = 1;  // 火焰扩散
        b.dRGB = [0, -10, -10, -0.0003];  // 火焰颜色演变
        b.burnRateAdd = 0.0001;
        b.laserDestoryAble = false;
        return b;
    }

    static Fire_L() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 10);
        b.damage = 0.5;
        // b.damage = 0;
        b.r = 20;
        // 火焰贯穿
        b.throughable = true;
        b.throughCutNum = 0;
        b.accelerationV = -0.04;
        // 子弹颜色
        b.bodyColor = MyColor.arrTo([255, 255, 31, 0.1]);
        b.bodyStrokeWidth = 0;
        b.bodyStrokeColor = MyColor.arrTo([255, 255, 0, 0]);
        b.freezeCutDown = 1.0009;  // 加速效果

        b.dr = 2;  // 火焰扩散
        b.dRGB = [0, -10, -10, -0.0003];  // 火焰颜色演变
        b.burnRateAdd = 0.0001;
        b.laserDestoryAble = false;
        return b;
    }

    static Fire_LL() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 10);
        b.damage = 1;
        // b.damage = 0;
        b.r = 10;
        // 火焰贯穿
        b.throughable = true;
        b.throughCutNum = 0;
        b.accelerationV = -0.04;
        // 子弹颜色
        b.bodyColor = MyColor.arrTo([50, 100, 255, 0.1]);
        b.bodyStrokeWidth = 0;
        b.bodyStrokeColor = MyColor.arrTo([255, 255, 0, 0]);
        b.freezeCutDown = 1.0005;  // 加速效果

        b.dr = 3;  // 火焰扩散
        b.dRGB = [+20, -5, -50, -0.0003];  // 火焰颜色演变
        b.burnRateAdd = 0.0001;
        b.laserDestoryAble = false;
        return b;
    }

    // 毒气弹
    static P_L() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 10);
        b.r = 2;
        b.damage = 3;
        b.throughable = true;
        b.throughCutNum = 2;
        b.accelerationV = -0.005;

        // 子弹颜色
        b.bodyColor = MyColor.arrTo([50, 255, 20, 0.1]);
        b.bodyStrokeWidth = 0;
        b.bodyStrokeColor = MyColor.arrTo([255, 255, 0, 0]);
        b.dRGB = [0, 0, 0, -0.0003];  // 颜色演变
        b.dr = 1;  // 扩散
        b.laserDestoryAble = false;
        return b;
    }

    static P_M() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 10);
        b.r = 10;
        b.damage = 5;
        b.throughable = true;
        b.throughCutNum = 2;
        b.accelerationV = -0.005;

        // 子弹颜色
        b.bodyColor = MyColor.arrTo([20, 100, 20, 0.1]);
        b.bodyStrokeWidth = 0;
        b.bodyStrokeColor = MyColor.arrTo([255, 255, 0, 0]);
        b.dRGB = [0, 0, 0, -0.0003];  // 颜色演变
        b.dr = 2;  // 扩散
        b.laserDestoryAble = false;
        return b;
    }

    /**
     * 跟踪导弹炮  小型
     * @constructor
     */
    static H_Target_S() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        b.r = 6;
        b.damage = 100;

        b.haveBomb = true;
        b.bombDamage = 100;
        b.bombRange = 100;
        b.bombFunc = b.bombFire;

        b.targetAble = true;
        b.viewRadius = 50;
        b.speedToTargetN = 5;

        b.bodyColor = MyColor.arrTo([168, 182, 172, 1]);
        b.bodyStrokeColor = MyColor.arrTo([255, 198, 109, 1]);
        b.bodyStrokeWidth = 4;
        b.collideSound = new Audio("sound/large_gun_fire2.ogg");
        return b;
    }

    /**
     * 球状闪电
     * @constructor
     */
    static ThunderBall() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        b.damage = 100;
        b.dDamage = 5;
        b.r = 10;
        b.dr = 0.3;
        b.targetAble = true;
        b.viewRadius = 300;
        b.speedToTargetN = 16;
        b.laserDestoryAble = false;
        b.haveBomb = true;
        b.bombDamage = 200;
        b.bombRange = 160;

        b.bodyColor = MyColor.arrTo([65, 165, 238, 0.5]);
        b.bodyStrokeColor = MyColor.arrTo([51, 133, 255, 1]);
        b.bodyStrokeWidth = 3;
        return b;
    }
}

