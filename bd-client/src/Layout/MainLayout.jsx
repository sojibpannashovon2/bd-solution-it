import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
