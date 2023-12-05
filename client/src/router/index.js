import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/courses',
    name: 'courses',
    component: () => import('../views/Courses.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginForm.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/registrationForm',
    name: 'registrationForm',
    component: () => import('../views/RegistrationForm.vue')
  },
  {
    path: '/:CatchAll(.*)',
    name: '404',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)){
    // Authentication check
    const token = localStorage.getItem('token')
    if (token){
      // Check if token is valid
      return next()
    } 
    return next('/login')
  }
  next()
})

export default router