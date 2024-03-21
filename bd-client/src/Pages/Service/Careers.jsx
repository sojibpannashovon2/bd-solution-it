import React from "react";
import Container from "../../components/Shared/Container";
import image from "../../assets/service/careers.webp";
const Careers = () => {
  return (
    <>
      <Container>
        <div>
          <div className="career bg-opacity-30 h-full xl:lg:md:h-[423px] text-center  my-[20px] ">
            <div className="bg-blue-600 bg-opacity-40 text-white h-full">
              <div className=" w-96 mx-auto  ">
                <h2 className="font-bold text-[30px] xl:lg:md:text-[60px] font-Livvic py-[150px]">
                  Careers
                </h2>
              </div>
            </div>
          </div>
          <div className="my-32">
            <div className="text-center">
              <h2 className="text-[16px] font-semibold">
                --------- JOB OPPORTUNITIES -----------
              </h2>
              <h2 className="font-bold text-[#282828]  text-[30px] xl:lg:md:text-[40px] font-Livvic">
                Careers At Paradigm IT Solutions
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
          {/* //contact form */}
          <div className="max-w-4xl bg-white py-10 px-5 m-auto w-full my-24 border border-slate-200 rounded-xl shadow-lg p-8">
            <div className="text-3xl mb-6 text-center ">Send Your Message</div>

            <div className="grid grid-cols-2 gap-4 max-w-3xl m-auto">
              <div className="col-span-2 lg:col-span-1">
                <input
                  type="text"
                  className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                  placeholder="Name"
                />
              </div>

              <div className="col-span-2 lg:col-span-1">
                <input
                  type="text"
                  className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                  placeholder="Email Address"
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <input
                  type="text"
                  className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                  placeholder="Subject"
                />
              </div>

              <div className="col-span-2 lg:col-span-1">
                <input
                  type="text"
                  className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                  placeholder="Phone Number"
                />
              </div>

              <div className="col-span-2">
                <textarea
                  cols="30"
                  rows="8"
                  className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="col-span-2 text-center">
                <button className="py-3 px-6 bg-blue-700 rounded-lg text-white font-bold w-full sm:w-32">
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Careers;
