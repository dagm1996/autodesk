import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import ImageUpload from "../ImageUpload/ImageUpload";
import { useFormik } from "formik";
import * as Yup from "yup";

const Filter = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "100%",
    // height: "96vh",
    overflowY: "scroll",
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: "7px",
    boxShadow: 24,
    p: 4,
  };
  const formik = useFormik({
    initialValues: {
      researchTitle: "",
      researchCategory: "",
      researchDate: "",
      htmlContent: "",
      imageUrl: "",
    },
    validationSchema: Yup.object({
      researchTitle: Yup.string().required("Please enter research title"),
      researchCategory: Yup.string().required("Please enter research category"),
      researchDate: Yup.string().required("Please enter research date"),
      // imageUrl: Yup.string().required("Please enter research date"),
    }),
    onSubmit: async (values) => {
      //  values.htmlContent = codeValue;

      // let {
      //   data: { url },
      // } = await axios.get(`http://localhost:8080/secure-url`);

      // try {
      //   let response = await axios({
      //     url,
      //     data: file,
      //     method: "PUT",
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   });
      //   values.imageUrl = url.split("?")[0];
      //   // this is full json data to the provided API
      //   //console.log(values);
      // } catch (err) {
      //   console.log(err);
      // }
      console.log(values);
    },
  });
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-between items-center">
            <p className="font-semibold p-3">Tile Form</p>
            <button
              className=" px-3 py-1 hover:bg-red-700 ease-in-out duration-500 rounded-md bg-red-500 text-white"
              onClick={() => setOpen(false)}
            >
              close
            </button>
          </div>
          {/* Form */}
          <form action="" onSubmit={formik.handleSubmit}>
            <div class="">
              <div class="relative max-w-md bg-white mx-8 md:mx-0 ">
                <div class="text-base grid grid-cols-1 gap-x-5 leading-6 text-gray-700 sm:text-lg sm:leading-7">
                  {/* Research Image */}
                  <div className="flex flex-col justify-start">
                    <ImageUpload
                      file={file}
                      setFile={setFile}
                      name="tileImage"
                    />
                  </div>
                  {/* Description */}
                  <div class="flex flex-col">
                    <label class="leading-loose">Description</label>
                    <textarea
                      type="text"
                      rows={5}
                      name="researchTitle"
                      class="px-4 py-2 border-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:text-sm border-gray-500  rounded-md focus:outline-none text-gray-600"
                      placeholder="Tile Description"
                      //   onChange={formik.handleChange}
                      //   onBlur={formik.handleBlur}
                      //   value={formik.values.researchTitle}
                    />
                    {/* {formik.touched.researchTitle &&
                    formik.errors.researchTitle ? (
                      <div className="text-red-500">
                        {formik.errors.researchTitle}
                      </div>
                    ) : null} */}
                  </div>
                  {/* page Name */}
                  <div class="flex flex-col">
                    <label class="leading-loose">Page Name</label>
                    <input
                      type="text"
                      name="researchTitle"
                      class="px-4 py-2 border-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:text-sm border-gray-500  rounded-md focus:outline-none text-gray-600"
                      placeholder="Tile Page Name"
                      //   onChange={formik.handleChange}
                      //   onBlur={formik.handleBlur}
                      //   value={formik.values.researchTitle}
                    />
                    {/* {formik.touched.researchTitle &&
                    formik.errors.researchTitle ? (
                      <div className="text-red-500">
                        {formik.errors.researchTitle}
                      </div>
                    ) : null} */}
                  </div>
                  {/* LInk */}
                  {/* <div class="flex flex-col">
                    <label class="leading-loose">Link</label>
                    <input
                      type="text"
                      name="researchTitle"
                      class="px-4 py-2 border-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:text-sm border-gray-500  rounded-md focus:outline-none text-gray-600"
                      placeholder="Tile Link"
                      //   onChange={formik.handleChange}
                      //   onBlur={formik.handleBlur}
                      //   value={formik.values.researchTitle}
                    />
                    {formik.touched.researchTitle &&
                    formik.errors.researchTitle ? (
                      <div className="text-red-500">
                        {formik.errors.researchTitle}
                      </div>
                    ) : null}
                  </div> */}

                  {/* Value */}
                  <div class="flex flex-col">
                    <label class="leading-loose">Tableu Server URL</label>
                    <input
                      type="text"
                      name="researchTitle"
                      class="px-4 py-2 border-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:text-sm border-gray-500  rounded-md focus:outline-none text-gray-600"
                      placeholder="Tableu Server URL"
                      //   onChange={formik.handleChange}
                      //   onBlur={formik.handleBlur}
                      //   value={formik.values.researchTitle}
                    />
                    {/* {formik.touched.researchTitle &&
                    formik.errors.researchTitle ? (
                      <div className="text-red-500">
                        {formik.errors.researchTitle}
                      </div>
                    ) : null} */}
                  </div>
                  <div class="flex items-center py-3">
                    <input
                      checked
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="checked-checkbox"
                      class="ml-2 text-sm font-medium text-gray-900"
                    >
                      Coming Soon
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="px-8 rounded-full text-white font-bold py-2 mt-5 m-auto  flex items-center gap-3 justify-center bg-gray-600 text-[16px]  ease-in-out duration-500 hover:bg-black"
            >
              {/* <AiOutlineSave /> */}
              <span>Submit </span>
            </button>
          </form>
        </Box>
      </Modal>
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
          <div
            onClick={() => setOpen(true)}
            class="bg-gray-800 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
          >
            <span>Create New</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
