<template>
  <div id="app">
    <!-- 头部 -->
    <v-header />
    <!-- main -->
    <v-main />
  </div>
</template>

<script>
  import vHeader from './components/header'
  import vMain from './components/main'
  export default {
    components:{
      vHeader,
      vMain
    }
  }
</script>
<style lang="scss" scoped>
#app{
  background: url(./assets/images/bg.jpg) no-repeat;
  background-size: cover;
}
</style>
