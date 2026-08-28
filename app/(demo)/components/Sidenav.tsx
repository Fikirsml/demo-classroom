import React from "react";
import {
  Grid3x3,
  FolderOpen,
  PenSquare,
  Send,
  Grid2x2,
  MessageSquare,
  Headphones,
  Settings,
  LogOut,
} from "lucide-react";

function Sidenav() {
  return (
    <div className="h-screen w-20   flex flex-col items-center py-6">
      {/* Navigation Icons */}
      <div className="flex flex-col items-center gap-4 flex-1">
        {/* Grid Icon */}
        <button className="p-3 rounded-lg hover:bg-gray-200 transition-colors text-gray-600">
          <Grid3x3 className="w-5 h-5" />
        </button>

        {/* Folder Icon - Active State */}
        <button className="p-3 rounded-2xl bg-orange-500 hover:bg-orange-600 transition-colors text-white shadow-lg">
          <FolderOpen className="w-5 h-5" />
        </button>

        {/* Edit Icon */}
        <button className="p-3 rounded-lg hover:bg-gray-200 transition-colors text-gray-600">
          <PenSquare className="w-5 h-5" />
        </button>

        {/* Send Icon */}
        <button className="p-3 rounded-lg hover:bg-gray-200 transition-colors text-gray-600">
          <Send className="w-5 h-5" />
        </button>

        {/* Grid 2x2 Icon */}
        <button className="p-3 rounded-lg hover:bg-gray-200 transition-colors text-gray-600">
          <Grid2x2 className="w-5 h-5" />
        </button>

        {/* Message Square Icon */}
        <button className="p-3 rounded-lg hover:bg-gray-200 transition-colors text-gray-600">
          <MessageSquare className="w-5 h-5" />
        </button>

        {/* Headphones Icon */}
        <button className="p-3 rounded-lg hover:bg-gray-200 transition-colors text-gray-600">
          <Headphones className="w-5 h-5" />
        </button>

        {/* Settings Icon */}
        <button className="p-3 rounded-lg hover:bg-gray-200 transition-colors text-gray-600">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      {/* Logout Button at Bottom */}
      <div className="mt-auto">
        <button className="p-3 rounded-lg hover:bg-gray-200 transition-colors text-gray-600">
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
