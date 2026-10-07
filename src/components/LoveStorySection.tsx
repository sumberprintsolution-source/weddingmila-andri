import React from 'react';
import { Sparkles, Heart, Compass, Gem, Sun, Milestone } from 'lucide-react';

export const LoveStorySection: React.FC = () => {
  const milestones = [
    {
      year: '2021',
      title: 'Pertemuan Pertama di Kyoto',
      location: 'Arashiyama Bamboo Grove, Kyoto',
      description:
        'Takdir mempertemukan kami dalam sebuah simposium desain dan arsitektur internasional. Percakapan singkat di bawah rerimbunan bambu menjadi awal dari jutaan cerita yang kami rajut bersama.',
      icon: Compass,
    },
    {
      year: '2023',
      title: 'Menyelaraskan Dua Nilai & Cita',
      location: 'Jakarta & Bandung',
      description:
        'Dua tahun saling mengenal kian memantapkan hati. Kami belajar bahwa cinta sejati bukan hanya tentang saling memandang, melainkan memandang ke arah yang sama dengan doa dan tujuan yang selaras.',
      icon: Sun,
    },
    {
      year: '2025',
      title: 'Lamaran Senja Mawar Emas',
      location: 'Uluwatu Cliff, Bali',
      description:
        'Di bawah langit jingga keemasan pesisir Uluwatu, dengan deburan ombak sebagai saksi, Arya bersimpuh mempersembahkan cincin pusaka dan setangkai mawar emas. Jawaban "Ya" dari Kirana menandai lembaran baru.',
      icon: Gem,
    },
    {
      year: '2026',
      title: 'Ikrar Suci Menuju Keabadian',
      location: 'The Ritz-Carlton Mega Kuningan, Jakarta',
      description:
        'Kini, di hadapan orang tua, keluarga besar, serta para sahabat terkasih, kami mengikat janji suci pernikahan untuk saling menyayangi hingga akhir hayat.',
      icon: Heart,
    },
  ];

  return (
    <section id="cerita" className="relative py-24 px-4 sm:px-6 bg-[#09080c]">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] font-cinzel mb-2">
            <Milestone className="w-3.5 h-3.5 text-[#f4d06f]" />
            <span>Jejak Cinta &amp; Kenangan Manis</span>
            <Milestone className="w-3.5 h-3.5 text-[#f4d06f]" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-gold-shimmer">
            Kisah Kasih Kami
          </h2>
          <p className="font-cormorant italic text-base sm:text-lg text-[#ded3be] mt-3">
            Setiap perjalanan memiliki awal yang indah, namun perjalanan kami adalah tentang keabadian.
          </p>
        </div>

        {/* Vertical Connected Timeline */}
        <div className="relative">
          {/* Center Vertical Gold Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-[#d4af37]/50 to-transparent -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {milestones.map((m, idx) => {
              const Icon = m.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Box */}
                  <div className="w-full md:w-1/2 px-4 sm:px-8">
                    <div className="rounded-3xl bg-[#13111a]/90 border border-[#d4af37]/30 p-6 sm:p-7 shadow-xl hover:border-[#d4af37]/60 transition-all group">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-cinzel text-xl font-bold text-gold-gradient">
                          {m.year}
                        </span>
                        <span className="text-[11px] font-sans-body text-[#d4af37] bg-[#1c1827] px-3 py-1 rounded-full border border-[#d4af37]/30">
                          {m.location}
                        </span>
                      </div>

                      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#fff4d0] mb-2">
                        {m.title}
                      </h3>

                      <p className="font-sans-body text-xs sm:text-sm text-[#bfaf9a] leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Badge */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#171420] border-2 border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.4)] z-20 hidden sm:flex">
                    <Icon className="w-4 h-4 text-[#f4d06f]" />
                  </div>

                  {/* Empty Spacer */}
                  <div className="w-full md:w-1/2 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-cinzel text-[#d4af37] uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dan Kisah Abadi Ini Berlanjut Selamanya</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </section>
  );
};
