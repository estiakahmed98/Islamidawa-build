"use client";
import React, { useState } from "react";
import AmoliChart from "@/components/AmoliChart";
import TalimDonutChart from "@/components/TalimBisoyChart";
import Tally from "@/components/Tally";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { TabsContent } from "@radix-ui/react-tabs";

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
} from "@/app/data/data_jewel"; // Import Jewel data

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("daily");

  // Function to combine Faysal and Jewel data
  const combineData = (faysalData, jewelData) => {
    return faysalData.map((faysalItem, index) => {
      const jewelItem = jewelData[index];

      // Combine the values and max values
      const combinedValue = (faysalItem.value || 0) + (jewelItem.value || 0);
      const combinedMax = (faysalItem.max || 0) + (jewelItem.max || 0);

      return {
        label: faysalItem.label, // Keep the label the same
        value: combinedValue, // Sum of values
        max: combinedMax, // Sum of max values
      };
    });
  };

  // Combine Faysal and Jewel data for Yearly Tab
  const combinedMoktobData = combineData(
    moktobData_faysal.data,
    moktobData_jewel.data
  );
  const combinedDayeBisoyData = combineData(
    DayeBisoyData_faysal.data,
    DayeBisoyData_jewel.data
  );
  const combinedDawatiBisoyData = combineData(
    DawatiBisoyData_faysal.data,
    DawatiBisoyData_jewel.data
  );
  const combinedDawatiMoslishData = combineData(
    DawatiMoslishData_faysal.data,
    DawatiMoslishData_jewel.data
  );
  const combinedJamatBisoyData = combineData(
    JamatBisoyData_faysal.data,
    JamatBisoyData_jewel.data
  );
  const combinedDineFeraData = combineData(
    DineFeraData_faysal.data,
    DineFeraData_jewel.data
  );
  const combinedSoforBisoyData = combineData(
    SoforBisoyData_faysal.data,
    SoforBisoyData_jewel.data
  );

  // Function to combine Amoli and Talim data
  const combineChartData = (faysalData, jewelData) => {
    // Ensure both datasets are arrays with the same structure
    if (!Array.isArray(faysalData) || !Array.isArray(jewelData)) {
      throw new Error("Input data must be arrays.");
    }

    // Iterate over Faysal data and combine with Jewel data
    return faysalData.map((faysalItem, index) => {
      const jewelItem = jewelData[index];

      // Check if both items exist
      if (!faysalItem || !jewelItem) {
        throw new Error("Mismatch in data structure.");
      }

      // Combine values
      const combinedValue =
        ((faysalItem.value || 0) + (jewelItem.value || 0)) / 2;

      // If "Closed" exists, calculate the new "Closed" value
      const newClosedValue =
        faysalItem.name === "Closed" || jewelItem.name === "Closed"
          ? combinedValue
          : undefined;

      return {
        ...faysalItem, // Keep the structure of Faysal item
        value: combinedValue, // New combined value
        name: faysalItem.name, // Keep the same name
        color: faysalItem.color, // Use Faysal's color
        ...(newClosedValue !== undefined && { closedValue: newClosedValue }), // Add newClosedValue if applicable
      };
    });
  };

  // Example Usage:
  const combinedAmoliChartData = combineChartData(
    AmoliChartData_faysal,
    AmoliChartData_jewel
  );

  const combinedTalimDonutChartData1 = combineChartData(
    TalimDonutChartData1_faysal,
    TalimDonutChartData1_jewel
  );

  const combinedTalimDonutChartData2 = combineChartData(
    TalimDonutChartData2_faysal,
    TalimDonutChartData2_jewel
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8 pb-4 pt-2">
      {/* Render Combined Data */}
      <AmoliChart
        data={combinedAmoliChartData} // Combine Data
        innerRadius={70}
        outerRadius={115}
        startAngle={90}
        endAngle={450}
      />
      <TalimDonutChart
        data1={combinedTalimDonutChartData1} // Combine Data
        data2={combinedTalimDonutChartData2} // Combine Data
        innerRadius={60}
        outerRadius={100}
        startAngle={90}
        endAngle={450}
      />
      <Tally data={{ title: "মক্তব বিষয়", data: combinedMoktobData }} />
      <Tally data={{ title: "দা’য়ী বিষয়", data: combinedDayeBisoyData }} />
      <Tally data={{ title: "দাওয়াতি বিষয়", data: combinedDawatiBisoyData }} />
      <Tally
        data={{ title: "দাওয়াতি মজলিশ", data: combinedDawatiMoslishData }}
      />
      <Tally data={{ title: "জামাত বিষয়", data: combinedJamatBisoyData }} />
      <Tally
        data={{ title: "দ্বীনে ফিরে এসেছে", data: combinedDineFeraData }}
      />
      <Tally data={{ title: "সফর বিষয়", data: combinedSoforBisoyData }} />
    </div>
  );
};

export default Dashboard;
