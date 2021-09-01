<template>
  <!-- 内总 -->
  <div class="nei">
    <!-- 侧目录 -->
    <div class="side">
      <a href="#value_1">
        <h3>·1.判断对象的数据类型</h3>
      </a>
    </div>
    <div class="img_back" id="back0">
      <div class="demo__tro">
        <!-- 轮播 -->
        <Carousel autoplay v-model="value2">
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
        <!-- 内容-->
        <div class="coment">
          <div class="word">
            <h1 id="value_0">
              一个合格的中级前端工程师需要掌握的 28 个 JavaScript 技巧
            </h1>
            <h1 id="value_1">1.判断对象的数据类型</h1>
            <p class="example">
              <img
                src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/5/30/16b08a60a70f5077~tplv-t2oaga2asx-watermark.awebp"
                alt="掘金图片丢失"
              />
            </p>
            <p>
              使用 Object.prototype.toString
              配合闭包，通过传入不同的判断类型来返回不同的判断函数，一行代码，简洁优雅灵活（注意传入
              type 参数时首字母大写）
            </p>
            <br />
            <span
              >不推荐将这个函数用来检测可能会产生包装类型的基本数据类型上,因为
              call
              始终会将第一个参数进行装箱操作，导致基本类型和包装类型无法区分
            </span>
            <h1>2. 循环实现数组 map 方法</h1>
            <p class="example">
              <img
                src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c853cb67357e3b~tplv-t2oaga2asx-watermark.awebp"
                id="img50"
                class="zoom-in"
              />
            </p>
            <p>
              使用方法：将 selfMap 注入到 Array.prototype
              上（下面数组的迭代方法同理）
            </p>
            <p class="example">
              <img
                src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/7/1/16bad345b800345a~tplv-t2oaga2asx-watermark.awebp"
                class="zoom-in"
              />
            </p>
            <p>
              值得一提的是，map 的第二个参数为第一个参数回调中的
              this指向，如果第一个参数为箭头函数，那设置第二个
              this会因为箭头函数的词法绑定而失效
              <br /><br />
              另外就是对稀疏数组的处理，通过hasOwnProperty来判断当前下标的元素是否存在与数组中
            </p>
            <h1>3. 使用 reduce 实现数组 map 方法</h1>
            <p class="example">
              <img
                src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/5/30/16b06a9d567bab69~tplv-t2oaga2asx-watermark.awebp"
                class="zoom-in"
              />
            </p>
            <h1>4. 循环实现数组 filter 方法</h1>
            <p class="example">
              <img
                src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/5/30/16b089dd88abc7e9~tplv-t2oaga2asx-watermark.awebp"
              />
            </p>
            <h1>5. 使用 reduce 实现数组 filter 方法</h1>
            <p class="example">
              <img src="" />
            </p>
            <h1></h1>
            <p class="example">
              <img src="" />
            </p>
            <h1></h1>
            <p class="example">
              <img src="" />
            </p>
          </div>
        </div>
        <!-- 底部  -->
        <div class="bottom">
          <div id="htmer_time"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
img {
  max-width: 70%;
}

table tr td img {
  width: 60px;
}
table tr td {
  text-align: center;
  padding: 5px;
}
table tr th {
  background: #ddd;
  height: 36px;
}
table tr td {
  border-bottom: 1px solid #ddd;
  border-left: 1px solid #ddd;
}
table tr td:last-child {
  border-right: 1px solid #ddd;
}
.bg-img {
  position: fixed;
  background-color: rgba(190, 190, 190, 0.5);
}
.tra-img {
  text-align: center;
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.nei {
  width: 70%;
  height: 3800px;
  background-color: saddlebrown;
  position: relative;
  left: 12%;
}
.side {
  height: 50%;
  background-color: #ebedef;
  position: absolute fixed;
  padding: 0 2em;
  border-radius: 2px;
}

.coment {
  width: 100%;
  /* height: 100%; */
  background-color: rgba(255, 251, 240, 0.8);
}

.img_back {
  width: 85%;
  /* height: 1894px; */
  position: absolute;
  margin: 0 auto;
}
.demo__tro {
  width: 98%;
  position: relative;
}
.bottom {
  position: absolute;
  /* bottom: -735%; */
  width: 120%;
  height: 9%;
  background-color: rgb(4, 29, 21);
}
#htmer_time {
  color: #fff;
  position: absolute;
  font-family: "雅黑";
  font-weight: normal;
  bottom: 10px;
}
</style>
<script>
export default {
  name: "coment",
  data() {
    return {
      value2: 0,
    };
  },
};
</script>

