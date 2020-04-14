import Vue from "vue";
import App from "./App.vue";
// 样式重置化
import "./assets/style/restcss.scss";
// 移动端适配
import "./assets/js/flexible";
// 引入v-charts组件
import VeHistogram from "v-charts/lib/histogram.common";
Vue.component(VeHistogram.name, VeHistogram);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
