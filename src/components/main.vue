<template>
    <div class="main">
        <div class="left">
            <!-- 柱状图 -->
            <v-panel>
                <template slot="histogram">
                    <v-histogram></v-histogram>
                </template>
            </v-panel>
            <!-- 折线图 -->
            <v-panel />
            <!-- 饼形图 -->
            <v-panel />
        </div>
        <div class="center">
            <v-map />
        </div>
        <div class="right">
            <!-- 柱状图 -->
            <v-panel />
            <!-- 折线图 -->
            <v-panel />
            <!-- 饼形图 -->
            <v-panel />
        </div>
    </div>
</template>

<script>
import vPanel from "./panel";
import vMap from "./map";
import vHistogram from "./charts/v-histogram";
export default {
    components: {
        vPanel,
        vMap,
        vHistogram
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main/index.scss";
</style>
