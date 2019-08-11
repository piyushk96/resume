import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt, faPhoneAlt, faAt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Resume from './Resume.vue'

Vue.config.productionTip = false;

library.add(
	faMapMarkerAlt,
	faPhoneAlt,
	faAt,
	faFacebook,
	faLinkedin,
	faGithub
);
Vue.component('font-awesome', FontAwesomeIcon);

Vue.filter('uppercase', (value) => {
	if (!value) return '';
	return value.toUpperCase();
});

new Vue({
	render: h => h(Resume),
	el: '#app',
});
