$(function () {

    // 顶部购物车
    $(".shoppingCart").on('mouseenter', function () {
        $(this).find('.shoppingProduct').fadeIn(500);
        $(this).find('.icon').addClass('tranbottom');
    });
    $(".shoppingCart").on('mouseleave', function () {
        $(this).find('.shoppingProduct').css("display", "none");
        $(this).find('.icon').removeClass('tranbottom');
    });

    // 全部商品分类
    $(".head-nav-product").on('mouseenter', function () {
        $(this).find('.head-nav-module').stop().slideDown(500);
    });
    $(".head-nav-product").on('mouseleave', function () {
        $(this).find('.head-nav-module').stop().slideUp("fast");
    });

    // 顶部BANNER 
    var mySwiper = $('.swiper-container').swiper({
        loop: true,
        autoplay: 5000
    });

    $('.head-banner-left').on('click', function () {
        mySwiper.swipePrev();
    });

    $('.head-banner-right').on('click', function () {
        mySwiper.swipeNext();
    });

    $('.head-banner-tel').on('mouseenter', function () {
        $(this).find('.banner-weixin').fadeIn(500);
    });
    $('.head-banner-tel').on('mouseleave', function () {
        $(this).find('.banner-weixin').css("display", "none");
    });

    // 设计团队
    $('.DesignTeam-list li').on('mouseenter', function () {
        $(this).find('.DesignTeam-member-name').stop().animate({
            'bottom': '-100px'
        });
    });
    $('.DesignTeam-list li').on('mouseleave', function () {
        $(this).find('.DesignTeam-member-name').stop().animate({
            'bottom': '0px'
        });
    });

    // checkBox 样式
    $('.check-red').iCheck({
        checkboxClass: 'icheckbox_square-red',
        radioClass: 'iradio_square-red',
        increaseArea: '20%' // optional
    });

    // 首页BANNER
    var mySwiperHome = $('.swiper-container-home').swiper({
        loop: true,
        autoplay: 5000
    });

    $('.home-banner-left').on('click', function () {
        mySwiperHome.swipePrev();
    });

    $('.home-banner-right').on('click', function () {
        mySwiperHome.swipeNext();
    });

    // 首页商品一楼Banner
    var productmySwiper01 = $('.pro-swiper-container01').swiper({
        loop: true,
        autoplay: 5000,
        onSetWrapperTransition: function (swiper) {
            var currNum = swiper.activeIndex;
            $("#JUlProButton li").eq(currNum).siblings().removeClass("pbuttonhover");
            $("#JUlProButton li").eq(currNum).addClass("pbuttonhover");
        }
    });

    $("#JUlProButton li").each(function (idx) {
        $(this).on("mouseenter", function () {
            productmySwiper01.swipeTo(idx, 1000, false);
        });
    });

    // 首页商品二楼Banner
    var productmySwiper02 = $('.pro-swiper-container02').swiper({
        loop: true,
        autoplay: 5000,
        onSetWrapperTransition: function (swiper) {
            var currNum = swiper.activeIndex;
            $("#JUlProButton01 li").eq(currNum).siblings().removeClass("pbuttonhover");
            $("#JUlProButton01 li").eq(currNum).addClass("pbuttonhover");
        }
    });

    $("#JUlProButton01 li").each(function (idx) {
        $(this).on("mouseenter", function () {
            productmySwiper02.swipeTo(idx, 1000, false);
        });
    });

    // 首页商品三楼Banner
    var productmySwiper03 = $('.pro-swiper-container03').swiper({
        loop: true,
        autoplay: 5000,
        onSetWrapperTransition: function (swiper) {
            var currNum = swiper.activeIndex;
            $("#JUlProButton02 li").eq(currNum).siblings().removeClass("pbuttonhover");
            $("#JUlProButton02 li").eq(currNum).addClass("pbuttonhover");
        }
    });

    $("#JUlProButton02 li").each(function (idx) {
        $(this).on("mouseenter", function () {
            productmySwiper03.swipeTo(idx, 1000, false);
        });
    });

    // 首页商品四楼Banner
    var productmySwiper04 = $('.pro-swiper-container04').swiper({
        loop: true,
        autoplay: 5000,
        onSetWrapperTransition: function (swiper) {
            var currNum = swiper.activeIndex;
            $("#JUlProButton03 li").eq(currNum).siblings().removeClass("pbuttonhover");
            $("#JUlProButton03 li").eq(currNum).addClass("pbuttonhover");
        }
    });

    $("#JUlProButton03 li").each(function (idx) {
        $(this).on("mouseenter", function () {
            productmySwiper04.swipeTo(idx, 1000, false);
        });
    });

    // 监听滚动条到顶部的距离，判断楼层
    $(document).scroll(function () {
        var topSroll = $(document).scrollTop();
        changeFloor(topSroll)
    });

    changeFloor($(document).scrollTop());
    function changeFloor(num) {
        if (num < 1800) {
            $(".leftLocatingFloorUL li").eq(0).attr("class", "locationred");
            $(".leftLocatingFloorUL li").eq(0).siblings().attr("class", "locationgray");
        } else if (num >= 1800 && num < 2700) {
            $(".leftLocatingFloorUL li").eq(1).attr("class", "locationred");
            $(".leftLocatingFloorUL li").eq(1).siblings().attr("class", "locationgray");
        } else if (num >= 2700 && num < 3600) {
            $(".leftLocatingFloorUL li").eq(2).attr("class", "locationred");
            $(".leftLocatingFloorUL li").eq(2).siblings().attr("class", "locationgray");
        } else if (num >= 3600) {
            $(".leftLocatingFloorUL li").eq(3).attr("class", "locationred");
            $(".leftLocatingFloorUL li").eq(3).siblings().attr("class", "locationgray");
        }
    }

})