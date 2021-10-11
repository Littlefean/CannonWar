/**
 * 子弹发射器类
 * todo 子弹发射器类需要一个辅助类叫势力类，比如：玩家A，玩家B，AiA，AiB，进攻放，防御方，都是一种势力属性
 *
 * by littlefean
 */
class BulletLauncher {
    constructor(pos, world, bindObject) {
        this.bindObject = bindObject;
        this.world = world
        this.pos = pos;  // 发射物体发射的起点位置

        this.clock = 5;  // 反应时间
        this.launcherObjGetterFunc = BullyFinally.Normal;

        this.bullySpeed = 8;  // 子弹基础速度
        this.bullySpeedAddMax = 0;  // 子弹速度增加随机量
        this.bullyDeviationRotate = 0;  // 子弹平面随机偏移 方向方面的
        this.bullyDeviation = 0;  // 子弹平面随机偏移
        /**
         * 散弹单侧张角
         * @type {number} 弧度
         */
        this.bullyRotate = 0;
        this.attackBullyNum = 1;  // 一次性发射子弹的数量
        this.bullySlideRate = 1;  // 子弹可滑行距离

        this.lunchRange = 100; // 射程
    }

    /**
     * 迭代发射器一次
     */
    goStepLauncher() {
        if (this.bindObject.liveTime % this.clock !== 0) {
            return;
        }

    }
}
