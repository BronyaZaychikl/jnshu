$(function () { });
var get = window.sessionStorage.a;//读取
var ne = JSON.parse(get);//重新转换为数组
var x = 0;
var y = 0;
var num = 2;
var order;
var end;
$(":button").click(function () {
    $(".main-img").toggle();
    $(".main-con").toggle();
    $(":button").toggle();

    if (x < ne.name.length-1) {
        order = "角色：" + ne.name[x];
        $(".role").text(order);
        var wordone="词组："+ne.oneword;
            var wordtwo="词组："+ne.twoword;
            if(ne.name[x]=="刺客") {
                $(".word").text(wordone);
            }
            else if(ne.name[x]=="平民") {
                $(".word").text(wordtwo);
            }
        if (y <= 0) {
            y++;
        }
        else if (y > 0) {
            var one = "查看" + num + "号身份";
            var two = "隐藏并传递给" + (num + 1) + "号";
            
            $("#num-word").text(num);
            $(".foot-one").val(one);
            $(".foot-two").val(two);
            
            num++;
            y = 0;
            x++;
        }
    }
    else {
        end="角色："+ne.name[ne.name.length-1];
        $(".role").text(end);
        console.log(ne);
        $(".foot-two").val("法官查看");
        $(".foot-two").click(function() {
            $(location).attr("href","test13look.html");
        })
        $(".foot-one").hide();
    }
});
$(".head-back,.head-close").click(function () {
    $(location).attr("href", "test13.html");
});


console.log(ne)


















