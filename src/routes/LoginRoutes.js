import LoginLayout from "../layout/Login";
import { lazy } from "react";
import Loadable from "../common/Loadable";

const LoginPage = Loadable(lazy(() => import("../components/Auth/Login")));

const RegisterPage = Loadable(
  lazy(() => import("../components/Auth/Register"))
);

const LoginRoutes = {
  path: "/",
  element: <LoginLayout />,
  children: [
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
  ],
};

export default LoginRoutes;
