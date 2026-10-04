import React from "react";
import {
  Monitor,
  Zap,
  HelpCircle,
  AlertTriangle,
  Terminal,
} from "lucide-react";

interface TroubleshootingItem {
  problem: string;
  cause: string;
  solution: string;
}

const troubleshootingItems: TroubleshootingItem[] = [
  {
    problem: "Virtualization Unavailable or Hypervisor Absent",
    cause:
      "Hardware virtualization (Intel VT-x or AMD-V) is disabled in the system UEFI/BIOS, or hypervisor features are inactive.",
    solution:
      "Reboot into UEFI/BIOS settings, locate 'Virtualization Technology' / 'SVM Mode', and set to Enabled. In Windows, verify under Task Manager > Performance > CPU that 'Virtualization: Enabled' is shown.",
  },
  {
    problem: "WHPX Hypervisor Acceleration Not Detected",
    cause:
      "The optional Windows feature 'Windows Hypervisor Platform' is not enabled on your Windows 10/11 installation.",
    solution:
      "Open Windows Search, type 'Turn Windows features on or off', scroll down and check 'Windows Hypervisor Platform' (and 'Virtual Machine Platform'). Click OK, reboot Windows, and restart NOVA.",
  },
  {
    problem: "QEMU Executable Not Found (NOVA-QEMU-001)",
    cause:
      "NOVA automatically scans %ProgramFiles%\\qemu, system PATH, and registry keys, but QEMU was installed in a non-standard custom path.",
    solution:
      "Open NOVA Settings > Virtualization, locate the 'QEMU Path' field, and browse to your qemu-system-x86_64.exe installation directory.",
  },
  {
    problem: "Guest VM Fails to Boot from ISO",
    cause:
      "The selected ISO file is corrupt, architecture is non-x86_64, or the guest installer requires legacy BIOS while the profile specifies UEFI.",
    solution:
      "Verify the ISO checksum against official distro hashes using NOVA's built-in SHA-256 verifier. In OS Profile settings, toggle firmware from UEFI to BIOS if installing legacy OS images.",
  },
  {
    problem: "Session Refused: Insufficient Memory (NOVA-RES-002)",
    cause:
      "Requested guest RAM violates NOVA Invariant I10 by leaving less than 2 GB or 20% free RAM for the Windows host.",
    solution:
      "Close heavy host applications or edit the OS Profile to reduce guest allocated RAM to fit within the calculated safe host limit.",
  },
  {
    problem: "Display Scaling / Mouse Pointer Misalignment",
    cause:
      "Windows High-DPI display scaling (e.g. 150% or 200%) on 4K laptops causing mouse coordinates in QEMU's SDL window to drift.",
    solution:
      "In OS Profile > Display, select VirtIO-VGA or standard VGA with SDL backend. Press Ctrl+Alt+G in the native QEMU window to toggle mouse grab release cleanly.",
  },
];

export default function WindowsSupportPage() {
  return (
    <div className="pt-28 pb-20 tech-grid min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
            <Monitor className="w-3.5 h-3.5" />
            <span>PLATFORM INTEGRATION</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Windows Support & Troubleshooting
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Detailed guide on Windows Hypervisor Platform (WHPX), system setup, and resolution steps for common host environments.
          </p>
        </div>

        {/* WHPX Deep Dive Card */}
        <div className="rounded-2xl glass-panel p-6 sm:p-10 border border-cyan-500/30 space-y-6 bg-[#070b13]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Understanding WHPX (Windows Hypervisor Platform)
              </h2>
              <span className="text-xs font-mono text-cyan-400">
                User-Space Hardware Virtualization for Windows
              </span>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            NOVA does not require installing third-party kernel drivers or proprietary hypervisor extensions that could compromise Windows stability. Instead, NOVA interfaces with Microsoft&apos;s native <strong>Windows Hypervisor Platform (WHPX)</strong> via the <code>WinHvPlatform.dll</code> API.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs pt-2">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <div className="text-cyan-400 font-bold">1. ZERO ADMIN REQ</div>
              <div className="text-slate-400 text-[11px]">
                NOVA runs purely as a standard user process and never requests elevated administrative access.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <div className="text-violet-400 font-bold">2. HYPER-V COEXIST</div>
              <div className="text-slate-400 text-[11px]">
                Coexists with WSL2, Windows Sandbox, and Credential Guard without virtualization lockouts.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <div className="text-emerald-400 font-bold">3. NATIVE PERFORMANCE</div>
              <div className="text-slate-400 text-[11px]">
                Hardware accelerated vCPUs provide near-native compute speeds inside guest environments.
              </div>
            </div>
          </div>
        </div>

        {/* Enabling WHPX Guide */}
        <div className="rounded-2xl glass-panel p-6 sm:p-8 border-white/10 space-y-4">
          <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>How to Enable WHPX in Windows (PowerShell or GUI)</span>
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            You can verify and enable the Windows Hypervisor Platform feature using an elevated PowerShell prompt:
          </p>

          <div className="p-4 rounded-xl bg-black/70 border border-white/10 font-mono text-xs text-cyan-300 overflow-x-auto space-y-2">
            <div className="text-slate-500"># Run in Administrator PowerShell to enable Windows Hypervisor Platform:</div>
            <div>Enable-WindowsOptionalFeature -Online -FeatureName HypervisorPlatform -All -NoRestart</div>
            <div className="text-slate-500"># Verify status:</div>
            <div>Get-WindowsOptionalFeature -Online -FeatureName HypervisorPlatform</div>
          </div>
        </div>

        {/* Troubleshooting Matrix */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-400" />
              <span>Troubleshooting Matrix</span>
            </h2>
            <p className="text-sm text-slate-400">
              Prescriptive solutions matching NOVA&apos;s actual diagnostic checks and error codes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {troubleshootingItems.map((item, index) => (
              <div
                key={index}
                className="rounded-xl glass-panel p-6 border-white/10 space-y-3"
              >
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item.problem}</span>
                  </h4>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    DIAG-ERR-0{index + 1}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-xs">
                  <div className="md:col-span-5 space-y-1">
                    <span className="font-mono text-slate-500 font-semibold uppercase text-[10px]">
                      Possible Cause
                    </span>
                    <p className="text-slate-300 leading-relaxed">{item.cause}</p>
                  </div>

                  <div className="md:col-span-7 space-y-1">
                    <span className="font-mono text-cyan-400 font-semibold uppercase text-[10px]">
                      Recommended Solution
                    </span>
                    <p className="text-slate-200 leading-relaxed bg-white/[0.02] p-2.5 rounded-lg border border-white/5 font-sans">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
