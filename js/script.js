/*бургер*/
	/*let burger = document.querySelector('.burger');
  let menu = document.querySelector('.header__nav');
  let menuLinks = menu.querySelectorAll('.nav__link');


  burger.addEventListener('click',

  function() {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

  menuLinks.forEach(function(el){
    el.addEventListener('click', function() {

      burger.classList.remove('burger--active');

      menu.classList.remove('header__nav--active');

      document.body.classList.remove('stop-scroll');
    })
  })*/


  let header = document.querySelector(".header");
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
      header.classList.toggle("open");
    })
  })


  /*слайдер*/

  const Swiper1 = new Swiper('.swiper1', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 70,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 28,
      }
    }
  });

  const Swiper2 = new Swiper('.swiper2', {
    /* direction: 'horizontal',*/
     slidesPerView: 4,
     spaceBetween: 70,
     loop: true,
     pagination: {
       el: '.swiper-pagination',
       type: 'bullets',
       clickable: true,
     },
     breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 28,
      }
    }
   });

   const Swiper3 = new Swiper('.swiper3', {
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
     992: {
       slidesPerView: 1,
       spaceBetween: 30,
     }
   }
   });


   /* map*/
/*
   function init() {
    let myMap = new ymaps.Map('map', {
      center: [37.89884399999997, 59.09200156525463],
      zoom: 9
    });
    // убираем лишние элементы с карты
    myMap.controls.remove('searchControl'); // поиск
    myMap.controls.remove('geolocationControl'); // геолокацию
    myMap.controls.remove('trafficControl'); // трафик
    myMap.controls.remove('typeSelector'); // тип
    myMap.controls.remove('rulerControl'); // контрол правил
    myMap.controls.remove('zoomControl'); // контрол зуммирования
    myMap.controls.remove('fullscreenControl'); // переход в полноэеранный режим
    myMap.behaviors.disable(['scrollZoom']); // скролл карты
   }

   ymaps.ready(init);*/
/**/

  async function initMap() {
      await ymaps3.ready;

      const {YMap, YMapDefaultSchemeLayer} = ymaps3;

      const map = new YMap(
          document.getElementById('map'),
          {
              location: {
                  center: [37.89884399999997, 59.09200156525463],
                  zoom: 17
              }
          }
      );

      map.addChild(new YMapDefaultSchemeLayer());
  }

  initMap();
