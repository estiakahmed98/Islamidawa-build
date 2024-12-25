"use client";
import { useRouter } from "next/navigation";

import React from "react";

const ButtonsGroup = () => {
  const router = useRouter();
  return (
    <div className="flex gap-4">
      <button
        onClick={() => router.push("/dashboard/amoli-muhasaba")}
        className="px-4 py-2 text-white border-2 bg-teal-700 rounded-md"
      >
        তথ্য দিন
      </button>
      <button
        onClick={() =>
          router.push("/dashboard/amoli-muhasaba/amoli-muhasaba-report")
        }
        className="px-4 py-2 text-teal-700 font-medium border border-teal-700  rounded-md"
      >
        প্রতিবেদন
      </button>
    </div>
  );
};
export default ButtonsGroup;
