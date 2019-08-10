import Vue from 'vue'
import Resume from './Resume.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Resume),
  el: '#app',
});
