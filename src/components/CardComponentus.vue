<template>
  <div>
    <h1 class="heading">E新向党实践团·平台开发组主要成员</h1>
    <hr class="heading-hr">

    <div v-for="(member, index) in members" :key="index" class="business-card-container">
      <div class="shell">
        <img :src="require(`@/assets/images/${member.image}`)" alt="" class="cover">
        <div class="head">
          <div class="data">
            <div class="title1">{{ member.name }}
              <span>{{ member.role }}</span>
            </div>
            <div class="title2">{{ member.description }}</div>
          </div>
        </div>
        <div class="foot">
          <div class="tags">
            <a :href="member.telLink" class="tag">TEL:{{ member.tel }}</a><br>
            <a :href="member.qqLink" class="tag">QQ:{{ member.qq }}</a><br>
            <a :href="member.emailLink" class="tag">Email:{{ member.email }}</a>
          </div>            
          <div class="introduce">
            <p>{{ member.introduction }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {
          name: '蒋云辉',
          role: '平台开发组队长',
          description: '统筹平台开发组，进行实地调研与联络',
          tel: '17346959167',
          qq: '3340265938',
          email: '3340265938@qq.com',
          introduction: '广告位招租联系3340265938@qq.com',
          image: 'mouse.jpg',
        },
        {
          name: '陈岳豪',
          role: '平台开发组成员',
          description: '负责E新向党实践团展示平台的开发',
          tel: '19709911833',
          qq: '3106201882',
          email: '08232716@cumt.edu.cn',
          introduction: '沉淀中。',
          image: '陈岳豪头像.jpg',
        },  
        {
          name: '孙浩冉',
          role: '平台开发组成员',
          description: '技术指导、框架选型、后端开发',
          tel: '15072228081',
          qq: '2810647782',
          email: 'sunhaoran@cumt.edu.cn',
          introduction: '博客地址:https://www.wotemo.com',
          image: '孙浩冉头像.jpg',
        },
        // Add more members here as needed
      ]
    };
  }
};
</script>

<style scoped>
.heading {
  text-align: center;
  font-size: 30px;
  margin-bottom: 3px;
  margin-top: 5px;
  font-family: 楷体;
}

.heading-hr {
  border: none;
  height: 2px;
  background-color: #000;
  margin-bottom: 20px;
}
/* contractusindex的CSS样式 */
.contractusindex {
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.heading {
  text-align: center;
  color: rgb(30,50,100);
  font-size: 28px;
  margin-top: 0;
  margin-bottom: 3px;
  font-weight: 700;
}
.heading-hr {
  margin: 0;
  height: 2px;
  background-color:rgb(30,50,100);
  border: none;
}

/* 名片部分的CSS样式 */
.business-card-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.shell {
  width: 100%;
  max-width: 900px; /* 限制宽度 */
  height: 400px; /* 调整高度 */
  background: #ffffff;
  position: relative;
}
.head {
  height: 240px; /* 调整高度 */
  position: relative;
  overflow: hidden;
  z-index: 1;
}
/* 第一个名片的背景 */
.business-card-container:nth-of-type(1) .head::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background: url("../assets/images/CUMT-view1.jpg");
      background-size: cover;
      z-index: -1;
      transform: skewY(-3deg);
      transform-origin: 0 0;
}
.business-card-container:nth-of-type(2) .head::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background: url("../assets/images/CUMT-view2.jpg");
      background-size: cover;
      z-index: -1;
      transform: skewY(-3deg);
      transform-origin: 0 0;
}
.business-card-container:nth-of-type(3) .head::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background: url("../assets/images/CUMT-view3.jpg");
      background-size: cover;
      z-index: -1;
      transform: skewY(-3deg);
      transform-origin: 0 0;
}
.business-card-container:nth-of-type(4) .head::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background: url("../assets/images/CUMT-view2.jpg");
      background-size: cover;
      z-index: -1;
      transform: skewY(-3deg);
      transform-origin: 0 0;
}
.cover {
  position: absolute;
  top: 80px; /* 调整位置 */
  left: 55px;
  width: 180px; /* 调整大小 */
  z-index: 3;
  border-radius: 500px;
  border: 10px #fff solid;
  box-shadow: 0 5px 10px #00000065;
}
.data {
  padding: 120px 0 0 220px; /* 调整位置 */
  text-shadow: 0 0 20px #000;
}
.data .title1 {
  color: white;
  font-size: 40px; /* 调整大小 */
  font: 900 40px '';
  margin-bottom: 5px;
  position: relative;
  left: 55px;
}
.data .title1 span {
  position: absolute;
  top: 25px;
  margin-left: 12px;
  background: #ffe44c;
  border-radius: 5px;
  color: #000000;
  font-size: 14px;
  padding: 0px 4px;
}
.data .title2 {
  position:relative;
  color: #fff;
  font: 500 24px '';
  left: 55px;
}
.foot {
  line-height: 26px;
  color: #444;
}
.tags {
  padding-left: 30px;
  padding-top: 45px;
  width: 250px;
  float: left;
  text-align: center;
}
.tag {
  background: rgb(149, 178, 255);
  color: #fff;
  border-radius: 10px;
  padding: 3px 8px;
  font-size: 14px;
  margin-right: 4px;
  line-height: 35px;
  cursor: pointer;
  text-decoration: none;
}
.tag:hover {
  background: #eee4ad;
  color: #444;
}
.introduce {
  position:relative;
  bottom: 10px;
  padding: 0 0 0 20px;
  width: 600px;
  float: left;
  text-indent: 2em;
}
</style>