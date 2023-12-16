import React from "react";
import { useStateContext } from "../contexts/AuthProvider";
import { Outlet, useNavigate } from "react-router-dom";

export default function ManagerLayout() {
  const { currentUser, userToken } = useStateContext();
  const navigate = useNavigate();
  if (userToken) {
    return (
      <div>
        <Outlet />
      </div>
    );
  } else {
    navigate("../home");
  }
}
