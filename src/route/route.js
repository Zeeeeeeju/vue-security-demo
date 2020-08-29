import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Detail from "@/components/Detail";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: HelloWorld,
        name: "home",
        meta: {
            title: 'login',
            type: 'login'
        }
    },
    {
        path: "/detail",
        component: Detail,
        name: "detail"
    }
];

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    const type = to.meta.type
    if (type === undefined && store.state.login.auth === undefined) {
        next('/')
    } else {
        next()
    }
})

export default router;