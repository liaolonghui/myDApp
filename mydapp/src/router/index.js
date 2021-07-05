import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Forums from '../views/Forums.vue'
import Markets from '../views/Markets.vue'
import Products from '../views/Products.vue'
import BuyNow from '../views/BuyNow.vue'
import HomeIndex from '../components/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Index',
        component: HomeIndex
      },
      {
        path: '/shop',
        name: 'Shop',
        component: Shop
      },
      {
        path: '/forums',
        name: 'Forums',
        component: Forums
      },
      {
        path: '/markets',
        name: 'Markets',
        component: Markets
      },
      {
        path: '/products',
        name: 'Products',
        component: Products
      },
      {
        path: '/buyNow',
        name: 'BuyNow',
        component: BuyNow
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
