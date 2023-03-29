import {createRouter, createWebHistory} from "vue-router";
import showYour from "@/components/showYour.vue";
//npm install vue-router

const routes = [
    {
        path: "/",
        name: "showYour",
        component: showYour,
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;