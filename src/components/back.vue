<template>
  <!-- 总 -->
  <div class="back">
    <img src="../../src/assets/back.png" class="backImg" />
    <!-- 内总 -->
    <div class="img_back" id="back0">
      <div class="demo__tro">
        <!-- 轮播 -->
        <Carousel autoplay v-model="value2" class="demo">
          <Carousel-item>
            <div class="demo-carousel" id="carouse"></div>
          </Carousel-item>
          <Carousel-item>
            <div class="demo-carouse2" id="carouse"></div>
          </Carousel-item>
          <Carousel-item>
            <div class="demo-carouse3" id="carouse"></div>
          </Carousel-item>
          <Carousel-item>
            <div class="demo-carouse4" id="carouse"></div>
          </Carousel-item>
        </Carousel>
        <!-- 内容 -->
        <Coment />
        <!-- 底部 -->
        <div class="bottom">
          <div id="htmer_time"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.back {
  position: relative;
  width: 100%;
  min-height: 1894px;
}
.backImg {
  width: 120vw;
  height: 100%;
  position: absolute;
  left: -180px;
  opacity: 0.8;
}
.img_back {
  width: 59%;
  height: 1894px;
  background-color: salmon;
  position: relative;
  margin: 0 auto;
}
.coment {
  width: 100%;
  height: 306%;
  background-color: rgb(163, 100, 45);
}
.demo__tro {
  width: 100%;
  height: 460px;
  background-color: sandybrown;
  position: relative;
}
.demo {
  width: 100%;
  height: 100%;
}
.bottom {
  position: absolute;
  bottom: -1434px;
  width: 100%;
  height: 6%;
  background-color: aquamarine;
}
#htmer_time {
  color: #fff;
  position: absolute;
  font-family: "雅黑";
  bottom: 10px;
}
#carouse {
  width: 100%;
  height: 460px;
}
.demo-carousel {
  background: url("https://i.loli.net/2021/08/19/mgrCISW3h1xLj6M.jpg") no-repeat;
  background-position: -260px -200px;
}
.demo-carouse2 {
  background: url("https://i.loli.net/2021/08/30/xaDrHUZXF9gPolq.png") no-repeat;
  background-position: -300px -106px;
}
.demo-carouse3 {
  background: url("https://i.loli.net/2021/08/30/VTZyxm2AnPCuYFp.png") no-repeat;
  background-position: -222px -100px;
}
.demo-carouse4 {
  background: url("https://i.loli.net/2021/08/19/nGp237mXOogDFHr.jpg") no-repeat;
  background-position: -570px -76px;
}
</style>
<script>
import Coment from "./coment/coment.vue";
export default {
  name: "back",
  data() {
    return {
      value2: 0,
    };
  },
  components: {
    Coment,
  },
};
</script>