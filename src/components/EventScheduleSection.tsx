import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ExternalLink, Sparkles, Shirt, Check } from 'lucide-react';
import venueImg from '../assets/images/wedding_ballroom_venue_1791339205920.jpg';

export const EventScheduleSection: React.FC = () => {
  const [copiedCalendar, setCopiedCalendar] = useState(false);

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Pernikahan Raden Arya & Putri Kirana'
  )}&dates=20261024T010000Z/20261024T150000Z&details=${encodeURIComponent(
    'Pernikahan Kudus dan Resepsi Mewah Raden Arya & Putri Kirana bertempat di The Grand Royal Ballroom, The Ritz-Carlton Jakarta, Mega Kuningan.'
  )}&location=${encodeURIComponent(
    'The Ritz-Carlton Jakarta, Mega Kuningan, Jl. DR. Ide Anak Agung Gde Agung Kav. E.1.1 no. 1, Mega Kuningan, Jakarta Selatan'
  )}`;

  const handleDownloadIcs = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//The Royal Wedding Arya & Putri//ID
BEGIN:VEVENT
SUMMARY:Pernikahan Raden Arya & Putri Kirana
DESCRIPTION:The Royal Wedding Celebration of Raden Arya & Putri Kirana
LOCATION:The Grand Royal Ballroom, The Ritz-Carlton Mega Kuningan, Jakarta
DTSTART:20261024T010000Z
DTEND:20261024T150000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Pernikahan_Arya_Putri.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setCopiedCalendar(true);
    setTimeout(() => setCopiedCalendar(false), 3000);
  };

  return (
    <section id="acara" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] font-cinzel mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#f4d06f]" />
            <span>Waktu &amp; Tempat Bersejarah</span>
            <Sparkles className="w-3.5 h-3.5 text-[#f4d06f]" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-gold-shimmer">
            Agenda Acara Pernikahan
          </h2>
          <p className="font-cormorant italic text-base sm:text-lg text-[#ded3be] mt-3">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
          </p>
        </div>

        {/* 2 Event Cards: Akad Nikah & Resepsi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Akad Nikah */}
          <div className="relative rounded-3xl bg-[#131119]/90 border border-[#d4af37]/35 p-6 sm:p-8 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.7)] group hover:border-[#d4af37]/70 transition-all">
            <div className="absolute top-4 right-4 text-xs font-cinzel text-[#d4af37] bg-[#1d1927] px-3 py-1 rounded-full border border-[#d4af37]/30">
              Momen Sakral
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-gold-gradient flex items-center justify-center text-[#0b0a0e] shadow-md mb-6">
                <Calendar className="w-6 h-6" />
              </div>

              <h3 className="font-cinzel text-2xl font-bold text-[#fff3b0] mb-1">
                Akad Nikah
              </h3>
              <p className="font-sans-body text-xs text-[#d4af37] tracking-wider uppercase mb-5 font-semibold">
                Ijab Qabul &amp; Upacara Panggih Adat
              </p>

              <div className="space-y-4 text-xs sm:text-sm font-sans-body text-[#c5b59f]">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#f4d06f] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Sabtu, 24 Oktober 2026</span>
                    <span className="text-[#9e8f7a]">Bulan Purnama Kesepuluh 1448 H</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#f4d06f] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">08.00 - 10.30 WIB</span>
                    <span className="text-[#9e8f7a]">Diharapkan hadir 15 menit sebelum acara</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#f4d06f] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Diamond Ballroom Room A</span>
                    <span className="text-[#9e8f7a]">The Ritz-Carlton Jakarta, Mega Kuningan</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#d4af37]/20 flex items-center justify-between text-xs text-[#a69882]">
              <span className="font-cinzel uppercase tracking-wider">Khusus Keluarga &amp; Tamu Terpilih</span>
              <span className="text-[#d4af37] font-semibold">Ruang Intim</span>
            </div>
          </div>

          {/* Card 2: Resepsi Pernikahan */}
          <div className="relative rounded-3xl bg-[#131119]/90 border border-[#d4af37]/35 p-6 sm:p-8 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.7)] group hover:border-[#d4af37]/70 transition-all">
            <div className="absolute top-4 right-4 text-xs font-cinzel text-[#d4af37] bg-[#1d1927] px-3 py-1 rounded-full border border-[#d4af37]/30">
              The Grand Gala
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-gold-gradient flex items-center justify-center text-[#0b0a0e] shadow-md mb-6">
                <Sparkles className="w-6 h-6" />
              </div>

              <h3 className="font-cinzel text-2xl font-bold text-[#fff3b0] mb-1">
                Resepsi Pernikahan
              </h3>
              <p className="font-sans-body text-xs text-[#d4af37] tracking-wider uppercase mb-5 font-semibold">
                The Royal Banquet &amp; Celebration
              </p>

              <div className="space-y-4 text-xs sm:text-sm font-sans-body text-[#c5b59f]">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#f4d06f] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Sabtu, 24 Oktober 2026</span>
                    <span className="text-[#9e8f7a]">Malam Perayaan Agung</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#f4d06f] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">19.00 - 22.00 WIB</span>
                    <span className="text-[#9e8f7a]">Dinner Banquet &amp; Live Orchestra</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#f4d06f] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">The Grand Royal Ballroom</span>
                    <span className="text-[#9e8f7a]">The Ritz-Carlton Jakarta, Mega Kuningan</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#d4af37]/20 flex items-center justify-between text-xs text-[#a69882]">
              <span className="font-cinzel uppercase tracking-wider">Perjamuan Makan Malam &amp; Ramah Tamah</span>
              <span className="text-[#d4af37] font-semibold">Semua Tamu</span>
            </div>
          </div>
        </div>

        {/* Ballroom Venue Showcase & Map Section */}
        <div className="rounded-3xl bg-[#121018] border border-[#d4af37]/30 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Venue Image */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[440px]">
              <img
                src={venueImg}
                alt="Grand Ballroom Venue"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d15] via-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#121018]" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-cinzel uppercase tracking-[0.2em] text-[#d4af37] bg-black/70 px-3 py-1 rounded-full border border-[#d4af37]/30 backdrop-blur-sm">
                  Grand Ballroom View
                </span>
                <h4 className="font-cinzel text-xl font-bold text-white mt-2 drop-shadow">
                  The Ritz-Carlton Mega Kuningan
                </h4>
                <p className="font-sans-body text-xs text-[#ded1bd] mt-1">
                  Kapasitas 1,200 Tamu Undangan · Valet Parking Tersedia
                </p>
              </div>
            </div>

            {/* Right Map & Action */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-[#fff4d0] mb-2">
                  Petunjuk Lokasi &amp; Peta Digital
                </h4>
                <p className="font-sans-body text-xs sm:text-sm text-[#b8a892] mb-5 leading-relaxed">
                  Jl. DR. Ide Anak Agung Gde Agung Kav. E.1.1 no. 1, Mega Kuningan, Jakarta Selatan 12950. Akses mudah dari Tol Dalam Kota keluar Kuningan/Semanggi.
                </p>

                {/* Styled Interactive Google Map Embed Frame */}
                <div className="w-full h-52 sm:h-64 rounded-2xl overflow-hidden border border-[#d4af37]/30 relative mb-5 shadow-inner">
                  <iframe
                    title="Peta Lokasi Pernikahan"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2573646736235!2d106.82496737583626!3d-6.229762961005273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3ef423bcad7%3A0x6b4ef8d40234b6b!2sThe%20Ritz-Carlton%20Jakarta%2C%20Mega%20Kuningan!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%)' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Action Buttons: Open Maps & Calendar */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://maps.google.com/?q=The+Ritz-Carlton+Jakarta+Mega+Kuningan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px] flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gold-gradient text-[#0b0a0e] font-cinzel text-xs font-bold tracking-wider uppercase shadow-md hover:scale-102 transition-all"
                >
                  <MapPin className="w-4 h-4 text-[#0b0a0e]" />
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#0b0a0e]" />
                </a>

                <a
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1b1725] border border-[#d4af37]/40 text-[#f5ebd7] font-cinzel text-xs font-semibold tracking-wider hover:bg-[#282236] transition-all"
                >
                  <Calendar className="w-4 h-4 text-[#f4d06f]" />
                  <span>Google Calendar</span>
                </a>

                <button
                  onClick={handleDownloadIcs}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1b1725] border border-[#d4af37]/40 text-[#f5ebd7] font-cinzel text-xs font-semibold tracking-wider hover:bg-[#282236] transition-all cursor-pointer"
                >
                  {copiedCalendar ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Tersimpan .ICS</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 text-[#f4d06f]" />
                      <span>Apple / iCal</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dress Code Section */}
        <div className="mt-12 bg-[#121018]/70 border border-[#d4af37]/25 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold-gradient/10 border border-[#d4af37]/30 flex items-center justify-center text-[#f4d06f] shrink-0">
              <Shirt className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-cinzel text-base font-bold text-[#fff3b0]">
                Dress Code Acara: Royal Gold &amp; Formal Elegance
              </h5>
              <p className="font-sans-body text-xs text-[#b8a994] mt-0.5">
                Pria: Formal Suit / Batik Tulis Sutra Lengan Panjang · Wanita: Gaun Malam / Kebaya Modern Bernuansa Gold, Champagne, atau Black Onyx.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1e1a29] border border-[#d4af37]/30 text-xs text-[#f5ebd7]">
              <span className="w-3 h-3 rounded-full bg-[#D4AF37]" />
              <span>Royal Gold</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1e1a29] border border-[#d4af37]/30 text-xs text-[#f5ebd7]">
              <span className="w-3 h-3 rounded-full bg-[#F3E5AB]" />
              <span>Champagne</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1e1a29] border border-[#d4af37]/30 text-xs text-[#f5ebd7]">
              <span className="w-3 h-3 rounded-full bg-[#1A1822]" />
              <span>Onyx Black</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
