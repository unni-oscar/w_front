import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from '../components/Dashboard'
import About from '../components/About'
import Profile from '../components/Profile'
import Contact from '../components/Contact'
import Login from '../components/auth/Login'

Vue.use(Router)

export default new Router({
  mode: 'history', // Remove # from the url
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/user',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: 'profile',
          name: 'Profile',
          components: {
            mainarea: Profile
          }
        }
      ]
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
