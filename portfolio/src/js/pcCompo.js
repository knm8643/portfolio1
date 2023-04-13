import Swiper from "swiper";
/* eslint-disable */
export default {
  name: "PcComponents",
  data() {
    return {
    }
  },
  mounted() {
    const swiper = new Swiper('.swiper-container', {
      initialSlide: 0, // 첫번째 슬라이드로 설정
      loopAdditionalSlides : 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 2000, // 자동으로 슬라이드를 넘기는 주기 (단위: ms)
        disableOnInteraction: false, // 사용자의 상호작용에 의해 자동 슬라이드를 멈추지 않도록 설정
      },
    });

    // 첫번째 슬라이드 클릭 시 다음 슬라이드로 이동
    const firstSlide = document.querySelector('.swiper-slide:first-child');
    firstSlide.addEventListener('click', () => {
      swiper.slideNext();
    });
  },
  methods: {
    helpBtn(param) {
      switch (param) {
        case 'info':
          alert('이충재\n010-5696-1909\nknm8643@nate.com')
          break;
        case 'Y':
          alert('마음에 드신다니 다행입니다^^더 추가될 예정이에요 연락주세요.')
          break;
        case 'N':
          alert('아쉽지만 다음에 만나요.')
          break;
      }
    }
  },
}