"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  BookOpen,
  Shield,
  Copy,
  Check,
  ChevronRight,
} from "lucide-react";

interface DocSection {
  id: string;
  title: string;
  badge?: string;
}

const docSections: DocSection[] = [
  { id: "intro", title: "1. Introduction" },
  { id: "installation", title: "2. Installation" },
  { id: "requirements", title: "3. Requirements" },
  { id: "first-launch", title: "4. First Launch Diagnostics" },
  { id: "adding-os", title: "5. Adding an OS" },
  { id: "os-profiles", title: "6. OS Profiles & Tiers" },
  { id: "iso-install", title: "7. ISO Installation Flow" },
  { id: "virtual-disks", title: "8. Virtual Disks & QCOW2" },
  { id: "ephemeral", title: "9. Ephemeral Sessions" },
  { id: "restart-clean", title: "10. Restart Clean" },
  { id: "vm-controls", title: "11. VM Controls & QMP" },
  { id: "display", title: "12. Display & Native Window" },
  { id: "qemu-engine", title: "13. QEMU Argument Builder" },
  { id: "whpx", title: "14. WHPX Acceleration" },
  { id: "troubleshooting", title: "15. Troubleshooting" },
  { id: "faq", title: "16. Frequently Asked Questions" },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const section of docSections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-24 pb-20 tech-grid min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Header */}
        <div className="py-4 border-b border-white/10 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              NOVA
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-cyan-400">Documentation</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white capitalize">{activeSection.replace("-", " ")}</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500">
            <span>Version: v{siteConfig.version}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sticky Sidebar Navigation */}
          <aside className="lg:col-span-3">
            <div className="sticky top-24 rounded-2xl glass-panel p-4 border border-white/10 space-y-2 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <div className="px-3 py-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Documentation Index
              </div>

              <nav className="space-y-0.5">
                {docSections.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      onClick={() => setActiveSection(sec.id)}
                      className={`block px-3 py-2 rounded-lg text-xs font-mono transition-all ${
                        isActive
                          ? "bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {sec.title}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Documentation Body */}
          <main className="lg:col-span-9 space-y-16">
            {/* 1. Introduction */}
            <section id="intro" className="space-y-4 scroll-mt-28">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-[11px]">
                <BookOpen className="w-3 h-3" />
                <span>OVERVIEW</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">1. Introduction to NOVA</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                NOVA is a production-grade Windows desktop application built to deliver <strong>ephemeral operating system virtualization</strong>. Using QEMU and the Windows Hypervisor Platform (WHPX), NOVA runs isolated operating system environments with temporary Copy-On-Write (QCOW2) overlays that are permanently discarded upon session shutdown.
              </p>

              {/* Callout box */}
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs text-slate-300 space-y-1">
                <div className="flex items-center gap-2 font-mono font-bold text-cyan-400">
                  <Shield className="w-3.5 h-3.5" />
                  <span>CORE PRODUCT CONTRACT</span>
                </div>
                <p>
                  NOVA guarantees that a sealed base image is never opened writable by any normal session (Invariant I1). The guest operating system runs in its own native QEMU display window, without browser streaming overhead.
                </p>
              </div>
            </section>

            {/* 2. Installation */}
            <section id="installation" className="space-y-4 scroll-mt-28">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-violet-950/80 border border-violet-500/30 text-violet-400 font-mono text-[11px]">
                <span>SETUP</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">2. Installation & Setup</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                NOVA is packaged as a standard Windows installer (<code className="text-cyan-300">NOVA-Setup.exe</code>). The installer runs without administrative elevation and installs NOVA cleanly into the user&apos;s local application folder.
              </p>

              <div className="p-4 rounded-xl bg-[#090d16] border border-white/10 font-mono text-xs text-slate-300 space-y-2">
                <div className="flex items-center justify-between text-slate-500">
                  <span>PowerShell Hash Check</span>
                  <button
                    onClick={() =>
                      copyCode(
                        `Get-FileHash -Path .\\NOVA-Setup.exe -Algorithm SHA256`,
                        "copy-install"
                      )
                    }
                    className="hover:text-cyan-400"
                  >
                    {copiedId === "copy-install" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="text-cyan-300">Get-FileHash -Path .\NOVA-Setup.exe -Algorithm SHA256</div>
              </div>
            </section>

            {/* 3. Requirements */}
            <section id="requirements" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">3. System Requirements</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                NOVA requires a 64-bit x86-64 processor with hardware virtualization enabled (Intel VT-x or AMD-V), running Windows 10 or Windows 11.
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-400 font-mono">
                <li>OS: Windows 10 / Windows 11 (64-bit)</li>
                <li>Hypervisor: Windows Hypervisor Platform (WHPX)</li>
                <li>Host Memory: Guest allocation + at least 2 GB or 20% host safety reserve</li>
                <li>Storage: Dependent on guest virtual disk image size</li>
              </ul>
            </section>

            {/* 4. First Launch Diagnostics */}
            <section id="first-launch" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">4. First Launch Diagnostics</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Before accepting any VM launch requests, NOVA executes non-modifying system diagnostic checks:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-cyan-400 font-bold">WHvGetCapability:</span> Probes for hypervisor presence on Windows.
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-violet-400 font-bold">QEMU Probe:</span> Scans PATH, Registry, and %ProgramFiles%\qemu.
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-emerald-400 font-bold">Firmware Check:</span> Validates presence of OVMF / EDK2 code and vars.
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-amber-400 font-bold">Memory & Disk:</span> Evaluates available physical RAM and volume headroom.
                </div>
              </div>
            </section>

            {/* 5. Adding an OS */}
            <section id="adding-os" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">5. Adding an Operating System</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                In the NOVA Dashboard, click <strong>Add OS</strong>. You can either install fresh from an ISO image or import an existing verified QCOW2 disk. Imported disks are validated to ensure they contain no malicious external backing chains pointing outside NOVA managed roots.
              </p>
            </section>

            {/* 6. OS Profiles & Support Tiers */}
            <section id="os-profiles" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">6. OS Profiles & Support Tiers</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Operating systems are grouped into strict capability support tiers:
              </p>
              <div className="rounded-xl border border-white/10 overflow-hidden font-mono text-xs">
                <table className="w-full text-left">
                  <thead className="bg-slate-900 border-b border-white/10 text-slate-400">
                    <tr>
                      <th className="p-3">Operating System</th>
                      <th className="p-3">Support Tier</th>
                      <th className="p-3">Configuration Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300">
                    <tr>
                      <td className="p-3 text-white font-bold">Ubuntu, Debian, Fedora, Arch</td>
                      <td className="p-3 text-emerald-400">Tier 1 (Full)</td>
                      <td className="p-3">UEFI boot, VirtIO storage bus, VirtIO network.</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-white font-bold">Windows 10 (64-bit)</td>
                      <td className="p-3 text-cyan-400">Tier 2</td>
                      <td className="p-3">SATA/IDE storage until VirtIO drivers installed.</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-white font-bold">Windows 11</td>
                      <td className="p-3 text-amber-400">Blocked (Tier 2)</td>
                      <td className="p-3">Requires TPM 2.0 emulation (swtpm). Deferred until verified.</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-white font-bold">SteamOS</td>
                      <td className="p-3 text-slate-400">Experimental</td>
                      <td className="p-3">Software rasterized graphics; no GPU passthrough.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 7. ISO Installation Flow */}
            <section id="iso-install" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">7. ISO Installation Flow</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                During an installation session (<code>kind: install</code>), NOVA creates a fresh virtual disk in <code>building</code> status and boots both the ISO and disk. After the user completes installation and shuts down the guest, NOVA verifies disk health (<code>qemu-img check</code>), hashes the file with streaming SHA-256, marks it read-only, and seals the base image.
              </p>
            </section>

            {/* 8. Virtual Disks & QCOW2 */}
            <section id="virtual-disks" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">8. Virtual Disks & QCOW2 Backing Chain</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                QCOW2 allows thin-provisioned copy-on-write images. The ephemeral overlay references the sealed base image as a read-only backing file:
              </p>
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-cyan-300">
                qemu-img create -f qcow2 -b base.qcow2 -F qcow2 session-overlay.qcow2
              </div>
            </section>

            {/* 9. Ephemeral Sessions */}
            <section id="ephemeral" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">9. Ephemeral Sessions</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Ephemeral mode is the primary operating paradigm of NOVA. Every session executes against a disposable overlay and an isolated copy of UEFI NVRAM vars. On guest shutdown, NOVA confirms the QEMU process has terminated via process handle, then permanently deletes the overlay file and session folder.
              </p>
            </section>

            {/* 10. Restart Clean */}
            <section id="restart-clean" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">10. Restart Clean</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Need to wipe state without leaving the application? <strong>Restart Clean</strong> signals QEMU to power down gracefully, deletes the current overlay, constructs a fresh one, and relaunches the virtual machine into its original base image state.
              </p>
            </section>

            {/* 11. VM Controls & QMP */}
            <section id="vm-controls" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">11. VM Controls & QMP Handshake</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                NOVA interacts with QEMU via the QEMU Machine Protocol (QMP) over an internal loopback socket. The supervisor receives structured asynchronous events (<code>SHUTDOWN</code>, <code>RESET</code>, <code>STOP</code>) and issues non-blocking commands such as <code>system_powerdown</code>.
              </p>
            </section>

            {/* 12. Display & Native Window */}
            <section id="display" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">12. Display & Native Window</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                The guest OS runs in its own native QEMU display window (SDL or GTK). NOVA intentionally does not stream video into a web browser canvas or Tauri webview, eliminating frame buffering latency, input lag, and GPU double-buffering penalties.
              </p>
            </section>

            {/* 13. QEMU Argument Builder */}
            <section id="qemu-engine" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">13. QEMU Argument Builder</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                NOVA uses a typed Rust argument builder producing a strict vector of <code className="text-cyan-300">OsString</code> arguments passed directly to the OS process supervisor. Raw shell interpretation (<code>cmd.exe /c</code> or PowerShell) is strictly avoided to eliminate shell injection vulnerabilities.
              </p>
            </section>

            {/* 14. WHPX Acceleration */}
            <section id="whpx" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">14. WHPX Acceleration</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Under the hood, NOVA passes <code>-machine q35,accel=whpx</code> to QEMU. This leverages Microsoft&apos;s hypervisor API while coexisting alongside Windows Defender Credential Guard, WSL2, and Hyper-V virtualization subsystems.
              </p>
            </section>

            {/* 15. Troubleshooting */}
            <section id="troubleshooting" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">15. Troubleshooting</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                For detailed diagnostics and error remediation regarding virtualization unavailable, missing QEMU binaries, or insufficient host RAM, consult the dedicated troubleshooting guide:
              </p>
              <div className="pt-1">
                <Link
                  href="/windows-support"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono hover:bg-cyan-500/30 transition-all"
                >
                  <span>Open Windows Troubleshooting Matrix</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            {/* 16. FAQ */}
            <section id="faq" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">16. Frequently Asked Questions</h2>
              <div className="space-y-4 text-xs font-sans text-slate-300">
                <div className="p-4 rounded-xl glass-panel border-white/10 space-y-1.5">
                  <h4 className="font-bold text-white text-sm">Does NOVA provide anonymity or forensic anti-forensics?</h4>
                  <p className="text-slate-400">
                    No. NOVA provides <strong>ephemeral guest sessions</strong>, not anonymity. It does not conceal Windows host event logs, network router traffic, or ISP records. File deletion is standard filesystem unlinking, not DoD-grade multi-pass forensic wiping.
                  </p>
                </div>

                <div className="p-4 rounded-xl glass-panel border-white/10 space-y-1.5">
                  <h4 className="font-bold text-white text-sm">Can I update software installed in my guest OS?</h4>
                  <p className="text-slate-400">
                    Yes. Use <strong>Maintenance Mode</strong>. In Maintenance Mode, after shutting down your updated session, NOVA allows you to commit changes back to the sealed base image with an explicit named confirmation.
                  </p>
                </div>

                <div className="p-4 rounded-xl glass-panel border-white/10 space-y-1.5">
                  <h4 className="font-bold text-white text-sm">Can multiple VMs run simultaneously?</h4>
                  <p className="text-slate-400">
                    In the current release (v1.2.0), NOVA enforces single-active-session execution (Invariant I2) via an in-process mutex and SQLite unique constraints to ensure host stability and prevent resource exhaustion.
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
