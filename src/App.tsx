import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Archive,
  Bell,
  Check,
  ChevronRight,
  FileText,
  Forward,
  Inbox,
  Menu,
  MoreHorizontal,
  Paperclip,
  PenLine,
  Reply,
  Search,
  Send,
  Sparkles,
  Star,
  Trash2,
} from 'lucide-react';

const gradientStyle = {
  backgroundImage:
    'linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  filter: 'url(#c3-noise)',
};

function AppleLogo({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" fill="currentColor" className={className} aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function LogoMark({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" fill="currentColor" className={className} aria-hidden="true">
      <path d="M 0 128 C 70.692 128 128 185.308 128 256 L 64 256 C 64 220.654 35.346 192 0 192 Z M 256 192 C 220.654 192 192 220.654 192 256 L 128 256 C 128 185.308 185.308 128 256 128 Z M 128 0 C 128 70.692 70.692 128 0 128 L 0 64 C 35.346 64 64 35.346 64 0 Z M 192 0 C 192 35.346 220.654 64 256 64 L 256 128 C 185.308 128 128 70.692 128 0 Z" />
    </svg>
  );
}

function AppleButton({ label = 'Download Aura', full = false }: { label?: string; full?: boolean }) {
  return (
    <button
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 transition-all hover:bg-white/90 active:scale-[0.98] ${
        full ? 'w-full' : ''
      }`}
    >
      <AppleLogo />
      <span>{label}</span>
      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-px" />
    </button>
  );
}

function SectionEyebrow({ label, tag }: { label: string; tag?: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-sm font-medium text-white/70">
      <span className="w-1.5 h-1.5 rounded-full bg-white" />
      <span>{label}</span>
      {tag ? <span className="px-2 py-0.5 rounded-full border border-white/10 text-white/50">{tag}</span> : null}
    </div>
  );
}

const navLinks = ['Solutions', 'Pricing', 'Blog', 'Documentation', 'Careers'];
const mailNav = [
  { icon: Inbox, label: 'Inbox', count: '12', active: true },
  { icon: Star, label: 'Starred', count: '3' },
  { icon: Send, label: 'Sent' },
  { icon: FileText, label: 'Drafts', count: '2' },
  { icon: Archive, label: 'Archive' },
  { icon: Trash2, label: 'Trash' },
];
const messages = [
  ['Linear', 'Weekly product digest', 'Your team shipped 23 issues this week...', '9:41 AM', true, true],
  ['Sophia Chen', 'Re: Q3 roadmap review', 'Thanks for sending the deck over. I had a few thoughts...', '8:12 AM', true, false],
  ['Figma', 'Marcus commented on your file', 'Love the new direction on the landing hero.', 'Yesterday', false, false],
  ['Stripe', 'Payout of $12,480.00 sent', 'Your payout is on its way to your bank...', 'Yesterday', false, false],
  ['Vercel', 'Deployment ready for aura-web', 'Preview is live at aura-web-g3f.vercel.app', 'Mon', false, false],
  ['GitHub', '[aura/core] PR #482 approved', 'david-lim approved your pull request.', 'Mon', false, false],
] as const;

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative z-20 max-w-6xl mx-auto px-6 py-6 flex items-center justify-between"
    >
      <LogoMark />
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link, i) => (
          <motion.a
            key={link}
            href="#"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05, duration: 0.45, ease: 'easeOut' }}
            className="text-white/70 text-sm font-medium hover:text-white transition-colors"
          >
            {link}
          </motion.a>
        ))}
      </div>
      <div className="hidden md:block">
        <AppleButton />
      </div>
      <button className="md:hidden w-10 h-10 rounded-full border border-white/10 bg-white/5 inline-flex items-center justify-center">
        <Menu className="w-5 h-5" />
      </button>
    </motion.nav>
  );
}

function Hero() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 pt-16 md:pt-28 pb-20 text-center flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.9]"
      >
        <span className="block">Your email.</span>
        <span className="block animate-shiny" style={gradientStyle}>
          Revitalized
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
        className="mt-8 text-white/60 max-w-md text-base leading-[1.5]"
      >
        Aura is the premier inbox platform for the current era. It leverages powerful AI to organize, prioritize,
        and refine your messages into total clarity.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7, ease: 'easeOut' }}
        className="mt-8 flex flex-col items-center gap-3"
      >
        <AppleButton />
        <span className="text-xs text-white/40">Download for Intel / Apple Silicon</span>
      </motion.div>
    </section>
  );
}

function MenuBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.6, ease: 'easeOut' }}
      className="relative z-10 h-10 bg-black/40 backdrop-blur-md border-t border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          <AppleLogo className="w-3.5 h-3.5" />
          <span className="font-bold text-white">Aura</span>
          {['File', 'Edit', 'View', 'Go', 'Window', 'Help'].map((item, i) => (
            <span key={item} className={`${i > 3 ? 'hidden md:inline' : i > 2 ? 'hidden sm:inline' : ''} text-white/70`}>
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-white/70">
          <Search className="w-3.5 h-3.5" />
          <span>Wed May 6 1:09 PM</span>
        </div>
      </div>
    </motion.div>
  );
}

function InboxMockup() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1014]/90 backdrop-blur-2xl shadow-2xl"
      >
        <div className="h-11 border-b border-white/10 flex items-center justify-center relative">
          <div className="absolute left-4 flex gap-2">
            {['#ff5f57', '#febc2e', '#28c840'].map((color) => (
              <span key={color} className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
            ))}
          </div>
          <span className="text-xs text-white/50">Aura — Inbox</span>
        </div>
        <div className="grid grid-cols-12 h-[520px] min-w-[900px]">
          <aside className="col-span-3 border-r border-white/10 bg-black/30 p-4">
            <button className="w-full rounded-lg bg-white text-black text-xs font-semibold px-3 py-2 flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Compose with Aura
            </button>
            <div className="mt-5 space-y-1">
              {mailNav.map(({ icon: Icon, label, count, active }) => (
                <button
                  key={label}
                  className={`w-full h-9 rounded-lg px-3 flex items-center justify-between text-sm transition-colors ${
                    active ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {label}
                  </span>
                  {count ? <span className="text-xs text-white/40">{count}</span> : null}
                </button>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">Labels</p>
              <div className="mt-4 space-y-3">
                {[
                  ['Work', '#00d2ff'],
                  ['Personal', '#A4F4FD'],
                  ['Travel', '#f59e0b'],
                  ['Finance', '#10b981'],
                ].map(([label, color]) => (
                  <div key={label} className="flex items-center gap-2 text-xs text-white/60">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </aside>
          <div className="col-span-4 border-r border-white/10">
            <div className="h-14 border-b border-white/10 px-4 flex items-center gap-2 text-white/35">
              <Search className="w-4 h-4" />
              <span className="text-sm">Search mail</span>
            </div>
            <div>
              {messages.map(([name, subject, preview, time, unread, active]) => (
                <div
                  key={`${name}-${subject}`}
                  className={`px-4 py-3 border-b border-white/5 ${active ? 'bg-white/[0.08]' : 'hover:bg-white/[0.03]'}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className={`text-sm truncate ${unread ? 'font-semibold text-white' : 'text-white/70'}`}>{name}</p>
                    <span className="text-[11px] text-white/35 shrink-0">{time}</span>
                  </div>
                  <p className={`mt-1 text-sm truncate ${unread ? 'text-white' : 'text-white/60'}`}>{subject}</p>
                  <p className="mt-1 text-xs text-white/35 truncate">{preview}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-5">
            <div className="h-14 border-b border-white/10 px-4 flex items-center justify-between">
              <div className="flex items-center gap-1 text-white/60">
                {[Reply, Forward, Archive, Trash2].map((Icon, i) => (
                  <button key={i} className="w-7 h-7 rounded-md hover:bg-white/5 inline-flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
              <button className="w-7 h-7 rounded-md hover:bg-white/5 inline-flex items-center justify-center text-white/60">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold tracking-tight">Weekly product digest</h3>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00d2ff] to-[#0B2551] flex items-center justify-center text-xs font-bold">
                    L
                  </div>
                  <div>
                    <p className="text-sm font-medium">Linear</p>
                    <p className="text-xs text-white/40">to me · 9:41 AM</p>
                  </div>
                </div>
                <span className="rounded-full border border-white/10 px-2 py-1 text-[11px] text-white/60">Work</span>
              </div>
              <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="w-4 h-4" color="#A4F4FD" />
                  Summary by Aura
                </div>
                <p className="mt-2 text-sm leading-[1.55] text-white/65">
                  Your team closed 23 issues, merged 14 PRs, and shipped 2 features. Top contributor: Marcus. No action
                  needed.
                </p>
              </div>
              <div className="mt-6 space-y-4 text-sm leading-[1.6] text-white/70">
                <p>Hi team,</p>
                <p>Here is your weekly digest of everything happening across your projects. This was a strong week with significant progress on the Q3 roadmap.</p>
                <p>Twenty-three issues were closed, fourteen pull requests were merged, and two customer-facing features went out. The velocity trend continues to climb.</p>
                <p>Let me know if you would like a deeper breakdown by project or contributor.</p>
                <p className="text-white/50">— The Linear team</p>
              </div>
              <button className="mt-5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/60 flex items-center gap-2">
                <Paperclip className="w-3.5 h-3.5" />
                digest-may-6.pdf
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function FeatureTriage() {
  const groups = [
    ['Priority', '4', '#ffffff', ['Sophia Chen — Q3 review', 'David Lim — contract signoff']],
    ['Follow-up', '7', '#e5e5e5', ['Marcus — design review', 'Figma — comment thread']],
    ['Updates', '18', '#a3a3a3', ['Vercel — deploy ready', 'GitHub — PR #482 merged']],
    ['Archived', '13', '#525252', ['Stripe payout · Newsletter · Receipts']],
  ] as const;
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 md:gap-16 items-start">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <SectionEyebrow label="Triage" tag="AI-native" />
        <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
          Clear your inbox
          <br />
          in a single pass.
        </h2>
        <p className="mt-6 text-white/60 text-base leading-[1.6] max-w-md">
          Aura reads every message, understands intent, and routes the noise away from the signal. Focus on what moves
          your day forward — the rest handles itself.
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {['Auto-categorize', 'Snooze for later', 'Silent newsletters', 'One-tap unsubscribe'].map((chip) => (
            <span key={chip} className="text-xs text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">
              {chip}
            </span>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="liquid-glass rounded-2xl p-5"
      >
        <p className="text-sm text-white/50">Today · 42 messages triaged</p>
        <div className="mt-4 grid gap-3">
          {groups.map(([title, count, color, items]) => (
            <div key={title} className="liquid-glass rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-sm font-semibold">{title}</span>
                </div>
                <span className="text-xs text-white/40">{count}</span>
              </div>
              <div className="mt-3 space-y-2">
                {items.map((item) => (
                  <p key={item} className="text-xs text-white/55">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function LogoCloud() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-20 text-center">
      <p className="text-xs uppercase tracking-widest text-white/40">Trusted by the world's most thoughtful teams</p>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
        {['Linear', 'Vercel', 'Figma', 'Stripe', 'Ramp', 'Notion', 'Loom', 'Arc'].map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.45 }}
            className="text-sm font-semibold tracking-tight text-white/50 hover:text-white transition-colors"
          >
            {name}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    ['Aura gave our leadership team four hours of their week back. It reads like email from the future.', 'Parker Wilf', 'Group Product Manager', 'MERCURY'],
    ["The command palette alone has changed how I process messages. I can't imagine going back to a traditional client.", 'Andrew von Rosenbach', 'Senior Engineering Program Manager', 'COHERE'],
    ['Triage that actually understands context. Our team stopped dreading Monday morning inboxes.', 'Mathies Christensen', 'Engineering Manager', 'LUNAR'],
  ];
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10">
      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map(([quote, name, role, company]) => (
          <figure key={name} className="liquid-glass rounded-2xl p-6">
            <blockquote className="text-sm text-white/80 leading-[1.6]">"{quote}"</blockquote>
            <figcaption className="mt-6 pt-5 border-t border-white/10">
              <p className="text-sm font-semibold">{name}</p>
              <p className="mt-1 text-xs text-white/50">{role}</p>
              <p className="mt-2 text-xs text-white font-semibold tracking-wide">{company}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const [yearly, setYearly] = useState(false);
  const plans = [
    {
      tier: 'Free',
      price: 'Free',
      desc: 'For creators taking their first steps with Forma.',
      items: ['Up to 3 projects in the cloud', 'Image export up to 1080p', 'Basic editing tools', 'Free templates and icons', 'Access via web and mobile app'],
    },
    {
      tier: 'Standard',
      price: yearly ? '$99,99/y' : '$9,99/m',
      desc: 'For freelancers and small teams who need more freedom and flexibility.',
      items: ['Up to 50 projects in the cloud', 'Export up to 4K', 'Advanced editing toolkit', 'Team collaboration (up to 5 members)', 'Access to premium template library'],
    },
    {
      tier: 'Pro',
      price: yearly ? '$199,99/y' : '$19,99/m',
      desc: 'For studios, agencies, and professional creators working with brands.',
      items: ['Unlimited projects', 'Export up to 8K + animations', 'AI-powered content generation tools', 'Unlimited team members', 'Brand customization'],
      pro: true,
    },
  ];
  return (
    <section className="c3-pricing-section">
      <svg width="0" height="0" aria-hidden="true">
        <filter id="c3-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.075" />
          </feComponentTransfer>
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
        </filter>
      </svg>
      <div className="c3-watermark-container">
        <div className="c3-watermark-main">
          <span className="c3-watermark-line-1">Your email.</span>
          <span className="c3-watermark-line-2">Revitalized</span>
        </div>
      </div>
      <div className="c3-grid">
        {plans.map((plan) => (
          <article key={plan.tier} className={`c3-card ${plan.pro ? 'c3-card-pro' : ''}`}>
            <div className="c3-tier-small">{plan.tier}</div>
            <div className="c3-tier-large">{plan.price}</div>
            <p className="c3-desc">{plan.desc}</p>
            <ul className="c3-list">
              {plan.items.map((item) => (
                <li key={item}>
                  <span className="c3-check">
                    <Check className="w-4 h-4" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="c3-btn">Choose Plan</button>
          </article>
        ))}
      </div>
      <div className="c3-toggle-wrap">
        <span>Yearly</span>
        <button className={`c3-toggle ${yearly ? 'active' : ''}`} onClick={() => setYearly((value) => !value)}>
          <span className="c3-toggle-knob" />
        </button>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 md:py-24 text-center"
      >
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ background: 'radial-gradient(600px circle at 50% 0%, rgba(255,255,255,0.15), transparent 70%)' }}
        />
        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
            Close the tabs.
            <br />
            Open your day.
          </h2>
          <p className="mt-6 text-white/60 max-w-md mx-auto text-sm leading-[1.6]">
            Join thousands of builders, founders, and operators who treat email like a tool — not an obligation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <AppleButton label="Download Aura" />
            <button className="rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 hover:bg-white/5 inline-flex items-center gap-2">
              Talk to sales
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover pointer-events-none"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4"
        />
      </div>
      <div className="fixed inset-0 z-[1] pointer-events-none bg-[#0c0c0c]/35" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/10 z-[5]" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/10 z-[5]" />
      <svg width="0" height="0" aria-hidden="true">
        <filter id="c3-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
      </svg>
      <Navbar />
      <Hero />
      <MenuBar />
      <div className="relative z-10 overflow-x-auto md:overflow-visible">
        <InboxMockup />
      </div>
      <FeatureTriage />
      <LogoCloud />
      <Testimonials />
      <Pricing />
      <FinalCTA />
    </div>
  );
}
