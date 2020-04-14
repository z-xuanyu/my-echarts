<template>
    <div class="header">
        <h1>轩钰Echart-demo</h1>
        <div class="show-time">当前时间：{{showTime}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showTime: "" //当前时间
        };
    },
    created() {
        setInterval(this.getTime, 500);
    },
    methods: {
        getTime() {
            var _this = this;
            let yy = new Date().getFullYear();
            let mm = new Date().getMonth() + 1;
            let dd = new Date().getDate();
            let hh = new Date().getHours();
            let mf =
                new Date().getMinutes() < 10
                    ? "0" + new Date().getMinutes()
                    : new Date().getMinutes();
            let ss =
                new Date().getSeconds() < 10
                    ? "0" + new Date().getSeconds()
                    : new Date().getSeconds();
            _this.showTime =
                yy + "年" + mm + "月" + dd + " " + hh + ":" + mf + ":" + ss;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/header/index.scss";
</style>