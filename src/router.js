import { createWebHistory, createRouter } from "vue-router";
import Home from './home.vue'
import GeneralInfomation from './components/generalinformation.vue'
import Experience from './components/experience.vue'

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
      },
      {
        path: "/experience",
        name: "Experience",
        component: Experience,
      }
      
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;