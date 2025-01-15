import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link, Navigate, RouteObject, Outlet
} from "react-router-dom"
import App from "App"
import { Error404 } from "components/pages/Error404"
import { Adidas } from "components/pages/Adidas"
import { Puma } from "components/pages/Puma"
import { Abibas } from "components/pages/Abibas"
import { Prices } from "components/pages/Prices"
import { Model } from "components/pages/Model"
import { ProtectedPage } from "components/pages/ProtectedPage"
import { ProtectedRoute } from "components/pages/ProtectedRoute"
import { Login } from "components/pages/Login"

export const PATH = {
  ADIDAS: '/adidas',
  PUMA: '/puma',
  ABIBAS: '/abibas',
  PRICES:'/prices',
  MODEL:'/:model/:id',
  PROTECTED:'/ProtectedPage',
  ERROR:'/error',
  Login:'/login'
} as const;


const publicRoutes=[
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
    path: PATH.Login,
    element: <Login/>,
  },
]
const privateRoutes=[
  {
    path: PATH.PROTECTED,
    element: <ProtectedPage/>
  },
]

export const PrivateRoute = () => {
  const isAuth=true
  return isAuth ? <Outlet/>:<Navigate to={'/login'}/>
}
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Navigate to={PATH.ERROR}/>,
    children: [
      {
        element:<PrivateRoute/>,
        children:privateRoutes
      },
      ...publicRoutes,
      /*{
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
        path: PATH.Login,
        element: <Login/>,
      },
      {
        path: PATH.PROTECTED,
        element: (
          <ProtectedRoute>
            <ProtectedPage/>
          </ProtectedRoute>

        ),
      },*/
    ]
  },

]);



