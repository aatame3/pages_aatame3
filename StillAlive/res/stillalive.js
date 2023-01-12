// still-alive-web: the script
// https://github.com/SDSkyKlouD/still-alive-web

const CREDIT_DATA = [		// refer to dev_data/credits.txt
    ">LIST FRIENDS",
	"",
	"",
	"Sニッケル",
	"Dr․kokko",
	"Druzhina（ドルジーナ）",
	"フカミ_",
	"Tommy222",
	"poti（ポティ）",
	"ZAKKA_13",
	"りあもん",
	"Cronus_6 95fb",
	"モリモリ森田 8cb1",
	"akashin0",
	"つっぺカイザー",
	"犬のジョン",
	"久篠 向日葵",
	"tori29suki",
	"絵遊na kuri",
	"hauru 1c9b",
	"カパル 3065",
	"흰앵초 e604",
	"GUNǃ",
	"綾鷹ジャンキー f0b3",
	"K0TSUK1",
	"betazan",
	"いっぽん⁄ipponn",
	"ぱちさん",
	"nekobus_17",
	"ぽにてすきー",
	"amamiyayaya jp",
	"kurodabird",
	"onte",
	"S․Chiba",
	"Mrarai33",
	"miyagi․riyou eefb",
	"Satoban",
	"Jianrenshong",
	"penpen06",
	"ぎぐ⁄Gigu",
	"Kazuki7 cf44",
	"mijukumono72",
	"YamaYaN",
	"にゃんこ-nyanko-",
	"Mattya_47",
	"ebimaru",
	"takechang",
	"ぱるめ⁄parume",
	"らいこん",
	"IBOLABO",
	"かわみな",
	"あんこもち",
	"KINNIKU-",
	"Tyakky＠もふどるっ！",
	"Nourence",
	"KonagayaMisora",
	"Isotope_",
	"ちゃる。",
	"ken_pika",
	"・黒いサイコロ・",
	"pranachan",
	"いくユフラン",
	"Joseph（ジョセフ）",
	"Las_Argeti",
	"ngymosm",
	"Inuinu_",
	"やまと yamato",
	"はりやまみかん",
	"mochi666",
	"Tsukimi Luna",
	"汚米パスタ",
	"kazukazu0331",
	"かに",
	"Tsukune Yuki",
	"おがちゃん",
	"約三分 About3m",
	"そい猫_vrc",
	"オムカフェ",
	"hiro124",
	"ざるる・zaruru",
	"おつまち",
	"∗Melufell∗",
	"okeihan13",
	"Mixed ⁄ みくすど",
	"toireman",
	"GNJ（ぎんじ）",
	"藍乃亜土（Aino Ado）",
	"EliMii",
	"Liry24",
	"ღみけღ",
	"ふゆあいす",
	"Frostia_Lilia",
	"onntama",
	"sup_sato",
	"りんご飴",
	"ニャンコ先生_1224",
	"ちゃらら",
	"たけやん",
	"しゃけ（Syake）",
	"-浮気猫-",
	"junster09",
	"taka7n",
	"円周率＠ensyuritu",
	"Garacsy",
	"syaku_nage1341",
	"mashiro153",
	"akiya_753",
	"shibuichi",
	"きりみさん",
	"P4L-DPI750-",
	"MomijiKureha",
	"Teo テオ",
	"しおうめ",
	"和最中 （Wa_Monaka）",
	"Lilium・Noir",
	"Roselica・Noir",
	"ノラ狐੭ミラ",
	"けんぐちゃんぐ",
	"クロ_kuro",
	"ゆてちゃん",
	"RɘTLiF",
	"uehara_ai",
	"pdbqbqbq",
	"hame_taro",
	"うぃんぐまん",
	"tt0123z",
	"サントス＠初心に帰る",
	"kitajima3",
	"Joka0w0",
	"名張夏希_なばりなつき_",
	"NullPo_ぬるぽ",
	"sasamine",
	"yama31257",
	"ハサハサ",
	"Chomusukesan",
	"Azami 2469",
	"ROID0609",
	"はくろ_JP",
	"ハムの人",
	"やんくん",
	"りせるくん",
	"みー＜ん",
	"NOEEEEE",
	"Exzx",
	"戦場の白い鷹",
	"shalltea3",
	"溶けた猫",
	"K準急（K_sub_Exp）",
	"しらさぎ",
	"うまむすめやってる陰キャ死ね",
	"tarechi",
	"hallkyone",
	"Roadcrosser",
	"木の娘さん ",
	"",
	"",
	"",
	"",
 	"'Still Alive' by:",
	"Jonathan Coulton",
	"",
	"",
	"",
 	"Voices:",
	"Ellen McLain - GlaDOS, Turrets",
	"Mike Patton - THE ANGER SPHERE",
	"",
	"",
	"",
	"Voice Casting:",
	"Shana Landsburg\Teri Fiddleman",
	"",
	"",
	"",
	"",
	"Voice Recording:",
	"Pure Audio, Seattle, WA",
	"",
	"",
	"",
	"",
	"Voice recording",
	"scheduling and logistics:",
	"Pat Cockburn, Pure Audio",
	"",
	"",
	"",
	"",
	"Translations:",
	"SDL",
	"",
	"",
	"",
	"",
	"Crack Legal Team:",
	"Liam Lavery",
	"Karl Quackenbush",
	"Kristen Boraas",
	"Kevin Rosenfield",
	"Alan Bruggeman",
	"Dennis Tessier",
	"",
	"",
	"",
	"Thanks for the use of their face:",
	"Alesia Glidewell - Chell",
	"",
	"",
	"",
	"Special thanks to everyone at:",
	"Alienware",
	"ATI",
	"Dell",
	"Falcon Northwest",
	"Havok",
	"SOFTIMAGE",
	"and Don Kemmis, SLK Technologies",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"THANK YOU FOR FRIENDSHIP",
	"IN THIS",
	"VRCHAT!!",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	""
];
const CREDIT_CHARACTER_VELOCITY_MS = 68.623562; // 68.623562ms according to Portal's game data..?
let creditCurrentPosition = 0;

const TERMINAL_CURSOR_BLINK_INTERVAL = 300;
let terminalCursorElem = $("<span id='terminal_cursor'>_</span>");
let terminalCreditCursorElem = $("<span id='terminal_cursor_credit'>_</span>");

let gettingfaster = false;

positionTerminalCursor($(".container_lyrics_before_loading>span"));
startBlinkTerminalCursor();
setTimeout(function() {
    for(let i = 0, len = 16; i < len; i++) $(".container_credits").append("<span class='row row" + i + "' ></span>" + (i != len - 1 ? "<br class='force-display'>" : ""));
    terminalCreditCursorElem.appendTo($(".container_credits"));
    startBlinkCreditTerminalCursor();
}, TERMINAL_CURSOR_BLINK_INTERVAL);

$("#stillalive_bgm").on("canplaythrough", function() {
    $(".container_lyrics_before_loading").remove();

    $(".container_lyrics_before_mobile").css("display", "block");
    positionTerminalCursor($(".container_lyrics_before_mobile>span"));
});

$(".container_lyrics_before_mobile>a").click(function() {
    $(".container_lyrics_before_mobile").remove();

    startTypingCurrentLyrics();
    startChangeLyricsContainer();
    $("#stillalive_bgm")[0].play();
    $("#stillalive_bgm")[0].muted = true;

    setTimeout(function() {
        $("#stillalive_bgm")[0].muted = false;
        $("#stillalive_bgm")[0].currentTime = 0;
    }, 6750);
    setTimeout(function() { startTypingCredits(); }, 9000);
});

$("html").click(function(event) {
	let targetTagName = $(event.target)[0].tagName.toLowerCase();

    if(targetTagName !== "a" && targetTagName !== "img") toggleFullscreen();
});

function startTypingCurrentLyrics() {
    $(".container_lyrics.current").children().each(function() {
        if($(this).prop("tagName").toLowerCase() != "br") {
            if($(this).data("start") != undefined &&
                $(this).data("dur") != undefined &&
                $(this).data("text") != undefined) {
                    let that = this;

                    setTimeout(function() {
                        if($(that).data("asciiart") != undefined) changeAsciiArt($(that).data("asciiart"));
                        if($(that).hasClass("play-game")) gettingfaster = true;

                        typeOneByOne($(that),
                                    $(that).data("text"),
                                    parseInt($(that).data("dur")),
                                    $(that).data("append-br"));
                    }, parseInt($(this).data("start")));
            }
        } else if($(this).prop("tagName").toLowerCase() == "br") {
            if($(this).data("show-offset") != undefined) {
                let that = this;
                setTimeout(function() {
                    $(that).css("display", "block");
                    positionTerminalCursor($(that));
                }, parseInt($(this).data("show-offset")));
            }
        }
    });
}

function startTypingCredits() {
    if(creditCurrentPosition < CREDIT_DATA.length) {
        let curCredit = CREDIT_DATA[creditCurrentPosition];

        for(let i = 1, l = 16; i < l; i++) $(".container_credits>span.row" + (i - 1)).text($(".container_credits>span.row" + i).text());

        typeCreditOneByOne(curCredit, CREDIT_CHARACTER_VELOCITY_MS * (curCredit == "" ? 1 : curCredit.length));
        creditCurrentPosition++;
    }
}

function startChangeLyricsContainer() {
    $(".container_lyrics").each(function() {
        if($(this).data("start") != undefined) {
            let that = this;

            setTimeout(function() {
                $(".container_lyrics.current").remove();
                $(that).addClass("current");
                startTypingCurrentLyrics();

                if($(that).hasClass("celebrate_credit")) changeAsciiArtRandomly(5000);
            }, parseInt($(this).data("start")));
        }
    });
}

function typeOneByOne(targetElem, text, duration, shouldAppendBR) {
    let timeoutPerChar = duration / text.length;
    let chars = text.split("");
    let charIdx = 0;

    positionTerminalCursor($(targetElem));

    if(shouldAppendBR) timeoutPerChar = duration / (chars.length + 1);

    for(let i = 0, n = chars.length + (shouldAppendBR ? 1 : 0); i < n; i++) {
        if(chars[i] == " ") chars[i] = "&nbsp;";

        setTimeout(function() {
            if(shouldAppendBR && charIdx == chars.length) {
                let newBR = $("<br class='force-display'>");
                newBR.insertAfter($(targetElem));
                positionTerminalCursor(newBR);
            } else $(targetElem).append(chars[charIdx++]);
        }, timeoutPerChar * i);
    }
}

function typeCreditOneByOne(text, duration) {
    let targetElem = $(".container_credits>span.row15");
    $(targetElem).text("");

    if(text != "") {
        let timeoutPerChar = duration / text.length;
        let chars = text.split("");
        let charIdx = 0;

        positionCreditTerminalCursor($(targetElem));

        for(let i = 0, n = chars.length + 1; i < n; i++) {
            setTimeout(function() {
                $(targetElem).append(chars[charIdx++]);

                if(charIdx == chars.length + 1) startTypingCredits();
            }, timeoutPerChar * i);
        }
    } else setTimeout(startTypingCredits, duration);
}

function positionTerminalCursor(currentLineElem) {
    $("#terminal_cursor").remove();
    terminalCursorElem.insertAfter($(currentLineElem));
}

function positionCreditTerminalCursor(currentLineElem) {
    $("#terminal_cursor_credit").remove();
    terminalCreditCursorElem.insertAfter($(currentLineElem));
}

function startBlinkTerminalCursor() {
    return setInterval(function() {
        if(terminalCursorElem.css("display") == undefined ||
            terminalCursorElem.css("display") == "inline-block")
            terminalCursorElem.css("display", "none");
        else
            terminalCursorElem.css("display", "");
    }, TERMINAL_CURSOR_BLINK_INTERVAL);
}

function startBlinkCreditTerminalCursor() {
    return setInterval(function() {
        if(terminalCreditCursorElem.css("display") == undefined ||
            terminalCreditCursorElem.css("display") == "inline-block")
            terminalCreditCursorElem.css("display", "none");
        else
            terminalCreditCursorElem.css("display", "");
    }, TERMINAL_CURSOR_BLINK_INTERVAL);
}

function changeAsciiArt(aaname) {
    $(".container_asciiart>pre.display").removeClass("display");
    if(aaname != "clear") $(".container_asciiart>pre.asciiart_" + aaname).addClass("display");
}

function changeAsciiArtRandomly(loopdelay) {
    setTimeout(function() {
        let rand = parseInt(Math.random() * $(".container_asciiart>pre").length);
        $(".container_asciiart>pre.display").removeClass("display");
        $($(".container_asciiart>pre").get(rand)).addClass("display");

        if(loopdelay <= 800) $("html, body").addClass("gettingfasterandfaster");
        else if(loopdelay <= 2500) $("html, body").addClass("gettingfaster");

        changeAsciiArtRandomly((loopdelay <= 50 ? 50 : loopdelay - (gettingfaster ? 39 : 0)));
    }, loopdelay);
}

function toggleFullscreen() {
	let element = document.documentElement;
	let isFullscreen = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || false;
	element.requestFullscreen = element.requestFullscreen || element.webkitRequestFullscreen || element.mozRequestFullScreen || function() { return false; }
	document.exitFullscreen = document.exitFullscreen || document.cancelFullscreen || document.webkitExitFullscreen || document.webkitCancelFullscreen || document.mozCancelFullScreen || document.msExitFullscreen || function() { return false; }
	
	isFullscreen ? document.exitFullscreen() : element.requestFullscreen();
}
