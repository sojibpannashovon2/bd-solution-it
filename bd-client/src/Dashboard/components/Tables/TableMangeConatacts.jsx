import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const TableMangeConatacts = ({ contact, refetch, index }) => {
  const [axiosSecure] = useAxiosSecure();
  const handleDeleteContact = (id) => {
    axiosSecure
      .delete(`/contact/${id}`)
      .then((res) => {
        refetch();
        console.log("Delete Successfull");
        toast.error("Delete Successfull");
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  return (
    <>
      <tr className="border-b border-neutral-200 dark:border-white/10">
        <td className="whitespace-nowrap px-6 py-4  font-semibold text-xl">
          {index + 1}
        </td>
        {/* <td className="whitespace-nowrap px-6 py-4 font-semibold text-xl">
          {user?.userName}
        </td> */}
        <td className="whitespace-nowrap px-6 py-4 font-semibold text-xl">
          {contact?.email}
        </td>
        <td className=" w-[600px]  px-6 py-4 text-lg hover:text-green-600">
          {contact?.message}
        </td>
        <td
          onClick={() => handleDeleteContact(contact?._id)}
          className="whitespace-nowrap px-6 py-4 text-2xl hover:text-red-600"
        >
          <FaDeleteLeft />
        </td>
      </tr>
    </>
  );
};

export default TableMangeConatacts;
