/**
 * Created by Administrator on 2016/12/8.
 */
addOnload(function () {
    var ym_ba = document.getElementById("ym_ba");
    var as = ym_ba.children;
    for (var i = 0; i < as.length; i++) {
        as[i].onmouseover = function () {
            var ema = this.children[1];
            var emb = this.children[2];
            var emc = this.children[3];
            var emah = ema.offsetHeight;
            var embh = emb.offsetHeight;
            var emch = 277;
            animate(ema, {"top": emah});
            animate(emb, {"top": embh});
            animate(emc, {"top": emch});
        }
    }
    for (var i = 0; i < as.length; i++) {

        as[i].onmouseout = function () {
            var ema = this.children[1];
            var emb = this.children[2];
            var emc = this.children[3];
            var emah = ema.offsetHeight;
            var emch = ema.offsetHeight / 2;
            animate(ema, {"top": 0});
            animate(emb, {"top": emah});
            animate(emc, {"top": emch});
        }
    }

// ---顶部新闻---姚敏
    $("#ym_r").css("backgroundColor","white");
    $(function () {
        $("#ym_f").click(function () {
            $(this).css("backgroundColor","white");
            $("#ym_r").css("backgroundColor","");
            $("#ym_ac").animate({
                "left": "-640px"
            }, 1000)
        })
        $("#ym_r").click(function () {
            $(this).css("backgroundColor","white");
            $("#ym_f").css("backgroundColor","");
            $("#ym_ac").animate({
                "left": "0"
            }, 1000)
        })
        $()

        $("#ym_ac").children("li").each(function (index, e) {
            $(e).mouseenter(function () {
                $(this).find("em").stop().animate({"top": "200px"}, 500)
                $(this).find("h3").stop().animate({"top": "-10px"}, 500)
                $(this).find("p").stop().animate({"top": "230px"}, 500)
                $(this).find("i").stop().animate({"top": "0"}, 500)
            })
            $(e).mouseleave(function () {
                $(this).find("em").stop().animate({"top": "320px"}, 500)
                $(this).find("h3").stop().animate({"top": "40px"}, 500)
                $(this).find("p").stop().animate({"top": "150px"}, 500)
                $(this).find("i").stop().animate({"top": "-60px"}, 500)
            })
        })

    })
});


