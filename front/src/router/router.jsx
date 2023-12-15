import { createBrowserRouter } from "react-router-dom";
import NotFound from "../layouts/NotFound";
import GuestLayout from "../layouts/GuestLayout";
import { Suspense } from "react";
import Auth from "../views/auth/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <Auth />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
