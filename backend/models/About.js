// 关于页面数据模型
let aboutData = {
  personalInfo: {
    name: "张三",
    title: "全栈开发工程师",
    email: "zhangsan@example.com",
    phone: "+86 138-0000-0000",
    location: "北京，中国",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    bio: "我是一名充满热情的全栈开发工程师，专注于现代Web技术和用户体验设计。我喜欢学习新技术，分享知识，并通过代码创造有价值的产品。",
    introduction: "欢迎来到我的个人博客！这里记录了我的学习历程、健身日常、生活感悟和摄影作品。我相信技术可以改变世界，生活需要用心感受。希望通过这个平台，能够与更多志同道合的朋友交流分享。",
    goals: [
      "成为一名优秀的全栈工程师",
      "保持健康的生活方式",
      "记录生活中的美好瞬间",
      "持续学习和成长"
    ],
    interests: [
      "编程开发",
      "健身运动",
      "摄影艺术",
      "阅读思考",
      "旅行探索"
    ]
  },
  skills: {
    technical: [
      { name: "JavaScript", level: 90, category: "前端" },
      { name: "TypeScript", level: 85, category: "前端" },
      { name: "React", level: 88, category: "前端" },
      { name: "Vue.js", level: 80, category: "前端" },
      { name: "Node.js", level: 85, category: "后端" },
      { name: "Express", level: 82, category: "后端" },
      { name: "MongoDB", level: 75, category: "数据库" },
      { name: "MySQL", level: 78, category: "数据库" },
      { name: "Docker", level: 70, category: "DevOps" },
      { name: "Git", level: 85, category: "工具" }
    ],
    soft: [
      { name: "团队协作", level: 90 },
      { name: "问题解决", level: 88 },
      { name: "学习能力", level: 92 },
      { name: "沟通表达", level: 85 },
      { name: "项目管理", level: 80 }
    ]
  },
  experience: [
    {
      company: "科技有限公司",
      position: "高级前端工程师",
      duration: "2022.03 - 至今",
      description: "负责公司核心产品的前端开发，参与架构设计和技术选型，带领团队完成多个重要项目。"
    },
    {
      company: "互联网公司",
      position: "前端工程师",
      duration: "2020.06 - 2022.02",
      description: "参与多个Web应用的开发，积累了丰富的前端开发经验，熟练掌握现代前端技术栈。"
    }
  ],
  education: [
    {
      school: "某某大学",
      degree: "计算机科学与技术 学士",
      duration: "2016.09 - 2020.06",
      description: "主修计算机科学与技术，掌握了扎实的计算机基础知识和编程技能。"
    }
  ],
  contact: {
    email: "zhangsan@example.com",
    github: "https://github.com/zhangsan",
    linkedin: "https://linkedin.com/in/zhangsan",
    blog: "https://zhangsan.blog",
    wechat: "zhangsan_dev"
  }
};

class About {
  // 获取个人信息
  static getInfo() {
    return aboutData;
  }

  // 更新个人信息
  static updateInfo(data) {
    aboutData = {
      ...aboutData,
      ...data
    };
    return aboutData;
  }

  // 获取技能列表
  static getSkills() {
    return aboutData.skills;
  }

  // 更新技能列表
  static updateSkills(skills) {
    aboutData.skills = skills;
    return aboutData.skills;
  }

  // 获取工作经验
  static getExperience() {
    return aboutData.experience;
  }

  // 获取教育背景
  static getEducation() {
    return aboutData.education;
  }

  // 获取联系方式
  static getContact() {
    return aboutData.contact;
  }
}

module.exports = About;