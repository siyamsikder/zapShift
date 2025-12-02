import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRout from "./PrivateRout";
import Rider from "../Pages/Rider/Rider";
import SendParcel from "../Pages/SendParcel/SendParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/coverage",
        element: <Coverage />,
        loader: () => fetch("/servicCenter.json").then((res) => res.json()),
      },
      {
        path: "/send-parcel",
        element: (
          <PrivateRout>
            <SendParcel></SendParcel>
          </PrivateRout>
        ),
        loader: () => fetch("/servicCenter.json").then((res) => res.json()),
      },
      {
        path: "/rider",
        element: (
          <PrivateRout>
            <Rider></Rider>
          </PrivateRout>
        ),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
