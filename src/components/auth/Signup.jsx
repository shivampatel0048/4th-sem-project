import React, { useEffect, useState } from "react";
import { stylesync } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "./context/AuthContext";

const SignUp = () => {

  const navigate = useNavigate();
  const auth = useAuth();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      toast.loading("Signing Up", { id: "signup" });
      await auth?.signup(name, email, password);
      toast.success("Signed Up Successfully", { id: "signup" });
    } catch (error) {
      console.log(error);
      toast.error("Signing Up Failed", { id: "signup" });
    }
  };

  useEffect(() => {
    if (auth?.user) {
      navigate("/shivam");
    }
  }, [auth]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 bg-n-8/90 backdrop-blur-sm `}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <Link className="flex w-[12rem] md:my-3 xl:mr-8" to="/">
            <img src={stylesync} width={190} height={40} alt="StyleSync" />
          </Link>
        </div>
      </div>

      <div className="mt-28 m-4 flex justify-center items-center">
        <div className="bg-n-6/40 rounded-lg p-8 md:px-16 w-[500px]">
          <h2 className="md:h4 h5 text-center mb-8">Signup to StyleSync</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="Name"
                className="block text-sm font-medium mb-1 mt-6"
              >
                Name
              </label>
              <input
                type="text"
                id="Name"
                name="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full border rounded-md py-2 px-4 focus:outline-none sm:text-sm placeholder-gray-400/50 bg-n-5/50 border-n-5/80 mb-4"
                placeholder="Enter full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border rounded-md py-2 px-4 focus:outline-none sm:text-sm placeholder-gray-400/50 bg-n-5/50 border-n-5/80"
                placeholder="Email"
              />
            </div>
            <div>
              <label
                htmlFor="Password"
                className="block text-sm font-medium mb-1 mt-6"
              >
                Password
              </label>
              <input
                type="password"
                id="Password"
                name="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full border rounded-md py-2 px-4 focus:outline-none sm:text-sm placeholder-gray-400/50 bg-n-5/50 border-n-5/80 mb-4"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full mx-auto py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 rounded-full border border-white/50 hover:bg-gray-700/30 focus:z-10  dark:focus:ring-gray-700 dark:text-gray-400 "
            >
              Sign Up
            </button>

            <div className="flex justify-center items-center">
              <hr className="border-t border-gray-300/30 flex-grow" />
              <span className="mx-2 text-gray-500 mb-1 ">or</span>
              <hr className="border-t border-gray-300/30 flex-grow" />
            </div>
            <button className="w-full mx-auto py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 rounded-full border border-white/50 hover:bg-gray-700/30 focus:z-10  dark:focus:ring-gray-700 dark:text-gray-400">
              Continue with Google
            </button>
          </form>


          <div className="text-center mt-20">
            <div className="flex justify-center items-center">
              <hr className="border-t border-gray-300/30 flex-grow" />
              <span className="mx-2 text-gray-500 mb-1 ">
                Don't have an StyleSync account?
              </span>
              <hr className="border-t border-gray-300/30 flex-grow" />
            </div>
            <Link to="/login">
              <button className="w-1/2 mx-auto py-2.5 px-5 mt-4 me-2 mb-2 text-sm font-medium text-gray-900 rounded-full border border-white/50 hover:bg-gray-700/30 focus:z-10  dark:focus:ring-gray-700 dark:text-gray-400">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;