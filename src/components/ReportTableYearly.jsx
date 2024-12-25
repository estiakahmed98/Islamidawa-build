//in ReportTableYearly.jsx class

"use client";

import { yearlyTableData } from "@/app/data/TableData";
import fileDownload from "js-file-download";
import jsPDF from "jspdf";
import React from "react";
import "jspdf-autotable";
import { useState, useEffect } from "react";

const ReportTableYearly = () => {
  const [monthName, setMonth] = useState("");

  // Generate days for the current month
  useEffect(() => {
    const today = new Date();
    const x = today.toLocaleString("default", { month: "long" }); // Full month name

    setMonth(x);
  }, []);

  const convertToCSV = (data) => {
    // Extract headers dynamically
    const headers = [
      "id",
      "name",
      ...Object.keys(data[0]?.values || {}).map((key) => key), // Add day keys dynamically
    ];

    // Generate rows with flattened values
    const rows = data.map((row) => {
      const values = row.values || {};
      return [
        row.id,
        row.name,
        ...Object.values(values), // Flatten the values object
      ];
    });

    // Combine headers and rows into a CSV string
    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    return csv;
  };

  const convertToPDF = (data) => {
    const doc = new jsPDF();
    doc.text("Yearly Table Data", 14, 10); // Title at the top of the PDF

    // Define headers: First column is "Title" (datafile title), followed by months
    const headers = ["Title", ...Object.keys(data[0]?.values || {})]; // Months as headers

    // Generate rows: Each row starts with `name`, followed by the corresponding monthly values
    const rows = data.map((row) => [
      row.name, // First column is the title
      ...Object.values(row.values || {}), // Monthly values in the subsequent columns
    ]);

    // Generate the table in the PDF
    doc.autoTable({
      head: [headers], // Use headers for columns
      body: rows, // Rows contain data for each title
      startY: 20, // Start below the title text
      theme: "striped",
      headStyles: {
        fillColor: [22, 160, 133], // Custom color for the header
        halign: "center", // Center align header text
      },
      bodyStyles: {
        textColor: 50,
        halign: "center", // Center align body text
      },
      styles: {
        halign: "center", // Default center alignment
      },
    });

    return doc;
  };

  const handleDownloadCSV = () => {
    const csv = convertToCSV(yearlyTableData);
    fileDownload(csv, "table-data.csv");
  };

  const handleDownloadPDF = () => {
    const pdf = convertToPDF(yearlyTableData);
    pdf.save("table-data.pdf");
  };

  //   const months = Array.from({ length: 12 }, (months, i) => ` ${i + 1}`);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="overflow-x-auto p-2 grow">
      <table className="table-auto border-collapse border border-gray-300 w-full text-xl">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">আ’মলি মুহাসাবা</th>
            {months.map((month, index) => (
              <th
                key={index}
                className="border border-gray-300 p-2 text-center"
              >
                {month}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {yearlyTableData.map((row) => (
            <tr key={row.id}>
              <td className="border border-gray-300 bg-gray-100 p-4 font-medium">
                {row.name}
              </td>
              {Object.entries(row.values || []).map(([key, value]) => (
                <td
                  key={key}
                  className="border border-gray-300 p-4 text-center"
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end gap-4 pt-4">
        <button
          className="p-2 text-white border-2 bg-teal-700 rounded-md"
          onClick={handleDownloadCSV}
        >
          Download CSV
        </button>
        <button
          className="p-2 text-white border-2 bg-teal-700 rounded-md"
          onClick={handleDownloadPDF}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default ReportTableYearly;
