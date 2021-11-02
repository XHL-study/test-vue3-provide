<template>
	<div>
		关于本页面 hello world
		<div >
			{{iv}}
		</div>
		
		<template v-for="i in 5" :key="i">
			<label :for="'c'+i">
				<input :id="'c'+i" :value="'c'+i" type="checkbox" name="c1" placeholder="x"/>
				多选框{{i}}
			</label>
		</template>
	</div>
</template>

<script>
	import {
		useInputValue,
	} from '@/provide/input-value.js';
	export default {
		inject: {
			iv: useInputValue,
		}
	}
</script>

<style>
</style>
