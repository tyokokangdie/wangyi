/**
 * Created by Administrator on 2016/12/9.
 */
//1主体按钮解决 B
var wbbNav=document.getElementsByClassName("wbb-nav")[0];
var nav1 = document.getElementsByClassName("nav-item");
var rangs2=wbbNav.getElementsByClassName("rang2");
var breath=document.getElementById("breath");
for(var i=0;i<nav1.length;i++ ){
    nav1[i].index=i;
    nav1[i].onmouseover=function(){
        for(var i= 0;i<nav1.length;i++){
            animate(nav1[i].firstElementChild, {"opacity": 0})
            animate(nav1[i].lastElementChild, {"opacity": 0})
            animate(nav1[i].firstElementChild.nextElementSibling, {"opacity": 1})

        }
        animate(this.firstElementChild, {"opacity": 1 })
        animate(this.lastElementChild, {"opacity": 1})
        animate(this.firstElementChild.nextElementSibling, {"opacity": 0})
    }
    nav1[i].onmouseout=function(){
        animate(this.firstElementChild, {"opacity": 0 })
        animate(this.lastElementChild, {"opacity": 0})
        animate(this.firstElementChild.nextElementSibling, {"opacity": 1})
    }
}

//主体按钮解决 E
//主体中 首页按钮特效b
$(function(){
    $(".nav-index s").mouseenter(function () {
        $(this).fadeTo(100,1)
        $(this).siblings("span").css({"color":"black"})

    });
    $(".nav-index s").mouseleave(function () {
        $(this).stop().fadeTo(100,0)
        $(this).siblings("span").css({"color":"white"})


    });

})
var curIndex = 0; //当前index
//  alert(imgLen);
// 定时器自动变换2.5秒每次
var autoChange = setInterval(function(){
    if(curIndex < $(".tempWrap li").length-1){
        curIndex ++;
    }else{
        curIndex = 0;
    }
    //调用变换处理函数
    changeTo(curIndex);
},2500);

$(".slide-box-nav").find("span").each(function(item){
    $(this).hover(function(){
        clearInterval(autoChange);
        changeTo(item);
        curIndex = item;
    },function(){
        autoChange = setInterval(function(){
            if(curIndex < $(".slide-box-nav span").length-1){
                curIndex ++;
            }else{
                curIndex = 0;
            }
            //调用变换处理函数
            changeTo(curIndex);
        },2500);
    });
});
function changeTo(num){
    $(".tempWrap").find("li").removeClass("show").hide().eq(num).fadeIn().addClass("show");
    $(".slide-box-nav").find("span").removeClass("indexOn").eq(num).addClass("indexOn");
}

//setInterval(function(){animate($("#slide-wrap")[0],{"left":-336})},2000)
//主体中 首页按钮特效E

//呼吸灯B
  var bre=true;
setInterval(function(){
    if(bre){
        //breath.style.opacity=0;
        animate1(breath,{"opacity":0})
        bre=false;
    }
    else{
        //breath.style.opacity=1;
        animate2(breath,{"opacity":1})
        bre=true;
    }

},1000)
//呼吸灯B
//导航右面B
$(function() {
    $(".wbb-topBar-right a").mouseenter(function () {
        $(this).siblings("em").animate({"height":3}, 1000)
        $(this).css("color","#bc2e2e")
        $(this).css("background","#EEE")

    })
    $(".wbb-topBar-right a").mouseleave(function () {
        $(this).siblings("em").animate({"height":0}, 10)
        $(this).css("color","#000")
        $(this).css("background","#FFF")
    })
    $("#wbb-topBar-menu span").mouseenter(function () {
        $("#wbb-body").animate({"height":300}, 1000)
    })
    $("#wbb-topBar-menu span").mouseleave(function () {
        $("#wbb-body").animate({"height":0}, 1000)
    })

    //导航右面E
    //主体内容开始 par2
    $(".nav-item-01").click(function(){
        $(".part-02").animate({"opacity":1},1000)
    })
    //主体内容结束par2
//新闻栏特效B
    $(".txt-list a").mouseenter(function(){
        $(this).find(".border-t").animate({"width":269},200,function(){
            $(this).siblings(".border-l").animate({"height":30},200,function(){
                $(this).siblings(".border-b").animate({"width":269},200)
            })
        })
    })
    $(".txt-list a").mouseleave(function(){
        $(this).find(".border-t").animate({"width":0},200,function(){
            $(this).siblings(".border-l").animate({"height":0},200,function(){
                $(this).siblings(".border-b").animate({"width":0},200)
            })
        })
    })
    $(".news-box h2").click(function(){
        $(".news-box").animate({"height":0,"width":0},1000)
    })
    $(".btn-more").click(function(){
        $(".news-box").animate({"height":484,"width":312},1000)
    })

//新闻栏特效E
})







//把 任意对象 的 任意数值属性 改变为 任意的目标值
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {//opacity要特殊处理
                //opacity没有单位 参与运算自动转换成数值 所以不用parsetInt
                //取值范围 0-1 0.1 0.33 33 为了让以前的计算公式生效 要扩大100倍
                var leader = getStyle(obj, k) *100;
                var target = json[k] *100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = (leader + step);
                obj.style[k] = leader/100;//opacity没有单位
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];//层级不需要渐变 直接设置即可
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15);
}
function animate2(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {//opacity要特殊处理
                //opacity没有单位 参与运算自动转换成数值 所以不用parsetInt
                //取值范围 0-1 0.1 0.33 33 为了让以前的计算公式生效 要扩大100倍
                var leader = getStyle(obj, k) *100;
                var target = json[k] *100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = (leader + step);
                obj.style[k] = leader/100;//opacity没有单位
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];//层级不需要渐变 直接设置即可
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15);
}
function animate1(obj, json, fn) {
    //clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {//opacity要特殊处理
                //opacity没有单位 参与运算自动转换成数值 所以不用parsetInt
                //取值范围 0-1 0.1 0.33 33 为了让以前的计算公式生效 要扩大100倍
                var leader = getStyle(obj, k) *100;
                var target = json[k] *100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = (leader + step);
                obj.style[k] = leader/100;//opacity没有单位
            }
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            //clearInterval(obj.timer);

            if (fn) {
                fn();
            }
        }
    }, 100);
}
//全部属性都到达目标值才能清空
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}