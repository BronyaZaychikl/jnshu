$(function () { });
var get = window.sessionStorage.a;//读取
var ne = JSON.parse(get);//重新转换为数组
var assa = $.inArray("死亡", ne.life);

for (let i = 0; i < ne.num; i++) {
   var main = "<div class=aa>" +
      "<div class=top>" +
      "<input class=tog type=button></input>" +
      "<img class=down src=css/img/down.png>" +
      "</div>" +
      "<div class=main-step>" +
      "<div class=main-bor></div>" +
      "<div class=night>" +
      "<img class=down src=css/img/night.png>" +
      "<p class=speak-one>暗杀行动</p>" +
      "</div>" +
      "<div class=day>" +
      "<img class=down src=css/img/day.png>" +
      "<p class=speak-two>请朗诵死者遗言</p>" +
      "</div>" +
      "<p class=speak-three day-word>请玩家发言</p>" +
      "<p class=speak-four >请大家进行投票审判</p>" +
      "</div>" +
      "</div>";
   $("main").append(main);
   $(".tog").eq(i).val("第" + (i + 1) + "天");

   if (ne.text1[i + 1] !== undefined) {
      var ass2 = $("<p class=col-fff></p>").text(ne.text1[i + 1]);
      $(".night").eq(i).after(ass2);
   }
   if (ne.text2[i + 1] !== undefined) {
      var ass3 = $("<p class=col-fff></p>").text(ne.text2[i + 1]);
      $(".speak-four").eq(i).after(ass3);
   }
}
var a = 0;
var b = 0;
for (let i = 0; i < ne.name.length; i++) {
   if (ne.life[i] == "存活") {
      if (ne.name[i] == "刺客") {
         a++;
      }
      else if (ne.name[i] == "平民") {
         b++;
      }
   }
}
if (a >= b) {
   ne.victory = "暗影无双";
   ne.word="万物皆虚，万事皆允，行运无常，唯影永昌！"
   var send = JSON.stringify(ne);//转换为字符串
   sessionStorage.a = send;//存入
   $(location).attr("href", "test13end.html")
}
else if (a == 0) {
   ne.victory = "光明必胜";
   ne.word="天地无极，乾坤借法，急急如律令！"
   var send = JSON.stringify(ne);//转换为字符串
   sessionStorage.a = send;//存入
   $(location).attr("href", "test13end.html")

}
$(".speak-one").on("click", function () {
   if (ne.daynum == 1) {
      $(location).attr("href", "test13body.html");
      ne.time = "黑夜";
      $(this).css("background-color", "#e2e2e2");
      ne.daynum = 2;
      var send = JSON.stringify(ne);//转换为字符串
      sessionStorage.a = send;//存入
   }
});
var anum = 1;
$(".speak-two").on("click", function () {
   if (ne.daynum == 2) {
      $(this).css("background-color", "#e2e2e2");
      alert("亡灵发表完毕");
      ne.daynum = 3;
      anum = 2;
   }
});
$(".speak-three").on("click", function () {
   if (anum == 2) {
      $(this).css("background-color", "#e2e2e2");
      alert("玩家发表完毕");
      anum = 3;
   }
});

$(".speak-four").on("click", function () {
   if (anum == 3) {
      $(location).attr("href", "test13body.html");
      ne.time = "白天";
      ne.daynum = 1;
      var send = JSON.stringify(ne);//转换为字符串
      sessionStorage.a = send;//存入
      anum = 1;
   }
});
$("#body").on("click", function () {
   $(location).attr("href", "test13look.html");
});
$("#end").on("click", function () {
   $(location).attr("href", "test13deploy.html");
});
$(".top").on("click", function () {
   $(this).siblings(".main-step").toggle();
});
for (let i = 0; i < ne.num - 1; i++) {
   $(".speak-one").eq(i).css("background-color", "#f00");
   $(".speak-two").eq(i).css("background-color", "#f00");
   $(".speak-three").eq(i).css("background-color", "#f00");
   $(".speak-four").eq(i).css("background-color", "#f00");
   $(".speak-one").eq(i).off("click");
   $(".speak-two").eq(i).off("click");
   $(".speak-three").eq(i).off("click");
   $(".speak-four").eq(i).off("click");
   $(".top").eq(i).siblings(".main-step").hide();
}
console.log(ne)


