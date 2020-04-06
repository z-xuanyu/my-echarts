<template>
    <div class="map">
        <div class="no">
            <div class="no-hd">
                <ul>
                    <li>125811</li>
                    <li>104563</li>
                </ul>
            </div>
            <div class="no-bd">
                <ul>
                    <li>前端需求人数</li>
                    <li>市场供应人数</li>
                </ul>
            </div>
        </div>
        <!-- 地图 -->
        <div class="map-wrapper">
            <div class="map1"></div>
            <div class="map2"></div>
            <div class="map3"></div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.no {
    background: rgba(101, 132, 226, 0.1);
    padding: 10px;
    .no-hd {
        position: relative;
        border: 1px solid rgba(25, 186, 139, 0.17);
        &::before {
            content: "";
            position: absolute;
            width: .363636rem;
            height: .121212rem;
            border-top: .024242rem solid #02a6b5;
            border-left: .024242rem solid #02a6b5;
            top: 0;
            left: 0;
        }
        &::after {
            content: "";
            position: absolute;
            width: .363636rem;
            height: .121212rem;
            border-bottom: .024242rem solid #02a6b5;
            border-right: .024242rem solid #02a6b5;
            right: 0;
            bottom: 0;
        }
        ul {
            display: flex;
            li {
                position: relative;
                flex: 1;
                text-align: center;
                height: .727273rem;
                line-height: .727273rem;
                font-size: .606061rem;
                color: #ffeb7b;
                padding: .060606rem 0;
                font-family: electronicFont;
                font-weight: bold;
                &:first-child::after {
                    content: "";
                    position: absolute;
                    height: 50%;
                    width: 1px;
                    background: rgba(255, 255, 255, 0.2);
                    right: 0;
                    top: 25%;
                }
            }
        }
    }
    .no-bd ul {
        display: flex;
        li {
            flex: 1;
            height: .363636rem;
            line-height: .363636rem;
            text-align: center;
            font-size: .169697rem;
            color: rgba(255, 255, 255, 0.7);
            padding-top: .060606rem;
        }
    }
}
.map-wrapper{
    position: relative;
    height:9.818182rem;
    .map1,.map2,.map3{
        position: absolute;
        background: url(../assets/images/map.png) no-repeat;
        background-size: 100% 100%;
        width: 6.278788rem;
        height: 6.278788rem;
        opacity: 0.3;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .map2{
        width: 7.793939rem;
        height: 7.793939rem;
        background: url(../assets/images/lbx.png) no-repeat;
        opacity: 0.6;
        z-index: 2;
        animation: rotate1 15s linear infinite;
    }
    .map3{
        width: 6.860606rem;
        height: 6.860606rem;
        background: url(../assets/images/jt.png) no-repeat;
        animation: rotate2 10s linear infinite;
    }
}

// 动画
@keyframes rotate1 {
    from{
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to{
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
@keyframes rotate2 {
    from{
         transform: translate(-50%, -50%) rotate(0deg);
    }
    to{
        transform: translate(-50%, -50%) rotate(-360deg);
    }
}
</style>