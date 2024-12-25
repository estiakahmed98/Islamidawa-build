//add this code in users [id] page.jsx file

"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const UserDetail = () => {
  const params = useParams();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.id) return;

    const fetchUser = async () => {
      try {
        console.log("Fetching user with ID:", params.id);

        const response = await fetch(`/api/users/${params.id}`);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch user details: ${response.statusText}`
          );
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
        // router.push("/admin/users"); // Redirect if user not found
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [params.id, router]);

  if (loading) return <p>Loading user details...</p>;
  if (!user) return <p>User not found.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">User Details</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.fullName}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <p>Division: {user.division}</p>
      <p>District: {user.district}</p>
      <p>Upazila: {user.upazila}</p>
      <p>Union: {user.tunion}</p>
    </div>
  );
};

export default UserDetail;
