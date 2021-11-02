<template>
	<div>
		关于本页面2 hello world
		<p>useSetupInputValue:{{iv}}</p>
	</div>
</template>

<script>
	import {
		useSetupInputValue
	} from '@/provide/input-value.js';
	export default {
		setup() {
			return {
				iv: useSetupInputValue()
			}
		}
	}
</script>

<style>
</style>
