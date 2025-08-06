function CategoryCard({ title, description, icon, gradient, href }) {
  try {
    return (
      <div className="card-hover group" data-name="category-card" data-file="components/CategoryCard.js">
        <div className="relative h-full bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 transition-all duration-500 group-hover:bg-white/20 group-hover:border-white/40">
          {/* Hologram Effect */}
          <div className="absolute inset-0 rounded-2xl hologram opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Icon */}
          <div className="relative z-10 mb-6 flex justify-center">
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl text-white shadow-lg ${gradient}`}>
              {icon}
            </div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
              {title}
            </h3>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              {description}
            </p>
            
            <a 
              href={href}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/80 to-purple-600/80 text-white font-semibold rounded-full transition-all duration-300 hover:from-blue-500 hover:to-purple-600 hover:scale-105 hover:shadow-lg backdrop-blur-sm"
            >
              <span className="mr-2">探索更多</span>
              <span className="text-sm">→</span>
            </a>
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('CategoryCard component error:', error);
    return (
      <div className="h-64 bg-red-500/20 rounded-2xl flex items-center justify-center">
        <div className="text-white text-center">
          <h3 className="font-bold mb-2">Card Error</h3>
          <p className="text-sm">{error.message}</p>
        </div>
      </div>
    );
  }
}