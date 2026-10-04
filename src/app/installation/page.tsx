import React from "react";
import Link from "next/link";
import {
  Download,
  CheckCircle2,
  RotateCcw,
  Power,
} from "lucide-react";

export default function InstallationPage() {
  return (
    <div className="pt-28 pb-20 tech-grid min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>OPERATING GUIDE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Installation & Getting Started
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Complete walkthrough from downloading the Windows installer to provisioning your first ephemeral guest VM.
          </p>
        </div>

        {/* 8-Step Sequential Flow */}
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Lifecycle Execution Steps
            </h2>
            <p className="text-sm text-slate-400">
              Follow this step-by-step procedure to establish your sealed base images and run isolated sessions.
            </p>
          </div>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-sm font-mono font-bold flex items-center justify-center shrink-0">
                  01
                </span>
                <h3 className="text-lg font-bold text-white">Download NOVA for Windows</h3>
              </div>
              <p className="text-sm text-slate-300 pl-11 leading-relaxed">
                Obtain the official installer <code className="text-cyan-300">NOVA-Setup-x64.exe</code> from the download portal. Verify the SHA-256 hash if required by your organizational policy.
              </p>
              <div className="pl-11 pt-1">
                <Link
                  href="/download"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono hover:bg-cyan-500/30 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Go to Download Portal</span>
                </Link>
              </div>
            </div>

            {/* Step 2 & 3 */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-violet-500/20 text-violet-300 border border-violet-500/40 text-sm font-mono font-bold flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg font-bold text-white">Run NOVA Setup & First Launch</h3>
              </div>
              <p className="text-sm text-slate-300 pl-11 leading-relaxed">
                Launch the installer. NOVA installs per-user into your local application directory without demanding Windows administrative credentials. On launch, NOVA executes automated diagnostic pre-flight checks: probing QEMU paths, CPU hardware virtualization, and WHPX acceleration availability.
              </p>
            </div>

            {/* Step 4 & 5 */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-sm font-mono font-bold flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg font-bold text-white">Adding an OS & Installing from ISO</h3>
              </div>
              <p className="text-sm text-slate-300 pl-11 leading-relaxed">
                Click <strong>Add Operating System</strong>. Select an ISO (e.g. Ubuntu 24.04, Debian 12, Fedora 40, or Arch Linux). NOVA parses the ISO volume label to recommend optimal hardware presets (VirtIO storage, UEFI firmware, RAM/CPU allocation). Complete the operating system installer inside the guest.
              </p>
              <div className="pl-11 pt-2">
                <div className="p-3 rounded-lg bg-black/50 border border-white/5 font-mono text-xs text-slate-400">
                  <span className="text-emerald-400">Notice:</span> Once installation finishes and the guest is cleanly shut down, NOVA locks the base disk as <code className="text-amber-300">sealed</code> with a cryptographic SHA-256 seal.
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-500/40 text-sm font-mono font-bold flex items-center justify-center shrink-0">
                  04
                </span>
                <h3 className="text-lg font-bold text-white">Launching an Ephemeral Session</h3>
              </div>
              <p className="text-sm text-slate-300 pl-11 leading-relaxed">
                Select your installed OS card and click <strong>RUN</strong>. NOVA dynamically constructs a temporary QCOW2 overlay on top of the sealed base and opens a dedicated, native QEMU display window. Perform whatever tasks, downloads, or experiments you need.
              </p>
            </div>

            {/* Step 7 & 8 */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/40 text-sm font-mono font-bold flex items-center justify-center shrink-0">
                  05
                </span>
                <h3 className="text-lg font-bold text-white">Shutting Down & Restarting Clean</h3>
              </div>
              <p className="text-sm text-slate-300 pl-11 leading-relaxed">
                Shut down the guest OS from its native desktop, or click <strong>Stop</strong> in NOVA. NOVA sends ACPI <code>system_powerdown</code> over the QMP socket. Once QEMU terminates, the temporary overlay is deleted from the filesystem. Click <strong>RUN</strong> again to launch an immaculately fresh session.
              </p>
            </div>
          </div>
        </div>

        {/* Essential Operation Workflows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-bold">
              <RotateCcw className="w-4 h-4" />
              <span>RESTART CLEAN WORKFLOW</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              To wipe an in-progress session immediately without re-configuring your profile, trigger <strong>Restart Clean</strong>. NOVA gracefully powers down the current VM, clears the overlay delta, and spins up a brand new copy-on-write layer in seconds.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-violet-400 font-mono text-sm font-bold">
              <Power className="w-4 h-4" />
              <span>GRACEFUL VS. FORCE SHUTDOWN</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              NOVA prioritizes guest filesystem health by issuing ACPI power-down signals with a 60-second timeout. If a guest hangs, a forced QMP <code>quit</code> is available with explicit confirmation to protect host stability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
