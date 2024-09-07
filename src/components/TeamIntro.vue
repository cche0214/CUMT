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
        本团队已有六年之久的传承历史，在延安梁家河、开山岛、《新青年》创办、王杰精神、遵义会议等相关红色故事深入挖掘、普及宣讲的实践基础上。将团队各成员分组散布到枣庄、石家庄等全国十余个红色城市，重走红色足迹、追溯红色记忆、体悟红色文化，丰富个人思想底蕴、坚定自身革命信念。
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
        { src: "实践团介绍1.png", alt: "团队照片1", description: "渭华起义纪念地实践团成员学习相关运动经过" },
        { src: "实践团介绍2.png", alt: "团队照片2", description: "七里河西津桥实践团成员拜访看望退伍老兵" },
        { src: "实践团介绍3.png", alt: "团队照片3", description: "坞根镇实践团成员集体合影" },
        { src: "实践团介绍4.png", alt: "团队照片4", description: "枣园实践团成员于纪念馆前领导人雕像合影" },
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
  font-size: 14px;
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
    font-size: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>
