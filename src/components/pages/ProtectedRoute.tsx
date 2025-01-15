import React, { ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { Error404 } from "components/pages/Error404"

type Props={
  children:ReactNode
}
export const ProtectedRoute = ({children}:Props) => {
  const logged=true
  return logged ? children:<Navigate to={'/login'}/>
}

