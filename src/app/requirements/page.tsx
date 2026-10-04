import React from "react";
import Link from "next/link";
import {
  Cpu,
  HardDrive,
  Monitor,
  Zap,
  CheckCircle2,
} from "lucide-react";

export default function RequirementsPage() {
  return (
    <div className="pt-28 pb-20 tech-grid min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
            <Cpu className="w-3.5 h-3.5" />
            <span>SYSTEM PREREQUISITES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            System Requirements
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Hardware and Windows operating system requirements for running NOVA and guest virtual machines.
          </p>
        </div>

        {/* Requirements Table Card */}
        <div className="rounded-2xl glass-panel border border-white/10 overflow-hidden shadow-2xl bg-[#070b13]">
          <div className="px-6 py-4 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
            <span className="font-mono text-xs text-slate-300 font-bold uppercase tracking-wider">
              Host Specification Matrix
            </span>
            <span className="font-mono text-[11px] text-cyan-400">Validated x86-64 Architecture</span>
          </div>

          <div className="divide-y divide-white/5 font-sans">
            {/* OS */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              <div className="text-sm font-semibold text-white font-mono flex items-center gap-2">
                <Monitor className="w-4 h-4 text-cyan-400" />
                <span>Operating System</span>
              </div>
              <div className="md:col-span-2 space-y-1 text-sm">
                <div className="text-slate-200 font-medium">Windows 10 / Windows 11 (64-bit)</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Requires 64-bit architecture. Compatible with Windows 10 Home/Pro/Enterprise and Windows 11.
                </p>
              </div>
            </div>

            {/* Architecture */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              <div className="text-sm font-semibold text-white font-mono flex items-center gap-2">
                <Cpu className="w-4 h-4 text-violet-400" />
                <span>CPU Architecture</span>
              </div>
              <div className="md:col-span-2 space-y-1 text-sm">
                <div className="text-slate-200 font-medium">x86-64 (AMD64 / Intel 64)</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Hardware virtualization (Intel VT-x or AMD-V / SVM) must be enabled in your computer&apos;s BIOS or UEFI firmware.
                </p>
              </div>
            </div>

            {/* Hardware Acceleration */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              <div className="text-sm font-semibold text-white font-mono flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>Hardware Acceleration</span>
              </div>
              <div className="md:col-span-2 space-y-1 text-sm">
                <div className="text-emerald-400 font-medium">Windows Hypervisor Platform (WHPX)</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Recommended for full-speed execution. Queried directly via the Windows <code>WinHvPlatform</code> API. An optional slow TCG emulation fallback is available for testing without WHPX.
                </p>
              </div>
            </div>

            {/* Host Memory */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              <div className="text-sm font-semibold text-white font-mono flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-amber-400" />
                <span>System RAM</span>
              </div>
              <div className="md:col-span-2 space-y-1 text-sm">
                <div className="text-slate-200 font-medium">Depends on Guest OS</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  NOVA enforces a safety reserve invariant: at least <strong>max(2 GB, 20% of total host RAM)</strong> must remain free for the Windows host operating system. For example, allocating a 4 GB RAM guest requires at least 8 GB of host memory.
                </p>
              </div>
            </div>

            {/* Host Storage */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              <div className="text-sm font-semibold text-white font-mono flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-sky-400" />
                <span>Storage Footprint</span>
              </div>
              <div className="md:col-span-2 space-y-1 text-sm">
                <div className="text-slate-200 font-medium">Depends on Guest OS Disk Size</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  NOVA desktop application requires ~150 MB. Base images and temporary overlays depend entirely on the guest OS (typically 10 GB to 30 GB thin-provisioned per installed OS). NOVA automatically halts a guest if free volume headroom drops below safe limits.
                </p>
              </div>
            </div>

            {/* Virtualization Runtime */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              <div className="text-sm font-semibold text-white font-mono flex items-center gap-2">
                <Cpu className="w-4 h-4 text-rose-400" />
                <span>QEMU Runtime</span>
              </div>
              <div className="md:col-span-2 space-y-1 text-sm">
                <div className="text-slate-200 font-medium">QEMU for Windows (qemu-system-x86_64)</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Discovered automatically via settings, Windows registry uninstall keys, <code>%ProgramFiles%\qemu</code>, or system <code>PATH</code>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Reserve Callout Box */}
        <div className="rounded-2xl glass-panel p-6 sm:p-8 border-cyan-500/30 bg-[#070c18] space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-bold">
            <CheckCircle2 className="w-4 h-4" />
            <span>NOVA INVARIANT I10: HOST SAFETY RESERVE</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Unlike standard VM tools that allow reckless memory over-commitment leading to Windows host BSODs or thrashing, NOVA validates host CPU, RAM, and disk free space prior to spawning any session. If memory or disk headroom is insufficient, NOVA rejects the launch with a clear, prescriptive remediation message.
          </p>
        </div>

        <div className="flex justify-between items-center pt-4">
          <Link
            href="/windows-support"
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
          >
            <span>Learn how to verify and enable WHPX on Windows</span>
            <span>→</span>
          </Link>
          <Link
            href="/download"
            className="text-xs font-mono text-slate-400 hover:text-white"
          >
            Download NOVA v1.2.0
          </Link>
        </div>
      </div>
    </div>
  );
}
