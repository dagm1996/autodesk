import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Tile from "../Tile";
import Cookie from "universal-cookie";

const cookie = new Cookie();

const ManageDashboard = () => {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const handleTileAuth = async (token) => {
      try {
        let url = `https://76clz1n9xk.execute-api.us-east-2.amazonaws.com/stage_20230629_v2/dashboardAccess?token=${token}`;

        url = url + token;

        fetch(url, {
          method: "GET",
        })
          .then((response) => {
            if (response.status !== 200) {
              cookie.remove("storedAccessToken");
              // localStorage.removeItem("storedAccessToken");
            }
            console.log("code", response.status);
            // const storedAccessToken = localStorage.getItem("storedAccessToken");
            const storedAccessToken = cookie.get("storedAccessToken");

            if (!storedAccessToken) {
              console.log("Home js rendering because there is no access Token");
              // window.location.href =
              //   "https://people-insights.auth.us-east-2.amazoncognito.com/oauth2/authorize?client_id=486jdp55loudfoo165o9ple2ir&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fd1ovk7y7rzi297.cloudfront.net";
              // "https://people-insights.auth.us-east-2.amazoncognito.com/oauth2/authorize?client_id=486jdp55loudfoo165o9ple2ir&response_type=code&scope=email+openid&redirect_uri=http%3A%2F%2Flocalhost%3A3000"; //
            }
            return response.json();
          })
          .then((data) => {
            console.log("data", data);
            setTiles(data["data"]);
          })
          .catch((error) => {
            // Handle any errors that occur during the request
            console.error(error);
          });
      } catch (error) {
        console.log("Error in tiles:", error);
      }
    };
    // const storedAccessToken = localStorage.getItem("storedAccessToken");
    const storedAccessToken = cookie.get("storedAccessToken");
    handleTileAuth(storedAccessToken);
    // handleTileAuth(storedAccessToken);
    //  console.log(tiles);
  }, []);

  return (
    <>
      <Filter />
      <section className="grid mt-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {tiles?.length == 0 && <h3>Loading ...</h3>}
        {tiles?.length !== 0 &&
          tiles?.map((tile, i) => {
            return (
              <Tile
                key={i}
                title={tile.title}
                description={tile.description}
                link={tile.link}
                imgSrc={tile.imgSrc}
                comingSoon={tile.coming_soon}
              />
            );
          })}

        {/* <Link class="  text-gray-900">
          <div>
            <img
              src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
              alt=" random imgee"
              class="w-full  object-cover object-center rounded-lg shadow-md"
            />

            <div class="relative px-4 -mt-16  ">
              <div class="bg-white p-4 rounded-lg shadow-lg">
                <h4 class="mt-1 text-xl font-semibold leading-tight truncate">
                  A random Title
                </h4>

                <div class="mt-4">
                  <span class="text-sm text-gray-600">
                    lorem Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Maxime mollitia, molestiae quas
                  </span>
                  <span className="flex mt-2 justify-between">
                    <FiEdit2 className="hover:text-blue-500" />
                    <RiDeleteBin6Line className="hover:text-red-500" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link class="  text-gray-900">
          <div>
            <img
              src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
              alt=" random imgee"
              class="w-full  object-cover object-center rounded-lg shadow-md"
            />

            <div class="relative px-4 -mt-16  ">
              <div class="bg-white p-4 rounded-lg shadow-lg">
                <h4 class="mt-1 text-xl font-semibold leading-tight truncate">
                  A random Title
                </h4>

                <div class="mt-4">
                  <span class="text-sm text-gray-600">
                    lorem Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Maxime mollitia, molestiae quas
                  </span>
                  <span className="flex mt-2 justify-between">
                    <FiEdit2 className="hover:text-blue-500" />
                    <RiDeleteBin6Line className="hover:text-red-500" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link class="  text-gray-900">
          <div>
            <img
              src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
              alt=" random imgee"
              class="w-full  object-cover object-center rounded-lg shadow-md"
            />

            <div class="relative px-4 -mt-16  ">
              <div class="bg-white p-4 rounded-lg shadow-lg">
                <h4 class="mt-1 text-xl font-semibold leading-tight truncate">
                  A random Title
                </h4>

                <div class="mt-4">
                  <span class="text-sm text-gray-600">
                    lorem Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Maxime mollitia, molestiae quas
                  </span>{" "}
                  <span className="flex mt-2 justify-between">
                    <FiEdit2 className="hover:text-blue-500" />
                    <RiDeleteBin6Line className="hover:text-red-500" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link> */}
      </section>
    </>
  );
};

export default ManageDashboard;
