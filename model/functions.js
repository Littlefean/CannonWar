/**
 * 一些函数库
 * by littlefean
 */
class Functions {
    /**
     * 怪物血量增加量与世界时间刻之间的关系函数
     * @param t {Number}
     */
    static timeMonsterHp(t) {
        return t / 3;
    }

    /**
     *
     * @param t {Number}
     */
    static timeMonsterAtt(t) {
        return t / 5;
    }

    /**
     * 一次性出怪量和时间之间的关系
     * @param t {Number}
     */
    static timeMonsterAddedNum(t) {
        let res = Math.floor(Math.pow(t / 20, 0.2));
        return res < 0 ? 1 : res;
    }

    /**
     * 第n波怪物的总量
     * @param level
     */
    static levelMonsterFlowNum(level) {
        let res = Math.floor(Math.pow(level / 2, 1.1)) + 2;
        res += Math.log(level + 1) * 5;
        res = Math.floor(res);
        return res <= 0 ? 1 : res;
    }

    static levelMonsterFlowNumHard(level) {
        let res = Math.floor(Math.pow(level / 2, 1.35)) + 2;
        res += Math.log(level + 1) * 10;
        res = Math.floor(res);
        return res <= 0 ? 1 : res;
    }

    /**
     * 返回透明度，特效进行越彻底，越透明
     * @param tr 特效进度 0~1
     */
    static timeRateAlpha(tr) {
        return (1 - tr) * 0.25;
    }

    static timeRateAlphaDownFast(tr) {
        return Math.pow((1 - tr) * 0.25, 2);
    }

    /**
     * 计算爆炸伤害随着距离递减
     * @param dis
     */
    static disBoomDamage(dis) {

    }

    /**
     * 随着时间的增加，怪物打死的奖励
     * @param tick
     */
    static timeAddPrise(tick) {
        let res = Math.floor(Math.log10(tick));
        if (res <= 0) {
            res = 1;
        }
        return res;
    }

    /**
     * 随着波数的增加，怪物的血量上限的变化
     * @param level
     * @returns {number}
     */
    static levelMonsterHpAddedHard(level) {
        return Math.floor(Math.pow(level, 2.7) + Math.pow(level, 0.5) * 60);
    }

    static levelMonsterHpAddedNormal(level) {
        let res = Math.floor(Math.pow(level, 2.5) + Math.pow(level, 0.5) * 60);
        if (res > 100000) {
            res = 100000;
        }
        return res;
    }

    static levelMonsterHpAddedEasy(level) {
        let res = Math.floor(Math.pow(level, 2) + Math.pow(level, 0.5) * 60);
        if (res > 5000) {
            res = 5000;
        }
        return res;
    }

    /**
     * 怪物血量增加随着游戏时间刻的函数
     * @param t
     * @returns {number}
     */
    static tickMonsterHpAddedEasy(t) {
        return Math.floor(Math.pow(t / 500, 2.5) + Math.pow(t / 500, 0.5) * 60);
    }

    static tickMonsterHpAddedHard(t) {
        return  Math.floor(Math.pow(t / 500, 2.52) + Math.pow(t / 500, 0.5) * 60);
    }

    /**
     * 无尽时间，没有波数情况下
     * 怪物每一次增加数量
     * @param t
     */
    static tickAddMonsterNumEasy(t) {
        return Math.floor(t / 200);
    }

    static tickAddMonsterNumHard(t) {
        return Math.floor(t / 180);
    }

    /**
     * 波数与T800数量的函数
     * @param level
     * @returns {number|number}
     */
    static levelT800Count(level) {
        let res = Math.floor(Math.pow(level, 1.2) / 10);
        return res < 1 ? 1 : res;
    }

    static levelT800CountHard(level) {
        let res = Math.floor(Math.pow(level, 1.5) / 10);
        return res < 1 ? 1 : res;
    }

    /**
     * 随着怪物波数的增加，每个怪物奖金的量
     * @param level
     */
    static levelAddPrice(level) {
        return Math.floor(Math.log(level) * (level / 10)) + 10;
    }

    static levelAddPriceNormal(level) {
        return Math.floor(Math.log(level) * (level / 10));
    }

    static levelAddPriceHard(level) {
        return Math.floor(Math.log(level) * (level / 20));
    }

    /**
     * 地狱塔的单次伤害随着锁定时间刻的变化
     * 几乎一秒就能秒杀
     * @param tick
     */
    static timeHellTowerDamage_E(tick) {
        return Math.exp(tick) / 100000_0000;
    }

    static timeHellTowerDamage(tick) {
        return Math.pow(tick, 2) / 1000;
    }

    /**
     * 怪物的冲撞伤害随着波数的增加
     * @param level
     */
    static levelCollideAdded(level) {
        return Math.floor(Math.pow(level, 1.55));
    }

    static levelCollideAddedHard(level) {
        return Math.floor(Math.pow(level, 2));
    }

    /**
     * 新放置塔楼的价格与塔楼目前数量之间的关系
     * @param num
     * @constructor
     */
    static TowerNumPriceAdded(num) {
        return Math.floor(Math.exp(num) / 1000);
    }

    static TowerNumPriceAdded2(num) {
        let x = num - 6;
        if (x < 0) {
            x = 0;
        }
        return Math.floor(Math.pow(x, 1.7));
    }
}

//
// for (let i = 1; i < 1000; i++) {
//     // console.log(i, Functions.levelAddPrice(i), Functions.levelAddPriceNormal(i), Functions.levelAddPriceHard(i));
//     // console.log(i, Functions.TowerNumPriceAdded(i), Functions.TowerNumPriceAdded2(i),)
// }
