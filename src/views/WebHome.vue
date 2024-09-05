<template>
    <div class="body">
        <div class="container">
            <RunBoo></RunBoo>
            <TeamIntro></TeamIntro>
            <HistoryFoot></HistoryFoot>
            <TeamHeart></TeamHeart>
            <ThisPractice></ThisPractice>
        </div>
    </div>
</template>

<script>
import RunBoo from '../components/RunBoo.vue'
import TeamIntro from '../components/TeamIntro.vue'
import HistoryFoot from '../components/HistroyFoot.vue'
import TeamHeart from '../components/TeamHeart.vue'
import ThisPractice from '@/components/ThisPractice.vue'

export default {
    components: {
        RunBoo,
        TeamIntro,
        HistoryFoot,
        TeamHeart,
        ThisPractice
    },
    data() {
        return {
            // 所有唯一的图片路径
            images: [
                require('@/assets/images/CUMT-view1.jpg'),  // 可能被多个组件使用
                require('@/assets/images/CUMT-view2.jpg'),
                require('@/assets/images/CUMT-view3.jpg'),
                require('@/assets/images/CUMT-view4.jpg'),
                require('../assets/CUMT-logo.png')
                // 只列出每个图片的唯一路径
            ]
        };
    },
    mounted() {
        console.log(this.images);
        this.preloadImages();
    },
    methods: {
  preloadImages() {
    this.images.forEach(image => {
      const img = new Image();
      img.src = image;
      // 你可以加入一些日志来确保路径被正确设置
      console.log("Preloading image: ", img.src);
    });
  }
}

}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
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
    background-color: white;
}
</style>
