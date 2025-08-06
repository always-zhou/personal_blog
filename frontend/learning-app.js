class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">出现了一些问题</h1>
            <button onClick={() => window.location.reload()} className="px-6 py-2 bg-blue-600 text-white rounded-lg">
              重新加载
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function LearningApp() {
  try {
    const [selectedCategory, setSelectedCategory] = React.useState('all');
    const [learningPosts, setLearningPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [categories, setCategories] = React.useState(['all']);

    // 从后端API获取学习记录
    React.useEffect(() => {
      const fetchLearningPosts = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/learning');
          const data = await response.json();
          setLearningPosts(data);
          
          // 提取所有分类
          const allCategories = ['all', ...new Set(data.map(post => post.category))];
          setCategories(allCategories);
        } catch (error) {
          console.error('获取学习记录失败:', error);
          setLearningPosts([]);
        } finally {
          setLoading(false);
        }
      };
      
      fetchLearningPosts();
    }, []);

    const filteredPosts = selectedCategory === 'all' 
      ? learningPosts 
      : learningPosts.filter(post => post.category === selectedCategory);

    return (
      <div className="min-h-screen gradient-shift relative" data-name="learning-app" data-file="learning-app.js">
        <div className="relative z-10">
          <Header />
          
          <main className="pt-32 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-white mb-6">学习记录</h1>
                <p className="text-xl text-white/80">技术探索 · 知识积累 · 持续成长</p>
              </div>

              {/* Category Filter */}
              <div className="flex justify-center mb-12">
                <div className="bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-white text-blue-600'
                          : 'text-white hover:bg-white/10'
                      }`}
                    >
                      {category === 'all' ? '全部' : category}
                    </button>
                  ))}
                </div>
              </div>

              {/* 管理链接 */}
              <div className="text-center mb-8">
                <a href="admin.html" className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <i className="lucide-settings w-4 h-4 mr-2"></i>
                  管理学习记录
                </a>
              </div>

              {/* Loading State */}
              {loading ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                  <p className="mt-4 text-white/80">加载中...</p>
                </div>
              ) : (
                <>
                  {/* Posts Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.length === 0 ? (
                      <div className="col-span-full text-center py-12">
                        <p className="text-white/80 text-lg mb-4">暂无学习记录</p>
                        <a href="admin.html" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          <i className="lucide-plus w-4 h-4 mr-2"></i>
                          添加第一篇学习记录
                        </a>
                      </div>
                    ) : (
                      filteredPosts.map(post => (
                        <article key={post.id} className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                          <div className="flex items-center justify-between mb-4">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm font-medium">
                              {post.category}
                            </span>
                            <span className="text-white/60 text-sm">{post.date}</span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                            {post.title}
                          </h3>
                          
                          <p className="text-white/70 mb-4 leading-relaxed">
                            {post.content ? post.content.substring(0, 150) + '...' : '暂无内容'}
                          </p>
                          
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.tags.map((tag, index) => (
                                <span key={index} className="px-2 py-1 bg-white/10 text-white/80 rounded text-xs">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          <div className="flex items-center justify-between">
                            <span className="text-white/60 text-sm">{post.date}</span>
                            <button className="flex items-center text-blue-300 hover:text-white transition-colors">
                              <span className="mr-2">查看详情</span>
                              <i className="lucide-arrow-right w-4 h-4"></i>
                            </button>
                          </div>
                        </article>
                      ))
                    )}
                  </div>
                </>
              )}
            </div>
          </main>
          
          <Footer />
        </div>
      </div>
    );
  } catch (error) {
    console.error('LearningApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <LearningApp />
  </ErrorBoundary>
);