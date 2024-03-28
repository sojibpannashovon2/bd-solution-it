import React from "react";

import Login from "../components/SafetyZone/Login";
import { Outlet } from "react-router-dom";
import Signup from "../components/SafetyZone/Signup";

const AdminLayout = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default AdminLayout;
