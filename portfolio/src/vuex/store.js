import  { createStore } from "vuex";
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions";

export default createStore({
    state: {
        // 채팅기록
        inputMessage : [],
        today: new Date().toLocaleTimeString()
    },
    mutations,
    getters,
    actions
})
