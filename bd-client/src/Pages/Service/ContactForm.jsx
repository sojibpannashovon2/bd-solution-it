import { FaPhone } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import React, { useRef } from "react";
const ContactForm = () => {
  const [axiosSecure] = useAxiosSecure();
  const formRef = useRef(null);
  const handleContact = (event) => {
    event.preventDefault();
    console.log("working");
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
        console.log(res.data);
        formRef.current.reset();
      })
      .catch((err) => {
        toast.error("Message not sent");
        console.log(err);
      });
  };
  return (
    <>
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
    </>
  );
};

export default ContactForm;
