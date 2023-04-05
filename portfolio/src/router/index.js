import {createRouter, createWebHistory} from "vue-router";
import MoComponents from "@/components/MoCompo.vue";
import PcComponents from "@/components/PcCompo.vue";
import MainCompo from "@/components/MainCompo.vue";

// import showYour from "@/components/ShowYour.vue";

const routes = [
    {
        path: "/",
        name: "main",
        component: MainCompo,
        children:[
            {
                path : "Mo",
                component : MoComponents
            },
            {
                path: "Pc",
                component: PcComponents
            }
        ]
    },
]

/*
 **1차 초기버전**
 const routes = [
    {
        path: "/",
        name: "showYour",
        component: showYour,
        children : [
            {
            path : "History",
            components : import(/!* webpackChunkName: "main" *!/ "@/components/HistoryMe"),
            }
        ]
    },
]*/
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    base: '/portfolio1/',
    routes,
});
export default router;