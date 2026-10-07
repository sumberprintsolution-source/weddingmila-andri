/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { GrandOpeningModal } from './components/GrandOpeningModal';
import { FallingPetalsCanvas } from './components/FallingPetalsCanvas';
import { AudioPlayer } from './components/AudioPlayer';
import { HeroSection } from './components/HeroSection';
import { CoupleSection } from './components/CoupleSection';
import { CatalogConceptSection } from './components/CatalogConceptSection';
import { EventScheduleSection } from './components/EventScheduleSection';
import { LoveStorySection } from './components/LoveStorySection';
import { GallerySection } from './components/GallerySection';
import { RsvpAndWishesSection } from './components/RsvpAndWishesSection';
import { DigitalGiftSection } from './components/DigitalGiftSection';
import { FloatingNav } from './components/FloatingNav';
import { VirtualRoseModal } from './components/VirtualRoseModal';
import { Sparkles, Flower2, Heart, RotateCcw } from 'lucide-react';

export default function App() {
  const [isOpeningOpen, setIsOpeningOpen] = useState(true);
  const [isVirtualRoseModalOpen, setIsVirtualRoseModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [extraShowerTrigger, setExtraShowerTrigger] = useState(0);

  // Monitor active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['hero', 'mempelai', 'katalog', 'acara', 'cerita', 'galeri', 'rsvp', 'hadiah'];
      const scrollPos = window.scrollY + 250;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShowerRosePetals = () => {
    setExtraShowerTrigger((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#0b0a0e] text-[#f7f4ed] relative overflow-x-hidden selection:bg-[#d4af37]/30 selection:text-[#fff0b3]">
      {/* 1. Grand Opening Ceremony Modal (Centerpiece with Large Spinning Golden Rose) */}
      <GrandOpeningModal
        isOpen={isOpeningOpen}
        onOpenInvitation={() => setIsOpeningOpen(false)}
      />

      {/* 2. Persistent Falling Flowers & Petals Canvas Engine */}
      <FallingPetalsCanvas
        key={extraShowerTrigger}
        density={isOpeningOpen ? 'subtle' : 'normal'}
        className="pointer-events-none fixed inset-0 z-20 opacity-80"
      />

      {/* 3. Floating Romantic Background Audio Player */}
      <AudioPlayer />

      {/* 4. Top Navigation Bar (Zone 1: Brand Wordmark | Zone 2: Links | Zone 3: Actions) */}
      <header className="sticky top-0 z-30 w-full bg-[#0b0a0e]/85 backdrop-blur-md border-b border-[#d4af37]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Zone 1: Brand Title (Single text element in display face) */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavigateSection('hero');
            }}
            className="font-cinzel text-base sm:text-lg font-bold tracking-widest text-gold-shimmer"
          >
            Arya &amp; Putri
          </a>

          {/* Zone 2: 4-6 Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-cinzel tracking-wider uppercase text-[#cbbba6]">
            <button
              onClick={() => handleNavigateSection('mempelai')}
              className="hover:text-gold-gradient transition-colors cursor-pointer"
            >
              Mempelai
            </button>
            <button
              onClick={() => handleNavigateSection('katalog')}
              className="hover:text-gold-gradient transition-colors cursor-pointer"
            >
              Katalog
            </button>
            <button
              onClick={() => handleNavigateSection('acara')}
              className="hover:text-gold-gradient transition-colors cursor-pointer"
            >
              Acara
            </button>
            <button
              onClick={() => handleNavigateSection('cerita')}
              className="hover:text-gold-gradient transition-colors cursor-pointer"
            >
              Kisah
            </button>
            <button
              onClick={() => handleNavigateSection('galeri')}
              className="hover:text-gold-gradient transition-colors cursor-pointer"
            >
              Galeri
            </button>
            <button
              onClick={() => handleNavigateSection('rsvp')}
              className="hover:text-gold-gradient transition-colors cursor-pointer"
            >
              RSVP
            </button>
          </nav>

          {/* Zone 3: Primary Action & Cover Re-open */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsVirtualRoseModalOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a1724] border border-[#d4af37]/40 text-xs font-cinzel text-[#ecd9af] hover:bg-[#252033] transition-all cursor-pointer"
            >
              <Flower2 className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Kado Mawar</span>
            </button>

            <button
              onClick={() => setIsOpeningOpen(true)}
              className="px-3.5 py-1.5 rounded-lg bg-gold-gradient text-[#0b0a0e] font-cinzel text-xs font-bold tracking-wider uppercase shadow-sm hover:scale-102 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <RotateCcw className="w-3 h-3 text-[#0b0a0e]" />
              <span>Buka Sampul</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection
          onReopenCover={() => setIsOpeningOpen(true)}
          onNavigateSection={handleNavigateSection}
        />

        <CoupleSection />

        <CatalogConceptSection
          onShowerRosePetals={handleShowerRosePetals}
          onOpenVirtualGift={() => setIsVirtualRoseModalOpen(true)}
        />

        <EventScheduleSection />

        <LoveStorySection />

        <GallerySection />

        <RsvpAndWishesSection onShowerFlowers={handleShowerRosePetals} />

        <DigitalGiftSection />
      </main>

      {/* Floating Bottom Nav Dock */}
      <FloatingNav
        activeSection={activeSection}
        onNavigate={handleNavigateSection}
      />

      {/* Virtual Rose Blessing Modal */}
      <VirtualRoseModal
        isOpen={isVirtualRoseModalOpen}
        onClose={() => setIsVirtualRoseModalOpen(false)}
        onSendRoseSuccess={handleShowerRosePetals}
      />

      {/* Royal Footer */}
      <footer className="relative border-t border-[#d4af37]/20 py-12 px-4 sm:px-6 bg-[#08070b] text-center pb-24">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-2 text-xs font-cinzel text-[#d4af37] uppercase tracking-[0.25em] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Royal Golden Wedding</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-gold-shimmer mb-1">
            Raden Arya &amp; Putri Kirana
          </h3>
          <p className="font-cormorant italic text-sm text-[#bcae9b] mb-6">
            Sabtu, 24 Oktober 2026 · The Ritz-Carlton Mega Kuningan, Jakarta
          </p>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent my-2" />

          <p className="text-[11px] text-[#786b59] font-sans-body mt-2">
            © 2026 Arya &amp; Putri. Seluruh Hak Cipta Dilindungi Undang-Undang. Didesain dengan keanggunan mawar emas dan doa tulus.
          </p>
        </div>
      </footer>
    </div>
  );
}
