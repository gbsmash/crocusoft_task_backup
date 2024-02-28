import OrderItem from "./OrderItem";
import Product from "./Product";

export interface FavoritesState {
  favorites: Product[];
}

export interface CartState {
  cart: OrderItem[];
}

export type AppContextState = FavoritesState & CartState;

export interface AppContextActions {
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: string) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
}

export type AppContextType = AppContextState & AppContextActions;
