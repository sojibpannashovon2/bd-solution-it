import React from "react";
import { CircleLoader, ClimbingBoxLoader } from "react-spinners";
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
      <ClimbingBoxLoader size={25} color="#5CDA0A" />
    </div>
  );
};

export default Loader;
