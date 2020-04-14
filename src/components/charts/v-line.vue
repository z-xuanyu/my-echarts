<!--
 * @Author: xuanyu
 * @Date: 2020-04-14 12:11:55
 * @LastEditTime: 2020-04-14 13:51:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-echarts/src/components/charts/v-line.vue
 -->

<template>
  <!-- 折线图 -->
  <div class="charts-wrapper">
      <h2>{{title}}</h2>
      <ve-line :grid="grid" :extend="extend" height="3rem"></ve-line>
  </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:"默认标题"
        }
    },
  data() {
    let yearData = [
      {
        year: "2020", // 年份
        data: [
          // 两个数组是因为有两条线
          [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
          [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ]
      },
      {
        year: "2021", // 年份
        data: [
          // 两个数组是因为有两条线
          [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
          [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
        ]
      }
    ];
    (this.extend = {
      // 通过这个color修改两条线的颜色
      color: ["#00f2f1", "#ed3f35"],
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data:['新增粉丝','新增游客'],
        textStyle: {
          color: "#4c9bfd"
        },
        // right: "10%"
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ],
        axisTick: {
          show: false // 去除刻度线
        },
        axisLabel: {
          color: "#4c9bfd" // 文本颜色
        },
        axisLine: {
          show: false // 去除轴线
        }
      },
      yAxis: {
        type: "value",
        axisTick: {
          show: false // 去除刻度线
        },
        axisLabel: {
          color: "#4c9bfd" // 文本颜色
        },
        axisLine: {
          show: false // 去除轴线
        },
        splitLine: {
          lineStyle: {
            color: "#012f4a" // 分割线颜色
          }
        }
      },
      series: [
        {
          name: "新增粉丝",
          type: "line",
          // true 可以让我们的折线显示带有弧度
          smooth: true,
          data: yearData[0].data[0]
        },
        {
          name: "新增游客",
          type: "line",
          smooth: true,
          data: yearData[0].data[1]
        }
      ]
    }),
      (this.grid = {
        top: "20%",
        left: "3%",
        right: "4%",
        bottom: "3%",
        show: true, // 显示边框
        borderColor: "#012f4a", // 边框颜色
        containLabel: true // 包含刻度文字在内
      });
    return {};
  }
};
</script>
<style lang="scss" scoped>
h2{
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    color: #fff;
    font-size: 0.25rem;
    font-weight: 400;
}
</style>