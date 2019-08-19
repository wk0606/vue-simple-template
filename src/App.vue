<template>
  <div>
    <h1>Hello-您好</h1>
    <h3>Hello-您好</h3>
    <h4>Hello-{{name}}</h4>
    <img src="./views/assets/body-bg.png" alt="" width="200">
    <div class="container"></div>
  </div>
</template>
<script>
console.log('are you ok')
export default {
  name: 'app',
  data() {
    return {
      name: 'Djooj-Google-最低190元，5G套餐高起点，内部人士：国庆前推出'
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
  h1{
    color: blueviolet;
    font-family: 'jam';
  }
  h3{
    font-family: Georgia, 'Times New Roman', Times, serif
  }
  h4{
    font-weight: 100;
    font-family: 'jam';
  }
  .container{
    width: 500px;
    height: 302px;
    background-size: cover;
    background-image: url('./views/assets/lz.jpg');
    background-position: center center;
  }
</style>