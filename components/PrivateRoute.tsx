"use client";

import { ReactNode, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { UserAuth } from "@/context/AuthContext";

export const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { session } = UserAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Don't redirect when the user is on auth pages (login, register, etc.)
    if (!session && !pathname?.startsWith("/admin/auth")) {
      router.replace("/admin/auth/login");
    }
  }, [session, router, pathname]);

  // If not authenticated but on an auth page, render the children (login form).
  if (!session && pathname?.startsWith("/admin/auth")) {
    return <>{children}</>;
  }

  if (!session) {
    return null;
  }

  return <>{children}</>;
};
