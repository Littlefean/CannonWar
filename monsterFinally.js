/**
 *
 * by littlefean
 */
class MonsterFinally {
    static Normal(world) {
        let m = Monster.randInit(world);
        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static Ox1(world) {
        let m = Monster.randInit(world);
        m.name = "铁牛1级";
        m.bodyColor = [80, 20, 20, 1];
        m.addPrice += 20;
        m.speedNumb = 0.01;
        m.accelerationV = 0.01;
        m.maxSpeedN = 5;

        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static Ox2(world) {
        let m = Monster.randInit(world);
        m.name = "铁牛2级";
        m.bodyColor = [120, 20, 20, 1];
        m.addPrice += 40;
        m.speedNumb = 0.01;
        m.accelerationV = 0.05;
        m.maxSpeedN = 7;

        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static Ox3(world) {
        let m = Monster.randInit(world);
        m.name = "铁牛3级";
        m.bodyColor = [150, 20, 20, 1];
        m.addPrice += 50;
        m.speedNumb = 0.01;
        m.accelerationV = 0.1;
        m.maxSpeedN = 10;

        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static Bomber1(world) {
        let m = Monster.randInit(world);
        m.name = "炸弹人1级";
        m.bodyColor = [60, 60, 20, 1];
        m.addPrice += 20;
        m.speedNumb = 0.5;
        m.r = 30;
        m.bombSelfAble = true;
        m.bombSelfRange = 80;
        m.bombSelfDamage = 200;

        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static Bomber2(world) {
        let m = Monster.randInit(world);
        m.name = "炸弹人2级";
        m.bodyColor = [90, 90, 30, 1];
        m.addPrice += 20;
        m.speedNumb = 0.5;
        m.r = 50;
        m.bombSelfAble = true;
        m.bombSelfRange = 120;
        m.bombSelfDamage = 800;

        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static Bomber3(world) {
        let m = Monster.randInit(world);
        m.name = "炸弹人3级";
        m.bodyColor = [150, 150, 50, 1];
        m.addPrice += 50;
        m.speedNumb = 0.5;
        m.r = 80;
        m.bombSelfAble = true;
        m.bombSelfRange = 200;
        m.bombSelfDamage = 5000;

        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static Thrower1(world) {
        let m = Monster.randInit(world);
        m.name = "碾压者1级";
        m.throwAble = true;

        m.bodyColor = [50, 150, 150, 0.5];
        m.bodyStrokeColor = [5, 15, 15, 1];
        m.addPrice += 150;
        m.speedNumb = 0.4;
        m.r = 30;

        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        m.colishDamage /= 1;  // 因为是碾压，所以是连贯伤害
        return m;
    }

    static BlackHole(world) {
        let m = Monster.randInit(world);
        m.name = "黑洞1级";
        m.throwAble = true;
        m.addPrice += 1000;
        m.speedNumb = 0.2;
        m.bodyColor = [0, 0, 0, 1];
        m.bodyStrokeColor = [0, 0, 0, 1];
        m.colishDamage = 1000000000;

        m.haveGArea = true;
        m.gAreaR = 200;  // 引力场半径
        m.gAreaNum = 2;  // 引力场强度

        m.r = 100;
        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }
}


const MONSTERS_FUNC_ARR = [
    // MonsterFinally.Ox1,
    // MonsterFinally.Ox2,
    // MonsterFinally.Ox3,
    // MonsterFinally.Bomber1,
    // MonsterFinally.Bomber2,
    // MonsterFinally.Bomber3,
    // MonsterFinally.Thrower1,
    MonsterFinally.BlackHole,
    MonsterFinally.Normal,
];
