import React from "react";
import {
  RotateCcw,
  Library,
  Terminal,
  Zap,
  HardDrive,
  Disc,
  Monitor,
  ShieldCheck,
  Wrench,
  Lock,
} from "lucide-react";

interface Feature {
  title: string;
  category: string;
  description: string;
  technical: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const features: Feature[] = [
  {
    title: "Ephemeral Sessions",
    category: "CORE COMPUTE",
    description: "Launch operating systems with disposable Copy-On-Write overlays. Test software, conduct investigations, or compile untrusted code—every trace is deleted on shutdown.",
    technical: "qemu-img create -f qcow2 -b base.qcow2 overlay.qcow2",
    icon: RotateCcw,
    color: "from-cyan-500/20 to-blue-500/10 text-cyan-400 border-cyan-500/30",
  },
  {
    title: "Multi-OS Library",
    category: "ORCHESTRATION",
    description: "Organize and launch multiple operating systems from a single Windows dashboard. Switch between Ubuntu, Debian, Fedora, Arch, and Windows 10 without clutter.",
    technical: "SQLite-backed metadata with write-ahead session states and crash recovery.",
    icon: Library,
    color: "from-violet-500/20 to-purple-500/10 text-violet-400 border-violet-500/30",
  },
  {
    title: "QEMU Virtualization Engine",
    category: "HYPERVISOR",
    description: "Built on top of QEMU—the trusted open-source virtualization engine. Direct device emulation, VirtIO high-speed paravirtualization, and UEFI firmware.",
    technical: "qemu-system-x86_64 with structured typed argument builder.",
    icon: Terminal,
    color: "from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30",
  },
  {
    title: "WHPX Hardware Acceleration",
    category: "PERFORMANCE",
    description: "Leverages the Windows Hypervisor Platform (WHPX) for near-native guest CPU performance, operating harmoniously with Windows 10 & 11 security features.",
    technical: "Probed via WinHvPlatform API (WHvGetCapability) and -accel whpx.",
    icon: Zap,
    color: "from-amber-500/20 to-yellow-500/10 text-amber-400 border-amber-500/30",
  },
  {
    title: "QCOW2 Disk Architecture",
    category: "STORAGE",
    description: "Sealed base images remain strictly read-only. Thin-provisioned overlays only consume disk space for active writes, keeping storage footprints light.",
    technical: "Copy-On-Write backing chain with backing file path validation.",
    icon: HardDrive,
    color: "from-sky-500/20 to-cyan-500/10 text-sky-400 border-sky-500/30",
  },
  {
    title: "Guided ISO Installation",
    category: "DEPLOYMENT",
    description: "Install any Linux distro or Windows guest straight from an official ISO. Automated virtual disk creation, volume descriptor detection, and SHA-256 integrity verification.",
    technical: "Non-destructive ISO boot phase transitioning into a sealed base image.",
    icon: Disc,
    color: "from-rose-500/20 to-red-500/10 text-rose-400 border-rose-500/30",
  },
  {
    title: "Native VM Window",
    category: "DISPLAY",
    description: "Guest OS renders directly in a native QEMU window with full keyboard/mouse capture. Zero webview canvas rendering lag, zero video streaming artifacts.",
    technical: "Native SDL/GTK QEMU window directly orchestrated by Windows OS.",
    icon: Monitor,
    color: "from-indigo-500/20 to-blue-500/10 text-indigo-400 border-indigo-500/30",
  },
  {
    title: "Zero Host Exposure & Isolation",
    category: "SECURITY",
    description: "NOVA runs as standard user privileges without admin elevation. Never exposes host file shares or bridged network adapters to untrusted guest code.",
    technical: "User-mode NAT (-nic user) or offline mode (-nic none), strict denylist.",
    icon: ShieldCheck,
    color: "from-emerald-500/20 to-green-500/10 text-emerald-400 border-emerald-500/30",
  },
  {
    title: "Maintenance & Persistent Modes",
    category: "FLEXIBILITY",
    description: "Need to update packages or preserve specific environments? Boot into an isolated persistent overlay or perform an explicit, verified maintenance commit to the base image.",
    technical: "Explicit named confirmation required before any qemu-img commit.",
    icon: Wrench,
    color: "from-purple-500/20 to-violet-500/10 text-purple-400 border-purple-500/30",
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="py-24 border-t border-white/10 relative bg-[#070a10]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Lock className="w-3.5 h-3.5" />
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered for Ephemeral Isolation
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            A purpose-built virtualization launcher designed from the ground up for clean starts, predictable performance, and total host isolation.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="glass-panel-interactive rounded-2xl p-7 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-slate-500 font-semibold uppercase">
                      {f.category}
                    </span>
                    <div className={`p-2.5 rounded-xl border bg-gradient-to-br ${f.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {f.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {f.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 font-mono text-[11px] text-slate-400 flex items-center gap-2">
                  <span className="text-cyan-400">#</span>
                  <span className="truncate">{f.technical}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
