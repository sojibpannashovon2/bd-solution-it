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
