/**
 * game类
 * by littlefean
 */
class Game {
    /**
     *
     * @param world {World}
     */
    constructor(world) {
        this.gameSpeed = 25;  // 迭代一步需要多少毫秒，这个数字越大，速度越慢，必须大于零
        this.gameWorld = world;
        this.gameCanvasEle = null;
        this.isEnd = false;  // 是否是结束状态
        this.isPaused = false;  // 是否是暂停状态
    }

    /**
     * 开启游戏循环
     */
    start() {
        let main = setInterval(() => {
            if (this.isPaused) {

            } else {
                this.gameWorld.goTick();
                this.gameWorld.render(this.gameCanvasEle);

                if (this.isGameFalse()) {
                    this.gameEndFunc();
                    clearInterval(main);
                }
            }
        }, this.gameSpeed);
    }

    /**
     * 失败回调函数
     */
    gameEndFunc() {
        alert("you fail!");
        location.reload();
    }

    /**
     * 判断是否失败
     * @returns {boolean}
     */
    isGameFalse() {
        return this.gameWorld.rootBuilding.isDead() || this.isEnd;
    }
}
