<template>
    <div class="welcome">
        <img src="https://sinacloud.net/vue-wechat/images/welcome.jpg" alt="">
    </div>
</template>
<script>
    export default {}
</script>
<style>
    .welcome {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 6;
        background: #000b17;
        animation: welcome 1s forwards 0.8s; 
        -webkit-animation: welcome 1s forwards 0.8s;
    }
    .welcome img {
        width: 100%;
    }
    @keyframes welcome {
        0% {
            opacity: 1.0;
            visibility: visible;
        }
        100% {
            opacity: 0.0;
            visibility: hidden;
        }
    }
</style>