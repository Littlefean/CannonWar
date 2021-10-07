function Orderprocessing1() {
    let vid = document.getElementById("myVideo");//获取音频对象
    let start = 0;//定义循环的变量
    let times = 3;//定于循环的次数
    vid.addEventListener("ended", function () {
        vid.play();//启动音频，也就是播放
        start++;//循环
        start === times && vid.pause();//也就是当循环的变量等于次数的时候，就会终止循环并且关掉音频
    });
    vid.play();//启动音频，用于第一次启动
}
