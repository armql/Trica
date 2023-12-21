import React, { useState } from "react";
import { useStateContext } from "../contexts/AuthProvider";
import { Outlet, useNavigate } from "react-router-dom";

export default function ManagerLayout() {
  const { currentUser, userToken } = useStateContext();
  const [authenticating, setAuthenticating] = useState(true);
  const navigate = useNavigate();

  if (userToken) {
    setAuthenticating(false);
    return (
      <div className="w-full h-full">
        <Outlet />
      </div>
    );
  } else {
    navigate("../auth");
  }
}
