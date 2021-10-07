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
// 新一轮
const SOUND_bigPika = document.getElementById("bigPika");

// 开枪声
const SOUND_firing4 = document.getElementById("firing4");
const SOUND_ArtilleryLunch = document.getElementById("ArtilleryLunch");
const SOUND_ArtilleryBomb = document.getElementById("ArtilleryBomb");
const SOUND_MissileLunch = document.getElementById("MissileLunch");
const SOUND_MissileBomb = document.getElementById("MissileBomb");
const SOUND_Zap = document.getElementById("zap");

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
        SOUND_bigPika.play();
    }

    static playArtilleryLunch() {

    }

    static ArtilleryBomb() {

    }

    static MissileLunch() {

    }

    static MissileBomb() {

    }

    static Zap() {
        SOUND_Zap.play();
    }
}
