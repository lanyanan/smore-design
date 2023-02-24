import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory('/examples'),
  routes: [
    {
      name: 'Button 组件',
      path: '/button',
      component: () => import('../src/views/button/demo/demo1.vue')
    },
  ]
});

export default router;
