import React, { useContext, useEffect, useState } from "react";
import { FaDeleteLeft, FaUserAstronaut, FaUserCheck } from "react-icons/fa6";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";
import toast from "react-hot-toast";

const TableMangeUser = ({ user, index, refetch }) => {
  // console.log(user.role);
  const [axiosSecure] = useAxiosSecure();

  const { setIdentity } = useContext(AuthContext);

  const handleMakeAdmin = async (userad) => {
    const currentUser = {
      role: "admin",
    };

    await axiosSecure
      .put(`/users/${userad?.email}`, currentUser)
      .then((response) => {
        setIdentity(`admin`);
        console.log(response.data); // Optionally handle response
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  const handleDeleteUser = (id) => {
    axiosSecure
      .delete(`/users/${id}`)
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
        <td className="whitespace-nowrap px-6 py-4 font-semibold text-xl">
          {user?.userName}
        </td>
        <td className="whitespace-nowrap px-6 py-4 font-semibold text-xl">
          {user?.email}
        </td>
        <td className="whitespace-nowrap px-6 py-4 text-2xl hover:text-green-600">
          {user?.role == "admin" ? (
            "Admin"
          ) : (
            <span
              onClick={() => handleMakeAdmin(user)}
              className="btn btn-ghost hover:bg-orange-600 "
            >
              <FaUserAstronaut className="w-8 h-8"></FaUserAstronaut>
            </span>
          )}
        </td>
        <td
          onClick={() => handleDeleteUser(user?._id)}
          className="whitespace-nowrap px-6 py-4 text-2xl hover:text-red-600"
        >
          <FaDeleteLeft />
        </td>
      </tr>
    </>
  );
};

export default TableMangeUser;
