<template>
  <!-- 卡片容器 -->
<div class="card-list">
    <!-- 卡片 -->
    <div class="card" v-for="card in cardListStory" :key="card.id">
        <div class="content">
            <h2>{{ card.title }}</h2>
            <p>{{ card.summary }}</p>
            <a :href="card.link" class="button" @click="$router.push(`/detail?id=${card.id}&temple=${card.temple}`)">查看更多</a>
        </div>
    </div>
</div>

 
</template>

<script>
export default {
  data() {
  return {
    cardListStory:[
  {
    "temple": 1,
    "id": 1,
    "title": "西安事变：民族危亡时的壮举",
    "summary": "张学良与杨虎城扣留蒋介石，促成了国共合作共同抗日的局面。"
  },
  {
    "temple": 1,
    "id": 2,
    "title": "淮海战役：人民战争的胜利",
    "summary": "淮海战役展现了军民鱼水情，人民的支持是胜利的关键。"
  },
  {
    "temple": 1,
    "id": 3,
    "title": "抗美援朝：保家卫国的壮丽篇章",
    "summary": "抗美援朝战争展现了中国军队为保卫国家安全所做出的巨大牺牲。"
  },
  {
    "temple": 1,
    "id": 4,
    "title": "南昌起义：武装斗争的号角",
    "summary": "南昌起义是中国共产党领导下的第一次武装起义，开启了革命武装斗争的新篇章。"
  },
  {
    "temple": 1,
    "id": 5,
    "title": "平型关大捷：抗日战争的胜利",
    "summary": "八路军在抗日战争中取得的首次大捷，极大鼓舞了全国人民的抗战信心。"
  },
  {
    "temple": 1,
    "id": 6,
    "title": "百团大战：抗日战争中的辉煌胜利",
    "summary": "百团大战是抗日战争中一次大规模战役，展现了中国军队强大的组织和作战能力。"
  },
  {
    "temple": 1,
    "id": 7,
    "title": "遵义会议：革命转折点",
    "summary": "1935年中国共产党在遵义召开的会议，确立了毛泽东的领导地位，转折了革命形势。"
  },
  {
    "temple": 1,
    "id": 8,
    "title": "重庆谈判：和平的努力",
    "summary": "抗战胜利后毛泽东与蒋介石在重庆进行和平谈判，为争取民主和平而努力。"
  },
  {
    "temple": 1,
    "id": 9,
    "title": "渡江战役：解放全中国的关键一战",
    "summary": "渡江战役是解放战争的决定性战役，标志着国民党政权的全面崩溃，开启了全国解放的序幕。"
  },
  {
    "temple": 1,
    "id": 10,
    "title": "井冈山精神：革命的摇篮",
    "summary": "井冈山是中国革命的摇篮，孕育了伟大的井冈山精神，指引中国革命胜利。"
  },
  {
    "temple": 1,
    "id": 11,
    "title": "四渡赤水：战略转折",
    "summary": "红军长征途中四渡赤水，展现了毛泽东卓越的军事才能，实现了战略转折。"
  },
  {
    "temple": 1,
    "id": 12,
    "title": "上甘岭战役：坚韧不拔",
    "summary": "上甘岭战役是抗美援朝战争中最著名的战役之一，展示了中国军人的坚韧不拔精神。"
  }
]

  };
}

}
</script>

<style scoped>
.card-list {
    display: flex;
    flex-wrap: wrap; /* 允许换行 */
    justify-content: space-between; /* 在每行中均匀分布卡片 */
}

.card {
  position: relative;
    width: 240px;
    height: 350px;
    margin: 10px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    color: #f5f5f5;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1),
                0 2px 2px rgba(0,0,0,0.1),
                0 4px 4px rgba(0,0,0,0.1),
                0 8px 8px rgba(0,0,0,0.1),
                0 16px 16px rgba(0,0,0,0.1);
    overflow: hidden;
    background-color: transparent; /* 确保背景颜色为透明 */
}

.card::before {
  content: "";
    width: 100%;
    height: 110%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: 0 0;
    transition: transform 1s cubic-bezier(0.19,1,0.22,1);
}
.card:nth-child(1)::before {
    background-image: url('https://img.pconline.com.cn/images/upload/upc/tx/photoblog/1311/21/c11/28860969_28860969_1385038801000_mthumb.jpg');
}
.card:nth-child(2)::before {
    background-image: url('https://picx.zhimg.com/70/v2-b8df951ad056820a0cf4b3ea41141ff5_1440w.avis?source=172ae18b&biz_tag=Post');
}
.card:nth-child(3)::before {
    background-image: url('https://th.bing.com/th/id/R.966fc65a5a33b9bf70d92cafaf8389ab?rik=L1DvR5h9EJZXWw&riu=http%3a%2f%2fwww.169369.com%2fuploads%2fallimg%2f211227%2f2-21122G4520R48.jpg&ehk=xpHuYzY%2fEn20%2bh7OU%2fh825v5drKrF6YuQt32jpYxt%2bo%3d&risl=&pid=ImgRaw&r=0');
}
.card:nth-child(4)::before {
    background-image: url('https://th.bing.com/th/id/OIP.84pIQyTazg2Zfp5uqV7HZQHaLb?rs=1&pid=ImgDetMain');
}
.card:nth-child(5)::before {
    background-image: url('https://th.bing.com/th/id/R.930eb7155bd0f2b7add6c1448b52ee3f?rik=%2f728LwwtUFFQvA&pid=ImgRaw&r=0');
}
.card:nth-child(6)::before {
    background-image: url('https://th.bing.com/th/id/OIP.3Z3yq98niho1l6Bekmdk5wHaJY?rs=1&pid=ImgDetMain');
}
.card:nth-child(7)::before {
    background-image: url('https://th.bing.com/th/id/OIP.IAKuejFPyMTqgNc3N4AaQQHaKO?rs=1&pid=ImgDetMain');
}


.card:nth-child(8)::before {
    background-image: url('https://th.bing.com/th/id/R.28db022943d1a74e09d7ec84dc950e08?rik=S9NndD6W%2fbNuiA&riu=http%3a%2f%2fi1.sinaimg.cn%2fjc%2f2015-11-26%2fU12794P27T1D844940F3DT20151126121301.jpg&ehk=HlfaD2iQB2ndex5XUoJjX2mu2y2sIBdwyjviIM7g0uE%3d&risl=&pid=ImgRaw&r=0');
}
.card:nth-child(9)::before {
    background-image: url('https://th.bing.com/th/id/OIP.3-OcfWSpvxrD16PfOr6YEQHaFE?rs=1&pid=ImgDetMain');
}
.card:nth-child(10)::before {
    background-image: url('https://th.bing.com/th/id/R.9bf1d9819de1ddcc1fbc5656982a6879?rik=iGQkaFUtPQqA%2fw&pid=ImgRaw&r=0');
}
.card:nth-child(11)::before {
    background-image: url('https://th.bing.com/th/id/OIP.ey52sgOXJ1whoGzXlyE_JgHaKY?rs=1&pid=ImgDetMain');
}
.card:nth-child(12)::before {
    background-image: url('https://th.bing.com/th/id/OIP.FZ-egX4_zDHslApU825ttwAAAA?rs=1&pid=ImgDetMain');
}

.card::after {
  content: "";
    display: block;
    width: 100%;
    height: 200%;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.8) 100%);
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(0);
    transition: transform 1.4s cubic-bezier(0.19,1,0.22,1);
}
.card .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
    padding: 16px 8px;
    transform: translateY(70%);
    transition: transform 0.7s cubic-bezier(0.19,1,0.22,1);
}
.card h2 {
    font-size: 20px; 
    font-weight: bold;
    width: calc(100% - 20px);
    text-align: center;
    overflow-wrap: break-word; 
    margin: 10px 0; 
    padding: 0 10px; 
}
.card p {
    font-size: 15px;
    letter-spacing: 2px;
    width: 80%;
    line-height: 30px;
    margin-top: 25px;
    text-align: justify;
}
.card .button {
    display: inline-block;
    cursor: pointer;
    border: none;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 12px 24px;
    font-size: 12px;
    font-weight: bold;
    margin-top: 25px;
    text-decoration: none;
    text-align: center;
}
.card .button:hover {
    background-color: #000;
}
.card .content *:not(h2) {
    opacity: 0;
    transform: translateY(20px);
    transition: transform 0.7s cubic-bezier(0.19,1,0.22,1), opacity 0.7s cubic-bezier(0.19,1,0.22,1);
}
.card:hover {
    align-items: center;
}
.card:hover::before {
    transform: translateY(-5%);
}
.card:hover::after {
    transform: translateY(-50%);
}
.card:hover .content {
    transform: translateY(0);
}
.card:hover .content *:not(h2) {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.1s;
}
</style>