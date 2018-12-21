import MSite from '../views/MSite/MSite.vue'
import Search from '../views/Search/Search.vue'
import Order from '../views/Order/Order.vue'
import Profile from '../views/Profile/Profile.vue'
export default [
  {
    path: '/msite',
    component: MSite
  },
  {
    path: '/search',
    component: Search
  },
  {
    path:'/order',
    component: Order
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/',
    redirect: '/msite'
  }
]
