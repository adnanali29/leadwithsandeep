"use client";

import React, { useState, useEffect } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar, { PageId } from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeView from "@/components/views/HomeView";
import FrameworkView from "@/components/views/FrameworkView";
import AuditView from "@/components/views/AuditView";
import AboutView from "@/components/views/AboutView";
import ContactView from "@/components/views/ContactView";
import { playSoftTone } from "@/lib/sound";

const VALID_PAGES: PageId[] = [
  "home",
  "framework",
  "audit",
  "about",
  "contact",
];

export default function Page() {
  const [activePage, setActivePage] = useState<PageId>("home");

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "") as PageId;
      if (VALID_PAGES.includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleNavigate = (page: PageId) => {
    playSoftTone();
    setActivePage(page);
    window.history.pushState(null, "", `#${page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBar />
      <Navbar activePage={activePage} onNavigate={handleNavigate} />
      <main className="flex-grow transition-opacity duration-300">
        {activePage === "home" && <HomeView onNavigate={handleNavigate} />}
        {activePage === "framework" && (
          <FrameworkView onNavigate={handleNavigate} />
        )}
        {activePage === "audit" && <AuditView onNavigate={handleNavigate} />}
        {activePage === "about" && <AboutView onNavigate={handleNavigate} />}
        {activePage === "contact" && <ContactView />}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

