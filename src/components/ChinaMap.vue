<template>
  <div>
    <!-- 地图容器 -->
    <div id="main" style="width: 100%; height: 800px"></div>
    <!-- 动态显示信息的盒子 -->
    <div id="info-box" style="margin-top: 20px; display: flex; justify-content: space-between; align-items: center;">
      <div class="content">
        <p><strong>实践地点</strong>： {{ selectedLocation.address }}</p>
        <p><strong>实践人员</strong>： {{ selectedLocation.people }}</p>
      </div>
      <!-- 归位按钮 -->
      <button @click="resetMap" class="btn">
        归位
      </button>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import "@/js/ChinaMapchain.js";

export default {
  data() {
    return {
      tableData: [], // 用于存放JSON数据
      selectedLocation: { address: '默认地址', people: '默认的人' }, // 存储选中地点的信息
      mapInstance: null, // 存储地图实例
      initialOption: null // 存储初始配置
    };
  },
  created() {
    // 在 created 钩子中发起 fetch 请求
    fetch(process.env.BASE_URL + "assets/json/ChinaMapPoint.json")
      .then(response => response.json())
      .then(data => {
        // 处理数据并存储到 tableData 中
        this.tableData = data.map(item => ({
          name: item.name,
          value: item.value,
          address: item.address, // 修正为 address
          people: item.people // 修正为 people
        }));

        // 输出 tableData 的内容
        console.log("tableData:", this.tableData);

        // 确保 DOM 更新完成后再初始化图表
        this.$nextTick(() => {
          this.initChart();
        });
      })
      .catch(error => {
        console.error("Error fetching JSON data:", error);
      });
  },
  methods: {
    initChart() {
      // 初始化 ECharts 实例
      this.mapInstance = echarts.init(document.getElementById('main'));

      // 保存初始配置
      this.initialOption = {
        tooltip: {
          show: true,
          triggerOn: 'click',
          formatter: function (params) {
            return params.data.address;
          }
        },
        geo: {
          map: 'china',
          roam: true, // 启用地图的缩放和拖拽功能
          zoom: 1.2,
          center: [105, 36],
          itemStyle: {
            areaColor: '#f5f2f2',
            borderColor: "#835f5f",
          },
          label: {
            show: true,
            fontSize: "11.5",
            color: "rgb(107,102,102)"
          },
          emphasis: {
            itemStyle: {
              areaColor: '#d0a3a3',
            },
            label: {
              show: true,
              color: "rgb(255,255,255)"
            }
          }
        },
        series: [
          {
            name: '地点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: this.tableData,
            symbolSize: 12,
            itemStyle: {
              color: "#f13434",
              shadowBlur: 2,
              shadowColor: "#333"
            }
          },
          {
            name: "地点",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: this.tableData,
            symbolSize: 4,
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke",
              color: "#f13434",
              period: 10,
              scale: 10
            },
            emphasis: {
              scale: true,
            },
            label: {
              formatter: "{b}",
              position: "top",
              show: true,
              fontSize: "10",
            },
            itemStyle: {
              color: "#f13434",
              shadowBlur: 2,
              shadowColor: "#333"
            }
          }
        ]
      };

      // 使用配置项和数据显示图表
      this.mapInstance.setOption(this.initialOption);

      // 监听散点的点击事件
      this.mapInstance.on('click', (params) => {
        if (params.componentType === 'series') {
          // 更新选中的地点信息
          this.selectedLocation = {
            address: params.data.address,
            people: params.data.people
          };
        }
      });
    },
    resetMap() {
      // 重置地图到初始状态
      if (this.mapInstance && this.initialOption) {
        this.mapInstance.setOption(this.initialOption);
      }
    }
  }
};
</script>

<style scoped>
#info-box {
  background-color: #f9f9f9;
  border-radius: 8px;
  font-size: 20px;
  line-height: 1.6;
  border: 1px solid #ccc; /* 显式设置边框 */
  font-family: 楷体;
  color: black;
}
.content {
  margin-left: 20px;
}
.btn {
  padding: 10px 20px;
  font-size: 16px;
  background-color: rgb(30, 50, 100);
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  margin-right: 20px;
  box-sizing: border-box;
  height: 40px;
  line-height: 20px;
}

.btn:hover {
  color: #ff9900;
}
</style>
