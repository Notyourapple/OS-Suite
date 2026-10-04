import React from "react";
import Link from "next/link";
import { Terminal, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-20 tech-grid flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
          <Terminal className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-mono text-cyan-400">ERROR 404 :: ENTITY_NOT_FOUND</div>
          <h1 className="text-3xl font-extrabold text-white">Target Unreachable</h1>
          <p className="text-sm text-slate-400">
            The requested page does not exist or has been relocated in the documentation index.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono hover:bg-cyan-500/30 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/docs"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass-panel text-slate-300 hover:text-white text-xs font-mono transition-all"
          >
            <span>View Documentation</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
