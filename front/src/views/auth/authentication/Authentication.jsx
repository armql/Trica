import React from "react";
import essentials from "../../../assets/svg/essentials/essentials";
import Social from "../../../components/common/Social";
import AuthForm from "../../../components/forms/AuthForm";
import AuthIntro from "../../../components/custom/AuthIntro";

export default function Authentication({ type, close }) {
  return (
    <div className="px-8">
      <AuthIntro type={type} closeIcon={essentials.close} close={close} />
      <Social essentials={essentials} />
      <div className="w-full h-px bg-zinc-200 my-6"></div>
      <AuthForm essentials={essentials} type={type} />
    </div>
  );
}
