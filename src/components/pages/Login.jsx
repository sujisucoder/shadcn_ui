import React, { useState } from "react";
import { Button } from "../ui/button";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate for routing
import { AlertBox } from "../alertBox/AlertBox";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState(""); // State for email
  const [loginPassword, setLoginPassword] = useState(""); // State for password
  const [alertError, setAlertError] = useState(false); // State for alert visibility
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle login
  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log("reached here");
    console.log("loginEmail:", loginEmail);
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword); // Sign in with Firebase
      console.log("this is user:", user);
      navigate('/'); // Navigate to home page on successful login
    } catch (error) {
      console.log("login function error", error.message); // Log any errors
      setAlertError(true); // Show alert box
      setErrorMessage(error.message); // Set error message
    }
  }

  return (
    <>
      <div className="flex justify-center items-center md:p-10 bg-slate-100">
        {alertError && <AlertBox message={errorMessage} />} {/* Conditionally render AlertBox */}

        <div className="flex items-center justify-center text-center h-screen">
          <div className="flex items-center justify-center p-12 bg-white shadow-xl rounded-lg overflow-auto w-[750px]">
            <div>
              <div className="mb-10">
                <div className="font-bold text-3xl">Login Page</div>
                <div className="text-black py-2 hidden">
                  Lorem ipsum dolor sit amet
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center flex-wrap gap-3 items-center ">
                <a
                  href="#"
                  className="flex justify-center items-center gap-2 border border-blue-500 bg-white p-3 h-10 w-48 rounded-md text-gray-800 transition ease duration-300 shadow-md hover:bg-blue-100"
                >
                  <img
                    width="18"
                    height="18"
                    src="https://img.icons8.com/color/48/google-logo.png"
                    alt="google-logo"
                  />
                  <span>Sign in with Google</span>
                </a>
                <a
                  href="#"
                  className="flex justify-center items-center gap-2 border border-blue-500 bg-white p-3 h-10 w-48 rounded-md text-gray-800 transition ease duration-300 shadow-md hover:bg-blue-100"
                >
                  <img
                    width="18"
                    height="18"
                    src="https://img.icons8.com/ios-filled/50/mac-os.png"
                    alt="mac-os"
                  />
                  <span>Sign in with Apple</span>
                </a>
              </div>
              <div className="relative flex items-center justify-center py-8 ">
                <div className="bg-white text-black px-4">Or with email</div>
                <div className="absolute h-px bg-gray-300 w-full z-[-1]"></div>
              </div>
              {/* Form for email and password login */}
              <form className="flex flex-col gap-5 w-auto mx-auto" onSubmit={handleLogin}>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  onChange={(event) => {
                    setLoginEmail(event.target.value); // Update email state
                  }}
                  className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
                />
                <input
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(event) => {
                    setLoginPassword(event.target.value); // Update password state
                  }}
                  className="p-4 h-10 rounded-md border border-blue-500 shadow-md transition ease duration-300 focus:border-blue-500 focus:bg-blue-50"
                />
                <a href="#" className="text-blue-500 text-sm">
                  Forgot Password?
                </a>
                <Button type="submit">Sign in</Button> {/* Submit button */}
                <div className="text-black text-sm flex justify-center items-center gap-1">
                  Not a Member yet?
                  <Link to="/signup" className="text-blue-500"> {/* Use Link for navigation */}
                    Sign up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Optional left image section */}
        {/* <div className=" hidden md:flex items-center justify-around flex-col h-screen  ">
          <div className="bg-white rounded-lg w-88 shadow-xl my-4">
            <img
              src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="logo"
              className="w-full"
            />
          </div>
          <div className="text-gray-800 text-lg">
            Lorem ipsum dolor sit amet
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Login;
