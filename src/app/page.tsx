import React from "react";
import { Hero } from "@/components/hero/Hero";
import { ProductVisualization } from "@/components/architecture/ProductVisualization";
import { FeaturesGrid } from "@/components/features/FeaturesGrid";
import { SystemStatusCard } from "@/components/terminal/SystemStatusCard";
import { DownloadBanner } from "@/components/download/DownloadBanner";
import { Sparkles, HardDrive, Cpu, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* "What is NOVA?" Deep Dive Section */}
      <section id="overview" className="py-24 border-t border-white/10 bg-[#070a11] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Conceptual explanation */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>EPHEMERAL COMPUTING PARADIGM</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Virtualization built on the principle of disposable sessions.
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Traditional virtual machines accumulate state over time: package clutter, residual caches, configuration drift, and hidden malware.
              </p>

              <p className="text-slate-300 text-base leading-relaxed">
                NOVA solves this by separating the <strong>pristine base operating system</strong> from the <strong>runtime session</strong>. You install your preferred guest OS once. Whenever you launch NOVA, an isolated Copy-On-Write layer is created. When the VM stops, that temporary layer is instantly destroyed.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl glass-panel border-white/10 space-y-1">
                  <div className="text-cyan-400 font-mono text-xs font-semibold">100% UNTOUCHED BASE</div>
                  <p className="text-xs text-slate-400">
                    The sealed QCOW2 base disk is marked read-only and never written to by active guest sessions.
                  </p>
                </div>

                <div className="p-4 rounded-xl glass-panel border-white/10 space-y-1">
                  <div className="text-emerald-400 font-mono text-xs font-semibold">AUTOMATED CLEANUP</div>
                  <p className="text-xs text-slate-400">
                    Process exit verification guarantees that session overlays and NVRAM copies are deleted cleanly.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Mathematical / Technical Equation card */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl glass-panel p-8 border border-white/15 space-y-6 shadow-2xl bg-[#080d18]">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs">
                  <span className="text-slate-400">NOVA CORE EQUATION</span>
                  <span className="text-cyan-400">DETERMINISTIC LIFECYCLE</span>
                </div>

                <div className="space-y-4 font-mono text-sm">
                  {/* Base Image */}
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400">
                        <HardDrive className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-xs sm:text-sm">Sealed Base OS Image</div>
                        <div className="text-[11px] text-slate-400">Golden state • SHA-256 sealed • Read-Only</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-cyan-400 uppercase">Fixed</span>
                  </div>

                  <div className="flex justify-center text-slate-500 font-bold text-lg">
                    +
                  </div>

                  {/* Temporary Overlay */}
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-amber-950 border border-amber-500/30 text-amber-400">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-xs sm:text-sm">Temporary Writable Overlay</div>
                        <div className="text-[11px] text-slate-400">QCOW2 Delta Layer + Per-Session NVRAM</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-amber-400 uppercase">Disposable</span>
                  </div>

                  <div className="flex justify-center text-slate-500 font-bold text-lg">
                    =
                  </div>

                  {/* Ephemeral Session */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/60 to-emerald-950/60 border border-emerald-500/40 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-950 border border-emerald-500/30 text-emerald-400">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-emerald-300 font-semibold text-xs sm:text-sm">Ephemeral Session</div>
                        <div className="text-[11px] text-slate-300">Run freely → Shutdown → Overlay Destroyed</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-400 uppercase">Isolated</span>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <Link
                    href="/configuration"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 hover:underline"
                  >
                    <span>Explore Profile Configuration & Invariants</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Lifecycle / Architecture Section */}
      <ProductVisualization />

      {/* Features Grid (9 Pillars) */}
      <FeaturesGrid />

      {/* Terminal Telemetry / Status Specs */}
      <SystemStatusCard />

      {/* Download CTA Banner */}
      <DownloadBanner />
    </div>
  );
}
