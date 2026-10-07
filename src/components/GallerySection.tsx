import React, { useState, useEffect } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import coupleImg from '../assets/images/wedding_couple_portrait_1791339163268.jpg';
import groomImg from '../assets/images/groom_portrait_1791339179045.jpg';
import brideImg from '../assets/images/bride_portrait_1791339193668.jpg';
import venueImg from '../assets/images/wedding_ballroom_venue_1791339205920.jpg';

interface GalleryItem {
  id: number;
  title: string;
  category: 'prewedding' | 'sakral' | 'venue' | 'busana';
  image: string;
  caption: string;
}

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'prewedding' | 'sakral' | 'venue' | 'busana'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Royal Golden Couple Embrace',
      category: 'prewedding',
      image: coupleImg,
      caption: 'Potret agung kedua mempelai dalam balutan busana emas dan champagne couture modern.',
    },
    {
      id: 2,
      title: 'The Graceful Bride with Rose Bouquet',
      category: 'sakral',
      image: brideImg,
      caption: 'Keanggunan Putri Kirana mengenakan veil berhias bordir emas dan buket mawar emas abadi.',
    },
    {
      id: 3,
      title: 'The Aristocratic Groom Portrait',
      category: 'busana',
      image: groomImg,
      caption: 'Ketegasan wibawa Raden Arya dalam bespoke velvet tuxedo berornamen lapel prada emas.',
    },
    {
      id: 4,
      title: 'The Grand Ballroom & Floral Chandelier',
      category: 'venue',
      image: venueImg,
      caption: 'Kemegahan venue resepsi di Ritz-Carlton Mega Kuningan bertabur ribuan mawar dan lilin hangat.',
    },
  ];

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev! === 0 ? filteredItems.length - 1 : prev! - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="galeri" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] font-cinzel mb-2">
            <Camera className="w-3.5 h-3.5 text-[#f4d06f]" />
            <span>Dokumentasi Mahakarya</span>
            <Camera className="w-3.5 h-3.5 text-[#f4d06f]" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-gold-shimmer">
            Galeri Mempelai
          </h2>
          <p className="font-cormorant italic text-base sm:text-lg text-[#ded3be] mt-3">
            Merekam setiap detik senyuman, kehangatan pelukan, dan kemegahan busana dalam bingkai kenangan tak terlupakan.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {[
            { id: 'all', label: 'Semua Koleksi' },
            { id: 'prewedding', label: 'Prewedding Emas' },
            { id: 'sakral', label: 'Mempelai Wanita' },
            { id: 'busana', label: 'Mempelai Pria' },
            { id: 'venue', label: 'Grand Ballroom' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as typeof filter)}
              className={`px-4 py-2 rounded-xl text-xs font-cinzel tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-gold-gradient text-[#0b0a0e] font-bold shadow-lg'
                  : 'bg-[#15121e] text-[#d4af37] border border-[#d4af37]/25 hover:bg-[#201c2e]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredItems.map((item, index) => {
            const isWide = item.category === 'prewedding' || item.category === 'venue';
            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className={`relative group rounded-3xl overflow-hidden border border-[#d4af37]/30 bg-[#121018] shadow-xl cursor-pointer transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_15px_40px_rgba(212,175,55,0.25)] ${
                  isWide ? 'lg:col-span-7 h-[360px] sm:h-[420px]' : 'lg:col-span-5 h-[360px] sm:h-[420px]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09080c] via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Content Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-cinzel uppercase tracking-[0.2em] text-[#d4af37] bg-black/60 px-2.5 py-1 rounded-md border border-[#d4af37]/30">
                      {item.category}
                    </span>
                    <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white mt-2">
                      {item.title}
                    </h3>
                    <p className="font-sans-body text-xs text-[#d1c2aa] mt-1 line-clamp-1">
                      {item.caption}
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-gold-gradient/90 text-[#0b0a0e] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#1b1725] border border-[#d4af37]/60 text-[#f5ebd7] flex items-center justify-center hover:bg-[#2e263d] transition-colors cursor-pointer z-50 shadow-lg"
            aria-label="Tutup Galeri"
          >
            <X className="w-6 h-6 text-[#d4af37]" />
          </button>

          {/* Previous button */}
          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev! === 0 ? filteredItems.length - 1 : prev! - 1))
            }
            className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-[#1b1725]/80 border border-[#d4af37]/40 text-[#f5ebd7] flex items-center justify-center hover:bg-[#2e263d] transition-colors cursor-pointer z-50"
            aria-label="Foto Sebelumnya"
          >
            <ChevronLeft className="w-6 h-6 text-[#d4af37]" />
          </button>

          {/* Next button */}
          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev! + 1) % filteredItems.length)
            }
            className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-[#1b1725]/80 border border-[#d4af37]/40 text-[#f5ebd7] flex items-center justify-center hover:bg-[#2e263d] transition-colors cursor-pointer z-50"
            aria-label="Foto Selanjutnya"
          >
            <ChevronRight className="w-6 h-6 text-[#d4af37]" />
          </button>

          {/* Lightbox Media Container */}
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/50 shadow-[0_0_50px_rgba(212,175,55,0.25)]">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="mt-4 text-center max-w-xl">
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-gold-shimmer">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="font-sans-body text-xs sm:text-sm text-[#ded1be] mt-1">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
