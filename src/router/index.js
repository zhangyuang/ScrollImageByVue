import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Index from '@/components/Index/Index'
import Second from '@/components/Second/Second'
import Third from '@/components/Third/Third'

Vue.use(Router)

export default new Router({
  mode: 'history',	
  routes: [
    {
		path: '/',
		component: Index,
		name: '1'
    },
    {
    	path: '/second',
    	component: Second,
    	name: '2',
    },
    {
     	path: '/third',
     	component: Third,
     	name: '3'
    }
  ]
})
