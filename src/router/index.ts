import { createRouter, createWebHistory } from 'vue-router'
import PaginatedTableView from '../views/PaginatedTableView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PaginatedTableView
    }
  ]
})

export default router
