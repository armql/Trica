import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

export default function GuestLayout() {
  return (
    <main className="w-full h-full">
      <Outlet />
    </main>
  );
}
