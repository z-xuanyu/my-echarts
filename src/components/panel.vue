<template>
    <div class="panel">
        <h2>图标标题</h2>
        <!-- 柱状图插槽 -->
        <slot name="histogram"></slot>
        <div class="panel-footer"></div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/style/panel/index.scss";
</style>