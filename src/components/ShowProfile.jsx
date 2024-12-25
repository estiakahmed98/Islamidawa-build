"use client";
import React, { useEffect, useState } from "react";

const ShowProfile = () => {
  const [profile, setProfile] = useState(null); // State for storing profile data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);

        // Retrieve logged-in user's email from localStorage
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
          throw new Error("User not logged in");
        }

        const { email } = JSON.parse(storedUser);
        console.log("Email:", email);

        // Fetch user profile using the email
        const response = await fetch(`/api/profile/${email}`);

        console.log("Response  User:", response);

        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }

        const data = await response.json();
        console.log("User Output Data", data);

        setProfile(data); // Store profile data in state
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-full h-screen p-8 bg-gray-100 shadow-md rounded-md">
      {/* Profile Header */}
      <div className="text-center mb-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-2xl">
          {profile.fullName ? profile.fullName[0].toUpperCase() : "?"}
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mt-2">
          {profile.fullName}
        </h2>
        <p className="text-gray-500 text-sm sm:text-lg">{profile.email}</p>
      </div>

      {/* Profile Details */}
      <div className="space-y-4 text-sm sm:text-lg">
        <p>
          <strong>Name:</strong>
          <span className="ml-4 font-semibold">{profile.fullName}</span>
        </p>
        <p>
          <strong>Email Address:</strong>
          <span className="ml-4 font-semibold">{profile.email}</span>
        </p>
        <p>
          <strong>Phone Number:</strong>
          <span className="ml-4 font-semibold">
            {profile.phoneNumber || "Not Set"}
          </span>
        </p>
        <p>
          <strong>Division:</strong>
          <span className="ml-4 font-semibold">
            {profile.division || "Not Set"}
          </span>
        </p>
        <p>
          <strong>District:</strong>
          <span className="ml-4 font-semibold">
            {profile.district || "Not Set"}
          </span>
        </p>
        <p>
          <strong>Upazila:</strong>
          <span className="ml-4 font-semibold">
            {profile.upazila || "Not Set"}
          </span>
        </p>
        <p>
          <strong>Union:</strong>
          <span className="ml-4 font-semibold">
            {profile.tunion || "Not Set"}
          </span>
        </p>
        <p>
          <strong>Markaz:</strong>
          <span className="ml-4 font-semibold">
            {profile.markaz || "Not Set"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ShowProfile;
