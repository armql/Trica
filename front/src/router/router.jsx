import { Navigate, createBrowserRouter } from "react-router-dom";
import NotFound from "../layouts/NotFound";
import GuestLayout from "../layouts/GuestLayout";
import { Suspense } from "react";
import Auth from "../views/auth/Auth";
import Home from "../views/home/home";
import Dashboard from "../views/dashboard/Dashboard";
import ManagerLayout from "../layouts/ManagerLayout";
import CustomerLayout from "../layouts/CustomerLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <Navigate to="auth" />
          </Suspense>
        ),
      },
      {
        path: "auth",
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <Auth />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/app",
    element: <CustomerLayout />,
    children: [
      {
        path: "/app",
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <Navigate to="home" />
          </Suspense>
        ),
      },
      {
        path: "home",
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/workspace",
    element: <ManagerLayout />,
    children: [
      {
        path: "/workspace",
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <Navigate to="Dashboard" />
          </Suspense>
        ),
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
