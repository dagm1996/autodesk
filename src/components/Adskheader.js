import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/autodesk-logo-primary-rgb-white.svg";
import lock from "../img/lock-icon.svg";
import backImage from "../img/banner-bg.jpg";
// background: url("../img/banner-bg.jpg") no-repeat;

const AdskHeader = ({ onHomepage, pageName }) => {
  return (
    <div class="header-banner-container">
      <header>
        <div class="flex items-center justify-between h-14">
          <div id="logo" class="logo ml-10">
            {onHomepage ? (
              <img
                src={logo}
                height="13"
                className="h-8 w-[140px]"
                alt="Autodesk logo"
              />
            ) : (
              <>
                <Link to="/">
                  <img
                    src={logo}
                    className="h-3 w-[140px]"
                    height="13"
                    alt="Autodesk logo"
                  />
                  <span class="app-title">People Insights Portal</span>
                </Link>
                <span class="separator"></span>
                <span class="page-title">{pageName}</span>
              </>
            )}
          </div>
          <div class="nav mr-10">
            <span
              class="page-tag flex justify-end items-center text-sm"
              title="Confidential & Secured"
            >
              Confidential
              <img
                class="lock-icon"
                src={lock}
                title="Confidential & Secured"
              />
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default AdskHeader;
