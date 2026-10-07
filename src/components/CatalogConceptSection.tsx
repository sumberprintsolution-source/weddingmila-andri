import React, { useState } from 'react';
import { Sparkles, Palette, Crown, Gift, Flower2, Heart, Award, Layers } from 'lucide-react';
import { GoldenRoseMagnificent } from './GoldenRoseMagnificent';

interface CatalogConceptSectionProps {
  onShowerRosePetals: () => void;
  onOpenVirtualGift: () => void;
}

export const CatalogConceptSection: React.FC<CatalogConceptSectionProps> = ({
  onShowerRosePetals,
  onOpenVirtualGift,
}) => {
  const [activeTab, setActiveTab] = useState<'konsep' | 'busana' | 'flora' | 'souvenir'>('konsep');
  const [roseMode, setRoseMode] = useState<'grand' | 'twirl' | 'glow'>('grand');
  const [roseCount, setRoseCount] = useState(128);

  const handleSendQuickRose = () => {
    setRoseCount((prev) => prev + 1);
    onShowerRosePetals();
  };

  const palettes = [
    { name: 'Imperial Gold', hex: '#D4AF37', meaning: 'Kemuliaan, keagungan janji suci, dan cahaya cinta abadi' },
    { name: 'Midnight Onyx', hex: '#0B0A0E', meaning: 'Keteguhan hati, kedalaman komitmen, dan keanggunan malam' },
    { name: 'Champagne Silk', hex: '#F3E5AB', meaning: 'Ketulusan jiwa, kehangatan keluarga, dan kedamaian' },
    { name: 'Velvet Emerald', hex: '#16382C', meaning: 'Kesuburan, ketenangan, serta harapan masa depan penuh berkah' },
  ];

  return (
    <section id="katalog" className="relative py-24 px-4 sm:px-6 bg-[#0c0a10]">
      {/* Decorative floral aura */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] font-cinzel mb-2">
            <Crown className="w-3.5 h-3.5 text-[#f4d06f]" />
            <span>Katalog Konsep Eksklusif & Konsep Baru</span>
            <Crown className="w-3.5 h-3.5 text-[#f4d06f]" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-gold-shimmer">
            Katalog Pernikahan Emas
          </h2>
          <p className="font-cormorant italic text-base sm:text-lg text-[#ded3be] mt-3">
            Eksplorasi mahakarya konsep pernikahan bertema "Royal Golden Blossom" — perpaduan warisan adiluhung dan modernitas mewah.
          </p>
        </div>

        {/* Feature Spotlight: Interactive Golden Rose Showcase */}
        <div className="mb-16 rounded-3xl bg-gradient-to-b from-[#16131f] to-[#0f0e15] border border-[#d4af37]/35 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#d4af37]/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Rose Viewer */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative p-6 flex items-center justify-center">
                <GoldenRoseMagnificent
                  size={320}
                  isOpening={roseMode === 'twirl'}
                  interactive={true}
                  onRoseClick={handleSendQuickRose}
                />
              </div>

              {/* Mode switch */}
              <div className="flex items-center gap-2 mt-4 bg-[#1b1725] p-1.5 rounded-xl border border-[#d4af37]/30">
                <button
                  onClick={() => setRoseMode('grand')}
                  className={`px-3 py-1 text-xs font-cinzel tracking-wider rounded-lg transition-all ${
                    roseMode === 'grand' ? 'bg-gold-gradient text-[#0b0a0e] font-bold shadow' : 'text-[#d4af37] hover:text-white'
                  }`}
                >
                  Mawar Statis
                </button>
                <button
                  onClick={() => setRoseMode('twirl')}
                  className={`px-3 py-1 text-xs font-cinzel tracking-wider rounded-lg transition-all ${
                    roseMode === 'twirl' ? 'bg-gold-gradient text-[#0b0a0e] font-bold shadow' : 'text-[#d4af37] hover:text-white'
                  }`}
                >
                  Mawar Berputar
                </button>
              </div>
            </div>

            {/* Rose Story & Virtual Blessing Action */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-cinzel uppercase text-[#d4af37] tracking-[0.2em] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Simbol Cinta Abadi · The Golden Rose</span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#fff4d0] mb-3">
                Filosofi Bunga Mawar Emas Kerajaan
              </h3>
              <p className="font-sans-body text-sm text-[#c4b5a0] leading-relaxed mb-6">
                Mawar emas bukan sekadar hiasan, melainkan perlambang kesucian janji suci yang tak lekang oleh waktu. Setiap kelopaknya merefleksikan doa keberkahan, kemakmuran, dan kasih yang senantiasa mekar abadi dalam setiap helaan nafas kehidupan kedua mempelai.
              </p>

              {/* Interactive Rose Counter & Action */}
              <div className="bg-[#121019]/90 border border-[#d4af37]/30 rounded-2xl p-5 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-[#0b0a0e] font-bold shadow-md">
                    <Flower2 className="w-5 h-5 text-[#0b0a0e]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#a69781] font-sans-body">Terkumpul Doa Mawar Digital</div>
                    <div className="font-cinzel text-xl font-bold text-gold-shimmer tabular-nums">
                      {roseCount} Mawar Emas Dihadiahkan
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSendQuickRose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gold-gradient text-[#0b0a0e] font-cinzel text-xs font-bold tracking-wider uppercase shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5 fill-[#0b0a0e]" />
                  <span>Taburkan Mawar Emas</span>
                </button>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#b0a08b]">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#d4af37]" />
                  <span>Katalog Orisinal &amp; Terkurasi</span>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#d4af37]" />
                  <span>Bunga Asli 24K Gold Leaf Accents</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Catalog Navigation Segmented Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {[
            { id: 'konsep', label: '1. Palet Warna & Konsep', icon: Palette },
            { id: 'busana', label: '2. Busana Mahakarya', icon: Crown },
            { id: 'flora', label: '3. Ornamen & Flora Mawar', icon: Flower2 },
            { id: 'souvenir', label: '4. Souvenir & Cenderamata', icon: Gift },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-cinzel text-xs tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gold-gradient text-[#0b0a0e] font-bold shadow-lg scale-102'
                    : 'bg-[#15121e] text-[#d4af37] border border-[#d4af37]/25 hover:bg-[#201c2e]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Palet Warna & Konsep */}
        {activeTab === 'konsep' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {palettes.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#13111b] rounded-2xl border border-[#d4af37]/25 p-5 flex flex-col justify-between hover:border-[#d4af37]/60 transition-all shadow-md group"
              >
                <div>
                  <div
                    className="w-full h-24 rounded-xl mb-4 shadow-inner border border-white/10 transition-transform group-hover:scale-102"
                    style={{ backgroundColor: item.hex }}
                  />
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-cinzel text-base font-bold text-[#fff3b0]">{item.name}</h4>
                    <span className="text-[11px] font-mono text-[#a69882]">{item.hex}</span>
                  </div>
                  <p className="font-sans-body text-xs text-[#b8a994] leading-relaxed mt-2">
                    {item.meaning}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#d4af37]/15 text-[11px] text-[#d4af37] font-cinzel uppercase tracking-wider">
                  Palet Utama Acara
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Busana Mahakarya */}
        {activeTab === 'busana' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#13111b] rounded-2xl border border-[#d4af37]/30 p-6 sm:p-8">
              <div className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-cinzel mb-2">
                Busana Akad Nikah
              </div>
              <h3 className="font-cinzel text-xl font-bold text-[#fff7df] mb-3">
                Bespoke Royal Golden Kebaya &amp; Beskap
              </h3>
              <p className="font-sans-body text-xs sm:text-sm text-[#bfaf9a] leading-relaxed mb-4">
                Didesain khusus oleh couturier kenamaan Nusantara, memadukan benang emas prada murni dengan kain songket palembang antika. Motif floral melambangkan kesucian dan keluhuran budi pekerti pengantin.
              </p>
              <ul className="space-y-2 text-xs font-sans-body text-[#decbb1]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span>Kain: Sutra Organza bertabur kristal Swarovski Emas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span>Detail: Ronce Melati Asli Tali Jiwo &amp; Cunduk Mentul Emas 7 Tingkat</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span>Pria: Beskap Sikepan Beludru Hitam dengan Kancing Emas Antik</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#13111b] rounded-2xl border border-[#d4af37]/30 p-6 sm:p-8">
              <div className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-cinzel mb-2">
                Busana Resepsi Malam
              </div>
              <h3 className="font-cinzel text-xl font-bold text-[#fff7df] mb-3">
                The Imperial Champagne Ballgown &amp; Velvet Tuxedo
              </h3>
              <p className="font-sans-body text-xs sm:text-sm text-[#bfaf9a] leading-relaxed mb-4">
                Gaun megah dengan train sepanjang 3 meter berornamen kelopak mawar emas timbul (3D golden rose embroidery). Dipadukan dengan bespoke tuxedo midnight velvet berkerah emas satin.
              </p>
              <ul className="space-y-2 text-xs font-sans-body text-[#decbb1]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span>Siluet: Royal Ballgown dengan Corset Struktur Tulang Paus</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span>Hiasan: 10,000 butir mutiara air tawar dan sequin emas champagne</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span>Pria: Black Velvet Peak Lapel Tuxedo karya Master Tailor</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 3: Ornamen & Flora Mawar */}
        {activeTab === 'flora' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#13111b] rounded-2xl border border-[#d4af37]/30 p-6">
              <div className="w-12 h-12 rounded-xl bg-gold-gradient/10 border border-[#d4af37]/30 flex items-center justify-center text-[#f4d06f] mb-4">
                <Flower2 className="w-6 h-6" />
              </div>
              <h4 className="font-cinzel text-lg font-bold text-[#fff3b0] mb-2">
                Mawar Emas Abadi (Golden Rose)
              </h4>
              <p className="font-sans-body text-xs text-[#baa993] leading-relaxed">
                Dipajang di pelaminan utama dan centerpiece meja VIP. Bunga mawar yang diawetkan dengan lapisan emas foil 24K sebagai saksi janji suci kedua keluarga besar.
              </p>
            </div>

            <div className="bg-[#13111b] rounded-2xl border border-[#d4af37]/30 p-6">
              <div className="w-12 h-12 rounded-xl bg-gold-gradient/10 border border-[#d4af37]/30 flex items-center justify-center text-[#f4d06f] mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-cinzel text-lg font-bold text-[#fff3b0] mb-2">
                Rangkaian Melati Ratu (Jasminum Sambac)
              </h4>
              <p className="font-sans-body text-xs text-[#baa993] leading-relaxed">
                Ribuan kuncup bunga melati segar menghiasi lorong masuk dan pelaminan, menebarkan aroma wangi semerbak nan syahdu yang membawa aura kesejukan dan ketenangan batin.
              </p>
            </div>

            <div className="bg-[#13111b] rounded-2xl border border-[#d4af37]/30 p-6">
              <div className="w-12 h-12 rounded-xl bg-gold-gradient/10 border border-[#d4af37]/30 flex items-center justify-center text-[#f4d06f] mb-4">
                <Crown className="w-6 h-6" />
              </div>
              <h4 className="font-cinzel text-lg font-bold text-[#fff3b0] mb-2">
                White Peony &amp; Champagne Orchids
              </h4>
              <p className="font-sans-body text-xs text-[#baa993] leading-relaxed">
                Bunga peony putih impor dan anggrek bulan champagne disusun mengalir (cascading florals) di atas chandelier kristal setinggi 5 meter di tengah ballroom.
              </p>
            </div>
          </div>
        )}

        {/* Tab 4: Souvenir & Cenderamata */}
        {activeTab === 'souvenir' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#13111b] rounded-2xl border border-[#d4af37]/30 p-6">
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-[#0b0a0e] font-bold mb-4">
                1
              </div>
              <h4 className="font-cinzel text-lg font-bold text-[#fff3b0] mb-2">
                Signature Eau De Parfum "Golden Rose"
              </h4>
              <p className="font-sans-body text-xs text-[#baa993] leading-relaxed">
                Parfum racikan khusus beraroma Turkish Rose, Amber, dan Warm Vanilla dalam botol kaca berukir inisial A & P dengan tutup bernuansa emas murni.
              </p>
            </div>

            <div className="bg-[#13111b] rounded-2xl border border-[#d4af37]/30 p-6">
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-[#0b0a0e] font-bold mb-4">
                2
              </div>
              <h4 className="font-cinzel text-lg font-bold text-[#fff3b0] mb-2">
                Miniatur Logam Mulia Emas Mini
              </h4>
              <p className="font-sans-body text-xs text-[#baa993] leading-relaxed">
                Kartu logam mulia emas 24 karat bersertifikat resmi sebagai kenang-kenangan bernilai tinggi untuk setiap keluarga dan tamu undangan kehormatan.
              </p>
            </div>

            <div className="bg-[#13111b] rounded-2xl border border-[#d4af37]/30 p-6">
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-[#0b0a0e] font-bold mb-4">
                3
              </div>
              <h4 className="font-cinzel text-lg font-bold text-[#fff3b0] mb-2">
                Custom Leather Pouch Embossed
              </h4>
              <p className="font-sans-body text-xs text-[#baa993] leading-relaxed">
                Pouch kulit premium buatan pengrajin lokal dengan monogram cap foil emas, dikemas dalam kotak velvet berpita satin mewah.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
