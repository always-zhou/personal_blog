const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(helmet());
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 健康检查端点
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: '服务器运行正常' });
});

// 测试路由
app.get('/api/test', (req, res) => {
  res.json({ message: '后端API测试成功' });
});

// 路由
try {
  const learningRoutes = require('./routes/learning');
  const fitnessRoutes = require('./routes/fitness');
  const lifeRoutes = require('./routes/life');
  const photographyRoutes = require('./routes/photography');
  const aboutRoutes = require('./routes/about');

  app.use('/api/learning', learningRoutes);
  app.use('/api/fitness', fitnessRoutes);
  app.use('/api/life', lifeRoutes);
  app.use('/api/photography', photographyRoutes);
  app.use('/api/about', aboutRoutes);
} catch (error) {
  console.error('路由加载错误:', error.message);
}

// 静态文件服务
app.use(express.static(path.join(__dirname, '../frontend')));

// 处理前端路由，返回index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// 404 处理 - 只对API路由返回JSON错误
app.use('/api', (req, res) => {
  res.status(404).json({ error: '接口不存在' });
});

// 对于其他路径，返回index.html（支持前端路由）
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: '服务器内部错误' });
});

app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
});

module.exports = app;