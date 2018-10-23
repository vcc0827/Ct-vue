import Vue from 'vue'
import Router from 'vue-router'
import ShowALL from '../components/Home'
import ReadOne from '../components/Read/ReadOne'
import Blog from '../components/Blog/Blog'
import home from '../components/Home/show'
import hk from '../components/Food/HK'
import tb from '../components/Food/TB'
import xjp from '../components/Food/XJP'
import qm from '../components/Food/QM'
import lsj from '../components/Shop/lsj'
import am from '../components/Shop/am'
import db from '../components/Shop/db'
import dj from '../components/Shop/dj'
//用户信息
import userinfo from '@/components/User/userinfo'
import write from '@/components/User/write'
import upload from '@/components/User/upload'
//登录注册
import Main from '@/components/Regedit/Main.vue'
import Login from '@/components/Regedit/Login.vue'
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ShowALL',
      component: ShowALL,
      children: [
        {
          path:'',
          name:'home',
          component:home
        },
        {
          path: 'read/:id',
          name: 'read',
          component: ReadOne
        },
        {
          path: 'blog/:id',
          name: 'blog',
          component: Blog
        }
      ],
    },
    {
      path:'/hk',
      component:hk
    },
    {
      path:'/tb',
      component:tb
    },
    {
      path:'/xjp',
      component:xjp
    },
    {
      path:'/qm',
      component:qm
    },
    {
      path:'/lsj',
      component:lsj
    },
    {
      path:'/am',
      component:am
    },
    {
      path:'/db',
      component:db
    },
    {
      path:'/dj',
      component:dj
    },
    {
      path: '/user/write',
      name: 'write',
      component: write
    },
    {
      path: '/user/userinfo',
      name: 'userinfo',
      component: userinfo
    },
    {
      path: '/user/upload',
      name: 'upload',
      component: upload
    },{
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }

  ]
})
