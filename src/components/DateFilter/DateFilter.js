import React, { useState, useRef, useEffect } from "react";
// import Transition from "../utils/Transition";
import moment from "moment";

function DateSelect({ selectedDate, setSelectedDate }) {
  const options = [
    {
      id: 4,
      period: "All Time",
      value: "",
    },
    {
      id: 0,
      period: "Today",
      value: moment(new Date().setHours(0, 0, 0, 0)).format("L"),
    },
    {
      id: 1,
      period: "Last 7 Days",
      value: moment(new Date(new Date() - 7 * 24 * 60 * 60 * 1000)).format("L"),
    },
    {
      id: 2,
      period: "Last Month",
      value: moment(
        new Date(new Date().setMonth(new Date().getMonth() - 1))
      ).format("L"),
    },
    {
      id: 3,
      period: "Last 12 Months",
      value: moment(
        new Date(new Date().setFullYear(new Date().getFullYear() - 1))
      ).format("L"),
    },
  ];
  //   console.log(selectedDate < moment(new Date("08/28/2023")).format("L"));
  return (
    <div className="font-medium text-sm text-slate-600">
      <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">
        Choose Period
      </label>
      <select
        name="date"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => {
          setSelectedDate(e.target.value);
          console.log(e.target.value);
        }}
        value={selectedDate}
      >
        {options.map((option) => {
          return (
            <option
              key={option.id}
              className={`flex items-center font-bold w-full hover:bg-slate-50 py-1 px-3 cursor-pointer`}
              value={option.value}
            >
              {option.period}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default DateSelect;
