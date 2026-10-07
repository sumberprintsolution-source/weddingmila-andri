import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import groomImg from '../assets/images/groom_portrait_1791339179045.jpg';
import brideImg from '../assets/images/bride_portrait_1791339193668.jpg';

export const CoupleSection: React.FC = () => {
  return (
    <section id="mempelai" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] font-cinzel mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#f4d06f]" />
            <span>Maha Suci Allah yang Menciptakan Berpasang-pasangan</span>
            <Sparkles className="w-3.5 h-3.5 text-[#f4d06f]" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-gold-shimmer">
            Pasangan Mempelai
          </h2>
          <p className="font-cormorant italic text-base sm:text-lg text-[#ded3be] mt-3">
            Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, kami mengumumkan ikatan suci pernikahan kami.
          </p>
        </div>

        {/* 2-Column Couple Cards with Center Golden Heart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Groom Card */}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden bg-[#121018]/90 border border-[#d4af37]/35 shadow-[0_15px_40px_rgba(0,0,0,0.8)] p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-500 hover:border-[#d4af37]/70">
              {/* Corner Gold Flourish */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#d4af37]/50" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#d4af37]/50" />

              {/* Groom Photo Frame */}
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden mb-6 border-2 border-[#d4af37]/40 shadow-[0_0_25px_rgba(212,175,55,0.2)]">
                <img
                  src={groomImg}
                  alt="Raden Arya Wicaksono"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d13]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-0 right-0 text-center">
                  <span className="font-cinzel text-[11px] tracking-[0.25em] text-[#fbeab2] uppercase bg-[#14121a]/80 px-3 py-1 rounded-full border border-[#d4af37]/30">
                    The Groom
                  </span>
                </div>
              </div>

              {/* Title & Name */}
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#fff7df] tracking-wide">
                Raden Arya Wicaksono
              </h3>
              <p className="font-sans-body text-xs text-[#d4af37] tracking-wider font-medium mt-1">
                S.T., M.B.A.
              </p>

              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-4" />

              <p className="font-sans-body text-xs sm:text-sm text-[#bfaf9c] leading-relaxed max-w-sm">
                Putra Pertama dari:
                <br />
                <span className="font-semibold text-[#f5ebd7]">Bpk. Ir. Bambang Wicaksono</span>
                <br />
                &amp; <span className="font-semibold text-[#f5ebd7]">Ibu Hj. Ratna Kusuma Dewi</span>
              </p>

              <div className="mt-5 flex items-center gap-3">
                <span className="text-xs text-[#d4af37] font-sans-body tracking-wider">
                  @arya.wicaksono
                </span>
              </div>
            </div>
          </div>

          {/* Bride Card */}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden bg-[#121018]/90 border border-[#d4af37]/35 shadow-[0_15px_40px_rgba(0,0,0,0.8)] p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-500 hover:border-[#d4af37]/70">
              {/* Corner Gold Flourish */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#d4af37]/50" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#d4af37]/50" />

              {/* Bride Photo Frame */}
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden mb-6 border-2 border-[#d4af37]/40 shadow-[0_0_25px_rgba(212,175,55,0.2)]">
                <img
                  src={brideImg}
                  alt="Putri Kirana Larasati"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d13]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-0 right-0 text-center">
                  <span className="font-cinzel text-[11px] tracking-[0.25em] text-[#fbeab2] uppercase bg-[#14121a]/80 px-3 py-1 rounded-full border border-[#d4af37]/30">
                    The Bride
                  </span>
                </div>
              </div>

              {/* Title & Name */}
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#fff7df] tracking-wide">
                Putri Kirana Larasati
              </h3>
              <p className="font-sans-body text-xs text-[#d4af37] tracking-wider font-medium mt-1">
                S.Ds., M.A.
              </p>

              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-4" />

              <p className="font-sans-body text-xs sm:text-sm text-[#bfaf9c] leading-relaxed max-w-sm">
                Putri Kedua dari:
                <br />
                <span className="font-semibold text-[#f5ebd7]">Bpk. Prof. Dr. Hendra Gunawan</span>
                <br />
                &amp; <span className="font-semibold text-[#f5ebd7]">Ibu Dra. Siti Rahmawati</span>
              </p>

              <div className="mt-5 flex items-center gap-3">
                <span className="text-xs text-[#d4af37] font-sans-body tracking-wider">
                  @kirana.larasati
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Love Crest Emblem in between */}
        <div className="mt-12 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-[#171420]/80 border border-[#d4af37]/30 shadow-lg">
            <Heart className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
            <span className="font-cormorant italic text-base text-[#f7edd5]">
              "Dua Jiwa, Satu Takdir, Terpaut dalam Keanggunan Abadi"
            </span>
            <Heart className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
          </div>
        </div>
      </div>
    </section>
  );
};
