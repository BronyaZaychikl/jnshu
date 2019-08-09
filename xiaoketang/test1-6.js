// var a = 2;
// function showA() {
//     var a = 5;
//     console.log(a);  // 变量对象中没有保存a
    
// }
// showA();






function Fn1() {
    var a = 1;
    var b = 2;
    function Fn2() {
        
        console.log(b);
    }
    Fn2();// 当程序执行到此时

}
Fn1();










// function showColor () {
//     var  color = 'red';
//  }
//  showColor(); // red
//  console.log(color); // color is undefined





// function test() {
//     console.log(foo);
//     console.log(bar);
//     var foo = 'Hello';
//     console.log(foo);
//     var bar = function () {
//         return 'world';
//     }
//     function foo() {
//         return 'ok';
//     }
// }
// test();











function test() {
    var arr = new Array();
     for (let i = 0; i <6; i++) {
         arr[i] = function() {
             return i; //当var变为let时，i只在for循环内有效
         }
     }
     return arr;
 }
 var arrObj = new test();
 console.log(arrObj[0]());