import React, { useEffect, useState } from "react";
import DateSelect from "../DateFilter/DateFilter";

const BlogFilter = ({
  categoryList,
  category,
  setCategory,
  query,
  setQuery,
  date,
  setDate,
  blog,
  setBlog,
  allData,
}) => {
  const filter = () => {
    if (query) {
      category && date
        ? setBlog(
            allData
              .filter((item) =>
                category == "all" ? item.category : item.category == category
              )
              .filter((item) => {
                return (
                  new Date(item.year).getTime() >= new Date(date).getTime()
                );
              })
              .filter((item) => {
                return item.title.toLowerCase().startsWith(query);
              })
          )
        : category
        ? setBlog(
            allData
              .filter((item) =>
                category == "all" ? item.category : item.category == category
              )
              .filter((item) => {
                return item.title.toLowerCase().startsWith(query);
              })
          )
        : date
        ? setBlog(
            allData
              ?.filter((item) => {
                return (
                  new Date(item.year).getTime() >= new Date(date).getTime()
                );
              })
              .filter((item) => {
                return item.title.toLowerCase().startsWith(query);
              })
          )
        : setBlog(
            allData.filter((item) => {
              return item.title.toLowerCase().startsWith(query);
            })
          );
    }
    if (category) {
      query && date
        ? setBlog(
            allData
              .filter((item) => {
                return item.title.toLowerCase().startsWith(query);
              })
              .filter((item) => {
                return (
                  new Date(item.year).getTime() >= new Date(date).getTime()
                );
              })
              .filter((item) =>
                category == "all" ? item.category : item.category == category
              )
          )
        : query
        ? setBlog(
            allData
              .filter((item) => {
                return item.title.toLowerCase().startsWith(query);
              })
              .filter((item) =>
                category == "all" ? item.category : item.category == category
              )
          )
        : date
        ? setBlog(
            allData
              ?.filter((item) => {
                return (
                  new Date(item.year).getTime() >= new Date(date).getTime()
                );
              })
              .filter((item) =>
                category == "all" ? item.category : item.category == category
              )
          )
        : setBlog(
            allData.filter((item) =>
              category == "all" ? item.category : item.category == category
            )
          );
    }
    if (date) {
      category && query
        ? setBlog(
            allData
              .filter((item) => {
                return item.title.toLowerCase().startsWith(query);
              })
              .filter((item) =>
                category == "all" ? item.category : item.category == category
              )
              .filter((item) => {
                return (
                  new Date(item.year).getTime() >= new Date(date).getTime()
                );
              })
          )
        : query
        ? setBlog(
            allData
              .filter((item) => {
                return item.title.toLowerCase().startsWith(query);
              })
              .filter((item) => {
                return (
                  new Date(item.year).getTime() >= new Date(date).getTime()
                );
              })
          )
        : category
        ? setBlog(
            allData
              ?.filter((item) =>
                category == "all" ? item.category : item.category == category
              )
              .filter((item) => {
                return (
                  new Date(item.year).getTime() >= new Date(date).getTime()
                );
              })
          )
        : setBlog(
            allData.filter((item) => {
              return new Date(item.year).getTime() >= new Date(date).getTime();
            })
          );
    }
  };

  // console.log(category);
  const clearFilter = () => {
    setBlog(allData);
    setQuery("");
    setCategory("");
    setDate("");
  };

  useEffect(() => {
    filter();
  }, [query, category, date]);

  return (
    <section
      className="flex gap-5
      "
    >
      {/* Category Filter */}
      <div>
        <label
          for="countries"
          class="block  mb-2 text-sm font-bold text-gray-900 dark:text-gray-500"
        >
          Category
        </label>
        <select
          id="countries"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-blue-500 dark:placeholder-gray-400 dark:text-grey-900 font-bold dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="all">All</option>
          {categoryList?.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
      {/* Date Filter */}
      <DateSelect selectedDate={date} setSelectedDate={setDate} />

      {/* Clear Filter */}
      <div className="flex flex-col justify-between">
        <div></div>
        <button
          className="bg-gray-700 h-9 px-3 rounded-md text-white ease-in-out duration-500  hover:bg-red-500 hover:text-white font-semibold"
          onClick={clearFilter}
        >
          clear Filter
        </button>
      </div>
      {/* Search Filter */}
      <div class="relative ml-auto p-3 border border-gray-200 rounded-lg w-full max-w-lg">
        <input
          type="text"
          class="rounded-md w-full p-3 "
          placeholder="Search by Research Name"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />

        <button type="submit" class="absolute right-6 top-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default BlogFilter;
