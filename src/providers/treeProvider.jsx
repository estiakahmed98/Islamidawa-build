"use client";
import React, { createContext, useContext, useState } from "react";
const TreeContext = createContext(undefined);

const TreeProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState("");

  return (
    <TreeContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </TreeContext.Provider>
  );
};

export default TreeProvider;

export const useSelectedUser = () => {
  const context = useContext(TreeContext);
  if (!context) {
    throw new Error("useSelectedUser must be used within a TreeProvider");
  }
  return context; 
};
