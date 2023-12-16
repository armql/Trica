import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

export default function GuestLayout() {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}
