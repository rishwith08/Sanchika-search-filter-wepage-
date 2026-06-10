import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, ShieldAlert, BadgeInfo, CheckCircle, Flame, Droplets, Laptop, Sparkles, Layers } from 'lucide-react';
import { BackpackProduct } from '../types';
import { BackpackVector } from './PatternPreview';

interface ProductCardProps {
  product: BackpackProduct;
  onAddToCart: (product: BackpackProduct, qty: number, color?: string) => void;
  onQuickView: (product: BackpackProduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onQuickView,
}) => {
  const [selectedColor, setSelectedColor] = useState<string>(product.baseColor);
  const [quantity, setQuantity] = useState<number>(1);
  const [isCopiedId, setIsCopiedId] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'details' | 'features'>('details');
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    onAddToCart(product, quantity, selectedColor);
    // Visual feedback
    setQuantity(1);
  };

  return (
    <motion.div
      id={`backpack-card-${product.id}`}
      layout
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className="flex flex-col bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative group"
    >
      {/* Discount Badge */}
      <div id={`tag-discount-${product.id}`} className="absolute top-4 left-4 z-10 bg-rose-500 text-white font-bold text-xs uppercase px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
        <Flame className="w-3.5 h-3.5 fill-rose-100" />
        {discountPercent}% OFF
      </div>

      {/* Liters Capacity tag */}
      <div id={`tag-capacity-${product.id}`} className="absolute top-4 right-4 z-10 bg-slate-900/80 backdrop-blur-md text-white font-medium text-xs px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
        <Layers className="w-3.5 h-3.5 text-sky-400" />
        {product.capacity}L Capacity
      </div>

      {/* Interactive Backpack Vector Frame */}
      <div
        id={`product-img-frame-${product.id}`}
        onClick={() => onQuickView(product)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full aspect-[4/3] bg-gradient-to-tr from-slate-50/50 to-slate-100/30 flex items-center justify-center p-6 cursor-pointer relative overflow-hidden group-hover:bg-slate-100/50 transition-colors"
      >
        <div className="w-40 h-48 flex items-center justify-center relative">
          <BackpackVector patternType={product.patternType} isBack={isHovered} className="max-w-full max-h-full" />
        </div>
        
        {/* Floating little indicator label */}
        <div className="absolute bottom-2 right-2 bg-slate-900/45 backdrop-blur-xs text-[8.5px] font-mono font-bold text-white px-2 py-0.5 rounded-md select-none pointer-events-none group-hover:opacity-0 transition-opacity">
          Hover for strap comfort view
        </div>

        {/* Rapid hover prompt */}
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-200 backdrop-blur-xs">
          <button className="bg-white text-slate-900 font-semibold text-xs py-2 px-4 rounded-xl shadow-lg flex items-center gap-1 hover:bg-slate-50">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500 fill-indigo-200" />
            Launch Backpack Lab
          </button>
        </div>
      </div>

      {/* Product Information Body */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Ratings and brand */}
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 font-mono">
            JUNIOR ORIGINAL
          </span>
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span className="text-xs font-bold text-amber-700">{product.rating}</span>
            <span className="text-[10px] text-amber-600/70 font-medium">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Title */}
        <h3 id={`title-${product.id}`} className="text-lg font-bold text-slate-800 tracking-tight group-hover:text-sky-600 transition-colors mb-1">
          {product.name}
        </h3>
        
        <p className="text-xs text-slate-500 italic mb-3">
          "{product.tagline}"
        </p>

        {/* Tabs for quick specs */}
        <div className="flex border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase gap-3 mb-3">
          <button
            onClick={() => setActiveTab('details')}
            className={`pb-1.5 border-b-2 cursor-pointer ${activeTab === 'details' ? 'border-sky-500 text-slate-800' : 'border-transparent hover:text-slate-600'}`}
          >
            Details
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`pb-1.5 border-b-2 cursor-pointer ${activeTab === 'features' ? 'border-sky-500 text-slate-800' : 'border-transparent hover:text-slate-600'}`}
          >
            Features List
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 text-xs mb-4 min-h-[95px] flex flex-col justify-center">
          {activeTab === 'details' ? (
            <div className="space-y-1 text-slate-600">
              <div className="flex justify-between pb-1 border-b border-dotted border-slate-100">
                <span className="text-slate-400 font-medium">Dimensions:</span>
                <span className="font-mono text-[11px] font-semibold text-slate-700">{product.dimensions}</span>
              </div>
              <div className="flex justify-between pb-1 border-b border-dotted border-slate-100">
                <span className="text-slate-400 font-medium">Structure compartments:</span>
                <span className="font-semibold text-slate-700">{product.compartments} Pockets</span>
              </div>
              <div className="flex justify-between pb-1 border-b border-dotted border-slate-100">
                <span className="text-slate-400 font-medium">Laptop Sleeve Support:</span>
                <span className="font-semibold text-slate-700 flex items-center gap-1">
                  <Laptop className="w-3.5 h-3.5 text-slate-500" />
                  Up to {product.laptopSize}
                </span>
              </div>
              <div className="flex justify-between pt-0.5">
                <span className="text-slate-400 font-medium">Weather barrier:</span>
                <span className="font-semibold text-sky-600 text-[11px] flex items-center gap-0.5">
                  <Droplets className="w-3.5 h-3.5 animate-pulse" />
                  {product.waterResistance}
                </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap gap-1.5 py-1">
              {product.features.map((feature, i) => (
                <span
                  key={i}
                  className="bg-slate-50 text-slate-600 border border-slate-100 px-2 py-1 rounded-lg text-[10px] font-medium"
                >
                  ✓ {feature}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Pricing tag block */}
        <div className="flex items-end justify-between border-t border-slate-100 pt-3.5 mt-auto">
          <div>
            <div className="flex items-center gap-2">
              <span id={`price-${product.id}`} className="text-xl font-extrabold text-slate-900 font-sans">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs line-through text-slate-400">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            </div>
            <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-sm">
              You Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
            </span>
          </div>

          {/* Quick Quantity input */}
          <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-2 py-1 hover:bg-slate-100 text-slate-500 font-bold text-sm cursor-pointer border-r border-slate-200"
            >
              -
            </button>
            <span className="px-2.5 text-xs text-slate-800 font-bold font-mono">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-2 py-1 hover:bg-slate-100 text-slate-500 font-bold text-sm cursor-pointer border-l border-slate-200"
            >
              +
            </button>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleAddToCart}
          className="w-full cursor-pointer bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs uppercase py-3 rounded-xl mt-4 tracking-wider flex items-center justify-center gap-2 transition-all hover:shadow-md"
        >
          <CheckCircle className="w-4 h-4 text-sky-400" />
          Add to Sanchika Bag
        </button>
      </div>
    </motion.div>
  );
};
