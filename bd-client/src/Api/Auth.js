import axios from "axios";
import useAxiosSecure from "../Hooks/useAxiosSecure";

export const fetchUserData = async () => {
  const [axiosSecure] = useAxiosSecure();
  try {
    const response = await axiosSecure.get(`/register`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const becomeHost = async (email) => {
  const currentUser = {
    role: `host`,
  };
  return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  }).then((res) => res.json());
};
