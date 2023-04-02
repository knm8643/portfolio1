import HistoryMe from "@/components/HistoryMe.vue";
import { mapState, mapMutations } from 'vuex'

export default {
    name: "showYour",
    components:{
        HistoryMe
    },
    computed: {
        todays(){
            return this.$store.state.today.substring(0,7)
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
        }
    },
    methods:{
        ...mapMutations([
            'addMessage'
        ]),
        sendUserMessage() {
            /*
            const msg = this.insertMessage;
            const messageTime = new Date().toLocaleTimeString();

            this.inputMessage.push({ msg: msg, time: messageTime });
            this.insertMessage = '';
            */

            if(this.insertMessage ==''){
                console.log('공란입력')
            } else {
                const message = {
                    text: this.insertMessage,
                    time: new Date().toLocaleTimeString().substring(0, 7)
                }
                this.addMessage(message)
                this.insertMessage = ''
            }
        }
    }
}