<template>
  <div class="messages">
    <div class="heading">心得体会</div>
    <hr class="heading-hr" />

    <div class="form">
      <input v-model="username" type="text" placeholder="用户名" />
      <textarea v-model="message" placeholder="留言内容"></textarea>
      <button @click="submitMessage" class="btn">我有好多想说的</button>
    </div>

    <div id="messageBoard">
      <div v-for="(msg, index) in messages" :key="index" class="message">
        <div class="message-info">
          <div class="info">
            <img :src="require(`@/assets/images/${msg.avatar}`)" alt="头像" />
            <strong class="name">{{ msg.username }}</strong>
          </div>
          <span>发布于：{{ msg.timestamp }}</span>
        </div>
        <div class="content">
          {{ msg.message }}
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      message: '',
      messages: [
        {
          username: '小明',
          message: '这里我可以直接从实践稿里面找感悟的话来，不过如果可以的话也可以单独发一份有关感悟的内容来',
          avatar: 'mouse.jpg',
          timestamp: '2024/08/21 12:00:00'
        },
        {
          username: '小红',
          message: '你好，这里是留言板。',
          avatar: 'mouse.jpg',
          timestamp: '2024/08/21 12:05:00'
        },
        {
          username: '小李',
          message: '中国矿业大学是教育部直属的全国重点高校，是教育部、应急管理部与江苏省人民政府共建高校，先后进入国家“211工程”“985优势学科创新平台项目”和国家“双一流”建设高校行列。 学校为全国首批具有博士和硕士授予权的高校之一，设有国家批准的研究生院。 学校现坐落于素有“五省通衢”之称的国家历史文化名城——江苏省徐州市，有文昌和南湖两个校园，占地4200余亩，校舍建筑面积156万平方米，馆藏图书文献2000多万册（件）。 学校现有2个国家“双一流”建设学科、1个一级学科国家重点学科，8个二级学科国家重点学科，1个国家重点（培育）学科；7个江苏省优势学科、7个江苏省重点学科； 18个一级学科博士点，2个专业学位博士点，36个一级学科硕士点，20个专业学位硕士点。 学校设23个学院，74个本科专业，有全日制普通本科生23600余人，各类博士、硕士研究生13300余人，留学生680余人，继续教育学生10000余人； 有教职工3450余人；另设有徐海学院。',
          avatar: 'mouse.jpg',
          timestamp: '2024/08/21 12:10:00'
        }
      ]
    };
  },
  methods: {
    submitMessage() {
      if (this.message.trim() === '') {
        alert('请输入内容');
        return;
      }

      const user = this.username.trim() === '' ? '匿名' : this.username;
      const timestamp = this.getCurrentTime();
      const defaultAvatar = 'mouse.jpg'; // 默认头像文件名

      // 将新留言添加到 messages 数组
      this.messages.unshift({
        username: user,
        message: this.message,
        avatar: defaultAvatar,
        timestamp
      });

      // 清空输入框
      this.username = '';
      this.message = '';
    },
    getCurrentTime() {
      const now = new Date();
      const year = now.getFullYear();
      const month = ('0' + (now.getMonth() + 1)).slice(-2);
      const day = ('0' + now.getDate()).slice(-2);
      const hours = ('0' + now.getHours()).slice(-2);
      const minutes = ('0' + now.getMinutes()).slice(-2);
      const seconds = ('0' + now.getSeconds()).slice(-2);
      return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
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
  margin-top: 10px;
  font-weight: 700;
}

.heading-hr {
  border: none;
  height: 2px;
  background-color: rgb(30,50,100);
}

.messages {
  text-align: center;
}

.name {
  font-size: 25px;
  font-family: 楷体;
}

input,
textarea {
  display: block;
  margin: 10px auto;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc; /* 显式设置边框 */
  background-color: #f9f9f9;
  color: #333;
  font-size: 16px;
  width: 80%;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

textarea {
  resize: none;
}

input::placeholder,
textarea::placeholder {
  color: black;
  font-style: 宋体;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  background-color: rgb(30,50,100);
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  margin-left: 10px;
  box-sizing: border-box;
  height: 40px;
  line-height: 20px;
}

.btn:hover {
  color: #ff9900;
}

.message {
  width: 80%; /* 与输入框宽度一致 */
  margin: 10px auto; /* 自动水平居中 */
  background-color: #f9f9f9;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px; /* 增加内边距 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.message-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px; /* 与内容之间增加一些间距 */
  font-family: 楷体;
  margin-right: 10px
}

.message-info img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #ddd;
}

strong {
  margin-left: 10px;
}

.content {
  background-color: #f9f9f9;
  color: black;
  font-size: 20px;
  font-family: 楷体;
  padding: 10px; /* 增加内边距 */
  border-radius: 5px; /* 增加圆角 */
  border: 1px solid #ccc; /* 显式设置边框 */
}

</style>
