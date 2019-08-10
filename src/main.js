import Vue from 'vue'
import Resume from './Resume.vue'

Vue.config.productionTip = false

Vue.filter('uppercase', (value) => {
	if (!value) return '';
	return value.toUpperCase();
})

new Vue({
	render: h => h(Resume),
	el: '#app',
});
