
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

export default {
  components: { vueDanmaku },
  data() {
        return {
            // 弹幕列表(图片资源可能随时失效，如失效请自行更换)
            list: [
            { text: '希望我中考顺利' },
            { text: '体育和中考都能考的非常好' },
            { text: '我随便许个愿望' },
            { text: '通过社会实践，我增长了见识和技能。通过社会实践，我增长了见识和技能。' },
            { text: '哈哈哈' },
            { text: '希望我喜欢的人也喜欢我' },
            { text: '我通过社会实践，我增长了见识和技能。通过社会实践，我增长了见识和技能。' },
            { text: '非常短' },
            { text: 'I make a wish and hope it will come true next year!' },
            { text: '我对任何事情，都永远充满热情' },
            ],
            newtext:'',
            // 弹幕配置
            config: {
                speeds: 100,//弹幕速度
                randomChannel: true,//随机选择轨道插入
                isSuspend: true,//是否开启弹幕悬停(PC是鼠标悬停，移动端是点击悬停)
                loop: true,//是否开启循环播放
                useSlot: true,//是否开启弹幕插槽(自定义样式时开启)
                channels: 11,//轨道数量
                top: 15,//弹幕垂直间距(px)
                right: 15,//弹幕水平间距(px)
                // ...
                // 更多参数详见文章底部
            },
        }
    },

    methods: {

      

      /**
       * 点击发送弹幕
       * @description 插入到节点中
       * @param {String} text - 弹幕内容
       * @return void
       */
      sendPush(text) {
        // 注意：不适用于频繁插入，详情请看文档
        const handletext = text
        console.log(handletext);
        
        this.list.push(handletext)
        console.log(this.list);
        
        this.$refs.Danmaku.insert({
          // 图片
          // 插入的内容
          text: text,
          // 额外插入一个字段，用于高亮显示
          // 模板进行判断,增加额外样式
          flag: 'my'
        })
        this.newtext = ''
      },

      /**
       * 点击弹幕
       * @description 执行操作
       * @param {Object} row - 行数据
       * @param {Number} index - 索引
       * @retrun void
       */
      action(row, index) {
          console.log(row, index)
      },

      /**
       * 监听弹幕滚动完毕
       * @description 如果开启loop循环播放,永不执行(如果关闭,则弹幕滚动完后触发)
       * @param {Number} index - 最后一个弹幕的下标
       * @return void
       */
      getEnd(index) {
          console.log('滚动结束', index)
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
