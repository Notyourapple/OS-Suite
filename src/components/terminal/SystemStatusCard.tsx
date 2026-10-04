import React from "react";
import { Terminal, Shield } from "lucide-react";

export function SystemStatusCard() {
  return (
    <section className="py-20 border-t border-white/10 bg-[#06080d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-2xl glass-panel border border-white/15 overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="px-5 py-3.5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono font-semibold text-slate-200 uppercase tracking-wider">
                NOVA ENGINE TELEMETRY & SPECIFICATION
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>CORE READY</span>
            </div>
          </div>

          {/* Matrix specs */}
          <div className="p-6 sm:p-8 bg-[#070b13] font-mono text-xs sm:text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest pb-1 border-b border-white/5">
                  Virtualization Subsystem
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">STATUS</span>
                  <span className="text-emerald-400 font-semibold">INITIALIZED / READY</span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">ENGINE</span>
                  <span className="text-cyan-300">QEMU 8+ (qemu-system-x86_64)</span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">ACCELERATION</span>
                  <span className="text-emerald-300">WHPX (WinHvPlatform API)</span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">TCG FALLBACK</span>
                  <span className="text-amber-400">Configurable (Slow Mode)</span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">CONTROL PROTOCOL</span>
                  <span className="text-slate-200">QMP Socket (127.0.0.1:Ephemeral)</span>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest pb-1 border-b border-white/5">
                  Storage & Process Invariants
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">DISK LAYER</span>
                  <span className="text-cyan-300">QCOW2 (Copy-On-Write)</span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">BASE INTEGRITY</span>
                  <span className="text-violet-300">Read-Only + SHA-256 Check</span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">SESSION CONCURRENCY</span>
                  <span className="text-slate-200">Single Active Instance (Mutex Protected)</span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">HOST RAM SAFETY</span>
                  <span className="text-emerald-300">20% / 2 GB Free Host Reserve</span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">HOST PRIVILEGES</span>
                  <span className="text-cyan-400">Standard User (Zero Admin Elevation)</span>
                </div>
              </div>
            </div>

            {/* Invariant Footer notice */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>Security rule: Host filesystem shares and bridge networking are strictly rejected by design.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
