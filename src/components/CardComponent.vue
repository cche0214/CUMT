<template>
    <div>
      <h1 class="heading">E新向党实践团·带队教师与队长</h1>
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
            name: '曹露晨',
            role: 'E新向党实践团指导教师',
            description: '',
            tel: '0516-83591715',
            qq: ' ',
            email: ' ',
            introduction: '单位：中国矿业大学计算机科学与技术学院 职称：讲师 职务：辅导员',
            image: '计院logo.png',
          },
          {
            name: '张铭昊',
            role: 'E新向党实践团队长',
            description: '总体把控与协调规划成员各项实践，确保安全与质量。',
            tel: '15665160053',
            qq: '1872663290',
            email: '1872663290@qq.com',
            introduction: '张铭昊，男，共青团员，辽宁丹东人。自2019年起参与各类社会实践活动，并在2023-2024期间参与负责中国矿业大学计算机学院团委社会实践工作，于2023、2024暑期社会实践中带领计算机学院红色攻城狮实践团进行一系列实践，获得较好成果，获中国矿业大学2023暑期社会实践先进个人、中国矿业大学2023暑期社会实践调研报告优秀作者等一系列荣誉。',
            image: '张铭昊头像.jpg',
          },
          {
            name: '杨晓迪',
            role: 'E新向党实践团副队长',
            description: '负责实践过程把控与实践团网页开发的协调督促。',
            tel: '16678171812',
            qq: '3481503921',
            email: '3481503921@qq.com',
            introduction: '杨晓迪，女，中共预备党员，山东莘县人。现任中国矿业大学计算机科学与技术学院团委副书记兼团学办公室主任，参加国家级大创一项，主持省级大创一项，参加挑战杯揭榜挂帅一项，曾获国家励志奖学金，校级荣誉两项，院级荣誉若干。',
            image: '杨晓迪头像.jpg',
          },
          {
            name: '罗瑞清',
            role: '文稿资料组组长',
            description: '统筹新闻撰写与投稿、产出高质量新闻。',
            tel: '15348649494',
            qq: '3575816928',
            email: '3575816928@qq.com',
            introduction: '罗瑞清，男，19岁，共青团员，主要负责统筹新闻撰写组与新闻投稿组梳理红色故事主线、明确红色文化内核，结合线下采集资料生成图文并茂的宣讲故事，并紧跟实践小组动态实时产出对应新闻，在对新闻质量进行评估后，投稿到相应层次网站。',
            image: '罗瑞清头像.jpg',
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