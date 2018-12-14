$(document).ready(function(){
        /*workBtnopacity,workImg*/
        $('.workBtn a').hover(function(){
            $('.workBtnOpacity').css('opacity','1')
            $('.workBtnOpacity ul.first li.workImg1').css('animation','fadeInDown 1s')
            $('.workBtnOpacity ul.first li.workImg2').css('animation','fadeInUp 1s')
            $('.workBtnOpacity ul.last li.workImg3').css('animation','fadeInDown 1s')
            $('.workBtnOpacity ul.last li.workImg4').css('animation','fadeInUp 1s')
        },function(){
            $('.workBtnOpacity').css('opacity','0')
            $('.workBtnOpacity ul.first li.workImg1').css('animation','fadeOutUp 1s')
            $('.workBtnOpacity ul.first li.workImg2').css('animation','fadeOutDown 1s')
            $('.workBtnOpacity ul.last li.workImg3').css('animation','fadeOutUp 1s')
            $('.workBtnOpacity ul.last li.workImg4').css('animation','fadeOutDown 1s')
        })
    });