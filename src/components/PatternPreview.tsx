import React from 'react';

interface BackpackVectorProps {
  patternType: 'galaxy' | 'blossom' | 'cubix' | 'colourSplash' | 'trisiac' | 'quantum' | 'comic';
  className?: string;
  isInteractive?: boolean;
  isBack?: boolean;
}

export const BackpackVector: React.FC<BackpackVectorProps> = ({
  patternType,
  className = "w-full h-full",
  isInteractive = true,
  isBack = false,
}) => {
  // Pattern SVG definitions to apply on the bag areas
  const renderDefs = () => {
    switch (patternType) {
      case 'galaxy':
        return (
          <defs>
            <linearGradient id="galaxyBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B0914" />
              <stop offset="50%" stopColor="#120E2B" />
              <stop offset="100%" stopColor="#0B0914" />
            </linearGradient>
            <pattern id="galaxyStars" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="15" r="1" fill="#ffffff" opacity="0.4" />
              <circle cx="45" cy="10" r="1.5" fill="#38BDF8" opacity="0.6" />
              <circle cx="25" cy="35" r="0.8" fill="#ffffff" opacity="0.8" />
              <circle cx="50" cy="45" r="1.2" fill="#F472B6" opacity="0.5" />
              <path d="M 5,50 L 7,50 M 6,49 L 6,51" stroke="#ffffff" strokeWidth="0.8" opacity="0.7" />
              <path d="M 35,20 L 39,20 M 37,18 L 37,22" stroke="#60A5FA" strokeWidth="1" opacity="0.8" />
            </pattern>
            {/* Rockets & Planets */}
            <pattern id="galaxyDetail" width="120" height="120" patternUnits="userSpaceOnUse">
              {/* Saturn */}
              <g transform="translate(20, 25)">
                <ellipse cx="20" cy="10" rx="14" ry="4" fill="none" stroke="#F43F5E" strokeWidth="2.5" transform="rotate(-15, 20, 10)" opacity="0.6"/>
                <circle cx="20" cy="10" r="8" fill="#F59E0B" />
                <ellipse cx="20" cy="10" rx="14" ry="4" fill="none" stroke="#60A5FA" strokeWidth="1.5" transform="rotate(-15, 20, 10)" opacity="0.9"/>
              </g>
              {/* Rocket */}
              <g transform="translate(80, 75) rotate(45)">
                <path d="M 0,-15 L 6,0 L -6,0 Z" fill="#E2E8F0" />
                <path d="M -6,0 L -9,8 L -3,8 L -3,0 Z" fill="#EF4444" />
                <path d="M 6,0 L 9,8 L 3,8 L 3,0 Z" fill="#EF4444" />
                <circle cx="0" cy="-4" r="2.5" fill="#3B82F6" />
                <path d="M -4,8 C -4,15 4,15 4,8 Z" fill="#F59E0B" />
              </g>
              {/* Constellation line */}
              <path d="M 20,90 L 40,110 L 65,95" fill="none" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
              <circle cx="20" cy="90" r="3" fill="#38BDF8" opacity="0.6" />
              <circle cx="40" cy="110" r="3" fill="#38BDF8" opacity="0.6" />
              <circle cx="65" cy="95" r="3" fill="#38BDF8" opacity="0.6" />
            </pattern>
          </defs>
        );
      case 'blossom':
        return (
          <defs>
            <linearGradient id="blossomBg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>
            <pattern id="flowers" width="80" height="80" patternUnits="userSpaceOnUse">
              {/* Flower 1 */}
              <g transform="translate(20, 20) scale(0.6)">
                <path d="M0,0 C-10,-20 -20,-10 0,0 C20,-10 10,-20 0,0 C10,20 20,10 0,0 C-20,10 -10,20 0,0" fill="#F472B6" opacity="0.8"/>
                <circle cx="0" cy="0" r="5" fill="#FBBF24" />
              </g>
              {/* Flower 2 */}
              <g transform="translate(55, 50) scale(0.5)">
                <path d="M0,0 C-10,-20 -20,-10 0,0 C20,-10 10,-20 0,0 C10,20 20,10 0,0 C-20,10 -10,20 0,0" fill="#38BDF8" opacity="0.8"/>
                <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
              </g>
              {/* Leaves */}
              <path d="M 12,48 Q 5,42 12,36 Q 19,42 12,48" fill="#4ADE80" opacity="0.5" />
              <path d="M 68,18 Q 75,24 68,30 Q 61,24 68,18" fill="#4ADE80" opacity="0.5" />
              {/* Tiny dots */}
              <circle cx="40" cy="10" r="2.5" fill="#FDF2E9" opacity="0.7"/>
              <circle cx="10" cy="65" r="1.5" fill="#FDF2E9" opacity="0.7"/>
            </pattern>
          </defs>
        );
      case 'cubix':
        return (
          <defs>
            <linearGradient id="cubixBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E1E2E" />
              <stop offset="100%" stopColor="#2D2B55" />
            </linearGradient>
            <pattern id="cubes" width="60" height="60" patternUnits="userSpaceOnUse">
              {/* Cube cluster 1 */}
              <g transform="translate(10, 10)">
                <polygon points="15,0 30,8 15,16 0,8" fill="#EC4899" opacity="0.8" />
                <polygon points="15,16 30,8 30,26 15,34" fill="#D946EF" opacity="0.9" />
                <polygon points="15,16 0,8 0,26 15,34" fill="#A21CAF" opacity="0.7" />
              </g>
              {/* Cube cluster 2 */}
              <g transform="translate(35, 30) scale(0.7)">
                <polygon points="15,0 30,8 15,16 0,8" fill="#3B82F6" opacity="0.8" />
                <polygon points="15,16 30,8 30,26 15,34" fill="#1D4ED8" opacity="0.9" />
                <polygon points="15,16 0,8 0,26 15,34" fill="#1E3A8A" opacity="0.7" />
              </g>
              {/* Linear grids / techy lines */}
              <line x1="0" y1="0" x2="60" y2="60" stroke="#F472B6" strokeWidth="0.5" opacity="0.2" />
              <line x1="60" y1="0" x2="0" y2="60" stroke="#60A5FA" strokeWidth="0.5" opacity="0.2" />
            </pattern>
          </defs>
        );
      case 'colourSplash':
        return (
          <defs>
            <linearGradient id="splashBg" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <pattern id="doodles" width="100" height="100" patternUnits="userSpaceOnUse">
              {/* Paint Splats */}
              <path d="M 12,25 C 22,12 34,28 28,38 C 22,48 5,38 12,25" fill="#FBBF24" opacity="0.9" />
              <path d="M 65,15 C 80,10 75,32 68,32 C 60,32 58,20 65,15" fill="#EC4899" opacity="0.9" />
              <path d="M 45,65 C 55,55 70,75 58,82 C 48,88 38,72 45,65" fill="#06B6D4" opacity="0.9" />
              {/* Abstract hand doodle smile/eyes/arrow */}
              <circle cx="20" cy="70" r="3" fill="#FFFFFF" />
              <circle cx="32" cy="70" r="3" fill="#FFFFFF" />
              <path d="M 18,78 Q 26,85 34,78" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d="M 75,50 L 85,58 L 75,66" stroke="#4ADE80" strokeWidth="3" fill="none" strokeLinecap="round" />
              {/* Star doodle */}
              <polygon points="75,70 77,75 83,75 78,79 80,84 75,81 70,84 72,79 67,75 73,75" fill="#F87171" />
            </pattern>
          </defs>
        );
      case 'trisiac':
        return (
          <defs>
            <linearGradient id="trisiacBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
            <pattern id="triangles" width="80" height="80" patternUnits="userSpaceOnUse">
              {/* Low poly mosaic mesh of high-tech triangles */}
              <polygon points="0,0 40,0 20,30" fill="#2563EB" opacity="0.15" />
              <polygon points="40,0 80,0 60,30" fill="#1D4ED8" opacity="0.25" />
              <polygon points="20,30 60,30 40,60" fill="#3B82F6" opacity="0.2" />
              <polygon points="0,0 20,30 0,60" fill="#4F46E5" opacity="0.3" />
              <polygon points="80,0 60,30 80,60" fill="#6366F1" opacity="0.2" />
              <polygon points="0,60 40,60 20,80" fill="#4338CA" opacity="0.35" />
              <polygon points="40,60 80,60 60,80" fill="#1E3A8A" opacity="0.4" />
              <polygon points="20,30 40,0 60,30" fill="#818CF8" opacity="0.15" />
              
              {/* Highlight grids */}
              <polyline points="0,0 20,30 40,0 60,30 80,0" fill="none" stroke="#60A5FA" strokeWidth="0.5" opacity="0.4" />
              <polyline points="0,60 20,80 40,60 60,80 80,60" fill="none" stroke="#38BDF8" strokeWidth="0.5" opacity="0.3" />
              <line x1="20" y1="30" x2="20" y2="80" stroke="#38BDF8" strokeWidth="0.5" strokeDasharray="1,2" opacity="0.3" />
            </pattern>
          </defs>
        );
      case 'quantum':
        return (
          <defs>
            <linearGradient id="quantumBg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7F1D1D" />
              <stop offset="100%" stopColor="#450A0A" />
            </linearGradient>
            <pattern id="numbers" width="60" height="60" patternUnits="userSpaceOnUse">
              <text x="10" y="20" fill="#EF4444" fontSize="12" fontWeight="800" fontFamily="sans-serif" opacity="0.3">8</text>
              <text x="35" y="15" fill="#FFFFFF" fontSize="10" fontWeight="900" fontFamily="sans-serif" opacity="0.15">9</text>
              <text x="5" y="45" fill="#EF4444" fontSize="16" fontWeight="900" fontFamily="sans-serif" opacity="0.2">4</text>
              <text x="30" y="50" fill="#EF4444" fontSize="14" fontWeight="800" fontFamily="sans-serif" opacity="0.35">5</text>
              <text x="45" y="32" fill="#B91C1C" fontSize="11" fontWeight="700" fontFamily="sans-serif" opacity="0.4">1</text>
              <line x1="0" y1="30" x2="60" y2="0" stroke="#EF4444" strokeWidth="1" opacity="0.2" />
              <line x1="0" y1="60" x2="60" y2="30" stroke="#EF4444" strokeWidth="0.8" opacity="0.15" />
            </pattern>
          </defs>
        );
      case 'comic':
        return (
          <defs>
            <linearGradient id="comicBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
            <pattern id="sketches" width="80" height="80" patternUnits="userSpaceOnUse">
              {/* Comic bubble silhouettes */}
              <path d="M 5,20 C 10,10 30,10 35,20 C 40,20 40,30 35,35 C 30,40 10,40 5,35 Z" fill="none" stroke="#94A3B8" strokeWidth="1" opacity="0.4" />
              <text x="10" y="30" fill="#94A3B8" fontSize="8" fontWeight="bold" fontFamily="sans-serif" opacity="0.5">POW!</text>
              
              <path d="M 45,50 C 50,45 65,45 70,50 C 75,55 75,65 70,70 C 65,75 50,75 45,70 Z" fill="none" stroke="#64748B" strokeWidth="1.2" opacity="0.5" />
              <text x="48" y="63" fill="#64748B" fontSize="6.5" fontWeight="black" fontFamily="sans-serif" opacity="0.6">BOOM</text>
              
              {/* Lightning, stars */}
              <polyline points="15,45 8,55 18,55 10,70" fill="none" stroke="#FBBF24" strokeWidth="1" opacity="0.4" />
              <polygon points="55,15 57,20 62,20 58,23 60,28 55,25 50,28 52,23 48,20 53,20" fill="#94A3B8" opacity="0.3" />
            </pattern>
          </defs>
        );
      default:
        return null;
    }
  };

  // Get backing colors based on types to blend nicely
  const getSubBaseColor = () => {
    switch (patternType) {
      case 'galaxy': return 'url(#galaxyBg)';
      case 'blossom': return 'url(#blossomBg)';
      case 'cubix': return 'url(#cubixBg)';
      case 'colourSplash': return 'url(#splashBg)';
      case 'trisiac': return 'url(#trisiacBg)';
      case 'quantum': return 'url(#quantumBg)';
      case 'comic': return 'url(#comicBg)';
      default: return '#1E293B';
    }
  };

  const getPocketFill = () => {
    switch (patternType) {
      case 'galaxy': return 'url(#galaxyStars)';
      case 'blossom': return 'url(#flowers)';
      case 'cubix': return 'url(#cubes)';
      case 'colourSplash': return 'url(#doodles)';
      case 'trisiac': return 'url(#triangles)';
      case 'quantum': return 'url(#numbers)';
      case 'comic': return 'url(#sketches)';
      default: return '#334155';
    }
  };

  const getUpperBodyFill = () => {
    // Top-half material representation.
    // In original photo:
    // Galaxy, Cubix, Colour Splash have a texture/mesh black top.
    // Blossom has floral pattern all over both top & bottom!
    // Trisiac, Quantum & Comic have specific fabrics.
    switch (patternType) {
      case 'blossom':
        return 'url(#flowers)'; // Full body print!
      case 'galaxy':
        // Black premium textured pattern
        return '#111827';
      case 'cubix':
        return '#1F2937';
      case 'colourSplash':
        return '#1E293B';
      case 'trisiac':
        return 'url(#triangles)'; // Full-body poly-mesh
      case 'quantum':
        return '#991B1B'; // solid red upper
      case 'comic':
        return '#475569'; // Grey upper
      default:
        return '#475569';
    }
  };

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        id={`backpack-svg-${patternType}-${isBack ? 'back' : 'front'}`}
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full drop-shadow-xl ${isInteractive ? 'transition-all duration-500 hover:scale-105' : ''}`}
      >
        {renderDefs()}

        {/* --- BACKPACK STRUCTURE --- */}

        {/* Hanger Loop */}
        <path
          d="M 80,35 C 80,18, 120,18, 120,35"
          stroke="#111827"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 83,35 C 83,21, 117,21, 117,35"
          stroke="#475569"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {isBack ? (
          <>
            {/* ================= BACK VIEW OF THE BACKPACK ================= */}
            {/* Main Base Body Shadow */}
            <rect x="42" y="38" width="116" height="175" rx="55" fill="black" opacity="0.3" />

            {/* Main Outer Pattern Shell showing at the borders */}
            <rect x="40" y="35" width="120" height="180" rx="60" fill={getSubBaseColor()} />
            
            {/* Edge Pattern wrap to show design on sides */}
            <rect x="40" y="35" width="120" height="180" rx="60" fill={getPocketFill()} opacity="0.3" />

            {/* Spine Guard Protective Back Plate (Inner dark lining) */}
            <rect x="46" y="41" width="108" height="168" rx="50" fill="#0F172A" />

            {/* Ergonomic Air-mesh cushions: Left vertical cushion */}
            <path
              d="M 52,65 C 52,55 72,55 72,65 L 72,160 C 72,170 52,170 52,160 Z"
              fill="#1E293B"
              stroke="#334155"
              strokeWidth="1"
            />
            {/* Left cushion air flow mesh lines */}
            <path d="M 52,75 L 72,85 M 52,95 L 72,105 M 52,115 L 72,125 M 52,135 L 72,145 M 52,155 L 72,165" stroke="#0F172A" strokeWidth="1.5" opacity="0.6" />

            {/* Right vertical cushion */}
            <path
              d="M 128,65 C 128,55 148,55 148,65 L 148,160 C 148,170 128,170 128,160 Z"
              fill="#1E293B"
              stroke="#334155"
              strokeWidth="1"
            />
            {/* Right cushion air flow mesh lines */}
            <path d="M 128,75 L 148,85 M 128,95 L 148,105 M 128,115 L 148,125 M 128,135 L 148,145 M 128,155 L 148,165" stroke="#0F172A" strokeWidth="1.5" opacity="0.6" />

            {/* Lumbar Bottom Support Cushion */}
            <path
              d="M 60,174 C 60,166 140,166 140,174 L 132,204 C 132,208 68,208 68,204 Z"
              fill="#1E293B"
              stroke="#334155"
              strokeWidth="1"
            />
            {/* Lumbar cushion cross hatch air patterns */}
            <path d="M 65,185 L 135,185 M 70,195 L 130,195" stroke="#0F172A" strokeWidth="2" opacity="0.5" />

            {/* Side Water Bottle Net Pockets (Visible on edges from behind) */}
            <path d="M 40,130 C 34,130 34,170 40,170 Z" fill="#111827" opacity="0.8" />
            <path d="M 160,130 C 166,130 166,170 160,170 Z" fill="#111827" opacity="0.8" />

            {/* Left Adjustable Shoulder S-Strap (Laying on top of cushions) */}
            <path
              d="M 74,40 C 46,75 42,150 56,192"
              stroke="#090D16"
              strokeWidth="18"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 74,40 C 46,75 42,150 56,192"
              stroke="#111827"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
            />
            {/* Inner air-sweat comfort liner pattern on left strap */}
            <path
              d="M 74,40 C 46,75 42,150 56,192"
              stroke="#334155"
              strokeWidth="4"
              strokeDasharray="2,3"
              strokeLinecap="round"
              fill="none"
              opacity="0.8"
            />

            {/* Right Adjustable Shoulder S-Strap */}
            <path
              d="M 126,40 C 154,75 158,150 144,192"
              stroke="#090D16"
              strokeWidth="18"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 126,40 C 154,75 158,150 144,192"
              stroke="#111827"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
            />
            {/* Inner air-sweat comfort liner pattern on right strap */}
            <path
              d="M 126,40 C 154,75 158,150 144,192"
              stroke="#334155"
              strokeWidth="4"
              strokeDasharray="2,3"
              strokeLinecap="round"
              fill="none"
              opacity="0.8"
            />

            {/* Sanchika Brand Logo Symbol printed on the Left Strap */}
            <g transform="translate(56, 105) scale(0.45)">
              <circle cx="0" cy="0" r="10" fill="white" />
              {/* Little fox logo matching user's image */}
              <path d="M-5,-5 L-2,-1 L2,-1 L5,-5 L3,2 L-3,2 Z" fill="#0F172A" />
              <polygon points="-4,-4 -1,-1 -3,0" fill="#EF4444" />
              <polygon points="4,-4 1,-1 3,0" fill="#EF4444" />
            </g>

            {/* Hanging lower adjustment loose strap ribbons */}
            <path d="M 54,190 Q 50,210 52,226" stroke="#475569" strokeWidth="4.5" fill="none" strokeLinecap="round" />
            <path d="M 54,190 Q 50,210 52,226" stroke="#94A3B8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <rect x="50" y="186" width="8" height="6" rx="1.5" fill="#1E293B" stroke="#000000" strokeWidth="0.8" />

            <path d="M 146,190 Q 150,210 148,226" stroke="#475569" strokeWidth="4.5" fill="none" strokeLinecap="round" />
            <path d="M 146,190 Q 150,210 148,226" stroke="#94A3B8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <rect x="142" y="186" width="8" height="6" rx="1.5" fill="#1E293B" stroke="#000000" strokeWidth="0.8" />

            {/* Padded Chest Weight Distribution Buckle Harness */}
            {/* Harness webbing cords */}
            <line x1="49" y1="120" x2="89" y2="120" stroke="#1F2937" strokeWidth="4.5" strokeLinecap="round" />
            <line x1="111" y1="120" x2="151" y2="120" stroke="#1F2937" strokeWidth="4.5" strokeLinecap="round" />
            <line x1="49" y1="120" x2="89" y2="120" stroke="#4b5563" strokeWidth="1.5" />
            <line x1="111" y1="120" x2="151" y2="120" stroke="#4b5563" strokeWidth="1.5" />

            {/* Premium center safety release lock (Amber yellow in sport/outdoor look) */}
            <g transform="translate(100, 120)">
              <rect x="-12" y="-6" width="24" height="12" rx="2.5" fill="#FBBF24" stroke="#0F172A" strokeWidth="1" />
              {/* Release trigger details */}
              <line x1="-6" y1="-2" x2="-6" y2="2" stroke="#451A03" strokeWidth="1" />
              <line x1="6" y1="-2" x2="6" y2="2" stroke="#451A03" strokeWidth="1" />
              <circle cx="0" cy="0" r="2.5" fill="#0F172A" />
            </g>
          </>
        ) : (
          <>
            {/* ================= FRONT VIEW OF THE BACKPACK ================= */}
            {/* Shoulder Straps glimpses from behind */}
            <path d="M 60,40 C 35,60 30,130 50,170" stroke="#1E293B" strokeWidth="15" strokeLinecap="round" fill="none" opacity="0.95" />
            <path d="M 140,40 C 165,60 170,130 150,170" stroke="#1E293B" strokeWidth="15" strokeLinecap="round" fill="none" opacity="0.95" />
            <path d="M 60,40 C 35,60 30,130 50,170" stroke="#334155" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.95" />
            <path d="M 140,40 C 165,60 170,130 150,170" stroke="#334155" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.95" />

            {/* Main Base Body Shadow */}
            <rect x="42" y="38" width="116" height="175" rx="55" fill="black" opacity="0.25" />

            {/* Main Back Panel / Outer Shell (Blending background color) */}
            <rect x="40" y="35" width="120" height="180" rx="60" fill={getSubBaseColor()} />

            {/* Premium upper body texture */}
            <path
              d="M 40,95 C 40,60 65,35 100,35 C 135,35 160,60 160,95 L 160,115 C 160,115 100,125 40,115 Z"
              fill={getUpperBodyFill()}
            />

            {/* Honeycomb grid simulation for the upper compartment (e.g., Galaxy structure) */}
            {patternType === 'galaxy' && (
              <path
                d="M 40,95 C 40,60 65,35 100,35 C 135,35 160,60 160,95 L 160,115 C 160,115 100,125 40,115 Z"
                fill="none"
                stroke="#1F2937"
                strokeWidth="0.8"
                strokeDasharray="3,3"
                opacity="0.5"
              />
            )}

            {/* Detail Galaxy space items if galaxy */}
            {patternType === 'galaxy' && (
              <rect
                width="120"
                height="80"
                x="40"
                y="35"
                fill="url(#galaxyDetail)"
                opacity="0.8"
              />
            )}

            {/* Side Water Bottle Net Pockets */}
            {/* Left mesh */}
            <path
              d="M 40,130 C 32,130 32,175 40,175 Z"
              fill="#111827"
            />
            <path
              d="M 40,130 C 32,130 32,175 40,175 Z"
              fill="none"
              stroke="#4B5563"
              strokeWidth="1.5"
              strokeDasharray="2,2"
            />
            
            {/* Right mesh */}
            <path
              d="M 160,130 C 168,130 168,175 160,175 Z"
              fill="#111827"
            />
            <path
              d="M 160,130 C 168,130 168,175 160,175 Z"
              fill="none"
              stroke="#4B5563"
              strokeWidth="1.5"
              strokeDasharray="2,2"
            />

            {/* Front Lower Pocket Canvas (The main focus area for patterns) */}
            <path
              d="M 40,105 C 40,105 100,115 160,105 L 160,195 C 160,210 135,215 100,215 C 65,215 40,210 40,195 Z"
              fill={getPocketFill()}
            />

            {/* Lower pocket border bezel / shadow */}
            <path
              d="M 40,105 C 40,105 100,115 160,105"
              stroke="#111827"
              strokeWidth="3.5"
              fill="none"
              opacity="0.3"
            />

            {/* Brand Mascot Logo Tag (Centred on top third or on lower pocket) */}
            <g transform="translate(100, 75) scale(0.9)">
              <circle cx="0" cy="0" r="11" fill="black" fillOpacity="0.4" />
              <circle cx="0" cy="0" r="10" fill="#1E293B" stroke="#F1F5F9" strokeWidth="1" />
              <path d="M-5,-5 L-2,-1 L2,-1 L5,-5 L3,2 L-3,2 Z" fill="#F1F5F9" />
              <polygon points="-4,-4 -1,-1 -3,0" fill="#EF4444" />
              <polygon points="4,-4 1,-1 3,0" fill="#EF4444" />
              <circle cx="-1.5" cy="1" r="0.7" fill="#0F172A" />
              <circle cx="1.5" cy="1" r="0.7" fill="#0F172A" />
            </g>

            {/* Dynamic customized logo text on lower pocket if specified */}
            {patternType === 'trisiac' && (
              <g transform="translate(100, 195)">
                <rect x="-35" y="-6" width="70" height="12" rx="3" fill="#0B0F19" opacity="0.8" />
                <text
                  textAnchor="middle"
                  y="3"
                  fill="#38BDF8"
                  fontSize="7"
                  fontWeight="900"
                  letterSpacing="1.5"
                  fontFamily="monospace"
                >
                  DIVE IN
                </text>
              </g>
            )}

            {/* Premium metallic zippers & details */}
            {/* Main upper zipper route */}
            <path
              d="M 46,95 C 50,55 70,42 100,42 C 130,42 150,55 154,95"
              stroke="#334155"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="2,1"
            />
            
            {/* Main zipper head and slider badge */}
            <g transform="translate(75, 48)">
              <rect x="-1" y="-4" width="3" height="8" rx="1" fill="#94A3B8" stroke="#1E293B" strokeWidth="0.5" />
              <path d="M 0,4 L 0,11" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" />
            </g>
            
            {/* Lower pocket zipper route */}
            <path
              d="M 41,107 C 41,107 100,117 159,107"
              stroke="#1E293B"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 41,107 C 41,107 100,117 159,107"
              stroke="#94A3B8"
              strokeWidth="1.2"
              strokeDasharray="3,2"
              fill="none"
            />

            {/* Lower pocket zipper slider */}
            <g transform="translate(130, 111) rotate(6)">
              <rect x="-1.5" y="-3.5" width="3" height="7" rx="1.1" fill="#F1F5F9" stroke="#0F172A" strokeWidth="0.5" />
              <path d="M 0,3.5 L 0,10" stroke="#F1F5F9" strokeWidth="1.4" strokeLinecap="round" />
            </g>

            {/* Brand Label on lower pocket side */}
            <rect x="135" y="145" width="22" height="6" rx="1.5" fill="#111827" stroke="#374151" strokeWidth="0.5" />
            <text x="146" y="149.2" fill="#9CA3AF" fontSize="3.5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
              JUNIOR
            </text>

            {/* Reflection Highlight on front sphere representing curvature */}
            <ellipse cx="100" cy="160" rx="55" ry="50" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.04" />
          </>
        )}
      </svg>
    </div>
  );
};
