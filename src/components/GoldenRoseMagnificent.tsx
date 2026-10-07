import React from 'react';

interface GoldenRoseMagnificentProps {
  className?: string;
  size?: number | string;
  isOpening?: boolean;
  interactive?: boolean;
  onRoseClick?: () => void;
}

export const GoldenRoseMagnificent: React.FC<GoldenRoseMagnificentProps> = ({
  className = '',
  size = 460,
  isOpening = false,
  interactive = false,
  onRoseClick,
}) => {
  return (
    <div
      onClick={onRoseClick}
      className={`relative flex items-center justify-center select-none ${
        interactive ? 'cursor-pointer group' : ''
      } ${className}`}
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        perspective: '1000px',
      }}
    >
      {/* Radiant Golden Glow Aura */}
      <div
        className={`absolute inset-0 rounded-full blur-2xl pointer-events-none transition-all duration-1000 ${
          isOpening
            ? 'scale-150 bg-gradient-to-tr from-[#d4af37]/60 via-[#fff0a8]/80 to-[#aa771c]/50 opacity-100'
            : 'scale-95 bg-gradient-to-tr from-[#d4af37]/25 via-[#f9e79f]/30 to-[#8a5d14]/20 opacity-80 animate-pulse-glow'
        }`}
      />

      {/* Rotating Ring of Golden Light Particles & Filigree Runes */}
      <div
        className={`absolute inset-[-12%] pointer-events-none transition-transform duration-1000 ${
          isOpening ? 'animate-slow-spin scale-125' : 'animate-reverse-spin'
        }`}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full opacity-60">
          <circle
            cx="200"
            cy="200"
            r="185"
            fill="none"
            stroke="url(#goldRingGrad)"
            strokeWidth="1.2"
            strokeDasharray="4 8"
          />
          <circle
            cx="200"
            cy="200"
            r="170"
            fill="none"
            stroke="url(#goldRingGrad2)"
            strokeWidth="0.8"
            strokeDasharray="2 12"
          />
          {/* Subtle star diamond ornaments around ring */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <g key={deg} transform={`rotate(${deg} 200 200)`}>
              <polygon
                points="200,10 203,15 208,15 204,19 206,24 200,21 194,24 196,19 192,15 197,15"
                fill="#FEE140"
                opacity="0.8"
              />
            </g>
          ))}
          <defs>
            <linearGradient id="goldRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF3B0" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#996515" />
            </linearGradient>
            <linearGradient id="goldRingGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F9E79F" />
              <stop offset="100%" stopColor="#AA771C" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* The Masterpiece Golden Rose SVG */}
      <div
        className={`relative w-full h-full transition-transform ease-out ${
          isOpening
            ? 'animate-slow-spin scale-110 drop-shadow-[0_0_50px_rgba(255,230,120,0.8)]'
            : 'animate-slow-spin drop-shadow-[0_15px_35px_rgba(212,175,55,0.4)] group-hover:scale-105'
        }`}
        style={{
          animationDuration: isOpening ? '8s' : '40s',
          transformStyle: 'preserve-3d',
        }}
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Rich multi-tone metallic gold shaders */}
            <radialGradient id="goldCore" cx="50%" cy="50%" r="50%" fx="42%" fy="40%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="25%" stopColor="#FFF2B2" />
              <stop offset="50%" stopColor="#F5D061" />
              <stop offset="78%" stopColor="#C99726" />
              <stop offset="100%" stopColor="#7E540C" />
            </radialGradient>

            <linearGradient id="goldShine1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF9E0" />
              <stop offset="30%" stopColor="#FBD769" />
              <stop offset="65%" stopColor="#CB9B27" />
              <stop offset="100%" stopColor="#8C5C0F" />
            </linearGradient>

            <linearGradient id="goldShine2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF5CC" />
              <stop offset="40%" stopColor="#E5B942" />
              <stop offset="75%" stopColor="#B3821C" />
              <stop offset="100%" stopColor="#6C4508" />
            </linearGradient>

            <linearGradient id="goldDarkEdge" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5E3904" />
              <stop offset="40%" stopColor="#9B6C16" />
              <stop offset="80%" stopColor="#F0C755" />
              <stop offset="100%" stopColor="#FFF4D0" />
            </linearGradient>

            <linearGradient id="goldFoilRim" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#E8BF4C" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#916110" stopOpacity="0.6" />
            </linearGradient>

            <filter id="goldGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Group 1: Background Golden Calyx & Leaves */}
          <g id="calyxLeaves" opacity="0.85">
            {/* Calyx Leaf 1 (Top-Left) */}
            <path
              d="M 250 250 C 180 180 100 130 90 70 C 140 100 200 160 250 250 Z"
              fill="url(#goldDarkEdge)"
              stroke="#FFF2B2"
              strokeWidth="0.8"
            />
            {/* Calyx Leaf 2 (Top-Right) */}
            <path
              d="M 250 250 C 320 180 400 130 410 70 C 360 100 300 160 250 250 Z"
              fill="url(#goldShine2)"
              stroke="#FFF2B2"
              strokeWidth="0.8"
            />
            {/* Calyx Leaf 3 (Bottom-Left) */}
            <path
              d="M 250 250 C 170 310 90 370 70 420 C 120 390 190 330 250 250 Z"
              fill="url(#goldShine1)"
              stroke="#FFEAA0"
              strokeWidth="0.8"
            />
            {/* Calyx Leaf 4 (Bottom-Right) */}
            <path
              d="M 250 250 C 330 310 410 370 430 420 C 380 390 310 330 250 250 Z"
              fill="url(#goldDarkEdge)"
              stroke="#FFEAA0"
              strokeWidth="0.8"
            />
          </g>

          {/* Group 2: Outermost Layer Majestic Blooming Petals */}
          <g id="outerPetals">
            {/* Outer Petal Top */}
            <path
              d="M 160 180 C 130 90 220 30 290 35 C 360 40 400 120 340 190 C 300 150 200 140 160 180 Z"
              fill="url(#goldShine1)"
              stroke="url(#goldFoilRim)"
              strokeWidth="1.5"
            />
            {/* Outer Petal Top-Right */}
            <path
              d="M 310 160 C 400 120 470 180 470 255 C 470 330 390 380 330 330 C 370 280 360 190 310 160 Z"
              fill="url(#goldShine2)"
              stroke="url(#goldFoilRim)"
              strokeWidth="1.5"
            />
            {/* Outer Petal Bottom-Right */}
            <path
              d="M 320 310 C 380 390 320 465 245 470 C 170 475 125 410 175 345 C 220 380 290 365 320 310 Z"
              fill="url(#goldShine1)"
              stroke="url(#goldFoilRim)"
              strokeWidth="1.5"
            />
            {/* Outer Petal Bottom-Left */}
            <path
              d="M 180 340 C 100 375 35 315 35 240 C 35 165 110 125 170 175 C 120 225 130 310 180 340 Z"
              fill="url(#goldDarkEdge)"
              stroke="url(#goldFoilRim)"
              strokeWidth="1.5"
            />
          </g>

          {/* Group 3: Mid-Outer Layer Petals */}
          <g id="midOuterPetals">
            {/* Petal 5 */}
            <path
              d="M 175 190 C 150 130 230 80 310 95 C 380 110 390 190 335 230 C 295 180 215 170 175 190 Z"
              fill="url(#goldShine2)"
              stroke="#FFF9E0"
              strokeWidth="1.2"
            />
            {/* Petal 6 */}
            <path
              d="M 315 205 C 390 180 435 245 420 315 C 405 380 320 395 285 345 C 345 325 355 240 315 205 Z"
              fill="url(#goldDarkEdge)"
              stroke="#FFF9E0"
              strokeWidth="1.2"
            />
            {/* Petal 7 */}
            <path
              d="M 290 330 C 335 390 270 440 195 435 C 130 430 115 355 165 310 C 185 365 260 365 290 330 Z"
              fill="url(#goldShine1)"
              stroke="#FFF9E0"
              strokeWidth="1.2"
            />
            {/* Petal 8 */}
            <path
              d="M 160 300 C 105 290 85 210 115 155 C 145 105 220 125 210 185 C 155 175 135 255 160 300 Z"
              fill="url(#goldShine2)"
              stroke="#FFF9E0"
              strokeWidth="1.2"
            />
          </g>

          {/* Group 4: Middle Petal Bloom */}
          <g id="midPetals">
            <path
              d="M 195 205 C 175 150 250 120 305 135 C 360 150 365 220 310 245 C 275 200 220 195 195 205 Z"
              fill="url(#goldShine1)"
              stroke="#FFEAA0"
              strokeWidth="1.4"
            />
            <path
              d="M 300 220 C 365 210 390 270 365 325 C 335 375 265 365 245 325 C 295 320 320 255 300 220 Z"
              fill="url(#goldDarkEdge)"
              stroke="#FFEAA0"
              strokeWidth="1.4"
            />
            <path
              d="M 255 325 C 285 375 220 400 170 380 C 130 360 135 300 180 275 C 175 325 230 335 255 325 Z"
              fill="url(#goldShine2)"
              stroke="#FFEAA0"
              strokeWidth="1.4"
            />
            <path
              d="M 180 270 C 140 255 135 185 170 155 C 210 125 255 150 235 200 C 190 195 165 245 180 270 Z"
              fill="url(#goldShine1)"
              stroke="#FFEAA0"
              strokeWidth="1.4"
            />
          </g>

          {/* Group 5: Inner Bud & Spiraling Heart of the Rose */}
          <g id="innerHeart">
            {/* Inner Petal Ring */}
            <path
              d="M 215 220 C 200 175 265 160 295 180 C 325 200 320 250 280 265 C 255 230 225 225 215 220 Z"
              fill="url(#goldCore)"
              stroke="#FFFFFF"
              strokeWidth="1.2"
            />
            <path
              d="M 280 240 C 320 245 330 295 295 325 C 260 350 215 330 215 295 C 255 305 275 265 280 240 Z"
              fill="url(#goldShine2)"
              stroke="#FFFFFF"
              strokeWidth="1.2"
            />
            <path
              d="M 225 290 C 195 290 185 245 215 220 C 245 200 275 220 260 255 C 230 245 215 275 225 290 Z"
              fill="url(#goldDarkEdge)"
              stroke="#FFFFFF"
              strokeWidth="1.2"
            />

            {/* Central Rose Spiral Core */}
            <path
              d="M 245 240 C 235 230 255 220 265 230 C 275 240 270 255 258 260 C 248 265 240 255 245 248 C 248 244 254 246 253 250 Z"
              fill="url(#goldCore)"
              stroke="#FFF8E7"
              strokeWidth="1.5"
              filter="url(#goldGlowFilter)"
            />
          </g>

          {/* Sparkling Diamond Stardust Highlights at Petal Tips */}
          <circle cx="290" cy="35" r="2.5" fill="#FFFFFF" opacity="0.9" />
          <circle cx="470" cy="255" r="2" fill="#FFFFFF" opacity="0.9" />
          <circle cx="245" cy="470" r="2.5" fill="#FFFFFF" opacity="0.9" />
          <circle cx="35" cy="240" r="2" fill="#FFFFFF" opacity="0.9" />
          <circle cx="250" cy="250" r="3" fill="#FFFBE6" opacity="0.95" />
        </svg>
      </div>
    </div>
  );
};
