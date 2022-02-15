import { useRoutes } from "react-router-dom";
import ClientRoutes from "./ClientRoutes";
import DashboardRoutes from "./DashboardRoutes";
import LoginRoutes from "./LoginRoutes";

export default function Routes() {
    return useRoutes([
      DashboardRoutes,
      ClientRoutes,
      LoginRoutes
    ])
}