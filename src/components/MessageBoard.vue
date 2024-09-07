<template>
  <div class="messages">
    <div class="heading">心得体会</div>
    <hr class="heading-hr" />

    <div id="article-info">
    <!-- ... -->
    阅读量: <span class="waline-pageview-count" data-path="/" />
    <!-- ... -->
    </div>

    <div id="waline"></div>
    <script type="module">
      import { init } from 'https://unpkg.com/@waline/client@v3/dist/waline.js';

      init({
        el: '#waline',
        serverURL: 'https://comments.soooo.fun',
        pageview: true,
      });
    </script>
    
  </div>
</template>

<script>
export default {
  mounted() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/@waline/client@v3/dist/waline.css';
    document.head.appendChild(link);
  }
}
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
