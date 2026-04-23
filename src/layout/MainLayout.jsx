import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import AnnouncementBar from "../components/AnnouncementBar";

export default function MainLayout() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  return (
    <>
      {showAnnouncement && (
        <AnnouncementBar onClose={() => setShowAnnouncement(false)} />
      )}

      {/* Navbar ko prop pass kiya hai position adjust karne ke liye */}
      <Navbar showAnnouncement={showAnnouncement} />

      <main>
        <Outlet />
      </main>

      <CTA />
      <Footer />
    </>
  );
}