import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Widget from '@/pages/Widget'
import Dashboard from '@/pages/Dashboard'
import Panels from '@/pages/Panels'
import Editor from '@/pages/Editor'
import Charts from '@/pages/Charts'


Vue.use(Router);

export default new Router({
  routes: [
      {
          path: '/',
          component: Home,
          children:[
              {
                path:'/',
                name:'Dashboard',
                component:Dashboard
              },
              {
                path:'widget',
                name:'Widget',
                component:Widget
              },
	          {
                  path:'panels',
                  name:'Panels',
                  component:Panels
	          },
	          {
		          path:'editor',
		          name:'Editor',
		          component:Editor
	          },
	          {
		          path:'charts',
		          name:'Charts',
		          component:Charts
	          }
          ]
          
      }
      
  ]
})
