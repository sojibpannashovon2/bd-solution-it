import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header";
import Navbar from "../components/Shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
