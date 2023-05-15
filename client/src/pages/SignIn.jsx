/* eslint-disable react/prop-types */
import { useState } from "react";
import { signUpQuotes } from "../constants";
import SignUp from "./SignUp";
import { useStates } from "../context/useStates";

const SignIn = ({ signUpRef }) => {
  const { handleChangeSignInFormData,handleSignIn } = useStates();
  const [isFlipped, setIsFlipped] = useState(false);
  const quote = signUpQuotes[Math.floor(Math.random() * signUpQuotes.length)];
  return (
    <div className="h-screen flex justify-center items-center absolute bg-[#040405] left-0 top-0 w-full bg-opacity-70 duration-500 transition-transform">
      <div
        ref={signUpRef}
        className={`transition-transform w-4/12 max-xl:w-6/12 max-md:w-9/12 max-sm:w-full  flex flex-col  items-center  bg-white bg-opacity-25 backdrop-filter backdrop-blur-lg rounded-lg p-8 duration-500 `}
      >
        {!isFlipped ? (
          <div className="flex w-full flex-col duration-500">
            <h1 className="text-4xl font-poppins  font-semibold p-3 flex justify-start w-full">
              Sign In
            </h1>
            <p className="w-full pl-3 text-gray-300 font-poppins">{quote}</p>
            <form
              className="flex flex-col justify-center w-full mx-auto"
              action=""
              onSubmit={handleSignIn}
            >
              <div className="inputBox relative w-9/12 mx-auto">
                <input onChange={handleChangeSignInFormData} name="email" className="w-full" type="text" required="required" />
                <span className="absolute">Email</span>
                <i className="absolute"></i>
              </div>
              <div className="inputBox relative w-9/12 mx-auto">
                <input onChange={handleChangeSignInFormData} name="password" className="w-full" type="password" required="required" />
                <span className="absolute">Password</span>
                <i className="absolute"></i>
              </div>
              <div className="flex justify-between mx-auto w-9/12 text-gray-300 mt-2">
                <span>forget password? </span>
                <span
                  className="cursor-pointer"
                  onClick={() => setIsFlipped(!isFlipped)}
                >
                  SignUp
                </span>
              </div>
              <div className="w-9/12 flex justify-start mx-auto">
                <input
                  onClick={handleSignIn}
                  className="p-2 bg-white text-black  mt-4 rounded-lg min-w-[100px] hover:bg-black hover:text-white duration-500 cursor-pointer"
                  type="submit"
                  value={"SignIn"}
                />
              </div>
            </form>
          </div>
        ) : (
          <SignUp isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
        )}
      </div>
    </div>
  );
};

export default SignIn;
