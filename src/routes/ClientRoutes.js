import { lazy } from "react";
import Loadable from "../common";
import ClientLayout from "../layout/client";

const HellowWorldPage = Loadable(
  lazy(() => import("../components/client/firstPage"))
);

const ClientRoutes = {
  path: "/",
  element: <ClientLayout />,
  children: [
    {
      path: "/client/dashboard",
      element: <HellowWorldPage />,
    },
  ],
};

export default ClientRoutes;
