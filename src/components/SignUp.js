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
      <div className="flex h-screen justify-center items-center bg-zinc-300">
        <img
          className="flex h-screen w-auto"
          src={image}
          height={100}
          width={200}
          alt=""
        />
        <div className=" flex h-auto">
          <div className="bg-white h-30 pl-10 w-auto flex flex-col justify-center  rounded-3xl shadow-xl shadow-black/30">
            <form className="space-y-4" action="">
              <div>
                <p className="font-semibold text-2xl">SIGN UP</p>
              </div>
              <div className="mr-5">
                <p className="text-zinc-600 font-semibold"> Full Name</p>
                <input
                  className="outline-none h-10 border-sm w-full"
                  type="text"
                  placeholder="name"
                  required
                />
              </div>

              <div className="mr-5">
                <p className="text-zinc-600 font-semibold"> Your Email</p>
                <input
                  className="outline-none h-10 border-sm w-full"
                  type="text"
                  placeholder="email"
                  required
                />
              </div>

              <div className="mr-5">
                <p className="text-zinc-600 font-semibold"> Password</p>
                <input
                  className="outline-none h-10 border-sm w-full"
                  type="password"
                  placeholder="password"
                  required
                />
                

                <div className="">
                  <button className="bg-red-400 w-full text-white font-semibold h-10 rounded-full hover:bg-red-600 ">
                    Sign up
                  </button>
                  <p className="text-end text-xs my-1">Forgot Password?</p>
                </div>
                <p className="flex justify-center font-semibold">
                  Or login with{" "}
                </p>

                <div className="flex flex-row justify-center gap-8 text-xl my-1">
                  <AiFillFacebook className="rounded-full text-blue-600" />
                  <AiFillGoogleCircle className="rounded-full text-red-500" />
                  <AiFillYahoo className="rounded-full text-purple-900" />
                  <AiFillTwitterCircle className="rounded-full text-cyan-600" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm text-left my-1">
                    Already registered?
                  </p>
                  <span className="text-black font-bold underline underline-offset-2 my-0 ">
                    <Link className="hover:bg-green-100" to="/">
                      Log in
                    </Link>
                  </span>
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
