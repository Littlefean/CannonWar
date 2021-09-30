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
        b.accelerationV = 0.05

        b.bodyColor = [255, 0, 0, 1];
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
        b.bombRange = 200;
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
}
