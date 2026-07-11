import { GuestRoute } from "@/components/auth/route-guards";
import { AuthShell } from "@/components/auth/auth-shell";
import { ForgotPasswordForm } from "@/components/auth/auth-forms";
export default function ForgotPasswordPage() { return <GuestRoute><AuthShell title="Recover your account." description="Request reset instructions through the email authentication adapter."><ForgotPasswordForm /></AuthShell></GuestRoute>; }
