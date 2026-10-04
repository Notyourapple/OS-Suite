import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export function Logo({ className = "", size = 28, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 font-sans select-none ${className}`}>
      <div
        className="relative flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 via-slate-900 to-violet-500/20 p-1.5 border border-cyan-500/30 shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)]"
        style={{ width: size + 8, height: size + 8 }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-cyan-400 transition-transform duration-300 hover:rotate-45"
        >
          {/* Outer isolated VM boundary */}
          <rect
            x="3"
            y="3"
            width="26"
            height="26"
            rx="6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            className="opacity-60"
          />
          {/* Inner pristine base circle */}
          <circle
            cx="16"
            cy="16"
            r="8"
            stroke="#8b5cf6"
            strokeWidth="1.5"
            className="opacity-80"
          />
          {/* Ephemeral core spark / nova star */}
          <path
            d="M16 9V23M9 16H23"
            stroke="#06b6d4"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="16" cy="16" r="2.5" fill="#38bdf8" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-bold tracking-widest text-lg text-white font-mono">
              NOVA
            </span>
            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
              v1.2
            </span>
          </div>
          <span className="text-[10px] tracking-wider uppercase text-slate-400 font-sans -mt-0.5">
            Ephemeral OS Launcher
          </span>
        </div>
      )}
    </div>
  );
}
