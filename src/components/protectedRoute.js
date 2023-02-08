import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// function ProtectedRoute({ children }) {
//   const isAuthenticated = localStorage.getItem("isAuthenticated");
//   return isAuthenticated ? children : <Navigate to="/login_admin" />;
// }
const  ProtectedRoute=() =>{
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return isAuthenticated?<Outlet/>: <Navigate to="/login_admin"/>
}
export default ProtectedRoute;
