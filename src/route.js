import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ListProject from './pages/ListProject.vue';
import ProjectDetail from './pages/ProjectDetail.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ListProject,
    },
    {
      path: '/about',
      name: 'about',
      component: AppAbout,
    },
    {
      path: '/projects/:slug',
      name: 'single-project',
      component: ProjectDetail,
    },
  ],
});
export default router;
