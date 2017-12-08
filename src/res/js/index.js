/**
 * Created by xycx on 2017/12/5.
 */
window.onload = function() {
    //swiper
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        //mousewheel: true
        /* 初始化animate */
        on: {
            init: function () {
                swiperAnimateCache(this); //隐藏动画元素
                swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function () {
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                if (this.activeIndex == 1) {
                    $('.text2').textillate('start');
                    $('.text2').textillate({
                        initialDelay: 1000, 	//设置动画开始时间
                        in: {
                            effect: 'flipInX'	//设置动画名称
                        }
                    });
                }
            }
        }
    });
    //跳转
    $('.slideTo').click(function () {
        mySwiper.slideTo(1, 1000, true)
    });
};
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
})(document, window);
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
//一般情况下，这样就可以自动播放了，但是一些奇葩iPhone机不可以
document.getElementById('myAudio').play();
//微信必须加入Weixin JSAPI的WeixinJSBridgeReady才能生效
document.addEventListener("WeixinJSBridgeReady", function () {
    document.getElementById('myAudio').play();
    document.getElementById('audio').play(); //视频自动播放
}, false);

//打字
//$(function () {
//    $('.text2').textillate({
//        initialDelay: 1000, 	//设置动画开始时间
//        in: { effect: 'flipInX'	//设置动画名称
//        }
//    });
//});