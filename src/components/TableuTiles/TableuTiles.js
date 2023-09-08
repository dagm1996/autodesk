import React, { useEffect, useState } from "react";
import Tile from "../Tile";
import Cookie from "universal-cookie";

const cookie = new Cookie();

const TableuTiles = () => {
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
              // localStorage.removeItem("storedAccessToken");
              cookie.remove("storedAccessToken");
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
    console.log(tiles);
  }, []);
  return (
    <section>
      <div>
        <p class="caption">
          Click on a dashboard to launch it (<a href="#popup1">Not working?</a>)
        </p>
      </div>
      <h1>Tiles List ...</h1>
      {tiles?.length !== 0 ? (
        <section id="dashboards-grid" class="link-blocks">
          {tiles?.map((d, idx) => {
            return (
              <Tile
                key={idx}
                title={d.title}
                imgSrc={d.imgSrc}
                description={d.description}
                comingSoon={d.coming_soon}
                link={d.link}
              />
            );
          })}
        </section>
      ) : (
        <div className="dashboardloader"></div>
      )}
    </section>
  );
};

export default TableuTiles;
