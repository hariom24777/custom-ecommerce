import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <section className="py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] font-[500]">
            Log in to your account
          </h3>

          <form className="w-full mt-5">
            <div className="form-group w-full mb-5">
              <TextField
                type="email"
                id="email"
                label="Email Id"
                variant="outlined"
                className="w-full"
                required
              />
            </div>
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isShowPassword === true ? "text" : "password"}
                id="password"
                label="Password"
                variant="outlined"
                className="w-full"
                required
              />
              <Button
                className="!absolute top-[10px] right-[10px] z-50 !w-[px] !h-[35px] !min-w-[35px] !rounded-full !text-[rgba(0,0,0,0.7)]"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword === true ? (
                  <IoMdEye className="text-[20px]" />
                ) : (
                  <IoMdEyeOff className="text-[20px]" />
                )}
              </Button>
            </div>

            <a href="" className="link cursor-pointer text-[14px] font-[500]">Forgot Password?</a>

            <div className="flex items-center w-full mt-3 mb-3">
                <Button className="btn-org btn-lg w-full">Login</Button>
            </div>

                <p className="text-center mb-2">Not Registered? <Link to="/register" className="link text-[14px] font-[600] text-primary">Sign Up</Link></p>

                <p className="text-center font-[500] mb-3">Or continue with social account</p>

                <Button className="flex gap-3 w-full !bg-[#f1f1f1] btn-lg !text-[#242424]"><FcGoogle className="text-[20px]" />Login with Google</Button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
