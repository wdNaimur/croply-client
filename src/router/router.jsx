import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/Home/HomePage";
import AuthenticationLayout from "../layouts/AuthenticationLayout";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import CoveragePage from "../pages/Coverage/CoveragePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/coverage",
        element: <CoveragePage />,
        loader: () => fetch("data/warehouse.json"),
      },
    ],
  },
  {
    path: "/",
    element: <AuthenticationLayout />,
    children: [
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
export default router;
