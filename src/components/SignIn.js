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
      <div className="bg-zinc-300 h-screen flex justify-center items-center">
        <div className="bg-white h-50 pl-5 pr-0 pt-5 pb-5 w-64 flex flex-col justify-center space-y-5 border-blue-500  shadow-xl shadow-blue-500/30">
          <form className="w-full max-w-sm" action="">
            <div className="flex flex-col text-left">
              <h2 className="font-bold text-xl text-blue-800 font-serif text-left flex justify-center mr-4">LOG IN</h2>
              
            </div>

            <div className="mr-5">
              <p className="text-zinc-600 mt-4 font-semibold"> Email:</p>
              <input
                className="outline-none h-5 mb-1 border-sm w-full placeholder:italic placeholder:text-slate-300 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm"
                type="text"
                placeholder="email"
                required/>
            </div>

            <div className="mr-5">
              <p className="text-zinc-600 font-semibold"> Password:</p>
              <input
                className="outline-none h-5 mb-1 border-sm w-full placeholder:italic placeholder:text-slate-300 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm"
                type="password"
                placeholder="**********"
                required
              />
              <div className="flex gap-2  mt-3 text-xs">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>

              <div className="">
                <button className="bg-red-400 w-full text-white font-semibold h-10 rounded-full hover:bg-red-600 mt-1 ">Log in</button>
               <a href="#"><p className="text-end text-xs my-1 mt-2">Forgot Password?</p> </a> 
              </div>
              <p className="flex justify-center mt-2 mb-2 text-sm font-semibold">Or login with </p>

              <div className="flex flex-row justify-center gap-8 text-xl my-1 mt-2">
              <a href ="#"><AiFillFacebook className="rounded-full text-blue-600 hover: "  /> </a>
              <a href ="#"><AiFillGoogleCircle className="rounded-full text-red-500"/> </a>
              <a href ="#"><AiFillYahoo className="rounded-full text-purple-900"/> </a>
              <a href ="#"> <AiFillTwitterCircle className="rounded-full text-cyan-600"/></a>
                
              </div>
              <div>
                <p className="text-zinc-500 text-sm text-left my-1 mt-2">Need an Account? <span className="text-black font-bold underline underline-offset-1 my-0 ">
                  <Link className="hover:bg-green-100 text-base" to="/SignUp"> Sign Up </Link>
                </span></p>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
