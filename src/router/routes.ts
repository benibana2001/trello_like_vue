import { RouteConfig } from 'vue-router';
import KbnBoardView from '@/components/templates/KbnBoardView.vue';
// import KbnLoginView from '@/components/templates/KbnLoginView.vue';
// import KbnTaskDetailModal from '@/components/templates/KbnTaskDetailModal.vue';

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: KbnBoardView,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    // component: KbnLoginView,
    component: () => import('@/components/templates/KbnLoginview.vue'),
  },
  {
    path: '/tasks/:id',
    // component: KbnTaskDetailModal,
    component: () => import('@/components/templates/KbnBoardView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '*',
    redirect: '/',
  },
];

export default routes;
