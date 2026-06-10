import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Trash2, ArrowRight, Sparkles, CheckCircle2, QrCode, Tag, Sparkle } from 'lucide-react';
import { CartItem, BackpackProduct } from '../types';
import { BackpackVector } from './PatternPreview';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemoveItem: (index: number) => void;
  onUpdateQty: (index: number, newQty: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onRemoveItem,
  onUpdateQty,
  onClearCart,
}) => {
  const [couponCode, setCouponCode] = useState<string>('');
  const [activeDiscount, setActiveDiscount] = useState<{ label: string; rate: number } | null>(null);
  const [couponError, setCouponError] = useState<string>('');
  const [isCheckoutFinished, setIsCheckoutFinished] = useState<boolean>(false);
  const [deliveryEstimate, setDeliveryEstimate] = useState<string>('');

  const calculateSubtotal = () => {
    return cart.reduce((acc, it) => acc + it.product.price * it.quantity, 0);
  };

  const codeSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = couponCode.trim().toUpperCase();
    if (cleanCode === 'JUNIOR20') {
      setActiveDiscount({ label: 'JUNIOR20 (20% OFF)', rate: 0.20 });
      setCouponError('');
    } else if (cleanCode === 'BACKTOSCHOOL') {
      setActiveDiscount({ label: 'BACKTOSCHOOL (FLAT ₹300 OFF)', rate: 0.08 }); // approx relative discount rate
      setCouponError('');
    } else if (cleanCode === '') {
      setCouponError('Please enter a valid voucher code');
    } else {
      setCouponError('Invalid voucher code. Try "JUNIOR20" or "BACKTOSCHOOL"');
    }
  };

  const subtotal = calculateSubtotal();
  const discountAmount = activeDiscount ? Math.round(subtotal * activeDiscount.rate) : 0;
  const deliveryCharges = subtotal > 1500 ? 0 : 99; // Free delivery over ₹1500
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryCharges);

  const checkoutSubmitHandler = () => {
    // Generate mock shipping days
    const days = Math.floor(Math.random() * 3) + 2; 
    const dateOpt = new Date();
    dateOpt.setDate(dateOpt.getDate() + days);
    const dateFormatted = dateOpt.toLocaleDateString('en-IN', { weekday: 'long', month: 'short', day: 'numeric' });
    setDeliveryEstimate(dateFormatted);
    setIsCheckoutFinished(true);
  };

  const closeResetHandler = () => {
    setIsCheckoutFinished(false);
    onClearCart();
    setCouponCode('');
    setActiveDiscount(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Shadow overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-50 transition-opacity"
          />

          {/* Drawer Sliding body */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 24, stiffness: 220 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col max-h-screen border-l border-slate-100"
          >
            {isCheckoutFinished ? (
              /* Success Checkout Screen */
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-slate-50 to-white select-text">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', delay: 0.1 }}
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto fill-emerald-50 mb-4 animate-bounce" />
                </motion.div>

                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                  Order Dispatch Received!
                </h3>
                <p className="text-sm text-slate-500 max-w-sm mb-6">
                  Thank you for shopping Junior packs. Your custom order has been securely processed and routed to fulfillment.
                </p>

                {/* Delivery details */}
                <div className="w-full bg-slate-50 border border-slate-200/60 p-4 rounded-2xl mb-8 text-left space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Estimated Arrival:</span>
                    <span className="font-bold text-indigo-600">{deliveryEstimate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Payment protocol:</span>
                    <span className="font-bold text-slate-800">Cash on Delivery (COD) / UPI Link</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Carrier partner:</span>
                    <span className="font-semibold text-slate-700">Delhivery Express Priority</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-dashed border-slate-200 uppercase font-bold text-slate-800">
                    <span>Total Paid amount:</span>
                    <span className="font-sans">₹{grandTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button
                  onClick={closeResetHandler}
                  className="cursor-pointer flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wide uppercase py-3.5 px-8 rounded-xl w-full max-w-xs transition"
                >
                  Shop More Styles
                </button>
              </div>
            ) : (
              /* Core Cart Items view */
              <>
                {/* Header block */}
                <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-55/30">
                  <div className="flex items-center gap-2.5">
                    <ShoppingBag className="w-5 h-5 text-sky-600" />
                    <div>
                      <h3 className="font-bold text-slate-850 text-base">Your Sanchika Bag</h3>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">
                        {cart.length} unique {cart.length === 1 ? 'item' : 'items'}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-slate-700 transition cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Cart list content scroll room */}
                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                  {cart.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8 text-slate-400">
                      <ShoppingBag className="w-14 h-14 text-slate-200 mb-2 animate-pulse" />
                      <h4 className="font-bold text-slate-750 text-sm">Your shopping pack is empty</h4>
                      <p className="text-xs text-slate-500 max-w-xs mt-1">
                        Select from one of our five custom Junior backpacks and click on "Add to Bag" to begin.
                      </p>
                    </div>
                  ) : (
                    cart.map((item, idx) => (
                      <div
                        id={`cart-item-${item.product.id}`}
                        key={idx}
                        className="flex gap-4 p-3 rounded-2xl border border-slate-100 hover:bg-slate-50/40 transition items-center"
                      >
                        {/* Circle pattern showcase preview */}
                        <div className="w-14 h-16 flex items-center justify-center bg-slate-50 rounded-xl p-2.5 shrink-0">
                          <BackpackVector patternType={item.product.patternType} isInteractive={false} />
                        </div>

                        {/* Text descriptions */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-slate-800 text-xs truncate">
                            {item.product.name}
                          </h4>
                          <span className="text-[10px] font-semibold text-sky-600 block">
                            Capacity: {item.product.capacity} Liters
                          </span>
                          
                          {/* Price */}
                          <div className="flex items-center gap-1.5 mt-1 text-xs">
                            <span className="font-sans font-bold text-slate-900">
                              ₹{item.product.price.toLocaleString('en-IN')}
                            </span>
                            <span className="text-[10px] line-through text-slate-400">
                              ₹{item.product.originalPrice.toLocaleString('en-IN')}
                            </span>
                          </div>
                        </div>

                        {/* Change quant, Delete controls */}
                        <div className="flex flex-col items-end gap-2 shrink-0">
                          <button
                            onClick={() => onRemoveItem(idx)}
                            className="text-slate-300 hover:text-rose-500 shrink-0 p-1 rounded-sm hover:bg-rose-50 transition cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>

                          {/* Quant adjustment */}
                          <div className="flex items-center border border-slate-200/80 rounded-md overflow-hidden bg-white text-[11px] h-6 font-semibold select-none">
                            <button
                              onClick={() => onUpdateQty(idx, Math.max(1, item.quantity - 1))}
                              className="px-1.5 hover:bg-slate-50 text-slate-500 border-r border-slate-200 cursor-pointer"
                            >
                              -
                            </button>
                            <span className="px-2 text-slate-800 font-mono">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQty(idx, item.quantity + 1)}
                              className="px-1.5 hover:bg-slate-50 text-slate-500 border-l border-slate-200 cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Voucher Code bar & Math summaries at bottom */}
                {cart.length > 0 && (
                  <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-4">
                    {/* Enter coupon code */}
                    <form onSubmit={codeSubmitHandler} className="space-y-1.5">
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            placeholder="Voucher: JUNIOR20 or BACKTOSCHOOL"
                            className="bg-white border border-slate-200 rounded-xl px-3 pl-8 py-2 text-xs w-full focus:outline-none focus:border-sky-500 font-medium"
                          />
                        </div>
                        <button
                          type="submit"
                          className="cursor-pointer bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs uppercase px-4 py-2 rounded-xl transition"
                        >
                          Apply
                        </button>
                      </div>

                      {activeDiscount && (
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full inline-block">
                          ✓ Coupon applied: {activeDiscount.label}
                        </span>
                      )}

                      {couponError && (
                        <span className="text-[10px] font-medium text-rose-500 block pl-1">
                          {couponError}
                        </span>
                      )}
                    </form>

                    {/* Numeric cost overview */}
                    <div className="space-y-2 text-xs text-slate-650">
                      <div className="flex justify-between">
                        <span>Items Subtotal:</span>
                        <span className="font-mono font-bold text-slate-800">₹{subtotal.toLocaleString('en-IN')}</span>
                      </div>
                      
                      {discountAmount > 0 && (
                        <div className="flex justify-between text-emerald-600 font-medium">
                          <span>Discount Saved:</span>
                          <span className="font-mono">- ₹{discountAmount.toLocaleString('en-IN')}</span>
                        </div>
                      )}

                      <div className="flex justify-between">
                        <span>Delhivery Freight charge:</span>
                        <span className="font-mono text-slate-850 font-bold">
                          {deliveryCharges === 0 ? (
                            <span className="text-emerald-600 text-[10px] font-extrabold uppercase bg-emerald-50 px-1.5 py-0.5 rounded-sm">
                              FREE SHIP
                            </span>
                          ) : (
                            `₹${deliveryCharges}`
                          )}
                        </span>
                      </div>

                      <div className="flex justify-between pt-2 border-t border-slate-200/80 text-sm font-bold text-slate-900 uppercase">
                        <span>Payable Total:</span>
                        <span className="font-sans font-black text-slate-950 text-base">₹{grandTotal.toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    {/* Submit Purchase action */}
                    <button
                      onClick={checkoutSubmitHandler}
                      className="cursor-pointer w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 rounded-xl uppercase text-xs tracking-wider flex items-center justify-center gap-2 transition hover:shadow-lg"
                    >
                      <span>Complete Checkout</span>
                      <ArrowRight className="w-4 h-4 text-indigo-200" />
                    </button>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
