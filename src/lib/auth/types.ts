export type ThemePreference = "system" | "dark" | "light";
export type PrivacyLevel = "public" | "friends" | "private";
export type SocialProvider = "google" | "github" | "discord" | "steam";

export type ConnectedAccount = { provider: SocialProvider; connected: boolean; handle?: string };
export type NotificationPreference = { productUpdates: boolean; securityAlerts: boolean; friendActivity: boolean };
export type PrivacySettings = { profileVisibility: PrivacyLevel; showOnlineStatus: boolean; showLibrary: boolean };
export type UserProfile = {
  id: string; email: string; username: string; displayName: string; bio: string; country: string; language: string;
  avatarUrl?: string; emailVerified: boolean; themePreference: ThemePreference;
  notifications: NotificationPreference; privacy: PrivacySettings; connectedAccounts: ConnectedAccount[];
};
export type AuthTokens = { accessToken: string; refreshToken: string; expiresAt: number };
export type AuthSession = { user: UserProfile; tokens: AuthTokens; rememberMe: boolean };
export type AuthStatus = "loading" | "authenticated" | "guest";
export type AuthResult = { ok: true; session?: AuthSession; message: string } | { ok: false; message: string; fieldErrors?: Record<string, string> };
