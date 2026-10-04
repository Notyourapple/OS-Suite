import React from "react";
import {
  FileCode,
  CheckCircle2,
  Clock,
  Shield,
  Cpu,
  HardDrive,
  Monitor,
} from "lucide-react";

export default function ConfigurationPage() {
  const profileJson = `{
  "schema_version": 1,
  "name": "Ubuntu 24.04 LTS (Noble)",
  "family": "linux",
  "architecture": "x86_64",
  "resources": {
    "cpu_cores": 4,
    "min_cpu_cores": 1,
    "max_cpu_cores": 8,
    "ram_mb": 4096,
    "min_ram_mb": 2048,
    "max_ram_mb": 16384
  },
  "storage": {
    "virtual_size_gb": 32,
    "bus": "virtio",
    "format": "qcow2",
    "discard": "unmap"
  },
  "firmware": {
    "type": "uefi",
    "secure_boot": false,
    "vars_template": "OVMF_VARS.fd"
  },
  "display": {
    "device": "virtio-vga",
    "backend": "sdl"
  },
  "networking": {
    "enabled": true,
    "mode": "user_nat",
    "model": "virtio-net-pci",
    "mac_policy": "random_per_session"
  },
  "acceleration": {
    "engine": "whpx",
    "kernel_irqchip": "off",
    "tcg_fallback": false
  }
}`;

  return (
    <div className="pt-28 pb-20 tech-grid min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
            <FileCode className="w-3.5 h-3.5" />
            <span>SPECIFICATION REFERENCE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Profile & Engine Configuration
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Every operating system in NOVA is defined by a strictly typed profile schema validated before QEMU invocation.
          </p>
        </div>

        {/* Conceptual Schema Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-panel p-5 rounded-xl border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold">
              <Cpu className="w-4 h-4" />
              <span>CPU & MEMORY</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Dynamically allocated cores and RAM bounded by host safety reserves (20% host RAM preserved).
            </p>
          </div>

          <div className="glass-panel p-5 rounded-xl border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-violet-400 font-mono text-xs font-semibold">
              <HardDrive className="w-4 h-4" />
              <span>STORAGE & BUS</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              QCOW2 disk layers attached via VirtIO, SATA, or IDE, with strict backing chain path verification.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-xl border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold">
              <Shield className="w-4 h-4" />
              <span>FIRMWARE & WHPX</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              UEFI/OVMF firmware paired with isolated per-session NVRAM variables and WHPX hypervisor acceleration.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-xl border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-semibold">
              <Monitor className="w-4 h-4" />
              <span>DISPLAY & NAT</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Native QEMU display window (VirtIO-VGA or standard VGA) and user-mode NAT with ephemeral MAC generation.
            </p>
          </div>
        </div>

        {/* Profile JSON Code Block */}
        <div className="rounded-2xl glass-panel p-6 sm:p-8 border-white/10 space-y-4 bg-[#070b13]">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <FileCode className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono text-slate-200">
                vm_profiles.config_json — Schema Version 1
              </span>
            </div>
            <span className="text-xs font-mono text-emerald-400">Strictly Typed Rust Model</span>
          </div>

          <pre className="p-4 rounded-xl bg-black/70 border border-white/5 font-mono text-xs text-cyan-300 overflow-x-auto leading-relaxed">
            <code>{profileJson}</code>
          </pre>
        </div>

        {/* Supported vs. Planned Capabilities Matrix */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Feature Support Classification
            </h2>
            <p className="text-sm text-slate-400">
              NOVA strictly adheres to an honest capability contract. Only verified functionality is marked supported.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fully Supported & Implemented */}
            <div className="rounded-2xl glass-panel p-6 border-emerald-500/30 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-bold pb-2 border-b border-white/10">
                <CheckCircle2 className="w-4 h-4" />
                <span>CURRENTLY SUPPORTED (v1.2.0)</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-300 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-mono font-bold">✓</span>
                  <div>
                    <strong className="text-white">QCOW2 Ephemeral Overlays:</strong> Instantaneous disposable overlay creation and automated post-exit cleanup.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-mono font-bold">✓</span>
                  <div>
                    <strong className="text-white">WHPX Acceleration:</strong> Native Windows Hypervisor Platform hardware virtualization.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-mono font-bold">✓</span>
                  <div>
                    <strong className="text-white">UEFI / OVMF Firmware:</strong> Per-session copied NVRAM vars ensuring pristine boot state.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-mono font-bold">✓</span>
                  <div>
                    <strong className="text-white">Tier 1 OS Profiles:</strong> Verified configurations for Ubuntu, Debian, Fedora, and Arch Linux.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-mono font-bold">✓</span>
                  <div>
                    <strong className="text-white">Tier 2 Windows 10 Profile:</strong> SATA/IDE disk configuration with user-supplied ISO.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-mono font-bold">✓</span>
                  <div>
                    <strong className="text-white">User-Mode Isolated NAT:</strong> Internal DHCP without exposing host network shares.
                  </div>
                </li>
              </ul>
            </div>

            {/* Planned or Explicit Non-Goals */}
            <div className="rounded-2xl glass-panel p-6 border-amber-500/30 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-sm font-bold pb-2 border-b border-white/10">
                <Clock className="w-4 h-4" />
                <span>PLANNED / DEFERRED CAPABILITIES</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-300 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-mono font-bold">⧖</span>
                  <div>
                    <strong className="text-white">Windows 11 TPM 2.0 (Blocked):</strong> Awaiting verified software TPM (<code>swtpm</code>) packaging on standard Windows hosts.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-mono font-bold">⧖</span>
                  <div>
                    <strong className="text-white">SteamOS (Experimental):</strong> Software-rendered graphics only; no discrete GPU passthrough.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 font-mono font-bold">✕</span>
                  <div>
                    <strong className="text-slate-400">Host Folder Sharing (Non-Goal):</strong> Intentionally omitted to protect host integrity against guest escapes.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 font-mono font-bold">✕</span>
                  <div>
                    <strong className="text-slate-400">Cloud Sync (Non-Goal):</strong> NOVA is 100% offline, local desktop infrastructure.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 font-mono font-bold">✕</span>
                  <div>
                    <strong className="text-slate-400">Direct GPU Passthrough (Non-Goal):</strong> Requires enterprise DDA/IOMMU hardware setup unsupported by consumer WHPX.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Advanced Argument Denylist Policy */}
        <div className="rounded-2xl glass-panel p-6 sm:p-8 border-rose-500/30 space-y-4 bg-[#0a0709]">
          <div className="flex items-center gap-2 text-rose-400 font-mono text-sm font-bold">
            <Shield className="w-4 h-4" />
            <span>ADVANCED ARGUMENT SECURITY DENYLIST</span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            When custom QEMU arguments are configured via Advanced Settings, NOVA evaluates each token against a strict security denylist. Arguments exposing host storage (<code>-fsdev</code>, <code>-virtfs</code>), direct raw block devices outside managed roots, bridged network adapters (<code>-netdev bridge</code>), or host serial endpoints are rejected with structured error codes.
          </p>
        </div>
      </div>
    </div>
  );
}
