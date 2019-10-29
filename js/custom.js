/* global $ , console , alert */

$(function() {
  'use strict';

  /*animation */

  const setTime1 = async () => {
    return new Promise(resolve =>
      setTimeout(function() {
        resolve($('.text1').addClass('animation'));
      }, 0),
    );
  };

  const setTime2 = async () => {
    return new Promise(resolve =>
      setTimeout(function() {
        resolve($('.layer').addClass('scale'));
      }, 3500),
    );
  };

  const hide = async () => {
    return new Promise(resolve =>
      setTimeout(function() {
        resolve(
          // $('.layer').addClass('hide'),
          $('body').css('overflow', 'auto'),
          $('.layer').fadeOut(),
        );
      }, 1000),
    );
  };

  let asyncCall = async () => {
    await setTime1();
    await setTime2();
    await hide();
  };

  /**/

  //header height
  $('.header').height($(window).height());
  $(window).resize(function() {
    /*$('.slider').bxSlider();*/
    $('.header').height($(window).height());
    $('.slider').each(function() {
      $(this).css('paddingTop', ($(window).height() - $('.slider div').height()) / 2);
    });
  });
  //links active
  $('.links li a').click(function() {
    $(this)
      .parent()
      .addClass('active')
      .siblings()
      .removeClass('active');
  });

  //adjust
  $('.slider').each(function() {
    $(this).css('paddingTop', ($(window).height() - $('.slider div').height()) / 2 - 50);
  });

  //Trigger slider
  $('.slider').bxSlider(
    {
      pager: false,
      auto: true,
    },
    /*options */
  );

  //smooth scrolling
  $('li a').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('#' + $(this).data('value')).offset().top,
        /* $('#' + $(this).data('value')).offset().top  it shod be a number */
      },
      1000,
    );
  });

  //automatic slider
  (function autoSlide() {
    $('.overlay .slide .act').each(function() {
      if (!$(this).is(':last-child')) {
        $(this)
          .delay(3000)
          .fadeOut(1000, function() {
            $(this)
              .removeClass('act')
              .next()
              .addClass('act')
              .fadeIn();
            autoSlide();
          });
      } else {
        $(this)
          .delay(3000)
          .fadeOut(1000, function() {
            $(this).removeClass('act');
            $('.slide div')
              .eq(0)
              .addClass('act')
              .fadeIn();
            autoSlide();
          });
      }
    });
  })();

  //Click list of shuffel
  $('.shuffle li').click(function() {
    $(this)
      .addClass('active')
      .siblings()
      .removeClass('active');
  });

  //Run shuffel
  window.mixitup('#Container');

  asyncCall();
});
