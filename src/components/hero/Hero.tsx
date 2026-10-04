"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Download,
  BookOpen,
  Layers,
  ChevronRight,
  RotateCcw,
} from "lucide-react";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"ephemeral" | "persistent">("ephemeral");

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden tech-grid">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-violet-600/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* System telemetry ticker */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)] text-xs font-mono">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-400 font-semibold tracking-wide">NOVA SYSTEM</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">WINDOWS x64</span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400">WHPX ACCEL ENABLED</span>
          </div>
        </div>

        {/* Main hero typography */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="space-y-3">
            <div className="inline-block text-xs uppercase font-mono tracking-[0.3em] text-cyan-400/90 font-medium">
              Ephemeral OS Launcher
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-sans">
              Your OS. Your VM.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                A clean start.
              </span>
            </h1>
          </div>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed font-normal">
            Run operating systems in isolated QEMU virtual machines on Windows.
            Experiment freely with disposable Copy-On-Write overlays. Shut down, and
            session modifications vanish back to a pristine base state.
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/download"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-[length:200%_auto] hover:bg-right text-white font-semibold text-sm tracking-wide shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300"
            >
              <Download className="w-4 h-4 text-cyan-100" />
              <span>DOWNLOAD NOVA</span>
              <span className="px-2 py-0.5 rounded bg-black/30 text-xs font-mono text-cyan-200">
                v{siteConfig.version} (64-bit)
              </span>
            </Link>

            <Link
              href="/docs"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl glass-panel text-slate-200 hover:text-white hover:border-cyan-500/40 font-medium text-sm tracking-wide transition-all"
            >
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>View Documentation</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>
          </div>

          {/* Technical Specs & Verification metadata */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Windows 10 / 11</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span>QEMU Engine</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>WHPX Hardware Accel</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>QCOW2 Overlays</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Zero-Tamper Base</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Terminal & Session Visualization */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="rounded-2xl glass-panel overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            {/* Terminal Window Header */}
            <div className="px-4 py-3 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">
                  nova-supervisor :: session-monitor [x86_64]
                </span>
              </div>

              {/* Mode Toggle inside preview */}
              <div className="flex items-center rounded-lg bg-black/40 p-0.5 border border-white/10 text-xs font-mono">
                <button
                  onClick={() => setActiveTab("ephemeral")}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    activeTab === "ephemeral"
                      ? "bg-cyan-500 text-black font-semibold shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  EPHEMERAL
                </button>
                <button
                  onClick={() => setActiveTab("persistent")}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    activeTab === "persistent"
                      ? "bg-violet-600 text-white font-semibold shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  PERSISTENT
                </button>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-xs sm:text-sm text-slate-300 space-y-3 bg-[#070b12]/90">
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 select-none">[INVARIANT]</span>
                <span className="text-slate-300">
                  Base image <code className="text-amber-300">ubuntu-24.04-sealed.qcow2</code> is marked{" "}
                  <span className="text-emerald-400 font-bold">READ-ONLY</span> (SHA-256 verified)
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-cyan-400 select-none">[OVERLAY]</span>
                <span className="text-slate-300">
                  Created copy-on-write layer:{" "}
                  <code className="text-cyan-300">
                    {activeTab === "ephemeral"
                      ? "session-7f3a91-ephemeral.qcow2 (Temporary)"
                      : "ubuntu-persistent-overlay.qcow2 (Kept)"}
                  </code>
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-cyan-400 select-none">[EXECUTE]</span>
                <span className="text-slate-400">
                  qemu-system-x86_64.exe -machine q35,accel=whpx -smp 4 -m 4096 -drive
                  file=session-overlay.qcow2,if=virtio
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-emerald-400 select-none">[RUNNING]</span>
                <span className="text-emerald-300">
                  Guest OS running in native QEMU window. QMP monitoring endpoint active on 127.0.0.1.
                </span>
              </div>

              {activeTab === "ephemeral" ? (
                <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <RotateCcw className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-200">
                      Shutdown Action: Session overlay will be deleted immediately.
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                    ZERO TRACE
                  </span>
                </div>
              ) : (
                <div className="p-3 rounded-lg bg-violet-950/40 border border-violet-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-violet-400" />
                    <span className="text-violet-200">
                      Persistent Mode: Changes saved to isolated overlay without modifying base image.
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/40">
                    ISOLATED PERSISTENCE
                  </span>
                </div>
              )}
            </div>

            {/* Quick status footer */}
            <div className="px-6 py-2.5 bg-black/40 border-t border-white/5 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-500">
              <span>RAM Host Reserve: 20% Protected</span>
              <span>Supervisor: In-process Mutex (Single Instance)</span>
              <span>Storage: Direct I/O Thin Provisioned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
