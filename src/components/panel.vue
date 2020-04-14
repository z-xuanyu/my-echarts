<template>
    <div class="panel">
        <!-- 柱状图插槽 -->
        <slot name="histogram"></slot>
        <!-- 折线图 -->
        <slot name="line"></slot>
        <!-- 饼形图 -->
        <slot name="pie"></slot>
        <div class="panel-footer"></div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/style/panel/index.scss";
</style>