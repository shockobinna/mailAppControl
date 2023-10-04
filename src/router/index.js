import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BlocoA from "../components/BlocoA.vue";
// import BlocoB from "../components/BlocoB.vue";
// import BlocoC from "../components/BlocoC.vue";
import Dashboard from "../components/Dashboard.vue";
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";
import PesquisarEncomenda from "../components/PesquisarEncomenda.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cadastrar",
    name: "BlocoA",
    component: BlocoA,
  },
  // {
  //   path: "/blocoB",
  //   name: "BlocoB",
  //   component: BlocoB,
  // },
  // {
  //   path: "/blocoC",
  //   name: "BlocoC",
  //   component: BlocoC,
  // },
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
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/encomenda",
    name: "Encomenda",
    component: PesquisarEncomenda,
    props:true
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
