import { lazy } from "react";
import Loadable from "../common/Loadable";
import DashboardLayout from "../layout/dashboard";

const DashboardPage = Loadable(lazy(() => import("../components/Dashboard")));
const MealsTablePage = Loadable(lazy(() => import("../common/MealsTable")));

const ClientRoutes = {
  path: "/",
  element: <DashboardLayout />,
  children: [
    {
      path: "/",
      element: <DashboardPage />,
    },
    {
      path: "/invoices",
      element: <MealsTablePage />,
    },
  ],
};

export default ClientRoutes;
