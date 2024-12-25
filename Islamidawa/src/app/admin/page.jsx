import Dashboard from "@/components/Dashboard";
import ReportTable from "@/components/ReportTableMonthly";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col h-screen gap-2">
      <div className="border rounded-lg">
        <Dashboard />
      </div>
      <div className="border rounded-lg">
        <ReportTable/>
      </div>
      
    </div>
  );
};

export default page;
