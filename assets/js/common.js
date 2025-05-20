(function ($) {
    //ページ内スクロール
    $('a[href*="#"]').on('click',function() {
        var target = $(this).attr('href');
        var position = $(target).offset().top;
        var $header     = $('.site-header');
        var fheaderH    = $header.innerHeight();
        $('body,html').animate({scrollTop:position - fheaderH}, 600, 'swing');
        return false;
    });
    //スマホグロナビボタン
    $('.menu-btn').on('click',function(){
        $(this).toggleClass('menu-btn--opened');
        $('body').toggleClass('opened');
        $('.header-cont').stop().fadeToggle();
    });
    $('.header-cont a[href*="#"]').on('click',function() {
        $('.menu-btn').removeClass('menu-btn--opened');
        $('body').removeClass('opened');
        $('.header-cont').stop().fadeOut();
    });

    $(window).on('load scroll', function(){
        var animTrigger = $('.anim');
        $(animTrigger).each(function(){
            var scroll = $(window).scrollTop(),
                elemTop = $(this).offset().top,
                windowHeight = $(window).height();
            if ($(window).width() <= 768) {
                if (scroll > elemTop - windowHeight + 80){
                    $(this).addClass('is-animated');
                }
            } else {
                if (scroll > elemTop - windowHeight + 200){
                    $(this).addClass('is-animated');
                }
            }
        });
    });
    $(window).trigger('scroll');
    $('.is-animated').removeClass('is-animated');
})(jQuery);


$(function($){
    var $header     = $('.site-header');
    
    scrollCheck();
    $(window).scroll(scrollCheck);
    
    function scrollCheck(){
        var scrl = $(window).scrollTop();
        var scrlH = $('.top-main').innerHeight();

        if (scrl > scrlH) {
            $header.addClass("cls");
        } else {
            $header.removeClass("cls");
        }
    }
});

