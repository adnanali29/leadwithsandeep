"use client";

import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

export type PageId = "home" | "framework" | "audit" | "about" | "contact";

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-surface-bg/95 backdrop-blur-md border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Identity */}
          <button
            type="button"
            onClick={() => handleNav("home")}
            className="group flex items-center space-x-3 text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-800 flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm group-hover:bg-accent-600 transition-colors">
              S
            </div>
            <div>
              <span className="text-xl font-bold font-serif tracking-tight text-ink-900 block leading-tight">
                LeadWithSandeep
              </span>
              <span className="text-[11px] uppercase tracking-widest text-accent-600 font-semibold block">
                Leadership Architecture
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button
              type="button"
              onClick={() => handleNav("home")}
              className={`nav-item px-3.5 py-2 rounded-lg text-sm transition-all ${
                activePage === "home"
                  ? "text-brand-800 bg-surface-subtle font-semibold"
                  : "text-ink-700 hover:text-brand-800 hover:bg-surface-subtle font-medium"
              }`}
            >
              The Gap
            </button>
            <button
              type="button"
              onClick={() => handleNav("framework")}
              className={`nav-item px-3.5 py-2 rounded-lg text-sm transition-all ${
                activePage === "framework"
                  ? "text-brand-800 bg-surface-subtle font-semibold"
                  : "text-ink-700 hover:text-brand-800 hover:bg-surface-subtle font-medium"
              }`}
            >
              ACE Framework
            </button>
            <button
              type="button"
              onClick={() => handleNav("audit")}
              className={`nav-item px-3.5 py-2 rounded-lg text-sm transition-all ${
                activePage === "audit"
                  ? "text-brand-800 bg-surface-subtle font-semibold"
                  : "text-ink-700 hover:text-brand-800 hover:bg-surface-subtle font-medium"
              }`}
            >
              Founder Mirror &amp; Cost
            </button>
            <button
              type="button"
              onClick={() => handleNav("about")}
              className={`nav-item px-3.5 py-2 rounded-lg text-sm transition-all ${
                activePage === "about"
                  ? "text-brand-800 bg-surface-subtle font-semibold"
                  : "text-ink-700 hover:text-brand-800 hover:bg-surface-subtle font-medium"
              }`}
            >
              Why Sandeep
            </button>
            <button
              type="button"
              onClick={() => handleNav("contact")}
              className={`nav-item px-3.5 py-2 rounded-lg text-sm transition-all ${
                activePage === "contact"
                  ? "text-brand-800 bg-surface-subtle font-semibold"
                  : "text-ink-700 hover:text-brand-800 hover:bg-surface-subtle font-medium"
              }`}
            >
              Let&apos;s Talk
            </button>
          </nav>

          {/* Header CTA Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              type="button"
              onClick={() => handleNav("contact")}
              className="bg-brand-800 hover:bg-brand-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <span>Initiate a Conversation</span>
              <ArrowRight className="w-4 h-4 text-accent-400" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-ink-900 hover:bg-surface-subtle focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-surface-border bg-surface-subtle px-4 pt-3 pb-6 space-y-2">
          <button
            type="button"
            onClick={() => handleNav("home")}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-base font-medium text-ink-900 hover:bg-brand-50"
          >
            The Problem &amp; The Gap
          </button>
          <button
            type="button"
            onClick={() => handleNav("framework")}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-base font-medium text-ink-900 hover:bg-brand-50"
          >
            The ACE Framework &amp; Engagement
          </button>
          <button
            type="button"
            onClick={() => handleNav("audit")}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-base font-medium text-ink-900 hover:bg-brand-50"
          >
            Founder Mirror &amp; Cost Calculator
          </button>
          <button
            type="button"
            onClick={() => handleNav("about")}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-base font-medium text-ink-900 hover:bg-brand-50"
          >
            About Sandeep (20 Yrs Corporate)
          </button>
          <button
            type="button"
            onClick={() => handleNav("contact")}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-base font-medium bg-brand-800 text-white hover:bg-brand-900"
          >
            Book Founder Conversation
          </button>
        </div>
      )}
    </header>
  );
}

