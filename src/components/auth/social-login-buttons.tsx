"use client";
import { Button } from "@/components/ui";
import type { SocialProvider } from "@/lib/auth/types";
const providers: SocialProvider[] = ["google", "github", "discord", "steam"];
export function SocialLoginButtons() { return <div className="grid gap-3 sm:grid-cols-2" aria-label="Social sign in options">{providers.map((provider) => <Button key={provider} type="button" variant="secondary" aria-label={`Continue with ${provider}`} onClick={() => undefined}>{provider[0].toUpperCase() + provider.slice(1)}</Button>)}</div>; }
