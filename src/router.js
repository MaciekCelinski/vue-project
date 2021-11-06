import { createRouter, createWebHistory } from 'vue-router';

// components
import NotFound from './pages/NotFound';

import CoachesList from './pages/coaches/CoachesList';
import CoachDetails from './pages/coaches/CoachDetails';
import CoachRegistration from './pages/coaches/CoachRegistration';
import CoachLogin from './pages/coaches/CoachLogin';

import RequestContact from './pages/requests/RequestContact';
import RequestReceived from './pages/requests/RequestReceived';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/coaches'
    },
    {
      path: '/coaches',
      component: CoachesList
    },
    {
      path: '/coaches/:coachId',
      component: CoachDetails,
      props: true,
      children: [{ path: 'contact', component: RequestContact }] // coaches/c1/contact
    },
    {
      path: '/login',
      component: CoachLogin
    },
    {
      path: '/register',
      component: CoachRegistration
    },
    {
      path: '/requests',
      component: RequestReceived
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
});

export default router;
