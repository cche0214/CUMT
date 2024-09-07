<template>
  <div>
    <div class="heading">本次实践</div>
    <hr class="heading-hr" />

    <div class="practice">
      <div class="images">
        <img src="@/assets/images/合照1.jpg" alt="Image 1" />
        <img src="@/assets/images/本次实践1.jpg" alt="Image 2" />
      </div>
      <div class="stats">
        <div
          class="number-container"
  
        >
          <p>
            本次E新向党实践团的暑期社会实践任务在队长张铭昊和副队长杨晓迪的带领下，由曹露晨老师指导，形成了一个行政分工合理、办事高效的团队。团队共分为实地实践组、资料攥写组和平台开发组。实地实践组负责走访红色基地，亲身感悟红色文化的力量；资料攥写组负责将实践中收集到的资料进行整合与总结，撰写成具有传播价值的文稿；平台开发组则承担了线上平台的搭建工作，利用技术手段传播红色精神。通过各组的紧密配合，团队在实践参与人数、实践地点数量和文稿数量上取得了显著突破，成果也更加丰富。
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
        { description: '累计实践人数突破', end: 85, displayNumber: '???' },
        { description: '累计社会实践新闻产出高达', end: 20, displayNumber: '???' },
        { description: '累计实地实践地点统计', end: 22, displayNumber: '???' }
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
