<template>
  <div id="app">
    <Waves></Waves>
    <Nav></Nav>
  </div>
</template>

<script>
import Waves from "./components/waves.vue";
import Nav from "./components/nav.vue";
export default {
  name: "app",
  data() {
    return {
      img1URL: require("./assets/1.jpeg"),
      img2URL: require("./assets/1.jpeg"),
      img3URL: require("./assets/1.jpeg"),
      img4URL: require("./assets/1.jpeg"),
    };
  },
  methods: {},
  components: {
    Waves,
    Nav,
  },
};
</script>
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