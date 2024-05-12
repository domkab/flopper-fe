export interface Size {
  name: string;
  stock: number;
}

export interface Variation {
  color: string;
  images: string[];
  size: Size[];
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  price: number;
  discount: number;
  new: boolean;
  stock?: number;
  rating: number;
  saleCount: number;
  category: string[];
  tag: string[];
  variation: Variation[];
  image: string[];
  shortDescription: string;
  fullDescription: string;
  affiliateLink?: string;
  selectedProductColor?: string;
  selectedProductSize?: string;
}

export interface CartItem {
  id: string;
  name: string;
  image: string[];
  price: number;
  discount: number;
  quantity: number;
  cartItemId: string;
  product: Product;
  selectedProductColor?: string;
  selectedProductSize?: string;
}

export interface WishlistItem {
  id: string;
  product: Product;
}

export interface CompareItem {
  id: string;
  name: string;
  price: number;
  imageUrl?: string;
}

export interface CompareState {
  compareItems: CompareItem[];
}

export interface ProductState {
  products: Product[];
}

export interface Currency {
  code: string;
  symbol: string;
  currencyRate: number;
  currencySymbol: string;
}

export interface CurrencyState {
  current: Currency;
  currencySymbol: string;
  currencyRate: number;
  currencyName: string;
}

export interface CartState {
  cartItems: CartItem[];
}

export interface WishlistState {
  wishlistItems: Product[];
}

export interface RootState {
  product: ProductState;
  currency: CurrencyState;
  cart: CartState;
  wishlist: WishlistState;
  compare: CompareState;
}

export interface ProductGridProps {
  spaceBottomClass?: string;
  category?: string;
  type?: string;
  limit?: number;
}