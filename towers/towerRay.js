/**
 * 射线炮塔
 * by littlefean
 */

class TowerRay extends Tower {
    constructor(x, y, world) {
        super(x, y, world);
        this.name = "射线塔";
        this.clock = 1.1  // 设置为一个小数类型，表示这个炮塔永远不会发射圆圈形的炮弹

        this.target = null;  // 目标怪物
        this.rangeR = 200;
        this.hpInit(5000);
        this.price = 1000 // 这个炮塔需要花多少钱来买

        this.rayLen = 1000;  // 射线的长度
        this.damage = 1;  // 打击一次的伤害

        this.targetLiveTime = 0;  // 锁定目标的时间

        this.attackFunc = this.attack;
        this.scanningSpeed = 0.01;  // 旋转角速度 倍数

        this.rayMoveSpeed = 0;  // 射线向前前进的速度
        this.rayNum = 1;  // 射线的数量
        this.rayDeviationRotate = 0;  // 子弹平面随机偏移 方向方面的
        this.rayDeviation = 0;  // 子弹平面随机偏移
        this.rayMaxRange = 1000;  // 射线中心点最远的移动范围，超过范围会消失
        this.rayClock = 1;  // 发射线的频率
        this.rayBullys = new Set();  // 发射线段
        this.rayThrowAble = true;
        this.rayRepel = 0;  // 该光子弹的击退能力
        this.rayColor = MyColor.GRAY();
        this.rayWidth = 3;
    }

    /**
     * 更新目标
     */
    refreshTarget() {
        for (let m of this.world.monsters) {
            if (this.getViewCircle().impact(m.getBodyCircle())) {
                this.target = m;
                this.dirction = this.target.pos.sub(this.pos).to1();
                return;
            }
        }
    }

    /**
     * 释放目标
     */
    loseTarget() {
        this.target = null;
    }

    /**
     * 朝着目标方向发射一个激光
     */
    shoot() {
        if (this.liveTime % this.rayClock === 0) {
            let line = new Line(this.pos, this.pos.plus(this.dirction.mul(this.rayLen)));
            for (let m of this.world.monsters) {
                if (line.intersectWithCircle(m.getBodyCircle())) {
                    m.hpChange(-this.damage);

                }
            }
            let e = new EffectLine(line.PosStart, line.PosEnd);
            e.initLineStyle(this.rayColor, this.rayWidth);
            e.duration = 50;
            this.world.addEffect(e);
            // new Audio("sound/发射音效/高科技塔发射.mp3").play()
        }
    }

    /**
     * 普通进攻
     */
    attack() {
        this.refreshTarget();
        if (this.target === null || this.target === undefined || this.target.isDead()) {
            return;
        }
        // 进攻目标
        this.shoot();
        // 目标是否已经死亡
        if (this.target.isDead()) {
            this.loseTarget();
        }
    }

    /**
     * 转圈扫描进攻
     */
    scanningAttack() {
        // 旋转自动
        let theta = this.scanningSpeed * this.liveTime;
        this.dirction = new Vector(Math.sin(theta), Math.cos(theta));
        // 进攻目标
        this.shoot();
    }

    /**
     * 发射射线段的进攻，如同 8-bit
     */
    shootingAttack() {
        this.refreshTarget();
        if (this.target === null || this.target === undefined || this.target.isDead()) {
            return;
        }
        for (let m of this.world.monsters) {
            if (this.getViewCircle().impact(m.getBodyCircle())) {
                // console.log("发现怪物")
                this.dirction = this.target.pos.sub(this.pos).to1();

                if (this.liveTime % this.rayClock === 0) {
                    // console.log("进攻！")
                    for (let i = 0; i < this.rayNum; i++) {
                        // 随机化后了的方向
                        let bDir = this.dirction.copy().deviation(this.rayDeviationRotate).to1();
                        // let bDir = this.dirction.copy().mul(this.rayMoveSpeed);
                        // console.log("发射子弹")
                        let line = new Line(this.pos.copy(), this.pos.plus(bDir.mul(this.rayLen)));
                        let rayBully = new LineObject(line, this.world);
                        rayBully.speed = bDir.mul(this.rayMoveSpeed);
                        this.rayBullys.add(rayBully);
                        // this.world.addEffect(new EffectLine(line.PosStart, line.PosEnd));
                    }
                }
                return;
            }
        }
    }

    /**
     * 像荒野乱斗中格尔的大招一样进攻
     */
    gerAttack() {
        this.refreshTarget();
        if (this.target === null || this.target === undefined || this.target.isDead()) {
            return;
        }
        for (let m of this.world.monsters) {
            if (this.getViewCircle().impact(m.getBodyCircle())) {
                this.dirction = this.target.pos.sub(this.pos).to1();
                if (this.liveTime % this.rayClock === 0) {
                    for (let i = 0; i < this.rayNum; i++) {
                        // 随机化后了的方向
                        let bDir = this.dirction.copy().deviation(this.rayDeviationRotate).to1();
                        let x1 = bDir.rotate90().mul(this.rayLen / 2);
                        let x2 = x1.copy().rotate90().rotate90();
                        let line = new Line(this.pos.plus(x1), this.pos.plus(x2));
                        let rayBully = new LineObject(line, this.world);
                        rayBully.speed = bDir.mul(this.rayMoveSpeed);
                        this.rayBullys.add(rayBully);
                    }
                }
                return;
            }
        }
    }


    goStep() {
        super.goStep();
        this.attackFunc();

        for (let br of this.rayBullys) {
            // 是否清除子弹
            if (br.PosEnd.dis(this.pos) > this.rayMaxRange) {
                this.rayBullys.delete(br);
                break;
            }
            // 移动子弹
            br.lineGoStep();
            // 碰撞子弹
            for (let m of this.world.monsters) {
                if (br.intersectWithCircle(m.getBodyCircle())) {
                    m.hpChange(-this.damage);
                    if (!this.rayThrowAble) {
                        this.rayBullys.delete(br);
                        break;
                    }
                    // 击退能力
                    if (this.rayRepel !== 0) {
                        m.pos = m.pos.copy().plus(br.speed.mul(this.rayRepel));
                    }
                }
            }
        }
    }

    render(ctx) {
        super.render(ctx);
        // 渲染子弹
        for (let b of this.rayBullys) {
            b.strokeColor = this.rayColor;
            b.strokeWidth = this.rayWidth;
            b.render(ctx);
        }
    }
}

