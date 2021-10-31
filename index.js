/**
 * 炮塔战争主程序
 * by littlefean
 */

let app = document.querySelector(".gameApp");
let interfaceArr = app.children;
const UP_LEVEL_ICON = new Image();
UP_LEVEL_ICON.src = "icon/icon_upgrade.png";

window.onload = function () {
    mainInterface();
}

/**
 * 主界面里的逻辑
 */
function mainInterface() {
    let startBtn = document.querySelector(".startGame");
    let wikiBtn = document.querySelector(".wiki");
    let helpBtn = document.querySelector(".help");

    startBtn.addEventListener("click", () => {
        gotoPage("modeChoice-interface");
        choiceInterface();
    });

    wikiBtn.addEventListener("click", () => {
        gotoPage("wiki-interface");
        wikiInterface();
    });
    helpBtn.addEventListener("click", () => {
        gotoPage("help-interface");
        helpInterface();
    });
}

/**
 * 模式选择界面逻辑
 */
function choiceInterface() {
    let thisInterface = document.querySelector(".modeChoice-interface");

    thisInterface.querySelector(".endlessMode-easy").addEventListener("click", () => {
        gotoPage("war-interface");
        endlessMode("easy");
    });
    thisInterface.querySelector(".endlessMode-normal").addEventListener("click", () => {
        gotoPage("war-interface");
        endlessMode("normal");
    });
    thisInterface.querySelector(".endlessMode-hard").addEventListener("click", () => {
        gotoPage("war-interface");
        endlessMode("hard");
    });
    // 无尽时间模式
    thisInterface.querySelector(".infiniteTimeMode-easy").addEventListener("click", () => {
        gotoPage("war-interface");
        endlessMode("easy", false);
    });
    thisInterface.querySelector(".infiniteTimeMode-hard").addEventListener("click", () => {
        gotoPage("war-interface");
        endlessMode("hard", false);
    });

    thisInterface.querySelector(".backPage").addEventListener("click", () => {
        gotoPage("main-interface");
    });
}

/**
 * 帮助界面逻辑
 */
function helpInterface() {
    let thisInterface = document.querySelector(".help-interface");
    thisInterface.querySelector(".backPage").addEventListener("click", () => {
        gotoPage("main-interface");
    });
}

/**
 * wiki 界面逻辑
 */
function wikiInterface() {
    let thisInterface = document.querySelector(".wiki-interface");
    thisInterface.querySelector(".cannonList").addEventListener("click", () => {
        gotoPage("cannon-interface");
        cannonInterface();
    });
    thisInterface.querySelector(".monsterList").addEventListener("click", () => {
        gotoPage("monsters-interface");
        monstersInterface();
    });
    thisInterface.querySelector(".backPage").addEventListener("click", () => {
        gotoPage("main-interface");
    });
}

/**
 * 炮塔大全界面逻辑
 */
function cannonInterface() {
    let thisInterface = document.querySelector(".cannon-interface");
    thisInterface.querySelector(".backPage").addEventListener("click", () => {
        gotoPage("wiki-interface");
    });
    let contentEle = thisInterface.querySelector(".content");
    let worldVoid = new World(100, 100);


    if (contentEle.children.length === 0) {
        let allTowerArr = [];
        let towerFunc = TowerFinally.BasicCannon;
        let dfs = (tf) => {
            let t = tf(worldVoid);
            allTowerArr.push(t);
            if (t.levelUpArr === null) {
                return;
            }
            for (let ntf of t.levelUpArr) {
                dfs(ntf);
            }
        };
        dfs(towerFunc);

        for (let towerObj of allTowerArr) {
            // 炮塔div
            let towerEle = document.createElement("div");
            towerEle.classList.add("tower");
            // 标题
            let title = document.createElement("h3");
            title.innerText = towerObj.name;
            towerEle.appendChild(title);
            // 贴图
            let towerImg = document.createElement("div");
            towerImg.style.backgroundImage = `url('towers/imgs/towers.png')`;
            towerImg.style.width = TOWER_IMG_PRE_WIDTH + "px";
            towerImg.style.height = TOWER_IMG_PRE_HEIGHT + "px";
            let diffPos = towerObj.getImgStartPosByIndex(towerObj.imgIndex);
            towerImg.style.backgroundPositionX = -diffPos.x + "px";
            towerImg.style.backgroundPositionY = -diffPos.y + "px";
            towerImg.style.margin = "0 auto";
            towerEle.appendChild(towerImg);
            // 数据域
            let data = document.createElement("div");
            // 射程、子弹速度、血量、攻击间歇时间、一次性发射子弹数量
            let line = document.createElement("p");
            line.innerText = `射程：${towerObj.rangeR}px`;
            data.appendChild(line);
            line = document.createElement("p");
            line.innerText = `子弹速度：${towerObj.bullySpeed}`;
            data.appendChild(line);

            line = document.createElement("p");
            line.innerText = `血量：${towerObj.rangeR}`;
            data.appendChild(line);

            line = document.createElement("p");
            line.innerText = `攻击间歇时间：${towerObj.clock}`;
            data.appendChild(line);
            line = document.createElement("p");
            line.innerText = `价格：${towerObj.price}`;
            data.appendChild(line);

            line = document.createElement("p");
            line.innerText = `详细信息：${towerObj.comment}`;
            data.appendChild(line);

            towerEle.appendChild(data);
            // todo 用 canvas 画成雷达图
            // 概述
            let common = document.createElement("div");
            towerEle.appendChild(common);

            contentEle.appendChild(towerEle);
        }
    }

}

/**
 * 怪物大全界面逻辑
 */
function monstersInterface() {
    let thisInterface = document.querySelector(".monsters-interface");
    thisInterface.querySelector(".backPage").addEventListener("click", () => {
        gotoPage("wiki-interface");
    });
    let contentEle = thisInterface.querySelector(".content");
    let worldVoid = new World(100, 100);
    if (contentEle.children.length === 0) {
        for (let monster of MONSTERS_FUNC_ARR_ALL) {
            let monsterObj = monster(worldVoid);
            let monsterEle = document.createElement("div");
            monsterEle.classList.add("monster");

            let title = document.createElement("h3");
            title.innerText = monsterObj.name;
            monsterEle.appendChild(title);
            // 贴图
            let imgDiv = document.createElement("div");
            imgDiv.style.backgroundImage = `url('monster/imgs/monsters.png')`;
            imgDiv.style.width = MONSTER_IMG_PRE_WIDTH + "px";
            imgDiv.style.height = MONSTER_IMG_PRE_HEIGHT + "px";
            let diffPos = monsterObj.getImgStartPosByIndex(monsterObj.imgIndex);
            imgDiv.style.backgroundPositionX = -diffPos.x + "px";
            imgDiv.style.backgroundPositionY = -diffPos.y + "px";
            imgDiv.style.margin = "0 auto";
            monsterEle.appendChild(imgDiv);
            // 数据域
            let data = document.createElement("div");

            let line = document.createElement("p");
            line.innerText = `血量：${monsterObj.maxHp}`;
            data.appendChild(line);

            line = document.createElement("p");
            line.innerText = `奖金：${monsterObj.addPrice}`;
            data.appendChild(line);

            line = document.createElement("p");
            line.innerText = `碰撞伤害：${monsterObj.colishDamage}`;
            data.appendChild(line);

            line = document.createElement("p");
            line.innerText = `速度：${monsterObj.speedNumb}`;
            data.appendChild(line);

            line = document.createElement("p");
            line.innerText = `加速度：${monsterObj.accelerationV}`;
            data.appendChild(line);

            line = document.createElement("p");
            line.innerText = `介绍：${monsterObj.comment}`;
            data.appendChild(line);
            monsterEle.appendChild(data);

            contentEle.appendChild(monsterEle);
        }
    }
}

/**
 * 跳转到有类名的页面
 * @param className {String}
 */
function gotoPage(className) {
    for (let pageHTMLEle of interfaceArr) {
        if (pageHTMLEle.classList.contains(className)) {
            pageHTMLEle.style.display = "block";
        } else {
            pageHTMLEle.style.display = "none";
        }
    }
}

/**
 * 开启无尽模式
 * 前提条件是： war-interface 被打开
 * @param mode {String}
 * @param haveGroup {Boolean} 是否含有怪物波数，如果是false，则是无尽时间模式
 */
function endlessMode(mode, haveGroup = true) {
    /**
     * 当前页面
     * @type {HTMLDivElement}
     */
    let thisInterface = document.querySelector(".war-interface");
    /**
     * 画布元素
     * @type {HTMLCanvasElement}
     */
    let canvasEle = document.querySelector("#mainCanvas");
    /**
     * 右侧选择按钮
     * @type {HTMLElement}
     */
    let choiceBtn = document.querySelector(".choiceBtn");
    choiceBtn.style.display = "block";  // 把右侧选择按钮打开

    let gameEnd = false;  // 游戏是否被迫结束
    /**
     * 返回按钮点击事件
     */
    thisInterface.querySelector(".backPage").addEventListener("click", () => {
        // 点击返回按钮，应该让游戏立刻结束
        gameEnd = true;
        choiceBtn.style.display = "none";
        Sounds.switchBgm("main");
        gotoPage("modeChoice-interface");
    });

    // 背景音乐切换
    Sounds.switchBgm("war");

    let world = new World(canvasEle.width, canvasEle.height);
    world.mode = mode;
    if (!haveGroup) {
        world.haveFlow = false;
        if (mode === "hard") {
            world.user.money = 1000;
        }
    }
    /**
     * 开启游戏循环迭代
     */
    let mainAni = setInterval(() => {
        world.goTick();
        world.render(canvasEle);
        if (gameEnd) {
            clearInterval(mainAni);
            return;
        }
        if (world.rootBuilding.isDead()) {
            alert("你失败了");
            location.reload();
            clearInterval(mainAni);
        }
    }, 25);

    let addedThingFunc = null;  // 当前准备添加到画布的东西  应该是一个构造器（函数）。
    let selectedThing = null; // 当前选中的东西
    let btnClassName = "towerBtn";
    let initBtnListClassName = "initPanel";  // 选择界面的初始面板 div类名
    let selectedListClassName = "choicePanel";  // 选择界面的选择对象面板 div类名
    let smallLevelUpPanelEle = document.querySelector("#smallLevelUpPanel");  // 升级窗口的元素

    /**
     * 显示初始化面板
     */
    function showInitPanel() {
        let panelEle = document.querySelector(`.${initBtnListClassName}`);
        if (panelEle.style.display === "block") {
            return;
        }
        hideAllPanel();
        panelEle.style.display = "block";

        // 如果初始化面板里面还没有被填充内容，则就先填充内容
        if (panelEle.innerHTML === "") {
            let thingsFuncArr = [];  // 即将添加的按钮数组
            thingsFuncArr.push(TowerFinally.BasicCannon);
            for (let bF of BUILDING_FUNC_ARR) {
                thingsFuncArr.push(bF);
            }
            for (let bFunc of thingsFuncArr) {
                let btn = document.createElement('button');
                btn.classList.add(btnClassName);
                let b = bFunc(world);
                btn.innerHTML = b.name + `<br>${b.price}￥`;
                btn.classList.add(b.gameType);
                btn.setAttribute("data-price", b.price.toString());
                // 按钮点击后会把构造函数绑定在添加物品上
                btn.addEventListener("click", () => {
                    addedThingFunc = bFunc;
                });
                panelEle.appendChild(btn);
            }
            // 取消选择按钮
            let cancelBtn = document.createElement("button");
            cancelBtn.innerText = "取消放置模式";
            cancelBtn.id = "cancelSelect";
            cancelBtn.addEventListener("click", () => {
                addedThingFunc = null;
                world.user.putLoc.building = null;
            });
            panelEle.appendChild(cancelBtn);

            // 测试按钮
            // let testB = document.createElement("button");
            // testB.id = "testBtn";
            // testB.innerText = "多给钱";
            // testB.addEventListener("click", () => {
            //     world.user.money += 100000;
            // });
            //
            // panelEle.appendChild(testB);
            let addCommon = document.createElement("p");
            addCommon.innerText = "如果无法放置炮塔，且画布在不停闪烁，请刷新浏览器重试。";
            panelEle.appendChild(addCommon);
        }
    }

    /**
     * 时刻刷新右侧的选择面板
     */
    setInterval(() => {
        if (addedThingFunc === null && selectedThing === null) {
            showInitPanel();
        } else if (selectedThing !== null) {
            showSelectedPanel(false);
        }
    }, 100);

    /**
     * 更改右键行为
     * @param e
     * @returns {boolean}
     */
    document.oncontextmenu = function (e) {
        if (e.button === 2) { //判断是否是右键
            addedThingFunc = null;
            world.user.putLoc.building = null;
            return false;
        }
        return true;
    }

    /**
     * 显示舞台上选中了的物品的界面
     * @param forceAble 是否是强制刷新
     */
    function showSelectedPanel(forceAble) {
        let panelEle = document.querySelector(`.${selectedListClassName}`);
        if (panelEle.style.display === "block") {
            // 当前已经是在展示的了，不用再被刷新了
            // 但是这样会导致点击查看一个东西之后还要点击一下空白的地方才能查看另一个东西
            if (!forceAble) {
                return;
            }
        }
        hideAllPanel();
        panelEle.style.display = "block";
        if (panelEle.innerHTML === "") {
        } else {
            let hideAllData = () => {
                for (let data of panelEle.children) {
                    data.style.display = "none";
                }
            };
            if (selectedThing.gameType === "Monster") {
                /**
                 * 怪物信息展示界面
                 */
                hideAllData();
                panelEle.querySelector(".monsterData").style.display = "block";
                panelEle.querySelector(".monsterName").innerHTML = selectedThing.name;
                panelEle.querySelector(".monsterComment").innerHTML = selectedThing.comment;
            }
        }
    }

    /**
     * 隐藏所有面板
     */
    function hideAllPanel() {
        for (let panelEle of choiceBtn.children) {
            panelEle.style.display = "none";
        }
    }

    /**
     * 升级面板鼠标离开事件
     */
    smallLevelUpPanelEle.addEventListener("mouseleave", () => {
        hideSmallLevelUpPanelEle();
    });

    /**
     * 隐藏小面板
     */
    function hideSmallLevelUpPanelEle() {
        smallLevelUpPanelEle.style.display = "none";
    }

    /**
     * 显示小升级面板
     * 引用外部变量：  smallLevelUpPanelEle  world
     * @param thing {Tower}  是什么建筑的
     * @param clickPos {Vector} 鼠标点击的位置
     */
    function showSmallLevelUpPanel(thing, clickPos) {
        // 弹出一个升级界面
        smallLevelUpPanelEle.style.display = "block";
        smallLevelUpPanelEle.style.left = clickPos.x + 10 + "px";
        smallLevelUpPanelEle.style.top = clickPos.y + 10 + "px";
        // 设置弹出界面里面的内容
        let nameSpan = smallLevelUpPanelEle.querySelector(".name");
        nameSpan.innerHTML = thing.name;
        let listEle = smallLevelUpPanelEle.querySelector(".levelUpItems");
        listEle.innerHTML = "";  // 先清空
        // 遍历可以升级的项
        if (thing.levelUpArr.length === 0) {
            // 已经顶级了
            let tips = document.createElement("p");
            tips.innerText = '这个建筑已经顶级啦！';
            listEle.appendChild(tips);
        }
        for (let levelUpItemFunc of thing.levelUpArr) {
            // 设置当前这个升级项目按钮
            let levelUpObj = levelUpItemFunc(world);
            let divLevelUpItemEle = document.createElement("div");
            divLevelUpItemEle.classList.add("levelUpItem");
            // 设置标签内容
            // 名称
            let nameDiv = document.createElement("div");
            nameDiv.classList.add("name");
            nameDiv.innerText = levelUpObj.name;
            divLevelUpItemEle.appendChild(nameDiv);
            let imgDiv = document.createElement("div");
            // 图标
            imgDiv.classList.add("icon");
            imgDiv.style.backgroundImage = "url('towers/imgs/towers.png')";
            let rate = 0.5; // 缩放比率
            imgDiv.style.backgroundSize = `${TOWER_IMG_WIDTH * rate}px ${TOWER_IMG_HEIGHT * rate}px`;
            let diffPos = levelUpObj.getImgStartPosByIndex(levelUpObj.imgIndex);
            imgDiv.style.width = TOWER_IMG_PRE_WIDTH * rate + "px";
            imgDiv.style.height = TOWER_IMG_PRE_HEIGHT * rate + "px";
            imgDiv.style.outline = "solid 1px";

            imgDiv.style.backgroundPositionX = -diffPos.x * rate + "px";
            imgDiv.style.backgroundPositionY = -diffPos.y * rate + "px";
            divLevelUpItemEle.appendChild(imgDiv);
            // 价格
            let priceDiv = document.createElement("div");
            priceDiv.classList.add("price");
            priceDiv.innerText = `${levelUpObj.price}元`;
            divLevelUpItemEle.appendChild(priceDiv);
            // 价格属性
            divLevelUpItemEle.setAttribute("data-price", levelUpObj.price.toString());

            listEle.appendChild(divLevelUpItemEle);

            // 给这个升级项添加点击属性
            divLevelUpItemEle.addEventListener("click", () => {
                if (world.user.money >= divLevelUpItemEle.dataset.price) {
                    // 点击之后，更换把炮塔升级，同时更新升级面板里的属性
                    let pos = thing.pos.copy();
                    world.user.money -= thing.price;
                    let newThing = levelUpItemFunc(world);
                    newThing.pos = pos;
                    world.addTower(newThing);
                    thing.remove();

                    showSmallLevelUpPanel(newThing, clickPos);  // 看似是递归，但实际上又不是递归
                } else {
                    let et = new EffectText("钱不够！");
                    et.pos = clickPos;
                    world.addEffect(et);
                }
            });
        }
        let otherItemsEle = smallLevelUpPanelEle.querySelector(".otherItems");
        otherItemsEle.innerHTML = ""; // 先清空
        // 设置降级项
        let levelDownEle = document.createElement("div");
        levelDownEle.classList.add("item");
        levelDownEle.classList.add("levelDown");
        let iconDiv = document.createElement("div");
        iconDiv.classList.add("icon");
        levelDownEle.appendChild(iconDiv);

        let textDiv = document.createElement("div");
        textDiv.classList.add("inner-text");
        textDiv.innerHTML = `降级<br>+${thing.price / 4}元`;
        levelDownEle.appendChild(textDiv);

        levelDownEle.addEventListener("click", () => {
            // 降级点击函数
            let fatherFunc = thing.levelDownGetter;
            if (fatherFunc === null) {
                // 已经不能降级了
                let et = new EffectText("无法降级！");
                et.pos = clickPos;
                world.addEffect(et);
            } else {
                let downObj = fatherFunc(world);
                world.user.money += thing.price / 4;
                let newPos = thing.pos.copy();
                thing.remove();
                downObj.pos = newPos;
                world.addTower(downObj);
                // 更新
                showSmallLevelUpPanel(downObj, clickPos);  // 刷新小面板
            }
        });
        otherItemsEle.appendChild(levelDownEle);
        // 设置出售项
        let saleDownEle = document.createElement("div");
        saleDownEle.classList.add("item");

        saleDownEle.classList.add("sell");
        let imgDiv = document.createElement("div");
        imgDiv.classList.add("icon");
        saleDownEle.appendChild(imgDiv);


        textDiv = document.createElement("div");
        textDiv.classList.add("inner-text");
        textDiv.innerHTML = `卖了<br>+${thing.price / 2}元`
        saleDownEle.appendChild(textDiv);
        saleDownEle.addEventListener("click", () => {
            // 卖了点击函数
            world.user.money += Math.floor(thing.price / 2);
            thing.remove();
            // 隐藏小面板
            hideSmallLevelUpPanelEle();
        });
        otherItemsEle.appendChild(saleDownEle);
    }

    /**
     * 点击画布放置炮塔
     * 点击画布选择升级炮塔
     * 点击画布选择怪物
     * @param e
     */
    canvasEle.onclick = function (e) {
        let clickPos = new Vector(e.clientX - canvasEle.offsetLeft, e.clientY - canvasEle.offsetTop);
        if (addedThingFunc === null) {
            // 手上没有炮塔
            // 检测点击的此处是否是炮塔或者建筑
            for (let item of world.getAllBuildingArr()) {
                if (item.getBodyCircle().pointIn(clickPos.x, clickPos.y)) {
                    // 这里有炮塔或者建筑
                    // selectedThing = item;
                    // showSelectedPanel(true);
                    showSmallLevelUpPanel(item, clickPos);
                    return;
                }
            }
            // 检测点击的此处是否有怪物
            for (let item of world.monsters) {
                if (item.getBodyCircle().pointIn(clickPos.x, clickPos.y)) {
                    // 这里有怪物
                    selectedThing = item;
                    showSelectedPanel(true);
                    return;
                }
            }
            selectedThing = null;
            hideSmallLevelUpPanelEle();
        } else {
            // 手上有炮塔，放置炮塔
            let addedThing = addedThingFunc(world);
            if (world.user.money < addedThing.price) {
                let et = new EffectText("钱不够了！");
                et.pos = addedThing.pos.copy();
                world.addEffect(et);
                return;
            }
            addedThing.pos = clickPos;
            // 检测此处是否可以放建筑
            for (let item of world.getAllBuildingArr()) {
                if (addedThing.getBodyCircle().impact(item.getBodyCircle())) {
                    // 这里不可以放建筑
                    let et = new EffectText("这里不能放建筑，换一个地方点一下");
                    et.pos = addedThing.pos.copy();
                    world.addEffect(et);
                    return;
                }
            }
            // 可以放建筑
            world.user.money -= addedThing.price;
            switch (addedThing.gameType) {
                case "Tower":
                    world.addTower(addedThing);
                    break;
                case "Building":
                    world.addBuilding(addedThing);
                    break;
            }
        }
    }

    /**
     * 鼠标在画布上移动 更新准备放置的位置
     * @param e
     */
    canvasEle.onmousemove = function (e) {
        if (addedThingFunc === null) {
            return;
        }
        world.user.putLoc.building = addedThingFunc(world);
        world.user.putLoc.x = e.clientX - canvasEle.offsetLeft;
        world.user.putLoc.y = e.clientY - canvasEle.offsetTop;
    }


    /**
     * 时刻更新按钮状态
     * 让按钮是否可以点击，金钱限制
     * 更新是否取消放置的按钮
     */
    let freshBtn = setInterval(() => {
        // 右侧塔楼列表
        let towerBtnArr = document.getElementsByClassName(btnClassName);

        let basicC = TowerFinally.BasicCannon(world);
        towerBtnArr[0].setAttribute("data-price", basicC.price.toString());
        towerBtnArr[0].innerHTML = basicC.name + `<br>${basicC.price}￥`;
        for (let btn of towerBtnArr) {
            if (btn.dataset.price <= world.user.money) {
                btn.removeAttribute("disabled");
            } else {
                btn.setAttribute("disabled", "disabled");
            }
        }
        // 游戏结束
        if (gameEnd) {
            clearInterval(freshBtn);
        }
        // 取消放置按钮
        let cancelSelectBtn = document.getElementById("cancelSelect");
        if (addedThingFunc === null) {
            cancelSelectBtn.setAttribute("disabled", "disabled");
        } else {
            cancelSelectBtn.removeAttribute("disabled");
        }
        // 更新小面板可以放置 todo
        let itemArr = smallLevelUpPanelEle.getElementsByClassName("levelUpItem");
        for (let itemEle of itemArr) {
            if (itemEle.dataset.price <= world.user.money) {
                itemEle.removeAttribute("disabled");
                itemEle.style.opacity = "1";
            } else {
                itemEle.setAttribute("disabled", "disabled");
                itemEle.style.opacity = "0.2";
            }
        }
    }, 100);


}



