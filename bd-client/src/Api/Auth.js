import axios from "axios";
import { useEffect, useState } from "react";

const [user, setUser] = useState([]);
useEffect(() => {
  allUserDetails();
}, []);

const allUserDetails = () => {
  axios.get(`${import.meta.env.VITE_API_URL}/register`).then((res) => {
    setUser(res.data);
  });
};

console.log(user);

export default allUserDetails;
