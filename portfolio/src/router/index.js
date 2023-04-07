import {createRouter, createWebHistory} from "vue-router";
import MoComponents from "@/components/MoCompo.vue";
import PcComponents from "@/components/PcCompo.vue";
import MainCompo from "@/components/MainCompo.vue";

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

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    base: '/portfolio1/',
    routes,
});
export default router;