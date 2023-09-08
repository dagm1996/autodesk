import React from "react";

const BlogTable = () => {
  return (
    <div>
      <>
        <h1 className="text-lg text-left font-mono text-gray-700">
          Blogs List
        </h1>
        <div>
          <div class="flex items-center justify-between p-3 space-x-6 m-4 bg-white rounded-xl shadow-lg hover:shadow-xl transform ">
            <div className="flex gap-3">
              <div class="flex bg-gray-100 p-2 w-72 space-x-4 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 opacity-30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  class="bg-gray-100 outline-none"
                  type="text"
                  placeholder="Article name or keyword..."
                />
              </div>
              <div class="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
                {/* <span>All categories</span> */}
                <select id="for">
                  <option value="">All time</option>
                  <option value="">Today</option>
                  <option value="">Last 7day</option>
                  <option value="">Last One Month</option>
                  <option value="">Last 12 Month</option>
                </select>
              </div>
            </div>
            <div class="bg-gray-800 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
              <span>Create New</span>
            </div>
          </div>
        </div>
        {/* <Box sx={{ height: 400, width: "100%", backgroundColor: "white" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box> */}
      </>
    </div>
  );
};

export default BlogTable;
