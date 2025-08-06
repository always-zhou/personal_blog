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
            <button onClick={() => window.location.reload()} className="px-6 py-2 bg-pink-600 text-white rounded-lg">
              重新加载
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function LifeApp() {
  try {
    const lifePosts = [
      {
        id: 1,
        title: "春日里的小确幸",
        date: "2024-01-15",
        mood: "开心",
        content: "今天和朋友一起去公园踏青，看到樱花盛开，心情格外美好。生活中的小确幸总是让人感到温暖。",
        tags: ["春天", "友情", "樱花", "心情"],
        image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 2,
        title: "深夜思考人生",
        date: "2024-01-12",
        mood: "思考",
        content: "夜深人静的时候总是容易思考，想起这一年的成长和变化，感慨时间过得真快。每一个经历都是成长的养分。",
        tags: ["深夜", "思考", "成长", "感悟"],
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 3,
        title: "周末的慢时光",
        date: "2024-01-08",
        mood: "放松",
        content: "周末在家煮了一壶好茶，读了几页喜欢的书，听着轻音乐。这样的慢时光让人感到内心的宁静和满足。",
        tags: ["周末", "读书", "茶", "宁静"],
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ];

    const moodColors = {
      "开心": "bg-yellow-500/20 text-yellow-200",
      "思考": "bg-blue-500/20 text-blue-200",
      "放松": "bg-green-500/20 text-green-200",
      "感动": "bg-pink-500/20 text-pink-200"
    };

    return (
      <div className="min-h-screen gradient-shift relative" data-name="life-app" data-file="life-app.js">
        <div className="relative z-10">
          <Header />
          
          <main className="pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-white mb-6">生活记录</h1>
                <p className="text-xl text-white/80">记录美好 · 感悟生活 · 珍惜当下</p>
              </div>

              {/* Life Posts */}
              <div className="space-y-8">
                {lifePosts.map(post => (
                  <article key={post.id} className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:border-pink-400/60 transition-all duration-300">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      
                      <div className="md:w-2/3 p-8">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${moodColors[post.mood]}`}>
                            {post.mood}
                          </span>
                          <span className="text-white/60 text-sm">{post.date}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {post.title}
                        </h3>
                        
                        <p className="text-white/80 leading-relaxed mb-6">
                          {post.content}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-sm">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Mood Statistics */}
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">心情统计</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                    <div className="text-3xl mb-2">😊</div>
                    <div className="text-lg font-semibold text-white">开心</div>
                    <div className="text-white/70 text-sm">45%</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                    <div className="text-3xl mb-2">🤔</div>
                    <div className="text-lg font-semibold text-white">思考</div>
                    <div className="text-white/70 text-sm">25%</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                    <div className="text-3xl mb-2">😌</div>
                    <div className="text-lg font-semibold text-white">放松</div>
                    <div className="text-white/70 text-sm">20%</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                    <div className="text-3xl mb-2">😭</div>
                    <div className="text-lg font-semibold text-white">感动</div>
                    <div className="text-white/70 text-sm">10%</div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          
          <Footer />
        </div>
      </div>
    );
  } catch (error) {
    console.error('LifeApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <LifeApp />
  </ErrorBoundary>
);
