import { Link } from 'react-router-dom';
import { Code, ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';

const Registration = () => {
  // Replace this URL with your actual Google Form or custom form link
  const REGISTRATION_FORM_URL = "https://icode.guru/join/";

  const handleRegisterClick = () => {
    window.open(REGISTRATION_FORM_URL, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
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

      {/* Registration Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-lg w-full">
          {/* Registration Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                <Code className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">
                Join iCodeGuru Today!
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Click below to join the platform.
              </p>
            </div>

            {/* What You'll Get */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                What you'll get with iCodeGuru:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Access to all programming courses (Python, JavaScript)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Hands-on projects and real-world applications</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Expert mentorship and personalized guidance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Career support and job placement assistance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Lifetime access to course materials and updates</p>
                </div>
              </div>
            </div>

            {/* Registration Button */}
            <button
              onClick={handleRegisterClick}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Join Now</span>
              <ExternalLink className="h-5 w-5" />
            </button>

            <div className="text-center space-y-2">
              <p className="text-xs text-gray-500">
                By registering, you agree to our terms of service and privacy policy.
              </p>
              <p className="text-sm text-gray-600 font-medium">
                🎉 Limited Time: Free access to all courses for new students!
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              Questions about registration?{' '}
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Contact our support team
              </button>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Registration;