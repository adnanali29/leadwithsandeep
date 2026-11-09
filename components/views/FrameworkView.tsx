"use client";

import React from "react";
import {
  Crosshair,
  Radio,
  Shield,
  FileCheck,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import { PageId } from "../Navbar";

interface FrameworkViewProps {
  onNavigate: (page: PageId) => void;
}

export default function FrameworkView({ onNavigate }: FrameworkViewProps) {
  return (
    <section id="view-framework" className="page-view active">
      <div className="bg-surface-subtle py-16 border-b border-surface-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-600">
            The Trust-Architecture Model
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-ink-900 mt-2 mb-4">
            The ACE Framework
          </h1>
          <p className="text-base sm:text-lg text-ink-700 max-w-2xl mx-auto">
            Leadership is not an intellectual concept. It is an ongoing behavioral
            muscle. The ACE Framework structures your evolution from a reactive
            operator into a trusted human architect.
          </p>
        </div>
      </div>

      {/* Detailed 3 Stages Breakdown */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Stage 1: Awareness */}
          <div className="bg-surface-card rounded-2xl border border-surface-border p-8 md:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-full -z-0"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/4">
                <div className="w-14 h-14 rounded-2xl bg-brand-800 text-white flex items-center justify-center font-serif text-2xl font-bold mb-4 shadow">
                  01
                </div>
                <span className="text-xs uppercase font-bold tracking-widest text-accent-600 block">
                  Phase One
                </span>
                <h3 className="text-2xl font-serif font-bold text-ink-900 mt-1">
                  Awareness
                </h3>
                <p className="text-xs text-ink-500 mt-1">Seeing What Your Team Sees</p>
              </div>
              <div className="md:w-3/4 space-y-4">
                <p className="text-sm sm:text-base text-ink-700 leading-relaxed">
                  Most founders assume their team shares their exact context,
                  passion, and risk appetite. In Phase 1, we conduct an honest,
                  non-judgmental audit of how your everyday reactions, non-verbal
                  cues, and feedback style are received on the ground.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-surface-subtle p-4 rounded-xl border border-surface-border">
                    <h5 className="font-bold text-xs uppercase tracking-wide text-ink-900 mb-1 flex items-center gap-2">
                      <Crosshair className="w-4 h-4 text-accent-600" /> The Mirror Audit
                    </h5>
                    <p className="text-xs text-ink-700">
                      Uncovering blind spots: Where is your anxiety or urgency
                      translating into team paralysis or micromanagement?
                    </p>
                  </div>
                  <div className="bg-surface-subtle p-4 rounded-xl border border-surface-border">
                    <h5 className="font-bold text-xs uppercase tracking-wide text-ink-900 mb-1 flex items-center gap-2">
                      <Radio className="w-4 h-4 text-accent-600" /> Environmental Diagnosis
                    </h5>
                    <p className="text-xs text-ink-700">
                      Evaluating psychological safety, meetings dynamics, and silent
                      bottlenecks across your key direct reports.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 2: Commitment */}
          <div className="bg-surface-card rounded-2xl border border-surface-border p-8 md:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-100 rounded-bl-full -z-0"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/4">
                <div className="w-14 h-14 rounded-2xl bg-accent-600 text-white flex items-center justify-center font-serif text-2xl font-bold mb-4 shadow">
                  02
                </div>
                <span className="text-xs uppercase font-bold tracking-widest text-accent-600 block">
                  Phase Two
                </span>
                <h3 className="text-2xl font-serif font-bold text-ink-900 mt-1">
                  Commitment
                </h3>
                <p className="text-xs text-ink-500 mt-1">
                  The Courage to Shift Self-Behavior
                </p>
              </div>
              <div className="md:w-3/4 space-y-4">
                <p className="text-sm sm:text-base text-ink-700 leading-relaxed">
                  Awareness without ownership is just academic guilt. It is
                  tempting to believe that &ldquo;more control&rdquo; worked from 0 to 1,
                  so it must work from 1 to 10. In this phase, we establish clear
                  founder commitments to let go of counterfeit controls and build
                  mutual trust.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-surface-subtle p-4 rounded-xl border border-surface-border">
                    <h5 className="font-bold text-xs uppercase tracking-wide text-ink-900 mb-1 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-brand-800" /> Relinquishing Illusion of Control
                    </h5>
                    <p className="text-xs text-ink-700">
                      Recognizing that closer monitoring produces compliance;
                      deliberate trust builds true accountability and self-drive.
                    </p>
                  </div>
                  <div className="bg-surface-subtle p-4 rounded-xl border border-surface-border">
                    <h5 className="font-bold text-xs uppercase tracking-wide text-ink-900 mb-1 flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-brand-800" /> The Trust Contract
                    </h5>
                    <p className="text-xs text-ink-700">
                      Establishing personal leadership boundaries, delegation rules,
                      and communication charters with key teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 3: Evolve */}
          <div className="bg-surface-card rounded-2xl border border-surface-border p-8 md:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-surface-subtle rounded-bl-full -z-0"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/4">
                <div className="w-14 h-14 rounded-2xl bg-ink-900 text-white flex items-center justify-center font-serif text-2xl font-bold mb-4 shadow">
                  03
                </div>
                <span className="text-xs uppercase font-bold tracking-widest text-ink-500 block">
                  Phase Three
                </span>
                <h3 className="text-2xl font-serif font-bold text-ink-900 mt-1">
                  Evolve
                </h3>
                <p className="text-xs text-ink-500 mt-1">
                  Practicing in Real Work Scenarios
                </p>
              </div>
              <div className="md:w-3/4 space-y-4">
                <p className="text-sm sm:text-base text-ink-700 leading-relaxed">
                  Leadership behavior is like going to the gym. It takes steady,
                  repetitive practice under tension. We conduct real-time debriefs
                  around critical conversations: difficult feedback sessions,
                  quarterly reviews, handling mistakes without rage, and
                  celebrating autonomy.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-surface-subtle p-4 rounded-xl border border-surface-border">
                    <h5 className="font-bold text-xs uppercase tracking-wide text-ink-900 mb-1 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-accent-600" /> Difficult Conversations Lab
                    </h5>
                    <p className="text-xs text-ink-700">
                      Preparing and deconstructing critical meetings, performance
                      corrections, and conflict without toxicity.
                    </p>
                  </div>
                  <div className="bg-surface-subtle p-4 rounded-xl border border-surface-border">
                    <h5 className="font-bold text-xs uppercase tracking-wide text-ink-900 mb-1 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-accent-600" /> Followership Alignment
                    </h5>
                    <p className="text-xs text-ink-700">
                      Observing how the team&apos;s attitude and competence evolve
                      when safe, high-expectation leadership is established.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Engagement Format Box */}
        <div className="mt-16 bg-brand-50 border border-brand-200 rounded-2xl p-8 sm:p-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-widest text-brand-800 font-bold">
                Structure &amp; Format
              </span>
              <h3 className="text-2xl font-serif font-bold text-ink-900 mt-1">
                How We Work Together
              </h3>
              <p className="text-xs sm:text-sm text-ink-700 mt-2">
                A high-touch, strictly confidential 1:1 advisory engagement tailored
                directly to your current scaling stage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-surface-card p-5 rounded-xl border border-surface-border shadow-sm">
                <div className="text-accent-600 font-serif font-bold text-2xl mb-1">
                  Bi-Weekly
                </div>
                <div className="text-xs font-bold text-ink-900 uppercase tracking-wider mb-2">
                  1:1 Deep Dives
                </div>
                <p className="text-xs text-ink-700">
                  60-minute candid working sessions analyzing live founder
                  scenarios, real team dynamics, and decision forks.
                </p>
              </div>
              <div className="bg-surface-card p-5 rounded-xl border border-surface-border shadow-sm">
                <div className="text-accent-600 font-serif font-bold text-2xl mb-1">
                  On-Demand
                </div>
                <div className="text-xs font-bold text-ink-900 uppercase tracking-wider mb-2">
                  Critical Support
                </div>
                <p className="text-xs text-ink-700">
                  Direct access via secure channel for tense moments before critical
                  executive meetings or conflict resolutions.
                </p>
              </div>
              <div className="bg-surface-card p-5 rounded-xl border border-surface-border shadow-sm">
                <div className="text-accent-600 font-serif font-bold text-2xl mb-1">
                  Inside Out
                </div>
                <div className="text-xs font-bold text-ink-900 uppercase tracking-wider mb-2">
                  No Gimmicks
                </div>
                <p className="text-xs text-ink-700">
                  No standard slide decks or generic questionnaires. Everything is
                  tailored to your real organization.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => onNavigate("contact")}
                className="bg-brand-800 hover:bg-brand-900 text-white font-semibold px-8 py-3.5 rounded-xl shadow transition-all"
              >
                Check Availability For A Partnership
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

