/*
 * @Author: xuanyu
 * @Date: 2020-04-14 12:06:21
 * @LastEditTime: 2020-04-14 14:01:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-echarts/src/main.js
 */
import Vue from "vue";
import App from "./App.vue";
// 样式重置化
import "./assets/style/restcss.scss";
// 移动端适配
import "./assets/js/flexible";
// 引入v-charts组件
// 柱状图
import VeHistogram from "v-charts/lib/histogram.common";
// 折线图
import VeLine from "v-charts/lib/line.common"
// 饼状图
import VePie  from "v-charts/lib/pie.common"
Vue.component(VePie.name,VePie)
Vue.component(VeLine.name,VeLine)
Vue.component(VeHistogram.name, VeHistogram);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
