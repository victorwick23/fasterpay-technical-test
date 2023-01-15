import { createRouter, createWebHistory } from "vue-router";
import ConvertMoney from "../pages/ConvertMoney.vue";
import DashboardHome from "../components/Layouts/DashboardLayout.vue";

const routes = [
  {
    // when visiting the home routes it will redirect to page convert money, because we're no yet have home routes
    path: "/",
    name: "DashboardHome",
    redirect: "/convert-money",
    component: DashboardHome,
    children: [
      {
        path: "convert-money",
        name: "ConvertMoney",
        component: ConvertMoney,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  base: "/",
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        selector: window.scrollTo(0, 0),
        behavior: "smooth",
      };
    }
  },
});

export default router;
