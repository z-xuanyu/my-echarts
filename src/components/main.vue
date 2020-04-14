<!--
 * @Author: your name
 * @Date: 2020-04-14 12:06:21
 * @LastEditTime: 2020-04-14 14:41:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-echarts/src/components/main.vue
 -->
<template>
    <div class="main">
        <div class="left">
            <!-- 柱状图 -->
            <v-panel>
                <template slot="histogram">
                    <v-histogram title="柱状图-就业行业"></v-histogram>
                </template>
            </v-panel>
            <!-- 折线图 -->
            <v-panel>
                <template slot="line">
                    <v-line title="折线图-人员变化"></v-line>
                </template>
            </v-panel>
            <!-- 饼形图 -->
            <v-panel>
                <template slot="pie">
                    <v-pie title="饼状图"></v-pie>
                </template>
            </v-panel>
        </div>
        <div class="center">
            <v-map />
        </div>
        <div class="right">
            <!-- 柱状图 -->
            <v-panel>
                <template slot="histogram">
                    <v-histogram title="柱状图-就业行业"></v-histogram>
                </template>
            </v-panel>
            <!-- 折线图 -->
            <v-panel>
                <template slot="line">
                    <v-line title="折线图-人员变化"></v-line>
                </template>
            </v-panel>
            <!-- 饼形图 -->
            <v-panel>
                <template slot="pie">
                    <v-pie title="饼状图"></v-pie>
                </template>
            </v-panel>
        </div>
    </div>
</template>

<script>
import vPanel from "./panel";
import vMap from "./map";
import vHistogram from "./charts/v-histogram";
import vLine from "./charts/v-line"
import vPie from "./charts/v-pie"
export default {
    components: {
        vPanel,
        vMap,
        vHistogram,
        vLine,
        vPie
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main/index.scss";
</style>
