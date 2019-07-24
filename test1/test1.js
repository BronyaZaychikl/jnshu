
function aaa() {
    var arr = document.getElementsByTagName("p");//取三个随机格子
    var ass=[];
    for(var i=0;i<9;i++){
      ass[i]=arr[i];
    }
    var result = [];
    var ranNum = 3;
    for (var i = 0; i < ranNum; i++) {
        var ran = Math.floor(Math.random() * (ass.length - i));
        result.push(ass[ran]);
        ass[ran] = ass[ass.length - i - 1];
    }
    for (var i = 0; i < 9; i++) {//每次随机颜色时遍历将背景设置好
        document.getElementsByTagName('p')[i].style.backgroundColor = "orange";
    }
    var ax = [];
    for (var x = 0; x < 3; x++) {
        function aax() {//随机颜色
            var col = "#";
            for (var i = 0; i < 6; i++) {
                col += Math.floor(Math.random() * 16).toString(16);
            }
            return col;
        }
        ax[x] = aax();
        if (x > 0) {
            for (var t = 0; t <= x - 1; t++) {
                if (ax[x] == ax[t]) {
                    x--;
                }
            }
        }
    }
    result[0].style.backgroundColor = ax[0];
    result[1].style.backgroundColor = ax[1];
    result[2].style.backgroundColor = ax[2];
}

var btn1 = document.getElementsByTagName("button")[0];
var btn2 = document.getElementsByTagName("button")[1];
var aq;//重复
function abc() {
    aaa();
    window.clearInterval(aq);
    aq = window.setInterval("aaa()", 500);
    btn1.style.backgroundColor = "orange";
    btn2.style.backgroundColor = "#fff";
    btn1.style.color = "#fff";
    btn2.style.color = "orange";
}
function abd() {//停止重复
    window.clearInterval(aq);
    for (var i = 0; i < 9; i++) {//每次随机颜色时遍历将背景设置好
        document.getElementsByTagName('p')[i].style.backgroundColor = "orange";
    }
    
    btn2.style.backgroundColor = "orange";
    btn1.style.backgroundColor = "#fff";
    btn1.style.color = "orange";
    btn2.style.color = "#fff";
}
