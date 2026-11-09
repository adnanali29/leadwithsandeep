"use client";

import React from "react";
import {
  Compass,
  Check,
  AlertCircle,
  Eye,
  Clock,
  UserX,
  Brain,
  ArrowRight,
} from "lucide-react";
import { PageId } from "../Navbar";

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <section id="view-home" className="page-view active">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-gradient-to-b from-brand-50/60 to-surface-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-900 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-8 border border-brand-200">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
            <span>For Early-Stage Founders Ready to Scale Beyond 0 &rarr; 1</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-ink-900 leading-[1.18] tracking-tight mb-8 max-w-4xl mx-auto">
            I help founders see what their team sees — so you lead for{" "}
            <span className="italic font-normal text-accent-600 underline decoration-brand-200 decoration-wavy underline-offset-8">
              real ownership
            </span>
            , not just compliance.
          </h1>

          <p className="text-lg sm:text-xl text-ink-700 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            You&apos;re paying handsome compensation and hiring talented people, yet
            you&apos;re still firefighting every operational detail. You can&apos;t scale
            when you&apos;re doing everyone&apos;s thinking.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate("audit")}
              className="w-full sm:w-auto bg-brand-800 hover:bg-brand-900 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-3"
            >
              <Compass className="w-5 h-5 text-accent-400" />
              <span>Examine The Invisible Gap</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="w-full sm:w-auto bg-surface-subtle hover:bg-brand-100 text-ink-900 font-semibold px-7 py-4 rounded-xl border border-surface-border transition-all duration-200"
            >
              Book an Exploratory Dialogue
            </button>
          </div>

          {/* Grounding Micro-statement */}
          <div className="mt-12 flex items-center justify-center space-x-6 text-xs text-ink-500 font-medium flex-wrap gap-y-2">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-accent-600" /> No corporate jargon
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-accent-600" /> No generic motivation lectures
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-accent-600" /> Inside-out behavioural shift
            </span>
          </div>
        </div>
      </div>

      {/* The Core Dilemma: Side-by-Side Reality Check */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-accent-600">
            The Invisible Disconnect
          </span>
          <h2 className="text-3xl font-serif font-bold text-ink-900 mt-2">
            Why Your Company Stalls After Early Traction
          </h2>
          <p className="text-ink-700 text-base mt-3">
            When you were 5 people, passion bridged every gap. At 20, 50, or 100 people,{" "}
            <strong className="text-ink-900 font-medium">how you are experienced</strong>{" "}
            determines whether people own their outcomes or wait for orders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Column 1: Founder Experience */}
          <div className="bg-surface-card border border-surface-border rounded-2xl p-8 relative flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-surface-border mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-800">
                  What You Experience As Founder
                </span>
                <span className="bg-surface-subtle text-ink-700 text-xs px-2.5 py-1 rounded-md font-medium">
                  The Frustration
                </span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-sm text-ink-700">
                  <div className="p-1 bg-red-100 text-red-600 rounded mt-0.5">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <span>
                    <strong>Complete lack of self-drive:</strong> Decisions wait on
                    your desk even though you hired experienced leaders.
                  </span>
                </li>
                <li className="flex items-start space-x-3 text-sm text-ink-700">
                  <div className="p-1 bg-red-100 text-red-600 rounded mt-0.5">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <span>
                    <strong>Micro-involvement trap:</strong> Despite offering top-tier
                    packages, you find yourself rewriting emails, pitches, and sheets.
                  </span>
                </li>
                <li className="flex items-start space-x-3 text-sm text-ink-700">
                  <div className="p-1 bg-red-100 text-red-600 rounded mt-0.5">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <span>
                    <strong>Zero strategic headspace:</strong> You spend 80% of your
                    calendar firefighting operational glitches rather than future
                    expansion.
                  </span>
                </li>
                <li className="flex items-start space-x-3 text-sm text-ink-700">
                  <div className="p-1 bg-red-100 text-red-600 rounded mt-0.5">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <span>
                    <strong>Silence in group meetings:</strong> You ask for new
                    ideas, and you get respectful nods, followed by deafening
                    compliance.
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-surface-border text-xs text-ink-500 italic">
              Common false diagnosis: &ldquo;I need to hire senior people or run a
              weekend team-building camp.&rdquo;
            </div>
          </div>

          {/* Column 2: Team Experience */}
          <div className="bg-brand-900 text-white rounded-2xl p-8 relative flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-brand-800 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-accent-400">
                  What Your Team Actually Feels
                </span>
                <span className="bg-brand-800 text-brand-200 text-xs px-2.5 py-1 rounded-md font-medium">
                  The Silent Reality
                </span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-sm text-brand-100">
                  <div className="p-1 bg-brand-800 text-accent-400 rounded mt-0.5">
                    <Eye className="w-4 h-4" />
                  </div>
                  <span>
                    <strong>Fear of making mistakes:</strong> If trying something
                    novel risks public criticism or second-guessing, playing it safe is
                    survival.
                  </span>
                </li>
                <li className="flex items-start space-x-3 text-sm text-brand-100">
                  <div className="p-1 bg-brand-800 text-accent-400 rounded mt-0.5">
                    <Eye className="w-4 h-4" />
                  </div>
                  <span>
                    <strong>Psychological withdrawal:</strong> &ldquo;Why bother
                    spending weekend thinking of a strategy when the founder will
                    discard it anyway?&rdquo;
                  </span>
                </li>
                <li className="flex items-start space-x-3 text-sm text-brand-100">
                  <div className="p-1 bg-brand-800 text-accent-400 rounded mt-0.5">
                    <Eye className="w-4 h-4" />
                  </div>
                  <span>
                    <strong>Burnout from unpredictability:</strong> The energy is
                    consumed guessing the founder&apos;s mood rather than serving the
                    customer.
                  </span>
                </li>
                <li className="flex items-start space-x-3 text-sm text-brand-100">
                  <div className="p-1 bg-brand-800 text-accent-400 rounded mt-0.5">
                    <Eye className="w-4 h-4" />
                  </div>
                  <span>
                    <strong>Compliance over ownership:</strong> Doing exactly what was
                    asked to avoid blame, rather than doing what the business needs.
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-brand-800 text-xs text-brand-200/80 italic">
              The invisible gap between founder intent and team impact is where trust drains.
            </div>
          </div>
        </div>

        {/* Sandeep's Root Truth Statement */}
        <div className="mt-12 bg-surface-card border border-surface-border rounded-xl p-8 max-w-4xl mx-auto text-center shadow-sm">
          <p className="text-lg md:text-xl font-serif text-ink-900 leading-relaxed">
            &ldquo;The invisible bond holding the founder and the company together
            isn&apos;t your equity, compensation structure, or OKR software.{" "}
            <strong className="text-accent-600">It is Trust.</strong> When leaders
            double-down on control, people retreat into compliance. You cannot scale a
            venture on compliance.&rdquo;
          </p>
          <div className="mt-4 text-xs tracking-wider uppercase font-semibold text-accent-600">
            — Sandeep | Leadership Architecture
          </div>
        </div>
      </div>

      {/* The Real Story Section: The Managing Director's Confession */}
      <div className="bg-surface-subtle border-y border-surface-border py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="editorial-quote pl-4 sm:pl-8">
            <span className="text-xs uppercase tracking-widest text-accent-600 font-bold block mb-2">
              A Moment of Realization
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ink-900 mb-6">
              &ldquo;I have tried the best Ivy League programs and top coaches. Nothing changed.&rdquo;
            </h3>
            <p className="text-ink-700 text-base leading-relaxed mb-4">
              Years ago, I was sitting across from the Managing Director of a large,
              growing enterprise. He was visibly exhausted. He admitted that over the
              years, his firm had sponsored executive leadership courses, hired renowned
              motivational speakers, and put executives through certifications. Yet
              his managers remained hesitant, friction stayed high, and he was still
              carrying the mental burden of every unit alone.
            </p>
            <p className="text-ink-700 text-base leading-relaxed mb-6">
              That conversation permanently clarified my mission. The problem
              isn&apos;t that founders lack intellect or desire. The problem is that{" "}
              <span className="font-semibold text-ink-900">
                leadership behavior is treated as an academic badge or an external HR
                deliverable
              </span>
              , instead of an intimate, inside-out muscle practiced under real
              operational fire.
            </p>
            <div className="flex items-center space-x-4 pt-4 border-t border-surface-border">
              <div className="w-12 h-12 rounded-full bg-brand-800 flex items-center justify-center text-white font-serif font-bold text-lg">
                SK
              </div>
              <div>
                <h4 className="text-sm font-bold text-ink-900">Sandeep</h4>
                <p className="text-xs text-ink-500">
                  20 Years Corporate Leadership across Hierarchies &amp; Geographies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Cost of Inaction: Financial & Operational */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-800">
            The Balance Sheet Reality
          </span>
          <h2 className="text-3xl font-serif font-bold text-ink-900 mt-2">
            The Hidden Financial Tax of Toxic Friction
          </h2>
          <p className="text-ink-700 text-sm sm:text-base mt-2">
            Most leaders label culture as a &ldquo;soft skill.&rdquo; But the
            downstream consequences manifest as hard financial line items that cripple
            unit economics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-surface-card p-6 rounded-xl border border-surface-border hover:border-accent-500 transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-accent-600 mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-ink-900 text-base mb-2">
              Paralyzed Decision Velocity
            </h4>
            <p className="text-xs text-ink-700 leading-relaxed">
              When mid-tier managers fear mistakes, every strategic call waits for
              founder sign-off. Market opportunities expire while memos bounce
              through bureaucratic loops.
            </p>
          </div>

          <div className="bg-surface-card p-6 rounded-xl border border-surface-border hover:border-accent-500 transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-accent-600 mb-4">
              <UserX className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-ink-900 text-base mb-2">
              High Cost of Talent Churn
            </h4>
            <p className="text-xs text-ink-700 leading-relaxed">
              Replacing a key engineering lead or revenue driver costs 1.5x–2x their
              annual package in recruitment, onboarding downtime, and lost context.
            </p>
          </div>

          <div className="bg-surface-card p-6 rounded-xl border border-surface-border hover:border-accent-500 transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-accent-600 mb-4">
              <Brain className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-ink-900 text-base mb-2">
              Founder Mental Insolvency
            </h4>
            <p className="text-xs text-ink-700 leading-relaxed">
              When you are the bottleneck for every solution, your mental energy for
              capital raising, visionary partnerships, and strategic pivots evaporates.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => onNavigate("audit")}
            className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-800 hover:text-accent-600 transition-colors"
          >
            <span>Calculate what friction might be costing your company</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Founder Quote & CTA Banner */}
      <div className="bg-brand-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
            &ldquo;The only place to start the change is self. Inside out.&rdquo;
          </h3>
          <p className="text-brand-100/80 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
            Not more controls. Not more micromanagement. Not churning people. A 1-on-1
            confidential partnership designed for self-aware founders ready to build
            genuine trust architecture.
          </p>
          <button
            type="button"
            onClick={() => onNavigate("framework")}
            className="bg-accent-600 hover:bg-accent-700 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all shadow-md"
          >
            Explore The ACE Framework
          </button>
        </div>
      </div>
    </section>
  );
}

