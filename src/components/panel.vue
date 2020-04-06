<template>
    <div class="panel">
        <slot name='charts'></slot>
        <div class="panel-footer"></div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.panel {
    height: 2.666667rem;
    position: relative;
    border: 1px solid rgba(25, 186, 139, 0.17);
    background: url(../assets/images/line.png);
    padding: 0 .181818rem .484848rem;
    margin-bottom: .181818rem;
    &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: .121212rem;
        height: .121212rem;
        border-top: .024242rem solid #02a6b5;
        border-left: .024242rem solid #02a6b5;
    }
    &::after {
        position: absolute;
        top: 0;
        right: 0;
        content: "";
        width: .121212rem;
        height: .121212rem;
        border-top: .024242rem solid #02a6b5;
        border-right: .024242rem solid #02a6b5;
    }
    .panel-footer {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        &::before {
            position: absolute;
            bottom: 0;
            left: 0;
            content: "";
            width: .121212rem;
            height: .121212rem;
            border-bottom: .024242rem solid #02a6b5;
            border-left: .024242rem solid #02a6b5;
        }
        &::after {
            position: absolute;
            bottom: 0;
            right: 0;
            content: "";
            width: .012121rem;
            height: .121212rem;
            border-bottom: .024242rem solid #02a6b5;
            border-right: .024242rem solid #02a6b5;
        }
    }
}
</style>