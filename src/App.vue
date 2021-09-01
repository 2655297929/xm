<template>
  <div id="app">
    <!-- 首页 -->
    <Home></Home>
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
import Home from "./views/Home.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  methods: {},
  components: {
    Home
  },
};
</script>