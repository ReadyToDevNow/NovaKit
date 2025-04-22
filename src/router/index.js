import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('../views/HomeViews.vue'),
    },
    {
      path: '/Product',
      name: 'ProductSheet',
      component: () => import('../views/ProductViews.vue'),
    },
  ],
})

export default router
