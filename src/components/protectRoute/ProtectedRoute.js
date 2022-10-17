// const ProtectedRoute = ({ user, children }) => {
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  return user.token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;

// import { Navigate, useLocation } from "react-router-dom";
// import { useAuth } from "../../contexts";

// export const RequireAuth = ({ children }) => {
//   const { auth } = useAuth();
//   const location = useLocation();

//   return auth.status ? (
//     children
//   ) : (
//     <Navigate to="/signin" state={{ from: location }} replace />
//   );
// };
