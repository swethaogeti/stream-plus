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
