import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Sparkles, Heart, Clock, RotateCcw } from 'lucide-react';
import coupleImg from '../assets/images/wedding_couple_portrait_1791339163268.jpg';

interface HeroSectionProps {
  onReopenCover: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onReopenCover,
  onNavigateSection,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: 24 October 2026, 09:00 WIB
    const target = new Date('2026-10-24T09:00:00+07:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Background Opulent Golden Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12)_0%,rgba(16,14,20,0.95)_55%,#09080c_100%)] pointer-events-none" />

      {/* Top Re-open Cover Quick Link */}
      <div className="absolute top-6 right-4 sm:right-8 z-30">
        <button
          onClick={onReopenCover}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#17141f]/80 backdrop-blur-md border border-[#d4af37]/30 text-xs text-[#ebd8ab] font-cinzel hover:bg-[#252033] hover:border-[#d4af37]/60 transition-all cursor-pointer shadow-lg"
          title="Tampilkan kembali opening mawar emas"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="hidden sm:inline">Buka Sampul Mawar Emas</span>
          <span className="sm:hidden">Sampul</span>
        </button>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        {/* Monogram Seal */}
        <div className="mb-6 relative">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#d4af37]/50 p-1 flex items-center justify-center bg-[#131118]/80 shadow-[0_0_30px_rgba(212,175,55,0.25)]">
            <div className="w-full h-full rounded-full border border-[#d4af37]/30 flex flex-col items-center justify-center">
              <span className="font-script text-3xl sm:text-4xl text-[#fff0b3] leading-none pt-1">
                A & P
              </span>
              <span className="text-[9px] tracking-[0.3em] font-cinzel text-[#d4af37] -mt-1">
                ROYAL
              </span>
            </div>
          </div>
          <Sparkles className="w-4 h-4 text-[#f5d061] absolute -top-1 -right-1 animate-pulse" />
        </div>

        {/* Small Tagline */}
        <div className="flex items-center gap-3 text-xs sm:text-sm tracking-[0.35em] text-[#d4af37] font-cinzel uppercase mb-3">
          <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
          <span>The Royal Wedding & Katalog</span>
          <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>

        {/* Main Names */}
        <h1 className="font-cinzel text-3xl sm:text-6xl md:text-7xl font-bold tracking-wider text-gold-shimmer my-2">
          RADEN ARYA & PUTRI KIRANA
        </h1>

        <p className="font-cormorant italic text-lg sm:text-2xl text-[#f3e6cf] max-w-xl mx-auto mt-2 leading-relaxed">
          "Menautkan Dua Hati dalam Keabadian Cinta dan Kemuliaan Janji Suci"
        </p>

        {/* Hero Couple Highlight Card */}
        <div className="relative my-8 sm:my-10 max-w-3xl w-full">
          <div className="relative mx-auto rounded-3xl overflow-hidden border border-[#d4af37]/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.18)] max-h-[480px]">
            <img
              src={coupleImg}
              alt="Raden Arya dan Putri Kirana"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-95 contrast-105 hover:scale-102 transition-transform duration-1000"
            />
            {/* Dark Gold Vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09080c] via-[#09080c]/30 to-transparent" />

            {/* Bottom In-Image Badge */}
            <div className="absolute bottom-6 left-0 right-0 px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-cinzel">
                  Pasangan Mempelai
                </p>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                  Raden Arya & Putri Kirana
                </h3>
              </div>
              <div className="flex items-center gap-3 bg-[#131118]/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#d4af37]/35">
                <Calendar className="w-4 h-4 text-[#f4d06f]" />
                <div className="text-xs font-sans-body">
                  <div className="font-semibold text-[#fff5d6]">24 Oktober 2026</div>
                  <div className="text-[#a89a85]">09.00 - 21.00 WIB</div>
                </div>
              </div>
            </div>
          </div>

          {/* Golden floral embellishment tags */}
          <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#d4af37]" />
          <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#d4af37]" />
          <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[#d4af37]" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#d4af37]" />
        </div>

        {/* Live Countdown Timer */}
        <div className="w-full max-w-2xl bg-[#14111c]/80 backdrop-blur-md border border-[#d4af37]/30 rounded-2xl p-6 sm:p-8 shadow-2xl mb-8">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-cinzel mb-5">
            <Clock className="w-4 h-4" />
            <span>Menghitung Hari Menuju Hari Bahagia</span>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {[
              { label: 'Hari', value: timeLeft.days },
              { label: 'Jam', value: timeLeft.hours },
              { label: 'Menit', value: timeLeft.minutes },
              { label: 'Detik', value: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-[#0e0c14]/90 border border-[#d4af37]/25 shadow-inner"
              >
                <span className="font-cinzel text-2xl sm:text-4xl font-bold text-gold-gradient tabular-nums">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-sans-body uppercase tracking-wider text-[#bfaf9a] mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-5 text-xs text-[#c2b29c] font-cormorant italic">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>The Grand Royal Ballroom, Ritz-Carlton Mega Kuningan, Jakarta</span>
          </div>
        </div>

        {/* Ar-Rum 21 Sacred Verse */}
        <div className="max-w-2xl mx-auto px-6 py-6 border-y border-[#d4af37]/20 my-4 text-center">
          <p className="text-sm sm:text-base text-[#f5ebd7] font-cormorant leading-relaxed italic">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
          </p>
          <p className="text-xs font-cinzel text-[#d4af37] tracking-widest mt-2">
            — Q.S. AR-RUM : 21 —
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <button
            onClick={() => onNavigateSection('katalog')}
            className="px-6 py-3 rounded-xl bg-gold-gradient text-[#0b0a0e] font-cinzel text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_30px_rgba(212,175,55,0.6)] hover:scale-102 transition-all cursor-pointer"
          >
            Lihat Katalog Pernikahan
          </button>
          <button
            onClick={() => onNavigateSection('rsvp')}
            className="px-6 py-3 rounded-xl bg-[#1a1724] border border-[#d4af37]/50 text-[#fff4d0] font-cinzel text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#252033] hover:border-[#d4af37] transition-all cursor-pointer"
          >
            Konfirmasi Kehadiran (RSVP)
          </button>
        </div>
      </div>
    </section>
  );
};
