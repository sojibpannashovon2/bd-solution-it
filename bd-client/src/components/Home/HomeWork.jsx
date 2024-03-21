import React from "react";
import { TbCloudCog } from "react-icons/tb";
import { TbSettingsAutomation } from "react-icons/tb";
import { BsDatabaseGear } from "react-icons/bs";
import { FaUsersGear } from "react-icons/fa6";
import { IoIosContacts } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa6";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { GrSelect } from "react-icons/gr";
import { TbMessageSearch } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
const HomeWork = () => {
  return (
    <>
      <div className=" my-24 bg-blue-800 px-10 py-24">
        <div className="xl:lg:md:flex justify-center  xl:lg:md:w-[90%] mx-auto">
          <div className="xl:lg:md:w-1/2 text-white">
            <h3 className="text-[20px] font-bold">WHAT WE DO ------</h3>
            <h2 className="font-extrabold   text-[30px] xl:lg:md:text-[50px] font-Livvic">
              How it works?
            </h2>
          </div>
          <div className=" xl:lg:md:w-1/2 text-white">
            <h3 className="font-normal text-[16px] xl:lg:md:w-[80%] mx-auto font">
              Our Data modernization program provides a road map for cloud
              adoption, migration, and automation. We also prepare your team
              through our on-demand training with real-life scenarios. Plus,
              you'll access extensive resources that will help you long after
              your project.
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:lg:md:grid-cols-4 gap-4 my-[60px]">
          <div className="flex gap-3 rounded-2xl shadow-xl px-[40px] py-[50px] border border-slate-200">
            <GrSelect className="text-6xl text-white" />
            <div className="text-white">
              <h1 className="text-[25px] font-Livvic font-bold">
                Select a service
              </h1>
              <p className="text-[16px]">We plan with you</p>
            </div>
          </div>
          <div className="flex gap-3 rounded-2xl shadow-xl px-[40px] py-[50px] border border-slate-200">
            <HiClipboardDocumentList className="text-6xl text-white" />
            <div className="text-white">
              <h1 className="text-[25px] font-Livvic font-bold">
                Submit the details
              </h1>
              <p className="text-[16px]">Complete the Onboradind</p>
            </div>
          </div>
          <div className="flex gap-3 rounded-2xl shadow-xl px-[40px] py-[50px] border border-slate-200">
            <TbMessageSearch className="text-6xl text-white" />
            <div className="text-white">
              <h1 className="text-[25px] font-Livvic font-bold">We Evaluate</h1>
              <p className="text-[16px]">Present propurse strategy</p>
            </div>
          </div>
          <div className="flex gap-3 rounded-2xl shadow-xl px-[40px] py-[50px] border border-slate-200">
            <VscGraph className="text-6xl text-white" />
            <div className="text-white">
              <h1 className="text-[25px] font-Livvic font-bold">
                We Deliver Results
              </h1>
              <p className="text-[16px]">End to End Project execution</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeWork;
