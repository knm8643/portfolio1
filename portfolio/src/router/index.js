import {createRouter, createWebHistory} from "vue-router";
import MoComponents from "@/components/MoCompo.vue";
import PcComponents from "@/components/PcCompo.vue";
import MainCompo from "@/components/MainCompo.vue";
import MoMainCompo from "@/components/MoMainCompo.vue";
import MoBackCompo from "@/components/MoBackCompo.vue";
import HalfClub from "@/components/HalfClub.vue";
import Safari from "@/components/Safari.vue";

const routes = [
    {
        path: "/",
        name: "main",
        component: MainCompo,
        children:[
            {
                path : "Mo",
                component : MoComponents,
                children:[
                    { path: "moMain", name: "moMain", component: MoMainCompo},
                    { path: "moBack", name: "moBack", component: MoBackCompo},
                    { path: "halfClub", name: "halfClub", component: HalfClub},
                    { path: "safari", name: "safari", component: Safari}
                ]
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