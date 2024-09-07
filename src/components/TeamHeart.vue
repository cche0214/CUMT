<template>
  <div class="team-heart">
    <div class="heading">团队初心</div>
    <hr class="heading-hr" />
    <div class="wrap">
      <div class="boxheart" v-for="(item, index) in boxes" :key="index">
        <!-- 奇数项显示左侧图片 -->
        <div class="left" v-if="index % 2 === 0">
          <img :src="require(`@/assets/images/${item.leftImage}`)" :alt="'左侧图片 ' + item.centerText" />
        </div>
        <div class="left" v-if="index % 2 !== 0">
          <p>{{ item.leftText }}</p>
        </div>

        <div class="center">
          <span>{{ item.centerText }}</span>
        </div>

        <div class="right" v-if="index % 2 === 0">
          <p>{{ item.rightText }}</p>
        </div>
        <div class="right" v-if="index % 2 !== 0">
          <img :src="require(`@/assets/images/${item.rightImage}`)" :alt="'右侧图片 ' + item.centerText" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamHeart',
  data() {
    return {
      boxes: [
        {
          centerText: '服务社会',
          leftImage: '第一师范纪念馆2.png',
          leftText: '',
          rightText: 'E新向党实践团始终秉持助人为乐的精神，走进社区、农村等地，帮助有需要的人群。通过行动传递爱与温暖，团员们用心服务他人，以真诚与善良温暖社会，展示当代大学生的责任与担当。',
          rightImage: ''
        },
        {
          centerText: '助人为乐',
          leftImage: '',
          leftText: 'E新向党实践团积极服务社会，致力于环境保护、扶贫助困等实践活动。将个人力量汇聚成社会进步的动力，广泛参与公共事务，不仅提升自我，更为社会发展贡献青春力量，助力社会和谐发展。',
          rightText: '',
          rightImage: '枣园封面.png'
        },
        {
          centerText: '弘扬美德',
          leftImage: '杨虎城旧址2.png',
          leftText: '',
          rightText: 'E新向党实践团大力弘扬中华传统美德，倡导诚信、友善和互助精神。通过宣传与实践，将美德内化为行动，号召更多人共同传承中华优秀文化，肩负青年的使命，推动美德在全社会生根发芽。',
          rightImage: ''
        },
      ]
    };
  }
}
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
}
.wrap {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.boxheart {
  position: relative;
  width: 100%;
  max-width: 1000px;
  height: 150px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
}

.left, .right {
  position: relative;
  width: 45%;
  height: 150px;
  border-radius: 15px;
  text-align: center;
  border: 1px solid #ccc; 
  background-color: #f9f9f9;
}

.left img, .right img {
  width: 100%;
  height: 150px;
  border-radius: 15px;
  background-color: #f9f9f9;
}

.boxheart:nth-child(even) .left {
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.boxheart:nth-child(odd) .right {
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.center {
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
}

.center > span {
  width: 120px;
  border-radius: 10px;
  text-align: center;
  font: 400 19px '楷体';
  line-height: 50px;
  color: white;
  background-color: rgb(30, 50, 100);
}

.left p, .right p {
  text-indent: 2em;
  font-weight: normal;
  color: black;
  font-size: 18px;
  line-height: 1.6;
  font-family: '楷体';
}
</style>
