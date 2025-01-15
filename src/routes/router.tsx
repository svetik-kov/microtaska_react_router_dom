import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "App"
import { Error404 } from "components/pages/Error404"
import { Adidas } from "components/pages/Adidas"
import { Puma } from "components/pages/Puma"
import { Abibas } from "components/pages/Abibas"
import { Prices } from "components/pages/Prices"
import { Model } from "components/pages/Model"
import { ProtectedPage } from "components/pages/ProtectedPage"
import { ProtectedRoute } from "components/pages/ProtectedRoute"

export const PATH = {
  ADIDAS: '/adidas',
  PUMA: '/puma',
  ABIBAS: '/abibas',
  PRICES:'/prices',
  MODEL:'/:model/:id',
  PROTECTED:'/ProtectedPage',
  ERROR:'/error',
  ERROR2:'/*',

} as const;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<Error404/>,
    children: [
      {
        path: PATH.ADIDAS,
        element: <Adidas />,
      },
      {
        path: PATH.PUMA,
        element: <Puma />,
      },
      {
        path: PATH.ABIBAS,
        element: <Abibas />,
      },
      {
        path: PATH.PRICES,
        element: <Prices/>,
      },
      {
        path: PATH.MODEL,
        element: <Model/>,
      },
      {
        path: PATH.ERROR,
        element: <Error404/>,
      },
      {
        path: PATH.ERROR2,
        element: <Error404/>,
      },
      {
        path: PATH.PROTECTED,
        element: (
          <ProtectedRoute>
            <ProtectedPage/>
          </ProtectedRoute>

        ),
      },
    ]
  },

]);



