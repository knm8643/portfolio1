/* eslint-disable */
import MoComponents from "@/components/MoCompo.vue";
import PcComponents from "@/components/PcCompo.vue";
export default {
    name: "MainCompo",
    components: {PcComponents, MoComponents},
    component : [
        MoComponents,
        PcComponents
    ]
}