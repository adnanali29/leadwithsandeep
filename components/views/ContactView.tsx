"use client";

import React, { useState } from "react";
import { Lock, Check } from "lucide-react";
import { playSoftTone } from "@/lib/sound";

export default function ContactView() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    challenge: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSoftTone();
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      challenge: "",
    });
    setSubmitted(false);
  };

  return (
    <section id="view-contact" className="page-view active">
      <div className="bg-surface-subtle py-16 border-b border-surface-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-600">
            No Pitch. No Pressure.
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-ink-900 mt-2 mb-4">
            Start With A Confidential Dialogue
          </h1>
          <p className="text-base sm:text-lg text-ink-700 max-w-2xl mx-auto">
            A focused 30-minute founder conversation. We will look candidly at
            your current organizational friction and see if an inside-out
            partnership makes sense.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-surface-card rounded-2xl border border-surface-border p-8 sm:p-12 shadow-sm">
          {!submitted ? (
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider text-ink-700 mb-1.5"
                    htmlFor="name"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g., Alex Mehta"
                    className="w-full px-4 py-3 rounded-xl border border-surface-border focus:outline-none focus:ring-2 focus:ring-accent-500 text-sm bg-surface-subtle"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider text-ink-700 mb-1.5"
                    htmlFor="email"
                  >
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-surface-border focus:outline-none focus:ring-2 focus:ring-accent-500 text-sm bg-surface-subtle"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider text-ink-700 mb-1.5"
                    htmlFor="company"
                  >
                    Company / Venture Name &amp; Size
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="e.g., NovaTech (25 team members)"
                    className="w-full px-4 py-3 rounded-xl border border-surface-border focus:outline-none focus:ring-2 focus:ring-accent-500 text-sm bg-surface-subtle"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider text-ink-700 mb-1.5"
                    htmlFor="phone"
                  >
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    type="text"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+1 or +91..."
                    className="w-full px-4 py-3 rounded-xl border border-surface-border focus:outline-none focus:ring-2 focus:ring-accent-500 text-sm bg-surface-subtle"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-xs font-bold uppercase tracking-wider text-ink-700 mb-1.5"
                  htmlFor="challenge"
                >
                  What is the central operational or human friction you are facing right now?
                </label>
                <textarea
                  id="challenge"
                  rows={4}
                  value={formData.challenge}
                  onChange={(e) =>
                    setFormData({ ...formData, challenge: e.target.value })
                  }
                  placeholder="e.g., I find myself double-checking everyone's work and my mid-level leads don't seem to take ownership when decisions arise..."
                  className="w-full px-4 py-3 rounded-xl border border-surface-border focus:outline-none focus:ring-2 focus:ring-accent-500 text-sm bg-surface-subtle"
                ></textarea>
              </div>

              <div className="p-4 bg-surface-subtle rounded-xl border border-surface-border text-xs text-ink-700 flex items-start space-x-3">
                <Lock className="w-4 h-4 text-brand-800 mt-0.5 flex-shrink-0" />
                <span>
                  All communications are treated with strict confidentiality.
                  Sandeep works with a select number of founders simultaneously to
                  maintain depth.
                </span>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-brand-800 hover:bg-brand-900 text-white font-semibold py-4 rounded-xl shadow-md hover:shadow-lg transition-all text-sm tracking-wide"
                >
                  Send Message &amp; Request 30-Min Exploratory Call
                </button>
              </div>
            </form>
          ) : (
            <div id="contact-success-state" className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-brand-100 text-brand-900 rounded-full flex items-center justify-center mx-auto mb-2">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-ink-900">
                Thank you for reaching out.
              </h3>
              <p className="text-sm text-ink-700 max-w-md mx-auto leading-relaxed">
                Your message has reached Sandeep directly. He personally reviews
                every note and will respond within 24 hours to schedule an
                introductory exploratory session.
              </p>
              <button
                type="button"
                onClick={resetForm}
                className="mt-4 text-xs font-bold uppercase tracking-wider text-accent-600 underline"
              >
                Submit another note
              </button>
            </div>
          )}
        </div>

        {/* Informal Contact Alternative */}
        <div className="mt-12 text-center text-xs text-ink-500 space-y-2">
          <p>
            Prefer direct email? Write to{" "}
            <strong className="text-ink-900 font-medium">
              connect@leadwithsandeep.com
            </strong>
          </p>
          <p>
            Connect on LinkedIn:{" "}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand-800"
            >
              Sandeep on LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

