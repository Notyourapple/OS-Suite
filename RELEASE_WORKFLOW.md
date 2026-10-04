# NOVA Release & Distribution Workflow

This guide documents the standardized, repeatable release procedure for NOVA Windows x64 distribution without relying on Git LFS.

---

## Architecture Overview

```
NOVA Website (Next.js)
    ↓
Download NOVA Button
    ↓
GitHub Release Asset (v1.x.y)
    ↓
NOVA-Setup-x64.exe (Windows x64 NSIS Installer)
    ↓
Clean Windows x64 / x86-64 Machine (Intel & AMD)
```

> **Important**: Do **not** commit executable binaries (`.exe`) directly into the Git repository or serve them through Git LFS in the website source code. Vercel and CI environments do not pull Git LFS objects by default, which causes them to serve 133-byte Git LFS pointer stubs instead of the real binary. Always host releases via GitHub Releases.

---

## Repeatable Step-by-Step Release Process

### Step 1: Update NOVA Version
In your desktop app configuration (`Cargo.toml` and `tauri.conf.json`):
- Increment version number (e.g. `1.3.0`, `1.4.0`, etc.).

### Step 2: Build Tauri Release
Compile the release binary and NSIS bundle:
```bash
cargo tauri build
```

### Step 3: Name Windows x64 Installer
Rename or copy the generated installer:
```powershell
Copy-Item "target/release/bundle/nsis/NOVA_1.3.0_x64-setup.exe" "NOVA-Setup-x64.exe"
```
*Artifact name*: `NOVA-Setup-x64.exe`  
*Target Architecture*: Windows x64 / x86-64 (supports Intel 64-bit and AMD 64-bit).

### Step 4: Verify Installer Binary
Verify file size (~65.5 MB) and headers:
```powershell
Get-Item .\NOVA-Setup-x64.exe | Select-Object Name, Length
[System.Diagnostics.FileVersionInfo]::GetVersionInfo(".\NOVA-Setup-x64.exe")
```

### Step 5: Calculate SHA-256 Checksum
```powershell
Get-FileHash .\NOVA-Setup-x64.exe -Algorithm SHA256
```
Record the SHA-256 hash.

### Step 6: Create GitHub Release
Create a tagged release corresponding to the version (e.g. tag `v1.3.0`):
- Tag: `v1.3.0`
- Target: `main`
- Title: `NOVA v1.3.0 - Windows x64`

### Step 7: Upload Installer Asset
Upload `NOVA-Setup-x64.exe` as a release asset:
- Asset name: `NOVA-Setup-x64.exe`
- Direct download URL will be:  
  `https://github.com/<owner>/<repo>/releases/download/v1.3.0/NOVA-Setup-x64.exe`

### Step 8: Update Website Configuration
In `src/config/site.ts`:
```typescript
version: "1.3.0",
installerName: "NOVA-Setup-x64.exe",
installerSize: "65.5 MB",
installerSha256: "<calculated-sha256-hash>",
downloadUrl: process.env.NEXT_PUBLIC_DOWNLOAD_URL || "https://github.com/Notyourapple/OS-Suite/releases/download/v1.3.0/NOVA-Setup-x64.exe",
releasesUrl: "https://github.com/Notyourapple/OS-Suite/releases",
```

### Step 9: Deploy Website
Commit changes and push to `main`:
```bash
git add src/config/site.ts
git commit -m "chore(release): bump NOVA to v1.3.0"
git push origin main
```
Vercel will trigger a production deployment automatically.

### Step 10: Verify Public Download
1. Open the production website: `https://os-suite.vercel.app/`
2. Click **DOWNLOAD NOVA**
3. Verify downloaded file:
   - Filename is `NOVA-Setup-x64.exe`
   - File size is ~65.5 MB (not 133 bytes)
   - SHA-256 checksum matches the release hash
   - File does **not** contain `version https://git-lfs`
4. Test execution on a 64-bit Windows machine.
