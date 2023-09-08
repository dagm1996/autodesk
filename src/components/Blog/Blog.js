import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import BlogFilter from "./BlogFilter";
// import { GrNext, GrPrevious } from "react-icons/gr";
import Pagination from "../Pagination/Pagination";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  function getPaginatedItems(items) {
    setPaginatedData(items);
  }

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:3000/blogData.json")
      .then((data) => {
        setFetchedData(data?.data);
        setBlogs(data?.data);
        // console.log(data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  // console.log(blogs);
  // category Lists
  let arrayCategory = new Set(fetchedData?.map((item) => item.category));
  let arrayFromSet = Array.from(arrayCategory);

  return (
    <section>
      <BlogFilter
        category={category}
        setCategory={setCategory}
        categoryList={arrayFromSet}
        query={query}
        allData={fetchedData}
        setQuery={setQuery}
        date={date}
        setDate={setDate}
        blog={blogs}
        setBlog={setBlogs}
      />

      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {paginatedData?.length == 0 ? (
            <h1 className="text-sm mx-auto font-normal">
              Oops No Blogs found with this query
            </h1>
          ) : (
            paginatedData?.map((blog) => {
              let shortDescription = blog?.description?.substring(1, 100);
              return (
                <BlogCard
                  key={blog.id}
                  title={blog.title}
                  description={`${shortDescription}  ...`}
                  image={blog.image}
                  author={blog.author}
                  url={"#"}
                  id={blog.id}
                  category={blog.category}
                  publishedYear={blog.year}
                />
              );
            })
          )}
        </div>
      </div>
      <Pagination
        data={blogs}
        setPaginatedData={setPaginatedData}
        getPaginatedItems={getPaginatedItems}
        query={query}
        date={date}
        category={category}
        noOfItems={6}
      />
    </section>
  );
};

export default Blog;
