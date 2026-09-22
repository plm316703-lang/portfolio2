//통합검색 입력박스 
const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('input');
const searchSearchEl = document.querySelector('.material-symbols-outlined');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});
searchSearchEl.addEventListener('click', function() {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
    searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', function() {
    searchInputEl.setAttribute('placeholder', '');
});

// 책갈피 애니메이션 처리 
const badgeEl= document.querySelector('header .badges');

//_.throttle(콜백함수, 지연시간(ms));
window.addEventListener('scroll', _.throttle(function() {
    console.log('Hello');
    console.log(window.scrollY);
    if(window.scrollY > 500){
        //책갈피 숨기긱
        // badgeEl.style.display = 'none';
        // gsap.to(요소, 지속시간, 옵션(객체))
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display:'none'
        })
    }else{
        //책갈피 보이기
        // badgeEl.style.display = 'block';
         gsap.to(badgeEl, .6, {
            opacity: 1,
        })
    }
}, 300));
// window.addEventListener('scroll', function () {
//     console.log('scroll!!!');
//     console.log(window.scrollY);
// });

//visual fade-in 처리
 const fadeEls = document.querySelectorAll('.visual .fade-in');
 fadeEls.forEach(function(fadeEl, idx){
    gsap.to(fadeEl, 1,{
        delay: (idx + 1) * .7,//  0.7, 1.4, 2.1, 2.8 
        opacity: 1,
    })
 });

// swiper 동작시작(notice)
new Swiper('.notice-line .swiper-container',{
    direction:'vertical',
    autoplay:{
        delay:1000,
        speed:1000,
    },
    loop: true,
});

// swiper promotion
new Swiper('.promotion .swiper-container', {
    direction: 'horizontal',
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이의 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true,
    pagination: {
        el:'.promotion .swiper-pagination', //페이지 번호 요소 
        clickable: true, //사용자가 페이지 번호 요소 제어
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

//  * Promotion 슬라이드 토글 기능
const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false //처음 시작시에는 열린상태

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;   //열려있을때는 hide를 false, e닫혀있을 때는 hide를 true
  if (isHidePromotion){//숨김처리
    // promotionEl.classList.add('none')
    promotionEl.classList.add('hide')
  } else {  //보임처리
    // promotionEl.classList.remove('block')
    promotionEl.classList.remove('hide')
  }
})

