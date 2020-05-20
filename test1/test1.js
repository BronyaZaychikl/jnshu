
function aaa() {
    var arr = document.getElementsByTagName("p");//取三个随机格子
    var ass = [];
    for (var i = 0; i < 9; i++) {
        ass[i] = arr[i];
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
//js检测数据类型
// function a(obj){
//     return typeof(obj)=="string";
// }
// alert(a(123));
// alert(a("acbc"));

//自定义原型链的方法进行平均值计算
// Array.prototype.average = function () {
//     var b = 0;
//     var average=0;
//     for (let i = 0; i < this.length; i++)
//     b += this[i];
//     average=b/this.length;
//     return average;
// }
// var arr = [1, 2, 3, 4, 5];
// var avg = arr.average();
// console.log(avg);



//   var url = "https://jobs.51job.com/shenzhen-baq/113561919.html?s=01&t=0"

// function searchParams(url) {
// var jsonList = {};
// if (url.indexOf('?') != -1) {
// const search = url.split('?')[1].split('&');
// console.log(search)
// for (var i = 0; i < search.length; i++) {
// jsonList[search[i].split('=')[0]] = search[i].split('=')[1]
// }
// }
// return jsonList;
// // console.log(JSON.stringify(jsonList))
// }
// console.log(searchParams(url));

// var prom = new Promise((resolve, reject) => {
//     // 请在这里补充代码，使得2秒钟后，then()中的console.log出来'haidian'
    
//   })
//   prom
//     .then(data => {
//       console.log(data.district)
//     })
//     .catch(err => {
//       console.warn(err)
//     })

loadImage('http://www.taikang.com/images/index/tshapp.jpg')
  .then(area => console.log(`图片的面积是${area}`))
  .catch(url => console.warn(`无法加载位于${url}的图片`))

function loadImage(url) {
  // 补充这个函数

}