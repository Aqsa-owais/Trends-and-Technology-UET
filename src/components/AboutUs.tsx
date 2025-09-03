import { Link } from 'react-router-dom';
import { Code, ArrowLeft, Users, Target, Globe, BookOpen } from 'lucide-react';
import dr from "/assets/drzafar.jpeg";

const AboutUs = () => {
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

      {/* About Us Content */}
      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              About Us
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 space-y-8">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                {/* <Code className="h-10 w-10 text-white" /> */}
                <img 
                src={dr}
                alt="dr zafar" 
                className='w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto"'/>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Meet Dr Zafar Shahid (Engineering Executive, Silicon Valley, USA)
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold text-blue-600">iCodeGuru</span> is a groundbreaking initiative dedicated to democratizing education 
                  worldwide by providing 100% free access
                  to high-quality learning resources. 
                  iCode Guru is founded by Dr. Zafar Shahid (Silicon Valley, California).
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  To explore more and become part of our learning community
                </p>
              </div>

              <Link
                to="https://www.linkedin.com/in/zafarshahid"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Connect with him on LinkedIn
              </Link>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To provide high-quality, practical programming education that prepares students for real-world challenges in the technology industry.
                </p>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To become the leading platform for programming education, connecting students worldwide with industry-relevant skills and opportunities.
                </p>
              </div>
            </div>

            {/* What We Offer */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">What We Offer</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-emerald-50 rounded-xl p-6 text-center">
                  <BookOpen className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Comprehensive Courses</h4>
                  <p className="text-sm text-gray-600">Structured learning paths for all skill levels</p>
                </div>
                
                <div className="bg-orange-50 rounded-xl p-6 text-center">
                  <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Expert Mentorship</h4>
                  <p className="text-sm text-gray-600">Guidance from industry professionals</p>
                </div>
                
                <div className="bg-pink-50 rounded-xl p-6 text-center">
                  <Target className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Career Focus</h4>
                  <p className="text-sm text-gray-600">Skills that employers actively seek</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;