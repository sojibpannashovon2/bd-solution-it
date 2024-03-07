import React from "react";
import { CircleLoader } from "react-spinners";
const Loader = () => {
  return (
    <div
      className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <CircleLoader size={50} color="#5CDA0A" />
    </div>
  );
};

export default Loader;
