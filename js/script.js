$(document).ready(function(){
  $(".fancy").fancybox();

  if ($(this).scrollTop() > 50) {
    $("header").addClass('fixed');
  } 
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("header").addClass('fixed');
    } else {
      $("header").removeClass('fixed');
    }
  });

  $(".header-search__but-open").on("click", function(){
    $(this).parents(".header-search").addClass("active");
    if($(".header-hamburger").hasClass("is-active")){
      $(".header-hamburger").removeClass('is-active');
      $(".header-mobile").removeClass('active');
      $(".main-header").removeClass('active');  
    }
  });

  $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".header-search"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
          if($(".header-search").hasClass("active")){
            $(".header-search").removeClass("active");
          }
      }
  });

  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       false,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();

	/*Мобильный гамбургер*/
 $(".header-hamburger").click(function(){
   $(".header-hamburger").toggleClass('is-active');
   $(".header-mobile").toggleClass('active');
   $(".main-header").toggleClass('active');
 });
 $(".main-menu ul li a").click(function(){
   $(".header-hamburger").removeClass('is-active');
   $(".header-mobile").removeClass('active');
   $(".main-header").removeClass('active');
 });

   var lazyLoadInstance =  new  LazyLoad ({
    elements_selector :  " .lazy " 
    });







    




    $('.charge-slick').slick({
      arrows: false,
      slidesToShow: 4,
      focusOnSelect: true,
      autoplay: false,
      autoplaySpeed: 3000,
      dots: true,
      infinite: true,
      responsive: [                     
        {
          breakpoint: 1300,
            settings: {
              slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
            settings: {
              slidesToShow: 1,
          }
        },
      ]
    });
    var lazyLoadInstance2 =  new  LazyLoad ({
      elements_selector :  " .charge-lazy" 
       // ... больше пользовательских настроек? 
   });
    $('.charge-slick').on('afterChange', function(event, slick, currentSlide){
      lazyLoadInstance2.update();	
    });












	/*
  	Плавный скрол

  	$("body a").click(function() {
        $("html, body").animate({
           scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
           duration: 500,
           easing: "swing"
        });
        return false;
  	});
  	*/

	/*
	Слик слайдер

	$('.s_4_slider_2').slick({
	  arrows: false,                    // Стрелки
	  asNavFor: ".s_4_slider_1",        // Связки 2 слайдеров для thumbnail
	  slidesToShow: 3,                  // Количество слайдов, которые показываются сразу
	  focusOnSelect: true,              // Фокус на елемент при клике
	  autoplay: true,                   // Автоматическое переключение
	  autoplaySpeed: 3000,              // Время на показ слайда до переключения на следующий
	  dots: false,                      // Точки
	  fade: false,                      // Эффект затухания вместо перелистывания
	  infinite: true,                   // Бесконечность слайдов
	  initialSlide: 0,                  // Номер с которого откроется слайдер
	  pauseOnHover: true,               // Пауза при наведении на слайдер
	  pauseOnDotsHover: false,          // Пауза при наведение на точки
	  rows: 1,                          // Количество строк
	  centerMod: true,                  // Центровать слайд
	  centerPadding: '50px',            // Отсупы от центрального слайда
	  draggable: true,                  // перелистывание слайдов, перетаскиванием слайда мышью
	  speed: 300,                       // Скорость анимации перелистывания
	  vertical: false,                  // Переключение на вертикальный тип слайдера
	  cssEase: "easy",                  // Вид анимации, для непрерывного слайдера linear  
	  responsive: [                     
	    {
	      breakpoint: 992,
	        settings: {

	      }
	    },
	    {
	      breakpoint: 600,
	        settings: {

	      }
	    },
	  ]
	});
	*/
});
 $(document).ready(function(){ 
        $('.wpcf7').on( 'wpcf7mailsent ', function( event ) { 
          var inst = $('[data-remodal-id=remodal_thanks]').remodal(); // Обращаемся к всплывашке, чтобы открыть ответ меняем remodal_id на свой
                  inst.open();      
        });
      });