import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Download, ArrowRight } from "lucide-react";

export function DownloadBanner() {
  return (
    <section className="py-24 border-t border-white/10 relative overflow-hidden bg-gradient-to-b from-[#06080d] via-[#090e18] to-[#06080d]">
      <div className="absolute inset-0 tech-grid opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl glass-panel p-8 sm:p-14 border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] text-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>OFFICIAL PRODUCTION RELEASE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready for Clean Virtualization?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Download NOVA for Windows x64. Standard per-user installation without requiring administrative elevation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/download"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-[length:200%_auto] hover:bg-right text-white font-semibold text-sm shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_45px_rgba(6,182,212,0.6)] transition-all"
            >
              <Download className="w-4 h-4 text-cyan-100" />
              <span>DOWNLOAD NOVA FOR WINDOWS</span>
            </Link>

            <Link
              href="/installation"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl glass-panel text-slate-200 hover:text-white hover:border-cyan-500/30 text-sm font-medium transition-all"
            >
              <span>Installation Guide</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          {/* Quick verification chips */}
          <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <span>Version: v{siteConfig.version}</span>
            <span>•</span>
            <span>File: {siteConfig.installerName}</span>
            <span>•</span>
            <span>Size: {siteConfig.installerSize}</span>
            <span>•</span>
            <span>Target: Windows 10/11 x64</span>
          </div>
        </div>
      </div>
    </section>
  );
}
