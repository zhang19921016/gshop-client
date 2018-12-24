import MSite from '../views/MSite/MSite.vue'
import Search from '../views/Search/Search.vue'
import Order from '../views/Order/Order.vue'
import Profile from '../views/Profile/Profile.vue'
import Login from '../views/Login/Login.vue'
import Shop from '../views/Shop/Shop.vue'
import ShopGoods from '../views/Shop/ShopGoods/ShopGoods.vue'
import ShopInfos from '../views/Shop/ShopInfos/ShopInfos.vue'
import ShopRatings from '../views/Shop/ShopRatings/ShopRatings.vue'
export default [
  {
    path: '/msite',
    component: MSite,
    meta: {
      showFooter:true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      showFooter:true
    }
  },
  {
    path:'/order',
    component: Order,
    meta: {
      showFooter:true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      showFooter:true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/shop',
    component: Shop,
    children: [
      {
        path: '/shop/goods',
        component: ShopGoods
      },
      {
        path: '/shop/ratings',
        component: ShopRatings
      },
      {
        path: '/shop/infos',
        component: ShopInfos
      },
      {
        path: '',
        redirect: '/shop/goods'
      }
    ]
  },
  {
    path: '/',
    redirect: '/msite'
  }
]
