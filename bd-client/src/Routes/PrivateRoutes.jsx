import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Shared/Loader";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { loading, userData } = useContext(AuthContext);
  // console.log(userData);
  if (loading) {
    return <Loader />;
  }

  if (userData) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
