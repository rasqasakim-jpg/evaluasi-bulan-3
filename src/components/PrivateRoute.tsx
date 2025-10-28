// src/components/PrivateRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface Props {
  children: React.ReactNode;
  allowedRoles: ("admin" | "user")[];
}

const PrivateRoute: React.FC<Props> = ({ children, allowedRoles }) => {
  const { isLoggedIn, role } = useAuth();

  if (!isLoggedIn) {
    // Belum login → redirect ke login
    return <Navigate to="/login" replace />;
  }

  if (!role || !allowedRoles.includes(role)) {
    // Role tidak sesuai → redirect ke halaman publik
    return <Navigate to="/products" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
