<template>
  <div class="nav">
    <header>
      <router-link class="logo" to="../views/Home.vue">Logo</router-link>
      <ul>
        <li><router-link to="../views/Home.vue">首页</router-link></li>
        <li><router-link to="../views/Home.vue">ES6</router-link></li>
        <li><router-link to="../views/Home.vue">Vue</router-link></li>
        <li><router-link to="../views/Home.vue">React</router-link></li>
        <li><router-link to="../views/Home.vue">Angular</router-link></li>
      </ul>
    </header>
  </div>
</template>
<style lang="scss" scoped>

header {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.66s;
  padding: 0 100px;
  background-color: #d99746;
}

header.sticky {
  padding: 5px 100px;
  background: rgba(187, 128, 61, 0.9);
}

header .logo {
  position: relative;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  font-size: 3.4em;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: rgb(255, 255, 255) 1px 0 0, rgb(255, 255, 255) 0 2px 0,
    rgb(255, 255, 255) -1px 0 0, rgb(255, 255, 255) 0 0px 0;
}

header ul {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

header ul li {
  position: relative;
  list-style: none;
}

header ul li a {
  position: relative;
  margin: 0 20px;
  text-decoration: none;
  color: #fff;
  letter-spacing: 2px;
  font-weight: 500px;
  transition: 0.5s;
  font-size: 2.2vh;
}
header.sticky .logo,
header.sticky ul li a {
  color: #000;
}
</style>
<script>
window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  // 重要属性
  header.classList.toggle("sticky", window.scrollY > 0);
});
</script>