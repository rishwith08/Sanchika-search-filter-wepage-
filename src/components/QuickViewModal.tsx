import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BackpackProduct, CustomerReview } from '../types';
import { BackpackVector } from './PatternPreview';
import { X, Star, ShieldCheck, Mail, Calendar, MessageSquare, PlusCircle, CheckCircle } from 'lucide-react';

interface QuickViewModalProps {
  product: BackpackProduct | null;
  onClose: () => void;
  onAddToCart: (product: BackpackProduct, qty: number, color?: string) => void;
}

const INITIAL_REVIEWS: Record<string, CustomerReview[]> = {
  'galaxy': [
    { id: 'rev-1', author: 'Rohan Sharma', rating: 5, date: '2026-05-18', title: 'Absolute Favorite!', text: 'My son is obsessed with space and rockets. He loves walking to school showing off the galaxy drawings. Fabric quality feels extremely premium and easily survives heavy rain.', verified: true },
    { id: 'rev-2', author: 'Anita K.', rating: 4, date: '2026-04-20', title: 'Strong straps', text: 'Spacious compartments. Highly recommended for schoolchildren aged 7 to 12. Great ergonomic shoulder locks.', verified: true },
  ],
  'blossom': [
    { id: 'rev-3', author: 'Shereen Jacob', rating: 5, date: '2026-05-22', title: 'Elegantly beautiful', text: 'Beautiful patterns and lovely violet hue! My 9 year old daughter fits all her books, notebook binders, and water bottle seamlessly. Clean back padding prevents sweat.', verified: true },
  ],
  'cubix': [
    { id: 'rev-4', author: 'Vikas Roy', rating: 5, date: '2026-05-02', title: 'Stylishly robust', text: 'Pixel blocks design has this glowing feel. Laptop sleeve easily protects our tablet. Pockets are perfectly positioned for rapid keys and badge retrieval.', verified: true },
  ],
  'colourSplash': [
    { id: 'rev-5', author: 'Meera Deshmukh', rating: 5, date: '2026-05-10', title: 'Artistic Masterpiece', text: 'The graffiti drawings look so lively! Very unique from standard boring solid colors. Double stitching handles the weight of heavy workbooks easily.', verified: true },
  ],
  'trisiac': [
    { id: 'rev-6', author: 'Rahul Deshmukh', rating: 5, date: '2026-04-12', title: 'Modern geometric feel', text: 'High-tech triangular low-poly prints look fabulous. It is completely water repellent. Water bottle mesh holds thermos secure.', verified: true },
  ],
};

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [reviews, setReviews] = useState<Record<string, CustomerReview[]>>(INITIAL_REVIEWS);
  const [inputAuthor, setInputAuthor] = useState<string>('');
  const [inputRating, setInputRating] = useState<number>(5);
  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputText, setInputText] = useState<string>('');
  const [isSubmitSuccess, setIsSubmitSuccess] = useState<boolean>(false);

  if (!product) return null;

  const productReviews = reviews[product.patternType] || [];

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputAuthor.trim() || !inputText.trim() || !inputTitle.trim()) return;

    const newReview: CustomerReview = {
      id: `custom-rev-${Date.now()}`,
      author: inputAuthor.trim(),
      rating: inputRating,
      date: new Date().toISOString().split('T')[0],
      title: inputTitle.trim(),
      text: inputText.trim(),
      verified: true,
    };

    setReviews({
      ...reviews,
      [product.patternType]: [newReview, ...productReviews],
    });

    // Reset fields
    setInputAuthor('');
    setInputRating(5);
    setInputTitle('');
    setInputText('');
    setIsSubmitSuccess(true);

    setTimeout(() => {
      setIsSubmitSuccess(false);
    }, 4000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950 transition-opacity"
        />

        {/* Modal body sheet */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row relative shadow-2xl z-10 border border-slate-100"
        >
          {/* Close button top right */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full p-2.5 cursor-pointer transition"
          >
            <X className="w-4 h-4" />
          </button>

          {/* LEFT CONTAINER: Big graphical asset */}
          <div className="w-full md:w-1/2 bg-gradient-to-tr from-slate-50 to-slate-100/50 p-8 flex flex-col items-center justify-center relative min-h-[300px] md:min-h-0">
            {/* Ambient pattern backdrop label */}
            <span className="absolute top-10 font-mono text-[75px] font-black text-slate-200/40 select-none uppercase tracking-tighter">
              {product.patternType}
            </span>

            <div className="w-56 h-64 relative z-10">
              <BackpackVector patternType={product.patternType} />
            </div>

            {/* Quick materials label badge block */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-4.5 border border-slate-150/40 text-xs text-slate-650 max-w-xs mt-6 text-center shadow-xs">
              <span className="font-bold text-slate-800 block text-xs mb-1">
                900D Heavy duty Waterproof Polyester
              </span>
              Pediatric safety S-shaped cushion straps keep weight evenly distributed across shoulder lines.
            </div>
          </div>

          {/* RIGHT CONTAINER: Product telemetry stats and feedback room */}
          <div className="w-full md:w-1/2 flex flex-col max-h-[90vh] md:max-h-[85vh] overflow-y-auto p-6 md:p-8 space-y-6 text-slate-700 select-text">
            {/* Title, rating, tagline */}
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#EF4444] font-mono">
                Sanchika Premium Collection
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-2 mb-1">
                {product.name}
              </h2>
              <p className="text-slate-500 italic text-xs mb-2">
                "{product.tagline}"
              </p>
              
              <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full w-fit border border-slate-100 text-xs">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span className="font-bold text-slate-800">{product.rating} / 5</span>
                <span className="text-slate-400">({productReviews.length} total reviews)</span>
              </div>
            </div>

            {/* Price section */}
            <div className="bg-slate-50/65 rounded-2xl p-4.5 border border-slate-100 flex justify-between items-center">
              <div>
                <span className="text-[10px] uppercase font-mono text-slate-400 block tracking-wider">
                  Guaranteed Junior Pricing
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-extrabold text-slate-950 font-sans">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs line-through text-slate-400">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
              <button
                onClick={() => {
                  onAddToCart(product, 1);
                  onClose();
                }}
                className="cursor-pointer bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs uppercase px-5 py-3 rounded-xl transition shadow-xs"
              >
                Add to Sanchika Bag
              </button>
            </div>

            {/* Deep Specs info */}
            <div className="space-y-2">
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400 font-mono">
                Physical Specifications
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <span className="text-slate-400 block text-[10px]">Liters Volume</span>
                  <span className="font-bold text-slate-800 mt-0.5 block">{product.capacity} Liters</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <span className="text-slate-400 block text-[10px]">Net weight unpacked</span>
                  <span className="font-bold font-mono text-slate-800 mt-0.5 block">{product.weight} grams</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <span className="text-slate-400 block text-[10px]">Double compartmental zip</span>
                  <span className="font-bold text-slate-800 mt-0.5 block">{product.compartments} Large slots</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <span className="text-slate-400 block text-[10px]">Water barrier shield</span>
                  <span className="font-bold text-slate-800 mt-0.5 block">{product.waterResistance}</span>
                </div>
              </div>
            </div>

            {/* Reviews history section */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="font-bold text-slate-850 text-sm flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-sky-500" />
                Verified Customer Reviews
              </h3>

              {/* Render Review list */}
              <div className="space-y-3.5 max-h-[180px] overflow-y-auto pr-1">
                {productReviews.length === 0 ? (
                  <p className="text-xs text-slate-400 italic">No reviews yet. Be the first to write a review below!</p>
                ) : (
                  productReviews.map((rev) => (
                    <div key={rev.id} className="bg-slate-50/60 p-3.5 rounded-xl border border-slate-100 text-xs">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="font-bold text-slate-850 flex items-center gap-1.5">
                          {rev.author}
                          {rev.verified && (
                            <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded-full">
                              <ShieldCheck className="w-3 h-3 text-emerald-500 fill-emerald-50" />
                              Verified Buyers
                            </span>
                          )}
                        </span>
                        <div className="flex gap-0.5 text-amber-400 fill-amber-400">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < rev.rating ? 'fill-current text-amber-400' : 'text-slate-200'}`} />
                          ))}
                        </div>
                      </div>
                      <h4 className="font-bold text-slate-800 text-xs mb-1">"{rev.title}"</h4>
                      <p className="text-slate-600 leading-relaxed text-[11px]">{rev.text}</p>
                      <span className="text-[9px] text-slate-400 font-mono mt-1 w-full block text-right">{rev.date}</span>
                    </div>
                  ))
                )}
              </div>

              {/* Leave custom customer review */}
              <form onSubmit={handleReviewSubmit} className="bg-slate-50/40 p-4.5 rounded-2xl border border-slate-200/60 space-y-3">
                <h4 className="font-bold text-xs text-slate-805 flex items-center gap-1.5">
                  <PlusCircle className="w-3.5 h-3.5 text-indigo-500" />
                  Leave customer feedback:
                </h4>

                <AnimatePresence>
                  {isSubmitSuccess && (
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.95, opacity: 0 }}
                      className="bg-emerald-50 text-emerald-700 text-xs font-semibold p-2.5 rounded-xl border border-emerald-200 flex items-center gap-1.5"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      Feedback successfully added to reviews history!
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="text-[10px] text-slate-400 font-mono uppercase block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={inputAuthor}
                      onChange={(e) => setInputAuthor(e.target.value)}
                      placeholder="e.g. Ramesh K."
                      className="bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs w-full focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 font-mono uppercase block mb-1">Review Stars</label>
                    <div className="flex gap-1 h-8 items-center cursor-pointer">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          onClick={() => setInputRating(i + 1)}
                          className={`w-5 h-5 transition-colors ${
                            i < inputRating ? 'text-amber-400 fill-amber-400' : 'text-slate-200 hover:text-amber-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-slate-400 font-mono uppercase block mb-1">Review Title</label>
                  <input
                    type="text"
                    required
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                    placeholder="e.g. Incredibly beautiful artwork"
                    className="bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs w-full focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-slate-400 font-mono uppercase block mb-1">Your Feedback Description</label>
                  <textarea
                    required
                    rows={2}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Describe pattern graphics durability, compartment size..."
                    className="bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs w-full focus:outline-none focus:border-sky-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="cursor-pointer w-full bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs uppercase py-2.5 rounded-lg transition"
                >
                  Post Review
                </button>
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
