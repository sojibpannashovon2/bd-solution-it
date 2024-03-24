import React, { useContext, useEffect, useState } from "react";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

import TableMangeUser from "./Tables/TableMangeUser";
import Loader from "../../components/Shared/Loader";
import { AuthContext } from "../../Providers/AuthProvider";

const ManageUser = () => {
  const [axiosSecure] = useAxiosSecure();

  const { loading, user } = useContext(AuthContext);

  const {
    isPending,
    error,
    data: users = [],
    refetch,
  } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      //   console.log(res.data);
      return res.data;
    },
  });
  // console.log(users);
  if (isPending) return <Loader />;

  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Make Admin
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((user, index) => (
                    <TableMangeUser
                      key={user._id}
                      user={user}
                      index={index}
                      refetch={refetch}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUser;
