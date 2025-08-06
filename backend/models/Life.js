// 生活记录数据模型
let lifeData = [
  {
    id: 1,
    title: "春日里的小确幸",
    content: "今天在公园里看到了第一朵樱花开放，粉嫩的花瓣在阳光下显得格外美丽。买了一杯热咖啡，坐在长椅上享受这难得的宁静时光。",
    mood: "开心",
    weather: "晴朗",
    location: "中央公园",
    tags: ["樱花", "咖啡", "春天"],
    date: "2024-03-15",
    photos: ["cherry_blossom.jpg"],
    rating: 5
  },
  {
    id: 2,
    title: "深夜思考人生",
    content: "凌晨两点，突然想起很多往事。人生就像一场旅行，有时候需要停下来思考一下方向。决定明天开始学习一门新技能。",
    mood: "思考",
    weather: "多云",
    location: "家中",
    tags: ["思考", "人生", "深夜"],
    date: "2024-03-10",
    photos: [],
    rating: 3
  },
  {
    id: 3,
    title: "和朋友的聚餐",
    content: "好久没有和大学同学聚在一起了，今天大家聊了很多，从工作到生活，从梦想到现实。友情真的很珍贵。",
    mood: "快乐",
    weather: "晴朗",
    location: "海底捞火锅店",
    tags: ["朋友", "聚餐", "友情"],
    date: "2024-03-08",
    photos: ["dinner_with_friends.jpg"],
    rating: 5
  },
  {
    id: 4,
    title: "雨天的慵懒时光",
    content: "下了一整天的雨，窝在家里看书、听音乐。有时候这样的慢节奏生活也很不错，让心灵得到放松。",
    mood: "平静",
    weather: "雨天",
    location: "家中",
    tags: ["读书", "音乐", "雨天"],
    date: "2024-03-05",
    photos: [],
    rating: 4
  },
  {
    id: 5,
    title: "周末的户外徒步",
    content: "和家人一起去山里徒步，呼吸新鲜空气，欣赏大自然的美景。运动后的疲惫感让人很有成就感。",
    mood: "充实",
    weather: "晴朗",
    location: "香山",
    tags: ["徒步", "家人", "自然"],
    date: "2024-03-02",
    photos: ["hiking_mountain.jpg"],
    rating: 5
  }
];

let nextId = 6;

class Life {
  // 获取所有生活记录
  static getAll() {
    return lifeData;
  }

  // 根据心情获取生活记录
  static getByMood(mood) {
    return lifeData.filter(item => item.mood === mood);
  }

  // 根据ID获取单个生活记录
  static getById(id) {
    return lifeData.find(item => item.id === id);
  }

  // 创建新的生活记录
  static create(data) {
    const newRecord = {
      id: nextId++,
      title: data.title,
      content: data.content,
      mood: data.mood,
      weather: data.weather,
      location: data.location,
      tags: data.tags || [],
      date: data.date || new Date().toISOString().split('T')[0],
      photos: data.photos || [],
      rating: data.rating || 3
    };
    lifeData.push(newRecord);
    return newRecord;
  }

  // 更新生活记录
  static update(id, data) {
    const index = lifeData.findIndex(item => item.id === id);
    if (index === -1) return null;
    
    lifeData[index] = {
      ...lifeData[index],
      ...data,
      id // 确保ID不被修改
    };
    return lifeData[index];
  }

  // 删除生活记录
  static delete(id) {
    const index = lifeData.findIndex(item => item.id === id);
    if (index === -1) return false;
    
    lifeData.splice(index, 1);
    return true;
  }
}

module.exports = Life;