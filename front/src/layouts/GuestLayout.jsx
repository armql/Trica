import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

export default function GuestLayout() {
  return (
    <div className="w-full h-full">
      <Outlet />
    </div>
  );
}
