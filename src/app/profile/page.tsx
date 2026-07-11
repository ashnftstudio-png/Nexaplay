import { ProtectedRoute } from "@/components/auth/route-guards";
import { ProfileDashboard } from "@/components/profile";
export default function ProfilePage() { return <ProtectedRoute><ProfileDashboard /></ProtectedRoute>; }
