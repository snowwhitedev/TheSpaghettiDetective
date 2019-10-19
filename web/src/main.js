import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

import App from './App.vue'

new Vue({
  el: '#hobby-plan',
  render: h => h(App)
})
