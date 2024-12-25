"use client"
import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const SignUp = () => {
    
   // Initial from data
   const [formData, setFormData] = useState({
    userType: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  

  //form input change method
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

   // Submit From Method
   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });


      const data = await res.json();
      console.log("Data is::");

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setMessage("Signup successful!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  
  return (
    <div className="flex justify-center">
        <div>
          <form onSubmit={handleSubmit} className="max-w-lg p-8 bg-gray-50 rounded-md shadow-lg">
            {/* Usernaname */}
            <h1 className="text-md font-bold mb-6 text-center text-gray-800">
              ইসলামি দাওয়াহ ইনস্টিটিউট বাংলাদেশ
            </h1>

            <div className="mb-4">
              <label
                htmlFor="userType"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                User Type
              </label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                className="w-full p-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="" disabled>Select</option>
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
                <option value="viewer">Viewer</option>
              </select>
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email or username"
                className="w-full p-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full p-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex justify-end">
             
              {/* Submit Button */}
              <button
                type="submit"
                className="w-28 p-2 text-white bg-teal-600 rounded-md hover:bg-teal-700"
              >
                Register
              </button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default SignUp;