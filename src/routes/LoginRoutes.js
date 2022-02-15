import LoginLayout from "../layout/Login";
import { lazy } from "react";
import Loadable from "../common";

const LoginPage = Loadable(
    lazy(() => import("../components/Auth/Login"))
  );

const LoginRoutes = {
  path: "/",
  element: <LoginLayout />,
  children: [
    {
      path: "/login",
      element: <LoginPage />,
    },
  ],
};

export default LoginRoutes;
