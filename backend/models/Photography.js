// 摄影作品数据模型
let photographyData = [
  {
    id: 1,
    title: "山间晨雾",
    category: "风景",
    description: "清晨时分，山间弥漫着薄雾，阳光透过云层洒向大地，形成了这幅如诗如画的景象。",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    camera: "Canon EOS R5",
    lens: "RF 24-70mm f/2.8L IS USM",
    settings: {
      aperture: "f/8",
      shutter: "1/125s",
      iso: 200,
      focalLength: "35mm"
    },
    location: "黄山",
    date: "2024-02-15",
    tags: ["风景", "晨雾", "山景"]
  },
  {
    id: 2,
    title: "城市夜景",
    category: "城市",
    description: "夜幕降临，城市的霓虹灯开始闪烁，高楼大厦在夜色中显得格外壮观。",
    imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800",
    camera: "Sony A7R IV",
    lens: "FE 16-35mm f/2.8 GM",
    settings: {
      aperture: "f/11",
      shutter: "30s",
      iso: 100,
      focalLength: "24mm"
    },
    location: "上海外滩",
    date: "2024-02-10",
    tags: ["城市", "夜景", "霓虹"]
  },
  {
    id: 3,
    title: "海边日落",
    category: "风景",
    description: "夕阳西下，海面波光粼粼，远山如黛，这是大自然最美的调色板。",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    camera: "Nikon D850",
    lens: "AF-S NIKKOR 70-200mm f/2.8E FL ED VR",
    settings: {
      aperture: "f/5.6",
      shutter: "1/250s",
      iso: 400,
      focalLength: "135mm"
    },
    location: "三亚海滩",
    date: "2024-02-05",
    tags: ["海景", "日落", "风景"]
  },
  {
    id: 4,
    title: "街头瞬间",
    category: "街拍",
    description: "捕捉城市生活中的精彩瞬间，每个人都有自己的故事。",
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800",
    camera: "Fujifilm X-T4",
    lens: "XF 35mm f/1.4 R",
    settings: {
      aperture: "f/2.8",
      shutter: "1/500s",
      iso: 800,
      focalLength: "35mm"
    },
    location: "北京三里屯",
    date: "2024-01-28",
    tags: ["街拍", "人文", "城市"]
  },
  {
    id: 5,
    title: "花朵特写",
    category: "微距",
    description: "春天的花朵，细腻的纹理和鲜艳的色彩展现了生命的美好。",
    imageUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800",
    camera: "Canon EOS R6",
    lens: "RF 100mm f/2.8L Macro IS USM",
    settings: {
      aperture: "f/4",
      shutter: "1/200s",
      iso: 200,
      focalLength: "100mm"
    },
    location: "植物园",
    date: "2024-01-20",
    tags: ["微距", "花卉", "春天"]
  },
  {
    id: 6,
    title: "星空银河",
    category: "天文",
    description: "远离城市的光污染，在山顶拍摄到的璀璨银河，让人感受到宇宙的浩瀚。",
    imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800",
    camera: "Sony A7S III",
    lens: "FE 14mm f/1.8 GM",
    settings: {
      aperture: "f/2.8",
      shutter: "25s",
      iso: 3200,
      focalLength: "14mm"
    },
    location: "青海湖",
    date: "2024-01-15",
    tags: ["星空", "银河", "天文"]
  }
];

let nextId = 7;

class Photography {
  // 获取所有摄影作品
  static getAll() {
    return photographyData;
  }

  // 根据类别获取摄影作品
  static getByCategory(category) {
    return photographyData.filter(item => item.category === category);
  }

  // 根据ID获取单个摄影作品
  static getById(id) {
    return photographyData.find(item => item.id === id);
  }

  // 创建新的摄影作品
  static create(data) {
    const newRecord = {
      id: nextId++,
      title: data.title,
      category: data.category,
      description: data.description,
      imageUrl: data.imageUrl,
      camera: data.camera,
      lens: data.lens,
      settings: data.settings || {},
      location: data.location,
      date: data.date || new Date().toISOString().split('T')[0],
      tags: data.tags || []
    };
    photographyData.push(newRecord);
    return newRecord;
  }

  // 更新摄影作品
  static update(id, data) {
    const index = photographyData.findIndex(item => item.id === id);
    if (index === -1) return null;
    
    photographyData[index] = {
      ...photographyData[index],
      ...data,
      id // 确保ID不被修改
    };
    return photographyData[index];
  }

  // 删除摄影作品
  static delete(id) {
    const index = photographyData.findIndex(item => item.id === id);
    if (index === -1) return false;
    
    photographyData.splice(index, 1);
    return true;
  }
}

module.exports = Photography;