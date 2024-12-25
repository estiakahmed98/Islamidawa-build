//in ReportTable.jsx com

"use client";
import React, { useState, useEffect } from "react";
import { tableData } from "@/app/data/TableData";

import fileDownload from "js-file-download";
import jsPDF from "jspdf";
import "jspdf-autotable";

const ReportTable = () => {
  // const [tableData, setTableData] = useState([]);
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [monthName, setMonth] = useState("");

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
    doc.text("Table Data", 14, 10);

    // Extract headers and data
    const headers = [monthName, ...data.map((row) => row.name)]; // First column and row names

    // Create rows by pivoting data
    const fields = [
      "ID",
      ...Object.keys(data[0]?.values || {}), // Include dynamic day fields
    ];

    const rows = fields.map((field) => {
      if (field === "ID") {
        return [field, ...data.map((row) => row.id)]; // Add IDs as a row
      } else {
        return [
          field,
          ...data.map((row) => row.values?.[field.toLowerCase()] || ""),
        ];
      }
    });

    // Generate the table
    doc.autoTable({
      head: [headers], // Use headers as column labels
      body: rows, // Pivoted data as rows
      startY: 20, // Start below the title
      theme: "striped",
      headStyles: {
        fillColor: [22, 160, 133],
        halign: "center", // Custom color for header
      },
      bodyStyles: {
        textColor: 50,
      },
      styles: {
        halign: "center", // Default alignment for all cells
      },
    });

    return doc;
  };

  const handleDownloadCSV = () => {
    const csv = convertToCSV(tableData);
    fileDownload(csv, "table-data.csv");
  };

  const handleDownloadPDF = () => {
    const pdf = convertToPDF(tableData);
    pdf.save("table-data.pdf");
  };

  // Generate days for the current month
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const days = new Date(year, month + 1, 0).getDate(); // Total days in month
    const daysArray = Array.from({ length: days }, (_, i) => ` ${i + 1}`);
    const x = today.toLocaleString("default", { month: "long" }); // Full month name

    setDaysInMonth(daysArray);
    setMonth(x);
  }, []);

  // console.log("Table Data", tableData);

  return (
    <div className="overflow-x-auto p-4">
      <table className="table-auto border-collapse border border-gray-300 w-full text-sm md:text-base">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">{monthName}</th>
            {daysInMonth.map((day, index) => (
              <th
                key={index}
                className="border border-gray-300 p-2 text-center"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
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

export default ReportTable;
