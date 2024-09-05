<template>
  <div>
    <div class="heading">意见留言 这里的右边我打算放我们团队的logo 或者是计算机学院的logo</div>
    <hr class="heading-hr" />
    
    <!-- 校徽图片部分 -->
    <div class="badge-container">
      <!-- 替换src为左侧校徽图片路径 -->
      <img src="../assets/CUMT-logo.png" alt="左侧校徽" class="badge" />
      <!-- 替换src为右侧校徽图片路径 -->
      <img src="../assets/CUMT-logo.png" alt="右侧校徽" class="badge" />
    </div>

    <!-- 感谢信息部分 -->
    <div class="thank-you-container">
      <p>· 感谢大家的使用 ·</p>
      <p>· 感谢大家的观看 ·</p>
      <p>· 感谢大家的使用感谢大家的观看感谢大家的观看感谢大家的观看感谢大家的观看 ·</p>
      <p>· 感谢大家的观看感谢大家的观看感谢大家的观看 ·</p>
      <p>· 感谢大家的使用感谢大家的观看感谢大家的观看感谢大家的观看感谢大家的观看 ·</p>
      <p>· 感谢大家的使用感谢大家看感谢大家的观看感谢大家的观看 ·</p>
    </div>

    <!-- 圆形图片部分 -->
    <div class="circle-image-container">
      <!-- 替换src为圆形图片路径 -->
      <img src="https://img.icons8.com/windows/96/github.png" alt="点击图片" class="circle-image" @click="handleImageClick" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContractUs',
  methods: {
    handleImageClick() {
      window.location.href = 'https://github.com/';
    },
  },
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

/* 校徽图片部分样式 */
.badge-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto 20px;
}

.badge {
  width: 45%; /* 设置校徽图片的宽度，确保它们是长条形的 */
  height: auto;
}

/* 感谢信息部分样式 */
.thank-you-container {
  text-align: center;
  font-family: 楷体;
  font-size: 18px;
  margin-bottom: 20px;
}

.thank-you-container p {
  margin: 10px 0;
}

/* 圆形图片部分样式 */
.circle-image-container {
  text-align: center;
  margin-top: 20px;
}

.circle-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
  /* 添加更多样式，如果需要 */
}
</style>
