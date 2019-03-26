$(".menu").click(function () {
    $(this).toggleClass("on");
    $(".nav").toggleClass("close")
})
$("#close_foot").click(function (e) {
    e.stopPropagation();
    $(".footer-3").animate({
        width: "1.2rem",
        height: ".98rem",
        borderTopRightRadius: "1rem",
        borderBottomRightRadius: "1rem"
    }, 500);
    $(".pic-wechat").animate({
        left: "-.3rem",
        borderTopRightRadius: "1rem",
        borderBottomRightRadius: "1rem",
        borderTopLeftRadius: "1rem",
        borderBottomLeftRadius: "1rem",
    }, 500);
    $(".sys").hide();
    $(".pic-xcx").hide();
    $(".pointer").hide();
    $(".contxt").hide();
    $(this).hide();
    $(".contxt-show").show()
});
$(".footer-3").click(function (e) {
    if ($(".contxt").css("display") === "none") {
        $(".footer-3").animate({
            width: "100%",
            height: ".98rem",
            bottom: "0",
            border: "none",
            borderRadius: "0"
        }, 500);
        $(".contxt-show").hide();
        $(".sys").show();
        $(".pic-xcx").show();
        $(".pointer").show();
        $(".contxt").show();
        $("#close_foot").show();
        $(".pic-wechat").animate({
            left: "0",
            borderTopRightRadius: "0",
            borderBottomRightRadius: "0",
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
        }, 500)
    }
});

$(".tab_c").click(function () {
    $(this).siblings(".submenu").slideToggle(300).parent("li").find('li').children('.submenu').slideUp(0)
    $(this).siblings("i").toggleClass("on");
    $(this).toggleClass("on")
})
