// //sessionStorage 示例  (保存一个会话周期:从打开浏览器——到关闭浏览器窗口)
// function saveStorage(id){
//     var target=document.getElementById(id);
//     var str=target.value;
//     sessionStorage.setItem("message",str);
//     //或者sessionStorage.message=str;
// }
// function loadStorage(id){
//     var target=document.getElementById(id);
//     var msg=sessionStorage.getItem("message");
//     //或者var msg=sessionStorage.message;
//     target.innerHTML=msg;
// }
// //localStorage 示例(可永久保存)    
// function saveStorage(id){
//     var target=document.getElementById(id);
//     var str=target.value;
//     localStorage.setItem("message",str);
//     //或者localStorage.message=str;
// }
// function loadStorage(id){
//     var target=document.getElementById("msg");
//     var msg=localStorage.getItem("message");
//     //或者var msg=localStorage.message;
//     target.innerHTML=msg;
// }

router.beforeEach((to,from,next)=>{
    const name = localStorage.getItem('name')
    if( name || to.path === '/login' ){
      //如果有   /  -->  /home
      next()
    }else{
      next('/login')
    }
})