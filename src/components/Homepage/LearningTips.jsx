import React from 'react';

const LearningTips = () => {
  // Static Data
  const techniques = [
    {
      title: "Pomodoro Technique",
      category: "Study Method",
      description: "Focus intensely for 25 minutes, then take a 5-minute break. This prevents burnout and maintains high concentration.",
      icon: "⏱️",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      title: "Feynman Technique",
      category: "Conceptual Mastery",
      description: "Learn by teaching. Try to explain a complex concept to someone else in the simplest terms possible to identify your own gaps.",
      icon: "💡",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    }
  ];

  const timeManagement = [
    {
      title: "Task Batching",
      category: "Efficiency",
      description: "Group similar tasks together (like checking emails or debugging) and complete them in one dedicated time block.",
      icon: "📁",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      title: "80/20 Rule",
      category: "Prioritization",
      description: "Focus on the 20% of your efforts that produce 80% of your results. Identify and prioritize high-impact learning topics.",
      icon: "📊",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section className="py-2 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            Learning Tips & Tricks
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-500 font-medium">Master your growth with proven strategies</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Study Techniques Column */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <span className="mr-3">📚</span> Study Techniques
            </h3>
            <div className="space-y-6">
              {techniques.map((item, index) => (
                <div key={index} className="flex p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-indigo-200 transition-all hover:shadow-sm">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${item.bgColor} ${item.iconColor} flex items-center justify-center text-2xl`}>
                    {item.icon}
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 mt-1 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Time Management Column */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <span className="mr-3">⏳</span> Time Management
            </h3>
            <div className="space-y-6">
              {timeManagement.map((item, index) => (
                <div key={index} className="flex p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-indigo-200 transition-all hover:shadow-sm">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${item.bgColor} ${item.iconColor} flex items-center justify-center text-2xl`}>
                    {item.icon}
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 mt-1 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LearningTips;