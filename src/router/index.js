import Vue from 'vue'
import Router from 'vue-router'


import Index from '@/components/index.vue';
import Main from '@/components/main/main.vue';
import Regist from '@/components/regist/regist.vue';
import RegistSuccessful from '@/components/regist/successful.vue';
import Square from '@/components/main/square/square.vue';
import Follow from '@/components/main/follow/follow.vue';
import My from '@/components/main/my/my.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'square',
          name: 'Square',
          component: Square
        },
        {
          path: 'follow',
          name: 'Follow',
          component: Follow
        },
        {
          path: 'my',
          name: 'My',
          component: My
        }
      ]
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/regist/successful',
      name: 'RegistSuccessful',
      component: RegistSuccessful
    },
    
  ]
})
