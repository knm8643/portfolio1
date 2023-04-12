import Swiper from "swiper";
/* eslint-disable */
export default {
    name: "HalfClub",
    data(){
      return{
          dispDataList: [],
          mainBigBanner: []
      }
    },
    mounted(){
        this.getDisplay();

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
        // const firstSlide = document.querySelector('.swiper-slide:first-child');
        // firstSlide.addEventListener('click', () => {
        //     swiper.slideNext();
        // });
    },
    methods:{
        getDisplay(){
            this.$axios({
                url: "https://apix.halfclub.com/display/templates/templateByCategoryCd?categoryCd=D22589&countryCd=001&deviceCd=001&langCd=001&mandM=halfclub&siteCd=1",
                method: "get",
            }).then((response) => {
                const cornerList = response.data.data[0].cornerList;
                const filteredList = cornerList.filter(
                    (item) => item.dispCornerCd === "HP_FM_001"
                );

                this.dispDataList = cornerList;

                console.log(this.dispDataList)

                if (filteredList.length > 0) {
                    const mainBanners = []
                    for (let i = 0; i < filteredList.length; i++) {
                        for (let j = 0; j < filteredList[i].cornerGroupList.length; j++) {
                            const imgNm = filteredList[i].cornerGroupList[j].cornerContentList[0].detailList[0].imgNm
                            const file = filteredList[i].cornerGroupList[j].cornerContentList[0].fileUrl
                            mainBanners.push({img :'https://cdn2.halfclub.com/rimg/720x500/'+file+'/'+imgNm})
                        }
                    }
                    this.mainBigBanner = mainBanners
                }
            });
        }
    }
}