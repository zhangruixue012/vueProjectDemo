import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Manage from '@/pages/Manage'
import Record from '@/pages/Record'
import Query from '@/pages/Query'
import Approval from '@/pages/Approval'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			component: Home,
			children:[
				{
					path:'/',
					name:'Manage',
					component:Manage
				},
				{
					path:'/Record',
					name:'Record',
					component:Record
				},
				{
					path:'/Query',
					name:'Query',
					component:Query
				},
				{
					path:'/Approval',
					name:'Approval',
					component:Approval
				}
			]
			
		}
	]
})
