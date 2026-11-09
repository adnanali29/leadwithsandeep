"use client";

import React, { useState } from "react";
import { Info } from "lucide-react";
import { PageId } from "../Navbar";
import { playSoftTone } from "@/lib/sound";

interface AuditViewProps {
  onNavigate: (page: PageId) => void;
}

export default function AuditView({ onNavigate }: AuditViewProps) {
  // Mirror Diagnostic State
  const [q1, setQ1] = useState<number>(0);
  const [q2, setQ2] = useState<number>(0);
  const [q3, setQ3] = useState<number>(0);
  const [auditResult, setAuditResult] = useState<{
    score: number;
    title: string;
    desc: string;
    iconBg: string;
  } | null>(null);

  // Calculator State
  const [teamSize, setTeamSize] = useState<number>(18);
  const [avgSalary, setAvgSalary] = useState<number>(4500);
  const [founderHours, setFounderHours] = useState<number>(3.5);

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSoftTone();
    const score = q1 + q2 + q3;

    if (score <= 1) {
      setAuditResult({
        score,
        title: "Healthy Psychological Safety Baseline",
        desc: "Your team shows healthy signs of safety, independent initiative, and constructive honesty. As you scale from 20 to 50+, the priority will be protecting this baseline without drifting into default micro-control.",
        iconBg: "bg-brand-800 text-white",
      });
    } else if (score <= 3) {
      setAuditResult({
        score,
        title: "Moderate Compliance Drift & Hidden Hesitation",
        desc: "Your team is executing respectfully, but there is an emerging reliance on your validation. People have begun self-censoring in meetings to keep the peace, causing silent delays in execution and founder fatigue.",
        iconBg: "bg-accent-600 text-white",
      });
    } else {
      setAuditResult({
        score,
        title: "High Friction: The Fear & Micromanagement Trap",
        desc: "A pronounced disconnect is present. Your team is functioning in defensive compliance mode to avoid blame, while you are burdened with double-checking every task. This cycle cannot scale and will inevitably trigger key talent churn.",
        iconBg: "bg-red-600 text-white",
      });
    }
  };

  // Calculations
  const teamHesitationMonthly = (teamSize || 0) * (avgSalary || 0) * 0.12;
  const founderTimeMonthly = (founderHours || 0) * 22 * 120;
  const totalAnnualFriction = Math.round((teamHesitationMonthly + founderTimeMonthly) * 12);

  const formattedAnnualCost = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(totalAnnualFriction);

  return (
    <section id="view-audit" className="page-view active">
      <div className="bg-surface-subtle py-16 border-b border-surface-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-600">
            Self-Diagnosis
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-ink-900 mt-2 mb-4">
            The Founder Mirror &amp; Cost Calculator
          </h1>
          <p className="text-base sm:text-lg text-ink-700 max-w-2xl mx-auto">
            Two diagnostic tools: Assess your invisible leadership blind spots in
            60 seconds, and estimate the financial tax of workplace hesitation.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Tool 1: The 60-Second Founder Reality Check */}
        <div className="bg-surface-card rounded-2xl border border-surface-border p-6 sm:p-10 shadow-sm">
          <div className="border-b border-surface-border pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-800">
              Part 1
            </span>
            <h2 className="text-2xl font-serif font-bold text-ink-900 mt-1">
              The 60-Second Founder Reality Check
            </h2>
            <p className="text-sm text-ink-700 mt-1">
              Select the option that best reflects the day-to-day reality in your
              company right now.
            </p>
          </div>

          <form id="audit-form" className="space-y-6" onSubmit={handleAuditSubmit}>
            {/* Question 1 */}
            <div className="p-4 rounded-xl bg-surface-subtle border border-surface-border">
              <label className="block text-sm font-semibold text-ink-900 mb-2">
                1. When a key mistake occurs in customer delivery or product execution:
              </label>
              <div className="space-y-2 text-xs sm:text-sm text-ink-700">
                <label className="flex items-center space-x-3 cursor-pointer p-2 rounded hover:bg-brand-50">
                  <input
                    type="radio"
                    name="q1"
                    value="0"
                    checked={q1 === 0}
                    onChange={() => setQ1(0)}
                    className="text-brand-800 focus:ring-accent-500"
                  />
                  <span>
                    The team surfaces it immediately without fear, offers a
                    solution, and we conduct a blameless post-mortem.
                  </span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer p-2 rounded hover:bg-brand-50">
                  <input
                    type="radio"
                    name="q1"
                    value="1"
                    checked={q1 === 1}
                    onChange={() => setQ1(1)}
                    className="text-brand-800 focus:ring-accent-500"
                  />
                  <span>
                    Mistakes are hidden or sugarcoated until the deadline fails,
                    followed by tension and defensiveness.
                  </span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer p-2 rounded hover:bg-brand-50">
                  <input
                    type="radio"
                    name="q1"
                    value="2"
                    checked={q1 === 2}
                    onChange={() => setQ1(2)}
                    className="text-brand-800 focus:ring-accent-500"
                  />
                  <span>
                    I step in with anger, point out carelessness, and end up
                    personally fixing it to ensure quality.
                  </span>
                </label>
              </div>
            </div>

            {/* Question 2 */}
            <div className="p-4 rounded-xl bg-surface-subtle border border-surface-border">
              <label className="block text-sm font-semibold text-ink-900 mb-2">
                2. How are operational decisions made when you take 3 days off?
              </label>
              <div className="space-y-2 text-xs sm:text-sm text-ink-700">
                <label className="flex items-center space-x-3 cursor-pointer p-2 rounded hover:bg-brand-50">
                  <input
                    type="radio"
                    name="q2"
                    value="0"
                    checked={q2 === 0}
                    onChange={() => setQ2(0)}
                    className="text-brand-800 focus:ring-accent-500"
                  />
                  <span>
                    The team proceeds confidently; work advances smoothly without
                    urgent WhatsApp notifications.
                  </span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer p-2 rounded hover:bg-brand-50">
                  <input
                    type="radio"
                    name="q2"
                    value="1"
                    checked={q2 === 1}
                    onChange={() => setQ2(1)}
                    className="text-brand-800 focus:ring-accent-500"
                  />
                  <span>
                    Things slow down markedly. People wait for my return to
                    approve relatively routine steps.
                  </span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer p-2 rounded hover:bg-brand-50">
                  <input
                    type="radio"
                    name="q2"
                    value="2"
                    checked={q2 === 2}
                    onChange={() => setQ2(2)}
                    className="text-brand-800 focus:ring-accent-500"
                  />
                  <span>
                    Everything halts. I am pinged hourly for approvals because no
                    one wants to be blamed.
                  </span>
                </label>
              </div>
            </div>

            {/* Question 3 */}
            <div className="p-4 rounded-xl bg-surface-subtle border border-surface-border">
              <label className="block text-sm font-semibold text-ink-900 mb-2">
                3. What happens in leadership meetings when you invite open feedback on a project?
              </label>
              <div className="space-y-2 text-xs sm:text-sm text-ink-700">
                <label className="flex items-center space-x-3 cursor-pointer p-2 rounded hover:bg-brand-50">
                  <input
                    type="radio"
                    name="q3"
                    value="0"
                    checked={q3 === 0}
                    onChange={() => setQ3(0)}
                    className="text-brand-800 focus:ring-accent-500"
                  />
                  <span>
                    Passionate debate with junior and senior voices challenging
                    assumptions respectfully.
                  </span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer p-2 rounded hover:bg-brand-50">
                  <input
                    type="radio"
                    name="q3"
                    value="1"
                    checked={q3 === 1}
                    onChange={() => setQ3(1)}
                    className="text-brand-800 focus:ring-accent-500"
                  />
                  <span>
                    Polite nods and silence until I speak, after which everyone
                    simply aligns with my point of view.
                  </span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer p-2 rounded hover:bg-brand-50">
                  <input
                    type="radio"
                    name="q3"
                    value="2"
                    checked={q3 === 2}
                    onChange={() => setQ3(2)}
                    className="text-brand-800 focus:ring-accent-500"
                  />
                  <span>
                    No one speaks up in the room, but whispers and frustration
                    happen in private corridors after the call.
                  </span>
                </label>
              </div>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-brand-800 hover:bg-brand-900 text-white font-semibold px-8 py-3.5 rounded-xl shadow transition-all"
              >
                Analyze My Leadership Climate
              </button>
            </div>
          </form>

          {/* Audit Results Display */}
          {auditResult && (
            <div
              id="audit-result-box"
              className="mt-8 p-6 rounded-xl border border-surface-border bg-surface-subtle"
            >
              <div className="flex items-start space-x-4">
                <div
                  id="audit-icon-container"
                  className={`p-3 rounded-full ${auditResult.iconBg}`}
                >
                  <Info className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3
                    id="audit-result-title"
                    className="text-lg font-serif font-bold text-ink-900"
                  >
                    {auditResult.title}
                  </h3>
                  <p
                    id="audit-result-desc"
                    className="text-sm text-ink-700 mt-1 leading-relaxed"
                  >
                    {auditResult.desc}
                  </p>
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => onNavigate("contact")}
                      className="text-xs uppercase tracking-wider font-bold text-accent-600 hover:text-accent-700 underline"
                    >
                      Discuss this diagnostic confidentially with Sandeep &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tool 2: The Invisible Cost Calculator */}
        <div className="bg-surface-card rounded-2xl border border-surface-border p-6 sm:p-10 shadow-sm">
          <div className="border-b border-surface-border pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-600">
              Part 2
            </span>
            <h2 className="text-2xl font-serif font-bold text-ink-900 mt-1">
              The Invisible Friction Calculator
            </h2>
            <p className="text-sm text-ink-700 mt-1">
              Quantify how delayed approvals, hesitant execution, and founder
              micromanagement impact your operational burn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-700 mb-1">
                  Total Team Members
                </label>
                <input
                  type="number"
                  id="calc-team-size"
                  value={teamSize}
                  min={3}
                  max={250}
                  className="w-full px-4 py-2.5 rounded-lg border border-surface-border focus:outline-none focus:ring-2 focus:ring-accent-500 text-sm"
                  onChange={(e) => setTeamSize(parseFloat(e.target.value) || 0)}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-700 mb-1">
                  Average Monthly Compensation / Person ($)
                </label>
                <input
                  type="number"
                  id="calc-avg-salary"
                  value={avgSalary}
                  min={500}
                  step={500}
                  className="w-full px-4 py-2.5 rounded-lg border border-surface-border focus:outline-none focus:ring-2 focus:ring-accent-500 text-sm"
                  onChange={(e) => setAvgSalary(parseFloat(e.target.value) || 0)}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-700 mb-1">
                  Founder Hours Spent Daily In Operations / Micro-Fixes
                </label>
                <input
                  type="range"
                  id="calc-founder-hours"
                  min={1}
                  max={8}
                  value={founderHours}
                  step={0.5}
                  className="w-full accent-brand-800 cursor-pointer"
                  onChange={(e) => setFounderHours(parseFloat(e.target.value) || 0)}
                />
                <div className="text-right text-xs text-ink-500 font-semibold mt-1">
                  <span id="hours-val">{founderHours}</span> hours/day
                </div>
              </div>
            </div>

            {/* Calculation Output Panel */}
            <div className="bg-brand-900 text-white p-6 rounded-2xl border border-brand-800">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-400">
                Estimated Annual Friction Tax
              </span>
              <div
                className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2 mb-2"
                id="calc-annual-cost"
              >
                {formattedAnnualCost}
              </div>
              <p className="text-xs text-brand-100/80 leading-relaxed mb-4">
                This estimated friction represents lost initiative (hesitation index:
                ~15%), wasted payroll waiting for founder approvals, and value
                squandered while the founder is doing $20/hr tasks instead of $1000/hr
                strategy.
              </p>
              <div className="pt-4 border-t border-brand-800/80 text-xs text-accent-400 font-medium">
                Real leadership behavior converts this silent leakage directly back
                into enterprise value.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

