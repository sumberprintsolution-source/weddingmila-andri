import React, { useState, useEffect } from 'react';
import { Play, Pause, Music, Volume2, VolumeX } from 'lucide-react';
import { weddingAudio } from '../utils/audioSynth';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Poll audio state
    const interval = setInterval(() => {
      setIsPlaying(weddingAudio.getIsPlaying());
    }, 400);
    return () => clearInterval(interval);
  }, []);

  const handleTogglePlay = () => {
    const active = weddingAudio.toggle();
    setIsPlaying(active);
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isMuted) {
      weddingAudio.setVolume(1);
      setIsMuted(false);
    } else {
      weddingAudio.setVolume(0);
      setIsMuted(true);
    }
  };

  return (
    <div
      className="fixed bottom-24 right-4 sm:bottom-8 sm:right-8 z-40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex items-center">
        {/* Floating Tooltip Label */}
        {isHovered && (
          <div className="absolute right-16 px-3 py-1.5 rounded-lg bg-[#141219]/95 backdrop-blur-md border border-[#d4af37]/40 shadow-xl whitespace-nowrap text-xs text-[#fceeb5] font-cinzel tracking-wider mr-2 hidden sm:flex items-center gap-2">
            <Music className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Bridal Serenade (Harp & Strings)</span>
          </div>
        )}

        {/* Golden Vinyl Disc Button */}
        <button
          onClick={handleTogglePlay}
          aria-label={isPlaying ? 'Jeda Musik' : 'Putar Musik'}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full p-[2px] bg-gold-gradient shadow-[0_4px_25px_rgba(212,175,55,0.45)] hover:shadow-[0_6px_35px_rgba(212,175,55,0.7)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          {/* Inner Dark Vinyl Surface */}
          <div
            className={`w-full h-full rounded-full bg-[#121016] border border-[#d4af37]/40 flex items-center justify-center relative overflow-hidden ${
              isPlaying ? 'animate-slow-spin' : ''
            }`}
          >
            {/* Concentric vinyl grooves */}
            <div className="absolute inset-1.5 rounded-full border border-[#d4af37]/20 pointer-events-none" />
            <div className="absolute inset-3 rounded-full border border-[#d4af37]/25 pointer-events-none" />

            {/* Center Gold Core */}
            <div className="w-4 h-4 rounded-full bg-gold-gradient flex items-center justify-center shadow-inner">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0b0a0e]" />
            </div>
          </div>

          {/* Floating Action Overlay Icon */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/35 rounded-full backdrop-blur-[0.5px]">
            {isPlaying ? (
              <Pause className="w-4 h-4 text-[#fff3b0] drop-shadow-md" />
            ) : (
              <Play className="w-4 h-4 text-[#fff3b0] ml-0.5 drop-shadow-md" />
            )}
          </div>
        </button>

        {/* Small quick mute badge */}
        <button
          onClick={handleToggleMute}
          aria-label={isMuted ? 'Nyalakan Suara' : 'Bisukan Suara'}
          className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#1c1924] border border-[#d4af37]/60 flex items-center justify-center text-[#d4af37] shadow-md hover:bg-[#282434] cursor-pointer"
        >
          {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
        </button>
      </div>
    </div>
  );
};
