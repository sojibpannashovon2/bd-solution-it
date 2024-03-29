import React, { useRef } from "react";
import Container from "../../components/Shared/Container";
import { FaPhone } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const Contact = () => {
  const [axiosSecure] = useAxiosSecure();
  const formRef = useRef(null);
  const handleContact = (event) => {
    event.preventDefault();

    const userName = event.target.userName.value;
    const email = event.target.email.value;
    const subject = event.target.subject.value;
    const phone = event.target.phone.value;
    const message = event.target.message.value;
    console.log(userName, email, subject, phone, message);
    axiosSecure
      .post(`/contacts`, {
        userName,
        email,
        subject,
        phone,
        message,
      })
      .then((res) => {
        toast.success("Contact message sent successfully");

        formRef.current.reset();
      })
      .catch((err) => {
        toast.error("Message not sent");
        console.log(err);
      });
  };

  return (
    <>
      <Container>
        <div>
          <div className="contact bg-opacity-30 h-full xl:lg:md:h-[423px] text-center  my-[20px] ">
            <div className="bg-blue-600 bg-opacity-40 text-white h-full">
              <div className=" w-96 mx-auto  ">
                <h2 className="font-bold text-[30px] xl:lg:md:text-[60px] font-Livvic py-[150px]">
                  Contact Us
                </h2>
              </div>
            </div>
          </div>

          <div className="text-center mt-32">
            <h2 className="font-semibold text-2xl font-Livvic ">
              ------------ GET IN TOUCH -----------
            </h2>
            <h1 className="font-bold text-[50px] font-Livvic ">
              Have Any Question?
            </h1>

            <div className=" mb-24 mt-4 py-24 rounded-xl shadow-lg bg-blue-700 text-white border border-blue-300 p-12 xl:lg:md:w-[30%] mx-auto">
              <div className="w-[10%]  text-4xl mx-auto my-4">
                <FaPhone />
              </div>
              <h2 className="text-2xl font-bold">Call Or Email Us</h2>
              <h3 className="text-xl">Info@paradigmitsolutions.com</h3>
              <p>+1 (713) 589-7890</p>
            </div>
          </div>

          <div className="max-w-4xl bg-white py-10 px-5 m-auto w-full my-24 border border-slate-200 rounded-xl shadow-lg p-8">
            <div className="text-3xl mb-6 text-center ">Send Your Message</div>

            <form
              ref={formRef}
              onSubmit={handleContact}
              className="grid grid-cols-2 gap-4 max-w-3xl m-auto"
            >
              <div className="col-span-2 lg:col-span-1">
                <input
                  type="text"
                  className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                  placeholder="name"
                  name="userName"
                />
              </div>

              <div className="col-span-2 lg:col-span-1">
                <input
                  type="text"
                  className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <input
                  type="text"
                  className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                  placeholder="Subject"
                  name="subject"
                />
              </div>

              <div className="col-span-2 lg:col-span-1">
                <input
                  type="text"
                  className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                  placeholder="Phone Number"
                  name="phone"
                />
              </div>

              <div className="col-span-2">
                <textarea
                  cols="30"
                  rows="8"
                  className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                  placeholder="Message"
                  name="message"
                ></textarea>
              </div>

              <div className="col-span-2 text-center">
                <button
                  type="submit"
                  className="py-3 px-6 bg-blue-700 rounded-lg text-white font-bold w-full sm:w-32"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
