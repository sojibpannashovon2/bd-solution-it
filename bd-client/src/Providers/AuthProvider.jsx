import { createContext, useEffect, useState } from "react";
import React from "react";
import axios from "axios";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  const [userData, setUserData] = useState(null);

  // UserProfile Component

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:7001/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserData(response.data.user);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);
  console.log(userData);
  const authInfo = {
    // role,
    // setRole,
    setLoading,

    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
