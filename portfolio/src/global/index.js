import axios from "axios";
export default {
    install(vue) {
        axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        vue.config.globalProperties.$axios = axios;
    },
};
