import React, { Fragment, useState } from "react";
import authBG from "../../assets/images/auth-bg-2.webp";
import useOnLoad from "../../hooks/useOnLoad";
import Authentication from "./authentication/Authentication";
import useAuth from "../../hooks/useAuth";
export default function Auth() {
  const { isOnLoad } = useOnLoad();
  const { isAuth, toggleAuth, closeAuth, type } = useAuth();

  if (!isAuth) {
    return (
      <div className="relative  w-screen h-screen bg-[#CD121F]">
        <div className="w-full h-full absolute  backdrop-blur-[1px] bg-opacity-10 bg-white left-0 top-0 right-0 bottom-0 z-10"></div>
        <div className="flex items-center flex-col absolute z-10">
          <div className="py-8 px-2 text-orange-400 font-light tracking-tighter text-2xl text-start">
            Buy & Sell Authentic
          </div>
        </div>
        <div className="flex mt-6 items-center flex-col absolute z-10">
          <div className="py-10 italic tracking-wide px-2 font-bold bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent text-5xl text-start">
            Trica Store
          </div>
        </div>
        <div className="absolute z-10 w-full h-full flex justify-end flex-col px-10 gap-4 py-12">
          <div className="w-full mx-auto">
            <button
              type="button"
              onClick={() => toggleAuth("signup")}
              className="text-lg font-semibold bg-white w-full py-2.5 rounded-full hover:bg-zinc-100 active:bg-zinc-200 transition"
            >
              Sign up
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => toggleAuth("signin")}
              className="text-lg font-semibold text-white bg-zinc-800 transition active:bg-opacity-50 hover:bg-opacity-40 bg-opacity-30 backdrop-blur-xl w-full py-2.5 rounded-full"
            >
              Sign in
            </button>
          </div>
        </div>
        <img
          src={authBG}
          alt=""
          className={`overflow-hidden object-cover w-full h-full transition-transform duration-500 absolute ${
            isOnLoad ? "scale-100" : "scale-110"
          }`}
        />
      </div>
    );
  } else {
    return <Authentication type={type} close={closeAuth} />;
  }
}
