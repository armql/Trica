import React from "react";
import Input from "../common/Input";
import useToggle from "../../hooks/useToggle";
import SignupOutro from "../custom/SignupOutro";

export default function AuthForm({ essentials, type }) {
  const { auto, effect } = useToggle();

  return (
    <form className="flex flex-col gap-4 h-full">
      {type === "signup" && (
        <div className="flex flex-row gap-2 border-b items-center justify-start">
          {essentials.mail}
          <Input type="email" name="email" id="email" placeholder="Email" />
        </div>
      )}
      <div className="flex flex-row gap-2 border-b items-center justify-start">
        {essentials.avatar}
        <Input type="text" name="name" id="name" placeholder="Username" />
      </div>
      <div className="flex flex-row gap-2 border-b items-center justify-start">
        {essentials.password}
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <SignupOutro effect={effect} essentials={essentials} auto={auto} />
    </form>
  );
}
