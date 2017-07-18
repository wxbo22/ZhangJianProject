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

})