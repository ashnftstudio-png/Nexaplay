import { GuestRoute } from "@/components/auth/route-guards";
import { AuthShell } from "@/components/auth/auth-shell";
import { LoginForm } from "@/components/auth/auth-forms";
export default function LoginPage() { return <GuestRoute><AuthShell title="Welcome back, player." description="Sign in with email or a future social provider while NexaPlay manages sessions through the shared auth provider."><LoginForm /></AuthShell></GuestRoute>; }
