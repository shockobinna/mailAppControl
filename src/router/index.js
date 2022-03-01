import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BlocoA from "../components/BlocoA.vue";
import BlocoB from "../components/BlocoB.vue";
import BlocoC from "../components/BlocoC.vue";
import Dashboard from "../components/Dashboard.vue";
import Login from "../components/Login.vue";
import PesquisarEncomenda from "../components/PesquisarEncomenda.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blocoA",
    name: "BlocoA",
    component: BlocoA,
  },
  {
    path: "/blocoB",
    name: "BlocoB",
    component: BlocoB,
  },
  {
    path: "/blocoC",
    name: "BlocoC",
    component: BlocoC,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/encomenda",
    name: "Encomenda",
    component: PesquisarEncomenda,
    props:true
  },
  //{
  //path: "/about",
  //name: "About",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //component: () =>
  //import(/* webpackChunkName: "about" */ "../views/About.vue"),
  //},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
