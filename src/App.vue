<template>
  <div id="app">
    <!-- 导航 -->
    <Nav></Nav>
    <!-- 背景 -->
    <Back></Back>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
body,
html {
  height: 100%;
  background-color: #fff;
  font-size: 14px;
}
</style>
<script>
import Nav from "./components/nav.vue";
import Back from "./components/back.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  methods: {},
  components: {
    Nav,
    Back,
  },
};
</script>