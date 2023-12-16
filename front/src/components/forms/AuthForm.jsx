import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../common/Input";
import useToggle from "../../hooks/useToggle";
import AuthOutro from "../custom/AuthOutro";

function validateForm(form) {
  let errors = {};

  if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "Email is invalid";
  }

  if (!/^[a-zA-Z0-9]+$/.test(form.username)) {
    errors.username = "Username should only contain letters and numbers";
  }

  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      form.password
    )
  ) {
    errors.password =
      "Password should contain at least 8 characters, 1 uppercase letter, 1 number and 1 special character";
  }

  if (form.password !== form.password_confirmation) {
    errors.password_confirmation =
      "Password confirmation does not match password";
  }

  return Object.keys(errors).length > 0 ? errors : null;
}

export default function AuthForm({ essentials, type }) {
  const { auto, effect } = useToggle();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [error, setError] = useState({ __html: "" });
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (ev) => {
    ev.preventDefault();
    const errors = validateForm(form);
    if (errors) {
      setError(errors);
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
      // Handle error...
    } finally {
      setSubmitting(false);
    }
  };

  if (submitting) {
    return <div>Submitting</div>;
  }

  return (
    <form onSubmit={handleSignup} className="flex flex-col gap-4 h-full">
      {type === "signup" && (
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={form.email}
          onChange={handleInputChange}
          essentialsType="email"
          essentials={essentials}
        />
      )}
      <Input
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        value={form.username}
        onChange={handleInputChange}
        essentialsType="name"
        essentials={essentials}
      />
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        value={form.password}
        onChange={handleInputChange}
        essentialsType="password"
        essentials={essentials}
      />
      <div className="font-light text-sm text-zinc-300">
        {error === ""
          ? error
          : "At least 8 characters, 1 uppercase letter, 1 number & 1 symbol"}
      </div>
      <AuthOutro
        effect={effect}
        essentials={essentials}
        auto={auto}
        type={type}
      />
    </form>
  );
}
