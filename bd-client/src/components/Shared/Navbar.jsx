import React, { useState } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
              href="#"
              className="block md:inline-block text-blue-900 hover:text-slate-200 px-3 py-1 border-b-2 border-blue-900 md:border-none text-2xl font-semibold"
            >
              Home
            </Link>
            <Link
              href="#"
              className="block md:inline-block text-blue-900 hover:text-slate-200 px-3 py-1 border-b-2 border-blue-900 md:border-none text-2xl font-semibold"
            >
              About
            </Link>
            <Link
              href="#"
              className="block md:inline-block text-blue-900 hover:text-slate-200 px-3 py-1 border-b-2 border-blue-900 md:border-none text-2xl font-semibold"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="block md:inline-block text-blue-900 px-3 py-1 border-b-2 border-blue-900 hover:text-slate-200 md:border-none text-2xl font-semibold"
            >
              Our Services
            </Link>
          </div>
          <Link
            to={`/dashboard`}
            href="#"
            className={`toggle ${
              isMenuOpen ? "flex" : "hidden md:flex"
            } w-full md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded`}
          >
            Dashboard
          </Link>
          <Link
            to={`/login`}
            href="#"
            className={`toggle ${
              isMenuOpen ? "flex" : "hidden md:flex"
            } w-full md:w-auto px-4 py-2 text-right bg-green-900 hover:bg-green-500 text-white md:rounded`}
          >
            Login Now
          </Link>
        </nav>
      </Container>
    </>
  );
};

export default Navbar;
