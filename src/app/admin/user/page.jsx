"use client";
import React, { useState, useEffect } from "react";
import AmoliChart from "@/components/AmoliChart";
import TalimDonutChart from "@/components/TalimBisoyChart";
import Tally from "@/components/Tally";

// Import data for Faysal and Jewel
import { allData } from "@/app/data/data_faysal";

import { useSelectedUser } from "@/providers/treeProvider";
import ReportTable from "@/components/ReportTableMonthly";

import { aggregateUserData } from "@/components/MergedFunction";

const Dashboard = () => {
  const { selectedUser } = useSelectedUser();

  console.log("User: ", selectedUser);

  // const userEmail = localStorage.getItem("userEmail");
  const userEmail =
    typeof window !== "undefined"
      ? localStorage.getItem("userEmail")
      : "moni@gmail.com";

  let dashboardData;

  if (selectedUser === "rifat@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "faysal@gmail.com",
        "jewel@gmail.com",
        "riyad@gmail.com",
        "nazmul@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "akash@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "ripon@gmail.com",
        "sumon@gmail.com",
        "taskin@gmail.com",
        "shoriful@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "toyon@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "faysal@gmail.com",
        "jewel@gmail.com",
        "riyad@gmail.com",
        "nazmul@gmail.com",
        "ripon@gmail.com",
        "sumon@gmail.com",
        "taskin@gmail.com",
        "shoriful@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "zisan@gmail.com") {
    dashboardData = aggregateUserData(
      ["faysal@gmail.com", "jewel@gmail.com"],
      allData
    );
  } else if (selectedUser === "tauhid@gmail.com") {
    dashboardData = aggregateUserData(
      ["riyad@gmail.com", "nazmul@gmail.com"],
      allData
    );
  } else if (selectedUser === "sadman@gmail.com") {
    dashboardData = aggregateUserData(
      ["ripon@gmail.com", "sumon@gmail.com"],
      allData
    );
  } else if (selectedUser === "saurav@gmail.com") {
    dashboardData = aggregateUserData(
      ["taskin@gmail.com", "shoriful@gmail.com"],
      allData
    );
  } else if (selectedUser === "taijul@gmail.com") {
    dashboardData = aggregateUserData(
      ["mehedi@gmail.com", "masum@gmail.com"],
      allData
    );
  } else if (selectedUser === "ripon@gmail.com") {
    dashboardData = aggregateUserData(
      ["amirul@gmail.com", "jahidul@gmail.com"],
      allData
    );
  } else if (selectedUser === "tamim@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "mehedi@gmail.com",
        "masum@gmail.com",
        "amirul@gmail.com",
        "jahidul@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "aftab@gmail.com") {
    dashboardData = aggregateUserData(
      ["javed@gmail.com", "ashraful@gmail.com"],
      allData
    );
  } else if (selectedUser === "salek@gmail.com") {
    dashboardData = aggregateUserData(
      ["mehmed@gmail.com", "osman@gmail.com"],
      allData
    );
  } else if (selectedUser === "hridoy@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "mehedi@gmail.com",
        "masum@gmail.com",
        "amirul@gmail.com",
        "jahidul@gmail.com",
        "javed@gmail.com",
        "ashraful@gmail.com",
        "mehmed@gmail.com",
        "osman@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "tanzid@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "javed@gmail.com",
        "ashraful@gmail.com",
        "mehmed@gmail.com",
        "osman@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "estiak@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "faysal@gmail.com",
        "jewel@gmail.com",
        "riyad@gmail.com",
        "nazmul@gmail.com",
        "ripon@gmail.com",
        "sumon@gmail.com",
        "taskin@gmail.com",
        "shoriful@gmail.com",
        "mehedi@gmail.com",
        "masum@gmail.com",
        "amirul@gmail.com",
        "jahidul@gmail.com",
        "javed@gmail.com",
        "ashraful@gmail.com",
        "mehmed@gmail.com",
        "osman@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "shezaan@gmail.com") {
    dashboardData = aggregateUserData(
      ["imad@gmail.com", "naim@gmail.com"],
      allData
    );
  } else if (selectedUser === "mughdo@gmail.com") {
    dashboardData = aggregateUserData(
      ["sayeed@gmail.com", "sajeeb@gmail.com"],
      allData
    );
  } else if (selectedUser === "liton@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "imad@gmail.com",
        "naim@gmail.com",
        "sayeed@gmail.com",
        "sajeeb@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "mahfuz@gmail.com") {
    dashboardData = aggregateUserData(
      ["sarjees@gmail.com", "rafi@gmail.com"],
      allData
    );
  } else if (selectedUser === "asif@gmail.com") {
    dashboardData = aggregateUserData(
      ["nahid@gmail.com", "hasnat@gmail.com"],
      allData
    );
  } else if (selectedUser === "shakil@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "imad@gmail.com",
        "naim@gmail.com",
        "sayeed@gmail.com",
        "sajeeb@gmail.com",
        "sarjees@gmail.com",
        "rafi@gmail.com",
        "nahid@gmail.com",
        "hasnat@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "saif@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "sarjees@gmail.com",
        "rafi@gmail.com",
        "nahid@gmail.com",
        "hasnat@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "babor@gmail.com") {
    dashboardData = aggregateUserData(
      ["rizwan@gmail.com", "shaheen@gmail.com"],
      allData
    );
  } else if (selectedUser === "nasim@gmail.com") {
    dashboardData = aggregateUserData(
      ["ameer@gmail.com", "hasnain@gmail.com"],
      allData
    );
  } else if (selectedUser === "raju@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "rizwan@gmail.com",
        "shaheen@gmail.com",
        "ameer@gmail.com",
        "hasnain@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "imran@gmail.com") {
    dashboardData = aggregateUserData(
      ["rashid@gmail.com", "gurbaz@gmail.com"],
      allData
    );
  } else if (selectedUser === "faruque@gmail.com") {
    dashboardData = aggregateUserData(
      ["omarzai@gmail.com", "nazibullah@gmail.com"],
      allData
    );
  } else if (selectedUser === "mezbah@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "rashid@gmail.com",
        "gurbaz@gmail.com",
        "omarzai@gmail.com",
        "nazibullah@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "pollob@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "rashid@gmail.com",
        "gurbaz@gmail.com",
        "omarzai@gmail.com",
        "nazibullah@gmail.com",
        "rizwan@gmail.com",
        "shaheen@gmail.com",
        "ameer@gmail.com",
        "hasnain@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "ratul@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "imad@gmail.com",
        "naim@gmail.com",
        "sayeed@gmail.com",
        "sajeeb@gmail.com",
        "sarjees@gmail.com",
        "rafi@gmail.com",
        "nahid@gmail.com",
        "hasnat@gmail.com",
        "rashid@gmail.com",
        "gurbaz@gmail.com",
        "omarzai@gmail.com",
        "nazibullah@gmail.com",
        "rizwan@gmail.com",
        "shaheen@gmail.com",
        "ameer@gmail.com",
        "hasnain@gmail.com",
      ],
      allData
    );
  } else if (selectedUser === "moni@gmail.com") {
    dashboardData = aggregateUserData(
      [
        "faysal@gmail.com",
        "jewel@gmail.com",
        "riyad@gmail.com",
        "nazmul@gmail.com",
        "ripon@gmail.com",
        "sumon@gmail.com",
        "taskin@gmail.com",
        "shoriful@gmail.com",
        "mehedi@gmail.com",
        "masum@gmail.com",
        "amirul@gmail.com",
        "jahidul@gmail.com",
        "javed@gmail.com",
        "ashraful@gmail.com",
        "mehmed@gmail.com",
        "osman@gmail.com",
        "imad@gmail.com",
        "naim@gmail.com",
        "sayeed@gmail.com",
        "sajeeb@gmail.com",
        "sarjees@gmail.com",
        "rafi@gmail.com",
        "nahid@gmail.com",
        "hasnat@gmail.com",
        "rashid@gmail.com",
        "gurbaz@gmail.com",
        "omarzai@gmail.com",
        "nazibullah@gmail.com",
        "rizwan@gmail.com",
        "shaheen@gmail.com",
        "ameer@gmail.com",
        "hasnain@gmail.com",
      ],
      allData
    );
  } else if (!selectedUser) {
    dashboardData = allData[userEmail];
  } else {
    dashboardData = allData[selectedUser];
  }
  // return null;

  return (
    <div className="flex flex-col h-screen gap-4">
      {/* Dashboard Main Content */}
      <div className="grow grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8 pb-4 pt-2">
        <AmoliChart
          data={dashboardData.AmoliChartData}
          innerRadius={70}
          outerRadius={115}
          startAngle={90}
          endAngle={450}
        />

        <TalimDonutChart
          data1={dashboardData.TalimDonutChartData1}
          data2={dashboardData.TalimDonutChartData2}
          innerRadius={45}
          outerRadius={80}
          startAngle={90}
          endAngle={450}
        />

        {dashboardData.TallyData.map((data, index) => (
          <Tally key={index} data={data} />
        ))}
      </div>

      <div className="border rounded-lg">
        <ReportTable />
      </div>
    </div>
  );
};

export default Dashboard;
