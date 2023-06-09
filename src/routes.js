import { createRouter, createWebHashHistory } from 'vue-router'

const routerHistory = createWebHashHistory()

import HomePage from './pages/HomeItem.vue'
import AboutPage from './pages/AboutItem.vue'
import NotFoundPage from './pages/notFound.vue'
import Item from './pages/_ItemAlias.vue'

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/:ItemAlias',
      name: 'ItemAlias',
      component: Item
    },
    {
      path: '/:CatchAll(.*)',
      name: '404',
      component: NotFoundPage
    }
  ]
})

export default routers
