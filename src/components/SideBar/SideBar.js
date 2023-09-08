import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = ({ children }) => {
  return (
    <div class=" bg-white mb-5 md:flex flex-col md:flex-row md:min-h-screen w-full">
      <div
        class="flex flex-col w-full md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0"
        x-data="{ open: false }"
      >
        <div class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
          <a
            href="#"
            class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
          >
            Admin Panel
          </a>
          <button class="rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline">
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
              <path
                x-show="!open"
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
              <path
                x-show="open"
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <nav class="flex-grow text-left md:block font-bold px-4 pb-4 md:pb-0 md:overflow-y-auto">
          <p>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "block font-bold px-4 py-2 mt-2 text-sm  text-gray-900 bg-gray-200 rounded-lg  hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  : "block font-bold px-4 py-2 mt-2 text-sm  text-gray-900  rounded-lg  hover:text-gray-900 hover:bg-gray-200"
              }
              to="/admin/researches"
            >
              Manage Research
            </NavLink>
          </p>
          <p>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "block font-bold px-4 py-2 mt-2 text-sm  text-gray-900 bg-gray-200 rounded-lg  hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  : "block font-bold px-4 py-2 mt-2 text-sm  text-gray-900 rounded-lg  hover:text-gray-900 hover:bg-gray-200"
              }
              to="/admin/blogs"
            >
              Manage Blog
            </NavLink>
          </p>
          <p>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "block font-bold px-4 py-2 mt-2 text-sm  text-gray-900 bg-gray-200 rounded-lg  hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  : "block font-bold px-4 py-2 mt-2 text-sm  text-gray-900 rounded-lg  hover:text-gray-900 hover:bg-gray-200"
              }
              to="/admin/manage-dashboard"
            >
              Manage Dashboard
            </NavLink>
          </p>
          <p>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "block font-bold px-4 py-2 mt-2 text-sm  text-gray-900 bg-gray-200 rounded-lg  hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  : "block font-bold px-4 py-2 mt-2 text-sm  text-gray-900  rounded-lg  hover:text-gray-900 hover:bg-gray-200"
              }
              to="/admin/users"
            >
              System Users
            </NavLink>
          </p>
        </nav>
      </div>
      <div className="flex flex-col p-3">{children}</div>
    </div>
  );
};

export default SideBar;
