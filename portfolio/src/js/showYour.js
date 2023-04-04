import HistoryMe from "@/components/HistoryMe.vue";
import { mapState, mapMutations } from 'vuex'

export default {
    name: "showYour",
    components:{
        HistoryMe
    },
    computed: {
        todays(){
            return this.$store.state.today.substring(0,8)
        },
        inputMessage(){
            return this.$store.state.inputMessage
        },
        ...mapState({
            inputMessage: state => state.inputMessage
        })
    },
    data(){
        return{
            insertMessage: '',
            CJMessage: []
        }
    },
    mounted() {
        this.sendCJMessage();
    },
    methods:{
        ...mapMutations([
            'addMessage'
        ]),
        sendCJMessage() {
            const self = this;
            const messages = [
                { msg: '제 사이트에 오신걸 환영합니다.' },
                { msg: '저의 노션 포트폴리오입니다. 이곳에서 제 작업물들을 확인하실 수 있습니다.' },
            ];
            let index = 0;
            const intervalId = setInterval(function() {
                self.CJMessage.push(messages[index]);
                index++;
                if (index >= messages.length) {
                    clearInterval(intervalId);
                }
            }, 800);
        },
        sendUserMessage() {
            /*
            const msg = this.insertMessage;
            const messageTime = new Date().toLocaleTimeString();

            this.inputMessage.push({ msg: msg, time: messageTime });
            this.insertMessage = '';
             */
            if (this.insertMessage == '') {
                // console.log('공란입력')
            } else {
                const message = {
                    text: this.insertMessage,
                    time: new Date().toLocaleTimeString().substring(0, 8)
                }
                this.addMessage(message)
                this.insertMessage = ''
            }
        }
    }
}