<template>
  <div class="body">
    <div class="container">
        <div class="heading">革命故事</div>
        <hr class="heading-hr" />
        <DetailCardStory></DetailCardStory>
    </div>
  </div>
</template>

<script>
import DetailCardStory from '@/components/DetailCardStory.vue';
export default {
  components:{
    DetailCardStory
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