$(function () {
    var snum = $(".swiper-container-v>.swiper-wrapper>.swiper-slide").length;
    var vSwiper = new Swiper(".swiper-container-v", {
        direction: 'vertical',
        mousewheel: true,
        speed: 700,
        pagination: {
            el: '.swiper-container-v>.swiper-pagination',
            clickable: true,
        },

        on: {
            slideChangeTransitionEnd: function () {
                if (snum === this.activeIndex + 1) {
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
                H = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
                if (H > 0) {
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

var hSwiper = new Swiper(".swiper-container-h", {
    speed: 800,
    pagination: {
        el: '.swiper-container-h>.swiper-pagination',
        clickable: true,
    },
})
