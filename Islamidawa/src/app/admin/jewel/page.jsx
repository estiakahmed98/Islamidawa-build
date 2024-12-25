"use client";

import React, { useEffect, useState } from "react";
import AmoliChart from "@/components/AmoliChart";
import TalimDonutChart from "@/components/TalimBisoyChart";
import Tally from "@/components/Tally";

import {
  moktobData_faysal,
  DayeBisoyData_faysal,
  DawatiBisoyData_faysal,
  DawatiMoslishData_faysal,
  JamatBisoyData_faysal,
  DineFeraData_faysal,
  SoforBisoyData_faysal,
  AmoliChartData_faysal,
  TalimDonutChartData1_faysal,
  TalimDonutChartData2_faysal,
} from "@/app/data/data_faysal";

import {
  moktobData_jewel,
  DayeBisoyData_jewel,
  DawatiBisoyData_jewel,
  DawatiMoslishData_jewel,
  JamatBisoyData_jewel,
  DineFeraData_jewel,
  SoforBisoyData_jewel,
  AmoliChartData_jewel,
  TalimDonutChartData1_jewel,
  TalimDonutChartData2_jewel,
} from "@/app/data/data_jewel";
import Sidebar from "@/components/Sidebar";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    const userEmail = localStorage.getItem("userEmail");

    // Load data based on role and email
    if (userRole === "daye" && userEmail === "faysal@gmail.com") {
      setDashboardData({
        AmoliChartData: AmoliChartData_faysal,
        TalimDonutChartData1: TalimDonutChartData1_faysal,
        TalimDonutChartData2: TalimDonutChartData2_faysal,
        TallyData: [
          moktobData_faysal,
          DayeBisoyData_faysal,
          DawatiBisoyData_faysal,
          DawatiMoslishData_faysal,
          JamatBisoyData_faysal,
          DineFeraData_faysal,
          SoforBisoyData_faysal,
        ],
      });
    } else if (userRole === "daye" && userEmail === "shepon@gmail.com") {
      setDashboardData({
        AmoliChartData: AmoliChartData_jewel,
        TalimDonutChartData1: TalimDonutChartData1_jewel,
        TalimDonutChartData2: TalimDonutChartData2_jewel,
        TallyData: [
          moktobData_jewel,
          DayeBisoyData_jewel,
          DawatiBisoyData_jewel,
          DawatiMoslishData_jewel,
          JamatBisoyData_jewel,
          DineFeraData_jewel,
          SoforBisoyData_jewel,
        ],
      });
    } else {
      setDashboardData(null);
    }
  }, []);

  if (!dashboardData) {
    return <div>Loading or no data available for this user.</div>;
  }

  return (
    <div className="flex grow">
      <div>
        <Sidebar />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8 pb-4 pt-2">
        {/* Render Amoli Chart */}
        <AmoliChart
          data={dashboardData.AmoliChartData}
          innerRadius={70}
          outerRadius={115}
          startAngle={90}
          endAngle={450}
        />

        {/* Render Talim Donut Chart */}
        <TalimDonutChart
          data1={dashboardData.TalimDonutChartData1}
          data2={dashboardData.TalimDonutChartData2}
          innerRadius={50}
          outerRadius={90}
          startAngle={90}
          endAngle={450}
        />

        {/* Render Tally Components */}
        {dashboardData.TallyData.map((data, index) => (
          <Tally key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
