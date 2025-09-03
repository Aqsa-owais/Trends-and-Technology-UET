import { Link } from 'react-router-dom';
import { Code, ArrowLeft, FileText, ExternalLink, Upload, Github, Calculator, Zap } from 'lucide-react';

const Assignments = () => {
  const assignments = [
    {
      id: 1,
      title: "Create LinkedIn Profile",
      description: "Build a professional LinkedIn profile showcasing your programming skills and career objectives.",
      icon: <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
        <span className="text-white font-bold text-lg">in</span>
      </div>,
      detailsLink: "https://docs.google.com/document/d/1rLREBcYbFDGY4ADA0Ir54ZVq2pAcWgGwBuVAUXjOuIg/edit?tab=t.0#heading=h.jm555u21o2rn",
      submissionLink: "https://forms.google.com/assignment-01-submission",
      bgColor: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700"
    },
    {
      id: 2,
      title: "GitHub Profile",
      description: "Set up your GitHub profile and create your first repository with proper documentation.",
      icon: <Github className="h-10 w-10 text-white" />,
      detailsLink: "https://docs.google.com/document/d/assignment-02-details",
      submissionLink: "https://forms.google.com/assignment-02-submission",
      bgColor: "from-gray-800 to-gray-900",
      hoverColor: "hover:from-gray-900 hover:to-black"
    },
    {
      id: 3,
      title: "Hackathon Exploration",
      description: "Research and explore upcoming hackathons, understand their themes and prepare participation strategies.",
      icon: <Zap className="h-10 w-10 text-white" />,
      detailsLink: "https://docs.google.com/document/d/assignment-03-details",
      submissionLink: "https://forms.google.com/assignment-03-submission",
      bgColor: "from-purple-500 to-indigo-600",
      hoverColor: "hover:from-purple-600 hover:to-indigo-700"
    },
    {
      id: 4,
      title: "Calculator",
      description: "Build a functional calculator application using your preferred programming language with a clean user interface.",
      icon: <Calculator className="h-10 w-10 text-white" />,
      detailsLink: "https://docs.google.com/document/d/assignment-04-details",
      submissionLink: "https://forms.google.com/assignment-04-submission",
      bgColor: "from-cyan-500 to-blue-500",
      hoverColor: "hover:from-cyan-600 hover:to-blue-600"
    },
    {
      id: 5,
      title: "Introduction to Machine Learning",
      description: "Explore machine learning fundamentals and implement a basic ML model with data analysis.",
      icon: <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl flex items-center justify-center">
        <span className="text-white font-bold text-sm">ML</span>
      </div>,
      detailsLink: "https://docs.google.com/document/d/assignment-05-details",
      submissionLink: "https://forms.google.com/assignment-05-submission",
      bgColor: "from-teal-500 to-emerald-600",
      hoverColor: "hover:from-teal-600 hover:to-emerald-700"
    },
    {
      id: 6,
      title: "Python",
      description: "Complete Python programming exercises covering data structures, algorithms, and object-oriented programming concepts.",
      icon: <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-blue-500 rounded-xl flex items-center justify-center">
        <span className="text-white font-bold text-lg">Py</span>
      </div>,
      detailsLink: "https://docs.google.com/document/d/assignment-06-details",
      submissionLink: "https://forms.google.com/assignment-06-submission",
      bgColor: "from-yellow-500 to-orange-500",
      hoverColor: "hover:from-yellow-600 hover:to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">iCodeGuru</span>
            </Link>
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Assignments Content */}
      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Assignments
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complete these assignments to strengthen your programming skills and build your portfolio
            </p>
          </div>

          {/* Assignments Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assignments.map((assignment) => (
              <div
                key={assignment.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Assignment Header */}
                <div className={`bg-gradient-to-r ${assignment.bgColor} p-6 text-center`}>
                  <div className="flex justify-center mb-4">
                    {assignment.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Assignment {assignment.id.toString().padStart(2, '0')}
                  </h3>
                  <h4 className="text-lg font-semibold text-white/90">
                    {assignment.title}
                  </h4>
                </div>

                {/* Assignment Content */}
                <div className="p-6 space-y-6">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {assignment.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={() => window.open(assignment.detailsLink, '_blank')}
                      className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      <FileText className="h-4 w-4" />
                      <span>View Details</span>
                      <ExternalLink className="h-4 w-4" />
                    </button>

                    <button
                      onClick={() => window.open(assignment.submissionLink, '_blank')}
                      className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r ${assignment.bgColor} ${assignment.hoverColor} text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105`}
                    >
                      <Upload className="h-4 w-4" />
                      <span>Submit Assignment</span>
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Assignments;