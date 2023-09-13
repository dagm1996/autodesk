import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { Modal } from "@mui/material";
import { Link } from "react-router-dom";
import { IoOpenOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import { AiOutlineDelete, AiOutlineSave } from "react-icons/ai";
import TextEditor from "../TextEditor/TextEditor";
import axios from "axios";
import ImageUpload from "../ImageUpload/ImageUpload";
import CodeEditor from "../CodeEditor/CodeEditor";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../API/api";
import { endPoint } from "../../API/endPoints";

const ResearchTable = () => {
  const [openEditor, setOpenEditor] = useState(false);
  const [file, setFile] = useState(null);
  const [codeValue, setCodeValue] = useState("");
  const [categoryMethod, setCategoryMethod] = useState("select");
  const [research, setResearch] = useState({});

  let dispatch = useDispatch();
  let { researches, isLoading, isError } = useSelector(
    (state) => state.researches
  );

  function ActionBtn({ params, rowId }) {
    // console.log(params?.row)

    const editHandler = () => {
      console.log(params.row);
      // setPatient(params?.row);
      setResearch(params.row);

      // setOpen(false);
      setIsEditing(true);
    };

    //  const deleteHandler = useCallback(() => {
    //    // setPatient(params.row);

    //    // console.log(patient)
    //   //  Swal.fire({
    //   //    title: "Are you sure?",
    //   //    text: `You want to delete ${params?.row?.firstName} ${params?.row?.lastName}`,
    //   //    icon: "warning",
    //   //    showCancelButton: true,
    //   //    confirmButtonColor: "#3085d6",
    //   //    cancelButtonColor: "#d33",
    //   //    confirmButtonText: "Yes, delete it!",
    //   //  }).then((result) => {
    //   //    if (result.isConfirmed) {
    //   //      axiosInstance.delete(`/patients/${patient.id}`).then(() => {
    //   //        Swal.fire("Deleted!", "Patient has been deleted.", "success");
    //   //        dispatch(getPatients(["", ""]));
    //   //      });
    //   //    }
    //   //  });
    //  }, [patient]);

    return (
      <>
        <section className="flex gap-5">
          <Link
            style={{ borderRadius: "7px" }}
            // to={`${params.row.id}`}
            // onClick={viewHandler}
            className="p-3   hover:outline outline-1 outline-blue-600 cursor-pointer "
          >
            <IoOpenOutline />
          </Link>
          <div
            //  onClick={editHandler}
            style={{ borderRadius: "7px" }}
            className="p-3  hover:outline outline-1 outline-green-600 cursor-pointer"
          >
            <GoPencil />
          </div>
          <div
            //  onClick={deleteHandler}
            style={{ borderRadius: "7px" }}
            className="p-3  hover:outline outline-1 outline-red-600 cursor-pointer"
          >
            <AiOutlineDelete />
          </div>
        </section>
      </>
    );
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "95%",
    height: "96vh",
    overflowY: "scroll",
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: "7px",
    boxShadow: 24,
    p: 4,
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 170,
      renderCell: (params) => (
        // <UsersActions {...{ params, rowId, setRowId }} />
        <ActionBtn
          // onClick={(e) => console.log(e.target)}
          {...{ params }}
        />
      ),
    },
    {
      field: "title",
      headerName: "Title",
      width: 150,
      editable: true,
    },
    {
      field: "description",
      headerName: "Description",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
      // valueGetter: (params) =>
      //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "date",
      headerName: "Year",
      width: 150,
      editable: true,
    },
    {
      field: "category",
      headerName: "Category",
      // type: "number",
      width: 150,
      editable: true,
    },
  ];

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
    }),
    onSubmit: async (values) => {
      values.htmlContent = codeValue;

      let {
        data: { url },
      } = await axios.get(`http://localhost:8080/secure-url`);

      try {
        let response = await axios({
          url,
          data: file,
          method: "PUT",
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        values.imageUrl = url.split("?")[0];
        // this is full json data to the provided API
        console.log(values);
        await axiosInstance.post(endPoint.RESEARCH, values);
      } catch (err) {
        console.log(err);
      }
    },
  });

  const handleSwitchCategory = (value) => {
    if (value === "other") {
      setCategoryMethod("input");
    } else {
      setCategoryMethod("select");
    }
  };

  let categories = researches?.map((item) => item.categories);

  return (
    <>
      <h1 className="text-lg text-left font-mono text-gray-700">
        Research List
      </h1>
      <div>
        {/* Filter */}
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
          <button
            onClick={() => setOpenEditor(true)}
            class="bg-gray-800 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
          >
            <span>Create New</span>
          </button>
        </div>
      </div>
      {/* Editor Modal */}
      <Modal
        open={openEditor}
        onClose={() => setOpenEditor(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-between items-center">
            <p className="font-semibold p-3">Research Editor</p>
            <button
              className=" px-3 py-1 hover:bg-red-700 ease-in-out duration-500 rounded-md bg-red-500 text-white"
              onClick={() => setOpenEditor(false)}
            >
              close
            </button>
          </div>
          {/* Form */}
          <form action="" onSubmit={formik.handleSubmit}>
            <div class="">
              <div class="relative w-[95%] bg-white mx-8 md:mx-0 ">
                <div class="text-base grid grid-cols-1 gap-x-5 md:grid-cols-2 leading-6 text-gray-700 sm:text-lg sm:leading-7">
                  {/* Research Image */}
                  <div className="flex flex-col justify-start">
                    <ImageUpload
                      file={file}
                      setFile={setFile}
                      name="Research"
                    />
                  </div>
                  {/* Research Title */}
                  <div class="flex flex-col">
                    <label class="leading-loose">Research Title</label>
                    <input
                      type="text"
                      name="researchTitle"
                      class="px-4 py-2 border-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:text-sm border-gray-500  rounded-md focus:outline-none text-gray-600"
                      placeholder="Research title"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.researchTitle}
                    />
                    {formik.touched.researchTitle &&
                    formik.errors.researchTitle ? (
                      <div className="text-red-500">
                        {formik.errors.researchTitle}
                      </div>
                    ) : null}
                  </div>
                  {/* Research Category */}
                  <div class="flex flex-col">
                    <label class="leading-loose">Research Category</label>
                    <>
                      <select
                        class="px-4 py-2 border-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:text-sm border-gray-500  rounded-md focus:outline-none text-gray-600"
                        placeholder="Category"
                        onChange={(e) => {
                          handleSwitchCategory(e.target.value);
                          formik.handleChange(e);
                        }}
                        onBlur={formik.handleBlur}
                        value={formik.values.researchCategory}
                        name="researchCategory"
                      >
                        {categories.map((item) => (
                          <option value={item} key={item}>
                            {item}
                          </option>
                        ))}
                        <option value="other">Other</option>
                      </select>
                    </>

                    {categoryMethod === "input" && (
                      <div className="mt-3">
                        <p className="text-blue-500 font-semibold">New</p>
                        <input
                          className="px-4
                        py-2
                        border-2
                        focus:ring-blue-500
                        focus:border-blue-500
                        w-full
                        sm:text-sm
                        border-gray-500
                        rounded-md
                        focus:outline-none
                        text-gray-600"
                          type="text"
                          placeholder="Category"
                          onChange={(e) => {
                            formik.handleChange(e);
                          }}
                          onBlur={formik.handleBlur}
                          value={formik.values.researchCategory}
                          name="researchCategory"
                        />
                      </div>
                    )}
                    {formik.touched.researchCategory &&
                    formik.errors.researchCategory ? (
                      <div className="text-red-500">
                        {formik.errors.researchCategory}
                      </div>
                    ) : null}
                  </div>
                  {/* Research Date */}
                  <div class="flex flex-col w-1/2">
                    <label class="leading-loose">Research Date</label>
                    <input
                      type="date"
                      name="researchDate"
                      class="px-4 py-2 border-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:text-sm border-gray-500  rounded-md focus:outline-none text-gray-600"
                      placeholder="Research Date"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.researchDate}
                    />
                    {formik.touched.researchDate &&
                    formik.errors.researchDate ? (
                      <div className="text-red-500">
                        {formik.errors.researchDate}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            {/* <TextEditor /> */}
            <CodeEditor
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.htmlContent}
              codeValue={codeValue}
              // codeValue={formik.values.htmlContent}
              setCodeValue={setCodeValue}
              // setCodeValue={formik.handleChange}
            />{" "}
            {formik.touched.htmlContent && formik.errors.htmlContent ? (
              <div className="text-red-500">{formik.errors.htmlContent}</div>
            ) : null}
            <button
              type="submit"
              className="px-3 text-white font-bold py-2 mt-5 ml-auto flex items-center gap-3 justify-end bg-gray-600 text-[16px] mr-16 ease-in-out duration-500 hover:bg-black"
            >
              <AiOutlineSave />
              <span>Save Document</span>
            </button>
          </form>
        </Box>
      </Modal>
      {/* Data Grid */}
      <Box sx={{ height: 400, width: "100%", backgroundColor: "white" }}>
        <DataGrid
          rows={researches}
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
      </Box>
    </>
  );
};

export default ResearchTable;
