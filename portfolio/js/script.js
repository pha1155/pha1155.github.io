jQuery(function($){
  
//$(window).scroll(function(){
// var st = $(this).scrollTop(),
//  wh = $(window).height(),
//  sf = 1.2 - st/(10*wh);
//
//$('#home').css({ 
//  'transform' : 'scale('+sf+')', 
//  '-webkit-transform' : 'scale('+sf+')'
//});
//
//$('#home').css({ 'opacity' : (1.4 - st/400) });
//
//if($(window).scrollTop() > ($(window).height()+50)){
//  $('#home').hide();
//}else{
//  $('#home').show();
//}
//
//});
  
  /*전역변수, 함수 선언*/
  var speed = 500;
  var O, T, H, OP;
  var h = 0;
  var HH = [0];
  var WH = $(window).height();
  var HD = $('#header').innerHeight();
  function now (){
    var X;
    var T = $(window).scrollTop();
    $('section').each(function (i) {
      T+(WH/3)>= HH[i] ? X = i : false;
    });
    return X;
  };
  var moving = false;
  function move (i){
    moving = true;
    if ($('html,body').is(':animated')) return false;
    var O = $('section').eq(i).offset().top + -HD;
    $('html,body').clearQueue().animate({scrollTop: O},speed, function (){
      active(i);
      moving = false;
    });
  };
  function active (i){
    if ($('html,body').is(':animated')) return false;
    $('.gnb li').find('a').removeClass('active');
    $('.gnb li').eq(i).find('a').addClass('active');
  };
  /*event*/
  $(window).on('resize',function(){
    var WH = $(window).height();
    $('#home').clearQueue().animate({'height': WH-HD},speed);
  });
  //익스플로어 새로고침
  $(window).on('keydown',function(){
    if(event.key=='F5') location.reload();
  });
  $(window).on('touchmove scroll',function(){
    if(now()!=0) {
      $('.bar_move').eq(0).addClass('bar_01');
      $('.bar_move').eq(1).addClass('bar_02');
      $('.bar_move').eq(2).addClass('bar_03');
      $('.bar_move').eq(3).addClass('bar_04');
      $('.bar_move').eq(4).addClass('bar_05');
      $('#header').addClass('active');
      if ($('.scrolltop').is(':hidden')) $('.scrolltop').stop().fadeIn(speed);
    } else {
      $('#header').removeClass('active');
      $('.scrolltop').stop().fadeOut();
    };
    var OP = $(window).scrollTop()/400;
  $('#home').css({
  'background-image' : 'linear-gradient(to bottom, rgba(255,255,255,'+OP+'), rgba(255,255,255,'+OP+')), url(imgs/bg_main.jpg)'
  });
    if (moving) return false;
    active(now());
  });
  $('section').first().height(WH-HD);
  $('section').each(function(i){
    h+=$(this).height();
    HH[i+1] = h;
  });
  $('.logo a, .scrolltop').on('click', function(){
    if (moving) return false;
    $('html,body').clearQueue().animate({scrollTop : 0},speed, function(){
      active(now());
    });
  });
  $('.m_nav').on('click', function(){
    $(this).toggleClass('active');
    $('.gnb_wrap ul li a').removeClass('active');
    if ($(this).hasClass('active')) {
      $('.gnb_wrap').css({
        'top' : '0',
        'opacity' : '1'
      });
      $('#header .inner').css({
        'padding' : '0'
      });
    } else {
      $('.gnb_wrap').css({
        'top' : '-100%',
        'opacity' : '0'
      });
    }
    $(window).on('scroll',function(){
      $('.gnb_wrap ul li a').removeClass('active');
    });
    $('.gnb_wrap ul li a').on('click',function(){
      $('.m_nav').removeClass('active');
      $('.gnb_wrap').css({
        'top' : '-100%',
        'opacity' : '0'
      });
    });
  });
  $('.gnb_wrap ul li').eq(now()).find('a').addClass('active');
  $('.gnb_wrap ul li a').on('click', function(){
    var idx = $(this).parents('li').index();
    move(idx);
    return false;
  });
  $('.btn_scroll').on('click',function(){
    move(1);
  });
  /* top btn */
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('.top_btn_wrap').fadeIn();
    } else {
      $('.top_btn_wrap').fadeOut();
    }
  });
  $('.top_btn_wrap').click(function() {
    $('html, body').animate({scrollTop : 0},400);
    return false;
  });
    /*오픈 라이브러리*/
    //Home_title animation
  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    var that = this;
    var delta = 150 - Math.random() * 100;
    if (this.isDeleting) { delta /= 2; }
    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    //크롬 새로고침
    setTimeout(function(){
      window.scrollTo(0,0);
    }, 0);
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.04em solid #666 }";
    document.body.appendChild(css);
  };
});