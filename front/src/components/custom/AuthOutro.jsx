import React from "react";
import Button from "../common/Button";

export default function AuthOutro({ effect, essentials, auto, type }) {
  return (
    <div className="py-4 flex-shrink-0 px-0">
      <div
        className={`flex gap-2 flex-col items-center justify-end w-full ${
          type === "signup" ? "h-[20vh]" : "h-[25vh]"
        }`}
      >
        <div className="flex flex-row gap-2 w-full">
          <button
            type="button"
            onClick={auto}
            className={`rounded-full p-1 ring-4 flex justify-center items-center ${
              effect
                ? "bg-[#0008C7] active:ring-blue-100 ring-transparent"
                : "bg-zinc-200 ring-transparent"
            } ${type === "signup" ? "w-[35px] h-7" : "w-7 h-7"}`}
          >
            {effect && essentials.check}
          </button>
          {type === "signup" ? (
            <div className="text-xs text-zinc-400">
              By Signing up, you agree to the{" "}
              <span className="text-black hover:underline">
                Terms of service
              </span>{" "}
              and{" "}
              <span className="text-black hover:underline">Privacy Policy</span>
            </div>
          ) : (
            <div className="flex justify-center items-center text-xs text-zinc-400">
              Remember me next time
            </div>
          )}
        </div>
        <div className="w-[60vw]">
          <Button
            type="submit"
            disabled={effect === false}
            style={`
      h-full border py-2.5 text-2xl flex items-center font-bold w-full h-full rounded-full px-12 transition-all duration-300 shadow-md
      ${
        effect
          ? "bg-[#0008C7] group text-white border-blue-500 justify-around"
          : "text-zinc-300 border-zinc-50  justify-center hover:bg-zinc-50 hover:cursor-not-allowed"
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
