import { createWebHistory, createRouter } from "vue-router";
import Home from './home.vue'

const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
      }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;