<!--
 * @Author: xuanyu
 * @Date: 2020-04-14 13:57:08
 * @LastEditTime: 2020-04-14 14:38:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-echarts/src/components/charts/v-pie.vue
 -->
<template>
  <div>
    <h2>{{ title }}</h2>
    <!--饼形图 -->
    <ve-pie :data="chartData" :settings='pieSettings' height="3rem"></ve-pie>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "默认标题"
    }
  },
  data() {
    return {
      chartData: {
        columns: ["日期", "访问用户"],
        rows: [
          { 日期: "1/1", 访问用户: 1393 },
          { 日期: "1/2", 访问用户: 3530 },
          { 日期: "1/3", 访问用户: 2923 },
          { 日期: "1/4", 访问用户: 1723 },
          { 日期: "1/5", 访问用户: 3792 },
          { 日期: "1/6", 访问用户: 4593 }
        ]
      },
      pieSettings:{
          
      }
    };
  }
};
</script>

<style lang="scss" scoped>
h2 {
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #fff;
  font-size: 0.25rem;
  font-weight: 400;
}
</style>
