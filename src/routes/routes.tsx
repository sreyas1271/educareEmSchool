import { createBrowserRouter } from "react-router-dom";
import Homepage from "../screens/Home/Homepage";
import LoginPage from "../screens/Login/LoginPage";
import ErrorPage from "../screens/Error/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);
export default routes;
