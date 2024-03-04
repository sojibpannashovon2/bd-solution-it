import React, { useState } from "react";
import Container from "./Container";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logOut } = useContext(AuthContext); // Use the useAuth hook
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logOut(); // Call the logout function from AuthContext
    navigate("/dashboard");
  };

  return (
    <>
      <Container>
        <nav className="flex flex-wrap items-center justify-between ">
          <img
            src="/public/bd it.png"
            className="h-16 w-32"
            alt="ACME"
            width="120"
          />
          <div className="flex md:hidden">
            <button id="hamburger" onClick={toggleMenu}>
              {isMenuOpen ? (
                <img
                  className="block"
                  src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                  width="40"
                  height="40"
                />
              ) : (
                <img
                  className="block"
                  src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                  width="40"
                  height="40"
                />
              )}
            </button>
          </div>
          <div
            className={`toggle ${
              isMenuOpen ? "w-full md:w-auto" : "hidden md:w-auto md:flex"
            } text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none`}
          >
            <Link
              to={`/`}
              href="#"
              className="block md:inline-block text-blue-900 hover:text-slate-200 px-3 py-1 border-b-2 border-blue-900 md:border-none text-xl font-semibold"
            >
              Home
            </Link>
            <Link
              to={`/about`}
              href="#"
              className="block md:inline-block text-blue-900 hover:text-slate-200 px-3 py-1 border-b-2 border-blue-900 md:border-none text-xl font-semibold"
            >
              About
            </Link>
            <Link
              href="#"
              to={`/contact`}
              className="block md:inline-block text-blue-900 hover:text-slate-200 px-3 py-1 border-b-2 border-blue-900 md:border-none text-xl font-semibold"
            >
              Contact
            </Link>
            <Link
              href="#"
              to={`/service`}
              className="block md:inline-block text-blue-900 px-3 py-1 border-b-2 border-blue-900 hover:text-slate-200 md:border-none text-xl font-semibold"
            >
              Our Services
            </Link>
          </div>

          {isAuthenticated ? (
            <>
              <div className="flex justify-center items-center gap-6 mr-8">
                <Link
                  to={`/dashboard`}
                  href="#"
                  className={`toggle ${
                    isMenuOpen ? "flex" : "hidden md:flex"
                  } w-full md:w-auto px-4 py-1 text-right bg-blue-900 hover:bg-blue-500 text-white rounded-md`}
                >
                  Dashboard
                </Link>

                <button
                  onClick={handleLogout}
                  className="border border-slate-700 px-4 py-1 font-semibold rounded-md bg-red-400 hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link
                to={`/login`}
                href="#"
                className={`toggle ${
                  isMenuOpen ? "flex" : "hidden md:flex"
                } w-full md:w-auto px-4 py-1 text-right bg-green-900 hover:bg-green-500 text-white rounded-md`}
              >
                Login Now
              </Link>
            </>
          )}
        </nav>
      </Container>
    </>
  );
};

export default Navbar;
