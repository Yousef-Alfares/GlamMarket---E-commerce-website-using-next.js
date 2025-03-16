"use client";
import { useReducer, createContext, useCallback } from "react";

// Action types as constants to prevent typos
const ActionTypes = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  DELETE_PRODUCT: 'DELETE_PRODUCT',
  DELETE_ALL_PRODUCTS: 'DELETE_ALL_PRODUCTS'
};

export const FavoritesContext = createContext({
  state: { favorites: [] },
  dispatch: () => null
});

const getFavoritesFromStorage = () => {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  } catch (error) {
    console.error('Error reading favorites from localStorage:', error);
    return [];
  }
};

const initialState = {
  favorites: getFavoritesFromStorage()
};

const updateLocalStorage = (favorites) => {
  try {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } catch (error) {
    console.error('Error saving favorites to localStorage:', error);
  }
};

const reducer = (state, action) => {
  const filterProducts = () => {
    return state.favorites.filter(
      (product) => product.id !== action?.payload?.id
    );
  };

  const alreadyAdded = state.favorites.some(
    (oldProduct) => oldProduct.id === action?.payload?.product?.id
  );

  if (action.type === ActionTypes.ADD_PRODUCT && alreadyAdded) {
    action.type = ActionTypes.DELETE_PRODUCT;
    action.payload.id = action.payload.product.id;
  }

  switch (action.type) {
    case ActionTypes.ADD_PRODUCT: {
      const newFavorites = [...state.favorites, action.payload.product];
      updateLocalStorage(newFavorites);
      return {
        ...state,
        favorites: newFavorites,
      };
    }

    case ActionTypes.DELETE_PRODUCT: {
      const filteredFavorites = filterProducts();
      updateLocalStorage(filteredFavorites);
      return {
        ...state,
        favorites: filteredFavorites,
      };
    }

    case ActionTypes.DELETE_ALL_PRODUCTS: {
      updateLocalStorage([]);
      return {
        ...state,
        favorites: [],
      };
    }

    default:
      return state;
  }
};

const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
