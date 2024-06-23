import { createRouter, createWebHistory } from 'vue-router'
import ResultsView from '../views/ResultsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ResultsView
    }
  ]
})

export default router
