import { Suspense, lazy } from "react";
import authBG from "../../assets/images/auth-bg-2.webp";
import useOnLoad from "../../hooks/useOnLoad";
import Authentication from "./authentication/Authentication";
import useAuth from "../../hooks/useAuth";
const Header = lazy(() => import("../../features/Auth/components/Header"));
export default function Auth() {
  const { isOnLoad } = useOnLoad();
  const { isAuth, toggleAuth, closeAuth, type } = useAuth();

  if (!isAuth) {
    return (
      <div className="relative  w-screen h-screen bg-[#CD121F]">
        <Suspense fallback={<div>Loading..</div>}>
          <Header />
        </Suspense>
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
