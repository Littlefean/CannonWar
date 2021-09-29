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
        return t / 5;
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
     * 返回透明度，特效进行越彻底，越透明
     * @param tr 特效进度 0~1
     */
    static timeRateAlpha(tr) {
        return (1 - tr) * 0.25;
    }

    /**
     * 计算爆炸伤害随着距离递减
     * @param dis
     */
    static disBoomDamage(dis) {

    }
}
