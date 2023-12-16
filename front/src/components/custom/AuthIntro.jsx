import React, { Fragment } from "react";

export default function AuthIntro({ type, close, closeIcon }) {
  return (
    <Fragment>
      <div className="w-full py-8 flex justify-start items-center">
        <button
          type="button"
          onClick={close}
          className="rounded-full p-2 flex justify-center items-center bg-zinc-100 hover:bg-transparent border border-zinc-200 active:cursor-wait active:bg-zinc-200"
        >
          {closeIcon}
        </button>
      </div>
      <div className="text-3xl font-semibold">
        {type === "signup" ? "Let's Get Started!" : "Welcome"}
      </div>
      <div className="px-0.5 font-light text-zinc-500 text-sm">
        {type === "signup"
          ? "Sign up with Social of fill the form to continue"
          : "Sign in with Social of fill the form to continue"}
      </div>
    </Fragment>
  );
}
