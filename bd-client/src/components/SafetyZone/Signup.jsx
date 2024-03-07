import { Link, useNavigate } from "react-router-dom";
import { ImSpinner4 } from "react-icons/im";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Signup = () => {
  const { loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    axios.get(`${import.meta.env.VITE_API_URL}/register`).then((res) => {
      setUser(res.data);
    });
  };
  console.log(user);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${import.meta.env.VITE_API_URL}/register`, {
        email,
        userName,
        password,
      })
      .then(() => {
        toast.success("Registration successfull");
        setEmail();
        setUserName();
        setPassword();
        fetchUser();
        navigate(`/login`);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md px-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-4 text-center">
          <h1 className="my-2 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to Solution BD IT</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="*******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <ImSpinner4 size={24} className="m-auto animate-spin" />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>

        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Signup;
