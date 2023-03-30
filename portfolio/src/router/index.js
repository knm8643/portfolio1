import {createRouter, createWebHistory} from "vue-router";
import showYour from "@/components/ShowYour.vue";

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