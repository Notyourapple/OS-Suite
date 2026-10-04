import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/config/site";
import { Terminal, Shield, Cpu, ExternalLink, HardDrive } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#06080d] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & mission */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size={32} />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              NOVA is an ephemeral operating system launcher for Windows. Run
              disposable virtual machines with QEMU and WHPX acceleration,
              discarding all session modifications on shutdown.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-white/5 transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>GitHub Repository</span>
              </a>
              <a
                href={siteConfig.releasesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
              >
                <span>Releases</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/#overview" className="hover:text-cyan-400 transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/#architecture" className="hover:text-cyan-400 transition-colors">
                  Architecture
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-cyan-400 transition-colors">
                  Key Features
                </Link>
              </li>
              <li>
                <Link href="/configuration" className="hover:text-cyan-400 transition-colors">
                  OS Profiles
                </Link>
              </li>
              <li>
                <Link href="/download" className="hover:text-cyan-400 transition-colors">
                  Download v{siteConfig.version}
                </Link>
              </li>
            </ul>
          </div>

          {/* Documentation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200">
              Documentation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/installation" className="hover:text-cyan-400 transition-colors">
                  Installation Guide
                </Link>
              </li>
              <li>
                <Link href="/requirements" className="hover:text-cyan-400 transition-colors">
                  System Requirements
                </Link>
              </li>
              <li>
                <Link href="/windows-support" className="hover:text-cyan-400 transition-colors">
                  Windows & WHPX Setup
                </Link>
              </li>
              <li>
                <Link href="/docs#qemu" className="hover:text-cyan-400 transition-colors">
                  QEMU & QCOW2 Engine
                </Link>
              </li>
              <li>
                <Link href="/docs#troubleshooting" className="hover:text-cyan-400 transition-colors">
                  Troubleshooting
                </Link>
              </li>
            </ul>
          </div>

          {/* Technical Specs & Invariants */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200">
              Platform & Specs
            </h4>
            <div className="space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>Host: Windows x64</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-violet-400" />
                <span>Engine: QEMU + WHPX</span>
              </div>
              <div className="flex items-center gap-2">
                <HardDrive className="w-3.5 h-3.5 text-emerald-400" />
                <span>Disk: QCOW2 Overlays</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>Invariant: Read-Only Base</span>
              </div>
            </div>
            <div className="pt-2 text-[11px] text-slate-500 leading-normal">
              Zero host directory exposure. Guest OS displays in a native QEMU window.
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
            <span>© {new Date().getFullYear()} NOVA Project</span>
            <span>•</span>
            <span>Open Source Desktop Infrastructure</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Built for clean starts.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
