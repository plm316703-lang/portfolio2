$('.search').click(function() {
    console.log('클릭됨');
    
    $('input').focus();
});

$('.material-symbols-outlined.test1').click(function() {
    $('input').focus();
});

$('input').focus(function() {
    $('input').attr('placeholder', '통합검색'); //attr은 setAttribute와 같은 기능
});

$('input').blur(function() {
    $('input').attr('placeholder', '');
});


// 책갈피 애니메이션 처리 
const badgeEl= document.querySelector('header .badges');

// $('.header .badges').


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
});

function random(min, max) {
  // `.toFixed()`를 통해 반환된 '문자 데이터'를,
  // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
//youtube floating imges
function floatingObject(selector, delay, size){
    //gsap.to(요소, 시간, 옵셥);
    gsap.to(selector, 1, {
        y: size, //위로 size픽셀 값 위로 이동
        repeat: -1, //무한 반복
        yoyo: true,
        delay: random(0, delay),
        //  ease: Power1.easeInOut,
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


new Swiper('.awards .swiper-container', {
  direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
//   slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
})