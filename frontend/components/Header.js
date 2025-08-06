function Header() {
  try {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
      { name: "首页", href: "/" },
      { name: "学习", href: "/learning.html" },
      { name: "健身", href: "/fitness.html" },
      { name: "生活", href: "/life.html" }
    ];

    return (
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-lg' 
          : 'bg-transparent'
      }`} data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo section */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className={`text-xl font-bold gradient-text ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>个人博客</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`font-medium transition-colors hover:text-blue-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-xl`}></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200/50">
            <div className="flex flex-col space-y-3 p-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium px-2 py-1"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return (
      <header className="fixed top-0 w-full bg-red-500/20 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="text-white">Header Error: {error.message}</div>
        </div>
      </header>
    );
  }
}