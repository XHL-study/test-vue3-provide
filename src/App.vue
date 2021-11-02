<template>
	{{transitionName}}
	<router-view v-slot="{ Component }">
		<transition :name="transitionName">
			<component :is="Component"></component>
		</transition>
	</router-view>
</template>

<script>
	export default {
		data() {
			return {
				transitionName: 'slide-left',
				canTransition: true,
			}
		},
		watch: {
			$route(from, to) {
				const toDepth = to.path.split('/').length;
				const fromDepth = from.path.split('/').length;
				if (this.canTransition)
					this.transitionName = toDepth > fromDepth ? 'slide-right' : 'slide-left';
				else
					this.transitionName = '';
				this.canTransition = true;
			}
		},
		async beforeCreate() {
			this.$router.addRoute({
				path: '/index',
				name: 'index',
				component: () => import( /* webpackChunkName: "index" */ '@/views/index.vue'),
				children: [{
					path: 'about5/:test/:ct',
					name: 'abount5',
					component: () => import( /* webpackChunkName: "index" */ '@/views/about.vue')
				}, {
					path: 'about57',
					name: 'abount57',
					component: () => import( /* webpackChunkName: "index" */ '@/views/about.vue')
				}]
			});
			this.$router.addRoute({
				path: '/:\\.*',
				name: "NotFound",
				component: () => import( /* webpackChunkName: "index" */ '@/views/e404.vue')
			});
			await this.$router.isReady();
			this.canTransition = false;
			await this.$router.replace(this.$router.currentRoute.value.fullPath);
		}

	}
</script>

<style>
	body {
		padding: 0;
		margin: 0;
	}

	#app>div {
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		/* background: cadetblue; */
	}

	.slide-right-enter-active,
	.slide-left-enter-active,
	.slide-right-leave-active,
	.slide-left-leave-active {
		will-change: transform;
		transition: all 300ms;
		position: absolute;
	}


	.slide-right-enter-active,
	.slide-left-enter-active {
		/* opacity: 1; */
		transform: translateX(0);
	}

	.slide-right-leave-active,
	.slide-left-enter-from {
		/* opacity: 0; */
		transform: translateX(100%);
	}

	.slide-right-enter-from,
	.slide-left-leave-active {
		/* opacity: 0; */
		transform: translateX(-100%);
	}
</style>
