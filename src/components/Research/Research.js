import React, { useState, useEffect } from "react";
import ResearchCard from "./ResearchCard";
import axios from "axios";
import { GrPrevious, GrNext } from "react-icons/gr";
import LoadingComponent from "../Loading";
import Pagination from "../Pagination/Pagination";
import ResearchFilter from "./ResearchFilter";
import { axiosInstance } from "../../API/api";
import { endPoint } from "../../API/endPoints";
import { useSelector, useDispatch } from "react-redux";
import { getAllResearches } from "../DataLayer/reducer/researchReducer";

const Research = () => {
  const [researches, setResearches] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  let dispatch = useDispatch();
  let {
    researches: researchData,
    isLoading,
    isError,
  } = useSelector((state) => state.researches);

  console.log(researches);

  function getPaginatedItems(items) {
    setPaginatedData(items);
  }

  useEffect(() => {
    dispatch(getAllResearches());

    setFetchedData(researchData);
    setResearches(researchData);
  }, []);

  // category Lists
  let arrayCategory = new Set(fetchedData?.map((item) => item.category));
  let arrayFromSet = Array.from(arrayCategory);

  return (
    <section>
      {/* Fitter */}
      <ResearchFilter
        category={category}
        setCategory={setCategory}
        categoryList={arrayFromSet}
        query={query}
        allData={fetchedData}
        researches={researches}
        setResearches={setResearches}
        setQuery={setQuery}
        date={date}
        setDate={setDate}
      />
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <p className="text-left font-semibold pt-3">
            Total : {researches.length}
          </p>
          <section className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4">
            {paginatedData?.length == 0 ? (
              <h1 className="text-sm mx-auto font-normal">
                Oops No Researches found with this query
              </h1>
            ) : (
              paginatedData?.map((research) => {
                let shortDescription = research?.description?.substring(1, 100);
                return (
                  <ResearchCard
                    key={research.id}
                    title={research.title}
                    description={`${shortDescription}  ...`}
                    image={research.image}
                    author={research["author"]}
                    url={"#"}
                    id={research.id}
                    category={research.category}
                    publishedYear={research.year}
                  />
                );
              })
            )}
          </section>
          <Pagination
            data={researches}
            setPaginatedData={setPaginatedData}
            getPaginatedItems={getPaginatedItems}
            query={query}
            date={date}
            category={category}
            noOfItems={8}
          />
        </>
      )}
    </section>
  );
};

export default Research;
