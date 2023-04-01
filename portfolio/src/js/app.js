/* eslint-disable */
import HistoryMe from "@/components/HistoryMe.vue";
export default {
    name: 'App',
    components:{
        HistoryMe
    },
    data() {
        return {
            title: "Hello World!",
            subtitle: "Welcome to My Website!",
            cursorVisible: true,
            showModal: false
        };
    },
    mounted() {
        this.$nextTick(() => {
            const star = document.querySelector('.intro-star');
            star.addEventListener('load', () => {
                star.style.animation = 'star 20s ease-in-out infinite';
                star.style.animation.direction = 'alternate';
                star.style.animation.delay = '1.5';
                star.style.animation.fill.mode = 'forwards';
            });
        });
    },
    methods: {
        openModals(param){
            this.showModal = (param=='true')?true:false;
            // if(this.showModal){
            //     this.$router.push('/showYour/historyMe');
            // }
        }
    }
}
