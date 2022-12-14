import React from "react";
import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillYahoo,
  AiFillTwitterCircle
} from "react-icons/ai";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <div className="bg-zinc-200 h-screen flex justify-center items-center">
        <div className="bg-white h-96 pl-10 w-{350px} flex flex-col justify-center space-y-3 rounded-3xl shadow-xl shadow-black/30">
          <form className="space-y-4" action="">
            <div>
              <p className="font-semibold text-2xl">LOGIN</p>
            </div>

            <div className="mr-5">
              <p className="text-zinc-600 font-semibold"> Email:</p>
              <input
                className="outline-none h-10 border-sm w-full"
                type="text"
                placeholder="Email"
                required
              />
            </div>

            <div className="mr-5">
              <p className="text-zinc-600 font-semibold"> Password:</p>
              <input
                className="outline-none h-10 border-sm w-full"
                type="password"
                placeholder="Password"
                required
              />
              <div className="flex gap-5 mt-1">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>

              <div className="">
                <button className="bg-red-400 w-full text-white font-semibold h-10 rounded-full hover:bg-red-600 ">Log in</button>
                <p className="text-end text-xs my-1">Forgot Password?</p>
              </div>
              <p className="flex justify-center font-semibold">Or login with </p>

              <div className="flex flex-row justify-center gap-8 text-xl my-1">
                <AiFillFacebook className="rounded-full text-blue-600"  />
                <AiFillGoogleCircle className="rounded-full text-red-500"/> 
                <AiFillYahoo className="rounded-full text-purple-900"/> 
                <AiFillTwitterCircle className="rounded-full text-cyan-600"/>
                
              </div>
              <div>
                <p className="text-zinc-500 text-sm text-left my-1">Need an Account?</p>
                <span className="text-black font-bold underline underline-offset-2 my-0 ">
                  <Link className="hover:bg-green-100" to="/SignUp"> Register New Account </Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
