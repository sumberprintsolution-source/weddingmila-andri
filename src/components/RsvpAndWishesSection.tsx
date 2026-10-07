import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquareHeart, Users, Heart, Sparkles } from 'lucide-react';
import { WishMessage } from '../types/wedding';

interface RsvpAndWishesSectionProps {
  onShowerFlowers: () => void;
}

export const RsvpAndWishesSection: React.FC<RsvpAndWishesSectionProps> = ({
  onShowerFlowers,
}) => {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState<'hadir' | 'tidak_hadir' | 'ragu'>('hadir');
  const [guestCount, setGuestCount] = useState('2');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const initialWishes: WishMessage[] = [
    {
      id: '1',
      name: 'Keluarga Besar Soerjodiningrat',
      attendance: 'hadir',
      message:
        'Selamat berbahagia untuk Raden Arya dan Putri Kirana. Semoga Allah senantiasa melimpahkan berkah, kedamaian, dan kebahagiaan sakinah mawaddah warahmah hingga akhir hayat.',
      timestamp: '2 jam lalu',
      giftRoseCount: 5,
    },
    {
      id: '2',
      name: 'Dimas Prasetyo & Istri',
      attendance: 'hadir',
      message:
        'Barakallahu lakuma wa baraka alaikuma wa jamaa bainakuma fii khoir. Selamat menempuh hidup baru sahabat terbaikku, konsep pernikahannya sungguh megah dan memukau!',
      timestamp: '4 jam lalu',
      giftRoseCount: 3,
    },
    {
      id: '3',
      name: 'Anindya Saraswati (Sahabat SMA)',
      attendance: 'hadir',
      message:
        'Cantik sekali Kirana! Selamat ya Arya & Kirana, doa terbaik untuk kalian berdua agar langgeng selalu dalam cinta dan kasih sayang abadi.',
      timestamp: 'Kemarin',
      giftRoseCount: 8,
    },
  ];

  const [wishes, setWishes] = useState<WishMessage[]>(() => {
    try {
      const saved = localStorage.getItem('wedding_wishes_arya_kirana');
      return saved ? JSON.parse(saved) : initialWishes;
    } catch {
      return initialWishes;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('wedding_wishes_arya_kirana', JSON.stringify(wishes));
    } catch {
      // ignore
    }
  }, [wishes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newWish: WishMessage = {
        id: Date.now().toString(),
        name: name.trim(),
        attendance,
        message: message.trim(),
        timestamp: 'Baru saja',
        giftRoseCount: 1,
      };

      setWishes([newWish, ...wishes]);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setMessage('');
      onShowerFlowers();

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 600);
  };

  return (
    <section id="rsvp" className="relative py-24 px-4 sm:px-6 bg-[#0b0a0e]">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] font-cinzel mb-2">
            <MessageSquareHeart className="w-3.5 h-3.5 text-[#f4d06f]" />
            <span>Konfirmasi Kehadiran &amp; Doa Restu</span>
            <MessageSquareHeart className="w-3.5 h-3.5 text-[#f4d06f]" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-gold-shimmer">
            RSVP &amp; Buku Tamu Digital
          </h2>
          <p className="font-cormorant italic text-base sm:text-lg text-[#ded3be] mt-3">
            Kehadiran dan untaian doa tulus dari Anda merupakan anugerah terindah bagi lembaran baru pernikahan kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left RSVP Form */}
          <div className="lg:col-span-5 bg-[#13111a]/95 rounded-3xl border border-[#d4af37]/35 p-6 sm:p-8 shadow-2xl relative">
            <h3 className="font-cinzel text-xl font-bold text-[#fff3b0] mb-1">
              Formulir Konfirmasi
            </h3>
            <p className="font-sans-body text-xs text-[#a69882] mb-6">
              Mohon konfirmasi kehadiran sebelum tanggal 15 Oktober 2026.
            </p>

            {submitSuccess && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-200 text-xs flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Terima kasih! Konfirmasi dan doa restu Anda telah berhasil dikirimkan.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-cinzel tracking-wider uppercase text-[#ebd8b0] mb-1.5">
                  Nama Lengkap Tamu
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Raden Mas Danu & Partner"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1b1725] border border-[#d4af37]/30 text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors font-sans-body"
                />
              </div>

              <div>
                <label className="block text-xs font-cinzel tracking-wider uppercase text-[#ebd8b0] mb-1.5">
                  Konfirmasi Kehadiran
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'hadir', label: 'Pasti Hadir' },
                    { id: 'ragu', label: 'Masih Ragu' },
                    { id: 'tidak_hadir', label: 'Tidak Hadir' },
                  ].map((opt) => (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => setAttendance(opt.id as typeof attendance)}
                      className={`py-2 px-1 text-center rounded-xl text-xs font-cinzel uppercase tracking-wider transition-all cursor-pointer ${
                        attendance === opt.id
                          ? 'bg-gold-gradient text-[#0b0a0e] font-bold shadow-md'
                          : 'bg-[#1b1725] text-[#caa872] border border-[#d4af37]/25 hover:bg-[#262035]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {attendance === 'hadir' && (
                <div>
                  <label className="block text-xs font-cinzel tracking-wider uppercase text-[#ebd8b0] mb-1.5">
                    Jumlah Tamu Hadir
                  </label>
                  <div className="relative">
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1b1725] border border-[#d4af37]/30 text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors font-sans-body cursor-pointer appearance-none"
                    >
                      <option value="1">1 Orang Tamu</option>
                      <option value="2">2 Orang Tamu (Termasuk Pasangan)</option>
                      <option value="3">3 Orang Tamu (Keluarga)</option>
                    </select>
                    <Users className="w-4 h-4 text-[#d4af37] absolute right-4 top-3 pointer-events-none" />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-cinzel tracking-wider uppercase text-[#ebd8b0] mb-1.5">
                  Untaian Doa &amp; Ucapan Selamat
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tuliskan ucapan selamat dan doa tulus untuk kedua mempelai..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1b1725] border border-[#d4af37]/30 text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors font-sans-body resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gold-gradient text-[#0b0a0e] font-cinzel text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_4px_25px_rgba(212,175,55,0.45)] hover:shadow-[0_6px_35px_rgba(212,175,55,0.7)] hover:scale-102 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#0b0a0e]" />
                <span>{isSubmitting ? 'Mengirim Doa...' : 'Kirim RSVP & Doa Restu'}</span>
              </button>
            </form>
          </div>

          {/* Right Live Wishes Wall */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#f4d06f]" />
                <h3 className="font-cinzel text-lg font-bold text-[#fff3b0]">
                  Untaian Doa Tamu ({wishes.length})
                </h3>
              </div>
              <span className="text-xs text-[#a69882] font-sans-body">Terkini &amp; Terverifikasi</span>
            </div>

            {/* Scrollable Wishes Feed */}
            <div className="space-y-4 max-h-[520px] overflow-y-auto pr-2">
              {wishes.map((w) => (
                <div
                  key={w.id}
                  className="bg-[#13111a]/90 rounded-2xl border border-[#d4af37]/25 p-5 shadow-md hover:border-[#d4af37]/50 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gold-gradient/20 border border-[#d4af37]/40 flex items-center justify-center text-xs font-bold text-[#f5d061]">
                        {w.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-cinzel text-sm font-bold text-[#fff7df]">
                          {w.name}
                        </h4>
                        <div className="flex items-center gap-2 text-[10px] text-[#9c8e79]">
                          <span>{w.timestamp}</span>
                          <span>·</span>
                          <span className={w.attendance === 'hadir' ? 'text-emerald-400' : 'text-amber-400'}>
                            {w.attendance === 'hadir' ? 'Akan Hadir' : 'Berhalangan'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-[#d4af37] bg-[#1a1725] px-2.5 py-1 rounded-full border border-[#d4af37]/30">
                      <Heart className="w-3 h-3 fill-[#d4af37]" />
                      <span>{w.giftRoseCount || 1} Mawar</span>
                    </div>
                  </div>

                  <p className="font-sans-body text-xs sm:text-sm text-[#ded1bd] leading-relaxed pl-11">
                    "{w.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
