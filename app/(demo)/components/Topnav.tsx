import React from "react";
import { Search, Bell, Flame, Zap } from "lucide-react";
import Image from "next/image";

function Topnav() {
  return (
    <div className="w-full bg-white  px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-semibold">
            <span className="text-orange-500">Temar</span>
            <span className="text-gray-800">/i</span>
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 p-1.5 rounded-lg hover:bg-orange-600 transition-colors">
              <Search className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Right Section - Streak, XP, Notifications and User Profile */}
        <div className="flex items-center gap-4">
          {/* Streak Counter */}
          <div className="flex items-center gap-2 bg-orange-50 px-3 py-2 rounded-lg">
            <Flame className="w-5 h-5 text-orange-500" />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-orange-600">
                7 Day Streak
              </span>
            </div>
          </div>

          {/* XP Counter */}
          <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
            <Zap className="w-5 h-5 text-blue-500" />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-blue-600">
                1,250 XP
              </span>
            </div>
          </div>

          {/* Notification Bell */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center overflow-hidden">
              <span className="text-white font-semibold text-sm">JM</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-800">
                Jordan Mitchell
              </span>
              <span className="text-xs text-gray-500">@j_mitchell</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topnav;
