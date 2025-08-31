import React from 'react';
import { Link } from 'react-router-dom';
import { Code, ArrowLeft, Clock, Calendar, Monitor, AlertCircle } from 'lucide-react';

const AboutSession = () => {
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

      {/* About Session Content */}
      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              About Session
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Course Description */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 mb-12">
            <div className="text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Latest Trends of Technology
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                This course, titled "Latest Trends of Technology", is conducted by iCodeGuru in collaboration with UET and MEP Solutions. The session aims to provide participants with insights into the most recent advancements and evolving technologies shaping the global tech landscape.
              </p>

              {/* Registration Notice */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-8">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-amber-800 font-medium">
                      If you are not yet enrolled in this course, please complete your registration by clicking the button
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/register"
                className="inline-flex items-center bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Register Now
              </Link>
            </div>
          </div>

          {/* Session Details */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Clock Illustration */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
                  <Clock className="h-32 w-32 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Monitor className="h-8 w-8 text-blue-600" />
                </div>
              </div>
            </div>

            {/* Session Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 text-center">
                Session Details
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Timing:</h3>
                    <p className="text-gray-600">6:00 PM – 8:00 PM (PKT)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Days:</h3>
                    <p className="text-gray-600">Monday to Friday</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Monitor className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Mode:</h3>
                    <p className="text-gray-600">Online Live Sessions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Note:</h3>
                    <p className="text-gray-600">Make sure to join on time. Attendance and participation are important for your progress.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutSession;