/**
 * Created by Administrator on 2016/12/8.
 */
addOnload(function () {

    //鼠标移到top-nav-in的a标签上让a标签上横条的渐渐的从左到右出现；
    var navUl = document.getElementById("top_nav_ul");
    var navAs = navUl.getElementsByTagName("a");
    var navIs = navUl.getElementsByTagName("i");
    for (var i = 0; i < navAs.length; i++) {
        navAs[i].index = i;
        navAs[i].onmouseover = function () {
            var navAsWidth = parseInt(getStyle(this, "width"));
            animate(navIs[this.index], {"width": navAsWidth});
        };
        navAs[i].onmouseout = function () {
            animate(navIs[this.index], {"width": 0});
        };
    }

    //top-open部分
    //点击按钮 让按钮的背景色 渐渐的变化，并且让背景图片也变化 然后让下面的盒子渐渐的从上而下的出来；
    var top_open = document.getElementById("top_open");
    var top_close = document.getElementById("top_close");
    var top_game = document.getElementById("top_game");
    //fadeOut(top_open, 5);
    top_open.onclick = function () {
        if (getStyle(top_open, "opacity") != 1) {
            animate(top_open, {"opacity": 1});

        } else {
            animate(top_open, {"opacity": 0}, function () {
                animate(top_close, {"height": 100});
            });
        }
    };

    //游戏列表
    var topgameUl1 = document.getElementById("topgameUl1");
    var topgameUl2 = document.getElementById("topgameUl2");
    var topgameUl3 = document.getElementById("topgameUl3");
    var topgameUl4 = document.getElementById("topgameUl4");
    var topgameUl5 = document.getElementById("topgameUl5");
    var topgameUl6 = document.getElementById("topgameUl6");
    var topgameUl7 = document.getElementById("topgameUl7");
    var topgameUl8 = document.getElementById("topgameUl8");

    var arrUl1 = ["梦幻西游电脑版", "大话2经典版", "西楚霸王", "大话2免费版", "新大话3免费版", "大唐无双零", "武魂2", "斩魂", "魔兽世界",];

    var arrUl2 = ["天下3", "天谕", "新倩女幽魂", "新大话3经典版", "镇魔曲", "龙魂时刻", "精灵传说", "新飞飞", "暗黑破坏神3"];

    var arrUl3 = ["守望先锋", "突击英雄", "夺宝联盟", "无尽战区", "战意", "战网", "风暴英雄", "星际争霸Ⅱ", "英雄三国", "炉石传说"];

    var arrUl4 = ["梦幻西游手游", "大话西游手游", "倩女幽魂手游", "阴阳师", "率土之滨", "Raven：掠夺者", "功夫熊猫3手游", "乱斗西游2", "梦幻西游无双版", "西游神魔决", "时空之刃", "梦想星城", "乖离性百万亚瑟王", "百将行", "有杀气童话"];

    var arrUl5 = ["星际总动员", "魔天记", "末日孤舰", "蛋糕物语", "雨血：影之刃", "弹弹猴", "圣灵觉醒", "命运起源", "口袋侏罗纪", "忍者必须死2", "邪恶古堡", "童话大冒险", "暴走骑士团", "联盟传说", "契约兵团", "神魔劫", "火拼萌萌消", "超能动物联盟", "将临天下", "坦克连", "魔塔学院"];

    var arrUl6 = ["Minecraft我的世界", "天下手游", "我守护的一切", "终结者2官方手游", "大话西游热血版", "镇魔曲手游", "大唐无双手游", "曙光先锋", "魔法禁书目录", "三少爷的剑", "我朝有马", "异次元战姬", "永远的7日之都", "大航海之路", "陆小凤传奇", "劲舞团", "大富翁9", "永恒文明", "魂之幻影", "无限战争", "大航海之路"];

    var arrUl7 = ["陆小凤传奇", "劲舞团", "大富翁9", "永恒文明", "魂之幻影", "无限战争", "光明大陆", "迷雾世界", "荆棘王座", "重装突击", "天骄铁骑", "功夫熊猫官方手游", "猫和老鼠官方手游", "貂蝉的移动城堡", "小时代官方游戏", "妖刀少女异闻录", "皇牌机娘", "狩猎纪元", "秘宝猎人", "格罗亚传奇", "无限幻斗"];

    var arrUl8 = ["陆小凤传奇", "劲舞团", "大富翁9", "永恒文明", "魂之幻影", "无限战争", "光明大陆", "迷雾世界", "荆棘王座", "重装突击", "天骄铁骑", "功夫熊猫官方手游", "猫和老鼠官方手游", "貂蝉的移动城堡", "小时代官方游戏", "妖刀少女异闻录", "皇牌机娘", "狩猎纪元", "秘宝猎人", "格罗亚传奇", "无限幻斗"];

    //结构生成调用
    arrUlC(arrUl1, 2, 3, topgameUl1);
    arrUlC(arrUl2, 1, 2, topgameUl2);
    arrUlC(arrUl3, 0, 4, topgameUl3);
    arrUlC(arrUl4, 9, 0, topgameUl4);
    arrUlC(arrUl5, 0, 7, topgameUl5);
    arrUlC(arrUl6, 0, 6, topgameUl6);
    arrUlC(arrUl7, 0, 6, topgameUl7);
    arrUlC(arrUl8, 0, 6, topgameUl8);

    //结构生成函数
    function arrUlC(arrul, a, b, topgameUl) {
        var ulArr = [];
        for (var i = 0; i < arrul.length; i++) {
            //差别对待  new 图标
            if (i < a) {
                var str = '<li><a href="#">' + arrul[i] + '</a><em class="top_game_em"></em><i></i></li>';
            } else if (i < b) {
                //  hot 图标
                str = '<li><a href="#">' + arrul[i] + '</a><em></em><i class="top_game_i"></i></li>';
            } else {
                // 无图标
                str = '<li><a href="#">' + arrul[i] + '</a><em></em><i></i></li>';
            }
            //利用数组处理大量字符串
            ulArr.push(str);

        }
        topgameUl.innerHTML = ulArr.join("");
    }

    var zf_index = 0;
    var rightTimer = null;
    var $index = null;
    // jQuery
    $(function () {

        $("#top_open").click(function () {
            $("#top_game").slideToggle();
        });
        // 如果鼠标移入时 停止背景图切换，移出时继续切换
        $(".arrows>.left").on("mouseenter", function () {
            clearInterval(rightTimer);
        });
        $(".arrows>.left").on("mouseleave", function () {
            playTrun();
        });
        $(".arrows>.right").on("mouseenter", function () {
            clearInterval(rightTimer);
        });
        $(".arrows>.right").on("mouseleave", function () {
            playTrun();
        });


        //点击切换背景图

        $(".arrows>.right").click(function () {
            trunBg();
            $(".zf-circle li:eq(" + zf_index + ")").addClass("circle-cruurent").removeClass("circle-cruurent-s").siblings("li").addClass("circle-cruurent-s");
        });

        //点击按钮跳转对应的背景图

        $(".zf-circle li").on("click", function () {
            $index = $(this).index();
            $("#bg-big>div:eq(" + $index + ")").fadeIn().siblings("div").fadeOut();
            $(".zf-circle li:eq(" + $index + ")").addClass("circle-cruurent").removeClass("circle-cruurent-s").siblings("li").addClass("circle-cruurent-s");
            $index = zf_index;
        });

        $(".arrows>.left").click(function () {
            $("#bg-big>div:eq(" + zf_index + ")").fadeIn().siblings("div").fadeOut();
            $(".zf-circle li:eq(" + zf_index + ")").addClass("circle-cruurent").removeClass("circle-cruurent-s").siblings("li").addClass("circle-cruurent-s");
            zf_index--;
            if (zf_index < 0) {
                zf_index = 4;
            }
        });

        playTrun();

    });

    // 轮播图控制函数
    function playTrun() {
        clearInterval(rightTimer);
        rightTimer = setInterval(function () {
            trunBg();
            $(".zf-circle li:eq(" + zf_index + ")").addClass("circle-cruurent").removeClass("circle-cruurent-s").siblings("li").addClass("circle-cruurent-s");
        }, 3000);
    }

    function trunBg() {
        $("#bg-big>div:eq(" + zf_index + ")").fadeIn().siblings("div").fadeOut();
        zf_index++;
        if (zf_index > 4) {
            zf_index = 0;
        }
    }
});