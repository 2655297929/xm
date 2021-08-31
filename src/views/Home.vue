<template>
  <!-- 总 -->
  <div class="back">
    <!-- 引入coment -->
    <Coment/>
  </div>
</template>
<style scoped>
.back {
  position: relative;
  width: 100%;
  min-height: 200vw;
  background: url(../../src/assets/bg.gif) repeat !important;
}

</style>
<script>
import Coment from "../components/coment/coment.vue";
export default {
  name: "home",
  data() {
    return {
    };
  },
  components: {
    Coment,
  },
};
</script>