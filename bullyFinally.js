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
        b.bodyColor = [20, 20, 20, 1];
        b.bodyStrokeWidth = 0;
        b.bodyStrokeColor = [0, 0, 0, 0];
        return b;
    }

    static F_M() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        b.r = 0.8;
        b.damage = 3;

        b.bodyColor = [10, 10, 10, 1];
        b.bodyStrokeWidth = 0;
        b.bodyStrokeColor = [10, 10, 10, 0];
        return b;
    }

    static F_L() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        b.r = 1;
        b.damage = 10;

        b.bodyColor = [0, 0, 0, 1];
        b.bodyStrokeWidth = 0;
        b.bodyStrokeColor = [0, 0, 0, 0];
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

        b.bodyColor = [255, 20, 20, 1];
        b.bodyStrokeColor = [255, 100, 20, 1];
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

        b.bodyColor = [255, 30, 0, 1];
        b.bodyStrokeColor = [255, 100, 20, 1];
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

        b.bodyColor = [255, 255, 0, 1];
        b.bodyStrokeColor = [255, 100, 20, 1];
        b.bodyStrokeWidth = 6;
        return b;
    }

    // 散弹子弹
    static S() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        b.r = 1.6;
        b.damage = 40;
        b.bodyColor = [0, 0, 255, 1];
        return b;
    }

    //穿甲子弹 小号
    static T_S() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        b.throughable = true;
        b.throughCutNum = 0.1;

        b.r = 1.6;
        b.damage = 4;
        b.bodyColor = [0, 255, 255, 1];
        return b;
    }

    //穿甲子弹 中号
    static T_M() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 2.5);
        b.throughable = true;
        b.throughCutNum = 0.1;

        b.damage = 10;
        b.bodyColor = [0, 200, 255, 1];
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
        b.bodyColor = [0, 150, 255, 0.5];
        return b;
    }
    static T_LL() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 6);
        b.throughable = true;
        b.throughCutNum = 1;
        b.damage = 50;
        b.bodyColor = [0, 100, 255, 0.3];
        return b;
    }

    // 冰冻炸弹
    static Frozen_S() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 1);
        b.damage = 2;

        b.haveBomb = true;
        b.bombDamage = 1;
        b.bombRange = 50;
        b.bombFunc = b.bombFreeze;
        b.freezeCutDown = 0.98

        b.bodyColor = [0, 100, 255, 1];
        b.bodyStrokeColor = [100, 100, 255, 1];
        b.bodyStrokeWidth = 0.5;
        return b;
    }

    static Frozen_M() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 1);
        b.damage = 5;
        b.r = 2;

        b.haveBomb = true;
        b.bombDamage = 2;
        b.bombRange = 80;
        b.bombFunc = b.bombFreeze;
        b.freezeCutDown = 0.9;

        b.bodyColor = [0, 50, 255, 1];
        b.bodyStrokeColor = [10, 100, 255, 1];
        b.bodyStrokeWidth = 0.5;
        return b;
    }
    static Frozen_L() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 1);
        b.damage = 10;
        b.r = 5;

        b.haveBomb = true;
        b.bombDamage = 5;
        b.bombRange = 100;
        b.bombFunc = b.bombFreeze;
        b.freezeCutDown = 0.7;

        b.bodyColor = [0, 20, 255, 1];
        b.bodyStrokeColor = [10, 50, 255, 1];
        b.bodyStrokeWidth = 0.5;
        return b;
    }

    // 击退炮弹
    static R_M() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 5);

        b.damage = 20;
        b.bodyColor = [204, 120, 50, 1];
        b.repel = 0.1;
        return b;
    }

    static SSM() {
        let b = new Bully(Vector.zero(), Vector.zero(), null, 5, 5);

        b.damage = 10;
        // 分裂子弹特性
        b.splitAble = true;
        b.splitNum = 5;  // 分裂后子弹的数量
        b.splitRandomV = 5;
        b.splitBully = BullyFinally.Normal;
        b.splitRangeRate = 100;  // 分裂后的子弹可以存在的攻击范围 px
        return b;
    }
}
