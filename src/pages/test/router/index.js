import Vue from 'vue';
import Router from 'vue-router';
import Test1 from '@/views/test/Test1';
import Test2 from '@/views/test/Test2';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/test1',
      component: Test1,
    },
    {
      path: '/test2',
      component: Test2,
    },
  ],
});
