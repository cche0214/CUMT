<template>
  <div class="team-intro-container">
    <div class="heading">实践团介绍</div>
    <hr class="heading-hr" />

    <div class="images-grid">
      <div v-for="(image, index) in images" :key="index" class="image-item">
        <img :src="require(`@/assets/images/${image.src}`)" :alt="image.alt" />
        <p>{{ image.description }}</p>
      </div>
    </div>

    <div class="intro-text">
      <span>
        这里放实践团介绍部分，可以放一整段。上面四张图片可以挑选有我们实践团人员的那种合照，然后下面的描述内容就是合照的事件背景
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamIntro",
  data() {
    return {
      images: [
        { src: "CUMT-view1.jpg", alt: "团队照片1", description: "实践团前往某地进行实践实践团前往某地进行实践" },
        { src: "CUMT-view2.jpg", alt: "团队照片2", description: "实践团前往某地进行实践实践团前往某地进行实践" },
        { src: "CUMT-view3.jpg", alt: "团队照片3", description: "实践团前往某地进行实践实践团前往某地进行实践实践团前往某地进行实践" },
        { src: "CUMT-view4.jpg", alt: "团队照片4", description: "中实践团前往某地进行实践实践团前往某地进行实践实践团前往某地进行实践实践团前往某地进行实践" },
      ],
    };
  },
};
</script>

<style scoped>
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
.team-intro-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.images-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
.image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.image-item img {
  width: 98%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius:20px
}

.image-item p {
  margin-top: 2px;
  font-size: 12px;
  text-align: center;
  font-family: 楷体;
}

.intro-text {
    width: 98%;
    font-family: 楷体;
    box-sizing: border-box;
    margin: 0 auto;
    text-indent: 2em;
    border: 1px solid #ccc; /* 显式设置边框 */
    background-color: #f9f9f9;
    color: black;
    line-height: 1.6;
    font-size: 18px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>
