import Vue from 'vue';
import Router from 'vue-router';
import Index1 from '@/views/index/Index1';
import Index2 from '@/views/index/Index2';
import Index3 from '@/views/index/Index3';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/index1',
      component: Index1,
    },
    {
      path: '/index2',
      component: Index2,
    },
    {
      path: '/index3',
      component: Index3,
    },
  ],
});
