import { useRoutes } from "react-router-dom";
import Home from "../pages/home/Home";

import Layout from "../pages/layout/Layout";

import Manage from "../pages/manage/Manage";
const Routers = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: "/",
              element: <Home />,
            },

            {
              path: "/manage",
              element: <Manage />,
            },

            {
              path: "*",
              element: <div>404</div>,
            },
            {
              path: "/product/:id",
              element: <div>detail</div>,
            },
          ],
        },
      ])}
    </>
  );
};

export default Routers;
