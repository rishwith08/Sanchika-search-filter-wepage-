import React from 'react';
import { BackpackProduct } from '../types';
import { Check, X, CircleCheck, HelpCircle, Layers, Droplets, Laptop, Sparkles } from 'lucide-react';
import { BackpackVector } from './PatternPreview';

interface CompareSectionProps {
  products: BackpackProduct[];
  selectedIds: string[];
  onToggleSelect: (productId: string) => void;
  onAddToCart: (product: BackpackProduct, qty: number, color?: string) => void;
}

export const CompareSection: React.FC<CompareSectionProps> = ({
  products,
  selectedIds,
  onToggleSelect,
  onAddToCart,
}) => {
  const comparedProducts = products.filter(p => selectedIds.includes(p.id));

  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-6 md:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <span className="text-xs font-bold text-sky-600 font-mono uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full">
            Specification Analyzer
          </span>
          <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-slate-850 mt-3">
            Compare Sanchika Models
          </h2>
          <p className="text-slate-500 text-xs mt-1">
            Toggle checkboxes to place up to 5 backpacks side-by-side. Analyze dimensions, materials, and price.
          </p>
        </div>

        {/* Quick check selectors for all models */}
        <div className="flex flex-wrap gap-2">
          {products.map(p => {
            const isCompared = selectedIds.includes(p.id);
            return (
              <button
                key={p.id}
                onClick={() => onToggleSelect(p.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide flex items-center gap-1.5 transition cursor-pointer select-none ${
                  isCompared
                    ? 'bg-sky-500 text-white shadow-xs'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/60'
                }`}
              >
                {isCompared ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : null}
                {p.name.replace(' Backpack', '')}
              </button>
            );
          })}
        </div>
      </div>

      {comparedProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
          <HelpCircle className="w-10 h-10 text-slate-400 mb-2 animate-bounce" />
          <h3 className="font-bold text-slate-700 text-sm">No items checked for comparison</h3>
          <p className="text-xs text-slate-500 text-center max-w-sm mt-1">
            Tap on individual backpack toggles above to analyze specs side-by-side!
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[650px] md:min-w-full">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="py-4 text-xs font-bold text-slate-400 uppercase tracking-wider w-1/5">Product details</th>
                {comparedProducts.map(p => (
                  <th key={p.id} className="py-4 px-4 text-xs font-bold text-slate-800 uppercase tracking-wider text-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-20 flex items-center justify-center bg-slate-50 rounded-xl p-2">
                        <BackpackVector patternType={p.patternType} isInteractive={false} />
                      </div>
                      <span className="font-sans font-bold text-[13px]">{p.name.replace(' Backpack', '')}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Row 1: Sale Price */}
              <tr className="border-b border-slate-50 bg-slate-50/20">
                <td className="py-4 text-xs font-bold text-slate-500">Sale Price</td>
                {comparedProducts.map(p => (
                  <td key={p.id} className="py-4 px-4 text-center font-bold text-slate-950 font-sans text-sm">
                    ₹{p.price.toLocaleString('en-IN')}
                    <span className="block text-[10px] text-slate-400 line-through font-normal mt-0.5">
                      ₹{p.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Row 2: Tagline / Artwork Style */}
              <tr className="border-b border-slate-50">
                <td className="py-4 text-xs font-bold text-slate-500">Artwork style</td>
                {comparedProducts.map(p => (
                  <td key={p.id} className="py-4 px-4 text-center text-xs text-slate-600 font-mono italic">
                    "{p.tagline}"
                  </td>
                ))}
              </tr>

              {/* Row 3: Liter Capacity */}
              <tr className="border-b border-slate-50 bg-slate-50/10">
                <td className="py-4 text-xs font-bold text-slate-500 flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-slate-400" />
                  Liters Capacity
                </td>
                {comparedProducts.map(p => (
                  <td key={p.id} className="py-4 px-4 text-center font-extrabold text-slate-800">
                    {p.capacity} L <span className="text-[10px] text-slate-400 font-normal">(Double Zip)</span>
                  </td>
                ))}
              </tr>

              {/* Row 4: Dimensions */}
              <tr className="border-b border-slate-50">
                <td className="py-4 text-xs font-bold text-slate-400 font-mono">Dimensions</td>
                {comparedProducts.map(p => (
                  <td key={p.id} className="py-4 px-4 text-center text-xs text-slate-600 font-mono font-semibold">
                    {p.dimensions}
                  </td>
                ))}
              </tr>

              {/* Row 5: Weight (unpacked) */}
              <tr className="border-b border-slate-50 bg-slate-50/10">
                <td className="py-4 text-xs font-bold text-slate-500">Net Weight</td>
                {comparedProducts.map(p => (
                  <td key={p.id} className="py-4 px-4 text-center text-xs text-slate-700 font-bold font-mono">
                    {p.weight} grams <span className="text-[10px] font-normal text-slate-400">({(p.weight/1000).toFixed(2)} kg)</span>
                  </td>
                ))}
              </tr>

              {/* Row 6: Weather Guard Coating */}
              <tr className="border-b border-slate-50">
                <td className="py-4 text-xs font-bold text-slate-400 flex items-center gap-1">
                  <Droplets className="w-3.5 h-3.5 text-slate-450" />
                  Water barrier
                </td>
                {comparedProducts.map(p => (
                  <td key={p.id} className="py-4 px-4 text-center">
                    <span className="inline-block bg-sky-50 text-sky-700 font-bold text-[10px] px-2.5 py-1 rounded-full border border-sky-100">
                      {p.waterResistance}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Row 7: Laptop Slot */}
              <tr className="border-b border-slate-50 bg-slate-50/10">
                <td className="py-4 text-xs font-bold text-slate-500 flex items-center gap-1">
                  <Laptop className="w-3.5 h-3.5 text-slate-400" />
                  Laptop sleeve
                </td>
                {comparedProducts.map(p => (
                  <td key={p.id} className="py-4 px-4 text-center text-xs text-slate-850 font-semibold">
                    Fits up to {p.laptopSize}
                  </td>
                ))}
              </tr>

              {/* Row 8: Design highlights */}
              <tr className="border-b border-slate-50">
                <td className="py-4 text-xs font-bold text-slate-500">Design Highlight</td>
                {comparedProducts.map(p => (
                  <td key={p.id} className="py-4 px-4 text-center text-[11px] text-slate-600 max-w-[180px]">
                    <div className="flex flex-col gap-1 items-center">
                      {p.features.slice(0, 3).map((feat, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1 font-medium bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md text-[10px] text-slate-600">
                          <CircleCheck className="w-3 h-3 text-emerald-500 shrink-0" />
                          {feat}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Row 9: Add-to-cart launcher */}
              <tr>
                <td className="py-4"></td>
                {comparedProducts.map(p => (
                  <td key={p.id} className="py-4 px-4 text-center">
                    <button
                      onClick={() => onAddToCart(p, 1)}
                      className="cursor-pointer inline-flex items-center gap-1.5 bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs uppercase px-4 py-2.5 rounded-xl transition shadow-xs"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-sky-400 fill-sky-300" />
                      Add to Sanchika
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
