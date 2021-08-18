<template>
  <div id="app">
    <div>
      <Waves></Waves>
    </div>
    <div>
      <Nav></Nav>
    </div>
    <div>
      <Back></Back>
    </div>
  </div>
</template>

<script>
import Waves from "./components/waves.vue";
import Nav from "./components/nav.vue";
import Back from "./components/back.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {},
  components: {
    Waves,
    Nav,
    Back,
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