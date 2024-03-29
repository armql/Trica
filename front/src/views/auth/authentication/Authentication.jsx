import Social from "../../../components/common/Social";
import AuthForm from "../../../components/forms/AuthForm";
import AuthIntro from "../../../components/custom/AuthIntro";

export default function Authentication({ type, close }) {
  return (
    <div className="px-8 w-full h-full">
      <AuthIntro type={type} close={close} />
      <Social />
      <div className="w-full h-px bg-zinc-200 my-6"></div>
      <AuthForm type={type} />
    </div>
  );
}
