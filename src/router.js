import { createWebHistory, createRouter } from "vue-router";
import Home from './home.vue'
import GeneralInfomation from './components/generalinformation.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/generalinformation",
        name: "Information",
        component: GeneralInfomation,
      }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;