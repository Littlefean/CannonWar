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

    static TestMonster(world) {
        let m = Monster.randInit(world);
        m.name = "鸡肋的测试怪物";
        m.hpInit(1);
        m.colishDamage = 0;
        m.addPrice = 10;
        m.comment = "这个是程序测试用的";
        return m;
    }

    static Ox1(world) {
        let m = Monster.randInit(world);
        m.name = "铁牛1级";
        m.bodyColor = MyColor.arrTo([80, 20, 20, 1]);
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
        m.bodyColor = MyColor.arrTo([120, 20, 20, 1]);
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
        m.bodyColor = MyColor.arrTo([150, 20, 20, 1]);
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
        m.bodyColor = MyColor.arrTo([60, 60, 20, 1]);
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
        m.bodyColor = MyColor.arrTo([90, 90, 30, 1]);
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
        m.bodyColor = MyColor.arrTo([150, 150, 50, 1]);
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

        m.bodyColor = MyColor.arrTo([50, 150, 150, 0.5]);
        m.bodyStrokeColor = MyColor.arrTo([5, 15, 15, 1]);
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
        m.bodyColor = MyColor.arrTo([0, 0, 0, 1]);
        m.bodyStrokeColor = MyColor.arrTo([0, 0, 0, 1]);
        m.colishDamage = 1000000000;

        m.haveGArea = true;
        m.gAreaR = 200;  // 引力场半径
        m.gAreaNum = 2;  // 引力场强度

        m.r = 50;
        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static Bulldozer(world) {
        let m = Monster.randInit(world);
        m.name = "推土机1级";
        m.throwAble = true;
        m.addPrice += 1000;
        m.speedNumb = 0.2;
        m.bodyColor = MyColor.arrTo([50, 30, 50, 1]);
        m.bodyStrokeColor = MyColor.arrTo([0, 0, 0, 1]);
        m.colishDamage = 1000000000;

        m.haveGArea = true;
        m.gAreaR = 50;  // 引力场半径
        m.gAreaNum = -2;  // 引力场强度

        m.r = 25;
        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static Glans(world) {
        let m = Monster.randInit(world);
        m.name = "鳖蛋子";
        m.addPrice += 1000;
        m.speedNumb = 0.2;
        m.bodyColor = MyColor.arrTo([152, 118, 170, 1]);
        m.r = 25;

        m.haveLaserDefence = true;
        m.laserFreeze = 1;  // 多少个时间刻执行一次激光防御
        m.laserdefendPreNum = 10;  // 一次激光防御可以打几个子弹
        m.maxLaserNum = 1000;  // 激光防御最多子弹量
        m.laserDefendNum = 1000;
        m.laserRecoverFreeze = 100;  // 多少个时间刻度恢复一次子弹数量
        m.laserRecoverNum = 20;  // 一次恢复多少个激光防御数量
        m.laserRadius = 100;  // 激光防御范围的半径

        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static Medic(world) {
        let m = Monster.randInit(world);
        m.name = "丢包医疗兵";
        m.addPrice += 1000;
        m.speedNumb = 0.2;
        m.bodyColor = MyColor.arrTo([105, 117, 60, 1]);
        m.r = 20;
        m.haveGain = true;
        m.gainDetails = {
            gainRadius: 100,  // 给队友增益的范围
            gainFrequency: 10,  // 执行增益的频率

            gainCollideDamageAddNum: 0,  // 一次增加伤害
            gainHpAddedNum: 10, // 一次加血量
            gainSpeedNAddNum: 0, // 一次增加速度量
            gainHpAddedRate: 0.0, // 一次加血量百分比
            gainMaxHpAddedNum: 0, // 一次加血量上限
        };

        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static Medic_S(world) {
        let m = Monster.randInit(world);
        m.name = "搞比例医疗兵";
        m.addPrice += 1000;
        m.speedNumb = 0.2;
        m.bodyColor = MyColor.arrTo([92, 117, 79, 1]);
        m.r = 30;
        m.haveGain = true;
        m.gainDetails = {
            gainRadius: 200,  // 给队友增益的范围
            gainFrequency: 20,  // 执行增益的频率

            gainCollideDamageAddNum: 0,  // 一次增加伤害
            gainHpAddedNum: 0, // 一次加血量
            gainSpeedNAddNum: 0, // 一次增加速度量
            gainHpAddedRate: 0.1, // 一次加血量百分比
            gainMaxHpAddedNum: 0, // 一次加血量上限
        };

        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static Medic_M(world) {
        let m = Monster.randInit(world);
        m.name = "上限医疗兵";
        m.addPrice += 1000;
        m.speedNumb = 0.2;
        m.bodyColor = MyColor.arrTo([120, 188, 85, 1]);
        m.r = 40;
        m.haveGain = true;
        m.gainDetails = {
            gainRadius: 200,  // 给队友增益的范围
            gainFrequency: 30,  // 执行增益的频率

            gainCollideDamageAddNum: 0,  // 一次增加伤害
            gainHpAddedNum: 0, // 一次加血量
            gainSpeedNAddNum: 0, // 一次增加速度量
            gainHpAddedRate: 0.0, // 一次加血量百分比
            gainMaxHpAddedNum: 100, // 一次加血量上限
        };

        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static SpeedAdder(world) {
        let m = Monster.randInit(world);
        m.name = "速度增加";
        m.addPrice += 1000;
        m.speedNumb = 0.15;
        m.bodyColor = MyColor.arrTo([68, 230, 249, 1]);
        m.r = 10;
        m.haveGain = true;
        m.gainDetails = {
            gainRadius: 200,  // 给队友增益的范围
            gainFrequency: 5,  // 执行增益的频率

            gainCollideDamageAddNum: 0,  // 一次增加伤害
            gainHpAddedNum: 0, // 一次加血量
            gainSpeedNAddNum: 0.1, // 一次增加速度量
            gainHpAddedRate: 0.0, // 一次加血量百分比
            gainMaxHpAddedNum: 0, // 一次加血量上限
        };

        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static AttackAdder(world) {
        let m = Monster.randInit(world);
        m.name = "攻击增加";
        m.addPrice += 1000;
        m.speedNumb = 0.15;
        m.bodyColor = MyColor.arrTo([255, 198, 109, 1]);
        m.r = 10;
        m.haveGain = true;
        m.gainDetails = {
            gainRadius: 100,  // 给队友增益的范围
            gainFrequency: 1,  // 执行增益的频率

            gainCollideDamageAddNum: 10,  // 一次增加伤害
            gainHpAddedNum: 0, // 一次加血量
            gainSpeedNAddNum: 0.0, // 一次增加速度量
            gainHpAddedRate: 0.0, // 一次加血量百分比
            gainMaxHpAddedNum: 0, // 一次加血量上限
        };

        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static BulletWearer(world) {
        let m = Monster.randInit(world);
        m.name = "子弹削子";
        m.addPrice += 1000;
        m.speedNumb = 0.15;
        m.bodyColor = MyColor.arrTo([62, 134, 160, 1]);
        m.r = 10;

        m.haveBullyChangeArea = true;
        m.bullyChangeDetails.r = 100;
        m.bullyChangeDetails.f = 5;
        m.bullyChangeDetails.bullyDR = -1;

        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static BulletRepellent(world) {
        let m = Monster.randInit(world);
        m.name = "子弹排斥者";
        m.addPrice += 1000;
        m.speedNumb = 0.15;
        m.bodyColor = MyColor.arrTo([186, 166, 128, 1]);
        m.r = 20;

        m.haveBullyChangeArea = true;
        m.bullyChangeDetails.r = 150;
        m.bullyChangeDetails.f = 1;
        // m.bullyChangeDetails.bullyDR = -1;
        m.bullyChangeDetails.bullyAN = 1;

        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static DamageReducers(world) {
        let m = Monster.randInit(world);
        m.name = "子弹减伤者";
        m.addPrice += 1000;
        m.speedNumb = 0.15;
        m.bodyColor = MyColor.arrTo([190, 145, 23, 1]);
        m.r = 20;

        m.haveBullyChangeArea = true;
        m.bullyChangeDetails.r = 150;
        m.bullyChangeDetails.f = 1;
        m.bullyChangeDetails.bullyDD = -1;
        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static Shouter(world) {
        let m = MonsterShooter.randInit(world);
        m.name = "射击者";
        m.addPrice += 1000;
        m.speedNumb = 0.15;
        m.bodyColor = MyColor.arrTo([190, 145, 23, 1]);
        m.r = 20;
        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static Slime_L(world) {
        let m = Monster.randInit(world);
        m.name = "Slime_L";
        m.addPrice += 10;
        m.speedNumb = 0.4;
        m.bodyColor = MyColor.arrTo([171, 236, 97, 0.8]);
        m.bodyStrokeColor = MyColor.arrTo([47, 113, 56, 1]);
        m.bodyStrokeWidth = 12;
        m.r = 50;

        m.deadSummonAble = true;
        m.summonMonsterFunc = MonsterFinally.Slime_M;

        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static Slime_M(world) {
        let m = Monster.randInit(world);
        m.name = "Slime_M";
        m.addPrice += 10;
        m.speedNumb = 0.6;
        m.bodyColor = MyColor.arrTo([171, 236, 97, 0.8]);
        m.bodyStrokeColor = MyColor.arrTo([47, 113, 56, 1]);
        m.bodyStrokeWidth = 5;
        m.r = 30;

        m.deadSummonAble = true;
        m.summonMonsterFunc = MonsterFinally.Slime_S;

        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static Slime_S(world) {
        let m = Monster.randInit(world);
        m.name = "Slime_S";
        m.addPrice += 10;
        m.speedNumb = 0.8;
        m.bodyColor = MyColor.arrTo([171, 236, 97, 0.8]);
        m.bodyStrokeColor = MyColor.arrTo([47, 113, 56, 1]);
        m.bodyStrokeWidth = 3;
        m.r = 10;
        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static witch_N(world) {
        let m = Monster.randInit(world);
        m.name = "暗夜女巫";
        m.addPrice += 10;
        m.speedNumb = 0.3;
        m.bodyColor = MyColor.arrTo([152, 118, 170, 0.8]);
        m.bodyStrokeColor = MyColor.arrTo([152, 118, 170, 1]);
        m.bodyStrokeWidth = 5;

        m.r = 30;

        m.deadSummonAble = true;
        m.summonAble = true;
        m.summonCount = 4;
        m.summonDistance = Math.random() * 30 + 30;
        m.summonMonsterFunc = MonsterFinally.bat;

        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static bat(world) {
        let m = Monster.randInit(world);
        m.name = "蝙蝠";
        m.addPrice += 10;
        m.speedNumb = 3;
        m.bodyColor = MyColor.arrTo([152, 118, 170, 0.8]);
        m.bodyStrokeColor = MyColor.arrTo([152, 118, 170, 1]);
        m.bodyStrokeWidth = 5;

        m.accelerationV = 0.01;
        m.maxSpeedN = 5;
        m.r = 5;

        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static Spoke(world) {
        let m = Monster.randInit(world);
        m.name = "醉酒懒汉";
        m.speedNumb = 3;
        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.changeSpeedFunc = m.selfSwingMove;
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static SpokeMan(world) {
        let m = Monster.randInit(world);
        m.name = "溜冰";
        m.speedNumb = 3;
        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.changeSpeedFunc = m.selfSuddenlyMove;
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static Exciting(world) {
        let m = Monster.randInit(world);
        m.name = "激动";
        m.speedNumb = 3;
        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.changeSpeedFunc = m.selfExcitingMove;
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static Visitor(world) {
        let m = Monster.randInit(world);
        m.name = "参观者";
        m.speedNumb = 3;
        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.changeSpeedFunc = m.selfDoubleSwingMove;
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static Enderman(world) {
        let m = Monster.randInit(world);
        m.name = "小黑";
        m.speedNumb = 1;
        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));

        m.teleportingAble = true;
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static Mts(world) {
        let m = MonsterMortis.randInit(world);
        m.name = "麦缇斯";
        m.speedNumb = 1;

        m.hpInit(m.maxHp + Functions.timeMonsterHp(world.time));
        m.colishDamage += Functions.timeMonsterAtt(world.time);
        m.addPrice += Functions.timeAddPrise(world.time);
        return m;
    }

    static T800(world) {
        let m = MonsterTerminator.randInit(world);
        m.name = "T800";
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
    // MonsterFinally.BlackHole,
    // MonsterFinally.Bulldozer,
    // MonsterFinally.Glans,
    // MonsterFinally.Medic,
    // MonsterFinally.Medic_M,
    // MonsterFinally.Medic_S,
    // MonsterFinally.AttackAdder,
    // MonsterFinally.SpeedAdder,
    // MonsterFinally.BulletWearer,
    // MonsterFinally.BulletRepellent,
    // MonsterFinally.DamageReducers,
    // MonsterFinally.Shouter,
    //
    // MonsterFinally.Slime_L,
    // MonsterFinally.witch_N,
    // MonsterFinally.bat,
    // MonsterFinally.Spoke,
    // MonsterFinally.SpokeMan,
    // MonsterFinally.Exciting,
    // MonsterFinally.Visitor,
    // MonsterFinally.Enderman,
    // MonsterFinally.Mts,
    // MonsterFinally.T800,

    // MonsterFinally.Normal,
    MonsterFinally.TestMonster,
];
// 打算画一个1000 x 1000 的图片，其中能容纳 100个100x100的方块，这些网格中放置怪物贴图
const MONSTERS_IMG = new Image();
MONSTERS_IMG.src = "monster/imgs/monsters.png";
const MONSTER_IMG_PRE_WIDTH = 100;
const MONSTER_IMG_PRE_HEIGHT = 100;

