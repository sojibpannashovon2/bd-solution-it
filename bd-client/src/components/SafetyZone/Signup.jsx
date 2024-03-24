import { Link, useLocation, useNavigate } from "react-router-dom";
import { ImSpinner4 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Providers/AuthProvider";

import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Signup = () => {
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.pathname || "/";
  const {
    setLoading,
    createUser,
    signInWithGoogle,
    updateUserProfile,
    loading,
    user,
  } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photo = event.target.photo.value;

    try {
      setLoading(true);
      // Create user with email and password
      const loggedUserCredential = await createUser(email, password);

      // Use loggedUserCredential to get user
      const loggedUser = loggedUserCredential.user;
      // console.log(loggedUser);
      // Update user profile with name and photo
      await updateUserProfile(name, photo); // Await updateUserProfile

      // Save the user to the database or perform any other actions here
      toast.success(`Sign up successful`);

      const currentUser = {
        email: loggedUser?.email,
        // Add other properties of user if needed
      };

      await axiosSecure
        .put(`/users/${loggedUser?.email}`, currentUser)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error updating user:", error);
          toast.error("Error Found");
        });

      navigate(from, { replace: true });
    } catch (err) {
      setLoading(false);
      console.error(err.message);
      toast.error(err.message);
    }
  };

  const handleGoogleSign = async () => {
    try {
      setLoading(true);
      // Sign in with Google
      await signInWithGoogle().then((result) => {
        const user = result?.user;
        //save the user to dataBase

        navigate(from, { replace: true });
      });
    } catch (err) {
      setLoading(false);
      console.error(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md px-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-4 text-center">
          <h1 className="my-2 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to BD SOLUTION IT</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          {/* Form inputs */}
          <div className="space-y-4">
            {/* Name input */}
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            {/* Photo input */}
            <div>
              <label htmlFor="photo" className="block mb-2 text-sm">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="Enter Your photo Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            {/* Email input */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email-input"
                required
                placeholder="Enter Your Email Here"
                autoComplete="email"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
            </div>
            {/* Password input */}
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
                autoComplete="current-password"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
            </div>
          </div>
          {/* Submit button */}
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
        {/* Google sign-in button */}
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          onClick={handleGoogleSign}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />
          <p>Continue with Google</p>
        </div>
        {/* Link to login page */}
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
