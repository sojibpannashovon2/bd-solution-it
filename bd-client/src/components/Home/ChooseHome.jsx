import React from "react";
import home2 from "../../assets/Home/home2.webp";
const ChooseHome = () => {
  return (
    <>
      <div className="xl:lg:md:flex justify-between gap-8 my-[60px] w-[85%] mx-auto">
        <div className="xl:lg:md:w-1/2">
          <img className="rounded-lg shadow-md" src={home2} alt="" />
        </div>
        <div className="xl:lg:md:w-1/2">
          {/* xl:lg:md:w-[60%] xl:lg:md:ml-[40px] */}
          <div className="">
            <h1 className="Sans-serif font-bold text-[20px]  font-Livvic mt-8 xl:lg:md:mt-0">
              WHY CHOOSE US ----
            </h1>
            <h2 className="font-bold text-[#282828]  text-[30px] xl:lg:md:text-[40px] font-Livvic">
              We Strive For Excellence
            </h2>

            <p className="text-[16px] font-normal">
              Learn about our values and commitment to your success.
            </p>
            <h3 className="font-normal text-[16px]">
              Paradigm IT Solutions is an IT Consulting service for Data
              modernization and Automation Strategy for organizations. Our
              On-demand training will equip you with the skills to meet your
              business goals We are professionals who are highly skilled at what
              we do and passionate about technology.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseHome;
