"use client";

import React, { useState } from "react";
import SidebarAdmin from "./SidebarAdmin";
import Sidebar from "./Sidebar";
import TreeExample from "./SidebarAdmin";

const ImpersonateSidebar = () => {
  const [showUserSidebar, setShowUserSidebar] = useState(false);

  const toggleView = () => {
    setShowUserSidebar(!showUserSidebar);
  };

  return (
    <div className="flex h-screen">
      <TreeExample />

      <div className="flex-grow bg-gray-100">
        <button
          onClick={toggleView}
          className="absolute top-8 left-52 z-50 px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-500 focus:outline-none"
        >
          {showUserSidebar ? "Admin Mode" : "User Mode"}
        </button>
      </div>
      {showUserSidebar && (
        <div className="w-52 h-full transition-all duration-500">
          <Sidebar />
        </div>
      )}
    </div>
  );
};

export default ImpersonateSidebar;
