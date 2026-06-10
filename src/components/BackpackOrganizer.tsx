import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BackpackProduct, PackingItem } from '../types';
import { ShieldAlert, Info, Scale, Weight, Briefcase, Plus, Minus, Check, AlertTriangle, HelpCircle } from 'lucide-react';
import { BackpackVector } from './PatternPreview';

interface BackpackOrganizerProps {
  products: BackpackProduct[];
  selectedProduct: BackpackProduct;
  onSelectProduct: (product: BackpackProduct) => void;
}

const SCHOOL_ITEMS: PackingItem[] = [
  { id: 'laptop', name: '15.6" Laptop & Charger', icon: '💻', weightGrams: 1800, sizeLiters: 1.8, category: 'electronics' },
  { id: 'math', name: 'Thick Math & Science Books', icon: '📚', weightGrams: 1600, sizeLiters: 2.2, category: 'study' },
  { id: 'binders', name: 'A4 Ring Binder & Notebooks', icon: '📁', weightGrams: 900, sizeLiters: 1.5, category: 'study' },
  { id: 'lunchbox', name: 'Insulated Lunchbox with Flask', icon: '🍱', weightGrams: 650, sizeLiters: 2.0, category: 'essentials' },
  { id: 'bottle', name: 'Stainless steel 1L Bottle', icon: '🍼', weightGrams: 1200, sizeLiters: 1.0, category: 'essentials' },
  { id: 'pencilcase', name: 'Stationery & Geometrical Box', icon: '✏️', weightGrams: 300, sizeLiters: 0.6, category: 'study' },
  { id: 'headphones', name: 'Wireless Noise-Cancel Headset', icon: '🎧', weightGrams: 280, sizeLiters: 0.8, category: 'leisure' },
  { id: 'jacket', name: 'Kids Rain Jacket / Hoodie', icon: '🧥', weightGrams: 400, sizeLiters: 1.6, category: 'leisure' },
  { id: 'umbrella', name: 'Compact Folded Umbrella', icon: '🌂', weightGrams: 350, sizeLiters: 0.4, category: 'essentials' },
];

export const BackpackOrganizer: React.FC<BackpackOrganizerProps> = ({
  products,
  selectedProduct,
  onSelectProduct,
}) => {
  const [packedIds, setPackedIds] = useState<string[]>(['math', 'notebooks', 'pencilcase', 'bottle']);
  const [studentWeightKg, setStudentWeightKg] = useState<number>(35); // For ergonomic ratio

  // Check if item is packed
  const isPacked = (itemId: string) => packedIds.includes(itemId);

  // Toggle packed state
  const togglePacked = (itemId: string) => {
    if (packedIds.includes(itemId)) {
      setPackedIds(packedIds.filter(id => id !== itemId));
    } else {
      setPackedIds([...packedIds, itemId]);
    }
  };

  // Calculations
  const packedItems = SCHOOL_ITEMS.filter(it => isPacked(it.id));
  const totalVolumeLiters = packedItems.reduce((acc, it) => acc + it.sizeLiters, 0);
  const totalWeightKg = packedItems.reduce((acc, it) => acc + it.weightGrams, 0) / 1000;
  
  // High-fidelity capacity rate
  const fillPercentage = Math.min(100, (totalVolumeLiters / selectedProduct.capacity) * 100);
  
  // Health limit calculation: Recommended backpack weight is 10-15% of body weight
  const safeWeightLimit = parseFloat((studentWeightKg * 0.12).toFixed(1));
  const isOverweightRatio = totalWeightKg > safeWeightLimit;

  return (
    <div id="organizer-sim" className="bg-slate-900 text-slate-100 rounded-3xl p-6 md:p-8 lg:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Absolute ambient lights */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header section with instructions */}
      <div className="max-w-3xl mb-8 relative z-10">
        <span className="text-xs font-bold text-sky-400 font-mono uppercase tracking-widest bg-sky-950/50 border border-sky-800/30 px-3 py-1 rounded-full">
          Interactive Packing Simulator
        </span>
        <h2 className="text-2xl md:text-4xl font-sans font-bold tracking-tight text-white mt-3 mb-2">
          Backpack Organizer Lab
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          Test drive and pre-pack the junior backpacks. Select a model to swap dimensions, load custom school items, and test safe pediatric weight balance for spinal safety.
        </p>
      </div>

      {/* Main Grid: Selector, Organizer details, 2D Graphic preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* LEFT COLUMN: Bag selection & Vector demonstration (4 spans) */}
        <div className="lg:col-span-4 flex flex-col items-center justify-between bg-slate-950/40 p-5 rounded-2xl border border-slate-800">
          <div className="w-full text-center mb-4">
            <label className="text-xs font-bold text-slate-400 block mb-2 uppercase tracking-wide">
              Selected Bag Model:
            </label>
            <div className="flex flex-wrap gap-1.5 justify-center mb-4">
              {products.map(p => (
                <button
                  key={p.id}
                  onClick={() => onSelectProduct(p)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-slate-800 transition cursor-pointer ${
                    p.id === selectedProduct.id
                      ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-300'
                  }`}
                >
                  {p.name.replace(' Backpack', '')}
                </button>
              ))}
            </div>
          </div>

          {/* Large dynamic Vector representation */}
          <div className="w-48 h-56 flex items-center justify-center relative mb-4">
            {/* Visual background radar */}
            <div className="absolute inset-0 bg-sky-500/5 rounded-full animate-pulse border border-sky-500/10" />
            <BackpackVector patternType={selectedProduct.patternType} className="max-w-full max-h-full" />
          </div>

          {/* Basic model stats */}
          <div className="w-full space-y-2 pt-2 border-t border-slate-800">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Volumetric Volume:</span>
              <span className="text-sky-300 font-bold">{selectedProduct.capacity} Liters</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Pocket Slots:</span>
              <span className="text-sky-300 font-bold">{selectedProduct.compartments} Compartments</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Unloaded Weight:</span>
              <span className="text-sky-300 font-bold">{(selectedProduct.weight/1000).toFixed(2)} kg</span>
            </div>
          </div>
        </div>

        {/* MIDDLE COLUMN: Packing Materials Shelf (5 spans) */}
        <div className="lg:col-span-5 flex flex-col bg-slate-950/20 p-5 rounded-2xl border border-slate-800/80">
          <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-800">
            <h3 className="font-bold text-sm text-slate-300 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-sky-400" />
              School Materials Shelf
            </h3>
            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-sm">
              {packedItems.length} Loaded
            </span>
          </div>

          {/* List of items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 flex-1 max-h-[380px] overflow-y-auto pr-1">
            {SCHOOL_ITEMS.map(item => {
              const active = isPacked(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => togglePacked(item.id)}
                  className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer select-none transition-all duration-200 ${
                    active
                      ? 'bg-indigo-900/30 border-indigo-500/80 text-white'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="text-xs font-bold font-sans tracking-wide">
                        {item.name}
                      </h4>
                      <div className="flex gap-2 items-center text-[10px] text-slate-500 font-mono mt-0.5">
                        <span>{(item.weightGrams/1000).toFixed(2)}kg</span>
                        <span>•</span>
                        <span>{item.sizeLiters}L</span>
                      </div>
                    </div>
                  </div>

                  <button className={`w-6 h-6 rounded-full flex items-center justify-center transition ${
                    active ? 'bg-indigo-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {active ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3.5 h-3.5" />}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Quick Body Weight Setup for Spinal Guard Health ratio */}
          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between bg-slate-950/40 p-3 rounded-xl gap-2">
            <div className="text-xs">
              <span className="font-bold text-slate-300 block">Student Body Weight:</span>
              <span className="text-[10px] text-slate-500">Calculates healthy spinal limits</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setStudentWeightKg(Math.max(15, studentWeightKg - 2))}
                className="w-7 h-7 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-lg flex items-center justify-center cursor-pointer text-xs"
              >
                -
              </button>
              <span className="font-mono text-sm font-black text-sky-400 min-w-10 text-center">
                {studentWeightKg} kg
              </span>
              <button
                onClick={() => setStudentWeightKg(Math.min(90, studentWeightKg + 2))}
                className="w-7 h-7 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-lg flex items-center justify-center cursor-pointer text-xs"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Diagnostic telemetry & fill status (3 spans) */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          
          {/* Diagnostic 1: Volumetric fill level */}
          <div className="bg-slate-950/40 p-4 border border-slate-800 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider font-mono block">
                Filling capacity rate:
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-black font-sans text-sky-400">
                  {totalVolumeLiters.toFixed(1)}
                </span>
                <span className="text-slate-400 text-xs">/ {selectedProduct.capacity} Liters used</span>
              </div>
            </div>

            {/* Visual Meter */}
            <div className="w-full h-3.5 bg-slate-800 rounded-full overflow-hidden mt-3.5 p-0.5 border border-slate-900">
              <motion.div
                className={`h-full rounded-full ${
                  fillPercentage > 95 ? 'bg-rose-500' : fillPercentage > 75 ? 'bg-amber-400' : 'bg-emerald-500'
                }`}
                style={{ width: `${fillPercentage}%` }}
                layoutId="volMeter"
              />
            </div>
            <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
              <span>0% Empty</span>
              <span>{Math.round(fillPercentage)}%</span>
              <span>100% Full</span>
            </div>
          </div>

          {/* Diagnostic 2: Weight Spinal Guard meter */}
          <div className="bg-slate-950/40 p-4 border border-slate-800 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider font-mono block">
                Spinal Load Telemetry:
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-black font-sans text-emerald-400">
                  {(totalWeightKg + selectedProduct.weight/1000).toFixed(2)}
                </span>
                <span className="text-slate-400 text-xs">kg Total Load</span>
              </div>
            </div>

            {/* Safe zone calculation details */}
            <div className="mt-3 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <div className="flex justify-between font-mono">
                <span>Healthy Limit (12%):</span>
                <span className="text-amber-400 font-bold">{safeWeightLimit} kg</span>
              </div>
              <div className="flex justify-between font-mono">
                <span>Bag Net Weight:</span>
                <span>{(selectedProduct.weight/1000).toFixed(2)} kg</span>
              </div>
            </div>

            {/* Safety Assessment Indicator */}
            <AnimatePresence mode="wait">
              {isOverweightRatio ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-start gap-2 bg-rose-950/40 text-rose-300 p-3 rounded-xl border border-rose-800 mt-3 text-xs"
                >
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5 fill-rose-950" />
                  <div>
                    <span className="font-bold block">Spinal Load Warning!</span>
                    Exceeds healthy safe levels. Remove a couple of books or heavy files.
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-start gap-2 bg-emerald-950/40 text-emerald-300 p-3 rounded-xl border border-emerald-800 mt-3 text-xs"
                >
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Spine Guard Approved!</span>
                    Safe diagnostic weight. Ergonomic strap padding matches this load comfortably.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick pack overview / schematic */}
          <div className="bg-slate-950/40 p-4 border border-slate-800 rounded-2xl flex-1 flex flex-col justify-center">
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider font-mono block mb-3 text-center">
              Compartment Schematic
            </span>
            {packedItems.length === 0 ? (
              <p className="text-xs text-slate-600 italic text-center p-4">
                No items packed. Use the shelf to items pack!
              </p>
            ) : (
              <div className="flex flex-wrap gap-1 px-1 justify-center max-h-[110px] overflow-y-auto">
                {packedItems.map(item => (
                  <span
                    key={item.id}
                    className="inline-flex items-center gap-1 bg-slate-900 border border-slate-850 px-2 py-0.5 rounded-md text-[10px] text-slate-300 font-mono"
                  >
                    <span>{item.icon}</span>
                    <span>{item.id}</span>
                  </span>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
