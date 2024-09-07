<template>
  <div>
    <div class="heading">意见留言</div>
    <hr class="heading-hr" />

    <div class="tech-icons">
      <img src="../assets/images/计院logo.png" alt="右侧校徽" class="icon square"/>
      <img src="../assets/CUMT-logo.png" alt="左侧校徽" class="icon square" />
      <img src="../assets/images/共青团logo.jpg" alt="右侧校徽" class="icon square"/>
    </div>
    
    <!-- 感谢信息部分 -->
    <div class="thank-you-container">
      <p>· 大家好！这里是中国矿业大学——“E新向党”实践团！ ·</p>
      <p>· 由衷地感谢大家访问本网站，了解实践团成员的成果展示！ ·</p>
      <p>· 需要说明的是，这个网站是每个实践团成员的共同成果！可以说缺少了哪一个部分，都不会搭建成功 ·</p>
      <p>· 因此，请允许我向参与本次实践的各组成员表示衷心的感谢，同时也感谢带队老师，队长的实践付出！ ·</p>
      <p>· 希望中国矿业大学的社会实践越做越好，越办越成功！ ·</p>
      <p>· 平台开发组成员 陈岳豪 2024年9月6日 ·</p>
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

.tech-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  gap: 15px; /* 图标之间的间距 */
}

.icon {
  width: 100px; /* 设置图标的大小 */
  height: 100px;
}

.square {
  border-radius: 5px; /* 设定为正方形框 */
  object-fit: contain; /* 确保图标按比例缩放并填充框 */
}

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
