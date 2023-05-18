/* eslint-disable react/prop-types */
import { useStates } from "../context/useStates";

const SignUp = ({ isFlipped, setIsFlipped }) => {
  const { handleChangeSignUpFormData, handleSignUp,signUpFormUser,quote } = useStates();
  return (
    <div className="flex w-full flex-col  duration-500">
      <h1 className="text-4xl font-poppins  font-semibold p-3 flex justify-start w-full">
        Sign Up
      </h1>
      <p className="w-full pl-3 text-gray-300 font-poppins">{quote}</p>
      <form
        className="flex flex-col justify-center w-full mx-auto"
        action=""
        onSubmit={handleSignUp}
      >
        <div className="inputBox relative w-9/12 mx-auto">
          <input
            name="username"
            onChange={handleChangeSignUpFormData}
            className="w-full"
            type="text"
            required="required"
            value={signUpFormUser.username}
          />
          <span className="absolute">UserName</span>
          <i className="absolute"></i>
        </div>
        <div className="inputBox relative w-9/12 mx-auto">
          <input
            name="email"
            onChange={handleChangeSignUpFormData}
            className="w-full"
            type="text"
            required="required"
            value={signUpFormUser.email}
          />
          <span className="absolute">Email</span>
          <i className="absolute"></i>
        </div>
        <div className="inputBox relative w-9/12 mx-auto">
          <input
            name="password"
            onChange={handleChangeSignUpFormData}
            className="w-full"
            type="password"
            required="required"
            value={signUpFormUser.password}
          />
          <span className="absolute">Password</span>
          <i className="absolute"></i>
        </div>
        <div className="inputBox relative w-9/12 mx-auto">
          <input
            name="confirmPassword"
            onChange={handleChangeSignUpFormData}
            className="w-full"
            type="password"
            required="required"
            value={signUpFormUser.confirmPassword}
          />
          <span className="absolute">ConfirmPassword</span>
          <i className="absolute"></i>
        </div>
        <div className="flex justify-end mx-auto w-9/12 text-gray-300 mt-2">
          <span
            className="cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            SignIn
          </span>
        </div>
        <div className="w-9/12 flex justify-start mx-auto">
          <input
            onClick={handleSignUp}
            className="p-2 bg-white text-black  mt-4 rounded-lg min-w-[100px] hover:bg-black hover:text-white duration-500 cursor-pointer"
            type="submit"
            value={"SignUp"}
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
