# LeadWithSandeep — Next.js Application

A high-fidelity Next.js conversion of the **LeadWithSandeep** executive advisory website.

## Features

- **Framework**: Next.js 15 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS with custom CSS variables matching executive design tokens
- **Dynamic Themes**:
  - `navy-cognac`: Executive Midnight Navy & Warm Cognac / Amber (Default)
  - `charcoal-terracotta`: Minimalist Warm Charcoal & Terracotta
  - `royal-bronze`: Deep Royal Indigo & Gold Bronze
  - Persisted via `localStorage` with real-time palette switcher in the top announcement bar
- **Audio Feedback**: Subtle Web Audio API tone synthesis on navigation, palette switches, and form actions
- **Typography**: Google Fonts (*Playfair Display* & *Plus Jakarta Sans*)
- **Icons**: Lucide React
- **Interactive Tools**:
  - **Founder Mirror Diagnostic**: 60-second quiz assessing leadership safety and blind spots with tailored scoring logic and recommendation cards
  - **Friction Cost Calculator**: Real-time slider and inputs quantifying annual organizational hesitation tax
  - **Confidential Contact Form**: State-managed submission with success notification and reset options

## Project Structure

```
├── app/
│   ├── globals.css          # Theme tokens, custom scrollbars, typography styles
│   ├── layout.tsx           # Root layout with Google Fonts preconnect & ThemeProvider
│   └── page.tsx             # Interactive multi-view container with URL hash sync
├── components/
│   ├── AnnouncementBar.tsx  # Top ribbon with live theme switcher
│   ├── Navbar.tsx           # Responsive navigation header with mobile drawer
│   ├── Footer.tsx           # Executive footer with navigation & core thesis
│   └── views/
│       ├── HomeView.tsx     # The Invisible Gap, founder dilemma & client story
│       ├── FrameworkView.tsx# The ACE Framework (Awareness, Commitment, Evolve)
│       ├── AuditView.tsx    # Founder Mirror quiz & Friction Cost calculator
│       ├── AboutView.tsx    # Sandeep's 20-year corporate background & fit criteria
│       └── ContactView.tsx  # Confidential inquiry form & direct contact channels
├── lib/
│   ├── sound.ts             # Web Audio API sound generator
│   └── theme.tsx            # Theme provider and local storage synchronization
├── tailwind.config.ts       # Tailwind design tokens & font definitions
└── next.config.mjs          # Next.js configuration
```

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

```bash
npm run build
npm start
```

