import React, { useState } from 'react';
import { Gift, Copy, Check, CreditCard, Send, MapPin, Heart } from 'lucide-react';

export const DigitalGiftSection: React.FC = () => {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const bankAccounts = [
    {
      bank: 'BCA',
      accountNumber: '8830 5219 40',
      holder: 'Raden Arya Wicaksono',
      logoText: 'BCA',
    },
    {
      bank: 'MANDIRI',
      accountNumber: '1370 0192 8412 3',
      holder: 'Putri Kirana Larasati',
      logoText: 'MANDIRI',
    },
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text.replace(/\s+/g, ''));
    setCopiedAccount(id);
    setTimeout(() => {
      setCopiedAccount(null);
    }, 3000);
  };

  return (
    <section id="hadiah" className="relative py-24 px-4 sm:px-6 bg-[#09080c]">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] font-cinzel mb-2">
            <Gift className="w-3.5 h-3.5 text-[#f4d06f]" />
            <span>Tanda Kasih &amp; Doa Restu</span>
            <Gift className="w-3.5 h-3.5 text-[#f4d06f]" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-gold-shimmer">
            Amplop Digital &amp; Kado
          </h2>
          <p className="font-cormorant italic text-base sm:text-lg text-[#ded3be] mt-3">
            Doa restu Anda merupakan karunia terindah bagi kami. Namun jika memberi adalah ungkapan tanda kasih, kami menyediakan fitur amplop digital ini.
          </p>
        </div>

        {/* Bank Account Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {bankAccounts.map((acc, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl bg-gradient-to-br from-[#161320] via-[#110f18] to-[#0a090e] border border-[#d4af37]/35 p-6 sm:p-7 shadow-xl overflow-hidden group hover:border-[#d4af37]/70 transition-all"
            >
              {/* Card Hologram chip decoration */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-11 h-8 rounded-md bg-gold-gradient/70 border border-[#d4af37] shadow-inner relative flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-[#0b0a0e]" />
                </div>
                <span className="font-cinzel text-lg font-bold tracking-widest text-gold-shimmer">
                  {acc.logoText}
                </span>
              </div>

              <div className="mb-6">
                <span className="text-[11px] font-cinzel uppercase tracking-[0.2em] text-[#a69882] block mb-1">
                  Nomor Rekening
                </span>
                <div className="font-mono text-xl sm:text-2xl font-bold text-[#fff7df] tracking-wider">
                  {acc.accountNumber}
                </div>
                <div className="text-xs text-[#cfbfab] font-sans-body mt-1">
                  a.n. <span className="font-semibold text-white">{acc.holder}</span>
                </div>
              </div>

              {/* Copy Button */}
              <button
                onClick={() => handleCopy(acc.accountNumber, acc.bank)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#1d1927] border border-[#d4af37]/40 text-[#f5ebd7] font-cinzel text-xs font-semibold tracking-wider uppercase hover:bg-gold-gradient hover:text-[#0b0a0e] hover:border-transparent transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                {copiedAccount === acc.bank ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Nomor Rekening Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#d4af37]" />
                    <span>Salin Nomor Rekening</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Physical Gift Delivery Card */}
        <div className="bg-[#13111a] rounded-3xl border border-[#d4af37]/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-gradient/10 border border-[#d4af37]/30 flex items-center justify-center text-[#f4d06f] shrink-0 mt-1">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-cinzel text-lg font-bold text-[#fff3b0]">
                Pengiriman Kado Fisik
              </h4>
              <p className="font-sans-body text-xs sm:text-sm text-[#b8a994] leading-relaxed mt-1">
                Kediaman Mempelai: Jl. Senopati Raya No. 42, Kebayoran Baru, Jakarta Selatan 12190
                <br />
                Penerima: Raden Arya &amp; Putri Kirana (0812-9988-7766)
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              handleCopy(
                'Jl. Senopati Raya No. 42, Kebayoran Baru, Jakarta Selatan 12190 (Raden Arya & Putri Kirana)',
                'ALAMAT'
              )
            }
            className="px-5 py-2.5 rounded-xl bg-[#1b1725] border border-[#d4af37]/40 text-[#f5ebd7] font-cinzel text-xs font-semibold tracking-wider hover:bg-[#282236] transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer shrink-0"
          >
            {copiedAccount === 'ALAMAT' ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Alamat Tersalin</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#d4af37]" />
                <span>Salin Alamat</span>
              </>
            )}
          </button>
        </div>

        {/* Sincere Gratitude Signature */}
        <div className="mt-16 text-center">
          <Heart className="w-6 h-6 text-[#d4af37] fill-[#d4af37]/30 mx-auto mb-3" />
          <p className="font-cormorant italic text-lg sm:text-xl text-[#f3e7d3]">
            "Merupakan suatu kehormatan dan kebahagiaan yang tiada terkira bagi kami atas kehadiran dan doa restu Bapak/Ibu/Saudara/i."
          </p>
          <p className="font-cinzel text-xs tracking-[0.3em] text-[#d4af37] uppercase mt-2">
            Kami yang berbahagia,
          </p>
          <div className="font-script text-3xl sm:text-4xl text-gold-shimmer mt-1">
            Arya &amp; Kirana
          </div>
        </div>
      </div>
    </section>
  );
};
