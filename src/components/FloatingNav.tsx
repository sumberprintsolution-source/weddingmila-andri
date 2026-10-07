import React, { useState, useEffect } from 'react';
import { Home, Users, BookOpen, Calendar, Clock, Image, MessageSquare, Gift } from 'lucide-react';

interface FloatingNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({
  activeSection,
  onNavigate,
}) => {
  const navItems = [
    { id: 'hero', label: 'Beranda', icon: Home },
    { id: 'mempelai', label: 'Mempelai', icon: Users },
    { id: 'katalog', label: 'Katalog', icon: BookOpen },
    { id: 'acara', label: 'Acara', icon: Calendar },
    { id: 'cerita', label: 'Kisah', icon: Clock },
    { id: 'galeri', label: 'Galeri', icon: Image },
    { id: 'rsvp', label: 'RSVP', icon: MessageSquare },
    { id: 'hadiah', label: 'Hadiah', icon: Gift },
  ];

  return (
    <nav
      aria-label="Navigasi Menu Undangan"
      className="fixed bottom-3 inset-x-0 z-40 flex justify-center px-3 pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-full bg-[#14111d]/90 backdrop-blur-xl border border-[#d4af37]/35 shadow-[0_10px_35px_rgba(0,0,0,0.85)] max-w-full overflow-x-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center p-2 sm:px-3 sm:py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-gold-gradient text-[#0b0a0e] font-bold shadow-md scale-105'
                  : 'text-[#d4af37] hover:text-[#fff5cc] hover:bg-white/5'
              }`}
              title={item.label}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="text-[9px] font-cinzel hidden md:inline mt-0.5 tracking-wider">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
