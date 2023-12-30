import { lazy } from "react";

const Home = lazy(() => import("../../views/home/Home"));
const Auth = lazy(() => import("../../views/auth/Auth"));
const CustomerLayout = lazy(() => import("../../layouts/CustomerLayout"));
const ManagerLayout = lazy(() => import("../../layouts/ManagerLayout"));
const GuestLayout = lazy(() => import("../../layouts/GuestLayout"));
const NotFound = lazy(() => import("../../layouts/NotFound"));
const Search = lazy(() => import("../../views/search/Search"));
const Profile = lazy(() => import("../../views/profile/Profile"));
const Dashboard = lazy(() => import("../../views/dashboard/Dashboard"));
export {
  Home,
  CustomerLayout,
  ManagerLayout,
  GuestLayout,
  NotFound,
  Auth,
  Search,
  Profile,
  Dashboard,
};
