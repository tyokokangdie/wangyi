/**
 * Created by dell on 2016/12/8.
 */

var i = 1;
window.onload=function(){
    $('.a1 .ani').animate({right:352},'slow');
    $(function(){
        $('.jx-banner').on('mouseenter mouseleave',function(){
            $('.left').toggle();
            $('.right').toggle();
        });






        $('.top-r p').click(function () {
            $('.a1 .cc .fi').text('ss')
            $('#ch').toggleClass('hid')
            $('#en').toggleClass('hid')
            $('#eni').toggleClass('hid')
            $('#chi').toggleClass('hid');
            $('.dow').html() === ' 立即下载' ?

                    $('.dow').html('DOWNLOAD')


                :

                    $('.dow').html(' 立即下载')


               $('.ban1C li').each(function(i,ele){
                   var i=i+1;
                   if ($('#ch').hasClass('hid')) {
                       console.log(i);
                       $('.downclick span').html('DOWN')

                       $('.a'+i+' .cc h2').text(eval('aE'+i+'.head'));
                       $('.a'+i+' .cc p').text(eval('aE'+i+'.nei'));
                       $('.clo').html('<img src="jx-images/jx-12.png" alt=""/>');
                   }
                   else{
                       $('.downclick span').html('点我下载')

                       console.log(i);
                       $('.a'+i+' .cc h2').text(eval('aC'+i+'.head'));;
                       $('.a'+i+' .cc p').text(eval('aC'+i+'.nei'));

                       $('.clo').html('<img src="jx-images/jx-13.png" alt=""/>');

                   }
               })



        })//用each  方法 遍历 li 标签 逐个给与内容
        $('.left').click(function () {
            i--;
            if (i < 1) {
                i = 5;
            }

            console.log(i);

            $('.ban1C').children('li').addClass('hid')
            $('.a' + i + '').removeClass('hid');
            bgc();
        })//�����
        $('.right').click(function () {
            i++;
            if (i > 5) {
                i = 1;
            }

            $('.ban1C').children('li').addClass('hid')
            $('.a' + i + '').removeClass('hid');
            bgc()
        })//�ҹ���
        $('.lx').click(function () {
            $('#bacO').show();
        })//����ʧ�ܡ���
        $('.wb').on('mouseenter mouseleave', function () {
            $(this).toggleClass('wbB')
            $('.m1').toggle()
        })//�л�����ɫ�����ٺ�
        $('.qq').on('mouseenter mouseleave', function () {
            $(this).toggleClass('qqB')
            $('.m2').toggle()
        })//�л�����ɫ�����ٺ�
        $('.wx').on('mouseenter mouseleave', function () {
            $(this).toggleClass('wxB')
            $('.m3').toggle()
        })//�л�����ɫ���ٺ�
        $('.sy').on('mouseenter mouseleave', function () {
            $(this).toggleClass('xh')
        })
        $('.lx').bind('mouseenter mouseleave', function () {
            $(this).toggleClass('xh')
        })//�����»���
        $('.al-cl p').on('mouseenter mouseleave',function(){
            $(this).toggleClass('p-i')
        })//��꾭����ɫ

        $('.al-cl p').click(function () {
            $('#bacO').hide();

        }) //�رյ���С
//        �����ɫ
        $(".boxLeft h2 a").mouseenter(function(){
            $(this).attr("style","color:#35CECC;");
        })
        $(".boxLeft h2 a").mouseleave(function(){
            $(this).attr("style","color:#808080;");
        })
//        ������Ϣ�����ɫ
        $(".boxLeft  li span").mouseenter(function(){
            $(this).attr("style","color:#35CECC;");
            $(this).parent("li").children("a").children("span").attr("style","color:#35CECC;");

        })
        $(".boxLeft li span").mouseleave(function(){
            $(this).attr("style","color:#808080;");
            $(this).parent("li").children("a").children("span").attr("style","color:#333333;");
        })

        $(".boxLeft  li a span").mouseenter(function(){
            $(this).parent("a").parent("li").children("span").attr("style","color:#35CECC;");
            $(this).attr("style","color:#35CECC;");

        })
        $(".boxLeft li a span").mouseleave(function(){
            $(this).parent("a").parent("li").children("span").attr("style","color:#808080;");
            $(this).attr("style","color:#333333;");
        })
//      ����Ӵ�
        $(".boxRight .bigbox_r .borderbox .clickbox .downclick span").mouseenter(function(){
            $(this ).attr("style","font-weight:900");
        })
        $(".boxRight .bigbox_r .borderbox .clickbox .downclick span").mouseleave(function(){
            $(this ).attr("style","font-weight:300");
        })
    })




}

function chL(b, n) {
    this.head = b;
    this.nei = n;
}
var aC1 = new chL('玩的就是有品位', '');
var aE1 = new chL('Play With Yoplay', '');
var aC2 = new chL('去玩吧，把最好的交给我们', '实时关注海外十几个游戏市场；我们有最专业的游戏测评团队，百里挑一，值为您挑选佳作。');
var aE2 = new chL('Here,The best for the best', 'With the best game assessment team, we keep track of dozens of,oversee markets and search for the cr��me de la cr��me.');
var aC3 = new chL('简单的背后，是不简单', '一切都以最简约的方式向你呈现，带来极致体验；一款游戏、九个维度、三道审核，保证机型完美适配。');
var aE3 = new chL('Less is more.', 'One game, three reviews, nine criteria. Through our dedicated efforts,we present you the ultimate gaming experiences in the most simple and clear way.');
var aE4 = new chL('Sorry, we do lack something.', 'No ads, no money traps, no viruses, no addons. It’s all about the game.');
var aC4 = new chL('抱歉，有些东西确实没有', '没有广告，没有烧钱网游，还你纯净；不含病毒、插件，一切回归游戏。');
var aC5 = new chL('不是我们做的多，是世界本来就很小', '完美网络加速功能，国外游戏稳定连接；极速下载网络，即刻享受游戏快乐。');
var aE5 = new chL('Big game,small world.', 'Advanced network acceleration, stable connection, fast download. Fun has no boundaries!');
function bgc() {
    switch (i) {
        case 1:
            $('.jx-banner').css('background', '#4d6982')
            $('.dow').css('background', '#00c9db')
            $('.a1 .ani').css('right','166px')
            $('.a1 .ani').animate({right:352},'slow')
            break;
        case 2:
            $('.jx-banner').css('background', '#f47d49')
            $('.jx-banner').css('background', '#48bbea')
            $('.a2 .a2-1').css('top','492px;')
            $('.a2 .a2-1').animate({top:293},'slow')
            break;
        case 3:
            $('.jx-banner').css('background', '#ffab51')
            $('.dow').css('background', '#f47d49')

            $('.a3-1').css('top','492px')

            $('.a3-1').animate({top:328},'slow')
            break;
        case 4:
            $('.jx-banner').css('background', '#76c957')
            $('.dow').css('background', '#40b54a');

            $('.a4-1').css('top','492px')


            $('.a4-1').animate({top:315},'slow')
            break;
        case 5:
            $('.jx-banner').css('background', '#45a3d4')
            $('.dow').css('background', '#3384d0')
            $('.a5-1').css('top','492px')
            $('.a5-2').css('top','492px')

            $('.a5-2').animate({top:326},'slow',function(){
                $('.a5-1').animate({top:217},'slow')
            })

            break;

    }
}


$(function () {



})

