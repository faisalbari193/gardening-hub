import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location=useLocation()
  if (loading) {
    return <Loading/>
  }
  if (user && user?.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/signin" />;
  }
};

export default PrivateRoute;
