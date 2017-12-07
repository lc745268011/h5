/**
 * Created by xycx on 2017/12/5.
 */

//swiper
var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    //mousewheel: true
    /* 初始化animate */
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});
//rem
(function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    }
)(document, window);
//music
function audio(obj) {
    var m = document.getElementById("myAudio");
    if (m.paused) {
        $(obj).removeClass('pause');
        m.play();
    } else {
        $(obj).addClass('pause');
        m.pause();
    }
}
//跳转
$('.slideTo').click(function(){
    mySwiper.slideTo(1, 1000, false);//切换到第一个slide，速度为1秒
});
//打字
$(function () {
    $('.text1').textillate({ in: { effect: 'rollIn' } });
    $('.text2').textillate({
        initialDelay: 1000, 	//设置动画开始时间
        in: { effect: 'flipInX'	//设置动画名称
        }
    });
    $('.text3').textillate({
        initialDelay: 9000,
        in: { effect: 'bounceInDown' }
    });
});