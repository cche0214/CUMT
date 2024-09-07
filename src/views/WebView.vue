<template>
  <div class="body">
      <div class="container">
        <div class="heading">中国地图</div>
        <hr class="heading-hr" />
        <ChinaMap></ChinaMap>
        <!-- <div class="heading">数据展示 这里作为可选项，如果需要，我认为饼状图可以统计那种实践方式，比如有人用手机，有人做视频，有人实地做志愿这种，折线图就可以放一年年以来我们实践团的人数是不是稳步上升，越来越多人关注实践。不过这一部分我做的过于简单TT，也可以直接删去</div>
        <hr class="heading-hr" />
        <DataView></DataView> -->
      </div>
    </div>
</template>

<script>
import ChinaMap from '../components/ChinaMap.vue'
/* import DataView from '@/components/DataView.vue'; */
export default {
  components:{
    ChinaMap,/* DataView */
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
  margin-bottom: 15px;
}
</style>