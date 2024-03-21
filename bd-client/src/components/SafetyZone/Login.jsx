import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useContext, useEffect, useState } from "react";

import { TbFidgetSpinner } from "react-icons/tb";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

// import { saveUser } from "../../Api/auth";

const Login = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const [user, setUser] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.pathname || "/";
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // console.log(email);

  useEffect(() => {
    setLoading(true);
    fetchUser();
  }, []);

  const fetchUser = () => {
    axios.get(`${import.meta.env.VITE_API_URL}/register`).then((res) => {
      // console.log(res.data);
      setLoading(false);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        {
          email,
          password,
        }
      );
      const token = response.data.token;
      localStorage.setItem("token", token); // Store the token in local storage
      toast.success("Login successful");

      setEmail("");
      setPassword("");
      fetchUser();

      navigate(from, { replace: true });
      window.location.reload();
    } catch (error) {
      toast.error("Login Error found");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen pt-2 shadow-lg">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
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
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Here"
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
                <TbFidgetSpinner size={24} className="m-auto animate-spin" />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>
        {/* <div className="space-y-1">
          <button
            onClick={handleReset}
            className="text-xs hover:underline hover:text-rose-500 text-gray-400"
          >
            Forgot password?
          </button>
        </div> */}

        <p className="px-6 text-sm text-center text-gray-400">
          Don't have an account yet?{" "}
          <Link
            to="/signup"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
