<template>
  <div class="body">
      <div class="container">
        <BarrageMessageBoard></BarrageMessageBoard>
        <MessageBoard></MessageBoard>
      </div>
    </div>
</template>

<script>
import BarrageMessageBoard  from '@/components/BarrageMessageBoard.vue';
import MessageBoard from '@/components/MessageBoard.vue';
export default {
  components:{
    BarrageMessageBoard,MessageBoard
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
</style>