// import React from 'react';
import { Link } from 'react-router-dom';
import { Code, ArrowLeft, FileSpreadsheet, ExternalLink,} from 'lucide-react';

const Resources = () => {
  // Replace with your actual Excel sheet link
  const RECORDING_SHEET_URL = "https://docs.google.com/spreadsheets/d/1yJ2gAJ8CehLzu-a0USdkUy-4cAyNmj9dKt-jmsoIJog/edit?gid=0#gid=0";

  const handleSheetClick = () => {
    window.open(RECORDING_SHEET_URL, '_blank');
  };

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

      {/* Resources Content */}
      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Explore all of our Resources
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 space-y-8">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                <FileSpreadsheet className="h-10 w-10 text-white" />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Class Recordings
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Access a complete list of all session recordings in one place. This Excel file includes dates, topics, and direct links to each recorded session for your convenience.
                </p>
              </div>

              <button
                onClick={handleSheetClick}
                className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-emerald-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg space-x-3"
              >
                <FileSpreadsheet className="h-6 w-6" />
                <span>Get Recording Sheet</span>
                <ExternalLink className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resources;