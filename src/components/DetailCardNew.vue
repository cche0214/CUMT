<template>
  <!-- 卡片容器 -->
<div class="card-list">
    <!-- 卡片 -->
    <div class="card" v-for="card in cardListNew" :key="card.id">
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
    cardListNew: [
  {
    "temple": 0,
    "id": 1,
    "title": "参观九一八博物馆：铭记历史，奋发图强",
    "summary": "参观九一八历史博物馆，深入了解抗战历史，感悟民族精神，呼吁铭记国耻，珍惜和平，努力奋斗。"
  },
  {
    "temple": 0,
    "id": 2,
    "title": "参观中共三大纪念馆，传承历史文化责任",
    "summary": "参观中共三大纪念馆，深刻体会中国共产党早期革命历程，结合现代技术，传承历史文化，增强责任意识。"
  },
  {
    "temple": 0,
    "id": 3,
    "title": "走进八一起义纪念馆，传承革命精神",
    "summary": "参观八一起义纪念馆，深刻感悟革命先辈的英勇事迹，传承革命精神，为实现中华民族复兴而奋斗。"
  },
  {
    "temple": 0,
    "id": 4,
    "title": "重温西安事变，传承爱国精神",
    "summary": "实践团参观西安事变纪念馆，回顾历史，感悟张学良等爱国志士的无私奉献，呼吁青年铭记历史，奋发图强。"
  },
  {
    "temple": 0,
    "id": 5,
    "title": "参观杨虎城别墅，重温西安事变历史",
    "summary": "参观杨虎城将军故居，了解西安事变历史背景，感悟革命精神，激发珍惜和平、传承历史的责任感。"
  },
  {
    "temple": 0,
    "id": 6,
    "title": "走进朱德故里，传承革命精神与红色文化",
    "summary": "通过参观朱德故里，深入了解朱德同志的革命精神，感悟红色文化的深远影响，激发责任感与使命感，奋勇前行。"
  },
  {
    "temple": 0,
    "id": 7,
    "title": "瞻仰成县烈士陵园，缅怀先烈传承红色精神",
    "summary": "通过瞻仰成县革命烈士陵园，重温革命先烈的英勇事迹，感悟伟大精神，激励青年为民族复兴不懈奋斗。"
  },
  {
    "temple": 0,
    "id": 8,
    "title": "重温八路军驻甘办事处历史，感悟革命精神",
    "summary": "通过参观兰州八路军办事处纪念馆，深入了解抗战时期办事处的重要贡献，缅怀革命先烈的无畏精神。"
  },
  {
    "temple": 0,
    "id": 9,
    "title": "探访坞根与茅畲红色遗址，传承革命精神",
    "summary": "实践团深入坞根镇与茅畲乡红色遗址，重温革命历史，感悟革命精神，激励青年传承红色文化，奋斗不息。"
  },
  {
    "temple": 0,
    "id": 10,
    "title": "参观淮海战役纪念馆，缅怀先烈传承革命精神",
    "summary": "通过参观淮海战役纪念馆和纪念塔，实践团成员深刻感悟革命精神，增强历史责任感，坚定奋斗信念。"
  },
  {
    "temple": 0,
    "id": 11,
    "title": "走进枣园革命旧址，传承延安精神",
    "summary": "实践组参观枣园革命旧址，深刻领悟延安精神，坚定理想信念，立志为中华民族伟大复兴贡献力量。"
  },
  {
    "temple": 0,
    "id": 12,
    "title": "采访抗美援朝老兵，传承伟大爱国精神",
    "summary": "实践团采访抗美援朝老兵胡成玉，感悟先辈的无畏精神与爱国情怀，激励青年为实现民族复兴不懈奋斗。"
  },


  {
    "temple": 0,
    "id": 13,
    "title": "探访会宁红军长征纪念馆，传承长征精神",
    "summary": "团队成员参观会宁红军长征纪念馆，深入了解长征历史，感悟红色精神，坚定报国信念，为民族复兴贡献力量。"
  },
  {
    "temple": 0,
    "id": 14,
    "title": "台儿庄战役纪念馆参观，铭记抗战胜利精神",
    "summary": "实践队员参观台儿庄大战纪念馆，深入了解台儿庄战役历史，感悟革命先辈伟大精神，坚定奋斗报国信念。"
  },
  {
    "temple": 0,
    "id": 15,
    "title": "参观济南战役纪念馆，感悟革命精神力量",
    "summary": "实践团成员深入参观济南战役纪念馆，了解战役背景与英雄事迹，体会革命先烈精神，增强历史责任感与使命感。"
  },
  {
    "temple": 0,
    "id": 16,
    "title": "走访毛泽东与第一师范纪念馆，感悟革命精神传承",
    "summary": "深入调研湖南第一师范与青年毛泽东的成长历程，传承爱国主义精神，激励新时代青年为祖国发展贡献力量。"
  },
  {
    "temple": 0,
    "id": 17,
    "title": "重温东北抗联精神，砥砺前行传承红色基因",
    "summary": "参观东北抗联纪念馆，深入了解英雄事迹，传承伟大东北抗联精神，坚定为国奋斗信念。"
  },
  {
    "temple": 0,
    "id": 18,
    "title": "渭华起义：革命火种点燃陕东大地",
    "summary": "革命先烈的英勇牺牲为后续的革命斗争奠定了坚实基础，起义虽遭镇压，但其精神激励着后人不断前行。"
  },
  {
    "temple": 0,
    "id": 19,
    "title": "新中国从这里走来，传承“两个务必”精神",
    "summary": "参观西柏坡纪念馆，学习“两个务必”精神，感悟中国革命从农村走向全国的伟大历程，坚定新时代奋斗方向。"
  },
  {
    "temple": 0,
    "id": 20,
    "title": "实地探访淮海战役纪念馆，传承革命精神",
    "summary": "参观淮海战役纪念馆，深刻体会红色精神的重要性，认识到历史文化传承与现代科技的结合方式。"
  },
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

/* 修改每一张卡片背景图 */
.card:nth-child(1)::before {
    background-image: url('../assets/images/九一八纪念馆封面.png');
}
.card:nth-child(2)::before {
    background-image: url('../assets/images/中共三大会址纪念馆封面.png');
}
.card:nth-child(3)::before {
    background-image: url('../assets/images/八一纪念馆封面.png');
}
.card:nth-child(4)::before {
    background-image: url('../assets/images/西安事变张学良纪念馆封面.png');
}
.card:nth-child(5)::before {
    background-image: url('../assets/images/杨虎城旧址封面.png');
}
.card:nth-child(6)::before {
    background-image: url('../assets/images/朱德故里封面.png');
}
.card:nth-child(7)::before {
    background-image: url('../assets/images/成县封面.png');
}
.card:nth-child(8)::before {
    background-image: url('../assets/images/兰州铁道馆封面.png');
}
.card:nth-child(9)::before {
    background-image: url('../assets/images/坞根镇与茅畲乡封面.png');
}
.card:nth-child(10)::before {
    background-image: url('../assets/images/淮海战役纪念馆封面.png');
}
.card:nth-child(11)::before {
    background-image: url('../assets/images/枣园封面.png');
}
.card:nth-child(12)::before {
    background-image: url('../assets/images/七里河西津桥封面.png');
}


.card:nth-child(13)::before {
    background-image: url('../assets/images/会宁红军纪念馆封面.png');
}
.card:nth-child(14)::before {
    background-image: url('../assets/images/台儿庄战役纪念馆封面.png');
}
.card:nth-child(15)::before {
    background-image: url('../assets/images/济南战役封面.png');
}
.card:nth-child(16)::before {
    background-image: url('../assets/images/第一师范纪念馆封面.png');
}
.card:nth-child(17)::before {
    background-image: url('../assets/images/东北抗联封面.png');
}
.card:nth-child(18)::before {
    background-image: url('../assets/images/渭华起义封面.png');
}
.card:nth-child(19)::before {
    background-image: url('../assets/images/品读西柏坡封面.png');
}
.card:nth-child(20)::before {
    background-image: url('../assets/images/C淮海封面.png');
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
    width: calc(100% - 1px);
    text-align: center;
    overflow-wrap: break-word; 
    
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