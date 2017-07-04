$(document).ready(function() {
  $('.ab').mouseenter(function() {
    if ($('.block_1 ').hasClass('visible')) {

    }
    if(!$('.block_1 ').hasClass('visible')) {
      $('.block_1 ').addClass('pre-show');
    }
    $(this).mouseleave(function() {
        $('.block_1 ').removeClass('pre-show');
      });

  });


  $('.ser').mouseenter(function() {
    if(!$('.block_2 ').hasClass('visible')) {
      $('.block_2 ').addClass('pre-show');
      }else {
      $('.block_2 ').removeClass('pre-show');
    }
    $(this).mouseleave(function() {
        $('.block_2 ').removeClass('pre-show');
      });
  });
  $('.works').mouseenter(function() {
    if(!$('.block_3 ').hasClass('visible')) {
      $('.block_3 ').addClass('pre-show');
    }else {
      $('.block_3 ').removeClass('pre-show');
    }
    $(this).mouseleave(function() {
        $('.block_3 ').removeClass('pre-show');
      });
  });
  $('.cont').mouseenter(function() {
    if(!$('.block_4 ').hasClass('visible')) {
      $('.block_4 ').addClass('pre-show');
    }else {
      $('.block_4 ').removeClass('pre-show');
    }
    $(this).mouseleave(function() {
        $('.block_4 ').removeClass('pre-show');
      });
  });




  $('.ind').click(function(e) {
    e.preventDefault();
    $(this).addClass('is-act');
    $('.header_menu-link').not($(this)).removeClass('is-act');
    $('.menu_block ').siblings('div').removeClass('visible');
  });
  $('.ab').click(function(e) {
    e.preventDefault();
    $(this).addClass('is-act');
    $('.header_menu-link').not($(this)).removeClass('is-act');
    $('.block_1 ').removeClass('pre-show');
    setTimeout(function() {$('.block_1 ').addClass('visible')},0);
    $('.block_1 ').siblings('div').removeClass('visible');
  });
  $('.ser').click(function(e) {
    e.preventDefault();
    $(this).addClass('is-act');
    $('.header_menu-link').not($(this)).removeClass('is-act');
    $('.block_2 ').removeClass('pre-show');
    setTimeout(function() {$('.block_2 ').addClass('visible');},0);
    $('.block_2 ').siblings('div').removeClass('visible');
  });
  $('.works').click(function(e) {
    e.preventDefault();
    $(this).addClass('is-act');
    $('.header_menu-link').not($(this)).removeClass('is-act');
    $('.block_3 ').removeClass('pre-show');
    setTimeout(function() {$('.block_3 ').addClass('visible');},0);
    $('.block_3 ').siblings('div').removeClass('visible');
  });
  $('.cont').click(function(e) {
    e.preventDefault();
    $(this).addClass('is-act');
    $('.header_menu-link').not($(this)).removeClass('is-act');
    $('.block_4 ').removeClass('pre-show');
    setTimeout(function() {$('.block_4 ').addClass('visible');},0);
    $('.block_4 ').siblings('div').removeClass('visible');
  });

});