// 健身记录数据模型
let fitnessData = [
  {
    id: 1,
    title: "胸部训练日",
    type: "力量训练",
    duration: 90,
    exercises: [
      { name: "卧推", sets: 4, reps: 8, weight: 80 },
      { name: "哑铃飞鸟", sets: 3, reps: 12, weight: 25 },
      { name: "双杠臂屈伸", sets: 3, reps: 10, weight: 0 }
    ],
    calories: 350,
    date: "2024-01-15",
    notes: "今天状态不错，重量有所提升"
  },
  {
    id: 2,
    title: "晨跑训练",
    type: "有氧运动",
    duration: 45,
    distance: 6.5,
    pace: "6:55",
    heartRate: {
      avg: 145,
      max: 165
    },
    calories: 420,
    date: "2024-01-16",
    notes: "天气很好，跑步感觉轻松"
  },
  {
    id: 3,
    title: "背部训练日",
    type: "力量训练",
    duration: 85,
    exercises: [
      { name: "引体向上", sets: 4, reps: 6, weight: 0 },
      { name: "杠铃划船", sets: 4, reps: 8, weight: 70 },
      { name: "坐姿下拉", sets: 3, reps: 10, weight: 60 }
    ],
    calories: 320,
    date: "2024-01-18",
    notes: "引体向上有进步，能做更多个了"
  },
  {
    id: 4,
    title: "HIIT训练",
    type: "有氧运动",
    duration: 30,
    exercises: [
      { name: "波比跳", duration: 30, rest: 10 },
      { name: "高抬腿", duration: 30, rest: 10 },
      { name: "俯卧撑", duration: 30, rest: 10 }
    ],
    calories: 280,
    date: "2024-01-20",
    notes: "高强度训练，出了很多汗"
  }
];

let nextId = 5;

class Fitness {
  // 获取所有健身记录
  static getAll() {
    return fitnessData;
  }

  // 根据类型获取健身记录
  static getByType(type) {
    return fitnessData.filter(item => item.type === type);
  }

  // 根据ID获取单个健身记录
  static getById(id) {
    return fitnessData.find(item => item.id === id);
  }

  // 创建新的健身记录
  static create(data) {
    const newRecord = {
      id: nextId++,
      title: data.title,
      type: data.type,
      duration: data.duration,
      exercises: data.exercises || [],
      distance: data.distance,
      pace: data.pace,
      heartRate: data.heartRate,
      calories: data.calories || 0,
      date: data.date || new Date().toISOString().split('T')[0],
      notes: data.notes || ''
    };
    fitnessData.push(newRecord);
    return newRecord;
  }

  // 更新健身记录
  static update(id, data) {
    const index = fitnessData.findIndex(item => item.id === id);
    if (index === -1) return null;
    
    fitnessData[index] = {
      ...fitnessData[index],
      ...data,
      id // 确保ID不被修改
    };
    return fitnessData[index];
  }

  // 删除健身记录
  static delete(id) {
    const index = fitnessData.findIndex(item => item.id === id);
    if (index === -1) return false;
    
    fitnessData.splice(index, 1);
    return true;
  }
}

module.exports = Fitness;