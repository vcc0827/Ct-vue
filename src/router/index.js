import Vue from 'vue'
import Router from 'vue-router'

//主页
import main from '../components/main'
//登录注册
import Login from '../components/Register/Login.vue'
//用户信息
import userinfo from '../components/User/userinfo'
import write from '../components/User/write'
import upload from '../components/User/upload'
//展示
import buy from '../components/show/buy'
import food from '../components/show/food'
import photo from '../components/show/photo'
//他人游记信息
import ShowALL from '../components/Blog/Home'
import ReadOne from '../components/Read/ReadOne'
import Blog from '../components/Blog/Blog'
//test
import test from '../components/User/test'
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/test',
      name:'test',
      component:test,
    },
    {
      path:'/',
      name:'main',
      component:main,
    },
    {
      path: '/register/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/user/write',
      name: 'write',
      component: write,
      meta:{
        requireLogin:true // 当前路由需要校验
      }
    },
    {
      path: '/user/userinfo',
      name: 'userinfo',
      component: userinfo,
      meta:{
        requireLogin:true // 当前路由需要校验
      }
    },
    {
      path: '/user/upload',
      name: 'upload',
      component: upload,
      meta:{
        requireLogin:true // 当前路由需要校验
      }
    },
    {
      path:'/show/buy',
      name:'buy',
      component:buy,
    },
    {
      path:'/show/food',
      name:'food',
      component:food,
    },
    {
      path:'/show/photo',
      name:'photo',
      component:photo,
    },

    {
      path:'/',
      name:'ShowALL',
      component:ShowALL,
      children:[
        {
          path:'read/:id',
          name:'read',
          component:ReadOne,
        },
        {
          path:'blog/:id',
          name:'blog',
          component:Blog,
        }
      ]
    },

    // {
    //   path: '/read/:id',
    //   name: 'read',
    //   component: ReadOne
    // },
    // {
    //   path: '/blog/:id',
    //   name: 'blog',
    //   component: Blog
    // },

  ]
});
