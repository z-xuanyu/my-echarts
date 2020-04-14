<template>
  <div>
    <!-- 柱状图 -->
    <h2>{{ title }}</h2>
    <ve-histogram
      :settings="chartSettings"
      :height="height"
      :data="chartData"
      :grid="grid"
      :extend="chartExtend"
    ></ve-histogram>
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
    // 配置
    this.chartExtend = {
      series: {
        color: "#2f89cf", //柱子背景颜色
        barWidth: 15,
        itemStyle: {
          barBorderRadius: 5
        },
        label: {
          show: true,
          position: "top",
          textStyle: {
            color: "rgb(126, 203, 224)"
          }
        }
      },
      xAxis: {
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          show: false
        }
      },
      yAxis: {
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      },
      legend: {
        textStyle: {
          color: "rgb(126, 203, 224)" //图例字体颜色
        }
      }
    };
    this.grid = {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    };
    return {
      height: "3rem",
      chartData: {
        columns: ["行业", "直接访问"],
        rows: [
          {
            行业: "游戏行业",
            直接访问: 1393
          },
          {
            行业: "电商行业",
            直接访问: 3530
          },
          {
            行业: "游戏行业",
            直接访问: 2923
          },
          {
            行业: "游戏行业",
            直接访问: 1723
          },
          {
            行业: "游戏行业",
            直接访问: 3792
          },
          {
            行业: "游戏行业",
            直接访问: 4593
          }
        ]
      },
      chartSettings: {
        xAxisType: "category",
        opacity: 0.6,
        itemStyle: {
          barBorderRadius: [5, 5, 0, 0],
          color: "#f60"
        }
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
