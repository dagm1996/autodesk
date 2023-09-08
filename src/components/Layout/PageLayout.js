import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import AdskHeader from "../Adskheader";
import Tile from "../Tile";
import "../../pages/main.css";
import "../../pages/normalize.css";
import "../../pages/DashboardLoader.css";
import { Link, NavLink, Outlet } from "react-router-dom";

const Home = () => {
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
            <div className="flex justify-center text-[20px]">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "border-4 border-b-white bg-slate-700 text-white px-5"
                    : "border-4 hover:bg-slate-700 hover:text-white ease-in-out duration-500 border-t-white border-x-white px-5"
                }
                to={"/"}
              >
                <h2>Dashboards</h2>
              </NavLink>

              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "border-4 border-b-white bg-slate-700 text-white px-5"
                    : "border-4  hover:bg-slate-700 hover:text-white ease-in-out duration-500 border-t-white border-x-white px-5"
                }
                to={"/research"}
              >
                <h2>Research</h2>
              </NavLink>

              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "border-4 border-b-white bg-slate-700 text-white px-5"
                    : "border-4 hover:bg-slate-700 hover:text-white ease-in-out duration-500 border-t-white border-x-white px-5"
                }
                to={"/blog"}
              >
                <h2>Blog</h2>
              </NavLink>

              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "border-4 border-b-white bg-slate-700 text-white px-5"
                    : "border-4 hover:bg-slate-700 hover:text-white ease-in-out duration-500 border-t-white border-x-white px-5"
                }
                to={"/admin"}
              >
                <h2>Admin</h2>
              </NavLink>
            </div>
          </div>
          <section>
            <Outlet />
          </section>
          {/* tiles map */}
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
          <h2>Dashboards Access</h2>
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
