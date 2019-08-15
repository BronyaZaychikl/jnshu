$(function () { });
var get = window.sessionStorage.a;//读取
var ne = JSON.parse(get);//重新转换为数组
var vict = "<strong>" + ne.victory + "</strong>";
console.log(vict);
$(".victory").append(vict);
var word = "<strong>" + ne.word + "</strong>";
$(".greet").append(word);
var num="<p>杀手"+ne.onenum+"人</p>"+
"<p>平民"+ne.twonum+"人</p>";
$(".people").append(num);
for (let i = 0; i < ne.num-1; i++) {
    //     <div class="record">
    //     <div class="word">
    //         <div class="time">
    //             <p class="word-left">第1天</p>
    //             <p class="word-right">0小时07分</p>
    //         </div>
    //         <div class="rec-word">
    //         <p class="word-color">晚上：5号被杀手杀死，5号是水民</p>
    //         <p class="word-color">白天：8号被全民投票投死，8号是杀手</p>
    //         </div>
    //     </div>
    // </div>
    var rec1 = " <div class=record>" +
        "<div class=word>" +
        "<div class=time>" +
        "<p class=word-left>第" + [i + 1] + "天</p>" +
        "<p class=word-right>0小时07分</p>" +
        "</div>" +
        "<div class=rec-word>" +
        "<p class=word-color>晚上：" + ne.text1[i + 1] + "</p>" +
        "<p class=word-color>白天：" + ne.text2[i + 1] + "</p>" +
        "</div>" +
        "</div>" +
        "</div>"   
    $("main").append(rec1);
}
console.log(ne)