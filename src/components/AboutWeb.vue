<template>
  <div>
    <div class="heading">技术概览</div>
    <hr class="heading-hr" />

    <!-- 技术图标展示 -->
    <div class="tech-icons">
      <img src="https://img.icons8.com/color/100/html-5--v1.png" alt="HTML" class="icon square" />
      <img src="https://img.icons8.com/color/100/css3.png" alt="CSS" class="icon square" />
      <img src="https://img.icons8.com/nolan/100/javascript-logo.png" alt="JavaScript" class="icon square" />
      <img src="https://img.icons8.com/color/100/vue-js.png" alt="Vue.js" class="icon square" />
      <img src="https://img.icons8.com/windows/96/yarn-logo.png" alt="Yarn" class="icon square" />
      <img src="https://img.icons8.com/windows/96/github.png" alt="GitHub" class="icon square" />
      <img src="../assets/Echarts.png" alt="Echarts" class="icon square" />
    </div>

    <!-- 技术栈 -->
    <section class="tech-stack">
      <h2>技术栈</h2>
      <ul>
        <li>HTML, CSS, JavaScript：用于构建网页结构、样式和动态功能。</li>
        <li>Vue.js, Vue Router, Vue CLI：构建单页面应用（SPA）的前端框架和工具。</li>
        <li>Yarn：高效的包管理器，用于管理项目依赖。</li>
        <li>ECharts：实现地图和数据可视化功能的开源图表库。</li>
        <li>GitHub Pages：静态网站托管服务，用于网站的线上部署。</li>
        <li>Vue 预渲染：提升初次加载速度的优化技术。</li>
      </ul>
    </section>

    <!-- 项目特点 -->
    <section class="project-features">
      <h2>项目特点</h2>
      <ul>
        <li>
          <strong>布局美观简洁：</strong> 网站具有轮播图、手风琴展示名片、动态数字、弹幕展示等效果，帮助用户浏览网站并了解实践内容。
        </li>
        <li>
          <strong>数据可视化：</strong> 利用中国地图和数据可视化总结归纳实践地点，帮助用户直观了解实践的地理分布和相关数据趋势。
        </li>
        <li>
          <strong>单页面应用：</strong> 网站采用单页面设计，页面切换平滑，加载速度快，用户体验良好。
        </li>
        <li>
          <strong>实时记录心得：</strong> 网站包含留言板功能，支持用户实时记录心得，后期将配合后端技术实现完整留言功能。
        </li>
        <li>
          <strong>项目管理方便：</strong> 用户可以通过 GitHub 仓库的 issue 实时反馈问题，方便项目管理和改进。
        </li>
        <li>
          <strong>Vue 预加载技术：</strong> 通过预加载技术解决初次加载时间较长的问题，提高页面加载速度。
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.heading {
  text-align: center;
  font-size: 32px;
  font-family: 楷体;
  color: rgb(30,50,100);
  font-weight: 700;
}

.heading-hr {
  margin: 0;
  border: none;
  height: 2.3px;
  background-color: rgb(30,50,100);
}

/* 技术图标展示样式 */
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

/* 技术栈和项目特点的布局样式 */
.tech-stack, .project-features {
  margin: 15px 0;
  padding-left: 40px; /* 大标题缩进 */
}

.tech-stack h2, .project-features h2 {
  font-size: 1.6em;
  color: rgb(30, 50, 100);
  font-family: 楷体;
}

.tech-stack ul, .project-features ul {
  list-style-type: none;
  padding: 0;
  padding-left: 20px; /* 内容缩进 */
}

.tech-stack li, .project-features li {
  font-size: 1.2em;
  color: #333;
  font-family: 楷体;
  margin-bottom: 10px;
}

.project-features strong {
  font-weight: bold;
}
</style>
