jQuery(function($){
  var speed = 500;
  var O, T, H, OP;
  var h = 0;
  var HH = [0];
  var WH = $(window).height();
  var HD = $('.header').innerHeight();
  function now (){
    var X;
    var T = $(window).scrollTop();
    $('.section').each(function (i) {
      T+(WH/3)>= HH[i] ? X = i : false;
    });
    return X;
  };
  var moving = false;
  function move (i){
    moving = true;
    if ($('html,body').is(':animated')) return false;
    var O = $('.section').eq(i).offset().top + -HD;
    $('html,body').clearQueue().animate({scrollTop: O},speed, function (){
      active(i);
      moving = false;
    });
  };
  function active (i){
    if ($('html,body').is(':animated')) return false;
    $('.nav__gnb-item').find('a').removeClass('active');
    $('.nav__gnb-item').eq(i).find('a').addClass('active');
  };
  $(window).on('resize',function(){
    $('.home').clearQueue().animate({'height': WH-HD},speed);
  });
  $(window).on('keydown',function(){
    if(event.key=='F5') location.reload();
  });
  $(window).on('touchmove scroll',function(){
    if(now()!=0) {
      $('.header').addClass('active');
      if ($('.scrolltop').is(':hidden')) $('.scrolltop').stop().fadeIn(speed);
    } else {
      $('.header').removeClass('active');
      $('.scrolltop').stop().fadeOut();
    };
  var OP = $(window).scrollTop()/400;
  $('.home').css({
    'background-image' : 'linear-gradient(to bottom, rgba(255,255,255,'+OP+'), rgba(255,255,255,'+OP+')), url(images/bg_main.jpg)'
  });
  if (moving) return false;
    active(now());
  });
  $('.section').first().height(WH-HD);
  $('.section').each(function(i){
    h+=$(this).height();
    HH[i+1] = h;
  });
  $('.logo__link, .scrolltop').on('click', function(){
    if (moving) return false;
    $('html,body').clearQueue().animate({scrollTop : 0},speed, function(){
      active(now());
    });
  });
  $('.mobile-gnb').on('click', function(){
    $(this).toggleClass('active');
    $('.nav__gnb-link').removeClass('active');
    if ($(this).hasClass('active')) {
      $('.nav').css({
        'top' : '0',
        'opacity' : '1'
      });
      $('.header .inner_container').css({
        'padding' : '0'
      });
    } else {
      $('.nav').css({
        'top' : '-100%',
        'opacity' : '0'
      });
    }
    $(window).on('scroll',function(){
      $('.nav__gnb-link').removeClass('active');
    });
    $('.nav__gnb-link').on('click',function(){
      $('.mobile-gnb').removeClass('active');
      $('.nav').css({
        'top' : '-100%',
        'opacity' : '0'
      });
    });
  });
  $('.nav__gnb-item').eq(now()).find('a').addClass('active');
  $('.nav__gnb-link').on('click', function(){
    var idx = $(this).parents('li').index();
    move(idx);
    return false;
  });
  $('.btn-scroll').on('click',function(){
    move(1);
  });

  /* top btn */
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('.top-btn-wrap').fadeIn();
    } else {
      $('.top-btn-wrap').fadeOut();
    }
  });
  $('.top-btn-wrap').click(function() {
    $('html, body').animate({scrollTop : 0},400);
    return false;
  });

  //Home_title animation (open source)
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
    var elements = document.getElementsByClassName('home-title__rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    setTimeout(function(){
      window.scrollTo(0,0);
    }, 0);
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".home-title__rotate > .wrap { border-right: 0.04em solid #666 }";
    document.body.appendChild(css);
  };
});