"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import YoutubePlayer from "../components/YoutubePlayer";
import { useState, useRef, useEffect } from "react";
import {
  ChevronRight,
  BookOpen,
  Target,
  FileText,
  BookMarked,
  MessageSquare,
  Bot,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Save,
  ArrowUp,
  ArrowDown,
  Reply,
  MoreHorizontal,
} from "lucide-react";

function classroomPage() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const [activeTab, setActiveTab] = useState("description");
  const [activeComponent, setActiveComponent] = useState("content");
  const [notesContent, setNotesContent] = useState(`<ul>
    <li>Water evaporates from oceans, lakes, and rivers due to heat from the sun</li>
    <li>Water vapor rises and cools, forming clouds through condensation</li>
    <li>When clouds become heavy with water droplets, precipitation occurs</li>
    <li>Rain returns water to the Earth's surface, completing the cycle</li>
  </ul>`);
  const [isEditingNotes, setIsEditingNotes] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);

  const [discussionThreads, setDiscussionThreads] = useState([
    {
      id: 1,
      author: "Sarah Chen",
      timeAgo: "2 hours ago",
      content:
        "I've noticed that in my region, we're experiencing more intense rainfall events but longer dry periods in between. This seems to align with what the video explains about the water cycle being affected by temperature changes.",
      upvotes: 24,
      downvotes: 2,
      replies: [
        {
          id: 11,
          author: "Marcus Johnson",
          timeAgo: "1 hour ago",
          content:
            "Great observation! This is exactly what climate scientists call 'precipitation intensification'. The warmer atmosphere can hold more moisture, leading to these extreme events.",
          upvotes: 15,
          downvotes: 0,
        },
        {
          id: 12,
          author: "Emma Rodriguez",
          timeAgo: "45 min ago",
          content:
            "We're seeing the same pattern here in California. The wet seasons are getting wetter and the dry seasons drier.",
          upvotes: 8,
          downvotes: 1,
        },
      ],
    },
    {
      id: 2,
      author: "David Park",
      timeAgo: "5 hours ago",
      content:
        "Question: Does anyone know how the increased evaporation from warmer oceans affects cloud formation? The video touched on this but I'd love to understand it better.",
      upvotes: 18,
      downvotes: 0,
      replies: [
        {
          id: 21,
          author: "Dr. Lisa Martinez",
          timeAgo: "4 hours ago",
          content:
            "Good question! Higher evaporation rates mean more water vapor in the atmosphere. This can lead to more cloud formation, but the type and altitude of clouds also changes, which affects how much sunlight is reflected vs. absorbed.",
          upvotes: 31,
          downvotes: 1,
        },
      ],
    },
    {
      id: 3,
      author: "Alex Thompson",
      timeAgo: "1 day ago",
      content:
        "The animation in the video really helped me visualize how water moves through the cycle. I finally understand why we need to care about ocean temperatures!",
      upvotes: 42,
      downvotes: 3,
      replies: [],
    },
  ]);
  const [replyingTo, setReplyingTo] = useState<number | null>(null);

  useEffect(() => {
    if (editorRef.current && isEditingNotes) {
      editorRef.current.innerHTML = notesContent;
    }
  }, [isEditingNotes]);

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
  };

  function getVideoId(url: string) {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/);

    return match?.[1] ?? "";
  }
  return (
    <div className="min-h-screen bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        {/* Left side - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Section Heading with Breadcrumbs */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm text-gray-600 mb-2">My science classroom</p>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Module 3: Something in the air
            </h1>

            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link
                href="/demo-dashboard"
                className="hover:text-orange-500 transition-colors"
              >
                Home
              </Link>
              {segments.map((segment, index) => {
                const href = "/" + segments.slice(0, index + 1).join("/");

                return (
                  <span key={href} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4" />
                    <Link
                      href={href}
                      className="hover:text-orange-500 transition-colors"
                    >
                      {decodeURIComponent(segment)}
                    </Link>
                  </span>
                );
              })}
            </div>
          </div>

          {/* Video Player Section */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Video Title */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                3.1.3 What happens when it rains
              </h2>
              <p className="text-sm text-gray-600">
                💡 Hint: watch till the end of the video
              </p>
            </div>

            {/* Video Player */}
            <div className="aspect-video bg-black">
              <YoutubePlayer
                videoId={getVideoId(
                  "https://www.youtube.com/watch?v=MOLZOXqaomM",
                )}
              />
            </div>
          </div>

          {/* Tabs Section */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Tab Buttons */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab("description")}
                className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === "description"
                    ? "bg-orange-50 text-orange-600 border-b-2 border-orange-500"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Lesson Description
              </button>
              <button
                onClick={() => setActiveTab("notes")}
                className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === "notes"
                    ? "bg-orange-50 text-orange-600 border-b-2 border-orange-500"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Notes
              </button>
              <button
                onClick={() => setActiveTab("resources")}
                className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === "resources"
                    ? "bg-orange-50 text-orange-600 border-b-2 border-orange-500"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Resources
              </button>
              <button
                onClick={() => setActiveTab("discussion")}
                className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === "discussion"
                    ? "bg-orange-50 text-orange-600 border-b-2 border-orange-500"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Discussion Board
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === "description" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Lesson Overview
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    In this lesson, we explore the water cycle and what happens
                    when it rains. You'll learn about evaporation, condensation,
                    and precipitation, and how these processes work together to
                    create rain.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <p className="text-sm text-blue-900">
                      <strong>Key Concept:</strong> The water cycle is a
                      continuous process that moves water through the Earth's
                      atmosphere, surface, and underground.
                    </p>
                  </div>
                </div>
              )}
              {activeTab === "notes" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Lesson Notes
                    </h3>
                    <button
                      onClick={() => setIsEditingNotes(!isEditingNotes)}
                      className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      {isEditingNotes ? "Save Notes" : "Edit Notes"}
                    </button>
                  </div>

                  {isEditingNotes && (
                    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
                      {/* Rich Text Editor Toolbar */}
                      <div className="flex items-center gap-1 p-2 border-b border-gray-200 bg-gray-50">
                        <button
                          onClick={() => execCommand("bold")}
                          className="p-2 hover:bg-gray-200 rounded transition-colors"
                          title="Bold"
                        >
                          <Bold className="w-4 h-4 text-gray-700" />
                        </button>
                        <button
                          onClick={() => execCommand("italic")}
                          className="p-2 hover:bg-gray-200 rounded transition-colors"
                          title="Italic"
                        >
                          <Italic className="w-4 h-4 text-gray-700" />
                        </button>
                        <button
                          onClick={() => execCommand("underline")}
                          className="p-2 hover:bg-gray-200 rounded transition-colors"
                          title="Underline"
                        >
                          <Underline className="w-4 h-4 text-gray-700" />
                        </button>
                        <div className="w-px h-6 bg-gray-300 mx-1" />
                        <button
                          onClick={() => execCommand("insertUnorderedList")}
                          className="p-2 hover:bg-gray-200 rounded transition-colors"
                          title="Bullet List"
                        >
                          <List className="w-4 h-4 text-gray-700" />
                        </button>
                        <button
                          onClick={() => execCommand("insertOrderedList")}
                          className="p-2 hover:bg-gray-200 rounded transition-colors"
                          title="Numbered List"
                        >
                          <ListOrdered className="w-4 h-4 text-gray-700" />
                        </button>
                      </div>

                      {/* Editable Content Area */}
                      <div
                        ref={editorRef}
                        contentEditable
                        suppressContentEditableWarning
                        onInput={(e) =>
                          setNotesContent(e.currentTarget.innerHTML)
                        }
                        className="p-4 min-h-[200px] focus:outline-none text-gray-700 prose prose-sm max-w-none"
                        style={{
                          wordBreak: "break-word",
                        }}
                      />
                    </div>
                  )}

                  {!isEditingNotes && (
                    <div
                      dangerouslySetInnerHTML={{ __html: notesContent }}
                      className="text-gray-700 prose prose-sm max-w-none"
                    />
                  )}
                </div>
              )}
              {activeTab === "resources" && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Additional Resources
                  </h3>
                  <a
                    href="#"
                    className="block p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-orange-500" />
                      <div>
                        <p className="font-medium text-gray-900">
                          Water Cycle Diagram (PDF)
                        </p>
                        <p className="text-sm text-gray-600">
                          Visual guide to the water cycle
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="block p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-orange-500" />
                      <div>
                        <p className="font-medium text-gray-900">
                          Reading: Climate and Weather
                        </p>
                        <p className="text-sm text-gray-600">
                          Chapter 3, pages 45-52
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              )}
              {activeTab === "discussion" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Discussion: Water Cycle & Climate Change
                    </h3>
                    <button className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors">
                      New Thread
                    </button>
                  </div>

                  {/* Discussion Threads */}
                  <div className="space-y-4">
                    {discussionThreads.map((thread) => (
                      <div
                        key={thread.id}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors"
                      >
                        {/* Main Thread */}
                        <div className="flex gap-3 p-4">
                          {/* Vote Column */}
                          <div className="flex flex-col items-center gap-1 pt-1">
                            <button className="p-1 hover:bg-orange-50 rounded transition-colors group">
                              <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-orange-500" />
                            </button>
                            <span className="text-sm font-semibold text-gray-700">
                              {thread.upvotes - thread.downvotes}
                            </span>
                            <button className="p-1 hover:bg-blue-50 rounded transition-colors group">
                              <ArrowDown className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                            </button>
                          </div>

                          {/* Content Column */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-400"></div>
                              <span className="text-sm font-semibold text-gray-900">
                                {thread.author}
                              </span>
                              <span className="text-xs text-gray-500">
                                • {thread.timeAgo}
                              </span>
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed mb-3">
                              {thread.content}
                            </p>
                            <div className="flex items-center gap-4">
                              <button
                                onClick={() =>
                                  setReplyingTo(
                                    replyingTo === thread.id ? null : thread.id,
                                  )
                                }
                                className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-orange-600 font-medium transition-colors"
                              >
                                <Reply className="w-4 h-4" />
                                Reply
                              </button>
                              <button className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900 font-medium transition-colors">
                                <MessageSquare className="w-4 h-4" />
                                {thread.replies.length}{" "}
                                {thread.replies.length === 1
                                  ? "reply"
                                  : "replies"}
                              </button>
                              <button className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900 transition-colors ml-auto">
                                <MoreHorizontal className="w-4 h-4" />
                              </button>
                            </div>

                            {/* Reply Input */}
                            {replyingTo === thread.id && (
                              <div className="mt-3 pl-4 border-l-2 border-gray-200">
                                <textarea
                                  placeholder="Write a reply..."
                                  className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                                  rows={3}
                                />
                                <div className="flex gap-2 mt-2">
                                  <button className="px-3 py-1.5 bg-orange-500 text-white text-xs font-medium rounded-lg hover:bg-orange-600 transition-colors">
                                    Post Reply
                                  </button>
                                  <button
                                    onClick={() => setReplyingTo(null)}
                                    className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg hover:bg-gray-200 transition-colors"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            )}

                            {/* Nested Replies */}
                            {thread.replies.length > 0 && (
                              <div className="mt-4 space-y-3 pl-4 border-l-2 border-gray-200">
                                {thread.replies.map((reply) => (
                                  <div key={reply.id} className="flex gap-3">
                                    {/* Reply Vote Column */}
                                    <div className="flex flex-col items-center gap-1 pt-1">
                                      <button className="p-0.5 hover:bg-orange-50 rounded transition-colors group">
                                        <ArrowUp className="w-4 h-4 text-gray-400 group-hover:text-orange-500" />
                                      </button>
                                      <span className="text-xs font-semibold text-gray-600">
                                        {reply.upvotes - reply.downvotes}
                                      </span>
                                      <button className="p-0.5 hover:bg-blue-50 rounded transition-colors group">
                                        <ArrowDown className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                                      </button>
                                    </div>

                                    {/* Reply Content */}
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-2 mb-1.5">
                                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-blue-400"></div>
                                        <span className="text-xs font-semibold text-gray-900">
                                          {reply.author}
                                        </span>
                                        <span className="text-xs text-gray-500">
                                          • {reply.timeAgo}
                                        </span>
                                      </div>
                                      <p className="text-xs text-gray-700 leading-relaxed mb-2">
                                        {reply.content}
                                      </p>
                                      <div className="flex items-center gap-3">
                                        <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-orange-600 font-medium transition-colors">
                                          <Reply className="w-3 h-3" />
                                          Reply
                                        </button>
                                        <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-900 transition-colors">
                                          <MoreHorizontal className="w-3 h-3" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Load More */}
                  <button className="w-full py-3 text-sm text-gray-600 hover:text-gray-900 font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    Load More Discussions
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="h-screen flex flex-col gap-6 sticky top-0">
          {/* Lesson Components Tabs */}
          <div className="bg-white rounded-xl shadow-sm p-2 flex-shrink-0">
            <div className="flex gap-1 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setActiveComponent("content")}
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg transition-all ${
                  activeComponent === "content"
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span className="text-xs font-medium hidden sm:inline">
                  Content
                </span>
              </button>
              <button
                onClick={() => setActiveComponent("objectives")}
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg transition-all ${
                  activeComponent === "objectives"
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Target className="w-4 h-4" />
                <span className="text-xs font-medium hidden sm:inline">
                  Objectives
                </span>
              </button>
              <button
                onClick={() => setActiveComponent("assignments")}
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg transition-all ${
                  activeComponent === "assignments"
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span className="text-xs font-medium hidden sm:inline">
                  Assignments
                </span>
              </button>
              <button
                onClick={() => setActiveComponent("vocab")}
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg transition-all ${
                  activeComponent === "vocab"
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <BookMarked className="w-4 h-4" />
                <span className="text-xs font-medium hidden sm:inline">
                  Vocab
                </span>
              </button>
            </div>
          </div>

          {/* Dynamic Content Pane - Scrollable */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex-1 overflow-y-auto">
            {activeComponent === "content" && (
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Detailed Lesson Description
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  This module covers the fundamentals of atmospheric water
                  processes. Students will understand how water moves through
                  different states and the role of temperature and pressure.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-600">Duration: 45 minutes</p>
                  <p className="text-xs text-gray-600">
                    Difficulty: Intermediate
                  </p>
                </div>
              </div>
            )}
            {activeComponent === "objectives" && (
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Learning Objectives
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Explain the water cycle process</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Identify three states of water</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Describe precipitation formation</span>
                  </li>
                </ul>
              </div>
            )}
            {activeComponent === "assignments" && (
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Assignment Instructions
                </h4>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-3 rounded">
                  <p className="text-sm font-medium text-orange-900 mb-1">
                    Due: Friday, 5:00 PM
                  </p>
                  <p className="text-sm text-orange-800">
                    Create a diagram showing the water cycle and label all key
                    processes.
                  </p>
                </div>
              </div>
            )}
            {activeComponent === "vocab" && (
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Vocabulary Terms & Definitions
                </h4>
                <div className="space-y-3">
                  <div className="border-l-2 border-blue-500 pl-3">
                    <p className="text-sm font-semibold text-gray-900">
                      Evaporation
                    </p>
                    <p className="text-xs text-gray-600">
                      The process of water turning into vapor
                    </p>
                  </div>
                  <div className="border-l-2 border-blue-500 pl-3">
                    <p className="text-sm font-semibold text-gray-900">
                      Condensation
                    </p>
                    <p className="text-xs text-gray-600">
                      Water vapor cooling and forming droplets
                    </p>
                  </div>
                  <div className="border-l-2 border-blue-500 pl-3">
                    <p className="text-sm font-semibold text-gray-900">
                      Precipitation
                    </p>
                    <p className="text-xs text-gray-600">
                      Water falling from clouds as rain, snow, etc.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* AI Tutor Zone */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-sm p-6 border border-purple-200 flex-shrink-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">AI Tutor Zone</h4>
                <p className="text-xs text-gray-600">Get instant help</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <p className="text-sm text-gray-700 mb-2">
                  💬 Ask me anything about this lesson!
                </p>
                <button className="text-xs text-purple-600 font-medium hover:text-purple-700">
                  Start conversation →
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button className="text-xs bg-white hover:bg-purple-50 border border-purple-200 rounded-lg p-2 text-gray-700 transition-colors">
                  Explain concept
                </button>
                <button className="text-xs bg-white hover:bg-purple-50 border border-purple-200 rounded-lg p-2 text-gray-700 transition-colors">
                  Quiz me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default classroomPage;
