// 错误边界组件
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-2xl font-bold mb-4">出现了一些问题</h2>
            <p className="text-gray-400">页面加载失败，请刷新重试</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              刷新页面
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// 主应用组件
function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  
  // 页面分类数据
  const categories = [
    {
      title: '学习记录',
      description: '技术学习、读书笔记、知识总结',
      icon: '📚',
      gradient: 'from-blue-500 to-cyan-500',
      href: 'learning.html'
    },
    {
      title: '健身日志',
      description: '运动记录、健身心得、身体管理',
      icon: '💪',
      gradient: 'from-green-500 to-emerald-500',
      href: 'fitness.html'
    },
    {
      title: '生活分享',
      description: '日常感悟、生活点滴、心情随笔',
      icon: '🌟',
      gradient: 'from-purple-500 to-pink-500',
      href: 'life.html'
    },
    {
      title: '摄影作品',
      description: '光影记录、美好瞬间、视觉艺术',
      icon: '📸',
      gradient: 'from-orange-500 to-red-500',
      href: 'photography.html'
    }
  ];

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* 背景效果 */}
        <div className="cyber-grid"></div>
        <canvas className="matrix-rain"></canvas>
        <canvas className="particle-galaxy"></canvas>
        
        {/* 主要内容 */}
        <div className="relative z-10">
          <Header />
          <Hero />
          
          {/* 分类卡片区域 */}
          <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  探索我的世界
                </h2>
                <p className="text-white/70 text-lg max-w-2xl mx-auto">
                  在这里，我分享我的学习心得、健身历程、生活感悟和摄影作品
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map((category, index) => (
                  <CategoryCard
                    key={index}
                    title={category.title}
                    description={category.description}
                    icon={category.icon}
                    gradient={category.gradient}
                    href={category.href}
                  />
                ))}
              </div>
            </div>
          </section>
          
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  );
}

// 渲染应用
ReactDOM.render(<App />, document.getElementById('root'));