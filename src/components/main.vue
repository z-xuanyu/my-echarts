<template>
    <div class="main">
        <div class="left">
            <v-panel>
                <div slot="charts">
                    <ve-histogram
                        :settings="chartSettings"
                        :legend-visible="show"
                        :height="height"
                        :data="chartData"
                    ></ve-histogram>
                </div>
            </v-panel>
            <v-panel />
            <v-panel />
        </div>
        <div class="center">
            <v-map />
        </div>
        <div class="right">
            <v-panel />
            <v-panel />
            <v-panel />
        </div>
    </div>
</template>

<script>
import vPanel from "./panel";
import vMap from "./map";
export default {
    components: {
        vPanel,
        vMap
    },
    data() {
        return {
            height: "3.666667rem",
            show: false,
            chartData: {
                columns: ["行业", "访问用户"],
                rows: [
                    {
                        行业: "游戏行业",
                        访问用户: 1393
                    },
                    {
                        行业: "游戏行业",
                        访问用户: 3530
                    },
                    {
                        行业: "游戏行业",
                        访问用户: 2923
                    },
                    {
                        行业: "游戏行业",
                        访问用户: 1723
                    },
                    {
                        行业: "游戏行业",
                        访问用户: 3792
                    },
                    {
                        行业: "游戏行业",
                        访问用户: 4593
                    }
                ]
            },
            chartSettings:{
                xAxisType:'category',
                opacity:0.6,
                itemStyle:{
                    barBorderRadius: [5, 5, 0, 0],
                    color:'#f60',
                }
            }
        };
    }
};
</script>

<style lang="scss" scoped>
.main {
    display: flex;
    padding: 0.121212rem 0.121212rem 0;
    .left {
        flex: 3;
    }
    .center {
        flex: 5;
        margin: 0 0.121212rem;
    }
    .right {
        flex: 3;
    }
}
</style>
