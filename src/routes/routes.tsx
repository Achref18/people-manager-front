import { useRoutes } from "react-router";
import Dashboard from "../features/dashboard/Dashboard";
import { PATHS } from "../config/globalConstants/paths";

export default function Router() {
  const element = useRoutes([
    {
      path: PATHS.DASHBOARD,
      element: <Dashboard />,
    }, 
  ]);

  return element;
}