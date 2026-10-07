import React, { useState, useEffect } from 'react';
import { GoldenRoseMagnificent } from './GoldenRoseMagnificent';
import { FallingPetalsCanvas } from './FallingPetalsCanvas';
import { Sparkles, MailOpen, Volume2, Heart } from 'lucide-react';
import { weddingAudio } from '../utils/audioSynth';

interface GrandOpeningModalProps {
  isOpen: boolean;
  onOpenInvitation: () => void;
}

export const GrandOpeningModal: React.FC<GrandOpeningModalProps> = ({
  isOpen,
  onOpenInvitation,
}) => {
  const [guestName, setGuestName] = useState('Tamu Undangan Istimewa');
  const [isOpeningTransition, setIsOpeningTransition] = useState(false);
  const [roseSize, setRoseSize] = useState(380);

  useEffect(() => {
    // Check URL parameters for personalized guest name (?to=Bapak+Joko or ?nama=...)
    try {
      const params = new URLSearchParams(window.location.search);
      const to = params.get('to') || params.get('nama') || params.get('u');
      if (to && to.trim()) {
        setGuestName(decodeURIComponent(to.replace(/\+/g, ' ')));
      }
    } catch {
      // fallback
    }

    const updateSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const minDim = Math.min(w, h);
      if (minDim < 500) {
        setRoseSize(Math.min(360, minDim * 0.8));
      } else if (minDim < 900) {
        setRoseSize(Math.min(480, minDim * 0.75));
      } else {
        setRoseSize(Math.min(580, minDim * 0.65));
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleOpenClick = () => {
    setIsOpeningTransition(true);
    // Start romantic music on user gesture
    weddingAudio.play();

    // Cinematic expansion delay
    setTimeout(() => {
      onOpenInvitation();
      setIsOpeningTransition(false);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#09080c] transition-opacity duration-1000 ${
        isOpeningTransition ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Falling Flower Petals Canvas */}
      <FallingPetalsCanvas density="rich" className="pointer-events-none fixed inset-0 z-10" />

      {/* Atmospheric Radial Gold & Vignette Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18)_0%,rgba(16,14,20,0.85)_50%,#060508_100%)] pointer-events-none" />

      {/* Opulent Gold Filigree Border Corners */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-24 h-24 border-t-2 border-l-2 border-[#d4af37]/40 pointer-events-none" />
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-24 h-24 border-t-2 border-r-2 border-[#d4af37]/40 pointer-events-none" />
      <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-24 h-24 border-b-2 border-l-2 border-[#d4af37]/40 pointer-events-none" />
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-24 h-24 border-b-2 border-r-2 border-[#d4af37]/40 pointer-events-none" />

      {/* Central Magnificent Rotating Golden Rose (Almost Full-Screen) */}
      <div
        className={`absolute z-20 flex items-center justify-center transition-all duration-1000 ease-out ${
          isOpeningTransition
            ? 'scale-[2.6] sm:scale-[3.2] rotate-180 opacity-90 filter blur-[1px]'
            : 'scale-100 opacity-95'
        }`}
      >
        <GoldenRoseMagnificent
          size={isOpeningTransition ? roseSize * 1.5 : roseSize}
          isOpening={isOpeningTransition}
          interactive={true}
          onRoseClick={handleOpenClick}
        />
      </div>

      {/* Opening Envelope & Royal Greeting Card Container */}
      <div className="relative z-30 max-w-xl w-full mx-4 px-6 py-8 sm:py-10 text-center flex flex-col items-center justify-between min-h-[92vh] sm:min-h-[85vh] pointer-events-auto">
        {/* Top Header Zone */}
        <div className="w-full flex flex-col items-center pt-2 sm:pt-4">
          <div className="flex items-center gap-2 text-xs tracking-[0.35em] text-[#d4af37] font-cinzel uppercase mb-2">
            <span className="w-8 h-[1px] bg-[#d4af37]/50" />
            <Sparkles className="w-3.5 h-3.5 text-[#f4d06f]" />
            <span>The Wedding Celebration</span>
            <Sparkles className="w-3.5 h-3.5 text-[#f4d06f]" />
            <span className="w-8 h-[1px] bg-[#d4af37]/50" />
          </div>

          <h1 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold tracking-wider text-gold-shimmer drop-shadow-md">
            ARYA & PUTRI
          </h1>
          <p className="font-cormorant italic text-sm sm:text-base text-[#e5d5be] mt-1 tracking-widest">
            Royal Golden Blossom Edition
          </p>
        </div>

        {/* Center Space Reserved for Large Rotating Golden Rose */}
        <div className="my-auto py-8 sm:py-12 pointer-events-none">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#141219]/60 backdrop-blur-md border border-[#d4af37]/30 text-[11px] tracking-widest text-[#f0dfad] uppercase shadow-lg animate-pulse-glow">
            Sentuh Mawar Emas atau Tekan Buka Undangan
          </div>
        </div>

        {/* Bottom Guest Card & Action Button */}
        <div className="w-full max-w-md flex flex-col items-center bg-[#131118]/85 backdrop-blur-xl border border-[#d4af37]/35 rounded-2xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
          <p className="text-xs uppercase tracking-[0.25em] text-[#d4af37]/80 font-cinzel mb-1">
            Kepada Yth. Bapak/Ibu/Saudara/i
          </p>
          <div className="font-cormorant font-semibold text-xl sm:text-2xl text-[#fff7df] tracking-wide my-1 px-4 py-1 border-b border-[#d4af37]/30 w-full text-center truncate">
            {guestName}
          </div>
          <p className="text-[12px] text-[#b8a994] font-sans-body mb-5 mt-1 leading-relaxed">
            Tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir menyaksikan momen sakral pernikahan kami.
          </p>

          {/* Primary Grand Button */}
          <button
            onClick={handleOpenClick}
            disabled={isOpeningTransition}
            className="group relative w-full overflow-hidden rounded-xl bg-gold-gradient p-[1px] shadow-[0_4px_25px_rgba(212,175,55,0.4)] transition-all duration-300 hover:shadow-[0_6px_35px_rgba(212,175,55,0.65)] active:scale-98 cursor-pointer"
          >
            <div className="flex items-center justify-center gap-3 rounded-[11px] bg-[#1a1722]/90 px-6 py-3.5 transition-colors group-hover:bg-[#1a1722]/70">
              <MailOpen className="w-5 h-5 text-[#f4d06f] transition-transform duration-300 group-hover:scale-110" />
              <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#fff8e7] uppercase">
                Buka Undangan & Katalog
              </span>
              <Heart className="w-4 h-4 text-[#d4af37] fill-[#d4af37]/30" />
            </div>
          </button>

          <div className="flex items-center gap-2 mt-3 text-[11px] text-[#9c8e78]">
            <Volume2 className="w-3.5 h-3.5 text-[#d4af37]/80" />
            <span>Disertai alunan musik romantis & taburan bunga</span>
          </div>
        </div>
      </div>
    </div>
  );
};
