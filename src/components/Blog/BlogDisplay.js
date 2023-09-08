import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BlogDisplay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState([]);

  let { blogId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:3000/blogData.json")
      .then((data) => {
        // console.log(data.data);
        let foundBlog = data?.data?.find((item) => item.id == blogId);
        let Desc = foundBlog?.description?.split("\n\n");
        setDescription(Desc);
        setData(foundBlog);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  // console.log(data);
  return (
    <section>
      <nav
        class="text-black ml-8 text-lg text-left font-bold my-8"
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
              {data.title}
            </Link>
          </li>
        </ol>
      </nav>
      <div class="max-w-screen-xl mx-auto">
        <main class="mt-10">
          <div
            class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
            style={{ height: "24em" }}
          >
            <div
              class="absolute left-0 bottom-0 w-full h-full z-10"
              style={{
                backgroundImage: `linear-gradient(180deg,transparent,rgba(0,0,0,.7))`,
              }}
            ></div>
            <img
              src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
              class="absolute left-0 top-0 w-full h-full z-0 object-cover"
            />
            <div class="p-4 absolute bottom-0 left-0 z-20">
              <a
                href="#"
                class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
              >
                {data?.category}
              </a>
              <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
                {data?.title}
              </h2>
            </div>
          </div>

          <div class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
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

            {/* <div class="flex items-center justify-end m-5 ">
              <span className="font-bold text-gray-500">
                Was this blog helplful?
              </span>
              <button class="flex items-center ml-6">
                <svg
                  class="w-5 h-5 fill-gray-500 hover:fill-[#3B71FF]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" />
                </svg>
                <span class="ml-2">56</span>
              </button>
              <button class="flex items-center  ml-4">
                <svg
                  class="w-5 h-5 fill-gray-500 hover:fill-red-500  "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" />
                </svg>
                <span class="ml-2">10</span>
              </button>
            </div> */}
          </div>
        </main>
      </div>
    </section>
  );
};

export default BlogDisplay;
