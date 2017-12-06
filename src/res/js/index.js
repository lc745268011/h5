/**
 * Created by xycx on 2017/12/5.
 */
//swiper
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    //mousewheel: true
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
    swiper.slideTo(1, 1000, false);//切换到第一个slide，速度为1秒
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
