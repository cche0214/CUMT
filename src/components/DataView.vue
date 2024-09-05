<template>
  <div class="charts-wrapper">
    <!-- 图表容器 -->
    <div class="charts-container">
      <!-- 左边的饼状图 -->
      <div id="pie-chart" class="chart-box"></div>
      <!-- 右边的折线图 -->
      <div id="line-chart" class="chart-box"></div>
    </div>
    
    <!-- 文本解释框 -->
    <div id="info-box">
      <h2>图表分析总结</h2>
      <ul>
        <li>饼状图显示了某网站的访问来源，搜索引擎是主要来源。</li>
        <li>折线图显示了该网站在一周内的访问趋势，周末的访问量较高。</li>
        <li>从数据中可以看出，用户的访问习惯存在一定的周期性。</li>
      </ul>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      // 初始化饼状图
      const pieChart = echarts.init(document.getElementById('pie-chart'));
      const pieOption = {
        title: {
          text: 'Referer of a Website',
          subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      pieChart.setOption(pieOption);

      // 初始化折线图
      const lineChart = echarts.init(document.getElementById('line-chart'));
      const lineOption = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      };
      lineChart.setOption(lineOption);
    }
  }
};
</script>

<style scoped>
.charts-wrapper {
  display: flex;
  flex-direction: column;
}

.charts-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.chart-box {
  width: 48%;
  height: 500px; /* 增加图表高度 */
}

#info-box {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  border: 1px solid #ccc;
  font-size: 20px;
  line-height: 1.6;
  color: black;
  font-family: 楷体;
}

#info-box h2 {
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: bold;
}

#info-box ul {
  list-style-type: disc;
  padding-left: 20px;
}

#info-box ul li {
  margin-bottom: 10px;
}
</style>
