import {
	createRouter,
	createWebHashHistory
} from 'vue-router';


const routes = [{
	path: '/',
	component: () => import( /* webpackChunkName: "index" */ '@/views/index.vue'),
}, {
	path: '/index',
	name:'index',
	component: () => import( /* webpackChunkName: "index" */ '@/views/index.vue'),
	children: [{
		path: 'about',
		component: () => import( /* webpackChunkName: "index" */ '@/views/about.vue')
	}, {
		path: 'about2',
		component: () => import( /* webpackChunkName: "index" */ '@/views/about2.vue')
	}]
}, {
	path: '/about',
	name: 'about',
	component: () => import( /* webpackChunkName: "index" */ '@/views/about.vue')
},  ];

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes: routes,
});


// router.beforeEach((to, from, next) => {
// 	console.log(to);
// 	next();
// })

export default router;
