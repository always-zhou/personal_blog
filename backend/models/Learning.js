// 学习记录数据模型
let learningData = [
  {
    id: 1,
    title: "计算机系统底层原理",
    category: "技术",
    description: "深入学习计算机系统的底层原理，包括CPU架构、内存管理、操作系统内核等核心概念。",
    tags: ["系统编程", "底层原理", "操作系统"],
    date: "2024-01-15",
    progress: 75,
    notes: "重点学习了虚拟内存和进程调度机制"
  },
  {
    id: 2,
    title: "TypeScript 高级类型系统",
    category: "技术",
    description: "掌握TypeScript的高级类型特性，提升代码的类型安全性和开发效率。",
    tags: ["TypeScript", "类型系统", "前端开发"],
    date: "2024-01-20",
    progress: 90,
    notes: "学习了条件类型、映射类型和模板字面量类型"
  },
  {
    id: 3,
    title: "《代码整洁之道》",
    category: "读书",
    description: "学习如何编写清晰、可维护的代码，提升软件开发的质量和效率。",
    tags: ["代码质量", "软件工程", "最佳实践"],
    date: "2024-01-10",
    progress: 60,
    notes: "重点关注函数设计和命名规范"
  },
  {
    id: 4,
    title: "React 性能优化实践",
    category: "技术",
    description: "深入研究React应用的性能优化策略，包括组件优化、状态管理和渲染优化。",
    tags: ["React", "性能优化", "前端"],
    date: "2024-01-25",
    progress: 45,
    notes: "学习了useMemo、useCallback和React.memo的使用"
  }
];

let nextId = 5;

class Learning {
  // 获取所有学习记录
  static getAll() {
    return learningData;
  }

  // 根据分类获取学习记录
  static getByCategory(category) {
    return learningData.filter(item => item.category === category);
  }

  // 根据ID获取单个学习记录
  static getById(id) {
    return learningData.find(item => item.id === id);
  }

  // 创建新的学习记录
  static create(data) {
    const newRecord = {
      id: nextId++,
      title: data.title,
      category: data.category,
      description: data.description,
      tags: data.tags || [],
      date: data.date || new Date().toISOString().split('T')[0],
      progress: data.progress || 0,
      notes: data.notes || ''
    };
    learningData.push(newRecord);
    return newRecord;
  }

  // 更新学习记录
  static update(id, data) {
    const index = learningData.findIndex(item => item.id === id);
    if (index === -1) return null;
    
    learningData[index] = {
      ...learningData[index],
      ...data,
      id // 确保ID不被修改
    };
    return learningData[index];
  }

  // 删除学习记录
  static delete(id) {
    const index = learningData.findIndex(item => item.id === id);
    if (index === -1) return false;
    
    learningData.splice(index, 1);
    return true;
  }
}

module.exports = Learning;