import { Navigate, createBrowserRouter } from "react-router-dom";
import {
  Home,
  CustomerLayout,
  ManagerLayout,
  GuestLayout,
  NotFound,
  Auth,
  Search,
  Profile,
  Dashboard,
} from "./imports/global";
import { Suspense } from "react";

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
      {
        path: "profile",
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "search",
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <Search />
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
