import React from "react";
import Button from "../common/Button";

export default function SignupOutro({ effect, essentials, auto }) {
  return (
    <div className="p-4 flex-shrink-0">
      <div className="font-light text-sm text-zinc-300">
        At least 8 characters, 1 uppercase letter, 1 number & 1 symbol
      </div>
      <div className="flex gap-2 flex-col h-[20vh] items-center justify-end w-full">
        <div className="flex flex-row gap-2">
          <button
            type="button"
            onClick={auto}
            className={`w-8 h-6 rounded-full ring-2 flex justify-center items-center ${
              effect
                ? "bg-blue-400 ring-blue-600"
                : "bg-zinc-200 ring-transparent"
            }`}
          >
            {effect && essentials.check}
          </button>
          <div className="text-xs text-zinc-400">
            By Signing up, you agree to the{" "}
            <span className="text-black hover:underline">Terms of service</span>{" "}
            and{" "}
            <span className="text-black hover:underline">Privacy Policy</span>
          </div>
        </div>
        <div className="w-[60vw]">
          <Button
            type="submit"
            style={`
      h-full border py-2.5 text-2xl flex items-center font-bold w-full h-full rounded-full px-12 transition-all duration-300 shadow-md
      ${
        effect
          ? "bg-[#0008C7] group text-white border-blue-500 justify-around"
          : "text-zinc-300 border-zinc-50  justify-center"
      }
    `}
          >
            Sign up{" "}
            <div
              className={`transition duration-300 ${
                effect ? "group-hover:translate-x-1" : ""
              }`}
            >
              {" "}
              {effect ? essentials.arrow_right : ""}{" "}
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
