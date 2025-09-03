import React from "react";
import { Link } from "react-router-dom";
import {
  Code,
  Users,
  Award,
  ArrowRight,
  BookOpen,
  Laptop,
  Trophy,
  Target,
  Menu,
  X,
} from "lucide-react";
import ayesha from "/assets/ayesha.jpg";
import faizan from "/assets/faizan.jpg";
import hamza from "/assets/hamza.jpg";
const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">iCodeGuru</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                to="/resources"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Resources
              </Link>
              <Link
                to="/assignments"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Assignments
              </Link>
              <Link
                to="/register"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Join Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4 space-y-2">
              <Link
                to="/about"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/resources"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                to="/assignments"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Assignments
              </Link>
              <Link
                to="/register"
                className="block mx-4 mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Now
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Latest
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {" "}
                    Trend{" "}
                  </span>
                  in Technology 2025
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Learn programming from basics to advanced level with our
                  comprehensive courses. Join thousands of students who have
                  transformed their careers through coding.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="https://www.facebook.com/iCodeguru/"
                  className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
                >
                  Facebook Lactures
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                  <Link to="https://www.linkedin.com/in/zafarshahid/">
                    iCodeGuru Founder
                  </Link>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-300">
                <div className="bg-white rounded-xl p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Code className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Interactive Coding
                      </h3>
                      <p className="text-sm text-gray-600">Learn by doing</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-100 rounded-lg h-3"></div>
                    <div className="bg-blue-200 rounded-lg h-3 w-3/4"></div>
                    <div className="bg-purple-200 rounded-lg h-3 w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              About iCodeGuru
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              iCodeGuru is a comprehensive programming learning platform
              designed to help students master coding skills from beginner to
              advanced levels. We provide structured courses, hands-on projects,
              and personalized mentorship to ensure your success in the tech
              industry.
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Students Reviews
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gray-50 p-6 rounded-2xl hover:bg-blue-50 transition-colors duration-300 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                {/* <BookOpen className="h-8 w-8 text-blue-600" /> */}
                <img
                  src={ayesha}
                  alt="Ayesha Rana"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ayesha Rana
              </h3>
              <p className="text-gray-600 text-sm">
                Huge appreciation to iCodeGuru for providing an exceptional
                platform to learn and grow! As a university student, I'm
                learning a tremendous amount from your resources, and I'm
                grateful for the opportunity to expand my skills and knowledge.
                Your dedication to sharing expertise is truly commendable. Thank
                you for empowering individuals like me with the skills and
                confidence to succeed. Keep shining! I'm also excited to connect
                with like-minded professionals and share my learnings on
                LinkedIn, further amplifying the impact of iCodeGuru's efforts!
              </p>
            </div>

            <div className="group bg-gray-50 p-6 rounded-2xl hover:bg-purple-50 transition-colors duration-300 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                {/* <Laptop className="h-8 w-8 text-purple-600" /> */}
                <img
                  src={faizan}
                  alt=" faizan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                M.Faizan Sajid
              </h3>
              <p className="text-gray-600 text-sm">
               {"I'm really happy with the help I got from ICodeGuru. They showed me a clear path to get scholarships in the US and taught me how to make my LinkedIn profile look great. I feel more confident now about my future. I highly recommend ICodeGuru to anyone who needs guidance."}
              </p>
            </div>

            <div className="group bg-gray-50 p-6 rounded-2xl hover:bg-emerald-50 transition-colors duration-300 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                {/* <Users className="h-8 w-8 text-emerald-600" /> */}
                 <img
                  src={hamza}
                  alt=" faizan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Hamza Murtaza
              </h3>
              <p className="text-gray-600 text-sm">
                {"I would like to extend my appreciation to the organizers of the 'Latest Trends in Technology' session by iCodeGuru, MEP, and UET for initiating such a forward-thinking and impactful program. This initiative is thoughtfully designed to enhance students' understanding of current technological trends and prepare them for competitive opportunities, including fully funded scholarships in the USA."}
              </p>
            </div>

            <div className="group bg-gray-50 p-6 rounded-2xl hover:bg-orange-50 transition-colors duration-300 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                {/* <Trophy className="h-8 w-8 text-orange-600" /> */}
                <img
                  src={hamza}
                  alt=" faizan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Hamza Murtaza
              </h3>
              <p className="text-gray-600 text-sm">
                {"Overall, this is a commendable effort to empower students with the knowledge and tools needed to succeed on an international scale. I look forward to the continued success and positive outcomes of this initiative."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Programming Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive courses designed to take you from beginner to
              professional developer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Python Course */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                <h3 className="text-xl font-bold text-white">
                  Python Programming
                </h3>
                <p className="text-blue-100 mt-2">
                  From basics to advanced concepts
                </p>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-blue-500" />
                    <span>Variables, Data Types & Control Structures</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-blue-500" />
                    <span>Object-Oriented Programming</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-blue-500" />
                    <span>Web Development with Django</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-blue-500" />
                    <span>Data Science & Machine Learning</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* JavaScript Course */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6">
                <h3 className="text-xl font-bold text-white">
                  JavaScript & React
                </h3>
                <p className="text-yellow-100 mt-2">Modern web development</p>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-orange-500" />
                    <span>ES6+ JavaScript Fundamentals</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-orange-500" />
                    <span>React.js & Component Architecture</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-orange-500" />
                    <span>State Management & Hooks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-orange-500" />
                    <span>Full-Stack Development</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Java Course */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6">
                <h3 className="text-xl font-bold text-white">
                  Java Programming
                </h3>
                <p className="text-red-100 mt-2">Enterprise development</p>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-red-500" />
                    <span>Core Java & OOP Concepts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-red-500" />
                    <span>Spring Framework & Spring Boot</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-red-500" />
                    <span>Database Integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-red-500" />
                    <span>Enterprise Applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Why Choose iCodeGuru?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the best learning experience for aspiring programmers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gray-50 p-8 rounded-2xl hover:bg-blue-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Expert-Led Courses
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Learn from industry experts with years of real-world programming
                experience. Our instructors bring practical knowledge to every
                lesson.
              </p>
            </div>

            <div className="group bg-gray-50 p-8 rounded-2xl hover:bg-purple-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <Laptop className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Hands-On Practice
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Build real projects and applications while learning. Practice
                coding with interactive exercises and coding challenges.
              </p>
            </div>

            <div className="group bg-gray-50 p-8 rounded-2xl hover:bg-emerald-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors duration-300">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Community Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Join our active community of learners. Get help, share
                knowledge, and collaborate on projects with fellow students.
              </p>
            </div>

            <div className="group bg-gray-50 p-8 rounded-2xl hover:bg-orange-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Industry Recognition
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Earn certificates that are recognized by top tech companies.
                Boost your resume and career prospects.
              </p>
            </div>

            <div className="group bg-gray-50 p-8 rounded-2xl hover:bg-indigo-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors duration-300">
                <Target className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Career Focused
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our curriculum is designed with industry needs in mind. Learn
                skills that employers are actively seeking.
              </p>
            </div>

            <div className="group bg-gray-50 p-8 rounded-2xl hover:bg-pink-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-colors duration-300">
                <Trophy className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Proven Results
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Join thousands of successful graduates who have landed jobs at
                top tech companies after completing our programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Your Learning Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Follow our structured path to become a professional developer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Foundation
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Start with programming fundamentals, syntax, and basic
                problem-solving skills. Build a strong foundation for your
                coding journey.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Practice
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Apply your knowledge through hands-on projects and coding
                challenges. Build real applications and strengthen your skills.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Master</h3>
              <p className="text-gray-300 leading-relaxed">
                Advanced topics, system design, and professional development
                practices. Become job-ready with industry-standard skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Programming Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join iCodeGuru today and transform your career with our
            comprehensive programming courses. Start learning from industry
            experts and build the skills employers want.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Join iCodeGuru Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-semibold">iCodeGuru</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering students to master programming and build successful
                careers in technology.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Python Programming</li>
                <li>JavaScript & React</li>
                <li>Java Development</li>
                <li>Data Structures & Algorithms</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Student Portal</li>
                <li>Community Forum</li>
                <li>Help Center</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 iCodeGuru. Transforming lives through programming
              education.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
