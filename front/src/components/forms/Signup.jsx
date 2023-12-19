import React, { Fragment } from "react";
import Input from "../common/Input";

export default function Signup({ form, onChange, essentials, isError }) {
  return (
    <Fragment>
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        value={form.email}
        onChange={onChange}
        essentialsType="email"
        essentials={essentials}
        isError={isError.email}
      />
      <Input
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        value={form.username}
        onChange={onChange}
        essentialsType="name"
        essentials={essentials}
        isError={isError.username}
      />
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        value={form.password}
        onChange={onChange}
        essentialsType="password"
        essentials={essentials}
        isError={isError.password}
      />
      <Input
        type="password"
        name="password_confirmation"
        id="password_confirmation"
        placeholder="Password Confirm"
        value={form.password_confirmation}
        onChange={onChange}
        essentialsType="password"
        essentials={essentials}
        isError={isError.password_confirmation}
      />
    </Fragment>
  );
}
