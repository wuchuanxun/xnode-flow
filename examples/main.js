import Vue from 'vue'
import App from './App.vue'

import XNodeFlow from "../packages";
Vue.use(XNodeFlow);

import "../theme/node-flow-theme.css";

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
