
<template>
  <div>

    <!-- 弹幕列表 -->
    <section class="background-section">
      <vue-danmaku
      v-model="list"
      :speeds="config.speeds"
      :randomChannel="config.randomChannel"
      :isSuspend="config.isSuspend"
      :loop="config.loop"
      :useSlot="config.useSlot"
      :channels="config.channels"
      :top="config.top"
      :right="config.right"
      @play-end="getEnd"
      ref="Danmaku"
      style="height:500px; width:100%;">
          <template slot="dm" slot-scope="{ index, danmu  }">
              <!-- <span>当前索引: {{ index }}</span> -->
              <section class="content" @click="action(danmu, index)">

                  <!-- 如果是自己的弹幕,就标红加粗字体 -->
                  <p class="text" :style="danmu.flag == 'my' ? 'font-weight: bold;color:red' : ''">
                      {{ danmu.text }}
                  </p>
              </section>
          </template>
      </vue-danmaku>
    </section>
    <!-- END -->

    

    <!-- 发送弹幕 -->
    <!-- <section class="send">
      <input v-model="newtext" />
      <button @click="sendPush(newtext)" class="btn">留言</button>
    </section> -->
    <!-- END -->

    
  </div>
</template>

<script>
// 引入组件
import vueDanmaku from 'vue-danmaku'
import axios from 'axios'

export default {
  components: { vueDanmaku },
  data() {
    return {
      list: [
            { text: '每一件展品都在诉说历史的伟大与艰辛。' },
            { text: '革命先烈的牺牲，换来了今日的和平。' },
            { text: '历史的长河奔流不息，我们应时刻铭记。' },
            { text: '感悟革命先辈的无畏精神，坚定信念。' },
            { text: '革命历史的传承，激励我们不断奋进。' },
            { text: '实地感受历史，更加深刻地理解过往。' },
            { text: '站在烈士纪念碑前，心中充满敬仰。' },
            { text: '战士们的英勇事迹，深深触动着我。' },
            { text: '纪念馆里的每个展品，都承载着鲜活的记忆。' },
            { text: '历史传承是责任，更是使命。' },

            { text: '今日和平，是先烈们用鲜血换来的。' },
            { text: '实地参观让我不再是旁观者，而是感受者。' },
            { text: '历史的厚重感扑面而来，令人心生敬畏。' },
            { text: '实践是走进历史的最好方式。' },  
            { text: '传承红色基因，是我们的责任与担当。' },
            { text: '革命精神，激励我们在新时代中砥砺前行。' },

          ],
      newtext: '',
      config: {
        speeds: 100,
        randomChannel: true,
        isSuspend: true,
        loop: true,
        useSlot: true,
        channels: 11,
        top: 15,
        right: 15,
      },
    }
  },
  mounted() {
    this.fetchComments();
  },
  methods: {
    /**
     * 请求评论数据
     * @return void
     */
    fetchComments() {
      const url = 'https://comments.soooo.fun/api/comment?path=/&pageSize=10&page=1&lang=zh-CN&sortBy=insertedAt_desc';
      axios.get(url)
        .then(response => {
          const data = response.data.data.data;
          data.forEach(item => {
            const { nick, orig } = item;
            const regex = /^(?!.*[<>(){}*&$#/\\@]).*$/;
            if (regex.test(orig)) {
              const combinedText = `${nick}: ${orig}`;
              this.list.push({ text: combinedText });
              this.$refs.Danmaku.insert({
                text: combinedText,
                flag: 'my'
              });
            }
          });
        })
        .catch(error => {
          console.error('Error fetching comments:', error);
        });
    },
    sendPush(text) {
      const handletext = text;
      console.log(handletext);
      this.list.push({ text: handletext });
      console.log(this.list);
      this.$refs.Danmaku.insert({
        text: text,
        flag: 'my'
      });
      this.newtext = '';
    },
    action(row, index) {
      console.log(row, index);
    },
    getEnd(index) {
      console.log('滚动结束', index);
    },
  }
}
</script>


<style scoped>
.background-section {
  background-image: url('../assets/images/CUMT-view3.jpg');
  background-size: cover;
  background-position: center;
}

/* 自定义弹幕样式(根据需求自行更改) */
.content {
  background: rgba(30,50,100,0.6);
  color: white; 
  border-radius: 5px; /* 边角圆润 */
    width: 100%;
}
.avarts {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: green;
}
.text {
    /* vertical-align: top; */
    vertical-align: top;
    font-size: 20px;
    font-family: 楷体;
    /* background: green; */
    /* background: red; */
}
/* END */

/* 按钮样式 */
/* 修改 .btn 的样式 */
.btn {
    padding: 10px 20px; /* 调整内边距 */
    font-size: 16px; /* 字体大小 */
    background-color: rgb(30,50,100); /* 背景颜色 */
    color: #fff; /* 字体颜色 */
    cursor: pointer; /* 鼠标指针样式 */
    border-radius:5px; /* 圆角 */
    border: none; /* 移除边框 */
    margin-left: 10px; /* 消除外边距 */
    box-sizing: border-box; /* 包括内边距在内计算宽度 */
    height: 40px; /* 固定高度，与 .text 一致 */
    line-height: 20px; /* 垂直居中文本 */
}


/* 鼠标悬停时按钮字体变红 */
.btn:hover {
    color:  #ff9900; /* 字体变红 */
}

/* END */
</style>
