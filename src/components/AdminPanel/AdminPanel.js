import React from "react";
import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";

const AdminPanel = () => {
  return (
    <section>
      <SideBar>
        <Outlet />
      </SideBar>
    </section>
  );
};

export default AdminPanel;
