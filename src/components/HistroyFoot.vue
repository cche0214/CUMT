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
      introductionText: "每一年用一句话概括实践团所进行的实践，图片就是当年的合照图片，例如2024年，e新向党……",
      historyItems: [
        {
          year: "2024",
          image: "CUMT-view1.jpg",
          intro: "2023年矿大迎来了新一轮的学术发展......",
          link: "https://www.cumt.edu.cn/#"
        },
        {
          year: "2023",
          image: "CUMT-view2.jpg",
          intro: "2023年矿大迎来了新一轮的学术发展......",
          link: "https://www.cumt.edu.cn/#"
        },
        {
          year: "2022",
          image: "CUMT-view3.jpg",
          intro: "2022年矿大开展了多项科研项目......",
          link: "https://www.cumt.edu.cn/#"
        },
        {
          year: "2021",
          image: "CUMT-view4.jpg",
          intro: "2021年矿大学生在全国竞赛中取得佳绩......",
          link: "https://www.cumt.edu.cn/#"
        },
        {
          year: "2020",
          image: "CUMT-view2.jpg",
          intro: "2020年矿大迎来了建校110周年......",
          link: "https://www.cumt.edu.cn/#"
        },
        {
          year: "2019",
          image: "CUMT-view1.jpg",
          intro: "2019年矿大在科研领域取得重大突破......",
          link: "https://www.cumt.edu.cn/#"
        },
        {
          year: "2018",
          image: "CUMT-view3.jpg",
          intro: "2018年矿大新增了多个本科专业......",
          link: "https://www.cumt.edu.cn/#"
        },
        {
          year: "2019",
          image: "CUMT-view4.jpg",
          intro: "2019年矿大在科研领域取得重大突破......",
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
      this.introductionText = "每一年用一句话概括实践团所进行的实践，图片就是当年的合照图片，例如2024年，e新向党……";
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
