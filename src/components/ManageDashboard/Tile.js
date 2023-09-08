import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const Tile = ({ link, imgSrc, title, description, comingSoon }) => {
  return (
    <section>
      <Link to={link} className=" text-gray-900" >
        <div>
          <img
            src={`../${imgSrc}`}
            alt=" random imgee"
            class="w-full h-[200px] object-cover object-center rounded-lg shadow-md"
          />

          <div class="relative px-4 -mt-16  ">
            <div class="bg-white p-4 h-[160px] rounded-lg shadow-lg">
              <h4 class="mt-1 text-xl font-semibold leading-tight truncate">
                {title}
              </h4>

              <div class="mt-4">
                <span class="text-sm text-gray-600">{description.slice(0, 50)} ...</span>
                <span className="flex mt-2 justify-between">
                  <FiEdit2 className="hover:text-blue-500" />
                  <RiDeleteBin6Line className="hover:text-red-500" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Tile;
