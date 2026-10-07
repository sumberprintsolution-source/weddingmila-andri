import React, { useState } from 'react';
import { X, Heart, Sparkles, Flower2 } from 'lucide-react';
import { GoldenRoseMagnificent } from './GoldenRoseMagnificent';

interface VirtualRoseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSendRoseSuccess: (count: number) => void;
}

export const VirtualRoseModal: React.FC<VirtualRoseModalProps> = ({
  isOpen,
  onClose,
  onSendRoseSuccess,
}) => {
  const [selectedAmount, setSelectedAmount] = useState(5);
  const [senderName, setSenderName] = useState('');
  const [shortNote, setShortNote] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    onSendRoseSuccess(selectedAmount);

    setTimeout(() => {
      setIsSent(false);
      onClose();
    }, 2200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
    >
      <div className="relative w-full max-w-lg bg-[#14121b] border border-[#d4af37]/45 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#1e1a27] text-[#d4af37] flex items-center justify-center hover:bg-[#2d273a] transition-colors cursor-pointer"
          aria-label="Tutup Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSent ? (
          <div className="py-10 text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-gold-gradient flex items-center justify-center shadow-xl mb-4 animate-bounce">
              <Flower2 className="w-10 h-10 text-[#0b0a0e]" />
            </div>
            <h3 className="font-cinzel text-2xl font-bold text-gold-shimmer mb-2">
              Mawar Emas Terkirim!
            </h3>
            <p className="font-sans-body text-xs sm:text-sm text-[#ded1be] max-w-sm">
              Terima kasih atas persembahan {selectedAmount} tangkai mawar emas dan doa indahnya untuk Arya &amp; Kirana.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSend} className="flex flex-col items-center text-center">
            {/* Center Rose Preview */}
            <div className="w-28 h-28 my-1 flex items-center justify-center">
              <GoldenRoseMagnificent size={110} isOpening={false} interactive={false} />
            </div>

            <div className="flex items-center gap-2 text-xs font-cinzel uppercase tracking-[0.2em] text-[#d4af37] mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#f4d06f]" />
              <span>Hadiah Virtual Eksklusif</span>
            </div>

            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#fff4d0] mb-2">
              Kirim Persembahan Mawar Emas
            </h3>
            <p className="font-sans-body text-xs text-[#b8a892] mb-5">
              Pilih jumlah tangkai mawar emas yang ingin Anda sematkan untuk menghiasi pelaminan digital kedua mempelai.
            </p>

            {/* Amount Selection */}
            <div className="grid grid-cols-3 gap-3 w-full mb-5">
              {[
                { count: 1, label: '1 Mawar', desc: 'Doa Tulus' },
                { count: 5, label: '5 Mawar', desc: 'Cinta Abadi' },
                { count: 12, label: '12 Mawar', desc: 'Kemuliaan' },
              ].map((item) => (
                <button
                  type="button"
                  key={item.count}
                  onClick={() => setSelectedAmount(item.count)}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    selectedAmount === item.count
                      ? 'bg-gold-gradient text-[#0b0a0e] border-transparent font-bold shadow-lg scale-102'
                      : 'bg-[#1b1725] text-[#ebd8b0] border-[#d4af37]/30 hover:bg-[#252033]'
                  }`}
                >
                  <div className="font-cinzel text-sm">{item.label}</div>
                  <div className="text-[10px] opacity-80 font-sans-body">{item.desc}</div>
                </button>
              ))}
            </div>

            <div className="w-full space-y-3 mb-6 text-left">
              <div>
                <label className="block text-[11px] font-cinzel text-[#d4af37] uppercase mb-1">
                  Nama Anda
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nama Pengirim"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-[#1b1725] border border-[#d4af37]/30 text-white text-xs focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-cinzel text-[#d4af37] uppercase mb-1">
                  Pesan Singkat
                </label>
                <input
                  type="text"
                  placeholder="Semoga senantiasa berbahagia..."
                  value={shortNote}
                  onChange={(e) => setShortNote(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-[#1b1725] border border-[#d4af37]/30 text-white text-xs focus:outline-none focus:border-[#d4af37]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gold-gradient text-[#0b0a0e] font-cinzel text-xs font-bold tracking-wider uppercase shadow-lg hover:scale-102 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-[#0b0a0e]" />
              <span>Persembahkan {selectedAmount} Mawar Emas</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
