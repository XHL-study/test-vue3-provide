import {
	ref,
	readonly,
	inject
} from 'vue';

//init value
let inputValue = ref('default value');

//update value
export function updateInputValue(newVal) {
	inputValue.value = newVal;
}

// use
export const useInputValue = Symbol('input-value');
export const useSetupInputValue = () => inject(useInputValue);

//install
export default function install(app) {
	app.provide(useInputValue, readonly(inputValue));
}
