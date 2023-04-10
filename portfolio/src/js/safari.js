export default {
    name: "safari",
    mounted(){
    },
    methods:{
        sendUrl(param){
            switch (param){
                case 'simle':
                    this.$router.push({ name : "simliTest"});
                    break;
                default :
                    alert('당신이 누른 영역은 : ' + param + '\n현재 구현된 페이지 : 심리테스트')
                    break;
            }
        }
    }
}