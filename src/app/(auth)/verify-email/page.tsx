import { GuestRoute } from "@/components/auth/route-guards";
import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { Button, Card } from "@/components/ui";
export default function VerifyEmailPage() { return <GuestRoute><AuthShell title="Verify your email." description="Email verification status is part of every NexaPlay user profile and ready for a production mail provider."><Card className="space-y-4 text-center"><div className="mx-auto grid size-14 place-items-center rounded-2xl bg-emerald-300/15 text-2xl" aria-hidden>✓</div><h2 className="text-2xl font-black text-white">Check your inbox</h2><p className="text-sm text-slate-300">Open the verification link to unlock trusted account features.</p><Button><Link href="/profile">Continue to profile</Link></Button></Card></AuthShell></GuestRoute>; }
