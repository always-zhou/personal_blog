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
            <button onClick={() => window.location.reload()} className="px-6 py-2 bg-green-600 text-white rounded-lg">
              重新加载
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function FitnessApp() {
  try {
    const workoutData = [
      {
        id: 1,
        date: "2024-01-15",
        type: "力量训练",
        duration: "90分钟",
        exercises: ["深蹲", "卧推", "硬拉"],
        calories: 450,
        notes: "今天状态很好，重量有所提升"
      },
      {
        id: 2,
        date: "2024-01-13",
        type: "有氧运动",
        duration: "45分钟",
        exercises: ["跑步", "动感单车"],
        calories: 380,
        notes: "心率控制得很好，感觉很棒"
      },
      {
        id: 3,
        date: "2024-01-11",
        type: "功能性训练",
        duration: "60分钟",
        exercises: ["平板支撑", "波比跳", "俯卧撑"],
        calories: 320,
        notes: "核心力量训练，全身都在燃烧"
      }
    ];

    const stats = {
      totalWorkouts: 24,
      totalHours: 36,
      avgCalories: 385,
      currentStreak: 7
    };

    return (
      <div className="min-h-screen gradient-shift relative" data-name="fitness-app" data-file="fitness-app.js">
        <div className="relative z-10">
          <Header />
          
          <main className="pt-32 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-white mb-6">健身记录</h1>
                <p className="text-xl text-white/80">强健体魄 · 挑战自我 · 持续进步</p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="icon-dumbbell text-green-300 text-xl"></div>
                  </div>
                  <div className="text-2xl font-bold text-white">{stats.totalWorkouts}</div>
                  <div className="text-white/70 text-sm">总训练次数</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="icon-clock text-blue-300 text-xl"></div>
                  </div>
                  <div className="text-2xl font-bold text-white">{stats.totalHours}h</div>
                  <div className="text-white/70 text-sm">总训练时长</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="icon-zap text-orange-300 text-xl"></div>
                  </div>
                  <div className="text-2xl font-bold text-white">{stats.avgCalories}</div>
                  <div className="text-white/70 text-sm">平均消耗</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <div className="icon-target text-purple-300 text-xl"></div>
                  </div>
                  <div className="text-2xl font-bold text-white">{stats.currentStreak}</div>
                  <div className="text-white/70 text-sm">连续天数</div>
                </div>
              </div>

              {/* Workout Log */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-8">训练日志</h2>
                
                {workoutData.map(workout => (
                  <div key={workout.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-green-400/60 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                          <div className="icon-activity text-green-300 text-xl"></div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{workout.type}</h3>
                          <p className="text-white/70">{workout.date}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-6 mt-4 md:mt-0">
                        <div className="text-center">
                          <div className="text-lg font-semibold text-white">{workout.duration}</div>
                          <div className="text-white/60 text-sm">时长</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-white">{workout.calories}</div>
                          <div className="text-white/60 text-sm">卡路里</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {workout.exercises.map(exercise => (
                          <span key={exercise} className="px-3 py-1 bg-green-500/20 text-green-200 rounded-full text-sm">
                            {exercise}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-white/80 italic">"{workout.notes}"</p>
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
    console.error('FitnessApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <FitnessApp />
  </ErrorBoundary>
);