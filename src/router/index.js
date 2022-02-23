import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/AddNewTask",
    name: "AddNewTask",
    component: () => import("../views/AddNewTask.vue"),
    proprs: true,
  },
  {
    path: "/TaskList",
    name: "TaskList",
    component: () => import("../views/TaskList.vue"),
    proprs: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
