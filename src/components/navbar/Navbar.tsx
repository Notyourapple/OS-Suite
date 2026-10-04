"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { siteConfig, navLinks } from "@/config/site";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#06080d]/85 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md"
        >
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-colors ${
                  isActive
                    ? "text-cyan-400 bg-cyan-950/40 border border-cyan-500/20"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-xs text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span className="font-mono">GitHub</span>
          </a>

          <Link
            href="/download"
            className="relative group flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold tracking-wide shadow-[0_0_20px_-3px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_-2px_rgba(6,182,212,0.6)] hover:brightness-110 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
            <span className="hidden xl:inline text-[10px] font-mono px-1 py-0.2 bg-black/30 rounded text-cyan-200">
              v{siteConfig.version}
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-[#06080d]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 overflow-y-auto flex flex-col justify-between z-40">
          <div className="space-y-3">
            <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase px-2">
              Navigation
            </div>
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                      isActive
                        ? "text-cyan-400 bg-cyan-950/40 border border-cyan-500/20"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <Link
              href="/download"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm shadow-lg shadow-cyan-500/25"
            >
              <Download className="w-4 h-4" />
              <span>Download NOVA for Windows</span>
            </Link>

            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 text-sm font-medium"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>

            <div className="flex items-center justify-center gap-4 text-xs font-mono text-slate-500 pt-2">
              <span>Windows x64</span>
              <span>•</span>
              <span>v{siteConfig.version}</span>
              <span>•</span>
              <span>WHPX + QEMU</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
