import React, { Fragment, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/AuthProvider";
import axiosClient from "../api/axios/axios";
import Nav from "../views/navigation/Nav";

export default function CustomerLayout() {
  const { currentUser, userToken, setCurrentUser } = useStateContext();
  const [loadingUser, setLoadingUser] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axiosClient
      .get("/me")
      .then(({ data }) => {
        setCurrentUser(data);
        setLoadingUser(false);
      })
      .catch(() => {
        setLoadingUser(false);
      });
  }, []);
  if (loadingUser) {
    return (
      <div className="text-3xl font-bold w-screen h-screen bg-zinc-300 animate-pulse"></div>
    );
  }
  if (!userToken) {
    navigate("../auth");
  } else {
    return (
      <main>
        <Nav />
        <Outlet />
        <div className="w-full h-16"></div>
      </main>
    );
  }
}
