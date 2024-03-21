import { createContext, useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
// import Loader from "../components/Shared/Loader";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // const axiosSecure = useAxiosSecure(navigate);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const logOut = () => {
    // setLoading(true);

    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  //tanstack useeProfile component

  // const { data: users = [] } = useQuery({
  //   queryKey: [],
  //   enabled: true,
  //   queryFn: async () => {
  //     const res = await axios.get(
  //       `${import.meta.env.VITE_API_URL}/user/profile`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log(res.data);
  //     return res.data;
  //   },
  // });

  // if (isPending) return <Loader />;

  // if (error) return "An error has occurred: " + error.message;
  // console.log(data);
  // UserProfile Component
  const [userData, setUserData] = useState(null);

  const getUserData = async (token) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(true);
      return response.data.user;
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("Error fetching user data:", error);
      return null;
    }
  };

  const fetchDataWithToken = async (token, setData) => {
    const userData = await getUserData(token);
    setData(userData);
    setLoading(false);
  };

  const fetchUserData = async (setData) => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchDataWithToken(token, setData);
    } else {
      // Handle unauthorized access
      console.error("Unauthorized access: No token found");
      toast.error("Unauthorized access: No token found");
    }
  };
  useEffect(() => {
    fetchUserData(setUserData);
    setLoading(false);
  }, []);

  // console.log(userData);

  const authInfo = {
    // role,
    // setRole,
    setLoading,
    isAuthenticated,
    logOut,
    user,
    loading,
    userData,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
