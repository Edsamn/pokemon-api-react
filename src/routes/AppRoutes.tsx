import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import MyPokedex from "../pages/MyPokedex";
import Details from "../pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
  {
    path: "/my-pokedex",
    element: <MyPokedex />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
