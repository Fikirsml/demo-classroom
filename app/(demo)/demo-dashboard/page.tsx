import React from "react";
import Topnav from "../components/Topnav";
import {
  Bookmark,
  Trophy,
  Target,
  Award,
  Users,
  Clock,
  Star,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
} from "lucide-react";
import Link from 'next/link'
function DemoDashboard() {
  const courses = [
    {
      id: 1,
      category: "Design",
      title: "UX Fundamentals: Crafting Better Interfaces",
      progress: 8,
      totalLessons: 24,
      students: [
        { id: 1, name: "Student 1" },
        { id: 2, name: "Student 2" },
        { id: 3, name: "Student 3" },
      ],
      additionalStudents: 110,
      bgColor: "bg-blue-600",
      bookmarked: true,
    },
    {
      id: 2,
      category: "Business",
      title: "Startup Finance Essentials",
      progress: 10,
      totalLessons: 20,
      students: [
        { id: 1, name: "Student 1" },
        { id: 2, name: "Student 2" },
        { id: 3, name: "Student 3" },
      ],
      additionalStudents: 80,
      bgColor: "bg-orange-600",
      bookmarked: true,
    },
    {
      id: 3,
      category: "Languages",
      title: "Conversational Spanish for Travelers",
      progress: 18,
      totalLessons: 22,
      students: [
        { id: 1, name: "Student 1" },
        { id: 2, name: "Student 2" },
        { id: 3, name: "Student 3" },
      ],
      additionalStudents: 25,
      bgColor: "bg-gray-900",
      bookmarked: true,
    },
  ];

  const lessons = [
    {
      id: 1,
      title: "Introduction to UX Principles",
      subtitle: "Foundations of user-centered design",
      teacher: "Alex Chen",
      duration: "20 min",
    },
    {
      id: 2,
      title: "Color Theory in Digital Design",
      subtitle: "Understanding palettes and contrasts",
      teacher: "Mia Roberts",
      duration: "25 min",
    },
    {
      id: 3,
      title: "Basics of Financial Forecasting",
      subtitle: "Planning budgets with real data",
      teacher: "Priya Kapoor",
      duration: "22 min",
    },
    {
      id: 4,
      title: "Building a Pitch Deck",
      subtitle: "Crafting presentations that win investors",
      teacher: "Samuel Wright",
      duration: "28 min",
    },
    {
      id: 5,
      title: "Spanish Greetings for Travelers",
      subtitle: "Essential phrases for your first trip",
      teacher: "Diego Martinez",
      duration: "18 min",
    },
  ];

  const filters = [
    "All courses",
    "Design",
    "Business",
    "Programming",
    "Languages",
  ];

  const availableClassrooms = [
    {
      id: 1,
      title: "Advanced React Patterns",
      category: "Programming",
      teacher: "Sarah Johnson",
      students: 156,
      rating: 4.8,
      lessons: 32,
      duration: "8 weeks",
      bgColor: "bg-purple-600",
    },
    {
      id: 2,
      title: "Digital Marketing Fundamentals",
      category: "Business",
      teacher: "Michael Brown",
      students: 203,
      rating: 4.9,
      lessons: 24,
      duration: "6 weeks",
      bgColor: "bg-green-600",
    },
    {
      id: 3,
      title: "French for Beginners",
      category: "Languages",
      teacher: "Marie Dubois",
      students: 89,
      rating: 4.7,
      lessons: 28,
      duration: "10 weeks",
      bgColor: "bg-indigo-600",
    },
  ];

  const gamificationStats = [
    {
      icon: Trophy,
      label: "Achievements",
      value: "12/20",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Target,
      label: "Weekly Goal",
      value: "85%",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Award,
      label: "Mastery Level",
      value: "Expert",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  const discussionBoards = [
    {
      id: 1,
      classroom: "UX Fundamentals: Crafting Better Interfaces",
      category: "Design",
      topic: "Best practices for mobile-first design?",
      author: "Sarah Kim",
      timeAgo: "2 hours ago",
      topComment:
        "Always start with the smallest screen size and work your way up. This ensures core functionality works everywhere.",
      commentAuthor: "Alex Chen",
      upvotes: 24,
      downvotes: 2,
      totalComments: 12,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      id: 2,
      classroom: "Startup Finance Essentials",
      category: "Business",
      topic: "How to calculate burn rate accurately?",
      author: "Michael Torres",
      timeAgo: "5 hours ago",
      topComment:
        "Track your monthly expenses and divide by cash reserves. Don't forget to include one-time costs in your average.",
      commentAuthor: "Priya Kapoor",
      upvotes: 18,
      downvotes: 1,
      totalComments: 8,
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      id: 3,
      classroom: "Conversational Spanish for Travelers",
      category: "Languages",
      topic: "Tips for improving pronunciation?",
      author: "Emma Rodriguez",
      timeAgo: "1 day ago",
      topComment:
        "Listen to native speakers daily and practice shadowing. Record yourself and compare to native pronunciation.",
      commentAuthor: "Diego Martinez",
      upvotes: 31,
      downvotes: 0,
      totalComments: 15,
      bgColor: "bg-gray-50",
      borderColor: "border-gray-300",
    },
  ];

  return (
   

      <div className="p-8">
        {/* My Courses Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">My courses</h1>

            {/* Filter Buttons */}
            <div className="flex gap-3">
              {filters.map((filter, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    index === 0
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`${course.bgColor} rounded-3xl p-6 text-white relative overflow-hidden shadow-lg`}
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-black/20 px-3 py-1 rounded-lg text-xs font-medium">
                    {course.category}
                  </span>
                  {course.bookmarked && (
                    <button className="text-white">
                      <Bookmark className="w-5 h-5 fill-white" />
                    </button>
                  )}
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-bold mb-8">{course.title}</h3>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-2">
                    <span>Progress</span>
                    <span>
                      {course.progress}/{course.totalLessons} lessons
                    </span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-white rounded-full h-2"
                      style={{
                        width: `${(course.progress / course.totalLessons) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Students and Continue Button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      {course.students.map((student) => (
                        <div
                          key={student.id}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white"
                        ></div>
                      ))}
                      <div className="w-8 h-8 rounded-full bg-white text-gray-800 border-2 border-white flex items-center justify-center text-xs font-semibold">
                        +{course.additionalStudents}
                      </div>
                    </div>
                  </div>
                  <button className="bg-lime-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-lime-500 transition-colors">
                    Continue
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Available Classrooms Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Available Classrooms
            </h1>
            <button className="text-orange-500 text-sm font-medium hover:text-orange-600">
              Explore all
            </button>
          </div>

          {/* Classroom Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {availableClassrooms.map((classroom) => (
              <div
                key={classroom.id}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all"
              >
                {/* Header with Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`${classroom.bgColor} text-white px-3 py-1 rounded-lg text-xs font-medium`}
                  >
                    {classroom.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold text-gray-700">
                      {classroom.rating}
                    </span>
                  </div>
                </div>

                {/* Classroom Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {classroom.title}
                </h3>

                {/* Teacher Info */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400"></div>
                  <span className="text-sm text-gray-600">
                    {classroom.teacher}
                  </span>
                </div>

                {/* Classroom Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-600">
                      {classroom.students} students
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-600">
                      {classroom.duration}
                    </span>
                  </div>
                </div>

                {/* Lessons Count */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                    <span>{classroom.lessons} lessons</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-orange-500 h-1.5 rounded-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>

                {/* Enroll Button */}
                <button className="w-full bg-orange-500 text-white py-2.5 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Lessons and Discussions */}
          <div className="lg:col-span-2 space-y-6">
            {/* My Next Lessons */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  My next lessons
                </h2>
                <button className="text-orange-500 text-sm font-medium hover:text-orange-600">
                  View all lessons
                </button>
              </div>

              <div className="space-y-4">
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 text-xs font-medium text-gray-500 pb-2 border-b">
                  <div className="col-span-5">Lesson</div>
                  <div className="col-span-4">Teacher</div>
                  <div className="col-span-3 text-right">Duration</div>
                </div>

                {/* Lessons List */}
                {lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="grid grid-cols-12 gap-4 items-center py-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="col-span-5">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">
                        {lesson.title}
                      </h4>
                      <p className="text-xs text-gray-500">{lesson.subtitle}</p>
                    </div>
                    <div className="col-span-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-400"></div>
                      <span className="text-sm text-gray-700">
                        {lesson.teacher}
                      </span>
                    </div>
                    <div className="col-span-3 text-right text-sm text-gray-700">
                      {lesson.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Discussion Boards Section */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Class Discussions
                </h2>
                <button className="text-orange-500 text-sm font-medium hover:text-orange-600">
                  View all discussions
                </button>
              </div>

              {/* Scrollable Discussion List */}
              <div className="space-y-4 max-h-[270px] overflow-y-auto pr-2">
                {discussionBoards.map((discussion) => (
                  <div
                    key={discussion.id}
                    className={`${discussion.bgColor} border ${discussion.borderColor} rounded-xl p-4 hover:shadow-md transition-all`}
                  >
                    {/* Discussion Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium text-gray-600">
                            {discussion.classroom}
                          </span>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-500">
                            {discussion.timeAgo}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-gray-900 mb-2">
                          {discussion.topic}
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-400 to-pink-400"></div>
                          <span className="text-sm text-gray-600">
                            {discussion.author}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-600">
                          {discussion.totalComments}
                        </span>
                      </div>
                    </div>

                    {/* Top Comment */}
                    <div className="bg-white rounded-lg p-3 mb-3 border border-gray-200">
                      <div className="flex items-start gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold text-gray-900">
                              {discussion.commentAuthor}
                            </span>
                            <span className="text-xs text-gray-500">
                              Top Comment
                            </span>
                          </div>
                          <p className="text-xs text-gray-700">
                            {discussion.topComment}
                          </p>
                        </div>
                      </div>

                      {/* Vote Buttons */}
                      <div className="flex items-center gap-3 ml-8">
                        <button className="flex items-center gap-1 px-2 py-1 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                          <ThumbsUp className="w-3 h-3 text-green-600" />
                          <span className="text-xs font-semibold text-green-600">
                            {discussion.upvotes}
                          </span>
                        </button>
                        <button className="flex items-center gap-1 px-2 py-1 rounded-lg bg-red-50 hover:bg-red-100 transition-colors">
                          <ThumbsDown className="w-3 h-3 text-red-600" />
                          <span className="text-xs font-semibold text-red-600">
                            {discussion.downvotes}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* View Discussion Button */}
                    <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                      View Full Discussion
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Assignments Post Board */}
          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm h-fit sticky top-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Assignments</h2>
              <button className="text-orange-500 text-sm font-medium hover:text-orange-600">
                View all
              </button>
            </div>

            <div className="space-y-4">
              {/* Assignment 1 */}
              <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-300 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                        Design
                      </span>
                      <span className="text-xs text-gray-500">
                        Due in 2 days
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      Create a User Flow Diagram
                    </h4>
                    <p className="text-xs text-gray-600">
                      Design a complete user flow for the checkout process
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500">Assigned by:</span>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400"></div>
                    <span className="text-xs font-medium text-gray-700">
                      Alex Chen
                    </span>
                  </div>
                </div>
              </div>

              {/* Assignment 2 */}
              <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-300 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-medium">
                        Business
                      </span>
                      <span className="text-xs text-gray-500">
                        Due in 5 days
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      Financial Model Analysis
                    </h4>
                    <p className="text-xs text-gray-600">
                      Analyze the provided startup financial model
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500">Assigned by:</span>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-400"></div>
                    <span className="text-xs font-medium text-gray-700">
                      Priya Kapoor
                    </span>
                  </div>
                </div>
              </div>

              {/* Assignment 3 */}
              <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-300 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-gray-800 text-white px-2 py-1 rounded text-xs font-medium">
                        Languages
                      </span>
                      <span className="text-xs text-gray-500">
                        Due tomorrow
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      Practice Conversation Recording
                    </h4>
                    <p className="text-xs text-gray-600">
                      Record yourself ordering food in Spanish
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500">Assigned by:</span>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-pink-400"></div>
                    <span className="text-xs font-medium text-gray-700">
                      Diego Martinez
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default DemoDashboard;
