import React, { useContext, useEffect, useState } from "react";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Providers/AuthProvider";
import TableMangeUser from "./Tables/TableMangeUser";
import Loader from "../../components/Shared/Loader";

const ManageUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const [userData, setUserData] = useState([]);

  const { loading } = useContext(AuthContext);

  const fetchUserData = () => {
    // getHostsRooms(user?.email)
    axiosSecure
      .get(`/register`)
      .then((data) => {
        // console.log(data);
        setUserData(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  //   console.log(userData);

  const {
    isPending,
    error,
    data: register = [],
    refetch,
  } = useQuery({
    queryKey: ["register"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/register`);
      //   console.log(res.data);
      return res.data;
    },
  });
  console.log(register);
  if (isPending) return <Loader />;

  //   the website you're requesting hasn't been updated since the last time you accessed it.

  //   if (error) return "An error has occurred: " + error.message;
  //   console.log(users);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const data = await fetchUserData();
  //         setUserData(data);
  //       } catch (error) {

  //         console.error("Error fetching user data in UserDataComponent:", error);
  //       }
  //     };
  //     fetchData();
  //   }, []);
  //   console.log(userData);
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
                  {register?.map((user, index) => (
                    <TableMangeUser key={user._id} user={user} index={index} />
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
