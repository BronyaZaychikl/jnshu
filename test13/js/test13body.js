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
}
// for (i=0;i<5;i++) {
// $(".box").eq(i).attr("id","box"+[i]);
// }
// $(".box").each(function () {
//     $(this).attr('id', "box" + $(this).index());
// })
if (ne.time == "黑夜") {
    $("body").css("background-color", "#f00");
}
else {
    $("body").css("background-color", "#29bde0");
}
for (let i = 0; i < neNum; i++) {
    if (ne.life[i] == "死亡") {
        var die = $(".word-one").eq(i).css("background-color", "#333");
    }
    $(".bg-dagger").eq(i).click(function () {
        if (ne.time == "黑夜" && ne.name[i] == "刺客") {
            alert("大哥！自己人");
        }
        else if (ne.life[i] == "死亡") {
            alert("大哥！别鞭尸")
        }
        else {
            var dieti = $(".word-one").eq(i).css("background-color", "#333");
            ne.life.splice($.inArray("存活", ne.life, i), 1, "死亡");
            if (ne.time == "黑夜") {
                var word1 = (i + 1) + "号玩家死于暗杀,身份是" + ne.name[i];
                ne.text1[ne.num] = word1;
                var send = JSON.stringify(ne);//转换为字符串
                sessionStorage.a = send;//存入
            }
          else  if (ne.time == "白天") {
                var word2 = (i + 1) + "号玩家死于投票,身份是" + ne.name[i];
                ne.text2[ne.num] = word2;
                ne.num++;
                var send = JSON.stringify(ne);//转换为字符串
                sessionStorage.a = send;//存入
            }
            $("a").click(function () {
                $(location).attr("href", "test13record.html");
            });
            $(".bg-dagger").off("click");

        }
    });

}
