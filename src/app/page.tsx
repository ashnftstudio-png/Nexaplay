import { Badge, Button, Card, Checkbox, Divider, EmptyState, GlassCard, Input, LoadingState, ProgressBar, Radio, SearchInput, Skeleton, Spinner, Switch, Tabs, Tag, TextArea, Tooltip } from "@/components/ui";
import { themeTokens } from "@/components/theme";

const components = ["Button", "IconButton", "Card", "GlassCard", "Badge", "Tag", "Divider", "Avatar", "Spinner", "Skeleton", "Tooltip", "Modal", "Drawer", "Dropdown", "Input", "SearchInput", "TextArea", "Checkbox", "Switch", "Radio", "Tabs", "ProgressBar", "Toast", "EmptyState", "LoadingState"];

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="animate-slide-up overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl sm:p-10 lg:p-14 2xl:p-16">
        <Badge>Module 2 design system</Badge>
        <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">Premium dark gaming theme for every future NexaPlay module.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Centralized tokens, accessible primitives, responsive layout utilities, and reusable motion patterns are ready without adding auth, backend, APIs, store, or game logic.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button>Explore system</Button><Button variant="secondary">View tokens</Button></div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4" aria-label="Theme tokens">
        {Object.entries(themeTokens.colors.accent).map(([name, value]) => <Card key={name} className="hover-lift"><div className="h-24 rounded-2xl" style={{ background: value }} /><h2 className="mt-4 text-lg font-black capitalize text-white">{name}</h2><p className="font-mono text-sm text-slate-400">{value}</p></Card>)}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_.9fr]">
        <GlassCard>
          <div className="flex flex-wrap items-center gap-3"><Badge tone="purple">Premium</Badge><Tag>Glass panels</Tag><Tag>Keyboard focus</Tag><Tooltip label="Accessible tooltip"><Button variant="ghost">Hover info</Button></Tooltip></div>
          <Divider className="my-6" />
          <div className="grid gap-4 sm:grid-cols-2"><Input placeholder="Player name" aria-label="Player name" /><SearchInput aria-label="Search design system" placeholder="Search components" /><TextArea placeholder="Reusable textarea" aria-label="Notes" /></div>
          <div className="mt-6 flex flex-wrap items-center gap-6"><label className="flex items-center gap-2 text-sm text-slate-300"><Checkbox /> Remember</label><label className="flex items-center gap-2 text-sm text-slate-300"><Radio name="demo" defaultChecked /> Cyan</label><Switch aria-label="Enable ambient mode" /></div>
        </GlassCard>
        <Card className="space-y-5">
          <h2 className="text-2xl font-black text-white">Loading and feedback</h2>
          <ProgressBar value={68} />
          <div className="flex items-center gap-3 text-slate-300"><Spinner /> Syncing interface state</div>
          <Skeleton className="h-12 w-full loading-shimmer" />
          <Tabs tabs={[{ label: "Motion", content: <p className="text-sm text-slate-400">Fade, scale, slide, hover, focus, and loading transitions are defined globally.</p> }, { label: "A11y", content: <p className="text-sm text-slate-400">Visible focus rings, roles, ARIA states, and semantic HTML are built into primitives.</p> }]} />
        </Card>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4" aria-label="Reusable components">
        {components.map((component) => <article key={component} className="hover-lift rounded-3xl border border-white/10 bg-white/[0.04] p-5"><div className="mb-4 size-2 rounded-full bg-cyan-300 shadow-[var(--shadow-glow)]" /><h3 className="font-black text-white">{component}</h3><p className="mt-2 text-sm text-slate-400">Reusable, typed, theme-aware primitive.</p></article>)}
      </section>
      <div className="grid gap-6 lg:grid-cols-2"><EmptyState title="No store logic here" description="This module is purely presentation infrastructure for future product work." /><LoadingState /></div>
    </div>
  );
}
