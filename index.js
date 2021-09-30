/**
 *
 * by littlefean
 */
let c = document.querySelector("canvas");
let world = new World(1200, 800);

window.onload = function () {

    let mainAni = setInterval(() => {
        world.goTick();
        world.render(c);
        if (world.rootBuilding.isDead()) {
            alert("你失败了");
            location.reload();
            clearInterval(mainAni);
        }
    }, 25);

    let addedThings = [];

    /**
     * 点击画布添加炮塔
     * @param e
     */
    c.onclick = function (e) {
        if (addedThings.length === 0) {
            return;
        }
        let addThing = addedThings.pop();

        addThing.pos.x = e.clientX - c.offsetLeft;
        addThing.pos.y = e.clientY - c.offsetTop;
        // 检测此处是否可以放建筑
        for (let item of world.getAllBuildingArr()) {
            if (addThing.getBodyCircle().impact(item.getBodyCircle())) {
                // 这里不可以放建筑
                addedThings.push(addThing);
                let et = new EffectText("这里不能放建筑，换一个地方点一下");
                et.pos = addThing.pos.copy();
                world.addEffect(et);
                return;
            }
        }
        switch (addThing.gameType) {
            case "Battery":
                world.addBattery(addThing);
                break;
            case "Building":
                world.addBuilding(addThing);
                break;
        }
    }
    /**
     * 动态添加所有炮塔的按钮
     */
    let cBtn = document.querySelector(".choiceBtn");
    let btnClassName = "towerBtn";
    let thingsFuncArr = [];
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
        btn.classList.add(b.gameType);
        btn.innerText = b.name;
        btn.setAttribute("data-price", b.price.toString());
        btn.addEventListener("click", () => {
            world.user.money -= b.price;
            addedThings.push(bFunc(world));
        });
        cBtn.appendChild(btn);
    }

    let towerBtnArr = document.getElementsByClassName(btnClassName);

    setInterval(() => {
        for (let btn of towerBtnArr) {
            if (btn.dataset.price <= world.user.money) {
                btn.removeAttribute("disabled");
            } else {
                btn.setAttribute("disabled", "disabled");
            }
        }
    }, 100);
}



