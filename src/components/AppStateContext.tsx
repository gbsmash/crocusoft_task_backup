import React, { ReactNode, createContext, useContext, useState } from 'react';
import Product from '../types/Product';
import OrderItem from '../types/OrderItem';


interface AppStateContextType {
    favorites: Product[];
    cart: OrderItem[];
    toggleAddToCart: (cartItem: OrderItem) => void;
    toggleFavorite: (product: Product) => void;
  }

const AppStateContext = createContext<AppStateContextType>({} as AppStateContextType);

interface AppStateProviderProps {
    children: ReactNode;
}

export const AppStateProvider: React.FC<AppStateProviderProps> = ({ children }) => {

    const [favorites, setFavorites] = useState<Product[]>([]);
    const [cart, setCart] = useState<OrderItem[]>([]);

    const toggleAddToCart = (cartItem: OrderItem) => {
        setCart((currentCart) => currentCart.includes(cartItem) 
            ? currentCart.filter(item => item.id !== cartItem.id)
            : [...currentCart, cartItem]);
    };

    const toggleFavorite = (product: Product) => {
        setFavorites((currentFavorites) => currentFavorites.includes(product)
        ? currentFavorites.filter(item => item.id !== product.id)
        : [...currentFavorites, product]);
    };

  return (
    <AppStateContext.Provider value={{ favorites, cart, toggleAddToCart, toggleFavorite }}>
      {children}
    </AppStateContext.Provider>
  );
};

export function useAppState() {
  const context = useContext(AppStateContext);
  return context;
}
