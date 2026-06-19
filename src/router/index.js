import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import GovernanceView from '../views/GovernanceView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/services', name: 'services', component: ServicesView },
    { path: '/governance', name: 'governance', component: GovernanceView },
    { path: '/contact', name: 'contact', component: ContactView }
  ]
})

export default router