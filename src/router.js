import Vue from 'vue'
import Router from 'vue-router'
import PostPage from './views/PostPage.vue'
import MenuPage from '@/views/MenuPage.vue'
import WeeklyMenuPage from '@/views/WeeklyMenuPage.vue'
import PortfolioPage from './views/PortfolioPage.vue'
import LoginPage from './views/LoginPage.vue'
import HomePage from './views/HomePage.vue'
import GitlabGraph2 from './views/GitlabGraph2.vue'
import PortfolioDetailPage from './views/PortfolioDetailPage'
import AdminPage from './views/AdminPage.vue'



Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage
		},
		{
			path: '/post',
			name: 'post',
			component: PostPage
		},
		{
			path: '/menu',
			name: 'menu',
			component: MenuPage
		},
		{
			path: '/weeklymenu',
			name: 'weeklymenu',
			component: WeeklyMenuPage
		},
		{
			path: '/portfolio',
			name: 'portfolio',
			component: PortfolioPage,
		},
		{
			path: '/login',
			name: 'login',
			component: LoginPage
		},
 		{
			path: '/gitlabgraph2',
			name: 'gitlabgraph2',
			component: GitlabGraph2
		},
		{
			path: '/portfolio/:Pfid',
			name: 'details',
			component: PortfolioDetailPage,
		},
		{
			path: '/admin',
			name: 'admin',
			component: AdminPage
		},
  ]
})
