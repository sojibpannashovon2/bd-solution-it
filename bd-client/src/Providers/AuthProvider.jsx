import { createContext, useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const logOut = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  // UserProfile Component
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetchUserData(setUserData);
  }, []);

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

  console.log(userData);
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
