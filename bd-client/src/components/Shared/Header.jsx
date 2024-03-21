import React from "react";
import Container from "./Container";
import {
  FaEnvelope,
  FaFacebook,
  FaHeadset,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <Container>
        <div className="bg-[#1e40af] xl:lg:md:flex justify-between px-[80px] py-[10px] mb-40px xl:lg:md:mb-[20px]">
          <div className="flex justify-between xl:lg:md:items-center gap-6">
            <div className="flex justify-center xl:lg:md:items-center gap-2 font-semibold text-white">
              <FaHeadset />
              <h2>(+880)16841446</h2>
            </div>
            <div className="flex justify-center items-center gap-2 font-semibold text-white">
              <FaEnvelope />
              <h2>mdarifur554@gmail.com</h2>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 font-semibold text-white mt-6 xl:lg:md:mt-0">
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
            <FaLinkedin />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
