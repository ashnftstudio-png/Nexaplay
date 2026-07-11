"use client";
import { useEffect, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { EmptyState, LoadingState } from "@/components/ui";
import { useAuth } from "@/components/providers/auth-provider";

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { status, user } = useAuth();
  const router = useRouter();
  useEffect(() => { if (status === "guest") router.replace("/login"); }, [router, status]);
  if (status === "loading") return <LoadingState label="Validating secure session" />;
  if (!user) return <EmptyState title="Authentication required" description="Redirecting to the login screen." />;
  return children;
}

export function GuestRoute({ children }: { children: ReactNode }) {
  const { status, user } = useAuth();
  const router = useRouter();
  useEffect(() => { if (status === "authenticated") router.replace("/profile"); }, [router, status]);
  if (status === "loading") return <LoadingState label="Checking account state" />;
  if (user) return <EmptyState title="Already signed in" description="Redirecting to your profile." />;
  return children;
}
