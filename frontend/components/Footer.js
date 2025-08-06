function Footer() {
  try {
    return (
      <footer className="relative bg-gray-900/50 backdrop-blur-md border-t border-white/10" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            {/* Logo */}
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold gradient-text">个人博客</span>
            </div>
            
            {/* Tagline */}
            <p className="text-white/70 mb-8 max-w-md mx-auto">
              分享知识，记录成长，感悟生活
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                <span className="text-2xl">📧</span>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                <span className="text-2xl">🐙</span>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                <span className="text-2xl">📱</span>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                <span className="text-2xl">💼</span>
              </a>
            </div>
            
            {/* Copyright */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/50 text-sm">
                &copy; 2025 个人博客. 用心记录，用爱分享.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return (
      <footer className="bg-red-500/20 p-8">
        <div className="text-white text-center">
          <p>Footer Error: {error.message}</p>
        </div>
      </footer>
    );
  }
}