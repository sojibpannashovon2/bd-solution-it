import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import home1 from "../../assets/Home/home1.jpg";
const AboutHome = () => {
  useEffect(() => {
    const image = document.getElementById("animatedImage");
    if (image) {
      image.classList.add("slideInAnimation");
    }
  }, []);
  return (
    <>
      <div className="xl:lg:md:flex justify-between gap-8 my-[60px] w-[85%] mx-auto">
        <div className="xl:lg:md:w-1/2">
          <img
            id="animatedImage"
            className="rounded-lg shadow-md"
            src={home1}
            alt=""
          />
        </div>
        <div className="xl:lg:md:w-1/2">
          {/* xl:lg:md:w-[60%] xl:lg:md:ml-[40px] */}
          <div className="">
            <h1 className="Sans-serif font-bold text-[20px] xl:lg:md:text-[30px] font-Livvic mt-8 xl:lg:md:mt-0">
              ABOUT US ----
            </h1>
            <h2 className="font-bold text-[#282828]  text-[30px] xl:lg:md:text-[40px] font-Livvic">
              The Experts You Can Trust
            </h2>
            <h3 className="font-normal text-[16px]">
              Paradigm IT Solutions is an IT Consulting service for Data
              modernization and Automation Strategy for organizations. Our
              On-demand training will equip you with the skills to meet your
              business goals We are professionals who are highly skilled at what
              we do and passionate about technology.
              <br />
              <br />
              We're innovative with a fresh approach to data modernization;
              committed to providing the best experience to our clients. We
              strive for excellence.
            </h3>
            <Link
              to={`/about`}
              className="pb button text-[16px] font-Livvic border border-blue-700 mt-[40px] bg-blue-700 text-white"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHome;
