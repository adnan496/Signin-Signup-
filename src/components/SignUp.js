import image from "../images/abc.png";
import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillYahoo,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      
       
      <div className="flex h-screen justify-center ml-0 items-center bg-zinc-300">
      <img
          className="flex h-screen w-80"
          src={image}
          
          alt="" />
        <div className=" flex h-auto">
          <div className="bg-white h-30 pl-5 w-auto flex flex-col justify-center  rounded-3xl shadow-xl shadow-blue-500/30">
            <form className="space-y-4" action="">
              <div>
                <p className="font-bold text-xl text-blue-800 font-serif flex justify-center mt-3 mr-10 ">SIGN UP</p>
              </div>
              <div className="mr-5 ">
                <p className="text-zinc-600 font-semibold"> Full Name</p>
                <input
                  className="outline-none h-5 mb-1 border-sm w-full outline-none h-5 mb-1 border-sm w-full placeholder:italic placeholder:text-slate-300 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm"
                  type="text"
                  placeholder="name"
                  required
                />
              </div>

              <div className="mr-5">
                <p className="text-zinc-600 font-semibold"> Your Email</p>
                <input
                  className="outline-none h-5 mb-1 border-sm w-full outline-none h-5 mb-1 border-sm w-full placeholder:italic placeholder:text-slate-300 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm"
                  type="text"
                  placeholder="email"
                  required
                />
              </div>

              <div className="mr-5">
                <p className="text-zinc-600 font-semibold"> Password</p>
                <input
                  className="outline-none h-5 mb-1 border-sm w-full outline-none h-5 mb-1 border-sm w-full placeholder:italic placeholder:text-slate-300 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm"
                  type="password"
                  placeholder="password"
                  required
                />
                <div className="flex gap-1 mb-1 mt-2">
                <input type="checkbox" />
                <p className=" text-xs italic ">agree with all t&c</p>
              </div>

                <div className="">
                  <button className="bg-red-400 w-full text-white font-semibold h-10 rounded-full hover:bg-red-600 mt-1 ">
                    Sign up
                  </button>
                 
                </div>
                <p className="flex justify-center mt-2 mb-2 text-sm font-semibold">
                  Or signup with{" "}
                </p>

                <div className="flex flex-row justify-center gap-8 text-xl my-1">
                <a href ="#"><AiFillFacebook className="rounded-full text-blue-600 hover: "  /> </a>
              <a href ="#"><AiFillGoogleCircle className="rounded-full text-red-500"/> </a>
              <a href ="#"><AiFillYahoo className="rounded-full text-purple-900"/> </a>
              <a href ="#"> <AiFillTwitterCircle className="rounded-full text-cyan-600"/></a>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm text-left my-1 mt-3 mb-5">
                    Already registered? <span className="text-black font-bold underline underline-offset-1  ">
                    <Link className="hover:bg-green-100" to="/">
                      Log In
                    </Link>
                  </span>
                    
                  </p>
                  
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default SignUp;
