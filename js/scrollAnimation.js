$(document).ready(function(){
        $(window).scroll(function() {
          var $el = $('.aboutTitle h3');

          if($(this).scrollTop() >= 800) $el.addClass('shown');
        });
        $(window).scroll(function() {
          var $el = $('.row1Left');

          if($(this).scrollTop() >= 1100) $el.addClass('shown');
        });
        $(window).scroll(function() {
          var $el = $('.row1Right');

          if($(this).scrollTop() >= 1100) $el.addClass('shown');
        });
        $(window).scroll(function() {
          var $el = $('.aboutRow2TitleLBar');

          if($(this).scrollTop() >= 1800) $el.addClass('shown');
        });
        $(window).scroll(function() {
          var $el = $('.aboutRow2TitleSBar');

          if($(this).scrollTop() >= 1800) $el.addClass('shown');
        });
        $(window).scroll(function() {
          var $el = $('.row2Right');
            
          if($(this).scrollTop() >= 1800) $el.addClass('shown');
        });
        $(window).scroll(function() {
          var $el = $('.row2Left');

          if($(this).scrollTop() >= 1800) $el.addClass('shown');
        });
        $(window).scroll(function() {
          var $el = $('.aboutRow3TitleLBar');

          if($(this).scrollTop() >= 2400) $el.addClass('shown');
        });
        $(window).scroll(function() {
          var $el = $('.aboutRow3TitleSBar');

          if($(this).scrollTop() >= 2400) $el.addClass('shown');
        });
        $(window).scroll(function() {
          var $el = $('.row3LeftText');

          if($(this).scrollTop() >= 2400) $el.addClass('shown');
        });
        $(window).scroll(function() {
          var $el = $('.row3CenterBar');

          if($(this).scrollTop() >= 2400) $el.addClass('shown');
        });
        $(window).scroll(function() {
          var $el = $('.row3RightText');

          if($(this).scrollTop() >= 2400) $el.addClass('shown');
        });
        $(window).scroll(function() {
          var $el = $('.mAboutLeftText');

          if($(this).scrollTop() >= 450) $el.addClass('showShow');
        });
        $(window).scroll(function() {
          var $el = $('.skillBox1');

          if($(this).scrollTop() >= 3300) $el.addClass('shown');
        });
        $(window).scroll(function() {
          var $el = $('.skillBox2');

          if($(this).scrollTop() >= 3300) $el.addClass('shown');
        });
        $(window).scroll(function() {
          var $el = $('.skillBox3');

          if($(this).scrollTop() >= 3300) $el.addClass('shown');
        });
        $(window).scroll(function() {
          var $el = $('.skillBox4');

          if($(this).scrollTop() >= 3300) $el.addClass('shown');
        });
    })