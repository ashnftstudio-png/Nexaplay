import { GuestRoute } from "@/components/auth/route-guards";
import { AuthShell } from "@/components/auth/auth-shell";
import { RegisterForm } from "@/components/auth/auth-forms";
export default function RegisterPage() { return <GuestRoute><AuthShell title="Create your NexaPlay identity." description="Register a reusable profile for future Store, Library, Friends, Cloud Saves, and Achievements modules."><RegisterForm /></AuthShell></GuestRoute>; }
