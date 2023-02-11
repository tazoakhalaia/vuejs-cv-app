import { createWebHistory, createRouter } from "vue-router";
import Home from './home.vue'
import GeneralInfomation from './components/generalinformation.vue'
import Experience from './components/experience.vue'
import Education from './components/education.vue'
import Result from './components/resumeResult.vue'

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
      },
      {
        path: "/education",
        name: "Education",
        component: Education,
      },
      ,
      {
        path: "/result",
        name: "resumeResult",
        component: Result,
      }
      
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;