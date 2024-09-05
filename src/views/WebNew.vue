<template>
  <div class="body">
    <div class="container">
        <div class="heading">实践新闻 如果可以的话发一个个打包好的，里面就是视频+图片+文字稿的形式即可</div>
        <hr class="heading-hr" />
        <DetailCardNew></DetailCardNew>
    </div>
  </div>
</template>

<script>
import DetailCardNew from '@/components/DetailCardNew.vue';
export default {
  components:{
    DetailCardNew
  }
}
</script>

<style scoped>
* {
    margin: 0px;
    padding: 0px;
}
.body {
    line-height: 1.6;
    background-color: #f4f4f4;
}
.container {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 5px 5px;
    background-color: white
}

.heading {
  text-align: center;
  font-size: 30px;
  font-family: 楷体;
  color: rgb(30,50,100);
  margin-top: 0;
  font-weight: 700;
}
.heading-hr {
  border: none;
  height: 2px;
  background-color: rgb(30,50,100);
}
</style>