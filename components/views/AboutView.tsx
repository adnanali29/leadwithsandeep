"use client";

import React from "react";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { PageId } from "../Navbar";

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
}

export default function AboutView({ onNavigate }: AboutViewProps) {
  return (
    <section id="view-about" className="page-view active">
      <div className="bg-surface-subtle py-16 border-b border-surface-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-800">
            Background &amp; Philosophy
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-ink-900 mt-2 mb-4">
            Why Sandeep
          </h1>
          <p className="text-base sm:text-lg text-ink-700 max-w-2xl mx-auto">
            Two decades in the corporate trenches. No ivory-tower buzzwords, no
            savior complex. Just grounded, unvarnished insight into the human
            architecture of scaling organizations.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Two Column Profile */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Portrait & Stats Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-surface-card p-6 rounded-2xl border border-surface-border shadow-sm">
              {/* Silhouette Aesthetic */}
              <div className="w-full aspect-[4/5] bg-gradient-to-br from-brand-50 via-surface-subtle to-brand-100 rounded-xl flex flex-col items-center justify-center p-6 text-center border border-surface-border">
                <div className="w-24 h-24 rounded-full bg-brand-800 text-white flex items-center justify-center font-serif text-3xl font-bold shadow-md mb-4">
                  SK
                </div>
                <h3 className="font-serif font-bold text-xl text-ink-900">
                  Sandeep
                </h3>
                <p className="text-xs uppercase tracking-wider text-accent-600 font-semibold mt-1">
                  Trust Architect &amp; Founder Partner
                </p>
                <p className="text-xs text-ink-500 mt-3 italic max-w-xs">
                  &ldquo;I am not here to change the world. I am here to help you build
                  an environment where your team does their best work.&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-surface-border space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-ink-500 font-medium">
                    Corporate Track Record
                  </span>
                  <span className="font-bold text-ink-900">20+ Years</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-ink-500 font-medium">
                    Focus Demographic
                  </span>
                  <span className="font-bold text-ink-900">
                    Early-Stage Scaling Founders
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-ink-500 font-medium">Positioning</span>
                  <span className="font-bold text-ink-900">
                    Non-Corporate &amp; Grounded
                  </span>
                </div>
              </div>
            </div>

            {/* Philosophy Badge */}
            <div className="bg-surface-subtle p-6 rounded-2xl border border-surface-border">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent-600 mb-2">
                The Unspoken Truth
              </h4>
              <p className="text-xs text-ink-700 leading-relaxed">
                Most business certifications cater to established enterprises with
                rigid hierarchies. But in an early-stage company, the founder&apos;s
                personal emotional state directly dictates the company&apos;s
                operating climate. That requires personal, tailored introspection.
              </p>
            </div>
          </div>

          {/* Narrative & Experience Column */}
          <div className="md:col-span-7 space-y-6 text-ink-700">
            <div className="bg-surface-card p-8 rounded-2xl border border-surface-border shadow-sm space-y-4 leading-relaxed text-sm sm:text-base">
              <h3 className="text-2xl font-serif font-bold text-ink-900">
                Cutting Through The Leadership Industry Noise
              </h3>
              <p>
                Leadership principles are not rocket science. Ancient
                philosophical texts, mythological parables, and decades of modern
                research have outlined how trust works. The wisdom already exists.
              </p>
              <p>
                Yet for a busy founder running on 4 hours of sleep with payroll in
                two weeks, standard leadership advice feels completely divorced from
                reality. It comes wrapped in expensive consulting jargon,
                superficial motivational catchphrases, or academic frameworks
                designed for Fortune 500 boardrooms.
              </p>
              <p>
                <strong>
                  Having spent two decades in corporate leadership across
                  functions and regions,
                </strong>{" "}
                I have sat on both sides of the hierarchy. I have seen firsthand:
              </p>
              <ul className="space-y-2 pl-4 border-l-2 border-accent-600 text-xs sm:text-sm text-ink-900 font-medium">
                <li>
                  • How a leader&apos;s subtle micro-expression can freeze an
                  entire room into fearful silence.
                </li>
                <li>
                  • How hyper-control creates the exact lack of initiative that the
                  leader complains about.
                </li>
                <li>
                  • How talented professionals leave great products simply because
                  the emotional environment is toxic.
                </li>
              </ul>
              <p>
                I work with founders who possess the humility to understand that
                their company cannot outgrow their own emotional maturity.
              </p>
            </div>

            {/* Who I Work With / Who I Don't Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-surface-subtle p-5 rounded-xl border border-surface-border">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-800 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-600" /> Good Fit For:
                </h4>
                <ul className="text-xs space-y-2 text-ink-700">
                  <li>
                    • Founders moving past early traction who feel stuck in every
                    operational detail.
                  </li>
                  <li>
                    • Leaders willing to look inward before blaming team
                    competence.
                  </li>
                  <li>
                    • Those seeking calm, sustainable scale over ego and vanity
                    metrics.
                  </li>
                </ul>
              </div>
              <div className="bg-surface-subtle p-5 rounded-xl border border-surface-border">
                <h4 className="text-xs font-bold uppercase tracking-wider text-accent-600 mb-2 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-accent-600" /> Not A Fit For:
                </h4>
                <ul className="text-xs space-y-2 text-ink-700">
                  <li>
                    • Leaders looking for a savior to come and &ldquo;fix their
                    employees&rdquo; for them.
                  </li>
                  <li>
                    • Those convinced that pressure, fear, and aggressive
                    task-mastering are the only true motivators.
                  </li>
                  <li>
                    • Large bureaucracies with rigid politics unwilling to alter
                    executive habits.
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 text-right">
              <button
                type="button"
                onClick={() => onNavigate("contact")}
                className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-800 hover:text-accent-600 transition-colors"
              >
                <span>Read enough? Let&apos;s have a candid discussion</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

