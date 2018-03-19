import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Dashbord from '@/components/Dashbord';
import AddTask from '@/components/AddTask';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashbord',
      name: 'Dashbord',
      component: Dashbord,
      children: [
        {
          path: 'add_task',
          component: AddTask
        }
      ]
    }
  ]
})
