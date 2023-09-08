import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import AdskHeader from "../components/Adskheader";
import Tile from "../components/Tile";
import "./main.css";
import "./normalize.css";
import "./DashboardLoader.css";

const Home = () => {
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
              localStorage.removeItem("storedAccessToken");
            }
            console.log("code", response.status);
            const storedAccessToken = localStorage.getItem("storedAccessToken");

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
    const storedAccessToken = localStorage.getItem("storedAccessToken");
    // handleTileAuth("2702cdc8-4881-427f-955a-da1bc00d6e6d");
    // handleTileAuth(storedAccessToken);
    console.log(tiles);
  }, []);

  return (
    <body id="home-page">
      <div class="header-banner-container">
        <AdskHeader onHomepage={true} />
        <div class="hero-banner">
          <div class="container">
            <h1>People Insights Portal Staging</h1>
            <p style={{ color: "white" }}>
              An in-house purpose built tool that provides insights through
              dashboards, research, and more.
            </p>
          </div>
        </div>
      </div>
      <div class="page-content">
        <main class="container">
          <div class="section-heading">
            <ul className="flex justify-center gap-5">
              <li>
                <h2>Available Dashboards</h2>
              </li>
              <li>
                <h2>Research</h2>
              </li>
              <li>
                <h2>Blog</h2>
              </li>
              <li>
                <h2>Admin</h2>
              </li>
            </ul>

            <p class="caption">
              Click on a dashboard to launch it (
              <a href="#popup1">Not working?</a>)
            </p>
          </div>
          {/* {tiles?.length !== 0 ? (
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
          )} */}
        </main>
        <aside class="sidebar-parent">
          <div class="container sidebar-container">
            <section id="help" class="sidebar-section">
              <div class="image-container">
                <img src="img/how-it-works-image@2x.jpg" width="287" />
              </div>
              <div class="text-container">
                <h5>How it works</h5>
                <p>
                  The dashboards you see here are custom built by Autodesk’s
                  People Insights team. They are meant to answer Autodesk
                  specific questions on people related topics.
                </p>
                <p>
                  Access to each dashboard is controlled based on the user
                  accessing the data, so there may be some dashboards which do
                  not load any data if you click on them.
                </p>
                <p>
                  <a href="javascript:alert('opens a page with more info')">
                    Learn More
                  </a>
                </p>
              </div>
            </section>
            <section id="feedback" class="sidebar-section">
              <h5>Feedback & Questions</h5>
              <p>
                If you have feedback on any of the dashboards, questions on
                specific metrics, or anything you'd like to share, we'd love to
                hear from you.
              </p>
              <p>
                <a href="mailto:pex.people.insights@autodesk.com?subject=Feedback%2FQuery%20about%20People%20Insights%20Portal">
                  Share Feedback
                </a>
              </p>
            </section>
          </div>
        </aside>
      </div>
      <footer>
        <div class="container">
          <span>Autodesk Internal</span>
        </div>
      </footer>

      <div id="popup1" class="overlay">
        <div class="popup">
          <h2>Dashboads Access</h2>
          <a class="close" href="/">
            &times;
          </a>
          <div class="content">
            Access to dashboards is managed based on your role. If you need
            access to a dashboard please{" "}
            <a href="mailto:pex.people.insights@autodesk.com?subject=Requesting%20Access%20to%20People%20Insights%20Portal">
              reach out to us
            </a>
            .
          </div>
        </div>
      </div>

      <script src="js/vendor/modernizr-3.11.2.min.js"></script>
      <script src="js/plugins.js"></script>
      <script src="js/main.js"></script>
    </body>
  );
};

export default Home;
