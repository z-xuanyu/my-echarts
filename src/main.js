import Vue from 'vue'
import App from './App.vue'
import './assets/style/restcss.scss'
import 'lib-flexible'
import VeHistogram from "v-charts/lib/histogram.common";
Vue.component(VeHistogram.name, VeHistogram);
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
