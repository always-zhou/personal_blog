function Hero() {
  try {
    React.useEffect(() => {
      // Create cosmic wave elements
      const createCosmicWaves = () => {
        const hero = document.querySelector('.hero-section');
        if (!hero) return;
        
        for (let i = 0; i < 3; i++) {
          const wave = document.createElement('div');
          wave.className = 'cosmic-wave absolute w-32 h-32 rounded-full opacity-20';
          wave.style.background = 'radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%)';
          wave.style.left = Math.random() * 100 + '%';
          wave.style.top = Math.random() * 100 + '%';
          wave.style.animationDelay = Math.random() * 8 + 's';
          hero.appendChild(wave);
        }
      };

      createCosmicWaves();
    }, []);

    return (
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden gradient-shift cyber-grid" data-name="hero" data-file="components/Hero.js">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* User Icon with Cosmic Effect */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hologram">
                <div className="icon-user text-white text-3xl"></div>
              </div>
              <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-ping opacity-20"></div>
            </div>
          </div>

          {/* Main Title with Neon Effect */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-white mb-2">记录生活的</span>
            <span className="block gradient-text neon-glow glitch-text">每一刻</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            在这里分享我的学习心得、健身历程、生活感悟，记录成长路上的每一个精彩瞬间
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="#categories" 
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10">了解更多</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="#categories" 
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm"
            >
              开始探索
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return (
      <section className="min-h-screen flex items-center justify-center bg-red-500/20">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Hero Error</h1>
          <p>{error.message}</p>
        </div>
      </section>
    );
  }
}