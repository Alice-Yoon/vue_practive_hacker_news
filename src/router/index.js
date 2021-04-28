import { createRouter, createWebHistory } from 'vue-router'
import News from '../views/News.vue'
import Ask from '../views/Ask.vue'
import Jobs from '../views/Jobs.vue'

const routes = [
  {
    path: '',
    redirect: '/news'
  },
  {
    path: '/news',
    name: 'News',
    component: News
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/News.vue')
  },
  {
    path: '/ask',
    name: 'Ask',
    component: Ask
    // component: () => import(/* webpackChunkName: "about" */ '../views/Ask.vue')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
    // component: () => import(/* webpackChunkName: "about" */ '../views/Jobs.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
