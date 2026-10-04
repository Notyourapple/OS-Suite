"use client";

import React, { useState } from "react";
import {
  Layers,
  HardDrive,
  Cpu,
  Monitor,
  Trash2,
  ArrowRight,
  Shield,
  FileCode,
  CheckCircle2,
} from "lucide-react";

interface Step {
  id: number;
  badge: string;
  title: string;
  description: string;
  technical: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  activeBorder: string;
}

const steps: Step[] = [
  {
    id: 1,
    badge: "STAGE 01",
    title: "NOVA Launcher",
    description: "Standard user-space supervisor managing SQLite metadata, QEMU process lifecycle, and write-ahead session invariants.",
    technical: "Tauri 2 + Rust native process supervisor, runs strictly without admin privileges.",
    icon: Cpu,
    color: "text-cyan-400 bg-cyan-950/50 border-cyan-500/40",
    activeBorder: "border-cyan-500 shadow-cyan-500/20",
  },
  {
    id: 2,
    badge: "STAGE 02",
    title: "OS Profile",
    description: "Validated hardware definition: CPU cores, RAM limits, VirtIO storage buses, UEFI firmware, and isolated user-mode networking.",
    technical: "Typed VmProfile JSON schema with strict denylist validation against host file leaks.",
    icon: FileCode,
    color: "text-blue-400 bg-blue-950/50 border-blue-500/40",
    activeBorder: "border-blue-500 shadow-blue-500/20",
  },
  {
    id: 3,
    badge: "STAGE 03",
    title: "Sealed Base Image",
    description: "Your pristine, pre-installed guest OS. Locked with read-only filesystem attributes and verified with streaming SHA-256 hashes.",
    technical: "QCOW2 base image backing file. Never opened writable by any session (Invariant I1).",
    icon: HardDrive,
    color: "text-violet-400 bg-violet-950/50 border-violet-500/40",
    activeBorder: "border-violet-500 shadow-violet-500/20",
  },
  {
    id: 4,
    badge: "STAGE 04",
    title: "Ephemeral Overlay",
    description: "A fresh copy-on-write QCOW2 layer created instantaneously. Accompanied by a dedicated per-session UEFI NVRAM store.",
    technical: "qemu-img create -f qcow2 -b base.qcow2 -F qcow2 session-overlay.qcow2",
    icon: Layers,
    color: "text-amber-400 bg-amber-950/50 border-amber-500/40",
    activeBorder: "border-amber-500 shadow-amber-500/20",
  },
  {
    id: 5,
    badge: "STAGE 05",
    title: "Native QEMU VM",
    description: "Spawns QEMU with WHPX hardware acceleration. The guest renders inside its native Windows window with zero webview overhead.",
    technical: "tokio::process::Command invocation + QMP control socket bound to loopback.",
    icon: Monitor,
    color: "text-emerald-400 bg-emerald-950/50 border-emerald-500/40",
    activeBorder: "border-emerald-500 shadow-emerald-500/20",
  },
  {
    id: 6,
    badge: "STAGE 06",
    title: "Overlay Destroyed & Clean Start",
    description: "On guest shutdown, the QEMU process exit is verified, the overlay is deleted, and the environment returns to the pristine base state.",
    technical: "File handle verification (Invariant I3). Base image SHA-256 hash remains 100% identical.",
    icon: Trash2,
    color: "text-rose-400 bg-rose-950/50 border-rose-500/40",
    activeBorder: "border-rose-500 shadow-rose-500/20",
  },
];

export function ProductVisualization() {
  const [selectedStep, setSelectedStep] = useState<number>(3);

  const current = steps.find((s) => s.id === selectedStep) || steps[0];

  return (
    <section id="architecture" className="py-24 border-t border-white/10 relative overflow-hidden bg-[#06080d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Shield className="w-3.5 h-3.5" />
            <span>ARCHITECTURAL INTEGRITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How NOVA Executes Ephemeral Computing
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Understand the complete lifecycle from base image sealing to disposable execution and automated cleanup.
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {steps.map((step) => {
            const Icon = step.icon;
            const isSelected = selectedStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setSelectedStep(step.id)}
                className={`p-4 rounded-xl text-left transition-all glass-panel flex flex-col justify-between h-36 ${
                  isSelected
                    ? `border-cyan-500 shadow-[0_0_25px_rgba(6,182,212,0.25)] bg-slate-900/90`
                    : `hover:border-white/20 hover:bg-white/[0.04]`
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[10px] font-mono tracking-widest text-slate-500">
                    {step.badge}
                  </span>
                  <div className={`p-1.5 rounded-md border ${step.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className={`text-xs sm:text-sm font-semibold tracking-wide ${isSelected ? "text-cyan-300" : "text-white"}`}>
                    {step.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <span>Inspect</span>
                    <ArrowRight className="w-3 h-3 text-slate-600" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed View */}
        <div className="rounded-2xl glass-panel p-6 sm:p-10 border border-cyan-500/30 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left column description */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold">
                  {current.badge}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  SYSTEM LIFECYCLE STAGE
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {current.title}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                {current.description}
              </p>

              <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-slate-300 space-y-2">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                  Technical Implementation
                </div>
                <div className="text-cyan-300 break-all">{current.technical}</div>
              </div>

              {/* Lifecycle controls */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setSelectedStep((prev) => (prev > 1 ? prev - 1 : 6))}
                  className="px-4 py-2 rounded-lg border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                >
                  ← Previous Stage
                </button>
                <button
                  onClick={() => setSelectedStep((prev) => (prev < 6 ? prev + 1 : 1))}
                  className="px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono hover:bg-cyan-500/30 transition-all"
                >
                  Next Stage →
                </button>
              </div>
            </div>

            {/* Right column technical visual card */}
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-[#090d16] border border-white/10 p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono text-slate-400">
                    Ephemeral Session Invariant
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    ENFORCED
                  </span>
                </div>

                <div className="space-y-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 space-y-1">
                    <div className="text-slate-500">BASE IMAGE (READ-ONLY)</div>
                    <div className="text-slate-200">ubuntu-24.04-base.qcow2</div>
                    <div className="text-[10px] text-cyan-400">SHA-256: 8a7c29f0...sealed</div>
                  </div>

                  <div className="flex items-center justify-center text-slate-600">
                    <span>+</span>
                  </div>

                  <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/20 space-y-1">
                    <div className="text-cyan-400">TEMPORARY OVERLAY (WRITABLE)</div>
                    <div className="text-slate-200">session-80d2.qcow2</div>
                    <div className="text-[10px] text-slate-400">Stores temp file writes & delta</div>
                  </div>

                  <div className="flex items-center justify-center text-slate-600">
                    <span>=</span>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/20 space-y-1">
                    <div className="text-emerald-400">EPHEMERAL RUNTIME</div>
                    <div className="text-slate-300">
                      Guest boots. Changes remain isolated. Overlay deleted on exit.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
