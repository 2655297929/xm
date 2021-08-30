<template>
  <div class="coment">
    <div
      style="
        color: #000;
        font-family: 微软雅黑;
        font-weight: 2px;
        font-size: 16px;
      "
    >
      <h1>JavaScript 执行机制</h1>
      <br />

      不论你是javascript新手还是老鸟，不论是面试求职，还是日常开发工作，我们经常会遇到这样的情况：给定的几行代码，我们需要知道其输出内容和顺序。因为javascript是一门单线程语言，所以我们可以得出结论：
      javascript是按照语句出现的顺序执行的
      看到这里读者要打人了：我难道不知道js是一行一行执行的？还用你说？稍安勿躁，正因为js是一行一行执行的，所以我们以为js都是这样的：
      let a = '1'; console.log(a); let b = '2'; console.log(b); 复制代码
      然而实际上js是这样的： setTimeout(function(){ console.log('定时器开始啦')
      }); new Promise(function(resolve){ console.log('马上执行for循环啦');
      for(var i = 0; i < 10000; i++){ i == 99 && resolve(); }
      }).then(function(){ console.log('执行then函数啦') });
      console.log('代码执行结束'); 复制代码
      依照js是按照语句出现的顺序执行这个理念，我自信的写下输出结果：
      //"定时器开始啦" //"马上执行for循环啦" //"执行then函数啦" //"代码执行结束"
      复制代码
      去chrome上验证下，结果完全不对，瞬间懵了，说好的一行一行执行的呢？
      我们真的要彻底弄明白javascript的执行机制了。 1.关于javascript
      javascript是一门单线程语言，在最新的HTML5中提出了Web-Worker，但javascript是单线程这一核心仍未改变。所以一切javascript版的"多线程"都是用单线程模拟出来的，一切javascript多线程都是纸老虎！
      2.javascript事件循环
      既然js是单线程，那就像只有一个窗口的银行，客户需要排队一个一个办理业务，同理js任务也要一个一个顺序执行。如果一个任务耗时过长，那么后一个任务也必须等着。那么问题来了，假如我们想浏览新闻，但是新闻包含的超清图片加载很慢，难道我们的网页要一直卡着直到图片完全显示出来？因此聪明的程序员将任务分为两类：
      同步任务 异步任务
      当我们打开网站时，网页的渲染过程就是一大堆同步任务，比如页面骨架和页面元素的渲染。而像加载图片音乐之类占用资源大耗时久的任务，就是异步任务。关于这部分有严格的文字定义，但本文的目的是用最小的学习成本彻底弄懂执行机制，所以我们用导图来说明：
      导图要表达的内容用文字来表述的话：
      同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，异步的进入Event
      Table并注册函数。 当指定的事情完成时，Event Table会将这个函数移入Event
      Queue。 主线程内的任务执行完毕为空，会去Event
      Queue读取对应的函数，进入主线程执行。
      上述过程会不断重复，也就是常说的Event Loop(事件循环)。
      我们不禁要问了，那怎么知道主线程执行栈为空啊？js引擎存在monitoring
      process进程，会持续不断的检查主线程执行栈是否为空，一旦为空，就会去Event
      Queue那里检查是否有等待被调用的函数。
      说了这么多文字，不如直接一段代码更直白： let data = []; $.ajax({
      url:www.javascript.com, data:data, success:() => {
      console.log('发送成功!'); } }) console.log('代码执行结束'); 复制代码
      上面是一段简易的ajax请求代码： ajax进入Event Table，注册回调函数success。
      执行console.log('代码执行结束')。 ajax事件完成，回调函数success进入Event
      Queue。 主线程从Event Queue读取回调函数success并执行。
      相信通过上面的文字和代码，你已经对js的执行顺序有了初步了解。接下来我们来研究进阶话题：setTimeout。
      3.又爱又恨的setTimeout
      大名鼎鼎的setTimeout无需再多言，大家对他的第一印象就是异步可以延时执行，我们经常这么实现延时3秒执行：
      setTimeout(() => { console.log('延时3秒'); },3000) 复制代码
      渐渐的setTimeout用的地方多了，问题也出现了，有时候明明写的延时3秒，实际却5，6秒才执行函数，这又咋回事啊？
      先看一个例子： setTimeout(() => { task(); },3000)
      console.log('执行console'); 复制代码
      根据前面我们的结论，setTimeout是异步的，应该先执行console.log这个同步任务，所以我们的结论是：
      //执行console //task() 复制代码 去验证一下，结果正确！
      然后我们修改一下前面的代码： setTimeout(() => { task() },3000)
      sleep(10000000) 复制代码
      乍一看其实差不多嘛，但我们把这段代码在chrome执行一下，却发现控制台执行task()需要的时间远远超过3秒，说好的延时三秒，为啥现在需要这么长时间啊？
      这时候我们需要重新理解setTimeout的定义。我们先说上述代码是怎么执行的：
      task()进入Event Table并注册,计时开始。
      执行sleep函数，很慢，非常慢，计时仍在继续。
      3秒到了，计时事件timeout完成，task()进入Event
      Queue，但是sleep也太慢了吧，还没执行完，只好等着。
      sleep终于执行完了，task()终于从Event Queue进入了主线程执行。
      上述的流程走完，我们知道setTimeout这个函数，是经过指定时间后，把要执行的任务(本例中为task())加入到Event
      Queue中，又因为是单线程任务要一个一个执行，如果前面的任务需要的时间太久，那么只能等着，导致真正的延迟时间远远大于3秒。
      我们还经常遇到setTimeout(fn,0)这样的代码，0秒后执行又是什么意思呢？是不是可以立即执行呢？
      答案是不会的，setTimeout(fn,0)的含义是，指定某个任务在主线程最早可得的空闲时间执行，意思就是不用再等多少秒了，只要主线程执行栈内的同步任务全部执行完成，栈为空就马上执行。举例说明：
      //代码1 console.log('先执行这里'); setTimeout(() => {
      console.log('执行啦') },0); 复制代码 //代码2 console.log('先执行这里');
      setTimeout(() => { console.log('执行啦') },3000); 复制代码
      代码1的输出结果是： //先执行这里 //执行啦 复制代码 代码2的输出结果是：
      //先执行这里 // ... 3s later // 执行啦 复制代码
      关于setTimeout要补充的是，即便主线程为空，0毫秒实际上也是达不到的。根据HTML的标准，最低是4毫秒。有兴趣的同学可以自行了解。
      4.又恨又爱的setInterval
      上面说完了setTimeout，当然不能错过它的孪生兄弟setInterval。他俩差不多，只不过后者是循环的执行。对于执行顺序来说，setInterval会每隔指定的时间将注册的函数置入Event
      Queue，如果前面的任务耗时太久，那么同样需要等待。
      唯一需要注意的一点是，对于setInterval(fn,ms)来说，我们已经知道不是每过ms秒会执行一次fn，而是每过ms秒，会有fn进入Event
      Queue。一旦setInterval的回调函数fn执行时间超过了延迟时间ms，那么就完全看不出来有时间间隔了。这句话请读者仔细品味。
    </div>
  </div>
</template>
<style scoped>
.coment {
  width: 100%;
  height: 306%;
  background-color: rgb(163, 100, 45);
}
</style>
<script>
export default {

};
</script>
