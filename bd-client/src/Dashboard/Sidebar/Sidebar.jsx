import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

// import Logo from "../Shared/Navbar/Logo";
import { GrLogout } from "react-icons/gr";
import { FcContacts, FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
// import { BsBookFill, BsFillHouseAddFill } from 'react-icons/bs'

import { FaEnvelope, FaHome } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
const Sidebar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const { user, logOut, role } = useContext(AuthContext);
  // console.log(user);
  const [isActive, setActive] = useState("false");
  // const toggleHandler = (event) => {
  //   setToggle(event.target.checked);
  // };
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden lg:overflow-hidden mt-18">
        <div>
          <Link
            to={`/`}
            className="block cursor-pointer p-2 font-bold border-[1px] border-slate-500"
          >
            <img className="" src="../../../public/Bd It.png" alt="" />
          </Link>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        // z-10
        // md:fixed
        className={` flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-2 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <Link
              to={"/"}
              className="w-full hidden md:flex py-2 justify-center items-center  mx-auto"
            >
              <img
                className="object-cover "
                src="../../public/Bd It.png"
                alt="avatar"
                referrerPolicy="no-referrer"
              />
            </Link>
            <div className="flex flex-col items-center mt-4  border border-blue-400  rounded-lg shadow-xl px-4 ">
              <Link to="/dashboard">
                <h4 className="mx-2 mt-2 text-2xl font-bold text-gray-800  hover:underline">
                  {user?.displayName}
                </h4>
              </Link>
              <Link to="/dashboard">
                <p className=" mx-2 mt-1 text-lg font-medium text-gray-600  hover:underline">
                  {user?.email}
                </p>
              </Link>
            </div>

            <h1 className="text-2xl my-8 xl:lg:md:ml-10 font-bold">
              Admin Panel
            </h1>
          </div>
        </div>

        <div>
          <hr />
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <FaHome className="w-5 h-5" />

            <span className="mx-4 font-medium">Home</span>
          </NavLink>
          <NavLink
            to="/dashboard/manage_user"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <FcSettings className="w-5 h-5" />

            <span className="mx-4 font-medium">Manage Users</span>
          </NavLink>
          <NavLink
            to="/dashboard/contact-history"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <FcContacts className="w-5 h-5" />

            <span className="mx-4 font-medium">Contact History</span>
          </NavLink>

          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
