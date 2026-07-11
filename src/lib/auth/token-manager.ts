import type { AuthSession, AuthTokens } from "./types";
const sessionKey = "nexaplay.auth.session";
const memory = new Map<string, AuthSession>();
export function createTokens(): AuthTokens { return { accessToken: crypto.randomUUID(), refreshToken: crypto.randomUUID(), expiresAt: Date.now() + 1000 * 60 * 60 }; }
export function readStoredSession(): AuthSession | null { if (typeof window === "undefined") return null; const raw = localStorage.getItem(sessionKey) ?? sessionStorage.getItem(sessionKey); if (!raw) return null; try { const session = JSON.parse(raw) as AuthSession; return session.tokens.expiresAt > Date.now() ? session : null; } catch { return null; } }
export function persistSession(session: AuthSession) { if (typeof window === "undefined") return; const store = session.rememberMe ? localStorage : sessionStorage; store.setItem(sessionKey, JSON.stringify(session)); memory.set(session.user.id, session); }
export function clearSession() { if (typeof window === "undefined") return; localStorage.removeItem(sessionKey); sessionStorage.removeItem(sessionKey); memory.clear(); }
export function refreshSession(session: AuthSession): AuthSession { return { ...session, tokens: createTokens() }; }
