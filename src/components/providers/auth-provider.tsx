"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { clearSession, readStoredSession } from "@/lib/auth/token-manager";
import { loginWithEmail, registerWithEmail, requestPasswordReset, resetPassword } from "@/lib/auth/mock-adapter";
import type { AuthResult, AuthSession, AuthStatus, UserProfile } from "@/lib/auth/types";

type AuthContextValue = { status: AuthStatus; session: AuthSession | null; user: UserProfile | null; login: typeof loginWithEmail; register: typeof registerWithEmail; forgotPassword: typeof requestPasswordReset; resetPassword: typeof resetPassword; logout: () => void; updateUser: (profile: UserProfile) => void };
const AuthContext = createContext<AuthContextValue | null>(null);
export function AuthProvider({ children }: { children: ReactNode }) { const [session, setSession] = useState<AuthSession | null>(null); const [status, setStatus] = useState<AuthStatus>("loading"); useEffect(() => { const stored = readStoredSession(); setSession(stored); setStatus(stored ? "authenticated" : "guest"); }, []); const wrap = useCallback(async <T extends unknown[]>(action: (...args: T) => Promise<AuthResult>, ...args: T) => { const result = await action(...args); if (result.ok && result.session) { setSession(result.session); setStatus("authenticated"); } return result; }, []); const value = useMemo<AuthContextValue>(() => ({ status, session, user: session?.user ?? null, login: (...args) => wrap(loginWithEmail, ...args), register: (...args) => wrap(registerWithEmail, ...args), forgotPassword: requestPasswordReset, resetPassword, logout: () => { clearSession(); setSession(null); setStatus("guest"); }, updateUser: (profile) => setSession((current) => current ? { ...current, user: profile } : current) }), [session, status, wrap]); return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>; }
export function useAuth() { const ctx = useContext(AuthContext); if (!ctx) throw new Error("useAuth must be used within AuthProvider"); return ctx; }
export function useRequireAuth() { const auth = useAuth(); return auth; }
export function useGuestOnly() { return useAuth(); }
