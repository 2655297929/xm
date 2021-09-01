<template>
  <!-- 总 -->
  <div class="back">
    <!-- 引入coment -->
    <Nav></Nav>
    <Coment/>
  </div>
</template>
<style scoped>
.back {
  position: relative;
  width: 100%;
  min-height: 100%;
  background: url(../../src/assets/bg.gif) repeat !important;
}

</style>
<script>
import Coment from "../components/coment/coment.vue";
import Nav from "../components/nav.vue"
export default {
  name: "home",
  data() {
    return {
    };
  },
  components: {
    Coment,
    Nav
  },
};
</script>