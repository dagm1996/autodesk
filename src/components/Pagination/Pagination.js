import React, { useState, useEffect } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import moment from "moment";

const Pagination = ({
  data,
  query,
  category,
  date,
  noOfItems,
  getPaginatedItems,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(noOfItems);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  // console.log(data);
  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data && data?.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    getPaginatedItems(currentItems);
  }, [currentPage, query, category, date, data]);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={`px-2 py-1 ${
            currentPage == number
              ? "bg-blue-500 text-white cursor-pointer"
              : //   ? "bg-blue-500 text-white cursor-pointer w-7 rounded-full"
                "bg-white text-blue-500 cursor-pointer rounded-full"
          }`}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const NextBtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const PrevBtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <div>
      <ul className="flex gap-2 justify-center m-3">
        <li
          className={`px-2 py-1 bg-white text-blue-500
          `}
        >
          <button
            onClick={PrevBtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            <GrPrevious />
          </button>
        </li>

        {renderPageNumbers}

        <li
          className={`px-2 py-1 bg-white text-blue-500
          `}
        >
          <button
            onClick={NextBtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            <GrNext />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
