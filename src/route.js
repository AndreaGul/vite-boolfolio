import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ListProject from './pages/ListProject.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
    },
    {
      path: '/blog',
      name: 'projects',
      component: ListProject,
    },
    {
      path: '/about',
      name: 'project',
      component: AppAbout,
    },
  ],
});
export default router;
