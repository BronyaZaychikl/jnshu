$(function () { });
document.querySelector('#loading').onclick = function () {
    var name = document.getElementById("name").value;
    var pwd = document.getElementById("pass").value;
    var data = "name=" + name + "&pwd=" + pwd;
    var ajax;
        // 发送ajax 请求 需要 五步
    // （1）创建异步对象
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject('Microsoft.XMLHTTP');
    }
    ajax.onload=function() {//回调函数
        var a=JSON.parse(ajax.responseText);
        if (a.message=="success") {
            window.location.href ="http://dev.admin.carrots.ptteng.com/";
        }
        else {
            $(".load").text(a.message);
            $(".load").css("color", "#f00");
        }
    }
    // （2）设置请求的参数。包括：请求的方法、请求的url。
    ajax.open('POST', '/carrots-admin-ajax/a/login', true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // （3）发送请求
    ajax.send(data);

    //（4）注册事件。 onreadystatechange事件，状态改变时就会调用。
    //如果要在数据完整请求回来的时候才调用，我们需要手动写一些判断的逻辑。
    ajax.onreadystatechange = function () {
        // 为了保证 数据 完整返回，我们一般会判断 两个值
        if (ajax.readyState == 4 && ajax.status == 200) {
            // 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
            // 5.在注册的事件中 获取 返回的 内容 并修改页面的显示
            console.log('数据返回成功');
            // 数据是保存在 异步对象的 属性中
            console.log(ajax.responseText);
        }
    }
}

