/**
 *
 * by littlefean
 */
class MonsterFinally {
    static Normal(world) {
        let m = Monster.randInit(world);
        m.speedNumb = 0.3;
        m.comment = "普通人";
        return m;
    }

    static Runner(world) {
        let m = Monster.randInit(world);
        m.speedNumb = 1;
        m.comment = "跑人";
        return m;
    }

    static TestMonster(world) {
        let m = Monster.randInit(world);
        m.name = "测试";
        m.hpInit(1);
        m.colishDamage = 0;
        m.addPrice = 10;
        m.comment = "这个是程序测试用的";
        return m;
    }

    static Ox1(world) {
        let m = Monster.randInit(world);
        m.name = "冲锋1级";
        m.bodyColor = MyColor.arrTo([80, 20, 20, 1]);
        m.speedNumb = 0.01;
        m.accelerationV = 0.01;
        m.maxSpeedN = 5;
        m.imgIndex = 1;
        m.comment = "速度会越来越快";
        return m;
    }

    static Ox2(world) {
        let m = Monster.randInit(world);
        m.name = "冲锋2级";
        m.bodyColor = MyColor.arrTo([120, 20, 20, 1]);
        m.speedNumb = 0.01;
        m.accelerationV = 0.05;
        m.maxSpeedN = 7;
        m.imgIndex = 1;
        m.comment = "加速度，速度越来越快";
        return m;
    }

    static Ox3(world) {
        let m = Monster.randInit(world);
        m.name = "冲锋3级";
        m.bodyColor = MyColor.arrTo([150, 20, 20, 1]);
        m.speedNumb = 0.01;
        m.accelerationV = 0.1;
        m.maxSpeedN = 10;
        m.imgIndex = 1;
        m.comment = "比普通冲锋加速的更快";
        return m;
    }

    static Bomber1(world) {
        let m = Monster.randInit(world);
        m.name = "炸弹1级";
        m.bodyColor = MyColor.arrTo([60, 60, 20, 1]);
        m.speedNumb = 0.5;
        m.bombSelfAble = true;
        m.bombSelfRange = 80;
        m.bombSelfDamage = 200;

        m.imgIndex = 2;
        m.comment = "死了会爆炸";
        return m;
    }

    static Bomber2(world) {
        let m = Monster.randInit(world);
        m.name = "炸弹2级";
        m.bodyColor = MyColor.arrTo([90, 90, 30, 1]);
        m.addPrice += 10;
        m.speedNumb = 0.55;
        m.bombSelfAble = true;
        m.bombSelfRange = 120;
        m.bombSelfDamage = 800;

        m.imgIndex = 2;
        m.comment = "爆炸伤害更大";
        return m;
    }

    static Bomber3(world) {
        let m = Monster.randInit(world);
        m.name = "炸弹3级";
        m.bodyColor = MyColor.arrTo([150, 150, 50, 1]);
        m.addPrice += 10;
        m.speedNumb = 0.6;
        m.bombSelfAble = true;
        m.bombSelfRange = 200;
        m.bombSelfDamage = 5000;

        m.imgIndex = 2;
        m.comment = "爆炸伤害更更大";
        return m;
    }

    static Thrower1(world) {
        let m = Monster.randInit(world);
        m.name = "压路机1级";
        m.throwAble = true;

        m.bodyColor = MyColor.arrTo([50, 150, 150, 0.5]);
        m.bodyStrokeColor = MyColor.arrTo([5, 15, 15, 1]);
        m.addPrice += 10;
        m.speedNumb = 0.4;
        m.r = 30;

        m.colishDamage /= 1;  // 因为是碾压，所以是连贯伤害
        m.imgIndex = 3;
        m.comment = "直接碾压你的建筑，伤害很大";
        return m;
    }

    static BlackHole(world) {
        let m = Monster.randInit(world);
        m.name = "黑洞";
        m.throwAble = true;
        m.addPrice += 10;
        m.speedNumb = 0.2;
        m.bodyColor = MyColor.arrTo([0, 0, 0, 1]);
        m.bodyStrokeColor = MyColor.arrTo([0, 0, 0, 1]);
        m.colishDamage = 10;

        m.haveGArea = true;
        m.gAreaR = 160;  // 引力场半径
        m.gAreaNum = 2;  // 引力场强度

        m.r = 30;
        m.imgIndex = 4;
        m.comment = "会把你的建筑吸走";
        return m;
    }

    static Bulldozer(world) {
        let m = Monster.randInit(world);
        m.name = "排斥人";
        m.throwAble = true;
        m.addPrice += 10;
        m.speedNumb = 0.3;
        m.bodyColor = MyColor.arrTo([50, 30, 50, 1]);
        m.bodyStrokeColor = MyColor.arrTo([0, 0, 0, 1]);
        m.colishDamage = 10;

        m.haveGArea = true;
        m.gAreaR = 50;  // 引力场半径
        m.gAreaNum = -2;  // 引力场强度

        m.r = 25;
        m.imgIndex = 5;
        m.comment = "会把你的建筑推开，和黑洞相反";
        return m;
    }

    static Glans(world) {
        let m = Monster.randInit(world);
        m.name = "激光防御";
        m.addPrice += 10;
        m.speedNumb = 0.3;
        m.bodyColor = MyColor.arrTo([152, 118, 170, 1]);
        m.r = 30;

        m.haveLaserDefence = true;
        m.laserFreeze = 1;  // 多少个时间刻执行一次激光防御
        m.laserdefendPreNum = 10;  // 一次激光防御可以打几个子弹
        m.maxLaserNum = 1000;  // 激光防御最多子弹量
        m.laserDefendNum = 1000;
        m.laserRecoverFreeze = 100;  // 多少个时间刻度恢复一次子弹数量
        m.laserRecoverNum = 20;  // 一次恢复多少个激光防御数量
        m.laserRadius = 100;  // 激光防御范围的半径

        m.imgIndex = 6;
        m.comment = "有激光防御能力，就是能摧毁射过来的子弹，但是摧毁子弹需要激光能量，激光能量是有限的，弱点是非子弹类伤害";
        return m;
    }

    static Medic(world) {
        let m = Monster.randInit(world);
        m.name = "加血辅助";
        m.addPrice += 10;
        m.speedNumb = 0.5;
        m.bodyColor = MyColor.arrTo([105, 117, 60, 1]);
        m.r = 30;
        m.haveGain = true;
        m.gainDetails = {
            gainRadius: 100,  // 给队友增益的范围
            gainFrequency: 10,  // 执行增益的频率
            gainR: 0,
            gainCollideDamageAddNum: 0,  // 一次增加伤害
            gainHpAddedNum: 10, // 一次加血量
            gainSpeedNAddNum: 0, // 一次增加速度量
            gainHpAddedRate: 0.0, // 一次加血量百分比
            gainMaxHpAddedNum: 0, // 一次加血量上限
        };

        m.imgIndex = 7;
        m.comment = "不停的给队友恢复固定的血量";
        return m;
    }

    static Medic_S(world) {
        let m = Monster.randInit(world);
        m.name = "加比例血辅助";
        m.addPrice += 10;
        m.speedNumb = 0.5;
        m.bodyColor = MyColor.arrTo([92, 117, 79, 1]);
        m.r = 30;
        m.haveGain = true;
        m.gainDetails = {
            gainRadius: 200,  // 给队友增益的范围
            gainFrequency: 20,  // 执行增益的频率
            gainR: 0,
            gainCollideDamageAddNum: 0,  // 一次增加伤害
            gainHpAddedNum: 0, // 一次加血量
            gainSpeedNAddNum: 0, // 一次增加速度量
            gainHpAddedRate: 0.1, // 一次加血量百分比
            gainMaxHpAddedNum: 0, // 一次加血量上限
        };

        m.imgIndex = 8;
        m.comment = "不停的给队友恢复他们自身最大血量一定比例的血量";
        return m;
    }

    static Medic_M(world) {
        let m = Monster.randInit(world);
        m.name = "加上限血辅助";
        m.addPrice += 10;
        m.speedNumb = 0.3;
        m.bodyColor = MyColor.arrTo([120, 188, 85, 1]);
        m.r = 40;
        m.haveGain = true;
        m.gainDetails = {
            gainRadius: 200,  // 给队友增益的范围
            gainFrequency: 30,  // 执行增益的频率
            gainR: 2,
            gainCollideDamageAddNum: 0,  // 一次增加伤害
            gainHpAddedNum: 0, // 一次加血量
            gainSpeedNAddNum: 0, // 一次增加速度量
            gainHpAddedRate: 0.0, // 一次加血量百分比
            gainMaxHpAddedNum: 100, // 一次加血量上限
        };

        m.imgIndex = 9;
        m.comment = "不停的给身边的队友增加血量上限";
        return m;
    }

    static SpeedAdder(world) {
        let m = Monster.randInit(world);
        m.name = "加速辅助";
        m.addPrice += 10;
        m.speedNumb = 0.35;
        m.bodyColor = MyColor.arrTo([68, 230, 249, 1]);
        m.haveGain = true;

        m.gainDetails = {
            gainRadius: 100,  // 给队友增益的范围
            gainFrequency: 5,  // 执行增益的频率
            gainR: 0,
            gainCollideDamageAddNum: 0,  // 一次增加伤害
            gainHpAddedNum: 0, // 一次加血量
            gainSpeedNAddNum: 0.02, // 一次增加速度量
            gainHpAddedRate: 0.0, // 一次加血量百分比
            gainMaxHpAddedNum: 0, // 一次加血量上限
        };

        m.imgIndex = 10;
        m.comment = "会给身边的队友增加速度，但是不能给自己增加速度，但是两个它们在一起的时候就有意思了";
        return m;
    }

    static AttackAdder(world) {
        let m = Monster.randInit(world);
        m.name = "加攻击辅助";
        m.addPrice += 10;
        m.speedNumb = 0.55;
        m.bodyColor = MyColor.arrTo([255, 198, 109, 1]);
        m.haveGain = true;
        m.gainDetails = {
            gainRadius: 100,  // 给队友增益的范围
            gainFrequency: 1,  // 执行增益的频率
            gainR: 0.1,
            gainCollideDamageAddNum: 10,  // 一次增加伤害
            gainHpAddedNum: 0, // 一次加血量
            gainSpeedNAddNum: 0.0, // 一次增加速度量
            gainHpAddedRate: 0.0, // 一次加血量百分比
            gainMaxHpAddedNum: 0, // 一次加血量上限
        };

        m.imgIndex = 11;
        m.comment = "不停的给身边的队友增加攻击力，增加的攻击力是撞击伤害。所以你要小心一点。";
        return m;
    }

    static BulletWearer(world) {
        let m = Monster.randInit(world);
        m.name = "子弹削子";
        m.addPrice += 5;
        m.speedNumb = 0.35;
        m.bodyColor = MyColor.arrTo([62, 134, 160, 1]);

        m.haveBullyChangeArea = true;
        m.bullyChangeDetails.r = 100;
        m.bullyChangeDetails.f = 5;
        m.bullyChangeDetails.bullyDR = -1;

        m.imgIndex = 12;
        m.comment = "自身会有一个场，这个场里的子弹会不停的减少子弹半径";
        return m;
    }

    static BulletRepellent(world) {
        let m = Monster.randInit(world);
        m.name = "子弹排斥";
        m.addPrice += 5;
        m.speedNumb = 0.25;
        m.bodyColor = MyColor.arrTo([186, 166, 128, 1]);

        m.haveBullyChangeArea = true;
        m.bullyChangeDetails.r = 150;
        m.bullyChangeDetails.f = 1;
        m.bullyChangeDetails.bullyAN = 1;
        m.imgIndex = 13;
        m.comment = "自身会有一个排斥子弹的场，能够把场内的飞过来的子弹向外排斥，改变子弹的轨迹，只是对子弹有效果，对激光和其他武器没有效果";
        return m;
    }

    static DamageReducers(world) {
        let m = Monster.randInit(world);
        m.name = "子弹削弱";
        m.addPrice += 5;
        m.speedNumb = 0.35;
        m.bodyColor = MyColor.arrTo([190, 145, 23, 1]);

        m.haveBullyChangeArea = true;
        m.bullyChangeDetails.r = 150;
        m.bullyChangeDetails.f = 1;
        m.bullyChangeDetails.bullyDD = -1;
        m.imgIndex = 14;
        m.comment = "能够对自身一定范围内的区域内的所有子弹减少伤害，伤害小的子弹比如小枪的子弹可能就没有伤害了。";
        return m;
    }

    static Shouter(world) {
        let m = MonsterShooter.randInit(world);
        m.name = "射击者";
        m.addPrice += 5;
        m.speedNumb = 0.35;
        m.bodyColor = MyColor.arrTo([190, 145, 23, 1]);
        m.r = 20;
        m.imgIndex = 15;
        m.comment = "会对你的建筑进行远程射击，造成伤害";
        return m;
    }

    static Shouter_Stone(world) {
        let m = MonsterShooter.randInit(world);
        m.name = "石头蛋子射击者";
        m.addPrice += 5;
        m.speedNumb = 0.30;
        m.bodyColor = MyColor.arrTo([190, 145, 23, 1]);
        m.r = 20;
        m.imgIndex = 15;
        m.getmMainBullyFunc = BullyFinally.CannonStone_L;
        m.clock = 50;
        m.rangeR = 170;
        m.comment = "会对你的建筑进行远程射击伤害巨大的石头蛋子";
        return m;
    }

    static Shouter_Bomber(world) {
        let m = MonsterShooter.randInit(world);
        m.name = "火炮射击者";
        m.addPrice += 5;
        m.speedNumb = 0.30;
        m.bodyColor = MyColor.arrTo([190, 145, 23, 1]);
        m.r = 20;
        m.imgIndex = 15;
        m.getmMainBullyFunc = BullyFinally.H_S;
        m.clock = 50;
        m.rangeR = 170;
        m.comment = "会对你的建筑进行远程射击伤害巨大的火炮";
        return m;
    }

    static Shouter_Spike(world) {
        let m = MonsterShooter.randInit(world);
        m.name = "绿球射击者";
        m.addPrice += 5;
        m.speedNumb = 0.30;
        m.bodyColor = MyColor.arrTo([190, 145, 23, 1]);
        m.r = 20;
        m.imgIndex = 15;
        m.getmMainBullyFunc = BullyFinally.SpikeBully;
        m.clock = 8;
        m.rangeR = 100;
        m.comment = "会对你的建筑进行远程射击仙人球";
        return m;
    }

    static Slime_L(world) {
        let m = Monster.randInit(world);
        m.name = "大史莱姆";
        m.addPrice += 10;
        m.speedNumb = 0.4;
        m.bodyColor = MyColor.arrTo([171, 236, 97, 0.8]);
        m.bodyStrokeColor = MyColor.arrTo([47, 113, 56, 1]);
        m.bodyStrokeWidth = 12;
        m.r = 50;

        m.deadSummonAble = true;
        m.summonMonsterFunc = MonsterFinally.Slime_M;
        m.imgIndex = 16;
        m.comment = "大型史莱姆，死亡之后会分裂成四个中型史莱姆，每个中型史莱姆死亡之后又会分裂成四个小型史莱姆";
        return m;
    }

    static Slime_M(world) {
        let m = Monster.randInit(world);
        m.name = "中史莱姆";
        m.addPrice += 10;
        m.speedNumb = 0.6;
        m.bodyColor = MyColor.arrTo([171, 236, 97, 0.8]);
        m.bodyStrokeColor = MyColor.arrTo([47, 113, 56, 1]);
        m.bodyStrokeWidth = 5;
        m.r = 30;

        m.deadSummonAble = true;
        m.summonMonsterFunc = MonsterFinally.Slime_S;

        m.imgIndex = 16;
        m.comment = "中型史莱姆，由大型史莱姆分裂得到";
        return m;
    }

    static Slime_S(world) {
        let m = Monster.randInit(world);
        m.name = "小史莱姆";
        m.addPrice += 10;
        m.speedNumb = 0.8;
        m.bodyColor = MyColor.arrTo([171, 236, 97, 0.8]);
        m.bodyStrokeColor = MyColor.arrTo([47, 113, 56, 1]);
        m.bodyStrokeWidth = 3;
        m.r = 10;
        m.imgIndex = 16;
        m.comment = "小型史莱姆，跑的比较快";
        return m;
    }

    static witch_N(world) {
        let m = Monster.randInit(world);
        m.name = "召唤师";
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
        m.imgIndex = 17;
        m.comment = "召唤师会不停的召唤小怪物";
        return m;
    }

    static bat(world) {
        let m = Monster.randInit(world);
        m.name = "小怪物";
        m.addPrice += 10;
        m.speedNumb = 3;
        m.bodyColor = MyColor.arrTo([152, 118, 170, 0.8]);
        m.bodyStrokeColor = MyColor.arrTo([152, 118, 170, 1]);
        m.bodyStrokeWidth = 5;

        m.accelerationV = 0.01;
        m.maxSpeedN = 5;
        m.r = 5;
        m.imgIndex = 18;
        m.comment = "快速飞到你的大本，对你的大本造成撞击伤害";
        return m;
    }

    static Spoke(world) {
        let m = Monster.randInit(world);
        m.name = "摇摆人";
        m.speedNumb = 3;
        m.changeSpeedFunc = m.selfSwingMove;
        m.imgIndex = 19;
        m.comment = "一种移动路径来回摇摆的普通人";
        return m;
    }

    static SpokeMan(world) {
        let m = Monster.randInit(world);
        m.name = "突进人";
        m.speedNumb = 3;
        m.changeSpeedFunc = m.selfSuddenlyMove;
        m.imgIndex = 20;
        m.comment = "一种路径来回前后突进的普通怪物";
        return m;
    }

    static Exciting(world) {
        let m = Monster.randInit(world);
        m.name = "激动人";
        m.speedNumb = 3;
        m.changeSpeedFunc = m.selfExcitingMove;
        m.imgIndex = 21;
        m.comment = "一种移动路径前后更加剧烈的快速的怪物，看起来很激动";
        return m;
    }

    static Visitor(world) {
        let m = Monster.randInit(world);
        m.name = "旋转人";
        m.speedNumb = 3;
        m.changeSpeedFunc = m.selfDoubleSwingMove;
        m.imgIndex = 22;
        m.comment = "移动路径会很怪，它会旋转的走向目标，绕很多圈才会进行撞击，像是来参观的";
        return m;
    }

    static Enderman(world) {
        let m = Monster.randInit(world);
        m.name = "小黑";
        m.speedNumb = 1;

        m.teleportingAble = true;
        m.imgIndex = 23;
        m.comment = "一旦受到子弹碰撞，就会瞬移，所以它免疫子弹撞击伤害（不能免疫爆炸等其他伤害），但是它可能会一不小心瞬移到你的建筑上，然后撞死了。";
        return m;
    }

    static Mts(world) {
        let m = MonsterMortis.randInit(world);
        m.name = "忍者";
        m.r = 35;
        m.speedNumb = 1;
        m.imgIndex = 24;
        m.addPrice = 50;
        m.comment = "像忍者一样，一旦发现了你的建筑，便会迅速对你的建筑进行收割，像忍者一样来回穿过你的建筑，对你的建筑造成伤害";
        return m;
    }

    static T800(world) {
        let m = MonsterTerminator.randInit(world);
        m.name = "恐怖机器人";
        m.imgIndex = 25;
        m.addPrice = 600;
        m.comment = "一种由金属打造而成的恐怖机器，威力小的子弹几乎对他没有伤害。具有很强的近战能力。";
        return m;
    }
}


const MONSTERS_FUNC_ARR_ALL = [
    MonsterFinally.Ox1,
    MonsterFinally.Ox2,
    MonsterFinally.Ox3,
    MonsterFinally.Runner,
    MonsterFinally.Bomber1,
    MonsterFinally.Bomber2,
    MonsterFinally.Bomber3,
    MonsterFinally.Thrower1,
    MonsterFinally.BlackHole,
    MonsterFinally.Bulldozer,
    MonsterFinally.Glans,
    MonsterFinally.Medic,
    MonsterFinally.Medic_M,
    MonsterFinally.Medic_S,
    MonsterFinally.AttackAdder,
    MonsterFinally.SpeedAdder,
    MonsterFinally.BulletWearer,
    MonsterFinally.BulletRepellent,
    MonsterFinally.DamageReducers,
    MonsterFinally.Shouter,
    MonsterFinally.Shouter_Stone,
    MonsterFinally.Shouter_Bomber,
    MonsterFinally.Shouter_Spike,

    MonsterFinally.Slime_L,
    MonsterFinally.witch_N,
    MonsterFinally.bat,
    MonsterFinally.Spoke,
    MonsterFinally.SpokeMan,
    MonsterFinally.Exciting,
    MonsterFinally.Visitor,
    MonsterFinally.Enderman,
    MonsterFinally.Mts,
    MonsterFinally.T800,

    MonsterFinally.Normal,
    MonsterFinally.TestMonster,
];

// 打算画一个1000 x 1000 的图片，其中能容纳 100个100x100的方块，这些网格中放置怪物贴图
const MONSTERS_IMG = new Image();
MONSTERS_IMG.src = "monster/imgs/monsters.png";
const MONSTER_IMG_PRE_WIDTH = 100;
const MONSTER_IMG_PRE_HEIGHT = 100;

