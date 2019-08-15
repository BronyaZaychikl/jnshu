$(function () { });
var get = window.sessionStorage.a;//读取
var ne = JSON.parse(get);//重新转换为数组
console.log(ne);
var neNum = ne.name.length;
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

