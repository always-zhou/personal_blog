# 个人博客后端API

这是一个基于Node.js和Express的个人博客后端API服务，为前端提供数据接口。

## 功能特性

- 🎓 **学习记录管理** - 技术学习和读书笔记的CRUD操作
- 💪 **健身记录管理** - 力量训练和有氧运动记录
- 🌟 **生活记录管理** - 日常生活感悟和心情记录
- 📸 **摄影作品管理** - 摄影作品展示和分类
- 👤 **个人信息管理** - 关于页面的个人信息和技能展示

## 技术栈

- **Node.js** - JavaScript运行环境
- **Express** - Web应用框架
- **CORS** - 跨域资源共享
- **Helmet** - 安全中间件
- **Morgan** - HTTP请求日志
- **Body-parser** - 请求体解析
- **Dotenv** - 环境变量管理

## 项目结构

```
backend/
├── server.js              # 主服务器文件
├── package.json           # 项目配置和依赖
├── .env                   # 环境变量配置
├── routes/                # 路由文件
│   ├── learning.js        # 学习记录路由
│   ├── fitness.js         # 健身记录路由
│   ├── life.js            # 生活记录路由
│   ├── photography.js     # 摄影作品路由
│   └── about.js           # 关于页面路由
├── controllers/           # 控制器文件
│   ├── learningController.js
│   ├── fitnessController.js
│   ├── lifeController.js
│   ├── photographyController.js
│   └── aboutController.js
└── models/                # 数据模型文件
    ├── Learning.js        # 学习记录模型
    ├── Fitness.js         # 健身记录模型
    ├── Life.js            # 生活记录模型
    ├── Photography.js     # 摄影作品模型
    └── About.js           # 关于页面模型
```

## API接口

### 学习记录 `/api/learning`
- `GET /` - 获取所有学习记录
- `GET /category/:category` - 根据分类获取学习记录
- `GET /:id` - 获取单个学习记录
- `POST /` - 创建新的学习记录
- `PUT /:id` - 更新学习记录
- `DELETE /:id` - 删除学习记录

### 健身记录 `/api/fitness`
- `GET /` - 获取所有健身记录
- `GET /type/:type` - 根据类型获取健身记录
- `GET /:id` - 获取单个健身记录
- `POST /` - 创建新的健身记录
- `PUT /:id` - 更新健身记录
- `DELETE /:id` - 删除健身记录

### 生活记录 `/api/life`
- `GET /` - 获取所有生活记录
- `GET /mood/:mood` - 根据心情获取生活记录
- `GET /:id` - 获取单个生活记录
- `POST /` - 创建新的生活记录
- `PUT /:id` - 更新生活记录
- `DELETE /:id` - 删除生活记录

### 摄影作品 `/api/photography`
- `GET /` - 获取所有摄影作品
- `GET /category/:category` - 根据类别获取摄影作品
- `GET /:id` - 获取单个摄影作品
- `POST /` - 创建新的摄影作品
- `PUT /:id` - 更新摄影作品
- `DELETE /:id` - 删除摄影作品

### 关于页面 `/api/about`
- `GET /` - 获取个人信息
- `PUT /` - 更新个人信息
- `GET /skills` - 获取技能列表
- `PUT /skills` - 更新技能列表

### 健康检查
- `GET /health` - 服务器健康状态检查

## 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 启动生产服务器
```bash
npm start
```

服务器将在 `http://localhost:3000` 启动

## 环境配置

复制 `.env` 文件并根据需要修改配置：

```env
PORT=3000
NODE_ENV=development
```

## 数据存储

当前版本使用内存存储数据，重启服务器后数据会重置。后续可以集成数据库（如MongoDB或MySQL）进行持久化存储。

## 开发说明

- 所有API响应都采用统一的JSON格式
- 包含完整的错误处理机制
- 支持CORS跨域请求
- 使用Helmet增强安全性
- 集成请求日志记录

## 后续计划

- [ ] 集成数据库持久化存储
- [ ] 添加用户认证和授权
- [ ] 实现文件上传功能
- [ ] 添加数据验证中间件
- [ ] 集成单元测试
- [ ] 添加API文档（Swagger）

## 许可证

MIT License