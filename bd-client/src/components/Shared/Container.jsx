import React from "react";

const Container = ({ children }) => {
  return (
    // xl:px-20 md:px-10
    <div className="max-w-[2520px] mx-auto  sm:px-2 px-4 font-sans">
      {children}
    </div>
  );
};

export default Container;
