/**
 *
 * by littlefean
 */
let c = document.querySelector("canvas");
let world = new World(1000, 600);

window.onload = function () {

    setInterval(() => {
        world.goTime();
        world.render(c);
    }, 25);

    let addedBattery = [];

    /**
     * 点击画布添加炮塔
     * @param e
     */
    c.onclick = function (e) {
        if (addedBattery.length === 0) {
            return;
        }
        let addBattery = addedBattery.pop();
        console.log(e);

        addBattery.pos.x = e.clientX - c.offsetLeft;
        addBattery.pos.y = e.clientY - c.offsetTop;
        world.addBattery(addBattery);
    }
    /**
     * 动态添加所有炮塔的按钮
     */
    let cBtn = document.querySelector(".choiceBtn");
    for (let bFunc of TOWER_FUNC_ARR) {
        let btn = document.createElement('button');
        btn.classList.add("towerBtn");
        let b = bFunc(world);
        btn.innerText = b.name;
        btn.setAttribute("data-price", b.price.toString());
        btn.addEventListener("click", () => {
            world.user.money -= b.price;
            addedBattery.push(bFunc(world));
        });

        cBtn.appendChild(btn);
    }

    let towerBtnArr = document.getElementsByClassName("towerBtn");
    // for (let btn of towerBtnArr) {
    //     btn.addEventListener("click", function () {
    //         // 点击一个建筑按钮所执行的通用功能
    //         world.user.money -= this.dataset.price; // 扣除金钱
    //     });
    // }

    setInterval(() => {
        for (let btn of towerBtnArr) {
            if (btn.dataset.price <= world.user.money) {
                btn.removeAttribute("disabled");
            } else {
                btn.setAttribute("disabled", "disabled");
            }
        }
    }, 100);
    //
    // document.querySelector("#tower").onclick = function () {
    //     addedBattery.push(BatteryFinally.Normal(world));
    // };
    // document.querySelector("#towerF1").onclick = function () {
    //     addedBattery.push(BatteryFinally.F1(world));
    // }
    // document.querySelector("#towerF2").onclick = function () {
    //     addedBattery.push(BatteryFinally.F2(world));
    // }
    // document.querySelector("#towerF3").onclick = function () {
    //     addedBattery.push(BatteryFinally.F3(world));
    // }
    // document.querySelector("#towerF4").onclick = function () {
    //     addedBattery.push(BatteryFinally.F4(world));
    // }
    // document.querySelector("#towerH1").onclick = function () {
    //     addedBattery.push(BatteryFinally.H1(world));
    // }
    // document.querySelector("#towerH2").onclick = function () {
    //     addedBattery.push(BatteryFinally.H2(world));
    // }
    // document.querySelector("#towerH3").onclick = function () {
    //     addedBattery.push(BatteryFinally.H3(world));
    // }
    // document.querySelector("#towerH4").onclick = function () {
    //     addedBattery.push(BatteryFinally.H4(world));
    // }
    // document.querySelector("#towerS1").onclick = function () {
    //     addedBattery.push(BatteryFinally.S1(world));
    // }
    // document.querySelector("#towerS2").onclick = function () {
    //     addedBattery.push(BatteryFinally.S2(world));
    // }
    // document.querySelector("#towerS3").onclick = function () {
    //     addedBattery.push(BatteryFinally.S3(world));
    // }
    // document.querySelector("#towerS4").onclick = function () {
    //     addedBattery.push(BatteryFinally.S4(world));
    // }
    // document.querySelector("#towerT1").onclick = function () {
    //     addedBattery.push(BatteryFinally.T1(world));
    // }
    // document.querySelector("#towerT2").onclick = function () {
    //     addedBattery.push(BatteryFinally.T2(world));
    // }
    // document.querySelector("#towerT3").onclick = function () {
    //     addedBattery.push(BatteryFinally.T3(world));
    // }
    // document.querySelector("#towerT4").onclick = function () {
    //     addedBattery.push(BatteryFinally.T4(world));
    // }
    // document.querySelector("#test").onclick = function () {
    //     console.log(world.batterys);
    // }
}



