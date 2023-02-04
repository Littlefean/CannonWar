/**
 *
 * by littlefean
 */

// 主背景音乐
const SOUND_BGM = document.getElementById("bgm");
// 战争背景音乐
const SOUND_WAR_BGM = document.getElementById("warBgm");
SOUND_WAR_BGM.addEventListener("ended", function () {
    SOUND_WAR_BGM.play();
})


class Sounds {
    /**
     * 切换背景音乐
     * @param bgm 字符串 main war
     */
    static switchBgm(bgm) {
        switch (bgm) {
            case "main":
                SOUND_WAR_BGM.pause();
                SOUND_BGM.play();
                break;
            case "war":
                SOUND_BGM.pause();
                SOUND_WAR_BGM.play();
                break;
        }
    }

    static playNewMonsterFlow() {
        new Audio("sound/号角.mp3").play();
    }

    static playArtilleryLunch() {

    }

    static ArtilleryBomb() {

    }

    static MissileLunch() {

    }

    static MissileBomb() {

    }
}
