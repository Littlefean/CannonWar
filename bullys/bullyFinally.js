/**
 *
 * by littlefean
 */
class BullyFinally {
    static Normal() {
        return new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
    }

    /**
     * 机枪类型子弹
     */
    static F_S() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        b.r = 0.6;
        b.damage = 1;
        b.bodyColor = new MyColor(20, 20, 20, 1);
        b.bodyStrokeWidth = 0;
        b.bodyStrokeColor = MyColor.arrTo([0, 0, 0, 0]);
        return b;
    }

    static F_M() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        b.r = 0.8;
        b.damage = 3;

        b.bodyColor = MyColor.arrTo([10, 10, 10, 1]);
        b.bodyStrokeWidth = 0;
        b.bodyStrokeColor = MyColor.arrTo([10, 10, 10, 0]);
        return b;
    }

    static F_L() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        b.r = 1;
        b.damage = 10;

        b.bodyColor = MyColor.arrTo([0, 0, 0, 1]);
        b.bodyStrokeWidth = 0;
        b.bodyStrokeColor = MyColor.arrTo([0, 0, 0, 0]);
        return b;
    }

    /**
     * 火炮子弹
     * @returns {Bully}
     */
    static H_S() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        b.r = 4;
        b.damage = 80;

        b.haveBomb = true;
        b.bombDamage = 20;
        b.bombRange = 30;
        b.bombFunc = b.bombFire;
        b.accelerationV = 0.05

        b.bodyColor = MyColor.arrTo([255, 20, 20, 1]);
        b.bodyStrokeColor = MyColor.arrTo([255, 100, 20, 1]);
        b.bodyStrokeWidth = 2;
        return b;
    }

    static H_L() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        b.r = 6;
        b.damage = 410;

        b.haveBomb = true;
        b.bombDamage = 300;
        b.bombRange = 100;
        b.bombFunc = b.bombFire;
        b.accelerationV = 0.05

        b.bodyColor = MyColor.arrTo([255, 30, 0, 1]);
        b.bodyStrokeColor = MyColor.arrTo([255, 100, 20, 1]);
        b.bodyStrokeWidth = 4;
        return b;
    }

    static H_LL() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 10);
        b.damage = 410;

        b.haveBomb = true;
        b.bombDamage = 800;
        b.bombRange = 130;
        b.bombFunc = b.bombFire;
        b.accelerationV = 0.02;

        b.bodyColor = MyColor.arrTo([255, 255, 0, 1]);
        b.bodyStrokeColor = MyColor.arrTo([255, 100, 20, 1]);
        b.bodyStrokeWidth = 6;
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

    //穿甲子弹 小号
    static T_S() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        b.throughable = true;
        b.throughCutNum = 0.1;

        b.r = 1.6;
        b.damage = 4;
        b.bodyColor = MyColor.arrTo([0, 255, 255, 1]);
        return b;
    }

    //穿甲子弹 中号
    static T_M() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        b.throughable = true;
        b.throughCutNum = 0.1;

        b.damage = 10;
        b.bodyColor = MyColor.arrTo([0, 200, 255, 1]);
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
        b.bodyColor = MyColor.arrTo([0, 150, 255, 0.5]);
        return b;
    }

    static T_LL() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 6);
        b.throughable = true;
        b.throughCutNum = 1;
        b.damage = 50;
        b.bodyColor = MyColor.arrTo([0, 100, 255, 0.3]);
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

        b.bodyColor = MyColor.arrTo([0, 20, 255, 1]);
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
        return b;
    }

    // 小型分裂弹
    static SS_S() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 5);

        b.damage = 10;
        // 分裂子弹特性
        b.splitAble = true;
        b.splitNum = 5;  // 分裂后子弹的数量
        b.splitRandomV = 5;
        b.splitBully = BullyFinally.F_M;
        b.splitRangeRate = 100;  // 分裂后的子弹可以存在的攻击范围 px
        b.bodyColor = MyColor.arrTo([20, 1, 1, 1]);
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
        b.splitBully = BullyFinally.F_L; // 分裂后的小子弹是散弹
        b.splitRangeRate = 200;  // 分裂后的子弹可以存在的攻击范围 px
        b.bodyColor = MyColor.arrTo([20, 10, 1, 1]);
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
        b.splitBully = BullyFinally.F_L; // 分裂后的小子弹是散弹
        b.splitRangeRate = 280;  // 分裂后的子弹可以存在的攻击范围 px

        b.bodyColor = MyColor.arrTo([20, 100, 20, 1]);
        return b;
    }

    // 超级分裂弹
    static SS_LL() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 5);
        b.damage = 50;
        b.r = 8;
        // 爆炸炮弹的特性
        b.haveBomb = true;
        b.bombDamage = 120;  // 这个应该是爆炸中心点的伤害
        b.bombRange = 80;
        b.bombFunc = b.bombFire;  // 默认是火炮的爆炸方式
        // 分裂子弹特性
        b.splitAble = true;
        b.splitNum = 15;  // 分裂后子弹的数量
        b.splitRandomV = 10;
        b.splitBully = BullyFinally.SS_M; // 分裂后的小子弹是散弹
        b.splitRangeRate = 100;  // 分裂后的子弹可以存在的攻击范围 px

        b.bodyColor = MyColor.arrTo([20, 100, 100, 1]);
        return b;
    }

    /**
     * 荒野乱斗中仙人掌斯派克的父亲爆裂子弹
     * @returns {Bully}
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

    // 火焰粒子弹
    static Fire_M() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 10);
        b.damage = 0;  // 没有直接伤害
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
        b.damage = 0.1;
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
        b.damage = 1;
        b.throughable = true;
        b.throughCutNum = 2;
        b.accelerationV = -0.005;

        // 子弹颜色
        b.bodyColor = MyColor.arrTo([50, 255, 20, 0.1]);
        b.bodyStrokeWidth = 0;
        b.bodyStrokeColor = MyColor.arrTo([255, 255, 0, 0]);
        b.dr = 1;  // 扩散
        b.laserDestoryAble = false;
        return b;
    }

    static P_M() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 10);
        b.r = 10;
        b.damage = 2;
        b.throughable = true;
        b.throughCutNum = 2;
        b.accelerationV = -0.005;

        // 子弹颜色
        b.bodyColor = MyColor.arrTo([20, 100, 20, 0.1]);
        b.bodyStrokeWidth = 0;
        b.bodyStrokeColor = MyColor.arrTo([255, 255, 0, 0]);
        b.dr = 2;  // 扩散
        b.laserDestoryAble = false;
        return b;
    }

    /**
     * 跟踪导弹炮
     * @returns {Bully}
     * @constructor
     */
    static H_Target_L() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        b.r = 6;
        b.damage = 410;

        b.haveBomb = true;
        b.bombDamage = 300;
        b.bombRange = 100;
        b.bombFunc = b.bombFire;

        b.targetAble = true;

        b.bodyColor = MyColor.arrTo([168, 182, 172, 1]);
        b.bodyStrokeColor = MyColor.arrTo([255, 198, 109, 1]);
        b.bodyStrokeWidth = 4;
        return b;
    }

    /**
     * 佩佩子弹
     * @constructor
     */
    static PiperBully() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        b.damage = 100;
        b.dDamage = 10;
        b.r = 10;
        b.dr = 0.3;
        b.bodyColor = MyColor.arrTo([235, 110, 142, 1]);
        b.bodyStrokeColor = MyColor.arrTo([60, 222, 243, 1]);
        b.bodyStrokeWidth = 3;
        return b;
    }
}

