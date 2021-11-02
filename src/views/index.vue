<template>
	<div>
		首页，测试 自定义 provide 全局状态管理

		<div>
			{{iv}}
		</div>
		<input type="text" v-model="inputValue" />

		<div @click="$router.push({
				path:'/index/about',
				query:{test:iv}
			})">
			go children about page
		</div>
		<div @click="$router.push({
				path:'/index/about2',
				query:{test:iv}
			})">
			go children about2 page
		</div>
		<div @click="$router.push({
				path:'/about',
				query:{test:iv}
			})">
			go about page
		</div>

		<div @click="$router.push({
				name:'abount5',
				params:{test:'iv',ct:'xx'}
			})">
			go about5 page
		</div>


		<router-view></router-view>
	</div>
</template>

<script>
	import {
		useInputValue,
		updateInputValue
	} from '@/provide/input-value.js';
	export default {
		inject: {
			iv: useInputValue
		},
		name: 'App',
		components: {},
		data() {
			return {
				inputValue: this.iv
			}
		},
		watch: {
			inputValue(to) {
				console.log(to);
				updateInputValue(to);
			}
		},
		created() {
			console.log('11111')
		}
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
