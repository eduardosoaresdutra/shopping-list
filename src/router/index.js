import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardComponent from '../components/pages/DashboardComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: DashboardComponent
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
