import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <main className="h-screen w-full relative">
      <div
        className="absolute bg-[#FFFFFFBF]/80 rounded-[40px]  top-0 bottom-0 my-auto h-fit p-10 right-28
      max-w-xl w-full"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h4 className="text-lg">
              Welcome to{" "}
              <span className="font-semibold text-[#E2433D]">VIDGIST</span>
            </h4>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-[#8D8D8D]">No Account ?</span>
            <Link to={"/signin"} className="text-sm text-[#415B93]">
              Sign up
            </Link>
          </div>
        </div>
        <h3 className="text-5xl font-medium">Sign in</h3>
        <form onSubmit={handleSubmit} className="flex flex-col mt-12 gap-y-8">
          <div className="flex flex-col gap-y-[13px]">
            <label htmlFor="">Enter your username or email address</label>
            <input
              type="text"
              className="text-sm p-4 px-6 font-light rounded-lg bg-white placeholder-[#808080]"
              placeholder="Username or email address"
            />
          </div>
          <div className="flex flex-col gap-y-[13px]">
            <label htmlFor="">Enter your Password</label>
            <input
              type="password"
              className="text-sm p-4 px-6 font-light rounded-lg bg-white placeholder-[#808080]"
              placeholder="Password"
            />
          </div>
          <button className="p-4 flex items-center justify-center text-white  bg-[#E2433D] rounded-lg">
            Sign in
          </button>
        </form>
      </div>
      <img src="/logo.svg" alt="" className="absolute top-6 left-6 w-[170px]" />
      <img src="/login.jpeg" alt="" className="w-full h-full object-cover" />
    </main>
  );
};

export default Login;
