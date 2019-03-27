$(function () {
    if (location.href.indexOf("#") === -1) {
        location.href = location.href + "#";
        location.reload();
    }

    var hSwiper = new Swiper(".swiper-container-h", {
        speed: 800,
        loop: true,
        pagination: {
            el: '.swiper-container-h>.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        on: {
            init: function () {
                // swiperAnimateCache(this); //隐藏动画元素
                swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function () {
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
            },
        }
    });
    var swiper_Num = $(".swiper-container-v>.swiper-wrapper>.swiper-slide").length;
    var vSwiper = new Swiper(".swiper-container-v", {
        direction: 'vertical',
        mousewheel: {
            releaseOnEdges: false,
            eventsTarged: '.container',
        },
        speed: 800,
        pagination: {
            el: '.swiper-container-v>.swiper-pagination',
            clickable: true,
        },
        on: {
            init: function () {
                swiperAnimateCache(this); //隐藏动画元素
                swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function () {
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
            },
            slidePrevTransitionEnd: function () {
                if (swiper_Num === this.activeIndex + 1) {
                    vSwiper.mousewheel.enable()
                }
            },
            slideNextTransitionEnd: function () {
                if (swiper_Num === this.activeIndex + 1) {
                    vSwiper.mousewheel.disable()
                }
            }
        },
    });
    window.addEventListener("DOMContentLoaded", function () {
        var body_fixed = {
            init: function () {
                window.onscroll = this.throttle(this.isFixed, 0);
                this.isFixed()
            }, isFixed: function () {
                page_H = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
                if (page_H > 0) {
                    vSwiper.mousewheel.disable()
                } else {
                    vSwiper.mousewheel.enable()
                }
            }, throttle: function (fn, delay) {
                var timer = null;
                var _this = this;
                return function () {
                    var context = _this, args = arguments;
                    clearTimeout(timer);
                    timer = setTimeout(function () {
                        fn.apply(context, args)
                    }, delay)
                }
            }
        };
        body_fixed.init()
    });
});
