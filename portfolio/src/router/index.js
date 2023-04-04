import {createRouter, createWebHistory} from "vue-router";
import showYour from "@/components/ShowYour.vue";

const routes = [
    {
        path: "/",
        name: "showYour",
        component: showYour,
        children : [
            {
            path : "History",
            components : import(/* webpackChunkName: "main" */ "@/components/HistoryMe"),
            }        
        ]
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    base: '/portfolio1/',
    routes,
});
export default router;