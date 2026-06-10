/**
 * ==========================================================================
 * Sanchika Bags - Modern, Premium Search & Filter Catalog Javascript Engine
 * ==========================================================================
 */

// 1. Premium Product Inventory (Handcrafted featuring uploaded collections of Genie, Junior, Safari & Harry Potter)
const BACKUP_PRODUCTS_DATABASE = [
  {
    id: 1,
    brand: "Genie",
    collection: "Dreamy",
    name: "Genie Dreamy Lavender Backpack",
    category: "School Bags",
    color: "Lavender",
    price: 1699,
    capacity: "22L",
    sku: "GN-DMY-LAV-022",
    description: "A premium 22L Genie Dreamy Lavender School Backpack representing its elegant lavender theme with dreamscape motifs, double-cushioned shoulder support, and waterproof outer lining, valued at ₹1,699.",
    image: "/assets/images/genie_product1.png",
    specs: {
      weight: "450g (Lightweight build)",
      compartments: "3 Main Chambers + Secret Front Pocket",
      warranty: "12 Months Genie Brand Warranty",
      resistance: "Hydrophobic Coated Ripstop Material"
    }
  },
  {
    id: 2,
    brand: "Genie",
    collection: "Classic Kids",
    name: "Genie Flutter Pink Kids Backpack",
    category: "School Bags",
    color: "Pink",
    price: 1499,
    capacity: "20L",
    sku: "GN-FLT-PNK-020",
    description: "A vibrant 20L Genie Classic Kids Flutter Pink Backpack designed with adorable butterfly charms and adjustable spine-relief shoulder straps, representing outstanding rose-pink kid styles for ₹1,499.",
    image: "/assets/images/genie_product2.png",
    specs: {
      weight: "420g (Ergonomic schoolpack)",
      compartments: "2 Large Compartments + Side Mesh Sleeve",
      warranty: "1 Year Domestic Cover",
      resistance: "Water-Resistant High-Density Weave"
    }
  },
  {
    id: 3,
    brand: "Genie",
    collection: "Sparkle",
    name: "Genie Sparkle Mint School Bag",
    category: "School Bags",
    color: "Mint",
    price: 1599,
    capacity: "21L",
    sku: "GN-SPK-MNT-021",
    description: "An exquisite 21L Genie Sparkle Mint School Bag featuring a refreshing mint green colorway, custom zipper pullers, and comfortable back cushion pads for ₹1,599.",
    image: "/assets/images/genie_product3.png",
    specs: {
      weight: "440g (Air-flow mesh back)",
      compartments: "3 Book Shelves + Internal Stationery Grid",
      warranty: "1 Year Premium Guarantee",
      resistance: "Hydrophobic Shield Protection"
    }
  },
  {
    id: 6,
    brand: "Genie",
    collection: "Green Fantasy",
    name: "Genie Green Fantasy Daypack",
    category: "School Bags",
    color: "Green",
    price: 1799,
    capacity: "22L",
    sku: "GN-RBF-GRN-022",
    description: "A majestic 22L Genie Green Fantasy Daypack showing a gorgeous green colorway, built to hold heavy volumes with comfortable posture support for ₹1,799.",
    image: "/assets/images/genie_product4.png",
    specs: {
      weight: "480g (High Volume Carrier)",
      compartments: "3 Compartments + Padded Notebook Divider",
      warranty: "1 Year All-India Coverage",
      resistance: "Splashproof 900D Nylon Weave"
    }
  },
  {
    id: 7,
    brand: "Genie",
    collection: "Classic Navy",
    name: "Genie Classic Navy Blue Comfort Pack",
    category: "School Bags",
    color: "Navy Blue",
    price: 1899,
    capacity: "25L",
    sku: "GN-CPC-NVY-025",
    description: "At ₹1,899, this deluxe 25L Genie Classic Navy Blue Comfort Pack features sleek navy blue aesthetics, lightweight ergonomic shoulder straps, a spacious double compartment, and a secure internal laptop sleeve.",
    image: "/assets/images/genie_product5.png",
    specs: {
      weight: "510g (UltraComfort design)",
      compartments: "3 Sections + Quick-access Passport Pocket",
      warranty: "1 Year Genie Frame Warranty",
      resistance: "Ballistic Level Weather Guard"
    }
  },
  {
    id: 8,
    brand: "Genie",
    collection: "Cosmic Starlet",
    name: "Genie Cosmic Starlet Black Backpack",
    category: "School Bags",
    color: "Black",
    price: 1399,
    capacity: "20L",
    sku: "GN-CMS-BLK-020",
    description: "A classic black 20L Genie Cosmic Starlet backpack covered in astronomical constellation prints, robust glide zippers, and protective chest support, priced at ₹1,399.",
    image: "/assets/images/genie_product6.png",
    specs: {
      weight: "430g (Slim travel daypack)",
      compartments: "2 Main Pockets + Easy-Access Front Organizer",
      warranty: "12 Months Stitch Seal",
      resistance: "Splashproof Double-Coated Polyester"
    }
  },
  {
    id: 11,
    brand: "Genie",
    collection: "Pastel Lavender",
    name: "Genie Pastel Lavender Ombre Backpack",
    category: "School Bags",
    color: "Lavender",
    price: 1549,
    capacity: "21L",
    sku: "GN-PSO-LAV-021",
    description: "Chic and stylish, this 21L Genie Pastel Lavender Ombre features a whimsical pastel lavender gradient on high-density water-resistant canvas, a supreme modern fashion statement for ₹1,549.",
    image: "/assets/images/genie_product7.png",
    specs: {
      weight: "460g (Balanced stress straps)",
      compartments: "3 Main Compartments + Stationery Holster",
      warranty: "1 Year Coverage",
      resistance: "High-grade Water Repellent"
    }
  },
  {
    id: 12,
    brand: "Genie",
    collection: "Blossom Glitz",
    name: "Genie Blossom Glitz Black Pack",
    category: "School Bags",
    color: "Black",
    price: 1649,
    capacity: "22L",
    sku: "GN-BSG-BLK-022",
    description: "A delightful black 22L Genie Blossom Glitz pack decorated with shining black blossom glares, cozy S-straps, and abrasion-resistant base protection for ₹1,649.",
    image: "/assets/images/genie_product8.png",
    specs: {
      weight: "470g (Lumbar cushion core)",
      compartments: "3 Chambers + Dual Quick-Access Nets",
      warranty: "1 Year Warranty",
      resistance: "Heavy Hydrophobic Canvas Lining"
    }
  },
  {
    id: 13,
    brand: "Skybags Junior",
    collection: "Dino Adventure",
    name: "Skybags Junior Dino Adventure Yellow Daypack",
    category: "School Bags",
    color: "Yellow",
    price: 999,
    capacity: "15L",
    sku: "SBJ-DNA-YLW-015",
    description: "A vibrant yellow dinosaur-infused 15L Skybags Junior adventure daypack featuring cute custom dino illustration, twin active zip sections, and spine ergonomics for kids, priced at ₹999.",
    image: "/assets/images/Junior_product1.png",
    specs: {
      weight: "380g (Safe pediatric size)",
      compartments: "2 Compartments + Front Lunchbox Section",
      warranty: "1 Year Skybags Shield",
      resistance: "Easy-wash Waterproof Shield"
    }
  },
  {
    id: 14,
    brand: "Skybags Junior",
    collection: "Junior Voyager",
    name: "Skybags Junior Cosmic Galaxy Black Bag",
    category: "School Bags",
    color: "Black",
    price: 1099,
    capacity: "21L",
    sku: "SBJ-CMS-BLK-021",
    description: "An outstanding space-themed 21L Skybags Junior Cosmic Galaxy black bag depicting spaceships, planets, and moons, elevated with night safety reflectives for ₹1,099.",
    image: "/assets/images/Junior_product2.png",
    specs: {
      weight: "400g (Constellation safety loop)",
      compartments: "2 Main Shelves + Fleece Tablet Slip",
      warranty: "1 Year Global Cover",
      resistance: "Hydrophobic Dust-repellent"
    }
  },
  {
    id: 17,
    brand: "Skybags Junior",
    collection: "Blossom Meadow",
    name: "Skybags Junior Blossom Meadow Blue Pack",
    category: "School Bags",
    color: "Blue",
    price: 1199,
    capacity: "15L",
    sku: "SBJ-BSM-BLU-015",
    description: "A whimsical blue 15L Skybags Junior pack featuring colorful flowers, cute clouds, and a sky field. Equipped with curved chest guards and lightweight bottle mesh for ₹1,199.",
    image: "/assets/images/Junior_product3.png",
    specs: {
      weight: "390g (Featherlite structure)",
      compartments: "2 Main Compartments + Magic Key clip",
      warranty: "12 Months Premium Stitch Cover",
      resistance: "Splash Proof Shield Polyester"
    }
  },
  {
    id: 18,
    brand: "Skybags Junior",
    collection: "High-Flyer",
    name: "Skybags Junior High-Flyer Spacer Black Pack",
    category: "School Bags",
    color: "Black",
    price: 1299,
    capacity: "22L",
    sku: "SBJ-HIF-BLK-022",
    description: "An energetic black 22L Skybags Junior High-Flyer Spacer displaying high-flying fighter jet silhouettes on rugged micro-ripstop black fabric, lined with thick cushioning for ₹1,299.",
    image: "/assets/images/Junior_product4.png",
    specs: {
      weight: "410g (Vibrating load cushion)",
      compartments: "2 Large Book Chambers + Front Stationery Chest",
      warranty: "1 Year stitch assurance",
      resistance: "Ballistic Weather Guard Canvas"
    }
  },
  {
    id: 20,
    brand: "Safari",
    collection: "Quest",
    name: "Safari Quest Navy Blue Rugged School Pack",
    category: "School Bags",
    color: "Navy Blue",
    price: 1899,
    capacity: "25L",
    sku: "SF-QST-NVY-025",
    description: "A heavy-duty 25L Safari Quest Navy Blue Rugged School Pack crafted from thick navy blue puncture-resistant texturized nylon. Features multi-pocket compartments and base protectors, costing ₹1,899.",
    image: "/assets/images/safari_product1.png",
    specs: {
      weight: "590g (Extreme wear guard)",
      compartments: "3 Heavy ZIP Sections + Bottle Sleeves",
      warranty: "18 Months Safari Warranty Card",
      resistance: "Ballistic 1680D Waterproof Fabric"
    }
  },
  {
    id: 21,
    brand: "Safari",
    collection: "Trailblazer",
    name: "Safari Trailblazer Black Rucksack",
    category: "Travel Bags",
    color: "Black",
    price: 2499,
    capacity: "45L",
    sku: "SF-TRB-BLK-045",
    description: "An adventurous black 45L Safari Trailblazer Classic Rucksack featuring heavy tactical black canvas, side mount compression systems, and durable hiking gears for ₹2,499.",
    image: "/assets/images/safari_product2.png",
    specs: {
      weight: "980g (High-capacity frame)",
      compartments: "1 Massive Main Bay + Dynamic Lid Pocket",
      warranty: "3 Years Worldwide Guarantee",
      resistance: "Severe Rain Storm-proof Armor coating"
    }
  },
  {
    id: 22,
    brand: "Safari",
    collection: "Streamline",
    name: "Safari Streamline Sleek Daypack",
    category: "Laptop Bags",
    color: "Grey",
    price: 2199,
    capacity: "30L",
    sku: "SF-STR-GRY-030",
    description: "An ultra-sleek grey 30L Safari Streamline professional office pack. Features space gray waterproof coating, laptop shielding, and comfortable contour straps, priced at ₹2,199.",
    image: "/assets/images/safari_product3.png",
    specs: {
      weight: "640g (Anti-shock laptop shield)",
      compartments: "15.6 Inch Tech Deck + Hidden Wallet Safe",
      warranty: "18 Months Safari Brand Cover",
      resistance: "Waterproof PU-Coated Polyester"
    }
  },
  {
    id: 23,
    brand: "Safari",
    collection: "Scout",
    name: "Safari Urban Scout Blue Backpack",
    category: "Laptop Bags",
    color: "Blue",
    price: 1999,
    capacity: "25L",
    sku: "SF-UBS-BLU-025",
    description: "A formal blue 25L Safari Urban Scout business backpack. Combines deep-blue waterproof weaves with multi-compartments and useful luggage pass-through loops for ₹1,999.",
    image: "/assets/images/safari_product4.png",
    specs: {
      weight: "600g (Balanced lumbar support)",
      compartments: "2 Main Compartments + Front Cable Sleaving",
      warranty: "18 Months Repair Support",
      resistance: "Dual-coated Hydrophobic Canvas"
    }
  },
  {
    id: 24,
    brand: "Harry Potter",
    collection: "Gryffindor",
    name: "Safari Harry Potter Gryffindor Yellow Edition",
    category: "School Bags",
    color: "Yellow",
    price: 2299,
    capacity: "22L",
    sku: "SF-HPG-YLW-022",
    description: "An official 22L Harry Potter Gryffindor yellow backpack decorated with golden sigils and classic brave yellow highlights, complete with spellbound wand loops for ₹2,299.",
    image: "/assets/images/harrypotter_product1.png",
    specs: {
      weight: "520g (Hogwarts premium canvas)",
      compartments: "3 Heavy Compartments + Magic Wand Slot",
      warranty: "1 Year Official License Warranty",
      resistance: "Waterproof Coated Retro Weave"
    }
  },
  {
    id: 25,
    brand: "Harry Potter",
    collection: "Hogwarts Express",
    name: "Safari Harry Potter Hogwarts Express Black Pack",
    category: "School Bags",
    color: "Black",
    price: 2399,
    capacity: "25L",
    sku: "SF-HPE-BLK-025",
    description: "An immersive black 25L Harry Potter Hogwarts Express schoolpack featuring Platform 9 3/4 seals, brass zipper pulls, and retro black highlights, costing ₹2,399.",
    image: "/assets/images/harrypotter_product2.png",
    specs: {
      weight: "540g (Reinforced ergonomic back)",
      compartments: "3 Spacious Rooms + Laptop Holder + Key Retention",
      warranty: "1 Year Official Cover",
      resistance: "Weather-Armor Water-repellent"
    }
  }
];

let PRODUCTS_DATABASE = [];

// Dynamic Asynchronous Loader: Fetches inventory from products.json or falls back to backup array
async function initProductsDatabase() {
  try {
    const response = await fetch("/products.json");
    if (response.ok) {
      PRODUCTS_DATABASE = await response.json();
      console.log("Sanchika Engine: Successfully loaded dynamic products inventory. Count:", PRODUCTS_DATABASE.length);
    } else {
      throw new Error(`XHR HTTP Status ${response.status}`);
    }
  } catch (error) {
    console.warn("Sanchika Engine: Unable to retrieve products.json. Reverting to backup database.", error);
    PRODUCTS_DATABASE = BACKUP_PRODUCTS_DATABASE;
  }
}

/**
 * NOTE TO BUSINESS OWNER: Adding 100+ items is incredibly easy!
 * Simply copy one of the objects above, increments the 'id' field, and append it inside the PRODUCTS_DATABASE array.
 * Example of extending:
 * 
 * {
 *   id: 21,
 *   name: "Sanchika Neon Youth Backpack",
 *   category: "School Bags",
 *   brand: "Sanchika",
 *   price: 690,
 *   image: "assets/images/bag21.jpg", // or live Unsplash links
 *   description: "Comfortable glowing daypack for teenagers.",
 *   specs: {
 *     weight: "400g",
 *     compartments: "2 Main ZIPs",
 *     warranty: "1 Year Guarantee",
 *     resistance: "Waterproof"
 *   }
 * }
 */


// 2. State Management (Reactive Variables)
const appState = {
  activeSearchQuery: "",
  activeCategory: "All",
  activeBrand: "All",
  activePriceRange: "All",
  activeColor: "All",
  activeCapacity: "All",
  savedBookmarks: JSON.parse(localStorage.getItem("sanchika_bookmarks")) || [],
  theme: localStorage.getItem("sanchika_theme") || "light"
};


// 3. Select DOM Elements at Startup
const Elements = {
  html: document.documentElement,
  header: document.getElementById("header"),
  themeToggleBtn: document.getElementById("theme-toggle-btn"),
  themeMoonIcon: document.querySelector(".mode-moon"),
  themeSunIcon: document.querySelector(".mode-sun"),
  
  // Search DOM
  searchInput: document.getElementById("product-search-input"),
  searchClearBtn: document.getElementById("search-clear-btn"),
  searchSpinnerIcon: document.getElementById("search-spinner-icon"),
  searchSuggestionsBox: document.getElementById("search-suggestions-box"),
  
  // Filters Inputs
  filterCategory: document.getElementById("filter-category"),
  filterBrand: document.getElementById("filter-brand"),
  filterPrice: document.getElementById("filter-price"),
  filterColor: document.getElementById("filter-color"),
  filterCapacity: document.getElementById("filter-capacity"),
  clearFiltersBtn: document.getElementById("clear-filters-btn"),
  activeTokensArea: document.getElementById("active-tokens-area"),
  activeTokensList: document.getElementById("active-tokens-list"),
  
  // Stats
  statsTotalProducts: document.getElementById("stats-total-products"),
  statsShownProducts: document.getElementById("stats-shown-products"),
  counterShown: document.getElementById("counter-shown"),
  counterTotal: document.getElementById("counter-total"),
  bookmarkCount: document.getElementById("bookmark-count"),
  catalogBookmarkBtn: document.getElementById("catalog-bookmark-btn"),
  
  // Grid and State wrappers
  productsGridView: document.getElementById("products-grid-view"),
  catalogSpinner: document.getElementById("catalog-loading-spinner"),
  catalogNoResults: document.getElementById("catalog-no-results"),
  noResultsResetBtn: document.getElementById("no-results-reset-btn"),
  
  // Scroll to Top
  scrollToTopBtn: document.getElementById("scroll-to-top-btn"),
  
  // Mobile drawer DOM
  mobileMenuToggle: document.getElementById("mobile-menu-toggle"),
  mobileDrawer: document.getElementById("mobile-drawer"),
  mobileDrawerClose: document.getElementById("mobile-drawer-close"),
  
  // Modal details frame
  productDetailModal: document.getElementById("product-detail-modal"),
  modalCloseTrigger: document.getElementById("modal-close-trigger"),
  modalBagCategoryBadge: document.getElementById("modal-bag-category-badge"),
  modalBagDisplayImage: document.getElementById("modal-bag-display-image"),
  modalBagBrand: document.getElementById("modal-bag-brand"),
  modalBagTitle: document.getElementById("modal-bag-title"),
  modalBagPrice: document.getElementById("modal-bag-price"),
  modalBagDescription: document.getElementById("modal-bag-description"),
  modalSpecWeight: document.getElementById("modal-spec-weight"),
  modalSpecCompartments: document.getElementById("modal-spec-compartments"),
  modalSpecWarranty: document.getElementById("modal-spec-warranty"),
  modalSpecResistance: document.getElementById("modal-spec-resistance"),
  modalWishlistToggleAction: document.getElementById("modal-wishlist-toggle-action"),
  modalWhatsappDirectLink: document.getElementById("modal-whatsapp-direct-link"),
  modalShareLinkAction: document.getElementById("modal-share-link-action"),
  modalToastNotice: document.getElementById("modal-toast-notice"),
  modalRatingStars: document.getElementById("modal-rating-stars"),
  modalRatingCount: document.getElementById("modal-rating-count")
};


// 4. Utility: Debouncer for heavy typing inputs
function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}


// 5. Initialize Theme state & styling classes
function initializeTheme() {
  const mModeMoon = document.querySelector(".m-mode-moon");
  const mModeSun = document.querySelector(".m-mode-sun");
  const mThemeLabel = document.querySelector(".m-theme-label-txt");

  if (appState.theme === "dark") {
    Elements.html.classList.add("dark");
    Elements.themeMoonIcon.classList.add("hidden");
    Elements.themeSunIcon.classList.remove("hidden");
    if (mModeMoon) mModeMoon.classList.add("hidden");
    if (mModeSun) mModeSun.classList.remove("hidden");
    if (mThemeLabel) mThemeLabel.textContent = "Light Mode";
  } else {
    Elements.html.classList.remove("dark");
    Elements.themeMoonIcon.classList.remove("hidden");
    Elements.themeSunIcon.classList.add("hidden");
    if (mModeMoon) mModeMoon.classList.remove("hidden");
    if (mModeSun) mModeSun.classList.add("hidden");
    if (mThemeLabel) mThemeLabel.textContent = "Dark Mode";
  }
}

// Inline toggle dynamic execution
function toggleTheme() {
  const mModeMoon = document.querySelector(".m-mode-moon");
  const mModeSun = document.querySelector(".m-mode-sun");
  const mThemeLabel = document.querySelector(".m-theme-label-txt");

  if (appState.theme === "light") {
    appState.theme = "dark";
    Elements.html.classList.add("dark");
    Elements.themeMoonIcon.classList.add("hidden");
    Elements.themeSunIcon.classList.remove("hidden");
    if (mModeMoon) mModeMoon.classList.add("hidden");
    if (mModeSun) mModeSun.classList.remove("hidden");
    if (mThemeLabel) mThemeLabel.textContent = "Light Mode";
  } else {
    appState.theme = "light";
    Elements.html.classList.remove("dark");
    Elements.themeMoonIcon.classList.remove("hidden");
    Elements.themeSunIcon.classList.add("hidden");
    if (mModeMoon) mModeMoon.classList.remove("hidden");
    if (mModeSun) mModeSun.classList.add("hidden");
    if (mThemeLabel) mThemeLabel.textContent = "Dark Mode";
  }
  localStorage.setItem("sanchika_theme", appState.theme);
}


// 6. Scroll Position Tracking (Sticky header adjustments & Scroll to top toggle)
window.addEventListener("scroll", () => {
  const scrollOffset = window.scrollY;
  
  // Sticky header class injection
  if (scrollOffset > 30) {
    Elements.header.classList.add("scrolled");
  } else {
    Elements.header.classList.remove("scrolled");
  }
  
  // Scroll to top button visibility check
  if (scrollOffset > 400) {
    Elements.scrollToTopBtn.classList.add("visible");
  } else {
    Elements.scrollToTopBtn.classList.remove("visible");
  }
  
  // Color navigation line depending on active site scroll position
  const mainHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = (scrollOffset / mainHeight) * 100;
  document.getElementById("top-progress-bar").style.width = `${percentage}%`;
});


// 7. Dynamic Card Rendering & Intersection Filters logic
function getFilteredBags() {
  return PRODUCTS_DATABASE.filter(product => {
    // A. Match Search String (Name, description, brand, category, collection, sku, color, capacity, price)
    const query = appState.activeSearchQuery.trim().toLowerCase();
    let queryMatch = true;
    if (query) {
      const colorKeywords = [
        "black",
        "blue",
        "red",
        "green",
        "yellow",
        "pink",
        "purple",
        "grey",
        "gray",
        "orange",
        "white",
        "brown",
        "navy blue",
        "aqua blue",
        "dark denim",
        "sea spray",
        "grape mist"
      ];

      if (colorKeywords.includes(query)) {
        if (product.color != null) {
          const prodColor = String(product.color).trim().toLowerCase();
          if (query === "gray" || query === "grey") {
            queryMatch = (prodColor === "gray" || prodColor === "grey");
          } else {
            queryMatch = (prodColor === query);
          }
        } else {
          queryMatch = false;
        }
      } else {
        // Use normal search across name, brand, category, collection, sku, description
        const nameStr = product.name != null ? String(product.name).toLowerCase() : "";
        const brandStr = product.brand != null ? String(product.brand).toLowerCase() : "";
        const catStr = product.category != null ? String(product.category).toLowerCase() : "";
        const collectionStr = product.collection != null ? String(product.collection).toLowerCase() : "";
        const skuStr = product.sku != null ? String(product.sku).toLowerCase() : "";
        const descStr = product.description != null ? String(product.description).toLowerCase() : "";

        queryMatch = (
          nameStr.includes(query) ||
          brandStr.includes(query) ||
          catStr.includes(query) ||
          collectionStr.includes(query) ||
          skuStr.includes(query) ||
          descStr.includes(query)
        );
      }
    }

    // B. Match Category dropdown
    const categoryMatch = appState.activeCategory === "All" || product.category === appState.activeCategory;

    // C. Match Brand dropdown
    const brandMatch = appState.activeBrand === "All" || product.brand === appState.activeBrand;

    // D. Match Price Constraint
    let priceMatch = false;
    if (appState.activePriceRange === "All") {
      priceMatch = true;
    } else if (appState.activePriceRange === "under-500") {
      priceMatch = product.price < 500;
    } else if (appState.activePriceRange === "500-1000") {
      priceMatch = product.price >= 500 && product.price <= 1000;
    } else if (appState.activePriceRange === "1000-2000") {
      priceMatch = product.price >= 1000 && product.price <= 2000;
    } else if (appState.activePriceRange === "above-2000") {
      priceMatch = product.price > 2000;
    }

    // E. Match Color dropdown (case-insensitive and trimmed)
    let colorMatch = true;
    if (appState.activeColor !== "All") {
      if (product.color != null) {
        const prodColor = String(product.color).trim().toLowerCase();
        const activeColorLower = String(appState.activeColor).trim().toLowerCase();
        if (activeColorLower === "gray" || activeColorLower === "grey") {
          colorMatch = (prodColor === "gray" || prodColor === "grey");
        } else {
          colorMatch = (prodColor === activeColorLower);
        }
      } else {
        colorMatch = false;
      }
    }

    // F. Match Capacity dropdown
    const capacityMatch = appState.activeCapacity === "All" || product.capacity === appState.activeCapacity;

    return queryMatch && categoryMatch && brandMatch && priceMatch && colorMatch && capacityMatch;
  });
}

// Helper function to highlight matched search queries using design-compliant <mark> tags
function highlightText(text, query) {
  if (!query || !text) return text;
  // Escape regex specials
  const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})`, "gi");
  return text.replace(regex, `<mark class="product-info-highlight">$1</mark>`);
}

// Helper to perform header-offset friendly smooth scroll to the product catalog section
function scrollToCatalog() {
  const target = document.getElementById("catalog");
  if (target) {
    const header = document.getElementById("header");
    const headerHeight = header ? header.offsetHeight : 80;
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight - 12; // 12px extra premium breathing spacing
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

// Helper to perform header-offset friendly smooth scroll directly near products grid view
function scrollToProducts() {
  const target = document.getElementById("products-grid-view");
  if (target) {
    const header = document.getElementById("header");
    const headerHeight = header ? header.offsetHeight : 80;
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight - 80; // beautiful safety offset to display category counts and space comfortably
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

// 8. Re-render Visual Catalog & update statistics counters
function renderCatalog(withFakeDelay = true) {
  // Toggle Preloader Spinning State temporarily to enhance feel
  if (withFakeDelay) {
    Elements.productsGridView.style.opacity = "0";
    Elements.catalogSpinner.classList.remove("hidden");
    Elements.catalogNoResults.classList.add("hidden");
    if (Elements.searchSpinnerIcon) {
      Elements.searchSpinnerIcon.classList.remove("hidden");
    }
  }

  const matches = getFilteredBags();

  // Execute actual rendering inside timeout to simulate grooming transition
  setTimeout(() => {
    // Clear out outdated items inside workspace
    Elements.productsGridView.innerHTML = "";
    
    // Hide spinner preloader
    if (withFakeDelay) {
      Elements.catalogSpinner.classList.add("hidden");
      if (Elements.searchSpinnerIcon) {
        Elements.searchSpinnerIcon.classList.add("hidden");
      }
    }

    // Toggle No Match Display
    if (matches.length === 0) {
      if (Elements.productCounterLabel) {
        Elements.productCounterLabel.classList.add("hidden");
      }
      Elements.catalogNoResults.classList.remove("hidden");
      Elements.productsGridView.classList.add("hidden");
    } else {
      if (Elements.productCounterLabel) {
        Elements.productCounterLabel.classList.remove("hidden");
      }
      Elements.catalogNoResults.classList.add("hidden");
      Elements.productsGridView.classList.remove("hidden");

      const searchQuery = appState.activeSearchQuery.trim();

      // Inject products grid fragment
      matches.forEach((product, idx) => {
        const isBookmarked = appState.savedBookmarks.includes(product.id);
        const dispCategory = highlightText(product.category, searchQuery);
        const dispBrand = highlightText(product.brand, searchQuery);
        const dispName = highlightText(product.name, searchQuery);
        const dispDescription = highlightText(product.description, searchQuery);
        
        const cardHTML = `
          <div class="product-card loaded" id="bag-card-${product.id}" style="animation-duration: 0.5s; animation-delay: ${idx * 0.04}s;">
            <span class="product-badge">${dispCategory}</span>
            <div class="product-image-container">
              <img src="${product.image}" loading="lazy" class="product-card-img" alt="${product.name}" referrerPolicy="no-referrer">
              <button class="product-wishlist-toggle ${isBookmarked ? 'active' : ''}" data-wishlist-id="${product.id}" title="Bookmark this Bag">
                <i data-lucide="heart"></i>
              </button>
            </div>
            <div class="product-meta-container">
              <span class="product-brand">${dispBrand}</span>
              <h3 class="product-name">${dispName}</h3>
              <p class="product-description">${dispDescription}</p>
              <div class="product-footer-strip">
                <div class="product-price-wrapper">
                  <span class="price-sub">Retail Price</span>
                  <span class="price-tag">₹${product.price.toLocaleString('en-IN')}</span>
                </div>
                <button class="view-details-action" data-details-id="${product.id}">
                  <span>View Details</span>
                  <i data-lucide="arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        `;
        Elements.productsGridView.insertAdjacentHTML("beforeend", cardHTML);
      });

      // Recalibrate Lucide Vector SVGs on generated nodes
      lucide.createIcons();
      Elements.productsGridView.style.opacity = "1";
    }

    // Refresh metrics counters immediately
    animateStatsCounters(PRODUCTS_DATABASE.length, matches.length);
    renderActiveFilterTokens();
    
  }, withFakeDelay ? 280 : 0);
}


// 9. Statistics Counter Animation (Polished rolling counter)
function animateStatsCounters(totalTarget, shownTarget) {
  // Update shown count
  let currentShown = 0;
  const shownInterval = setInterval(() => {
    if (currentShown >= shownTarget) {
      Elements.statsShownProducts.textContent = shownTarget;
      if (Elements.counterShown) {
        Elements.counterShown.textContent = shownTarget;
      }
      clearInterval(shownInterval);
    } else {
      currentShown += Math.ceil((shownTarget - currentShown) / 5) || 1;
      Elements.statsShownProducts.textContent = currentShown;
      if (Elements.counterShown) {
        Elements.counterShown.textContent = currentShown;
      }
    }
  }, 20);

  // Directly assign total
  Elements.statsTotalProducts.textContent = totalTarget;
  if (Elements.counterTotal) {
    Elements.counterTotal.textContent = totalTarget;
  }
  Elements.bookmarkCount.textContent = appState.savedBookmarks.length;
  const mBookmarkCount_1 = document.getElementById("mobile-bookmark-count");
  if (mBookmarkCount_1) {
    mBookmarkCount_1.textContent = appState.savedBookmarks.length;
  }
}


// 10. Generate tag tokens to represent active filters underneath dropdowns
function renderActiveFilterTokens() {
  Elements.activeTokensList.innerHTML = "";
  let activelyFiltering = false;

  // A. Search token
  if (appState.activeSearchQuery) {
    activelyFiltering = true;
    Elements.activeTokensList.insertAdjacentHTML("beforeend", `
      <span class="token-badge" data-token-type="search">
        <span>Query: "${appState.activeSearchQuery}"</span>
        <i data-lucide="x"></i>
      </span>
    `);
  }

  // B. Category token
  if (appState.activeCategory !== "All") {
    activelyFiltering = true;
    Elements.activeTokensList.insertAdjacentHTML("beforeend", `
      <span class="token-badge" data-token-type="category">
        <span>Category: ${appState.activeCategory}</span>
        <i data-lucide="x"></i>
      </span>
    `);
  }

  // C. Brand token
  if (appState.activeBrand !== "All") {
    activelyFiltering = true;
    Elements.activeTokensList.insertAdjacentHTML("beforeend", `
      <span class="token-badge" data-token-type="brand">
        <span>Brand: ${appState.activeBrand}</span>
        <i data-lucide="x"></i>
      </span>
    `);
  }

  // D. Price token
  if (appState.activePriceRange !== "All") {
    activelyFiltering = true;
    const priceLabels = {
      "under-500": "Under ₹500",
      "500-1000": "₹500 - ₹1000",
      "1000-2000": "₹1000 - ₹2000",
      "above-2000": "Above ₹2000"
    };
    Elements.activeTokensList.insertAdjacentHTML("beforeend", `
      <span class="token-badge" data-token-type="price">
        <span>Budget: ${priceLabels[appState.activePriceRange]}</span>
        <i data-lucide="x"></i>
      </span>
    `);
  }

  // E. Color token
  if (appState.activeColor !== "All") {
    activelyFiltering = true;
    Elements.activeTokensList.insertAdjacentHTML("beforeend", `
      <span class="token-badge" data-token-type="color">
        <span>Color: ${appState.activeColor}</span>
        <i data-lucide="x"></i>
      </span>
    `);
  }

  // F. Capacity token
  if (appState.activeCapacity !== "All") {
    activelyFiltering = true;
    Elements.activeTokensList.insertAdjacentHTML("beforeend", `
      <span class="token-badge" data-token-type="capacity">
        <span>Capacity: ${appState.activeCapacity}</span>
        <i data-lucide="x"></i>
      </span>
    `);
  }

  // Toggle outer section display state
  if (activelyFiltering) {
    Elements.activeTokensArea.classList.remove("hidden");
  } else {
    Elements.activeTokensArea.classList.add("hidden");
  }

  // Re-bind click event on tokens to remove them individually
  document.querySelectorAll(".token-badge").forEach(token => {
    token.addEventListener("click", () => {
      const type = token.getAttribute("data-token-type");
      if (type === "search") {
        appState.activeSearchQuery = "";
        Elements.searchInput.value = "";
        Elements.searchClearBtn.classList.add("hidden");
      } else if (type === "category") {
        appState.activeCategory = "All";
        Elements.filterCategory.value = "All";
      } else if (type === "brand") {
        appState.activeBrand = "All";
        Elements.filterBrand.value = "All";
      } else if (type === "price") {
        appState.activePriceRange = "All";
        Elements.filterPrice.value = "All";
      } else if (type === "color") {
        appState.activeColor = "All";
        Elements.filterColor.value = "All";
      } else if (type === "capacity") {
        appState.activeCapacity = "All";
        Elements.filterCapacity.value = "All";
      }
      renderCatalog(true);
    });
  });

  lucide.createIcons();
}


// Helper to retrieve/generate dynamic ratings for each product consistently
function getProductRating(product) {
  if (product.rating && product.reviews) {
    return { rating: parseFloat(product.rating), reviews: parseInt(product.reviews) };
  }
  const ratingsMap = {
    1: { rating: 4.8, reviews: 142 },
    2: { rating: 4.5, reviews: 98 },
    3: { rating: 4.7, reviews: 110 },
    4: { rating: 4.2, reviews: 64 },
    5: { rating: 4.9, reviews: 185 },
    6: { rating: 4.6, reviews: 120 },
    7: { rating: 4.4, reviews: 85 },
    8: { rating: 4.8, reviews: 160 },
    9: { rating: 4.3, reviews: 72 },
    10: { rating: 4.7, reviews: 135 },
    11: { rating: 4.5, reviews: 90 },
    12: { rating: 4.9, reviews: 210 },
    13: { rating: 4.1, reviews: 45 },
    14: { rating: 4.6, reviews: 115 },
    15: { rating: 4.8, reviews: 175 },
    16: { rating: 4.4, reviews: 80 },
    17: { rating: 4.7, reviews: 140 },
    18: { rating: 4.3, reviews: 58 },
    19: { rating: 4.6, reviews: 95 }
  };
  return ratingsMap[product.id] || { rating: 4.6, reviews: 88 };
}

function renderProductRatingStars(container, rating) {
  if (!container) return;
  
  const fullStars = Math.floor(rating);
  const decimal = rating - fullStars;
  const decimalPercent = Math.round(decimal * 100);
  const gradientId = `partialStarGrad-${Math.floor(rating * 100)}`;
  
  // Outer layer with defs and custom linearGradient dynamically tuned to the decimal percentage
  let starsHTML = `
    <svg style="width: 0; height: 0; position: absolute;" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="${decimalPercent}%" stop-color="currentColor" stop-opacity="1" />
          <stop offset="${decimalPercent}%" stop-color="transparent" stop-opacity="1" />
        </linearGradient>
      </defs>
    </svg>
  `;
  
  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      starsHTML += `
        <svg class="star-svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      `;
    } else if (i === fullStars + 1 && decimal > 0) {
      starsHTML += `
        <svg class="star-svg" viewBox="0 0 24 24" fill="url(#${gradientId})" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      `;
    } else {
      starsHTML += `
        <svg class="star-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      `;
    }
  }
  
  container.innerHTML = starsHTML;
}

// 11. Full Details Overlapping Modal Pop-up Frame controls
function openProductModal(productId) {
  const product = PRODUCTS_DATABASE.find(p => p.id === productId);
  if (!product) return;

  // Render product visual elements inside the modal frame
  Elements.modalBagCategoryBadge.textContent = product.category;
  Elements.modalBagDisplayImage.src = product.image;
  Elements.modalBagDisplayImage.alt = product.name;
  Elements.modalBagBrand.textContent = product.brand.toUpperCase();
  Elements.modalBagTitle.textContent = product.name;
  Elements.modalBagPrice.textContent = `₹${product.price.toLocaleString('en-IN')}`;
  Elements.modalBagDescription.textContent = product.description;

  // Dynamic Ratings
  const ratingData = getProductRating(product);
  if (Elements.modalRatingStars) {
    renderProductRatingStars(Elements.modalRatingStars, ratingData.rating);
  }
  if (Elements.modalRatingCount) {
    Elements.modalRatingCount.textContent = `(${ratingData.rating} rating based on ${ratingData.reviews} customers)`;
  }

  // Add specifications data cleanly
  Elements.modalSpecWeight.textContent = product.specs?.weight || "550 grams";
  Elements.modalSpecCompartments.textContent = product.specs?.compartments || "3 Chambers";
  Elements.modalSpecWarranty.textContent = product.specs?.warranty || "1 Year Cover";
  Elements.modalSpecResistance.textContent = product.specs?.resistance || "Water Resistant Fabric";

  // Bookmarking heart toggle indicator
  const isWishlisted = appState.savedBookmarks.includes(product.id);
  Elements.modalWishlistToggleAction.setAttribute("data-modal-bag-id", product.id);
  if (isWishlisted) {
    Elements.modalWishlistToggleAction.classList.add("active");
  } else {
    Elements.modalWishlistToggleAction.classList.remove("active");
  }

  // Build authentic WhatsApp Buy Inquiry Link
  const targetPhone = "916309545434";
  const customQueryMessage = `Hello Sanchika Bags! I was exploring your Sanchika Bags catalog and fell in love with this product. I would like to check availability for purchase:
  
*Product Name:* ${product.name}
*Product ID:* SCH-BAG-${product.id.toString().padStart(3, '0')}
*Brand:* ${product.brand}
*Category:* ${product.category}
*Price Listed:* ₹${product.price}

Please let me know if this item is currently in stock. Thanks!`;
  
  Elements.modalWhatsappDirectLink.href = `https://wa.me/${targetPhone}?text=${encodeURIComponent(customQueryMessage)}`;

  // Share anchor setup: inject id route in client location parameters
  Elements.modalShareLinkAction.setAttribute("data-share-id", product.id);

  // Activate CSS overlays
  Elements.productDetailModal.classList.add("active");
  Elements.html.style.overflow = "hidden"; // Block backing scroll
}

function closeProductModal() {
  Elements.productDetailModal.classList.remove("active");
  Elements.html.style.overflow = ""; // Resume backing scroll
}


// 12. Bookmarking persistence logic on mouse clicks
function handleToggleBookmark(productId) {
  const index = appState.savedBookmarks.indexOf(productId);
  if (index > -1) {
    // Pop bookmarked item
    appState.savedBookmarks.splice(index, 1);
  } else {
    // Append item
    appState.savedBookmarks.push(productId);
  }
  
  // Persist storage
  localStorage.setItem("sanchika_bookmarks", JSON.stringify(appState.savedBookmarks));
  
  // Instant visual updates to card buttons and header badge count
  Elements.bookmarkCount.textContent = appState.savedBookmarks.length;
  const mBookmarkCount_2 = document.getElementById("mobile-bookmark-count");
  if (mBookmarkCount_2) {
    mBookmarkCount_2.textContent = appState.savedBookmarks.length;
  }
  
  // Update visible card heart buttons
  const cardHearts = document.querySelectorAll(`[data-wishlist-id="${productId}"]`);
  cardHearts.forEach(btn => {
    if (appState.savedBookmarks.includes(productId)) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Keep modal copy aligned
  if (Elements.modalWishlistToggleAction.getAttribute("data-modal-bag-id") == productId) {
    if (appState.savedBookmarks.includes(productId)) {
      Elements.modalWishlistToggleAction.classList.add("active");
    } else {
      Elements.modalWishlistToggleAction.classList.remove("active");
    }
  }
}


// 13. Deep-linking / Routing support: Open product if ID exists in URL query on load
function parseURLDeepLinking() {
  const parameters = new URLSearchParams(window.location.search);
  const bagIdParam = parameters.get("id");
  if (bagIdParam) {
    const matchedId = parseInt(bagIdParam);
    if (!isNaN(matchedId)) {
      setTimeout(() => {
        openProductModal(matchedId);
      }, 500);
    }
  }
}


// 14. Master Cleansing: Recalibrate search values, selects, and render inventory
function resetAllCatalogFilters() {
  appState.activeSearchQuery = "";
  appState.activeCategory = "All";
  appState.activeBrand = "All";
  appState.activePriceRange = "All";
  appState.activeColor = "All";
  appState.activeCapacity = "All";

  Elements.searchInput.value = "";
  Elements.filterCategory.value = "All";
  Elements.filterBrand.value = "All";
  Elements.filterPrice.value = "All";
  Elements.filterColor.value = "All";
  Elements.filterCapacity.value = "All";
  Elements.searchClearBtn.classList.add("hidden");
  if (Elements.searchSuggestionsBox) {
    Elements.searchSuggestionsBox.innerHTML = "";
    Elements.searchSuggestionsBox.classList.add("hidden");
  }

  document.querySelectorAll(".category-bar-item").forEach(item => {
    if (item.getAttribute("data-brand") === "All") {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  renderCatalog(true);
}


// 15. Standard Event Binding Listeners on DOM Elements
document.addEventListener("DOMContentLoaded", async () => {
  // Boot Theme
  initializeTheme();

  // Dynamically load remote JSON products list
  await initProductsDatabase();
  
  // Initial Catalog Construction
  renderCatalog(true);
  
  // Verify deep links URL
  parseURLDeepLinking();

  // Theme Action
  Elements.themeToggleBtn.addEventListener("click", toggleTheme);

  // Search Key Handlers with dynamic debouncing
  const updateSearchSuggestions = () => {
    const query = Elements.searchInput.value.trim().toLowerCase();
    const suggestionsBox = Elements.searchSuggestionsBox;
    if (!suggestionsBox) return;

    if (query.length < 2) {
      suggestionsBox.classList.add("hidden");
      return;
    }

    // Find matches
    const suggestions = new Set();
    
    PRODUCTS_DATABASE.forEach(prod => {
      const name = prod.name ? prod.name.toLowerCase() : "";
      const brand = prod.brand ? prod.brand.toLowerCase() : "";
      const cat = prod.category ? prod.category.toLowerCase() : "";
      const col = prod.color ? prod.color.toLowerCase() : "";
      
      if (name.includes(query)) {
        suggestions.add(prod.name);
      }
      if (name.includes("galaxy")) {
        // Add variations as required by specs
        suggestions.add("Galaxy");
        suggestions.add("Galaxy Blue");
        suggestions.add("Galaxy Black");
      }
      if (brand.includes(query)) {
        suggestions.add(prod.brand);
      }
      if (cat.includes(query)) {
        suggestions.add(prod.category);
      }
      if (col.includes(query)) {
        suggestions.add(prod.color);
      }
    });

    const uniqueSuggestions = Array.from(suggestions)
      .filter(term => term.toLowerCase().includes(query))
      .slice(0, 5);

    if (uniqueSuggestions.length === 0) {
      suggestionsBox.classList.add("hidden");
      return;
    }

    suggestionsBox.innerHTML = "";
    uniqueSuggestions.forEach(text => {
      const item = document.createElement("div");
      item.className = "suggestion-item";
      
      // Highlight the matching substring
      const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(`(${escapedQuery})`, "gi");
      const highlighted = text.replace(regex, "<mark class='text-highlight-match'>$1</mark>");
      
      item.innerHTML = `
        <i data-lucide="corner-down-right" class="suggestion-icon"></i>
        <span>${highlighted}</span>
      `;
      
      item.addEventListener("click", () => {
        Elements.searchInput.value = text;
        appState.activeSearchQuery = text;
        Elements.searchClearBtn.classList.remove("hidden");
        suggestionsBox.classList.add("hidden");
        renderCatalog(true);
      });
      
      suggestionsBox.appendChild(item);
    });
    
    lucide.createIcons({
      attrs: {
        class: "suggestion-icon"
      }
    });
    
    suggestionsBox.classList.remove("hidden");
  };

  const processImmediateSearch = (e) => {
    appState.activeSearchQuery = e.target.value;
    if (appState.activeSearchQuery) {
      Elements.searchClearBtn.classList.remove("hidden");
    } else {
      Elements.searchClearBtn.classList.add("hidden");
    }
    updateSearchSuggestions();
    renderCatalog(true);
  };
  
  Elements.searchInput.addEventListener("input", (e) => {
    if (Elements.searchSpinnerIcon) {
      Elements.searchSpinnerIcon.classList.remove("hidden");
    }
  });
  Elements.searchInput.addEventListener("input", debounce(processImmediateSearch, 300));
  
  // Direct clear inquiry button click
  Elements.searchClearBtn.addEventListener("click", () => {
    Elements.searchInput.value = "";
    appState.activeSearchQuery = "";
    Elements.searchClearBtn.classList.add("hidden");
    if (Elements.searchSuggestionsBox) {
      Elements.searchSuggestionsBox.innerHTML = "";
      Elements.searchSuggestionsBox.classList.add("hidden");
    }
    renderCatalog(true);
    Elements.searchInput.focus();
  });

  // Catalog Brand Selection Highlights
  document.querySelectorAll(".category-bar-item").forEach(btn => {
    btn.addEventListener("click", () => {
      const brand = btn.getAttribute("data-brand");
      document.querySelectorAll(".category-bar-item").forEach(item => item.classList.remove("active"));
      btn.classList.add("active");
      
      // Update primary brand selector & state
      Elements.filterBrand.value = brand;
      appState.activeBrand = brand;
      renderCatalog(true);
      
      // Scroll to Catalog smoothly with header offset
      scrollToCatalog();
    });
  });

  const shopNowBtn = document.getElementById("hero-shop-now-trigger");
  if (shopNowBtn) {
    shopNowBtn.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToCatalog();
    });
  }

  const exploreBtn = document.getElementById("hero-explore-trigger");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToProducts();
    });
  }

  // Floating Bag Clicks - auto scroll to catalog and apply brand filter dynamically
  document.querySelectorAll(".floating-bag-item").forEach(bag => {
    bag.addEventListener("click", () => {
      // Set to Skybags Junior brand filter
      if (Elements.filterBrand) {
        Elements.filterBrand.value = "Skybags Junior";
        appState.activeBrand = "Skybags Junior";
        
        // Update brand active flags in the horizontal menu
        document.querySelectorAll(".category-bar-item").forEach(item => {
          if (item.getAttribute("data-brand") === "Skybags Junior") {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }
      
      // Update catalog
      renderCatalog(true);
      
      // Smooth scroll to catalog with header offset
      scrollToCatalog();
    });
  });

  // Filter Dropdown select bindings
  Elements.filterCategory.addEventListener("change", (e) => {
    appState.activeCategory = e.target.value;
    renderCatalog(true);
  });

  Elements.filterBrand.addEventListener("change", (e) => {
    const val = e.target.value;
    appState.activeBrand = val;
    document.querySelectorAll(".category-bar-item").forEach(item => {
      if (item.getAttribute("data-brand") === val) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
    renderCatalog(true);
  });

  Elements.filterPrice.addEventListener("change", (e) => {
    appState.activePriceRange = e.target.value;
    renderCatalog(true);
  });

  Elements.filterColor.addEventListener("change", (e) => {
    appState.activeColor = e.target.value;
    renderCatalog(true);
  });

  Elements.filterCapacity.addEventListener("change", (e) => {
    appState.activeCapacity = e.target.value;
    renderCatalog(true);
  });

  // Clear suggestions dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (Elements.searchSuggestionsBox && !Elements.searchSuggestionsBox.contains(e.target) && e.target !== Elements.searchInput) {
      Elements.searchSuggestionsBox.classList.add("hidden");
    }
  });

  // Filter Cleaners clicks
  Elements.clearFiltersBtn.addEventListener("click", resetAllCatalogFilters);
  Elements.noResultsResetBtn.addEventListener("click", resetAllCatalogFilters);

  // Scroll to Top action trigger
  Elements.scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Mobile Drawer Toggle click bindings
  Elements.mobileMenuToggle.addEventListener("click", () => {
    Elements.mobileMenuToggle.classList.toggle("open");
    Elements.mobileDrawer.classList.toggle("active");
  });

  Elements.mobileDrawerClose.addEventListener("click", () => {
    Elements.mobileMenuToggle.classList.remove("open");
    Elements.mobileDrawer.classList.remove("active");
  });

  // Close drawer if user clicks on backing overlay
  Elements.mobileDrawer.addEventListener("click", (e) => {
    if (e.target === Elements.mobileDrawer) {
      Elements.mobileMenuToggle.classList.remove("open");
      Elements.mobileDrawer.classList.remove("active");
    }
  });

  // Also close drawer if user clicks on mobile navigation anchors
  document.querySelectorAll(".drawer-link").forEach(link => {
    link.addEventListener("click", () => {
      Elements.mobileMenuToggle.classList.remove("open");
      Elements.mobileDrawer.classList.remove("active");
      
      // Update active nav styling
      document.querySelectorAll(".drawer-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Sync active desktop navigation styles on mouse clicks
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Handle premium footer category and brand filtering
  document.querySelectorAll(".footer-links-list-new a[data-filter]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const val = link.getAttribute("data-filter");
      appState.activeCategory = val;
      if (Elements.filterCategory) {
        Elements.filterCategory.value = val;
      }
      renderCatalog(true);
      scrollToCatalog();
    });
  });

  // Dynamic Item Card Clicks delegation listener 
  Elements.productsGridView.addEventListener("click", (e) => {
    // Handle heart bookmark clicks
    const heartBtn = e.target.closest(".product-wishlist-toggle");
    if (heartBtn) {
      e.stopPropagation();
      const bagId = parseInt(heartBtn.getAttribute("data-wishlist-id"));
      handleToggleBookmark(bagId);
      return;
    }

    // Handle view details details clicks or clicking anywhere on the product card
    const detailsBtn = e.target.closest(".view-details-action");
    const cardEl = e.target.closest(".product-card");
    if (detailsBtn) {
      e.stopPropagation();
      const bagId = parseInt(detailsBtn.getAttribute("data-details-id"));
      openProductModal(bagId);
      return;
    } else if (cardEl) {
      e.stopPropagation();
      const bagId = parseInt(cardEl.id ? cardEl.id.replace("bag-card-", "") : "");
      if (!isNaN(bagId)) {
        openProductModal(bagId);
      }
      return;
    }
  });

  // Modal Specific bindings
  Elements.modalCloseTrigger.addEventListener("click", closeProductModal);
  
  // Close Modal if clicking backdrop blur area
  Elements.productDetailModal.addEventListener("click", (e) => {
    if (e.target === Elements.productDetailModal) {
      closeProductModal();
    }
  });

  // Share link copy anchor action
  Elements.modalShareLinkAction.addEventListener("click", () => {
    const shareId = Elements.modalShareLinkAction.getAttribute("data-share-id");
    // Compose deep route URL
    const destinationUrl = `${window.location.origin}${window.location.pathname}?id=${shareId}`;

    navigator.clipboard.writeText(destinationUrl)
      .then(() => {
        // Show success pop Toast Notice
        Elements.modalToastNotice.classList.remove("hidden");
        // Clear Toast after 2.5 seconds
        setTimeout(() => {
          Elements.modalToastNotice.classList.add("hidden");
        }, 2500);
      })
      .catch(err => {
        console.error("Unable to transcribe product bookmark route", err);
      });
  });

  // Bookmark heart inside details modal click binding
  Elements.modalWishlistToggleAction.addEventListener("click", () => {
    const modalBagId = parseInt(Elements.modalWishlistToggleAction.getAttribute("data-modal-bag-id"));
    if (!isNaN(modalBagId)) {
      handleToggleBookmark(modalBagId);
    }
  });

  // Saved bookmark badge click: triggers automatic search parameter filters query "Sanchika" or highlights bookmarked list
  Elements.catalogBookmarkBtn.addEventListener("click", () => {
    // If bookmarked count > 0, filter catalog to show bookmarked items only!
    if (appState.savedBookmarks.length === 0) {
      // Just notify user or brief reset
      resetAllCatalogFilters();
      alert("No bookmarked bags yet! Click on the heart symbols of your favorite bags to save them.");
      return;
    }
    
    // Simulate brief spin loading
    Elements.productsGridView.style.opacity = "0";
    Elements.catalogSpinner.classList.remove("hidden");
    Elements.catalogNoResults.classList.add("hidden");

    setTimeout(() => {
      Elements.productsGridView.innerHTML = "";
      Elements.catalogSpinner.classList.add("hidden");

      const bookmarkedItems = PRODUCTS_DATABASE.filter(item => appState.savedBookmarks.includes(item.id));
      
      bookmarkedItems.forEach((product, idx) => {
        const cardHTML = `
          <div class="product-card loaded" id="bag-card-${product.id}" style="animation-duration: 0.5s; animation-delay: ${idx * 0.04}s;">
            <span class="product-badge">${product.category}</span>
            <div class="product-image-container">
              <img src="${product.image}" loading="lazy" class="product-card-img" alt="${product.name}" referrerPolicy="no-referrer">
              <button class="product-wishlist-toggle active" data-wishlist-id="${product.id}" title="Bookmark this Bag">
                <i data-lucide="heart"></i>
              </button>
            </div>
            <div class="product-meta-container">
              <span class="product-brand">${product.brand}</span>
              <h3 class="product-name">${product.name}</h3>
              <p class="product-description">${product.description}</p>
              <div class="product-footer-strip">
                <div class="product-price-wrapper">
                  <span class="price-sub">Retail Price</span>
                  <span class="price-tag">₹${product.price.toLocaleString('en-IN')}</span>
                </div>
                <button class="view-details-action" data-details-id="${product.id}">
                  <span>View Details</span>
                  <i data-lucide="arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        `;
        Elements.productsGridView.insertAdjacentHTML("beforeend", cardHTML);
      });

      // Recalibrate Lucide Vector Icons
      lucide.createIcons();
      Elements.productsGridView.style.opacity = "1";
      Elements.productsGridView.classList.remove("hidden");

      // Update counters to reflect Saved items
      animateStatsCounters(PRODUCTS_DATABASE.length, bookmarkedItems.length);
      
      // Inject saved bookmark token label underneath dropdowns
      Elements.activeTokensArea.classList.remove("hidden");
      Elements.activeTokensList.innerHTML = `
        <span class="token-badge" id="token-cleared-bookmarks">
          <span>Highlighting Saved Bags Only (${bookmarkedItems.length})</span>
          <i data-lucide="x"></i>
        </span>
      `;
      
      const clearedBtn = document.getElementById("token-cleared-bookmarks");
      if (clearedBtn) {
        clearedBtn.addEventListener("click", () => {
          resetAllCatalogFilters();
        });
      }

      lucide.createIcons();

    }, 300);
  });

  // --- MOBILE FIRST REDESIGN EVENT BINDINGS ---
  
  // A. Mobile Theme Toggle inside Drawer
  const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener("click", () => {
      toggleTheme();
    });
  }

  // B. Mobile Favorites/Bookmark Badge click inside Drawer
  const mobileCatalogBookmark = document.getElementById("mobile-catalog-bookmark");
  if (mobileCatalogBookmark) {
    mobileCatalogBookmark.addEventListener("click", () => {
      // close mobile drawer
      Elements.mobileMenuToggle.classList.remove("open");
      Elements.mobileDrawer.classList.remove("active");
      
      // scroll to catalog section with header offset
      scrollToCatalog();
      
      // trigger original bookmark filtering logic
      Elements.catalogBookmarkBtn.click();
    });
  }

  // C. Hero Full Width Search Sync logic
  const heroSearchInput = document.getElementById("hero-search-input");
  const heroSearchSubmitBtn = document.getElementById("hero-search-submit-btn");

  if (heroSearchInput) {
    heroSearchInput.addEventListener("input", (e) => {
      const val = e.target.value;
      if (Elements.searchInput) {
        Elements.searchInput.value = val;
        // Trigger immediate catalog search directly
        const searchClear = Elements.searchClearBtn;
        if (searchClear) {
          if (val.length > 0) {
            searchClear.classList.remove("hidden");
          } else {
            searchClear.classList.add("hidden");
          }
        }
        processImmediateSearch();
      }
    });

    heroSearchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        scrollToCatalog();
      }
    });
  }

  if (heroSearchSubmitBtn) {
    heroSearchSubmitBtn.addEventListener("click", () => {
      scrollToCatalog();
    });
  }

  // D. Mobile Filters Bottom Sheet Toggle
  const mobileFilterTrigger = document.getElementById("mobile-filter-trigger");
  const mobileSheetClose = document.getElementById("mobile-sheet-close");
  const bottomSheetOverlay = document.getElementById("bottom-sheet-overlay");
  const filtersGrid = document.getElementById("filters-grid");

  const openBottomSheet = () => {
    if (filtersGrid && bottomSheetOverlay) {
      filtersGrid.classList.add("active");
      bottomSheetOverlay.classList.add("active");
      document.body.style.overflow = "hidden"; // Disable scroll behind
    }
  };

  const closeBottomSheet = () => {
    if (filtersGrid && bottomSheetOverlay) {
      filtersGrid.classList.remove("active");
      bottomSheetOverlay.classList.remove("active");
      document.body.style.overflow = ""; // Re-enable scroll
    }
  };

  if (mobileFilterTrigger) {
    mobileFilterTrigger.addEventListener("click", openBottomSheet);
  }

  if (mobileSheetClose) {
    mobileSheetClose.addEventListener("click", closeBottomSheet);
  }

  if (bottomSheetOverlay) {
    bottomSheetOverlay.addEventListener("click", closeBottomSheet);
  }

  // Auto-close bottom sheet on any filter selection element change on mobile (to show visual updates instantly)
  const filterSelects = [
    Elements.filterCategory,
    Elements.filterBrand,
    Elements.filterPrice,
    Elements.filterColor,
    Elements.filterCapacity
  ];

  filterSelects.forEach(selectElement => {
    if (selectElement) {
      selectElement.addEventListener("change", () => {
        // Only close if it's currently on mobile view (under 768px)
        if (window.innerWidth < 768) {
          setTimeout(closeBottomSheet, 300); // slight delay for visual satisfaction
        }
      });
    }
  });

  // Also hook into clear filter button to close bottom-sheet
  Elements.clearFiltersBtn.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      closeBottomSheet();
    }
    // Also clear hero search input
    if (heroSearchInput) {
      heroSearchInput.value = "";
    }
  });
});
