/* eslint-disable */
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
export default {
    name: "MoComponents",
    mounted() {
        new Swiper('.swiper-container', {
            initialSlide: 1,
            loopAdditionalSlides : 1,
            spaceBetween: 30, 
            slidesOffsetAfter: 30,
            pagination: {
                el: '.swiper-pagination',
            },
        });
    },
  }