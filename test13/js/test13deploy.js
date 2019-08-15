$(function () { });
var x = document.getElementById("range");
var y = document.getElementById("number");
function range() {
    y.value = x.value;
}
function btnleft() {
    if (x.value > 4) {
        x.value--;
        y.value = x.value;
    }
    else {
        alert("人数没办法减啦！");
    }
}
function btnright() {
    if (x.value < 18) {
        x.value++;
        y.value = x.value;
    }
    else {
        alert("人数没办法加啦！");
    }
}
function number() {
    if (y.value > 4 && y.value < 18) {
        x.value = y.value;
    }
    else {
        y.value = 4;
        x.value = y.value;
        alert("人数无效，请重新输入！");
    }
}
var oneText = document.getElementById("one");
var twoText = document.getElementById("two");
function text() {

    if (y.value < 7) {
        oneText.value = 1
        twoText.value = y.value - 1;
    }
    else if (y.value >= 7 && y.value < 12) {
        oneText.value = 2
        twoText.value = y.value - 2;
    }
    else if (y.value >= 12 && y.value < 16) {
        oneText.value = 3
        twoText.value = y.value - 3;
    }
    else {
        oneText.value = 4
        twoText.value = y.value - 4;
    }
}
var alldata = {
    name: [],
    life: [],
    time: "未知",
    num: 1,
    text1: [],
    text2: [],
    daynum: 1,
    vicotry: "",
    word: "",
    onenum: 1,
    twonum: 1,
    oneword: "",
    twoword: ""
}
function one() {
    var wordone = $("#word-one").val();
    var wordtwo = $("#word-two").val();
    alldata.oneword = wordone;
    alldata.twoword = wordtwo;
}

function setUp() {

    var line = [];
    var num = {};
    line.length = x.value;
    alldata.name.length = x.value;
    alldata.life.length = x.value;
    var peo = document.getElementById("people");
    var peoli;
    var limin;
    for (var i = 0; i < 18; i++) {
        if (peo.childNodes[0] != undefined) {
            peo.removeChild(peo.firstChild);
        }
    }
    for (var i = 0; i < line.length; i++) {
        peoli = document.createElement("li");
        limin = document.createTextNode("平民");
        peo.appendChild(peoli);
        line[i] = peoli.appendChild(limin);
        alldata.name[i] = "平民";
        alldata.life[i] = "存活";
    }
    if (x.value < 7) {
        var as = Math.floor(Math.random() * (x.value));
        line[as].textContent = "刺客";
        alldata.name[as] = "刺客";
    }
    else if (x.value < 12) {
        for (var i = 0; i < 2; i++) {
            var as = Math.floor(Math.random() * (x.value));
            if (!num[as]) {
                num[as] = 1;
                line[as].textContent = "刺客";
                alldata.name[as] = "刺客";
            }
            else {
                i--;
            }
        }
    }
    else if (x.value < 16) {
        for (var i = 0; i < 3; i++) {
            var as = Math.floor(Math.random() * (x.value));
            if (!num[as]) {
                num[as] = 1;
                line[as].textContent = "刺客";
                alldata.name[as] = "刺客";
            }
            else {
                i--;
            }
        }
    }
    else {
        for (var i = 0; i < 4; i++) {
            var as = Math.floor(Math.random() * (x.value));
            if (!num[as]) {
                num[as] = 1;
                line[as].textContent = "刺客";
                alldata.name[as] = "刺客";
            }
            else {
                i--;
            }
        }
    }

    var send = JSON.stringify(alldata);//转换为字符串
    sessionStorage.a = send;//存入
}
function history() {
    window.location.href = "test13.html";
}
function next() {
    window.location.href = "test13status.html";
}
