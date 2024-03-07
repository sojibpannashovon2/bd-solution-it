import React from "react";
import { FaDeleteLeft, FaUserAstronaut, FaUserCheck } from "react-icons/fa6";

const TableMangeUser = ({ user, index }) => {
  return (
    <>
      <tr className="border-b border-neutral-200 dark:border-white/10">
        <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
        <td className="whitespace-nowrap px-6 py-4">{user?.userName}</td>
        <td className="whitespace-nowrap px-6 py-4">{user?.email}</td>
        <td className="whitespace-nowrap px-6 py-4">
          <FaUserAstronaut />
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          <FaDeleteLeft />
        </td>
      </tr>
    </>
  );
};

export default TableMangeUser;
