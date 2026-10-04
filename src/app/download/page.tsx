"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import {
  Download,
  ShieldCheck,
  Copy,
  Check,
  ExternalLink,
  AlertCircle,
  FileCode,
} from "lucide-react";

export default function DownloadPage() {
  const [copiedHash, setCopiedHash] = useState(false);
  const [copiedCmd, setCopiedCmd] = useState(false);

  const copyToClipboard = (text: string, isHash: boolean) => {
    navigator.clipboard.writeText(text);
    if (isHash) {
      setCopiedHash(true);
      setTimeout(() => setCopiedHash(false), 2000);
    } else {
      setCopiedCmd(true);
      setTimeout(() => setCopiedCmd(false), 2000);
    }
  };

  const psCommand = `(Get-FileHash -Path .\\NOVA-Setup.exe -Algorithm SHA256).Hash -eq "${siteConfig.installerSha256.toUpperCase()}"`;

  return (
    <div className="pt-28 pb-20 tech-grid min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>OFFICIAL WINDOWS DISTRIBUTION</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Download NOVA
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Standard per-user Windows installer. No administrative elevation required for core installation.
          </p>
        </div>

        {/* Primary Download Card */}
        <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] bg-[#070b13]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left specifications */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-mono text-xs font-bold">
                  v{siteConfig.version} STABLE
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10 font-mono text-xs">
                  {siteConfig.architecture}
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10 font-mono text-xs">
                  {siteConfig.installerSize}
                </span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  NOVA for Windows
                </h2>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Includes the complete NOVA Desktop GUI, Tauri 2 supervision runtime, SQLite database engine, QMP communication layer, and profile manager.
                </p>
              </div>

              {/* Download CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={siteConfig.downloadUrl}
                  download={siteConfig.installerName}
                  className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-[length:200%_auto] hover:bg-right text-white font-semibold text-sm shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all"
                >
                  <Download className="w-4 h-4 text-cyan-100" />
                  <span>DOWNLOAD {siteConfig.installerName}</span>
                </a>

                <a
                  href={siteConfig.releasesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-white/20 text-sm font-medium transition-all"
                >
                  <span>View GitHub Releases</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>

              {/* Fallback notification */}
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  If direct download is blocked by your browser, access mirrors via{" "}
                  <a href={siteConfig.releasesUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">
                    GitHub Releases
                  </a>
                  .
                </span>
              </div>
            </div>

            {/* Right side verification & integrity details */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-xl bg-[#090d16] border border-white/10 p-5 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-slate-400 font-semibold">CRYPTOGRAPHIC INTEGRITY</span>
                  <span className="text-[10px] text-cyan-400">SHA-256</span>
                </div>

                <div className="space-y-1.5">
                  <div className="text-slate-500 text-[11px]">Installer SHA-256 Hash</div>
                  <div className="p-2.5 rounded bg-black/50 border border-white/10 text-slate-300 break-all text-[11px] select-all flex items-center justify-between gap-2">
                    <span className="truncate">{siteConfig.installerSha256}</span>
                    <button
                      onClick={() => copyToClipboard(siteConfig.installerSha256, true)}
                      className="p-1 text-slate-400 hover:text-cyan-400 shrink-0"
                      title="Copy SHA-256"
                    >
                      {copiedHash ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="text-slate-500 text-[11px]">PowerShell Hash Verification Command</div>
                  <div className="p-2.5 rounded bg-black/50 border border-white/10 text-cyan-300 break-all text-[11px] flex items-center justify-between gap-2">
                    <span className="truncate font-mono">Get-FileHash NOVA-Setup.exe</span>
                    <button
                      onClick={() => copyToClipboard(psCommand, false)}
                      className="p-1 text-slate-400 hover:text-cyan-400 shrink-0"
                      title="Copy verification command"
                    >
                      {copiedCmd ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 pt-1 leading-normal">
                  Verify the authenticity of your binary before execution in production environments.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick 4-Step Start */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Four Steps to Ephemeral Computing
            </h3>
            <p className="text-sm text-slate-400">
              Zero configuration files required to get started.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="glass-panel p-5 rounded-xl space-y-3 border-white/10">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold flex items-center justify-center">
                  1
                </span>
                <span className="text-[10px] font-mono text-slate-500">INSTALL</span>
              </div>
              <h4 className="text-sm font-semibold text-white">Run NOVA Setup</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Launch <code className="text-cyan-300">NOVA-Setup.exe</code>. The installer runs locally in your user profile without admin rights.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-xl space-y-3 border-white/10">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/40 text-xs font-mono font-bold flex items-center justify-center">
                  2
                </span>
                <span className="text-[10px] font-mono text-slate-500">DIAGNOSTICS</span>
              </div>
              <h4 className="text-sm font-semibold text-white">First-Run Checks</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                NOVA automatically queries CPU virtualization, QEMU paths, and WHPX hardware acceleration status.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-xl space-y-3 border-white/10">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold flex items-center justify-center">
                  3
                </span>
                <span className="text-[10px] font-mono text-slate-500">PROVISION</span>
              </div>
              <h4 className="text-sm font-semibold text-white">Add Guest OS</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Select an ISO (e.g., Ubuntu, Debian, Fedora, Arch) or convert an existing QCOW2 image into a sealed base.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-xl space-y-3 border-white/10">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold flex items-center justify-center">
                  4
                </span>
                <span className="text-[10px] font-mono text-slate-500">RUN & DISCARD</span>
              </div>
              <h4 className="text-sm font-semibold text-white">Launch Clean</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Click <strong>RUN</strong>. When finished, guest shutdown triggers automatic deletion of all overlay modifications.
              </p>
            </div>
          </div>
        </div>

        {/* Release Notes for v1.2.0 */}
        <div className="rounded-2xl glass-panel p-6 sm:p-8 border-white/10 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <FileCode className="w-4 h-4 text-cyan-400" />
              <h3 className="text-base font-bold text-white font-mono">
                RELEASE HIGHLIGHTS — v{siteConfig.version}
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500">{siteConfig.releaseDate}</span>
          </div>

          <ul className="space-y-2 text-sm text-slate-300 font-sans">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono mt-0.5">•</span>
              <span><strong>Tauri 2 Supervision Architecture:</strong> Single-instance enforcement, in-process mutex, and write-ahead SQLite state machine.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono mt-0.5">•</span>
              <span><strong>WHPX Hypervisor Acceleration:</strong> Direct integration with Windows Hypervisor Platform via <code>WinHvPlatform</code> capability queries.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono mt-0.5">•</span>
              <span><strong>QCOW2 Invariant I1 Enforcement:</strong> Sealed base images are guarded read-only with cryptographic SHA-256 validation.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono mt-0.5">•</span>
              <span><strong>Crash & Orphan Recovery:</strong> Automatic PID and process-creation-time identity verification on startup cleans orphaned overlays safely.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono mt-0.5">•</span>
              <span><strong>Dynamic Low-Disk Guard:</strong> Automatic guest pause via QMP <code>stop</code> when free disk headroom falls below safety thresholds.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
