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
            <button onClick={() => window.location.reload()} className="px-6 py-2 bg-orange-600 text-white rounded-lg">
              重新加载
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function PhotographyApp() {
  try {
    const [selectedCategory, setSelectedCategory] = React.useState('all');

    const photos = [
      {
        id: 1,
        title: "山间晨雾",
        category: "风景",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "清晨的山间云雾缭绕，如梦如幻"
      },
      {
        id: 2,
        title: "城市夜景",
        category: "城市",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "繁华都市的璀璨夜色"
      },
      {
        id: 3,
        title: "海边日落",
        category: "风景",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "夕阳西下，海天一色"
      },
      {
        id: 4,
        title: "街头瞬间",
        category: "人文",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "捕捉生活中的真实瞬间"
      },
      {
        id: 5,
        title: "花朵特写",
        category: "微距",
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "微距镜头下的花朵世界"
      },
      {
        id: 6,
        title: "星空银河",
        category: "风景",
        image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "璀璨的银河横跨夜空"
      }
    ];

    const categories = ['all', '风景', '城市', '人文', '微距'];

    const filteredPhotos = selectedCategory === 'all' 
      ? photos 
      : photos.filter(photo => photo.category === selectedCategory);

    return (
      <div className="min-h-screen gradient-shift relative" data-name="photography-app" data-file="photography-app.js">
        <div className="relative z-10">
          <Header />
          
          <main className="pt-32 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-white mb-6">摄影作品</h1>
                <p className="text-xl text-white/80">用镜头记录世界的美好</p>
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
                          ? 'bg-white text-orange-600'
                          : 'text-white hover:bg-white/10'
                      }`}
                    >
                      {category === 'all' ? '全部' : category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Photos Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPhotos.map(photo => (
                  <div key={photo.id} className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-orange-400/60 transition-all duration-300 group">
                    <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                      <img 
                        src={photo.image} 
                        alt={photo.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-200 rounded-full text-sm font-medium">
                          {photo.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                        {photo.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {photo.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
          
          <Footer />
        </div>
      </div>
    );
  } catch (error) {
    console.error('PhotographyApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <PhotographyApp />
  </ErrorBoundary>
);