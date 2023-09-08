import React from "react";
import { BsFileLock, BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const AdminLanding = () => {
  return (
    <div class="relative w-full overflow-hidden">
      <div class="md:w-[740px] w-full mt-0 p-3">
        <div class="relative group w-full">
          <div class="absolute -inset-1 bg-gradient-to-r from-[#3A70FE] to-[#C664F7] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <BsFileLock className="w-8 h-8 text-black" />
            <div class="space-y-2">
              <p class="text-slate-800 text-lg">
                Welcome To Admin Dashboard, Andrew
              </p>
              <Link
                to="/admin/researches"
                class="flex gap-2 items-center text-indigo-400 text-lg group-hover:text-slate-800 transition duration-200"
              >
                <BsArrowLeftShort /> Manage Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLanding;
