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
            <p className="text-gray-600 mb-4">抱歉，发生了意外错误。</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              重新加载
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// API 基础URL
const API_BASE_URL = 'http://localhost:3000/api';

// API 调用函数
const api = {
  // 学习记录 API
  learning: {
    getAll: () => fetch(`${API_BASE_URL}/learning`).then(res => res.json()),
    getById: (id) => fetch(`${API_BASE_URL}/learning/${id}`).then(res => res.json()),
    create: (data) => fetch(`${API_BASE_URL}/learning`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => res.json()),
    update: (id, data) => fetch(`${API_BASE_URL}/learning/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => res.json()),
    delete: (id) => fetch(`${API_BASE_URL}/learning/${id}`, {
      method: 'DELETE'
    }).then(res => res.json())
  },
  // 健身记录 API
  fitness: {
    getAll: () => fetch(`${API_BASE_URL}/fitness`).then(res => res.json()),
    getById: (id) => fetch(`${API_BASE_URL}/fitness/${id}`).then(res => res.json()),
    create: (data) => fetch(`${API_BASE_URL}/fitness`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => res.json()),
    update: (id, data) => fetch(`${API_BASE_URL}/fitness/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => res.json()),
    delete: (id) => fetch(`${API_BASE_URL}/fitness/${id}`, {
      method: 'DELETE'
    }).then(res => res.json())
  },
  // 生活记录 API
  life: {
    getAll: () => fetch(`${API_BASE_URL}/life`).then(res => res.json()),
    getById: (id) => fetch(`${API_BASE_URL}/life/${id}`).then(res => res.json()),
    create: (data) => fetch(`${API_BASE_URL}/life`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => res.json()),
    update: (id, data) => fetch(`${API_BASE_URL}/life/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => res.json()),
    delete: (id) => fetch(`${API_BASE_URL}/life/${id}`, {
      method: 'DELETE'
    }).then(res => res.json())
  },
  // 摄影作品 API
  photography: {
    getAll: () => fetch(`${API_BASE_URL}/photography`).then(res => res.json()),
    getById: (id) => fetch(`${API_BASE_URL}/photography/${id}`).then(res => res.json()),
    create: (data) => fetch(`${API_BASE_URL}/photography`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => res.json()),
    update: (id, data) => fetch(`${API_BASE_URL}/photography/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => res.json()),
    delete: (id) => fetch(`${API_BASE_URL}/photography/${id}`, {
      method: 'DELETE'
    }).then(res => res.json())
  }
};

// 头部导航组件
function AdminHeader({ currentSection, onSectionChange }) {
  const sections = [
    { id: 'learning', name: '学习记录', icon: 'book-open' },
    { id: 'fitness', name: '健身记录', icon: 'dumbbell' },
    { id: 'life', name: '生活记录', icon: 'heart' },
    { id: 'photography', name: '摄影作品', icon: 'camera' }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">博客管理后台</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a href="index.html" className="text-gray-600 hover:text-gray-900">
              <i className="lucide-home w-5 h-5"></i>
              返回首页
            </a>
          </div>
        </div>
        <nav className="flex space-x-8">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                currentSection === section.id
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <i className={`lucide-${section.icon} w-4 h-4`}></i>
              <span>{section.name}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

// 文章表单组件
function ArticleForm({ section, article, onSave, onCancel }) {
  const [formData, setFormData] = React.useState({
    title: '',
    content: '',
    category: '',
    tags: '',
    ...article
  });

  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const data = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        date: article ? formData.date : new Date().toISOString().split('T')[0]
      };
      
      if (article) {
        await api[section].update(article.id, data);
      } else {
        await api[section].create(data);
      }
      
      onSave();
    } catch (error) {
      console.error('保存失败:', error);
      alert('保存失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        {article ? '编辑' : '添加'}{getSectionName(section)}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            标题
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            分类
          </label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="input-field"
            placeholder={getPlaceholder(section, 'category')}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            标签 (用逗号分隔)
          </label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="input-field"
            placeholder={getPlaceholder(section, 'tags')}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            内容
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows={10}
            className="textarea-field"
            placeholder={getPlaceholder(section, 'content')}
            required
          />
        </div>
        
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="btn-secondary"
            disabled={loading}
          >
            取消
          </button>
          <button
            type="submit"
            className="btn-primary"
            disabled={loading}
          >
            {loading ? '保存中...' : '保存'}
          </button>
        </div>
      </form>
    </div>
  );
}

// 文章列表组件
function ArticleList({ section, articles, onEdit, onDelete, onAdd }) {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">
            {getSectionName(section)}管理
          </h2>
          <button onClick={onAdd} className="btn-primary">
            <i className="lucide-plus w-4 h-4 inline mr-2"></i>
            添加{getSectionName(section)}
          </button>
        </div>
      </div>
      
      <div className="divide-y divide-gray-200">
        {articles.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            暂无{getSectionName(section)}，点击上方按钮添加第一篇
          </div>
        ) : (
          articles.map(article => (
            <div key={article.id} className="p-6 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-3 line-clamp-2">
                    {article.content ? article.content.substring(0, 150) + '...' : '暂无内容'}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>分类: {article.category}</span>
                    <span>日期: {article.date}</span>
                    {article.tags && article.tags.length > 0 && (
                      <span>标签: {article.tags.join(', ')}</span>
                    )}
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => onEdit(article)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    <i className="lucide-edit w-4 h-4"></i>
                  </button>
                  <button
                    onClick={() => onDelete(article.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <i className="lucide-trash-2 w-4 h-4"></i>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// 主应用组件
function AdminApp() {
  const [currentSection, setCurrentSection] = React.useState('learning');
  const [articles, setArticles] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [showForm, setShowForm] = React.useState(false);
  const [editingArticle, setEditingArticle] = React.useState(null);

  // 加载文章数据
  const loadArticles = async () => {
    setLoading(true);
    try {
      const data = await api[currentSection].getAll();
      setArticles(data);
    } catch (error) {
      console.error('加载数据失败:', error);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  // 切换分类时重新加载数据
  React.useEffect(() => {
    loadArticles();
    setShowForm(false);
    setEditingArticle(null);
  }, [currentSection]);

  // 处理添加文章
  const handleAdd = () => {
    setEditingArticle(null);
    setShowForm(true);
  };

  // 处理编辑文章
  const handleEdit = (article) => {
    setEditingArticle({
      ...article,
      tags: article.tags ? article.tags.join(', ') : ''
    });
    setShowForm(true);
  };

  // 处理删除文章
  const handleDelete = async (id) => {
    if (!confirm('确定要删除这篇文章吗？')) return;
    
    try {
      await api[currentSection].delete(id);
      loadArticles();
    } catch (error) {
      console.error('删除失败:', error);
      alert('删除失败，请重试');
    }
  };

  // 处理保存文章
  const handleSave = () => {
    setShowForm(false);
    setEditingArticle(null);
    loadArticles();
  };

  // 处理取消编辑
  const handleCancel = () => {
    setShowForm(false);
    setEditingArticle(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader 
        currentSection={currentSection} 
        onSectionChange={setCurrentSection} 
      />
      
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {showForm ? (
          <ArticleForm
            section={currentSection}
            article={editingArticle}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        ) : (
          <ArticleList
            section={currentSection}
            articles={articles}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onAdd={handleAdd}
          />
        )}
        
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            <p className="mt-2 text-gray-600">加载中...</p>
          </div>
        )}
      </main>
    </div>
  );
}

// 辅助函数
function getSectionName(section) {
  const names = {
    learning: '学习记录',
    fitness: '健身记录',
    life: '生活记录',
    photography: '摄影作品'
  };
  return names[section] || section;
}

function getPlaceholder(section, field) {
  const placeholders = {
    learning: {
      category: '如：技术、读书、总结',
      tags: '如：React, JavaScript, 前端',
      content: '请输入学习内容、心得体会、知识要点等...'
    },
    fitness: {
      category: '如：力量训练、有氧运动、瑜伽',
      tags: '如：胸肌, 减脂, 马拉松',
      content: '请输入训练内容、运动数据、身体感受等...'
    },
    life: {
      category: '如：日常、旅行、感悟',
      tags: '如：美食, 电影, 朋友',
      content: '请输入生活感悟、日常记录、心情随笔等...'
    },
    photography: {
      category: '如：风景、人像、街拍',
      tags: '如：夕阳, 城市, 黑白',
      content: '请输入拍摄心得、技术参数、创作理念等...'
    }
  };
  return placeholders[section]?.[field] || '';
}

// 渲染应用
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <AdminApp />
  </ErrorBoundary>
);