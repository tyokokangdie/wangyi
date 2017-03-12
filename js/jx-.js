/**
 * Created by Administrator on 2016/12/8.
 */
addOnload(function () {
    var box = getElementsByClassName(document, 'jx-hotp')[0];
    var a_t = getElementsByClassName(document, 'a-t')[0];
    var a_o = getElementsByClassName(document, 'a-o')[0];
    var hot_l = getElementsByClassName(document, 'hot-l')[0];
    var hot_c = getElementsByClassName(document, 'hot-c')[0];
    var hot_r = getElementsByClassName(document, 'hot-r')[0];
    var button = getElementsByClassName(document, 'button');
    var hotImg = getElementsByClassName(document, 'hotimg');
    var change = getElementsByClassName(document, 'change')[0];
    var heart = getElementsByClassName(document, 'heart');
    var bt = getElementsByClassName(document,'bt');

    function rd(img, tit, con, zan) {
        this.Img = img;
        this.tit = tit;
        this.con = con;
        this.zan = zan;
    }


    var par1 = new rd("i/jx-images/jx-1-1.png", "【脑洞漫画吓得小红帽镰刀都掉了", "百个非常醒神的《杀气小红帽》！", "100");
    var par2 = new rd("i/jx-images/jx-2-2.jpg", "网易游戏热爱者日记：财报", "前些天朋友圈被各种Q1财报刷屏了今天是", "1021");
    var par3 = new rd("i/jx-images/jx-3-3.jpg", "网易游戏热爱者日记：公益", "不是学长大哥不懂得爱惜小朋友的身处那种地方?", "1010");
    var par4 = new rd("i/jx-images/jx-1", "《倩女幽魂》手游11月新职业来袭", "《倩女幽魂》手游11月新职业来袭！新职业男侠客登场，新增LBS定位玩法、跨服关宁，更有年末玩家盛典等你参加!", "174");
    var par5 = new rd("i/jx-images/jx-2", "迷雾世界 先锋首测", "《迷雾世界先锋首测今日开启！", "114");
    var par6 = new rd("i/jx-images/jx-3", "《来自星星的你手游浪漫归来?", "韩国正版授权，店铺经营养成手游归来自星星的你开启万圣狂欢节活动，获取限定主题套装，珍品阁超多惊喜等你邂逅！", "174");
    var par7 = new rd('i/jx-images/n1.jpg');
    var par8 = new rd('i/jx-images/n2.jpg');
    var par9 = new rd('i/jx-images/n3.jpg');
    a_t.onclick = function () {
        hot_l.children[1].children[0].innerHTML = par1.tit;
        hot_c.children[1].children[0].innerHTML = par2.tit;
        hot_r.children[1].children[0].innerHTML = par3.tit;
        hot_l.children[0].children[0].src = par1.Img;
        hot_c.children[0].children[0].src = par2.Img;
        hot_r.children[0].children[0].src = par3.Img;
        hot_l.children[1].children[2].children[0].children[1].innerHTML = par1.zan;
        hot_c.children[1].children[2].children[0].children[1].innerHTML = par2.zan;
        hot_r.children[1].children[2].children[0].children[1].innerHTML = par3.zan;
    }
    a_o.onclick = function () {
        hot_l.children[1].children[0].innerHTML = par4.tit;
        hot_c.children[1].children[0].innerHTML = par5.tit;
        hot_r.children[1].children[0].innerHTML = par6.tit;
        hot_l.children[0].children[0].src = par4.Img;
        hot_c.children[0].children[0].src = par5.Img;
        hot_r.children[0].children[0].src = par6.Img;
        hot_l.children[1].children[2].children[0].children[1].innerHTML = par4.zan;
        hot_c.children[1].children[2].children[0].children[1].innerHTML = par5.zan;
        hot_r.children[1].children[2].children[0].children[1].innerHTML = par6.zan;
    }

    for (var i = 0; i < hotImg.length; i++) {
        hotImg[i].onmouseover = function () {
            var that = this;
            animate(that, {'height': 240, 'width': 450, 'left': -15, 'top': -15})

        }
        hotImg[i].onmouseout = function () {
            var that = this;
            animate(that, {'height': 194, 'width': 400, 'left': 0, 'top': 0})

        }

    }
    var boxO = box.children[1];
    var boxT = box.children[2];
    var boxTH = box.children[3];
    var i = 0;
    var cond = [
        {
            'width': 0,
            'height': 0
        }
    ]
    change.onclick = function () {

        animate(boxO, {'height': 50, 'width': 50, 'margin': 150, 'opacity': 0.1}, function () {
            hot_r.children[0].children[0].src = par6.Img;

            animate(
                boxO, {'margin': 0, 'height': 360, 'width': 400, 'opacity': 1}), function () {

            }
        });
        animate(boxT, {'height': 50, 'width': 50, 'margin': 150, 'opacity': 0.1}, function () {
            hot_c.children[0].children[0].src = par8.Img;
            animate(
                boxT, {
                    'margin': 0,
                    'marginLeft': 400,
                    'marginRight': 400,
                    'height': 360,
                    'width': 400,
                    'opacity': 1
                }, function () {

                })
        });
        animate(boxTH, {'height': 50, 'width': 50, 'margin': 150, 'opacity': 0.1}, function () {
            hot_r.children[0].children[0].src = par9.Img;
            animate(
                boxTH, {'margin': 0, 'height': 360, 'width': 370, 'opacity': 1},
                function () {


                }
            )
        });
    }
    for (var i = 0; i < button.length; i++) {
        button[i].onmouseover = function () {
            this.style.transform = 'rotateX(360deg)';
            this.style.transition = '1s';
            this.style.backgroundColor = 'red';
            this.style.color = 'white';
        }
        button[i].onmouseout = function () {
            this.style.transform = 'rotateX(0deg)';
            this.style.transition = '1s';
            this.style.backgroundColor = '';
            this.style.color = '#A9A9A9';
        }
    }
    for (var i = 0; i < heart.length; i++) {
        heart[i].onclick = function () {

            var that = this;
            animate(that, {'fontSize': 15}, function () {
                animate(that, {'fontSize': 10})
            })
            getNextElement(that).innerHTML = getNextElement(that).innerHTML * 1 + 1;
        }
    }
});


