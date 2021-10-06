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
    let soundBtn = document.querySelector(".soundSet");

    startBtn.addEventListener("click", () => {
        gotoPage("modeChoice-interface");
        choiceInterface();
    });

    wikiBtn.addEventListener("click", () => {
        gotoPage("wiki-interface");
        wikiInterface();
    });

    soundBtn.addEventListener("click", () => {
        alert("还没做声音！");
    });
}

/**
 * 模式选择界面逻辑
 */
function choiceInterface() {
    let thisInterface = document.querySelector(".modeChoice-interface");

    let endlessModeBtn = thisInterface.querySelector(".endlessMode");
    let rottenModeBtn = thisInterface.querySelector(".rottenMode");
    let backBtn = thisInterface.querySelector(".backPage");
    endlessModeBtn.addEventListener("click", () => {
        gotoPage("war-interface");
        endlessMode();
    })

    rottenModeBtn.addEventListener("click", () => {
        alert("还在开发中！");
    });
    backBtn.addEventListener("click", () => {
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
    // todo 重复进入会发现这里不断增多
    if (contentEle.children.length === 0) {
        for (let tower of TOWER_FUNC_ARR) {
            // 炮塔div
            let towerEle = document.createElement("div");
            towerEle.classList.add("tower");
            let towerObj = tower(worldVoid);
            // 标题
            let title = document.createElement("h3");
            title.innerText = towerObj.name;
            towerEle.appendChild(title);
            // 模型
            let towerShape = document.createElement("div");
            towerShape.classList.add("tower-shape");
            let rRate = 4;  // 半径缩放倍数
            towerShape.style.width = towerObj.r * rRate + "px";
            towerShape.style.height = towerObj.r * rRate + "px";
            towerShape.style.backgroundColor = towerObj.bodyColor.toStringRGBA();
            towerShape.style.borderWidth = towerObj.bodyStrokeWidth + "px";
            towerShape.style.borderStyle = "solid";
            towerShape.style.borderColor = towerObj.bodyStrokeColor.toStringRGBA();
            towerEle.appendChild(towerShape);
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
        for (let monster of MONSTERS_FUNC_ARR) {
            let monsterObj = monster(worldVoid);
            let monsterEle = document.createElement("div");
            monsterEle.classList.add("monster");

            let title = document.createElement("h3");
            title.innerText = monsterObj.name;
            monsterEle.appendChild(title);
            // 模型
            let towerShape = document.createElement("div");
            towerShape.classList.add("monster-shape");
            let rRate = 3;  // 半径缩放倍数
            towerShape.style.width = monsterObj.r * rRate + "px";
            towerShape.style.height = monsterObj.r * rRate + "px";
            towerShape.style.backgroundColor = monsterObj.bodyColor.toStringRGBA();
            towerShape.style.borderWidth = monsterObj.bodyStrokeWidth + "px";
            towerShape.style.borderStyle = "solid";
            towerShape.style.borderColor = monsterObj.bodyStrokeColor.toStringRGBA();
            monsterEle.appendChild(towerShape);
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
 */
function endlessMode() {
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
        gotoPage("modeChoice-interface");
    });

    let world = new World(canvasEle.width, canvasEle.height);
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

    let addedThing = null;  // 当前准备添加到画布的东西
    let selectedThing = null; // 当前选中的东西
    let btnClassName = "towerBtn";
    let initBtnListClassName = "initPanel";  // 选择界面的初始面板 div类名
    let selectedListClassName = "choicePanel";  // 选择界面的选择对象面板 div类名
    let putListClassName = "putPanel";  // 放置选择对象时候的面板 div类名

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
            for (let bF of TOWER_FUNC_ARR) {
                thingsFuncArr.push(bF);
            }
            for (let bF of BUILDING_FUNC_ARR) {
                thingsFuncArr.push(bF);
            }
            for (let bFunc of thingsFuncArr) {
                let btn = document.createElement('button');
                btn.classList.add(btnClassName);
                let b = bFunc(world);
                btn.innerText = b.name + ` ${b.price}￥`;
                btn.classList.add(b.gameType);
                btn.setAttribute("data-price", b.price.toString());
                // 按钮点击后会把该按钮产生的实例绑定到待添加物品变量上
                btn.addEventListener("click", () => {
                    addedThing = bFunc(world);
                });
                panelEle.appendChild(btn);
            }
            // 测试按钮
            let testB = document.createElement("button");
            testB.id = "testBtn";
            testB.innerText = "多给钱";
            testB.addEventListener("click", () => {
                world.user.money += 100000;
            });
            panelEle.appendChild(testB);
        }
    }

    /**
     * 显示舞台上选中了的物品的界面
     */
    function showSelectedPanel() {
        let panelEle = document.querySelector(`.${selectedListClassName}`);
        if (panelEle.style.display === "block") {
            // 当前已经是在展示的了，不用再被刷新了
            // 但是这样会导致点击查看一个东西之后还要点击一下空白的地方才能查看另一个东西
            return;
        }
        hideAllPanel();
        panelEle.style.display = "block";

        if (panelEle.innerHTML === "") {
            panelEle.innerHTML = "你选中了一个东西";
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
            } else if (selectedThing.gameType === "Building" || selectedThing.gameType === "Battery") {
                /**
                 * 建筑或者炮塔信息展示界面
                 */
                hideAllData();
                panelEle.querySelector(".buildingData").style.display = "block";
                panelEle.querySelector(".buildingName").innerHTML = selectedThing.name;
                panelEle.querySelector(".buildingComment").innerHTML = selectedThing.comment;

                let levelUpListEle = panelEle.querySelector(".levelUpList");
                levelUpListEle.innerHTML = "";
                // 创建所有可以升级成的建筑，添加按钮
                for (let item of selectedThing.levelUpArr) {
                    let btn = document.createElement("button");
                    btn.classList.add(btnClassName);
                    let levelUpObj = item(world);
                    btn.innerText = levelUpObj.name + ` ${levelUpObj.price}￥`;
                    btn.classList.add(levelUpObj.gameType);
                    btn.setAttribute("data-price", levelUpObj.price.toString());
                    btn.addEventListener("click", () => {
                        world.user.money -= levelUpObj.price;
                        console.log("点击了升级按钮");
                        let levelUpPos = selectedThing.pos.copy();
                        selectedThing.remove();
                        let newTower = item(world);
                        newTower.pos = levelUpPos;
                        world.addBattery(newTower);
                        selectedThing = newTower;  // 点击升级完了之后应该是升级之后的塔
                    });
                    levelUpListEle.appendChild(btn);
                }

                panelEle.querySelector(".levelDown").addEventListener("click", () => {
                    // 降级这个建筑
                    let func = selectedThing.levelDownGetter;
                    if (func === null) {
                        // 这个建筑降低到最低级了
                        alert("这个建筑不可以降级，或者已经降低到最低级了");
                    } else {
                        let downObj = func(world);
                        world.user.money += (selectedThing.price / 4);  // 降级返还的金钱是升级的四分之一
                        let levelUpPos = selectedThing.pos.copy();
                        selectedThing.remove();
                        downObj.pos = levelUpPos;
                        world.addBattery(downObj);
                        selectedThing = null;  // 完了之后要退出当前界面
                    }
                });
                panelEle.querySelector(".sell").addEventListener("click", () => {
                    // 卖了这个建筑
                    // 任何一个建筑买了只能换来自身价格的一半
                    world.user.money += Math.floor(selectedThing.price / 2);
                    selectedThing.remove();
                    console.log("加了钱了");  // 这个函数内部总是会点击了之后调用不止一次；
                    selectedThing = null;
                });
                panelEle.querySelector(".cancelChoice").addEventListener("click", () => {
                    selectedThing = null;
                });
            }
        }
    }

    function showPutPanel() {
        let panelEle = document.querySelector(`.${putListClassName}`);
        if (panelEle.style.display === "block") {
            return;
        }
        hideAllPanel();
        panelEle.style.display = "block";
        if (panelEle.innerHTML === "") {
            panelEle.innerHTML = "请放置这个东西";
        } else {
            panelEle.querySelector(".cancelPut").addEventListener("click", () => {
                addedThing = null;
            });
            panelEle.querySelector(".choiceName").innerHTML = addedThing.name;
            panelEle.querySelector(".choiceMoney").innerHTML = addedThing.price;
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
     * 时刻刷新右侧的选择面板
     */
    setInterval(() => {
        if (addedThing !== null) {
            // 显示：请放置这个炮塔，并展示这个炮塔的信息
            showPutPanel();
        } else if (selectedThing !== null) {
            // 显示：当前选择的这个东西的信息
            showSelectedPanel();
        } else {
            // 显示：初始默认面板
            showInitPanel();
        }
    }, 100);


    /**
     * 点击画布放置炮塔
     * 点击画布选择升级炮塔
     * 点击画布选择怪物
     * @param e
     */
    canvasEle.onclick = function (e) {
        let clickPos = new Vector(e.clientX - canvasEle.offsetLeft, e.clientY - canvasEle.offsetTop);
        if (addedThing === null) {
            // 手上没有炮塔
            // 检测点击的此处是否是炮塔
            for (let item of world.getAllBuildingArr()) {
                if (item.getBodyCircle().pointIn(clickPos.x, clickPos.y)) {
                    // 这里有炮塔
                    selectedThing = item;
                    return;
                }
            }
            // 检测点击的此处是否有怪物
            for (let item of world.monsters) {
                if (item.getBodyCircle().pointIn(clickPos.x, clickPos.y)) {
                    // 这里有怪物
                    selectedThing = item;
                    return;
                }
            }
            selectedThing = null;
        } else {
            // 手上有炮塔，放置炮塔
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
                case "Battery":
                    world.addBattery(addedThing);
                    break;
                case "Building":
                    world.addBuilding(addedThing);
                    break;
            }
            addedThing = null;
        }
    }

    /**
     * 鼠标在画布上移动 更新准备放置的位置
     * @param e
     */
    canvasEle.onmousemove = function (e) {
        if (addedThing === null) {
            return;
        }
        world.user.putLoc.building = addedThing;
        world.user.putLoc.x = e.clientX - canvasEle.offsetLeft;
        world.user.putLoc.y = e.clientY - canvasEle.offsetTop;
    }


    /**
     * 时刻更新按钮状态
     * 让按钮是否可以点击，金钱限制
     */
    let freshBtn = setInterval(() => {
        let towerBtnArr = document.getElementsByClassName(btnClassName);
        for (let btn of towerBtnArr) {
            if (btn.dataset.price <= world.user.money) {
                btn.removeAttribute("disabled");
            } else {
                btn.setAttribute("disabled", "disabled");
            }
        }
        if (gameEnd) {
            clearInterval(freshBtn);
        }
    }, 100);


}



