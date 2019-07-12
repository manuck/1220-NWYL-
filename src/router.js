import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import PostPage from './views/PostPage.vue'
import PortfolioPage from './views/PortfolioPage.vue'
import LoginPage from './views/LoginPage.vue'
import PortfolioNewPage from './views/PortfolioNewPage.vue'
import HomePage2 from './views/HomePage2.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		{
			path: '/pjt2',
			name: 'pjt2',
			component: HomePage
		},
		{
			path: '/post',
			name: 'post',
			component: PostPage
		},
		{
			path: '/portfolio',
			name: 'portfolio',
			component: PortfolioPage
		},
		{
			path: '/login',
			name: 'login',
			component: LoginPage
		},
		{
			path: '/portfolio/new',
			name: 'new',
			component: PortfolioNewPage
		},
		{
			path: '/',
			name: 'home',
			component: HomePage2
		},
  ]
})
