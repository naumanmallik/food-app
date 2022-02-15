import { lazy } from "react";
import Loadable from "../common";
import DashboardLayout from "../layout/dashboard";

const DashboardPage = Loadable(lazy(() => import("../components/Dashboard")));

const ClientRoutes = {
  path: "/",
  element: <DashboardLayout />,
  children: [
    {
      path: "/",
      element: <DashboardPage />,
    },
  ],
};

export default ClientRoutes;
