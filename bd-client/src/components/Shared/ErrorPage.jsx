import React from "react";
import { BiMessageAltError } from "react-icons/bi";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="text-center">
      <div className="text-center w-[400px] mx-auto my-10">
        <BiMessageAltError className="text-6xl h-96 w-96 text-red-800" />
        <p className="mr-24 text-2xl font-bold text-green-800">
          Page Not Found Go To
          <Link className="mx-2 text-blue-600 hover:bg-green-200 " to={`/`}>
            Home Page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
