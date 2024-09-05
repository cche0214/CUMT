<template>
  <div>
    <div class="heading">本次实践</div>
    <hr class="heading-hr" />

    <div class="practice">
      <div class="images">
        <img src="@/assets/images/CUMT-view1.jpg" alt="Image 1" />
        <img src="@/assets/images/CUMT-view4.jpg" alt="Image 2" />
      </div>
      <div class="stats">
        <div
          class="number-container"
  
        >
          <p>
            这里就放本次实践的产生背景，以及所做的事，着重介绍本次的内容，左边的图片挑选两张最有代表性的图片即可，可以是合照等
            下面的数字提示框可以放置一些统计数据，比如截至目前，前往多少地点实践，有多少人参加实践，累计攥写多少篇实践文稿，这种，统计数据，体现牛逼
          
          </p>
        </div>
        <div
          class="number-container"
          v-for="(stat, index) in stats"
          :key="index"
          @click="increment(stat)"
        >
          <span class="description">{{ stat.description }}</span>
          <span class="number-display">{{ stat.displayNumber }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stats: [
        { description: '前往多少地点实践', end: 86, displayNumber: '???' },
        { description: '有多少人参加实践', end: 50, displayNumber: '???' },
        { description: '累计攥写多少篇实践文稿', end: 97, displayNumber: '???' }
      ]
    };
  },
  methods: {
    increment(stat) {
      let start = 1;
      const end = stat.end;
      stat.displayNumber = ''; // 清空显示内容
      const interval = setInterval(() => {
        start += 2;
        if (start > end) {
          clearInterval(interval);
          stat.displayNumber = end.toLocaleString();
        } else {
          stat.displayNumber = start.toLocaleString();
        }
      }, 10);
    }
  }
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
.practice {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.images {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.images img {
  width: 700px;
  height: 320px;
  object-fit: cover;
  border-radius: 8px;
}

.stats {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 100%;
  background-color: #f9f9f9;
}

.stats p {
  font-family: 楷体;
  font-size: 20px; /* 字体大小增大 */
  color: black;
  text-indent: 2em;
}

.number-container {

  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 在number-container中左右对齐 */
  gap: 5px;
  padding: 10px;
  width: 90%;
  max-width: 600px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}



.number-container:nth-child(2),
.number-container:nth-child(3),
.number-container:nth-child(4) {
  cursor: pointer; /* 设置光标为可点击样式 */
}

.description {
  font-family: 楷体;
  font-size: 18px; /* 字体大小增大 */
  color: black;
  flex: 1; /* 占据左侧的空间 */
  text-align: left; /* 左对齐 */
  
}

.number-display {
  font-size: 26px; /* 字体大小略微增大 */
  font-weight: bold;
  color: black;
  flex-shrink: 0; /* 避免数字被压缩 */
  text-align: right;
}
</style>
