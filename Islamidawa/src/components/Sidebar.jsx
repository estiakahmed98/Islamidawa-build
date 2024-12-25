"use client";
import React from "react";
import { useState } from "react";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaQuran } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { FaPeoplePulling } from "react-icons/fa6";
import { MdOutlineMosque } from "react-icons/md";
import { BsMoonStars } from "react-icons/bs";
import { MdOutlineTravelExplore } from "react-icons/md";
import { LuArrowLeftFromLine } from "react-icons/lu";
import { LuArrowRightToLine } from "react-icons/lu";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegFileAlt } from "react-icons/fa";

import { usePathname } from "next/navigation"; // Use usePathname for the App Router
import Link from "next/link";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  const pathname = usePathname(); // Get the current route
  const isActive = (path) => pathname === path; // Check if the current path matches

  return (
    <aside
      className={`flex flex-col shrink-0 h-full ${
        isCollapsed ? "w-[68px]" : "w-52"
      } transition-width duration-500 bg-[#155E75] overflow-x-hidden border-t border-slate-700`}
    >
      <div className="p-4 text-right">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none transform transition-transform duration-300"
        >
          {isCollapsed ? (
            <LuArrowRightToLine className="size-6 font-extrabold flex justify-center text-center" />
          ) : (
            <LuArrowLeftFromLine className="size-6 flex justify-end font-extrabold" />
          )}
        </button>
      </div>

      <nav className="p-4 grow overflow-y-auto overflow-x-hidden hide-scrollbar">
        <ul className="space-y-2">
          <Link
            href="/dashboard"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/dashboard")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <LuLayoutDashboard className="size-5" />
            </div>
            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              ড্যাশবোর্ড
            </li>
          </Link>

          <Link
            href="/dashboard/amoli-muhasaba"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/dashboard/amoli-muhasaba")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <FaRegFileAlt className="size-5" />
            </div>

            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              আ’মলি মুহাসাবা
            </li>
          </Link>

          <Link
            href="/dashboard/moktob"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/dashboard/moktob")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <LiaChalkboardTeacherSolid className="size-5" />
            </div>
            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              মক্তব বিষয়
            </li>
          </Link>

          <Link
            href="/dashboard/talim"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/dashboard/talim")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <FaQuran className="size-5" />
            </div>

            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              তালিম বিষয়
            </li>
          </Link>

          <Link
            href="/dashboard/dayi"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/dashboard/dayi")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <MdOutlinePeopleAlt className="size-5" />
            </div>
            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              দায়ী বিষয়
            </li>
          </Link>

          <Link
            href="/dashboard/dawati"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/dashboard/dawati")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <FaRegHandshake className="size-5" />
            </div>
            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              দাওয়াতি বিষয়
            </li>
          </Link>

          <Link
            href="/dashboard/dawati-mojlis"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/dashboard/dawati-mojlis")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <FaPeoplePulling className="size-5" />
            </div>
            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              দাওয়াতি মজলিশ
            </li>
          </Link>

          <Link
            href="/dashboard/jamat"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/dashboard/jamat")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <MdOutlineMosque className="size-5" />
            </div>
            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              জামাত বিষয়
            </li>
          </Link>

          <Link
            href="/dashboard/dine-fera"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/dashboard/dine-fera")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <BsMoonStars className="size-5" />
            </div>
            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              দ্বীনে ফিরে এসেছে
            </li>
          </Link>

          <Link
            href="/dashboard/sofor"
            className={`flex py-2 px-2 items-center font-medium ${
              isCollapsed ? "gap-0" : "gap-3"
            } whitespace-nowrap ${
              isActive("/dashboard/sofor")
                ? "bg-cyan-600 rounded-md w-full text-white"
                : "hover:text-white text-white/80"
            }`}
          >
            <div>
              <MdOutlineTravelExplore className="size-5" />
            </div>
            <li className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
              সফর বিষয়
            </li>
          </Link>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
