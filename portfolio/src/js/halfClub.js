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
    },
    methods:{
        getDisplay(){
            this.$axios({
                url: "https://apix.halfclub.com/display/templates/templateByCategoryCd?categoryCd=D22589&countryCd=001&deviceCd=001&langCd=001&mandM=halfclub&siteCd=1",
                method: "get",
            }).then((response) => {
                // console.log(response.data.data[0].cornerList);

                const cornerList = response.data.data[0].cornerList;
                const filteredList = cornerList.filter(
                    (item) => item.dispCornerCd === "HP_FM_001"
                );

                this.dispDataList = cornerList;
                if (filteredList.length > 0) {
                    this.mainBigBanner = filteredList[0];
                }
            });
        }
    }
}