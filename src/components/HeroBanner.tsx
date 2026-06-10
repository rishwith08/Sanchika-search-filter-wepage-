import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BackpackVector } from './PatternPreview';
import { ChevronLeft, ChevronRight, ShoppingBag, Sparkles, Sliders } from 'lucide-react';

interface HeroBannerProps {
  onExploreClick: () => void;
}

interface ThemeSlide {
  id: string;
  patternType: 'galaxy' | 'blossom' | 'cubix' | 'colourSplash' | 'trisiac' | 'quantum' | 'comic';
  themeName: string;
  hangingText: string[]; // Break into letters
  bgColor: string; // Tailwind bg gradient class
  accentColor: string;
  textColor: string;
  description: string;
  badgeText: string;
  priceRange: string;
  doodles: React.ReactNode;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onExploreClick }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Define the themed slides matching the user graphics and user products
  const SLIDES: ThemeSlide[] = [
    {
      id: 'galaxy',
      patternType: 'galaxy',
      themeName: 'Galaxy Junior',
      hangingText: ['G', 'a', 'l', 'a', 'x', 'y'],
      bgColor: 'from-[#2A4DC0] via-[#1E3A8A] to-[#172554]',
      accentColor: 'text-[#93C5FD]',
      textColor: 'text-blue-100',
      description: 'Embark on a cosmic adventure with our galaxy junior backpacks, let your child\'s imagination take flight across the galaxy.',
      badgeText: 'Space Odyssies',
      priceRange: '₹1,599',
      doodles: (
        <svg className="absolute inset-0 w-full h-full opacity-35 pointer-events-none stroke-white" viewBox="0 0 840 460" fill="none" strokeWidth="1.5">
          {/* Sketchy Big Moon/Planet under the main bag on the left (matches original image) */}
          <circle cx="210" cy="400" r="140" strokeWidth="1" strokeDasharray="3,3" />
          <ellipse cx="210" cy="400" rx="140" ry="8" transform="rotate(-15, 210, 400)" />
          {/* Planet craters */}
          <circle cx="160" cy="320" r="16" />
          <circle cx="148" cy="322" r="6" strokeWidth="0.8" />
          <circle cx="240" cy="310" r="24" />
          <circle cx="250" cy="340" r="12" />
          <circle cx="110" cy="370" r="14" />
          
          {/* Launching Space Rocket (matches bottom left original image) */}
          <g transform="translate(190, 240) rotate(-15) scale(0.95)">
            <path d="M 0,-40 C 0,-40 20,-10 20,20 C 20,30 -20,30 -20,20 C -20,-10 0,-40 0,-40 Z" strokeWidth="1.5" />
            <path d="M -20,10 L -30,25 C -30,25 -25,30 -15,20 Z" />
            <path d="M 20,10 L 30,25 C 30,25 25,30 15,20 Z" />
            {/* Flames */}
            <path d="M -10,30 Q 0,55 10,30 Q 5,45 -10,30" stroke="#FBBF24" strokeWidth="1.2" />
            {/* Rocket window */}
            <circle cx="0" cy="-5" r="7" />
          </g>

          {/* Shooting comet (matches bottom center original image) */}
          <g transform="translate(480, 240) rotate(15) scale(0.9)">
            <circle cx="0" cy="0" r="15" />
            <circle cx="-5" cy="5" r="4" strokeWidth="0.8" />
            {/* Comet tail friction lines */}
            <path d="M 12,-10 Q 55,-35 90,-40" strokeDasharray="4,4" />
            <path d="M 14,-1 Q 65,-15 105,-18" />
            <path d="M 10,12 Q 55,10 95,5" strokeDasharray="2,2" />
          </g>

          {/* Large Ringed Planet (matches right margin original image) */}
          <g transform="translate(800, 220) scale(0.85)">
            <circle cx="0" cy="0" r="50" />
            <path d="M -80,-10 C -80,-10 -40,30 80,10" strokeWidth="1.5" />
            <path d="M -75,-16 C -75,-16 -40,15 75,1" strokeWidth="0.8" />
            {/* Inner craters */}
            <circle cx="-20" cy="-20" r="6" />
            <circle cx="15" cy="20" r="8" />
          </g>

          {/* Twinkling stars */}
          <path d="M 80,120 L 85,125 L 95,120 L 87,130 L 92,140 L 82,132 L 72,138 L 78,128 Z" fill="none" />
          <path d="M 330,60 L 333,65 L 340,63 L 335,68 L 338,75 L 332,71 L 326,74 L 329,67 Z" fill="none" className="scale-75" />
          <path d="M 720,120 L 722,123 L 728,122 L 724,126 L 726,132 L 721,129 L 716,131 L 718,126 Z" fill="none" className="scale-75" />
        </svg>
      )
    },
    {
      id: 'colorsplash',
      patternType: 'colourSplash',
      themeName: 'Bitsy Doodles',
      hangingText: ['B', 'i', 't', 's', 'y'],
      bgColor: 'from-[#1E56DA] via-[#2563EB] to-[#1E3A8A]',
      accentColor: 'text-[#FCD34D]',
      textColor: 'text-amber-50',
      description: 'Discover the charm of our bitsy bags and carry the world in the palm of your hand with Bitsy.',
      badgeText: 'Graffiti Art',
      priceRange: '₹1,749',
      doodles: (
        <svg className="absolute inset-0 w-full h-full opacity-35 pointer-events-none stroke-white" viewBox="0 0 840 460" fill="none" strokeWidth="1.5">
          {/* Sketchy Skateboard deck below left backpack (matches original image bottom left) */}
          <g transform="translate(50, 310) rotate(12) scale(0.95)">
            <path d="M 10,40 Q 140,20 270,40 Q 285,50 270,60 Q 140,80 10,60 Q -5,50 10,40 Z" strokeWidth="1.8" />
            {/* Front Wheel Set */}
            <circle cx="60" cy="72" r="10" />
            <circle cx="60" cy="72" r="4" strokeWidth="0.8" />
            <line x1="50" y1="62" x2="70" y2="62" />
            {/* Rear Wheel Set */}
            <circle cx="210" cy="74" r="10" />
            <circle cx="210" cy="74" r="4" strokeWidth="0.8" />
            <line x1="200" y1="64" x2="220" y2="64" />
            {/* Graphic sketch lines on deck */}
            <path d="M 90,48 Q 140,43 190,48" strokeDasharray="3,3" />
          </g>

          {/* Hand drawn Sneaker Doodle (matches top right bitsy background) */}
          <g transform="translate(710, 110) scale(0.85)">
            <path d="M 10,45 L 30,45 C 40,45 60,10 80,10 L 110,12 C 120,20 130,40 145,45 L 145,55 L 10,55 Z" />
            {/* Sole */}
            <path d="M 8,55 L 147,55" strokeWidth="2.5" />
            {/* Laces */}
            <path d="M 75,18 L 65,30 M 83,23 L 73,35 M 91,28 L 81,40" strokeWidth="1.2" />
            {/* Wave stripes */}
            <path d="M 35,46 C 45,30 65,30 90,45" strokeWidth="1" />
          </g>

          {/* Whimsical Numbers: '2' '1' '6' sketched in bubble frames (matches bitsy background) */}
          {/* Number 2 */}
          <g transform="translate(100, 60) scale(0.95)">
            <text x="0" y="40" fill="none" stroke="white" strokeWidth="1.2" className="font-sketch text-4xl font-bold opacity-80" style={{ fontFamily: 'Architects Daughter' }}>2</text>
          </g>
          {/* Number 1 */}
          <g transform="translate(50, 240) scale(0.9)">
            <text x="0" y="40" fill="none" stroke="white" strokeWidth="1.2" className="font-sketch text-4xl font-bold opacity-80" style={{ fontFamily: 'Architects Daughter' }}>1</text>
          </g>
          {/* Number 6 */}
          <g transform="translate(410, 130) scale(0.95)">
            <text x="0" y="40" fill="none" stroke="white" strokeWidth="1.2" className="font-sketch text-4xl font-bold opacity-80" style={{ fontFamily: 'Architects Daughter' }}>6</text>
          </g>

          {/* Random abstract swirling curls */}
          <path d="M 680,310 Q 730,280 780,340 T 830,290" strokeDasharray="2,2" />
          <path d="M 320,130 Q 360,105 390,140" />
        </svg>
      )
    },
    {
      id: 'blossom',
      patternType: 'blossom',
      themeName: 'Blossom Meadow',
      hangingText: ['B', 'l', 'o', 's', 's', 'o', 'm'],
      bgColor: 'from-[#A12BA1] via-[#8B5CF6] to-[#4338CA]',
      accentColor: 'text-[#fbcfe8]',
      textColor: 'text-fuchsia-100',
      description: 'Savor the whimsical breeze of spring meadow with our blossom junior backpacks, tailored to nourish creative daydreamers.',
      badgeText: 'Floral Springs',
      priceRange: '₹1,649',
      doodles: (
        <svg className="absolute inset-0 w-full h-full opacity-35 pointer-events-none stroke-white" viewBox="0 0 840 460" fill="none" strokeWidth="1.5">
          {/* Butterflies sketches */}
          <g transform="translate(720, 120) rotate(-15) scale(0.9)">
            <path d="M 0,0 C -15,-20 -30,0 0,0 C 15,-20 30,0 0,0 C 15,20 30,0 0,0 C -15,20 -30,0 0,0 Z" />
            <path d="M 0,10 L 0,-15 Q -5,-25 -8,-15 M 0,-15 Q 5,-25 8,-15" strokeLinecap="round" />
          </g>
          <g transform="translate(180, 260) rotate(20) scale(0.7)">
            <path d="M 0,0 C -15,-20 -30,0 0,0 C 15,-20 30,0 0,0" />
            <path d="M 0,5 L 0,-10" />
          </g>

          {/* Daisy floral doodles under left block */}
          <g transform="translate(260, 420) scale(0.8)">
            <ellipse cx="0" cy="0" rx="30" ry="8" transform="rotate(30)" />
            <ellipse cx="0" cy="0" rx="30" ry="8" transform="rotate(90)" />
            <ellipse cx="0" cy="0" rx="30" ry="8" transform="rotate(150)" />
            <circle cx="0" cy="0" r="10" />
          </g>

          {/* Tree vines crawling from the left/right corners */}
          <path d="M 0,400 Q 80,390 140,430 T 220,380" strokeWidth="1" />
          <path d="M 840,400 Q 760,390 700,430 T 620,380" strokeWidth="1" />
          
          {/* Spring Clouds */}
          <path d="M 450,110 C 470,95 500,95 515,110 C 530,100 550,110 550,125 C 550,140 430,140 450,110 Z" />
        </svg>
      )
    },
    {
      id: 'cubix',
      patternType: 'cubix',
      themeName: 'Cubix Retro',
      hangingText: ['C', 'u', 'b', 'i', 'x'],
      bgColor: 'from-[#311E5E] via-[#1E1B4B] to-[#0F172A]',
      accentColor: 'text-[#F472B6]',
      textColor: 'text-pink-100',
      description: 'Assemble your daily essentials with our 8-bit retro pixel geometric block art backpacks, built for future structural creators.',
      badgeText: '8-Bit Retro',
      priceRange: '₹1,699',
      doodles: (
        <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none stroke-white" viewBox="0 0 840 460" fill="none" strokeWidth="1.5">
          {/* Grid lines layout */}
          <line x1="0" y1="200" x2="840" y2="200" strokeWidth="0.5" strokeDasharray="5,5" />
          <line x1="0" y1="350" x2="840" y2="350" strokeWidth="0.5" strokeDasharray="5,5" />
          
          {/* Stacked Tetris boxes cluster */}
          <g transform="translate(140, 310) scale(1.1)">
            {/* Box 1 */}
            <rect x="0" y="20" width="20" height="20" strokeWidth="1.5" />
            <rect x="20" y="20" width="20" height="20" strokeWidth="1.5" />
            <rect x="40" y="20" width="20" height="20" strokeWidth="1.5" />
            {/* Box 2 top center */}
            <rect x="20" y="0" width="20" height="20" strokeWidth="1.5" />
          </g>

          {/* Floating game controller wiring */}
          <g transform="translate(710, 140) scale(0.9)">
            <rect x="0" y="0" width="60" height="35" rx="12" strokeWidth="1.8" />
            {/* D-Pad */}
            <path d="M 15,10 L 15,24 M 8,17 L 22,17" strokeWidth="2" />
            {/* Buttons */}
            <circle cx="42" cy="13" r="3.5" />
            <circle cx="49" cy="20" r="3.5" />
            {/* wire */}
            <path d="M 30,0 C 30,-15 45,-25 35,-40" strokeLinecap="round" />
          </g>

          {/* Retro futuristic isometric stars */}
          <g transform="translate(480, 150) scale(0.8)">
            <polygon points="15,0 20,10 30,15 20,20 15,30 10,20 0,15 10,10" />
          </g>
          <g transform="translate(240, 90) scale(0.6)">
            <polygon points="15,0 20,10 30,15 20,20 15,30 10,20 0,15 10,10" />
          </g>
        </svg>
      )
    },
    {
      id: 'trisiac',
      patternType: 'trisiac',
      themeName: 'Trisiac Poly Grid',
      hangingText: ['T', 'r', 'i', 's', 'i', 'a', 'c'],
      bgColor: 'from-[#0F5A5C] via-[#0D9488] to-[#115E59]',
      accentColor: 'text-[#2DD4BF]',
      textColor: 'text-teal-50',
      description: 'Dive into a grid of limitless wonder. High density triangular low-poly meshes meet structural ergonomic load lifters.',
      badgeText: 'Low-Poly Tech',
      priceRange: '₹1,879',
      doodles: (
        <svg className="absolute inset-0 w-full h-full opacity-35 pointer-events-none stroke-white" viewBox="0 0 840 460" fill="none" strokeWidth="1.2">
          {/* Low poly prism web lines */}
          <polygon points="100,280 220,180 310,290" strokeDasharray="3,3" />
          <polygon points="220,180 310,290 280,390" />
          <polygon points="310,290 400,210 520,320" strokeDasharray="3,3" />
          <polygon points="760,180 660,100 810,120" />
          <polygon points="660,100 810,120 710,280" />
          
          {/* Tech dots */}
          <circle cx="220" cy="180" r="4.5" fill="white" />
          <circle cx="310" cy="290" r="4.5" fill="white" />
          <circle cx="280" cy="390" r="4.5" fill="white" />
          <circle cx="660" cy="100" r="4.5" fill="white" />
          <circle cx="710" cy="280" r="4.5" fill="white" />
          
          {/* Laser compass grids */}
          <ellipse cx="780" cy="380" rx="40" ry="12" />
          <line x1="740" y1="380" x2="820" y2="380" />
        </svg>
      )
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const activeSlide = SLIDES[currentIndex];

  return (
    <div className="relative w-full min-h-[580px] md:min-h-[660px] overflow-hidden select-text flex items-center py-10">
      {/* Dynamic Background smooth fade */}
      <div className={`absolute inset-0 bg-gradient-to-br ${activeSlide.bgColor} transition-all duration-700 ease-in-out`} />

      {/* Floating stars/dots across ambient canvas */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-50 to-transparent opacity-85 z-10" />

      {/* Embedded Whimsical Hand-Sketched Vector Art */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`doodles-${activeSlide.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full z-0 block"
        >
          {activeSlide.doodles}
        </motion.div>
      </AnimatePresence>

      {/* Slide Navigation Left/Right Buttons */}
      <button
        id="hero-prev-btn"
        onClick={handlePrev}
        className="absolute left-3 md:left-6 z-30 cursor-pointer w-11 h-11 bg-white/10 hover:bg-white/20 active:scale-95 border border-white/25 rounded-full flex items-center justify-center text-white backdrop-blur-md transition shadow-md select-none"
        aria-label="Previous Theme"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        id="hero-next-btn"
        onClick={handleNext}
        className="absolute right-3 md:right-6 z-30 cursor-pointer w-11 h-11 bg-white/10 hover:bg-white/20 active:scale-95 border border-white/25 rounded-full flex items-center justify-center text-white backdrop-blur-md transition shadow-md select-none"
        aria-label="Next Theme"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* MAIN CONTENT BLOCK: GRID OF HERO GRAPHICS */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-20">
        
        {/* LEFT COLUMN: ACTIVE FLYING BIG BACKPACK ON CRATER MOON */}
        <div className="lg:col-span-5 flex justify-center relative items-center py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`backpack-big-${activeSlide.id}`}
              initial={{ opacity: 0, scale: 0.8, y: 35, rotate: -10 }}
              animate={{ opacity: 1, scale: 1.05, y: 0, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -35, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 80, damping: 15 }}
              className="relative w-72 h-84 md:w-84 md:h-96 z-10 cursor-grab active:cursor-grabbing animate-float-slow"
              whileHover={{ scale: 1.12 }}
            >
              {/* Highlight Halo aura */}
              <div className="absolute inset-0 bg-white/10 rounded-full filter blur-3xl scale-95" />
              <BackpackVector patternType={activeSlide.patternType} className="w-full h-full filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" />
              
              {/* Interactive label */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-slate-900/80 backdrop-blur-md border border-white/20 text-[10px] text-white px-3 py-1 rounded-full uppercase tracking-widest font-mono font-bold select-none pointer-events-none">
                Interactive Model
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT COLUMN: HANGING LETTERTITLE & SERIF CURSIVE MESSAGE & FRONT/REAR TWIN SHOTS */}
        <div className="lg:col-span-7 flex flex-col justify-center text-white items-center lg:items-start text-center lg:text-left space-y-6">
          
          {/* Badge indicator */}
          <div className="inline-flex items-center gap-1.5 bg-white/15 border border-white/25 px-4.5 py-1.5 rounded-full text-xs font-funny font-medium text-white shadow-xs z-10 leading-none">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300 fill-yellow-200" />
            <span className="uppercase tracking-wider font-bold">{activeSlide.badgeText} ({activeSlide.priceRange})</span>
          </div>

          {/* HANGING LETTERS BOX (Matches uploaded visual style down to the coordinates) */}
          <div className="relative flex justify-center lg:justify-start gap-1 pb-4 pt-1 select-none w-full min-h-[140px] md:min-h-[168px] overflow-visible">
            {/* Hanging thread wire container */}
            <div className="flex gap-2.5 md:gap-4 overflow-visible">
              {activeSlide.hangingText.map((char, index) => (
                <motion.div
                  key={`let-${activeSlide.id}-${char}-${index}`}
                  className="relative flex flex-col items-center"
                  animate={{ rotate: [-2.5, 2.5, -2.5] }}
                  transition={{
                    duration: 3.5 + (index % 3) * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                  style={{ transformOrigin: "top center" }}
                >
                  {/* Thick steel string thread */}
                  <div className="w-[1.2px] bg-slate-200 h-10 md:h-14 opacity-80" />

                  {/* Little ring holder attachment hole */}
                  <div className="w-3.5 h-3.5 rounded-full border border-slate-200 bg-slate-900/25 -mt-1 flex items-center justify-center relative z-20 shadow-xs">
                    <div className="w-1 h-1 rounded-full bg-white" />
                  </div>

                  {/* Bold custom letter overlayed in stripe pattern context */}
                  <div className="text-5xl md:text-7xl font-sans font-black tracking-tighter text-slate-100 z-10 -mt-2 filter drop-shadow-[3px_3px_0_rgba(0,0,0,0.25)] relative select-none">
                    {/* Dark backing block representing textured sketch cutout */}
                    <span className="absolute inset-0 text-slate-900/10 blur-[1px] select-none translate-y-1">{char}</span>
                    <span className="relative z-10">{char}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CASUAL DESCRIPTION PARAGRAPH (In beautiful handdrawn custom fonts Architects Daughter/Caveat) */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${activeSlide.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-lg md:text-2xl text-blue-50/90 font-light leading-relaxed max-w-xl text-center lg:text-left z-10 italic"
              style={{ fontFamily: 'Architects Daughter', textShadow: '1px 1px 2px rgba(0,0,0,0.15)' }}
            >
              "{activeSlide.description}"
            </motion.p>
          </AnimatePresence>

          {/* DUAL FRONT / REAR TWIN VIEWS ON BOTTOM RIGHT WITH LABELS (matches original photo) */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-white/10 z-15">
            
            <div className="flex items-center gap-4.5 bg-slate-950/20 px-4 py-3 rounded-2xl border border-white/5 backdrop-blur-xs select-none">
              <Sliders className="w-5 h-5 text-yellow-300 animate-pulse" />
              <div className="text-left">
                <h4 className="text-xs font-bold font-mono tracking-wider text-white uppercase">Theme Swapper</h4>
                <p className="text-[10px] text-blue-200 font-medium">Use navigation or tap dots to explore modes.</p>
              </div>
            </div>

            {/* Twin thumbnail views */}
            <div className="flex items-end gap-5">
              
              {/* Front miniature block */}
              <div className="flex flex-col items-center">
                <div className="w-22 h-26 sm:w-26 sm:h-30 bg-slate-950/25 rounded-2xl border border-white/10 hover:border-white/30 backdrop-blur-xs flex items-center justify-center p-1.5 transition filter drop-shadow-md">
                  <BackpackVector patternType={activeSlide.patternType} isBack={false} isInteractive={false} className="w-full h-full scale-110" />
                </div>
                <span className="text-[9px] uppercase font-bold text-blue-200 mt-1.5 tracking-widest font-mono">Front View</span>
              </div>

              {/* Rear miniature block */}
              <div className="flex flex-col items-center">
                <div className="w-22 h-26 sm:w-26 sm:h-30 bg-slate-950/25 rounded-2xl border border-white/10 hover:border-white/30 backdrop-blur-xs flex items-center justify-center p-1.5 transition filter drop-shadow-md">
                  <BackpackVector patternType={activeSlide.patternType} isBack={true} isInteractive={false} className="w-full h-full scale-110" />
                </div>
                <span className="text-[9px] uppercase font-bold text-blue-200 mt-1.5 tracking-widest font-mono">Comfort Back</span>
              </div>

            </div>
          </div>

          {/* THEMATIC INTERACTIVE CTA BUTONS */}
          <div className="flex flex-row items-center justify-center lg:justify-start w-full gap-4 pt-2">
            <button
              id="hero-scroll-btn"
              onClick={onExploreClick}
              className="cursor-pointer group bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg transition active:scale-95 text-sm uppercase tracking-wider"
            >
              <ShoppingBag className="w-4 h-4 text-slate-900 group-hover:scale-110 transition" />
              Select style
            </button>

            {/* Slider dots indicator indicator */}
            <div className="flex gap-2 ml-4">
              {SLIDES.map((slide, idx) => (
                <button
                  key={`dot-${slide.id}`}
                  id={`theme-select-${slide.id}`}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full border border-white/30 transition cursor-pointer ${
                    currentIndex === idx ? 'bg-yellow-300 scale-125 border-yellow-300' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to ${slide.id} theme`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
