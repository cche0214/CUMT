<template>
  <div class="team-heart">
    <div class="heading">团队初心 可以用四字词语简要概括初心，两边放可以体现初心的事件，图片</div>
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
          leftImage: 'CUMT-view1.jpg',
          leftText: '',
          rightText: '中国矿业大学是教育部直属的全国重点高校，是教育部、应急管理部与江苏省人民政府共建高校，先后进入国家“211工程”“985优势学科创新平台项目”和国家“双一流”建设高校行列。',
          rightImage: ''
        },
        {
          centerText: '助人为乐',
          leftImage: '',
          leftText: '中国矿业大学是教育部直属的全国重点高校，是教育部、应急管理部与江苏省人民政府共建高校，先后进入国家“211工程”“985优势学科创新平台项目”和国家“双一流”建设高校行列。',
          rightText: '',
          rightImage: 'CUMT-view2.jpg'
        },
        {
          centerText: '弘扬美德',
          leftImage: 'CUMT-view3.jpg',
          leftText: '',
          rightText: '中国矿业大学是教育部直属的全国重点高校，是教育部、应急管理部与江苏省人民政府共建高校，先后进入国家“211工程”“985优势学科创新平台项目”和国家“双一流”建设高校行列。',
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
