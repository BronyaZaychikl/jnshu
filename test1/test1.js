
function aaa() {
    var arr = document.getElementsByTagName("p");
    var col = [];
    for (var i = 0, n; n = arr[i]; ++i) {
        col.push(n);
    }
    var result = [];
    var ranNum = 3;
    for (var i = 0; i < ranNum; i++) {
        var ran = Math.floor(Math.random() * (col.length - i));
        result.push(col[ran]);
        col[ran] = col[col.length - i - 1];
    }
    for (var i = 0; i < 9; i++) {//每次随机颜色时遍历将背景设置好
        document.getElementsByTagName('p')[i].style.backgroundColor = "orange";
    }
    result[0].style.backgroundColor = randomColor();
    result[1].style.backgroundColor = randomColor();
    result[2].style.backgroundColor = randomColor();
    function randomColor() {
        var col = "#";
        for (var i = 0; i < 6; i++) {
            col += Math.floor(Math.random() * 16).toString(16);
        }
        return col;
    }
}
var btn1 = document.getElementsByTagName("button")[0];
var btn2 = document.getElementsByTagName("button")[1];
var aq;
function abc() {
    aq = window.setInterval("aaa()", 500);
    btn1.disabled = true;
    btn1.style.backgroundColor = "orange";
    btn2.style.backgroundColor = "#fff";
    btn1.style.color = "#333";
}
function abd() {
    window.clearInterval(aq);
    for (var i = 0; i < 9; i++) {//每次随机颜色时遍历将背景设置好
        document.getElementsByTagName('p')[i].style.backgroundColor = "orange";
    }
    btn1.disabled = false;
    btn2.style.backgroundColor = "orange";
    btn1.style.backgroundColor = "#fff";
}
