import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'Home',
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
    }
  ],
});

router.beforeEach((to, from, next) => {
  next();
})

export default router;
