export interface BackpackProduct {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  tagline: string;
  description: string;
  capacity: number; // in liters
  weight: number; // in grams
  dimensions: string;
  compartments: number;
  waterResistance: 'Water Resistant' | 'High Grade Water Repellent' | 'Splash Proof';
  laptopSize: string; // e.g., "15.6 inches"
  features: string[];
  patternType: 'galaxy' | 'blossom' | 'cubix' | 'colourSplash' | 'trisiac' | 'quantum' | 'comic';
  baseColor: string; // e.g., "#0A0D14" (deep cosmic dark)
  accentColor: string; // e.g., "#3B82F6"
  rating: number;
  reviewsCount: number;
  tags: string[];
}

export interface CartItem {
  product: BackpackProduct;
  quantity: number;
  selectedColor?: string;
}

export interface PackingItem {
  id: string;
  name: string;
  icon: string;
  weightGrams: number;
  sizeLiters: number;
  category: 'electronics' | 'study' | 'essentials' | 'leisure';
}

export interface CustomerReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  text: string;
  verified: boolean;
}
