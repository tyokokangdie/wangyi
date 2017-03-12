addOnload(function () {
    var reLoad = document.getElementById("reLoad");
    var list1 = document.getElementById("gameslist-l-l");
    var list2 = document.getElementById("gameslist-l-r");
    var list3 = document.getElementById("gameslist-r-l");
    var list4 = document.getElementById("gameslist-r-r");
    var hotContent = document.getElementById("hotContent");

//热点手游内容
    var hotMess = [
        [{
            "topTxt": "游戏类型:格斗游戏", "topScore": "玩家评分:☆☆☆☆☆", "topTime": "2000W+下载",
            "img": "game1.jpg", "title": "《影之刃》", "gametxt": "年度大版“鬼差试炼”今日出鞘，惊心动魄邀你一战！"
        },
            {
                "topTxt": "游戏类型:MOBA+RGB", "topScore": "玩家评分:☆☆☆☆☆", "topTime": "500W+下载",
                "img": "game2.jpg", "title": "《乱斗西游2》", "gametxt": "《乱斗西游2》网易超人气英雄对战手游，“全英雄觉醒”正式上线，邀你来战！"
            },
            {
                "topTxt": "游戏类型:格斗游戏", "topScore": "玩家评分:☆☆☆☆☆", "topTime": "2000W+下载",
                "img": "game3.jpg", "title": "《率土之滨》", "gametxt": "《率土之滨》：全自由沙盘战略，寸土必争的乐趣"
            }],

        [{
            "topTxt": "游戏类型:格斗游戏", "topScore": "玩家评分:☆☆☆☆☆", "topTime": "2000W+下载",
            "img": "game4.jpg", "title": "《倩女幽魂》",
            "gametxt": "《倩女幽魂》手游12月全新版本来袭！新职业男侠客登场，多样社交新增LBS玩法，共享玩家定位，首开跨服关宁，等你挑战！"
        }, {
            "topTxt": "游戏类型:MOBA+RGB", "topScore": "玩家评分:☆☆☆☆☆", "topTime": "500W+下载",
            "img": "game5.jpg", "title": "《率土之滨》", "gametxt": "《率土之滨》：全自由沙盘战略，寸土必争的乐趣"
        }, {
            "topTxt": "游戏类型:格斗游戏", "topScore": "玩家评分:☆☆☆☆☆", "topTime": "2000W+下载",
            "img": "game6.jpg",
            "title": "《天骄铁骑》",
            "gametxt": "大型3D国战MMO手游，首次安卓先锋测试，刀锋所至，强权降临！"
        }],

        [{
            "topTxt": "游戏类型:格斗游戏",
            "topScore": "玩家评分:☆☆☆☆☆",
            "topTime": "2000W+下载",
            "img": "game7.jpg",
            "title": "《劲舞团》",
            "gametxt": "《劲舞团》手游真爱季系列活动进行中，在这个初冬用浓浓爱意温暖你的心~"
        },
            {
                "topTxt": "游戏类型:MOBA+RGB", "topScore": "玩家评分:☆☆☆☆☆", "topTime": "500W+下载",
                "img": "game8.jpg", "title": "《天下》手游", "gametxt": "《天下》手游双11庆典现已开启！即刻登录限时领橙色永久称谓，金牛礼盒无限大放送！"
            },
            {
                "topTxt": "游戏类型:格斗游戏", "topScore": "玩家评分:☆☆☆☆☆", "topTime": "2000W+下载",
                "img": "game9.jpg", "title": "《阴阳师》", "gametxt": "《阴阳师》首部资料片“魑魅之卷”资料片今日上线，魑魅之卷 绝美启幕"
            }],
    ]


    var timer = null;

    function hotboxes(a) {
        var i = -1;
        clearInterval(timer);
        timer = setInterval(function () {

            var hotboxs = document.createElement("div");
            hotboxs.className = "hotbox fl";
            hotContent.appendChild(hotboxs);

            animate(hotboxs, {opacity: 1}, function () {
                hotboxs.innerHTML = '<div class="hotbox fl">' +
                    '<a href="#" target="_blank" class="gameTop hide">' + '<div class="erweima">' +
                    '<img src="i/wzg-i/erweima' + i + '.jpg" alt=""/>' +
                    '</div>' +
                    '<div class="topTxt">' +
                    '<p>' + a[i].topTxt + '</p>' +
                    '<p>' + a[i].topScore + '</p>' +
                    '<p>' + a[i].topTime + '</p>' +
                    '</div>' +
                    '</a>' +
                    '<a href="#" target="_blank" class="gameImg">' +
                    '<img src="i/wzg-i/' + a[i].img + '" alt=""/>' +
                    '</a>' +
                    '<p class="gameTitle">' + a[i].title + '</p>' +
                    '<p class="gametxt">' + a[i].gametxt + '</p>' +
                    '<a href="#" target="_blank" class="gw-link topLink hide ac">进入官网</a>' +
                    '<a href="#" target="_blank" class="gw-link botLink  ac">进入官网</a>' +
                    '</div>';

                $(function () {
                    $(".gameImg").mouseenter(function () {
                        getPreviousElement(this).className = "gameTop";
                        animate(getPreviousElement(this), {top: 0});
                    })

                    $(".gameTop").mouseleave(function () {
                        animate(this, {top: -176});
                    })
                    $(".botLink").mouseenter(function () {
                        getPreviousElement(this).className = "gw-link topLink ac";//兼容性
                        this.style.color = "white";

                        animate(getPreviousElement(this), {bottom: 15, height: 30});//兼容性
                    })
                    $(".botLink").mouseleave(function () {
                        this.style.color = "#9f9f9f";
                        getPreviousElement(this).style.bottom = "45px";//兼容性
                        getPreviousElement(this).style.height = "0";//兼容性
                    })

                })


            });

            i++;

            if (i === a.length - 1) {
                clearInterval(timer);

            }


        }, 50);

    }


    hotboxes(hotMess[0]);

//换一批切换动画
    function wzgReload() {
        animate(hotContent, {opacity: 0}, function () {
            hotContent.innerHTML = "";
            animate(hotContent, {opacity: 1}, hotboxes(hotMess[m]))
        })
    }

//点击换一批
    var m = 0;
    reLoad.onclick = function () {
        m++;
        if (m >= 3) {
            m = 0;
            wzgReload()
        }
        wzgReload()
    }

//游戏列表
    var gllMess = ["梦幻西游电脑版", "天下3", "大话2经典版", "天谕", "西楚霸王", "新倩女幽魂", "大话2免费版", "新大话3经典版", "新大话3免费版", "镇魔曲", "大唐无双零", "龙魂时刻", "武魂2", "精灵传说", "斩魂", "新飞飞", "魔兽世界", "暗黑破坏神3"];

    var glrMess = ["守望先锋", "突击英雄", "夺宝联盟", "无尽战区", "战意", "战网", "风暴英雄", "星际争霸Ⅱ", "英雄三国", "炉石传说"
    ];

    var grlMess = ["梦幻西游手游", "大话西游手游", "倩女幽魂手游", "阴阳师", "率土之滨", "Raven：掠夺者", "功夫熊猫3手游", "乱斗西游2", "梦幻西游无双版", "西游神魔决", "时空之刃", "梦想星城", "乖离性百万亚瑟王", "百将行", "有杀气童话"];

    var grrMess = ["天下手游", "Minecraft我的世界", "我守护的一切", "终结者2官方手游", "大话西游热血版", "镇魔曲手游", "大唐无双手游", "曙光先锋", "魔法禁书目录", "三少爷的剑", "我朝有马", "异次元战姬", "永远的7日之都", "大航海之路", "陆小凤传奇", "劲舞团", "大富翁9", "永恒文明", "魂之幻影", "无限战争", "光明大陆", "迷雾世界", "荆棘王座", "重装突击", "天骄铁骑", "功夫熊猫官方手游", "猫和老鼠官方手游", "貂蝉的移动城堡", "小时代官方游戏", "妖刀少女异闻录", "皇牌机娘", "狩猎纪元", "秘宝猎人", "格罗亚传奇", "无限幻斗", "黑暗启元", "倩女幽魂录", "永恒边境", "元气战姬学院", "无尽神域", "小李飞刀", "大唐游仙记", "飞刀又见飞刀", "天下HD", "天下X", "天下勇士x", "勇士城堡", "风暴斩魂手游版", "热血办公室", "星际总动员", "魔天记", "末日孤舰", "蛋糕物语", "雨血：影之刃", "弹弹猴", "圣灵觉醒", "命运起源", "口袋侏罗纪", "忍者必须死2", "邪恶古堡", "童话大冒险", "暴走骑士团", "联盟传说", "契约兵团", "神魔劫", "火拼萌萌消", "超能动物联盟", "将临天下", "坦克连", "魔塔学院", "蘑菇战争", "萌王EX", "千岛物语", "迷你西游", "绝代双骄", "来自星星的你", "主公莫慌", "烽火王师", "实况俱乐部", "魔霸风暴", "伏魔咒", "花语月惊梦", "十万个女妖精"]


    getList(gllMess, 3, 7, list1);
    getList(glrMess, 0, 4, list2);
    getList(grlMess, 8, null, list3);
    getList(grrMess, 0, 24, list4);

//生成游戏列表函数
    function getList(a, b, c, d) {
        for (var i = 0; i < a.length; i++) {
            var lis = document.createElement("li");
            d.appendChild(lis);
            if (i < b) {
                lis.innerHTML = '<a href="#">' + a[i] + '</a>' + '<em class="icon-H">' + '</em>';
            } else if (i < c) {
                lis.innerHTML = '<a href="#">' + a[i] + '</a>' + '<em class="icon-N">' + '</em>';
            } else {
                lis.innerHTML = '<a href="#">' + a[i] + '</a>';
            }
        }
    }
});

