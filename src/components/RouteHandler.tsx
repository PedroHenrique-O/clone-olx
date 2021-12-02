import { ReactNode } from "react";
//import { Route, Routes } from "react-router";
import { isLogged } from "../helpers/AuthHandler";
import { Navigate } from "react-router-dom/";

type Props = {
  children: ReactNode;
  privateRoute: boolean;
};

export default function RouteHandler({ children, privateRoute }: Props) {
  const logged = isLogged();
  let authorized = privateRoute && !logged ? false : true;

  return authorized ? children : <Navigate to="/signin" />;
}
