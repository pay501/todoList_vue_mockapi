import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Update from '../views/UpdateView.vue'
import  TestView from "../views/TestView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/todo/edit/:id',
      name:'todo-edit',
      component:Update
    },
    {
      path:"/test",
      name:"test-tailwind",
      component: TestView
    }
  ]
})

export default router
