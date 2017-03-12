/**
 * Created by aksw on 2016/12/12.
 */

var timer = null;
$(function () {
    var h = $(".crossbanner").height();
    $(window).scroll(function () {
        var st = $(document).scrollTop();
        if (st >= h) {
            $(".top").css({
                "position": "fixed",
                "top": 0,
                "backgroundColor": "white"
            });
            $(".top a").css({
                "color": "black"
            })
            $(".main").removeClass("current");
        } else {
            $(".top").css({
                "position": "absolute",
                "top": 0,
                "backgroundColor": "transparent"
            });
            $(".top a").css({
                "color": "white"
            })
            $(".main").addClass("current");
        }
    })

    $(".topZc").mouseenter(function(){
        $(".topBg").animate({height:39},500)
    })

    $("#topNav > li").mouseenter(function () {
        $(this).siblings("li").removeClass("current");
        $(this).addClass("current");
    })
    $("#topNav > li").mouseleave(function () {
        $(this).removeClass();
        $("#topNav > li")[0].className = "current";
    })


    var index = 0;
//        var pindex = 0;

//        $(".circle>li").mouseenter(function () {
//            clearInterval(timer);
//            if ($(this).hasClass("small")) {
//                $(this).attr("class", "big").siblings().attr("class", "small");
//                $("#banner>li:eq(" + zindex + ")").animate({opacity: 0}, 1200).siblings().animate({opacity: 1}, 1200);
//            }
//
//        })


    var timer = setInterval(function () {
        $("#banner>li:eq(" + index + ")").animate({opacity: 0}, 2000, function () {

            $(".circle>li:eq(" + index + ")").attr("class", "small").siblings().attr("class", "big");
        }).addClass("pdex").siblings().removeClass("pdex").animate({opacity: 1}, 2000);

        index++;

        if (index > 1) {
            index = 0;
        }

    }, 2000)
});

