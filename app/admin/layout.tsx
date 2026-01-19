"use client";

import { AuthContextProvider } from "@/context/AuthContext";
import { PrivateRoute } from "@/components/PrivateRoute";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthContextProvider>
      <PrivateRoute>{children}</PrivateRoute>
    </AuthContextProvider>
  );
}
