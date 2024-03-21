import React from "react";
import { TbCloudCog } from "react-icons/tb";
import { TbSettingsAutomation } from "react-icons/tb";
import { BsDatabaseGear } from "react-icons/bs";
import { FaUsersGear } from "react-icons/fa6";
import { IoIosContacts } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa6";
const ServiceHome = () => {
  return (
    <>
      <div className="">
        <div className="text-center">
          <h2 className="font-bold text-[#282828]  text-[30px] xl:lg:md:text-[40px] font-Livvic">
            OUR SERVICES
          </h2>
          <h3 className="font-normal text-[16px] my-[40px] w-[80%] mx-auto">
            We designed our services to give you complete peace of mind with
            your mission-critical databases with reliability, scalability, and
            efficiency. From Cloud Services, Automation, Data Modernisation Web
            Development to IT consulting. Our dedicated team of Engineers would
            help you efficiently plan, implement, and manage your traditional
            and emerging databases, on-premise or in the cloud.
          </h3>
        </div>
        <div className="grid grid-cols-1 xl:lg:md:grid-cols-3 gap-8 my-[40px]">
          <div className="card-container">
            <div className="card flex gap-3 rounded-2xl shadow-xl px-[40px] py-[50px] border border-slate-200">
              <TbCloudCog className="text-6xl text-blue-700" />
              <div>
                <h1 className="text-[25px] font-Livvic font-bold">
                  Cloud Services
                </h1>
                <p className="text-[16px]">
                  Our team gets it done on time. Every time.
                </p>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="w-full flex gap-3 rounded-2xl shadow-xl px-[40px] py-[50px] border border-slate-200 card">
              <TbSettingsAutomation className="text-6xl text-blue-700" />
              <div>
                <h1 className="text-[25px] font-Livvic font-bold">
                  Automation
                </h1>
                <p className="text-[16px]">We're ready to grow with you.</p>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card flex gap-3 rounded-2xl shadow-xl px-[40px] py-[50px] border border-slate-200">
              <BsDatabaseGear className="text-6xl text-blue-700" />
              <div>
                <h1 className="text-[25px] font-Livvic font-bold">
                  Data Modernisation
                </h1>
                <p className="text-[16px]">
                  Increase efficiency & improve the bottom line
                </p>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card flex gap-3 rounded-2xl shadow-xl px-[40px] py-[50px] border border-slate-200">
              <FaUsersGear className="text-9xl text-blue-700" />
              <div>
                <h1 className="text-[25px] font-Livvic font-bold">
                  Staff Augmentation
                </h1>
                <p className="text-[16px]">
                  Facing unforeseen staffing needs? Our team will move mountains
                  for your success.
                </p>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card flex gap-3 rounded-2xl shadow-xl px-[40px] py-[50px] border border-slate-200">
              <IoIosContacts className="text-9xl text-blue-700" />
              <div>
                <h1 className="text-[25px] font-Livvic font-bold">
                  IT Consulting
                </h1>
                <p className="text-[16px]">
                  We'll take time to understand your needs and goals, then draft
                  the perfect solution.
                </p>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card flex gap-3 rounded-2xl shadow-xl px-[40px] py-[50px] border border-slate-200">
              <FaLaptopCode className="text-9xl text-blue-700" />
              <div>
                <h1 className="text-[25px] font-Livvic font-bold">
                  Web Development
                </h1>
                <p className="text-[16px]">
                  Don't let your round-the-clock concerns keep you up all night.
                  We're here for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceHome;
