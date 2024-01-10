import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthOutro from "../custom/AuthOutro";
import axiosClient from "../../api/axios/axios";
import validateForm from "./validate/validateForm";
import Signup from "./Signup";
import Signin from "./Signin";
import { useStateContext } from "../../contexts/AuthProvider";
import useToggle from "../../hooks/useToggle";
import essentials from "../../assets/svg/essentials/essentials";

export default function AuthForm({ type }) {
  const { setCurrentUser, setUserToken } = useStateContext();
  const { auto, effect } = useToggle();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [error, setError] = useState({ __html: "" });
  const [isError, setIsError] = useState({
    username: false,
    email: false,
    password: false,
    password_confirmation: false,
  });
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));

    setIsError((prevIsError) => ({
      ...prevIsError,
      [name]: false,
    }));
  }, []);

  const handleSignup = useCallback(async (ev) => {
    ev.preventDefault();
    const errors = validateForm(form, "signup");
    if (errors) {
      setError(errors);
      setIsError(
        Object.keys(errors).reduce((acc, key) => {
          acc[key] = true;
          return acc;
        }, {})
      );
      return;
    }
    setSubmitting(true);
    try {
      await axiosClient.post("/signup", {
        name: form.username,
        email: form.email,
        password: form.password,
        password_confirmation: form.password_confirmation,
      });
      navigate("../home");
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }, []);

  const handleSignin = useCallback(async (ev) => {
    ev.preventDefault();
    setSubmitting(true);
    const errors = validateForm(form, "signin");
    if (errors) {
      setError(errors);
      setIsError(
        Object.keys(errors).reduce((acc, key) => {
          acc[key] = true;
          return acc;
        }, {})
      );
      setSubmitting(false);
      return;
    }

    axiosClient
      .post("/login", {
        email: form.email,
        password: form.password,
        remember: effect,
      })
      .then(({ data }) => {
        setCurrentUser(data.user);
        setUserToken(data.token);
        if (data.user.role === "customer") {
          navigate("/app");
        } else if (data.user.role === "manager") {
          navigate("/user");
        } else {
          navigate("/unknown-role");
        }
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          setError(error.response.data.errors);
        } else {
          setError({ __html: "An error occurred during signup." });
        }
        console.log(error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  }, []);

  if (submitting) {
    return <div>Submitting</div>;
  }

  return (
    <form
      onSubmit={type === "signup" ? handleSignup : handleSignin}
      className="flex flex-col gap-4 h-full"
    >
      {type === "signup" ? (
        <Signup
          setIsError={setIsError}
          onChange={handleInputChange}
          form={form}
          isError={isError}
          essentials={essentials}
        />
      ) : (
        <Signin
          onChange={handleInputChange}
          form={form}
          isError={isError}
          essentials={essentials}
        />
      )}
      <div className="h-32 flex flex-col gap-2">
        {Object.values(error).map((errorMsg, index) => (
          <div key={index} className="font-normal text-xs text-zinc-800">
            {errorMsg}
          </div>
        ))}
      </div>
      <AuthOutro
        essentials={essentials}
        type={type}
        effect={effect}
        auto={auto}
      />
    </form>
  );
}
