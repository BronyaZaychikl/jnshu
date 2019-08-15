$(function () { });
var get = window.sessionStorage.a;//读取
var ne = JSON.parse(get);//重新转换为数组
var neNum = ne.name.length;
var one=0;
var two=0;
for(let i=0;i<ne.name.length;i++) {
    if (ne.name[i]=="刺客") {
    one++;

    }
    else if (ne.name[i]=="平民") {
        two++;

    }

}
ne.onenum=one;
ne.twonum=two;
var send = JSON.stringify(ne);//转换为字符串
sessionStorage.a = send;//存入
for (let i = 0; i < neNum; i++) {
    $("main").append("<div class=box></div>");
}
$(".box").append("<div class=box-one></div>");
$(".box").append("<div class=box-two></div>");
$(".box-one").append("<div class=word-one></div>");
$(".box-one").append("<div class=word-two></div>");
$(".box-two").append("<div class=bg-dagger></div>");
for (let i = 0; i < neNum; i++) {
    $(".word-one").eq(i).text(ne.name[i]);
    $(".word-two").eq(i).text(i + 1 + "号");
    if (ne.life[i] == "死亡") {
        var die = $(".word-one").eq(i).css("background-color", "#333");
    }
}
$("a").click(function () {
    $(location).attr("href", "test13record.html");
});

