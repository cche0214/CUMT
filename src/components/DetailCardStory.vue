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
    "title": "秋收起义：革命的开端",
    "summary": "1927年毛泽东领导的秋收起义，揭开了中国共产党武装斗争的序幕。"
  },
  {
    "temple": 1,
    "id": 2,
    "title": "红军长征：历史的壮举",
    "summary": "红军长征是中国革命的伟大转折点，谱写了壮丽的历史篇章。"
  },
  {
    "temple": 1,
    "id": 3,
    "title": "南昌起义：第一枪的响起",
    "summary": "1927年周恩来等领导的南昌起义，打响了武装反抗国民党反动派的第一枪。"
  },
  {
    "temple": 1,
    "id": 4,
    "title": "西安事变：国共合作的关键",
    "summary": "1936年张学良、杨虎城发动西安事变，迫使蒋介石停止内战，一致抗日。"
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
    "title": "淮海战役：决定性胜利",
    "summary": "解放战争中三大战役之一，中国人民解放军取得决定性胜利，解放华东。"
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
    "title": "抗美援朝：保家卫国的壮举",
    "summary": "中国人民志愿军抗美援朝，为保卫祖国、维护和平作出了巨大贡献。"
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
    background-image: url('../assets/images/CUMT-view1.jpg');
}
.card:nth-child(2)::before {
    background-image: url('../assets/images/CUMT-view2.jpg');
}
.card:nth-child(3)::before {
    background-image: url('../assets/images/CUMT-view3.jpg');
}
.card:nth-child(4)::before {
    background-image: url('../assets/images/CUMT-view4.jpg');
}
.card:nth-child(5)::before {
    background-image: url('../assets/images/CUMT-view1.jpg');
}
.card:nth-child(6)::before {
    background-image: url('../assets/images/CUMT-view3.jpg');
}
.card:nth-child(n+6)::before {
    background-image: url('../assets/images/CUMT-view1.jpg');
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