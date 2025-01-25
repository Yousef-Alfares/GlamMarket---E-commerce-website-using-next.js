"use client";
import { useReducer, createContext, useCallback } from "react";

export const CartContext = createContext({
  state: { cart: [] },
  dispatch: () => null
});

const CART_STORAGE_KEY = 'cart';

const getInitialCart = () => {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
  } catch {
    return [];
  }
};

const initialState = {
  cart: getInitialCart()
};

const updateLocalStorage = (cart) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      const existingProductIndex = state.cart.findIndex(
        product => product.id === action.payload.product.id
      );

      let newCart;
      if (existingProductIndex >= 0) {
        newCart = state.cart.map((product, index) => 
          index === existingProductIndex 
            ? {
                ...product,
                quantity: product.quantity + action.payload.product.quantity
              }
            : product
        );
      } else {
        newCart = [...state.cart, action.payload.product];
      }

      updateLocalStorage(newCart);
      return { ...state, cart: newCart };
    }

    case "DELETE_PRODUCT": {
      const newCart = state.cart.filter(
        product => product.id !== action.payload.id
      );
      updateLocalStorage(newCart);
      return { ...state, cart: newCart };
    }

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const memoizedValue = useCallback({
    state,
    dispatch
  }, [state]);

  return (
    <CartContext.Provider value={memoizedValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
