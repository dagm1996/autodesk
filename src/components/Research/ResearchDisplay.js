import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ResearchDisplay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState([]);

  let { researchId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:3000/researchData.json")
      .then((data) => {
        // console.log(data.data);
        let foundResearch = data?.data?.find((item) => item.id == researchId);
        let Desc = foundResearch?.description?.split("\n\n");
        setDescription(Desc);
        setData(foundResearch);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <section>
      <nav
        class="text-black  ml-8 text-lg text-left font-bold my-8"
        aria-label="Breadcrumb"
      >
        <ol class="list-none p-0 inline-flex">
          <li class="flex items-center">
            <Link to={"/"}>Home</Link>
            <svg
              class="fill-current w-3 h-3 mx-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
          </li>
          <li class="flex items-center">
            <Link to={`/${window.location.href.split("/")[3]}`}>
              {window.location.href.split("/")[3][0].toUpperCase() +
                window.location.href
                  .split("/")[3]
                  .slice(1, window.location.href.split("/")[3].length)}
            </Link>
            <svg
              class="fill-current w-3 h-3 mx-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
          </li>
          <li>
            <Link to={"#"} class="text-gray-500" aria-current="page">
              {data?.title}
              {/* {window.location.href.split("/")[4].toString()} */}
            </Link>
          </li>
        </ol>
      </nav>
      <div className="max-w-screen-lg mx-auto">
        <main className="mt-10">
          <div className="mb-4 md:mb-0 w-full mx-auto relative">
            <div className="px-4 lg:px-0">
              <h2 className="text-4xl text-left font-semibold text-gray-800 leading-tight">
                {data?.title}
              </h2>
              <a
                href="#"
                className="py-2 text-green-700 font-medium flex justify-start mb-2"
              >
                {data?.category}
              </a>
            </div>

            <img
              src="https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
              className="w-full object-cover lg:rounded"
              style={{ height: "28em" }}
            />
          </div>

          <div className="flex  flex-col ">
            <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full ">
              {description?.slice(0, 20)?.map((item) => {
                return <p className="pb-6 text-lg text-left">{item}</p>;
              })}
              {isOpen && (
                <>
                  {description?.slice(20, description.length)?.map((item) => {
                    return <p className="pb-6 text-lg text-left">{item}</p>;
                  })}
                </>
              )}
              <div class="mt-10 space-y-20">
                <div class="w-full">
                  <div class="flex-1 h-16 w-96 mx-auto">
                    {!isOpen ? (
                      <div
                        onClick={() => setIsOpen(true)}
                        class="b mb-5 mx-auto h-14 w-64 flex justify-center items-center"
                      >
                        <div class=" h-14 w-64 bg-gradient-to-br from-[#3B71FF] to-[#C764F7] items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
                        <a class="text-center text-white font-semibold z-10 pointer-events-none">
                          Continue Reading
                        </a>
                      </div>
                    ) : (
                      <div
                        onClick={() => setIsOpen(false)}
                        class="b mb-5 mx-auto h-14 w-64 flex justify-center items-center"
                      >
                        <div class=" h-14 w-64 bg-gradient-to-br from-[#3B71FF] to-[#C764F7] items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
                        <a class="text-center text-white font-semibold z-10 pointer-events-none">
                          Collapse
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default ResearchDisplay;
