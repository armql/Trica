import React, { Fragment } from "react";
import Input from "../common/Input";

export default function Signin({ form, onChange, essentials, isError }) {
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
    </Fragment>
  );
}
