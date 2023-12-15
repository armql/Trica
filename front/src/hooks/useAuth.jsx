import { useState } from "react";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [type, setType] = useState("");

  const toggleAuth = (authType) => {
    if (authType === "signup") {
      setType("signup");
      setIsAuth(true);
    } else if (authType === "signin") {
      setType("signin");
      setIsAuth(true);
    }
  };

  const closeAuth = () => {
    setIsAuth(false);
    setType("");
  };

  return { isAuth, toggleAuth, closeAuth, type };
};

export default useAuth;
