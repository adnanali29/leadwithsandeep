"use client";

import React from "react";
import { useTheme, ThemeName } from "@/lib/theme";

export default function AnnouncementBar() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-brand-900 text-brand-50 text-xs sm:text-sm py-2 px-4 border-b border-brand-800 flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse"></span>
        <span>
          A grounded partnership for founders moving from <em>effort</em> to{" "}
          <em>leadership architecture</em>.
        </span>
      </div>

      {/* Live Palette Switcher for Sandeep & Client to Compare */}
      <div className="flex items-center space-x-2 text-xs">
        <span className="text-brand-200 font-medium">Palette:</span>
        <button
          type="button"
          onClick={() => setTheme("navy-cognac")}
          className={`px-2 py-0.5 rounded border ${
            theme === "navy-cognac" ? "border-accent-400 ring-1 ring-accent-400" : "border-brand-700"
          } bg-brand-800 hover:border-accent-400 transition-colors flex items-center gap-1.5`}
          title="Midnight Navy & Warm Cognac"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#142033] border border-white/40"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#c97323]"></span>
          <span className="hidden sm:inline">Navy & Cognac</span>
        </button>
        <button
          type="button"
          onClick={() => setTheme("charcoal-terracotta")}
          className={`px-2 py-0.5 rounded border ${
            theme === "charcoal-terracotta" ? "border-accent-400 ring-1 ring-accent-400" : "border-brand-700"
          } bg-brand-800 hover:border-accent-400 transition-colors flex items-center gap-1.5`}
          title="Warm Charcoal & Terracotta"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#222329] border border-white/40"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#d65a38]"></span>
          <span className="hidden sm:inline">Charcoal & Rust</span>
        </button>
        <button
          type="button"
          onClick={() => setTheme("royal-bronze")}
          className={`px-2 py-0.5 rounded border ${
            theme === "royal-bronze" ? "border-accent-400 ring-1 ring-accent-400" : "border-brand-700"
          } bg-brand-800 hover:border-accent-400 transition-colors flex items-center gap-1.5`}
          title="Deep Indigo & Bronze"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#1e295d] border border-white/40"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#ca8a04]"></span>
          <span className="hidden sm:inline">Indigo & Bronze</span>
        </button>
      </div>
    </div>
  );
}

