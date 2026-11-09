"use client";

import React from "react";
import { PageId } from "./Navbar";

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-brand-900 text-brand-100 border-t border-brand-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-brand-800/80">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-brand-800 flex items-center justify-center text-white font-serif font-bold text-base border border-brand-700">
                S
              </div>
              <span className="text-lg font-bold font-serif text-white tracking-tight">
                LeadWithSandeep
              </span>
            </div>
            <p className="text-xs text-brand-200/80 max-w-sm leading-relaxed">
              A human architecture and trust advisory helping early-stage founders
              close the invisible gap between what they intend and how their team
              experiences them.
            </p>
            <div className="text-xs text-accent-400 font-medium pt-2">
              Inside-Out Leadership • Awareness • Commitment • Evolution
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-100 mb-4">
              Exploration
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-200/80">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate("home")}
                  className="hover:text-white transition-colors"
                >
                  The Invisible Gap
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate("framework")}
                  className="hover:text-white transition-colors"
                >
                  ACE Framework
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate("audit")}
                  className="hover:text-white transition-colors"
                >
                  Founder Reality Mirror
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate("audit")}
                  className="hover:text-white transition-colors"
                >
                  Friction Cost Calculator
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate("about")}
                  className="hover:text-white transition-colors"
                >
                  About Sandeep
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Principles */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-100 mb-4">
              Core Thesis
            </h4>
            <p className="text-xs text-brand-200/80 leading-relaxed italic">
              “You cannot scale a company on compliance. Sustainable scale
              requires trust, and trust begins with how the founder shows up.”
            </p>
            <div className="mt-4 pt-4 border-t border-brand-800">
              <button
                type="button"
                onClick={() => onNavigate("contact")}
                className="text-xs text-accent-400 font-semibold hover:underline"
              >
                Request Private Consultation &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-200/60">
          <p>&copy; 2026 LeadWithSandeep. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Designed for thoughtful founders who value substance over spectacle.
          </p>
        </div>
      </div>
    </footer>
  );
}

