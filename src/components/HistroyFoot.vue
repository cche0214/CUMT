<template>
  <div>
    <div class="heading">历史足迹</div>
    <hr class="heading-hr" />
    <div class="shell">
      <div v-for="(item, index) in historyItems" :key="index" class="box" 
        @mouseover="showIntroduction(item.intro)"
        @mouseout="resetText"
      >
        <img :src="require(`@/assets/images/${item.image}`)" :alt="'团队照片' + item.year" />
        <span>{{ item.year }}</span>
      </div>
    </div>
    <div class="introduction-bar">{{ introductionText }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      introductionText: "重走历史足迹，E新向党实践团的实践地点遍布全国各地",
      historyItems: [
        {
          year: "2024",
          image: "合照1.jpg",
          intro: "2024年，E新向党实践团开始了新一轮的暑期实践",
        },
        {
          year: "2023",
          image: "历史足迹1.png",
          intro: "2023年，E新向党实践团围绕“红色安全”和“红色电波”主题，深入学习革命历史，传承红色精神。",
        },
        {
          year: "2022",
          image: "历史足迹2.png",
          intro: "2022年，由于疫情，E新向党实践团再次返家乡分散进行，以红色家书为主题，传承革命先烈的信念。",
        },
        {
          year: "2021",
          image: "历史足迹3.png",
          intro: "2021年，E新向党实践团前往上海，结合当时的热点《觉醒年代》，学习《新青年》创办的历史背景与精神。",
        },
        {
          year: "2020",
          image: "历史足迹4.png",
          intro: "2020年，受疫情影响，E新向党实践团返家乡分散开展活动，其中部分成员前往江西南昌，学习红色文化。",
          link: "https://www.cumt.edu.cn/#"
        },
        {
          year: "2019",
          image: "历史足迹5.png",
          intro: "2019年，E新向党实践团前往开山岛，致敬守岛人，感悟坚守奉献的精神。",
          link: "https://www.cumt.edu.cn/#"
        },
        {
          year: "2018",
          image: "历史足迹6.jpg",
          intro: "2018年，E新向党实践团前往延安梁家河，队名为“平凡之路”，结合七年知青岁月，深入学习革命精神。",
          link: "https://www.cumt.edu.cn/#"
        },
        
      ]
    };
  },
  methods: {
    navigateTo(link) {
      window.location.href = link;
    },
    showIntroduction(intro) {
      this.introductionText = intro;
    },
    resetText() {
      this.introductionText = "重走历史足迹，E新向党实践团的实践地点遍布全国各地";
    }
  }
};
</script>

<style scoped>

/* 历史足迹部分CSS样式 */
.shell {
    margin-top: 20px;
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: row;
    position: relative;
    max-width: 1200px; /* 设置最大宽度 */
}
.box {
    flex: 1;
    overflow: hidden;
    transition: .5s;
    margin: 0 20px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, .5);
    border-radius: 20px;
    border: 10px solid #fff;
    background-color: #fff;
    position: relative;
    cursor: pointer;
}
.box>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: .5s;
}
.box>span {
    font: 200 45px '优设标题黑';
    text-align: center;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    transition: opacity 0.5s;
    font-size: 35px;
}
.box:hover {
    flex-basis:50%;
}
.box:hover>img {
    width: 100%;
    height: 100%;
}
.introduction-bar {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    width: 100%;
    font-family: 楷体;
    text-align: center;
    margin-top: 25px;
    margin-bottom: 18px;
    font-size: 24px;
    border: 1px solid #ccc; /* 显式设置边框 */
    border-radius: 15px;
    background-color: #f9f9f9;
    color: black;
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
