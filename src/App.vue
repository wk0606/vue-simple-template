<template>
  <div>
    <div class="container">{{name}}</div>
  </div>
</template>
<script>
console.log('are you ok')
export default {
  name: 'app',
  data() {
    return {
      name: `Apache 软件基金会在今年第 20 个年头发布了 2019 年财年报告，着重介绍了它的成功：

“价值超过 200 亿美元的 Apache 开源软件产品提供给普通大众，百分之百免费，造福全球数十亿用户。”

我们如何评价这个惊人的估值？也许 ASF 的 730 个成员和 7000 个 Apache 代码提交者希望它们各自贡献约 300 万美元的份额？我没有正儿八经地暗示实际情况是这样，不过你大致可以看出开源软件所创造的价值。`
    }
  },
  mounted() {
    var test = {
      name: 'jack0',
      age: 36
    }
    console.log(Array.from(test))
  }
}
</script>
<style lang="css">
  @import url('./styles/common.css');
</style>
<style lang="less" scoped>
  .container{
    width: 500px;
    height: 300px;
    font-family: 'jam';
    line-height: 25px;
  }
</style>