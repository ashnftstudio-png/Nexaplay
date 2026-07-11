import { GuestRoute } from "@/components/auth/route-guards";
import { AuthShell } from "@/components/auth/auth-shell";
import { ResetPasswordForm } from "@/components/auth/auth-forms";
export default function ResetPasswordPage() { return <GuestRoute><AuthShell title="Set a new password." description="Validate and update credentials through the shared auth architecture."><ResetPasswordForm /></AuthShell></GuestRoute>; }
