import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import axios from "axios";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);
  // console.log(user);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const logOut = () => {
    setLoading(true);
    localStorage.removeItem("token");
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser && currentUser?.email) {
        axios
          .post(`${import.meta.env.VITE_API_URL}/jwt`, {
            email: currentUser?.email,
          })
          .then((data) => {
            // console.log(data.data.token);
            localStorage.setItem("token", data.data.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("token");
        setLoading(false);
      }
      // console.log("current user", currentUser);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  //Get user specific role

  const getRole = async (email) => {
    const jwtToken = localStorage.getItem("token");
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/users/admin/${email}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
    const user = await response.json();
    return user;
  };
  const [identity, setIdentity] = useState("");
  useEffect(() => {
    if (user) {
      getRole(user.email).then((data) => {
        // console.log(data);
        setIdentity(data.role);
      });
    }
  }, [user]);

  const authInfo = {
    setLoading,
    createUser,
    signIn,

    resetPassword,
    logOut,
    updateUserProfile,
    user,
    loading,
    identity,
    setIdentity,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
