"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const page = ({ children }) => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[calc(100vh-104px)] overflow-hidden">
        <Sidebar />
        <div className="p-6 grow overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default page;
