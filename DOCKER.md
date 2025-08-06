# 🐳 Docker 部署指南

本项目支持完整的 Docker 容器化部署，包括前端、后端和反向代理服务。

## 📋 前置要求

- Docker Engine 20.10+
- Docker Compose 2.0+
- 至少 2GB 可用内存
- 至少 1GB 可用磁盘空间

## 🚀 快速开始

### 1. 克隆项目
```bash
git clone <your-repo-url>
cd fullstack-blog-project
```

### 2. 构建并启动服务
```bash
# 构建并启动所有服务
docker-compose up -d

# 查看服务状态
docker-compose ps

# 查看日志
docker-compose logs -f
```

### 3. 访问应用
- 前端应用: http://localhost:80
- 后端API: http://localhost:3000
- 健康检查: http://localhost:3000/health

## 🔧 服务配置

### 后端服务 (blog-backend)
- **端口**: 3000
- **健康检查**: `/health` 端点
- **环境变量**:
  - `NODE_ENV=production`
  - `PORT=3000`

### 前端服务 (blog-frontend)
- **端口**: 80
- **Nginx配置**: 支持SPA路由和API代理
- **静态文件缓存**: 1年
- **Gzip压缩**: 已启用

### 网络配置
- **网络名称**: blog-network
- **驱动**: bridge
- **服务间通信**: 通过容器名称

## 📊 监控和健康检查

### 健康检查状态
```bash
# 检查所有服务健康状态
docker-compose ps

# 查看特定服务健康状态
docker inspect blog-backend --format='{{.State.Health.Status}}'
docker inspect blog-frontend --format='{{.State.Health.Status}}'
```

### 日志监控
```bash
# 查看所有服务日志
docker-compose logs

# 查看特定服务日志
docker-compose logs backend
docker-compose logs frontend

# 实时跟踪日志
docker-compose logs -f --tail=100
```

## 🛠️ 开发环境

### 开发模式启动
```bash
# 使用开发配置启动
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```

### 代码热重载
```bash
# 挂载本地代码目录（需要额外配置）
docker-compose up -d --build
```

## 🏭 生产环境

### 生产模式部署
```bash
# 启动生产环境（包含Nginx反向代理）
docker-compose --profile production up -d

# 访问地址
# - 应用入口: http://localhost:8080
# - 直接前端: http://localhost:80
# - 直接后端: http://localhost:3000
```

### 环境变量配置
创建 `.env` 文件：
```env
# 后端配置
NODE_ENV=production
PORT=3000

# 数据库配置（如果使用）
# DB_HOST=localhost
# DB_PORT=5432
# DB_NAME=blog
# DB_USER=blog_user
# DB_PASS=blog_password

# 安全配置
# JWT_SECRET=your-jwt-secret
# SESSION_SECRET=your-session-secret
```

## 🔄 常用命令

### 服务管理
```bash
# 启动服务
docker-compose up -d

# 停止服务
docker-compose down

# 重启服务
docker-compose restart

# 重新构建并启动
docker-compose up -d --build

# 停止并删除所有容器、网络
docker-compose down --volumes --remove-orphans
```

### 镜像管理
```bash
# 构建镜像
docker-compose build

# 拉取最新镜像
docker-compose pull

# 查看镜像
docker images | grep blog

# 清理未使用的镜像
docker image prune -f
```

### 容器管理
```bash
# 进入后端容器
docker-compose exec backend sh

# 进入前端容器
docker-compose exec frontend sh

# 查看容器资源使用
docker stats blog-backend blog-frontend
```

## 🐛 故障排除

### 常见问题

**1. 端口冲突**
```bash
# 检查端口占用
lsof -i :80
lsof -i :3000

# 修改docker-compose.yml中的端口映射
ports:
  - "8080:80"  # 前端
  - "3001:3000"  # 后端
```

**2. 健康检查失败**
```bash
# 查看健康检查日志
docker-compose logs backend | grep health

# 手动测试健康检查
curl http://localhost:3000/health
```

**3. 前端无法访问后端API**
```bash
# 检查网络连接
docker-compose exec frontend ping backend

# 检查Nginx配置
docker-compose exec frontend cat /etc/nginx/conf.d/default.conf
```

**4. 容器启动失败**
```bash
# 查看详细错误信息
docker-compose logs --details

# 检查容器状态
docker-compose ps -a

# 重新构建镜像
docker-compose build --no-cache
```

### 性能优化

**1. 镜像大小优化**
- 使用多阶段构建
- 清理不必要的文件
- 使用 `.dockerignore`

**2. 启动时间优化**
- 预热镜像缓存
- 优化依赖安装
- 使用健康检查

**3. 资源限制**
```yaml
services:
  backend:
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
        reservations:
          cpus: '0.25'
          memory: 256M
```

## 📚 更多资源

- [Docker官方文档](https://docs.docker.com/)
- [Docker Compose文档](https://docs.docker.com/compose/)
- [Nginx配置指南](https://nginx.org/en/docs/)
- [Node.js Docker最佳实践](https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md)

## 🤝 贡献

如果您发现任何问题或有改进建议，请提交 Issue 或 Pull Request。

---

🎉 现在您的博客项目已经完全支持 Docker 部署了！