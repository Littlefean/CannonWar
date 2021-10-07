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
        // let res = Math.floor(Math.pow(level / 2, 1.3)) + 2;
        // return res <= 0 ? 1 : res;
        let res = Math.floor(Math.pow(level / 2, 1.3)) + 2;
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
    static levelMonsterHpAdded(level) {
        return Math.floor(Math.pow(level, 3) + Math.pow(level, 0.5) * 60);
    }

    /**
     * 波数与T800数量的函数
     * @param level
     * @returns {number|number}
     */
    static levelT800Count(level) {
        let res = Math.floor(Math.pow(level, 0.35));
        return res < 1 ? 1 : res;
    }

    /**
     * 随着怪物波数的增加，每个怪物奖金的量
     * @param level
     */
    static levelAddPrice(level) {
        return Math.floor(Math.log(level) * (level / 10)) + 10;
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
}

// for (let i = 1; i < 1000; i++) {
//     console.log(i, Functions.TowerNumPriceAdded(i));
// }
