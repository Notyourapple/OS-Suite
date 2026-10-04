export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  version: string;
  releaseDate: string;
  installerName: string;
  installerSize: string;
  installerSha256: string;
  downloadUrl: string;
  githubUrl: string;
  releasesUrl: string;
  docsUrl: string;
  platform: string;
  architecture: string;
  minWindowsBuild: string;
  engine: string;
  acceleration: string;
  diskFormat: string;
}

export const siteConfig: SiteConfig = {
  name: "NOVA",
  shortName: "NOVA",
  tagline: "Ephemeral OS Launcher for Windows",
  description:
    "Run operating systems in isolated QEMU virtual machines on Windows with ephemeral sessions that discard changes and return to a pristine base state.",
  version: "1.2.0",
  releaseDate: "October 2026",
  installerName: "NOVA-Setup-x64.exe",
  installerSize: "65.5 MB",
  installerSha256: "fc35a2c48a2ea66815eb9ec075e871f287617c2106da80af1e9c99b8784c8f34",
  downloadUrl:
    process.env.NEXT_PUBLIC_DOWNLOAD_URL ||
    "https://github.com/Notyourapple/OS-Suite/releases/download/v1.2.0/NOVA-Setup-x64.exe",
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/Notyourapple/OS-Suite",
  releasesUrl:
    process.env.NEXT_PUBLIC_RELEASES_URL ||
    "https://github.com/Notyourapple/OS-Suite/releases",
  docsUrl: "/docs",
  platform: "Windows 10 / 11",
  architecture: "Windows x64 (Intel & AMD 64-bit)",
  minWindowsBuild: "Windows 10 Version 1903 (Build 18362) or newer",
  engine: "QEMU x86_64",
  acceleration: "WHPX (Windows Hypervisor Platform)",
  diskFormat: "QCOW2 with Copy-On-Write Overlays",
};

export const navLinks = [
  { label: "Overview", href: "/#overview" },
  { label: "Architecture", href: "/#architecture" },
  { label: "Features", href: "/#features" },
  { label: "Configuration", href: "/configuration" },
  { label: "Requirements", href: "/requirements" },
  { label: "Windows Support", href: "/windows-support" },
  { label: "Installation", href: "/installation" },
  { label: "Documentation", href: "/docs" },
];
