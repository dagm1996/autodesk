import React, { useState } from "react";

const ImageUpload = ({ file, setFile, name }) => {
  const [bgImage, setBgImage] = useState(null);
  const onChange = (e) => {
    setFile(e.target.files[0]);
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function () {
      setBgImage(reader.result);
      console.log(reader.result);
    };
  };
  //   console.log(file);
  //   console.log(bgImage);
  return (
    <div className="my-6">
      <div class="w-full bg-white">
        <div class="mx-auto  flex justify-start items-center">
          {file && (
            <div
              id="images-container"
              //   style={{ backgroundImage: `url('${bgImage}')` }}
            >
              {bgImage && (
                <img className="h-9 w-9 mr-3 ml-3" src={bgImage} alt="" />
              )}
            </div>
          )}

          <div class="flex w-full justify-start">
            <label
              id="multi-upload-button"
              htmlFor="multi-upload-input"
              class="inline-flex items-center px-4 py-2 bg-gray-600 border border-gray-600 rounded-l font-semibold cursor-pointer text-sm text-white tracking-widest hover:bg-gray-500 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition "
            >
              {file ? "Image Selected" : `Click to browse ${name} Image`}
            </label>
            <div class="w-4/12 lg:w-3/12 border border-gray-300 rounded-r-md flex items-center justify-between">
              <span id="multi-upload-text" class="p-2">
                {file ? file?.name : "No file selected"}
              </span>
              <button
                id="multi-upload-delete"
                class={
                  file ? "block p-2 hover:bg-red-300 rounded-full" : "hidden"
                }
                onClick={() => setFile(null)}
                // onclick="removeMultiUpload()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-current text-red-700 w-3 h-3"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                </svg>
              </button>
            </div>
          </div>
          <input
            onChange={onChange}
            type="file"
            id="multi-upload-input"
            class="hidden"
            multiple
          />
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
