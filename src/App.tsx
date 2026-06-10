import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BackpackProduct, CartItem } from './types';
import { HeroBanner } from './components/HeroBanner';
import { ProductCard } from './components/ProductCard';
import { BackpackOrganizer } from './components/BackpackOrganizer';
import { CompareSection } from './components/CompareSection';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import {
  ShoppingBag,
  Search,
  SlidersHorizontal,
  ChevronDown,
  Sparkles,
  Shield,
  Truck,
  RotateCcw,
  Star,
  Info,
  HelpCircle,
} from 'lucide-react';

const PRODUCTS_DATA: BackpackProduct[] = [
  {
    id: 'b-galaxy',
    name: 'Galaxy Junior Backpack',
    price: 1599,
    originalPrice: 2299,
    tagline: 'Deep cosmic exploration print for future astronauts',
    description: 'An elegant starry backpack featuring asteroids, planet orbits, and spacecraft graphics. Fitted with heavy-duty weather barrier coating and ergonomic back cushions.',
    capacity: 24,
    weight: 480,
    dimensions: '44 x 30 x 17 cm',
    compartments: 2,
    waterResistance: 'Water Resistant',
    laptopSize: '14 inches',
    features: ['Constellation safety reflective strip', 'Breathable anti-sweat mesh', 'Heavy double compartment zips', 'Mesh elastic side sleeves'],
    patternType: 'galaxy',
    baseColor: '#0B0914',
    accentColor: '#38BDF8',
    rating: 4.8,
    reviewsCount: 34,
    tags: ['Space', 'Dark Theme', 'Reflective Strip'],
  },
  {
    id: 'b-blossom',
    name: 'Blossom Pastel Meadow Backpack',
    price: 1649,
    originalPrice: 2399,
    tagline: 'Fresh Lavender & pastel blossom meadow motifs',
    description: 'A charming floral print backpack with rich purple, lavender, and sky pink flower patterns. Formulated with lightweight high-density weave fabric and curved chest support buckle straps.',
    capacity: 24,
    weight: 490,
    dimensions: '44 x 31 x 17 cm',
    compartments: 2,
    waterResistance: 'Splash Proof',
    laptopSize: '14 inches',
    features: ['Extra padded S-Strap padding', 'Quick hang key retainer clip', 'Double glide metal runners', 'Stain resistant exterior'],
    patternType: 'blossom',
    baseColor: '#A78BFA',
    accentColor: '#EC4899',
    rating: 4.9,
    reviewsCount: 42,
    tags: ['Floral', 'Bright Palette', 'Ergonomic Lock'],
  },
  {
    id: 'b-cubix',
    name: 'Cubix Retro Geometric Backpack',
    price: 1699,
    originalPrice: 2499,
    tagline: '8-bit retro gaming block art for creative minds',
    description: 'A striking retro retrowave pixel block design displaying orange, pink, and violet geometric shapes. Complete with a secure internal file folder binder sleeve.',
    capacity: 26,
    weight: 520,
    dimensions: '45 x 31 x 18 cm',
    compartments: 3,
    waterResistance: 'High Grade Water Repellent',
    laptopSize: '15.6 inches',
    features: ['Inner secret pencil container', 'A4 Ring binder support', 'Reflective security lining', 'Dual quick access mesh pockets'],
    patternType: 'cubix',
    baseColor: '#1E1E2E',
    accentColor: '#D946EF',
    rating: 4.7,
    reviewsCount: 29,
    tags: ['Geometric', 'Pixel Blocks', 'Triple Zip'],
  },
  {
    id: 'b-colorsplash',
    name: 'Colour Splash Doodles Backpack',
    price: 1749,
    originalPrice: 2599,
    tagline: 'Eclectic graffiti art and primary paint splatters',
    description: 'An imaginative backpack celebrating high-contrast graffiti sketches, smile splotches, and pop stars. Fitted with padded tech mesh backing and chest-weight balancer slips.',
    capacity: 28,
    weight: 550,
    dimensions: '46 x 32 x 19 cm',
    compartments: 3,
    waterResistance: 'High Grade Water Repellent',
    laptopSize: '15.6 inches',
    features: ['Chest weight distribution buckle', 'Anti-friction bottom guard panel', 'YKK robust industrial nylon zips', 'Fleece padded phone cell'],
    patternType: 'colourSplash',
    baseColor: '#1E3A8A',
    accentColor: '#3B82F6',
    rating: 4.8,
    reviewsCount: 38,
    tags: ['Graffiti', 'Doodles', 'Max Volume'],
  },
  {
    id: 'b-trisiac',
    name: 'Trisiac Poly-Grid Backpack',
    price: 1879,
    originalPrice: 2799,
    tagline: 'Slick low-poly triangle mosaic with "DIVE IN" print',
    description: 'A futuristic tech geometric low-poly triangular pattern model with gradated cyan, violet, and deep indigo shades. Heavy structural load-lifters support high density books.',
    capacity: 28,
    weight: 560,
    dimensions: '46 x 31 x 19 cm',
    compartments: 3,
    waterResistance: 'High Grade Water Repellent',
    laptopSize: '15.6 inches',
    features: ['Digital low-poly tech fabric', 'Ergonomic heavy structural loops', 'Breathable air-flow lumbar mesh', 'Concealed security wallet pouch'],
    patternType: 'trisiac',
    baseColor: '#0F172A',
    accentColor: '#06B6D4',
    rating: 4.9,
    reviewsCount: 51,
    tags: ['Low-Poly', 'Tech Premium', 'Concealed Safe'],
  },
  {
    id: 'b-quantum',
    name: 'Quantum Active Crimson Backpack',
    price: 1599,
    originalPrice: 2199,
    tagline: 'Crimson maroon with numeric graphic panel pocket',
    description: 'An athletic bold maroon backpack with modern diagonal division lines and a numeric graphic front pocket. Ideal for combined sports practice and study hours.',
    capacity: 25,
    weight: 500,
    dimensions: '44 x 31 x 18 cm',
    compartments: 2,
    waterResistance: 'Water Resistant',
    laptopSize: '14 inches',
    features: ['Athletic mesh bottle sleeves', 'Anti-sweat breathable S-Strap', 'Front utility quick pocket', 'Reinforced stitch points'],
    patternType: 'quantum',
    baseColor: '#7F1D1D',
    accentColor: '#EF4444',
    rating: 4.6,
    reviewsCount: 19,
    tags: ['Athletic', 'Numeric Graphic', 'Maroon'],
  },
  {
    id: 'b-comic',
    name: 'Comic Book Bubble Sketch Backpack',
    price: 1699,
    originalPrice: 2399,
    tagline: 'Retro comic sketching in dual charcoal grey shades',
    description: 'A charming retro layout styled with monochrome pop comic panels, lightning bolts, and action bubbles showing "POW!" or "BOOM!". Clean textured grey upper shelf fabric.',
    capacity: 26,
    weight: 510,
    dimensions: '45 x 30 x 18 cm',
    compartments: 2,
    waterResistance: 'Splash Proof',
    laptopSize: '15.6 inches',
    features: ['Monochrome comic sketch art', 'Fleece padded tablet safe slot', 'Ergonomic top grip loop handle', 'Double track metal glide zippers'],
    patternType: 'comic',
    baseColor: '#334155',
    accentColor: '#94A3B8',
    rating: 4.7,
    reviewsCount: 22,
    tags: ['Comic Sketch', 'Retro Pop', 'Double Zip'],
  }
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTag, setActiveTag] = useState<string>('All');
  const [maxPrice, setMaxPrice] = useState<number>(1900);
  const [sortBy, setSortBy] = useState<'rating' | 'price-asc' | 'price-desc'>('rating');
  
  // Shopping Cart state
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Compare Checklist state
  // Initial comparisons: Let's compare Galaxy, Blossom and Trisiac by default!
  const [compareIds, setCompareIds] = useState<string[]>(['b-galaxy', 'b-blossom', 'b-trisiac']);

  // Quick View Modal product
  const [quickViewProduct, setQuickViewProduct] = useState<BackpackProduct | null>(null);

  // Active product in Organizer packing lab
  const [organizerProduct, setOrganizerProduct] = useState<BackpackProduct>(PRODUCTS_DATA[0]);

  // Handle Add To Cart
  const handleAddToCart = (product: BackpackProduct, qty: number, color?: string) => {
    const existingIndex = cart.findIndex(item => item.product.id === product.id);
    if (existingIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += qty;
      setCart(updatedCart);
    } else {
      setCart([...cart, { product, quantity: qty, selectedColor: color || product.baseColor }]);
    }
    // Launch sidebar Drawer
    setIsCartOpen(true);
  };

  const handleUpdateQty = (index: number, newQty: number) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQty;
    setCart(updatedCart);
  };

  const handleRemoveItem = (index: number) => {
    const updatedCart = cart.filter((_, idx) => idx !== index);
    setCart(updatedCart);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleCompareToggle = (id: string) => {
    if (compareIds.includes(id)) {
      setCompareIds(compareIds.filter(cid => cid !== id));
    } else {
      if (compareIds.length >= 5) {
        alert("You can compare up to 5 models side-by-side!");
        return;
      }
      setCompareIds([...compareIds, id]);
    }
  };

  // Filtering products
  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag = activeTag === 'All' || p.tags.includes(activeTag) || (activeTag === 'Under 1700' && p.price < 1700) || (activeTag === '28 Liters' && p.capacity === 28);
    const matchesPrice = p.price <= maxPrice;

    return matchesSearch && matchesTag && matchesPrice;
  });

  // Sorting products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  const cartTotalItems = cart.reduce((acc, it) => acc + it.quantity, 0);

  const exploreSectionScroll = () => {
    const el = document.getElementById('catalog-explore');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans select-text">
      
      {/* HEADER SECTION CONTROLS */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 px-4 md:px-8 py-3.5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Logo Badge Mascot */}
          <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-extrabold text-lg select-none shadow-md shadow-slate-900/10">
            S
          </div>
          <div>
            <span className="text-[9px] uppercase font-bold tracking-widest text-[#EF4444] font-mono leading-none block">
              Sanchika Bags Premium
            </span>
            <h1 className="text-sm font-black text-slate-900 tracking-tight leading-none mt-1">
              Junior Edition S-Series
            </h1>
          </div>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-6 text-xs font-bold text-slate-500 uppercase tracking-wide">
            <a href="#catalog-explore" className="hover:text-slate-900 transition">Catalog</a>
            <a href="#organizer-sim" className="hover:text-slate-900 transition flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-sky-500 fill-sky-200" />
              Packing Lab
            </a>
            <a href="#faqs" className="hover:text-slate-900 transition">Care Guides</a>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="cursor-pointer relative bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs uppercase px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-xs transition"
          >
            <ShoppingBag className="w-4 h-4 text-sky-300" />
            <span>Cart</span>
            {cartTotalItems > 0 && (
              <span className="bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold absolute -top-1.5 -right-1.5 animate-pulse">
                {cartTotalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* WHIMSICAL HERO BANNER WITH FLIGHT SEAGULLS & KITE */}
      <HeroBanner onExploreClick={exploreSectionScroll} />

      {/* THREE PILLAR STATS COMPACT HUD */}
      <div className="bg-white border-y border-slate-100 py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center select-none">
          <div className="flex flex-col items-center p-2.5">
            <div className="w-11 h-11 bg-sky-50 text-sky-600 rounded-full flex items-center justify-center mb-3 border border-sky-100">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-800 text-sm">Spine Guard certified</h4>
            <p className="text-slate-500 text-xs mt-1 max-w-xs">
              S-shaped padded lumbar straps designed to distribute heavy workloads seamlessly and prevent fatigue.
            </p>
          </div>

          <div className="flex flex-col items-center p-2.5 border-t border-slate-100 md:border-t-0 md:border-x border-slate-200/50">
            <div className="w-11 h-11 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-3 border border-amber-100">
              <Truck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-800 text-sm">Free Express Shipping</h4>
            <p className="text-slate-500 text-xs mt-1 max-w-xs">
              Instant priority logistics dispatch across India. Free delivery on all orders above ₹1,500.
            </p>
          </div>

          <div className="flex flex-col items-center p-2.5 border-t border-slate-100 md:border-t-0">
            <div className="w-11 h-11 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-3 border border-emerald-100">
              <RotateCcw className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-800 text-sm">7-Day Replacement window</h4>
            <p className="text-slate-500 text-xs mt-1 max-w-xs">
              Unsatisfied with the pattern or size? Exchange for any of the other five designs with pick-up support.
            </p>
          </div>
        </div>
      </div>

      {/* CORE CATALOG ROOM */}
      <main id="catalog-explore" className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-16 flex-1 w-full">
        
        {/* Filter panel block */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-xs font-bold text-sky-600 font-mono uppercase tracking-widest">
                Our Collection
              </span>
              <h2 className="text-3xl font-sans font-black tracking-tight text-slate-900 mt-1">
                Explore Junior Backpacks
              </h2>
            </div>

            {/* Price Slider selector */}
            <div className="flex items-center gap-3.5 bg-white border border-slate-150 px-4 py-2 rounded-2xl w-full md:w-auto shadow-xs justify-between">
              <span className="text-xs text-slate-500 font-bold">Max Price:</span>
              <input
                type="range"
                min="1590"
                max="1900"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="accent-slate-900 cursor-pointer w-28 md:w-36 h-1 bg-slate-200 rounded-lg appearance-none"
              />
              <span className="font-mono text-xs font-extrabold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md">
                ₹{maxPrice}
              </span>
            </div>
          </div>

          {/* Search, Tag buttons HUD */}
          <div className="flex flex-col lg:flex-row gap-4 justify-between">
            {/* Search inputs bar */}
            <div className="relative flex-1 max-w-lg">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search constellations, space, florals, retro pixel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white border border-slate-200/80 rounded-2xl pl-11 pr-4 py-3.5 text-xs w-full focus:outline-none focus:border-sky-500 font-medium text-slate-800"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter buttons row */}
            <div className="flex flex-wrap items-center gap-1.5 scrollbar-thin">
              {['All', 'Space', 'Geometric', 'Floral', 'Graffiti', 'Under 1700', '28 Liters'].map((tg) => (
                <button
                  key={tg}
                  onClick={() => setActiveTag(tg)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer select-none border ${
                    activeTag === tg
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-200'
                  }`}
                >
                  {tg}
                </button>
              ))}

              <span className="text-slate-300 px-1 hidden sm:inline">|</span>

              {/* Sort By selects */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="cursor-pointer bg-white border border-slate-200 text-slate-600 rounded-xl px-3 py-2 text-xs font-bold focus:outline-none focus:border-sky-500 appearance-none pr-8"
                >
                  <option value="rating">Sort: High Rating</option>
                  <option value="price-asc">Sort: Price Low → High</option>
                  <option value="price-desc">Sort: Price High → Low</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* SEPARATE PRODUCTS DISPLAY GRID */}
        {sortedProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center text-slate-400 bg-white rounded-3xl border border-slate-100">
            <SlidersHorizontal className="w-12 h-12 text-slate-200 mb-2 animate-bounce" />
            <h3 className="font-bold text-slate-750 text-base">No backpacks match your filters</h3>
            <p className="text-xs text-slate-500 max-w-sm mt-1">
              Try adjusting your maximum price slider, search text query, or select "All" categories tag!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {sortedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onAddToCart={handleAddToCart}
                  onQuickView={(p) => setQuickViewProduct(p)}
                />
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* DYNAMIC PACKING LAB SIMULATOR FOR CHILDREN */}
        <BackpackOrganizer
          products={PRODUCTS_DATA}
          selectedProduct={organizerProduct}
          onSelectProduct={(p) => {
            setOrganizerProduct(p);
            // Sync quick overview
          }}
        />

        {/* COMPARISON SPEC BOARD */}
        <CompareSection
          products={PRODUCTS_DATA}
          selectedIds={compareIds}
          onToggleSelect={handleCompareToggle}
          onAddToCart={handleAddToCart}
        />

        {/* PEDAGOGICAL CARE GUIDELINE & FAQ ACCORDION */}
        <section id="faqs" className="bg-slate-50/50 p-6 md:p-8 rounded-3xl border border-slate-150 relative overflow-hidden max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="text-xs font-bold text-sky-600 font-mono uppercase tracking-widest">
              Guideline Base
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mt-2">
              Backpacking Healthy Spinal Guides
            </h3>
          </div>

          <div className="space-y-4 text-xs md:text-sm">
            <div className="bg-white p-4.5 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-800">1. Adjusting Pediatric Shoulder Straps:</h4>
              <p className="text-slate-600 leading-relaxed">
                Adjust Sanchika double shoulder straps until the backpack sits snug against the shoulder blade curves. The base of the backpack should terminate ideally 2 inches above the waist belt line to shield the lower back from lumbar compression.
              </p>
            </div>

            <div className="bg-white p-4.5 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-800">2. Weight Allocation within Pockets:</h4>
              <p className="text-slate-600 leading-relaxed">
                Pack heaviest materials (e.g. tablet, thick binders, science textbooks) inside the back slot pocket nearest the spinal column. Place lighter items (lunch boxes, pencil cases, compass kits) in outer compartment sections to keep load levers low.
              </p>
            </div>

            <div className="bg-white p-4.5 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-800">3. Is Sanchika Waterproof?</h4>
              <p className="text-slate-600 leading-relaxed">
                Yes! Every backpack is formulated with dense 900D weatherproof polyester canvas coated with an internal polyurethane layer to keep water out during monsoon travel. It easily handles regular downpours with quick dry attributes.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 md:px-8 text-center border-t border-slate-800 mt-auto select-none">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-white text-lg font-bold font-sans tracking-tight">
            Aristocrat Sanchika Junior Collection
          </h2>
          <p className="text-xs max-w-md mx-auto text-slate-500 leading-relaxed">
            All designs separately displays premium illustrations corresponding with Galaxy, Blossom, Cubix, Colour Splash, Trisiac, Quantum, and Comic editions with guaranteed pricing from 1599 to 1879.
          </p>
          <div className="flex justify-center gap-4 text-[10px] font-mono tracking-widest uppercase py-2">
            <span>Pediatric Approved</span>
            <span>•</span>
            <span>900D Weather Barrier</span>
            <span>•</span>
            <span>Free Shipping</span>
          </div>
          <div className="text-[10px] text-slate-600 pt-3 border-t border-slate-800">
            © 2026 Sanchika Bags India Private Ltd. All rights reserved. Registered trademark labels.
          </div>
        </div>
      </footer>

      {/* FLYOUT SLIDING CART DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveItem={handleRemoveItem}
        onUpdateQty={handleUpdateQty}
        onClearCart={handleClearCart}
      />

      {/* DYNAMIC SPEC OVERLAY QUICK VIEW MODAL */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

    </div>
  );
}
