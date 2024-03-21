import React, { useEffect } from "react";
import Container from "../../components/Shared/Container";
import { Link } from "react-router-dom";
import image from "../../assets/service/consulting.jpg";
const Consulting = () => {
  useEffect(() => {
    const image = document.getElementById("animatedImage");
    if (image) {
      image.classList.add("slideInAnimation");
    }
  }, []);
  return (
    <>
      <Container>
        <div className="banner bg-opacity-30 h-full xl:lg:md:h-[423px] text-center  my-[20px] ">
          <div className="bg-blue-600 bg-opacity-40 text-white h-full">
            <div className=" w-96 mx-auto  ">
              <h2 className="font-bold text-[30px] xl:lg:md:text-[60px] font-Livvic py-[150px]">
                Consulting
              </h2>
            </div>
          </div>
        </div>

        <div className="xl:lg:md:flex justify-between gap-8 my-[60px] w-[85%] mx-auto">
          <div className="xl:lg:md:w-1/2">
            {/* xl:lg:md:w-[60%] xl:lg:md:ml-[40px] */}
            <div className="">
              <h1 className="Sans-serif font-bold text-[20px] xl:lg:md:text-[30px] font-Livvic mt-8 xl:lg:md:mt-0">
                ABOUT US ----
              </h1>
              <h2 className="font-bold text-[#282828]  text-[30px] xl:lg:md:text-[40px] font-Livvic">
                Collaboration To Achieve Your Aspirations
              </h2>
              <h3 className="font-normal text-[16px]">
                Paradigm IT Solutions is an IT Consulting services Provider for
                Data modernization and Automation Strategy to organisations. Our
                On-demand training will equip your with the skills to meet and
                your business goals.
              </h3>
              <Link
                to={`/about`}
                className="pb button text-[16px] font-Livvic border border-blue-700 mt-[40px] bg-blue-700 text-white"
              >
                LEARN MORE
              </Link>
            </div>
          </div>

          <div className="xl:lg:md:w-1/2">
            <img
              id="animatedImage"
              className="rounded-lg shadow-md"
              src={image}
              alt=""
            />
          </div>
        </div>

        <div className="">
          <div className="text-center">
            <h2 className="text-[16px] font-semibold">
              --------- JOB OPPORTUNITIES -----------
            </h2>
            <h2 className="font-bold text-[#282828]  text-[30px] xl:lg:md:text-[40px] font-Livvic">
              Careers At Atang IT Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 xl:lg:md:grid-cols-2 gap-8 my-[40px]">
            <div className="card-container">
              <div className="border-l-4 border-blue-700 flex gap-3 rounded-2xl shadow-xl px-[40px] py-[50px]  card">
                <div>
                  <h1 className="text-[25px] font-Livvic font-bold">
                    Staff Augmentation
                  </h1>
                  <p className="text-[16px]">
                    Facing unforeseen staffing needs? Our team will move
                    mountains for your success.
                  </p>

                  <div className="flex justify-end">
                    <button className=" bg-blue-700 text-white rounded-md px-4 py-2">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-container">
              <div className="border-l-4 border-blue-700 flex gap-3 rounded-2xl shadow-xl px-[40px] py-[50px]  card">
                <div>
                  <h1 className="text-[25px] font-Livvic font-bold">
                    Staff Augmentation
                  </h1>
                  <p className="text-[16px]">
                    Facing unforeseen staffing needs? Our team will move
                    mountains for your success.
                  </p>

                  <div className="flex justify-end">
                    <button className=" bg-blue-700 text-white rounded-md px-4 py-2">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-container">
              <div className="border-l-4 border-blue-700 flex gap-3 rounded-2xl shadow-xl px-[40px] py-[50px]  card">
                <div>
                  <h1 className="text-[25px] font-Livvic font-bold">
                    Staff Augmentation
                  </h1>
                  <p className="text-[16px]">
                    Facing unforeseen staffing needs? Our team will move
                    mountains for your success.
                  </p>

                  <div className="flex justify-end">
                    <button className=" bg-blue-700 text-white rounded-md px-4 py-2">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-container">
              <div className="border-l-4 border-blue-700 flex gap-3 rounded-2xl shadow-xl px-[40px] py-[50px]  card">
                <div>
                  <h1 className="text-[25px] font-Livvic font-bold">
                    Staff Augmentation
                  </h1>
                  <p className="text-[16px]">
                    Facing unforeseen staffing needs? Our team will move
                    mountains for your success.
                  </p>

                  <div className="flex justify-end">
                    <button className=" bg-blue-700 text-white rounded-md px-4 py-2">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Consulting;
