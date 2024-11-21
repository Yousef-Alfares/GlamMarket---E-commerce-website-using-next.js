"use client";
const { useReducer, createContext, useState, useEffect } = require("react");

export const CartContext = createContext([]);

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const countProductQuantity = (newProduct, oldProducts) => {
  oldProducts.map((product) => {
    if (product.id == newProduct.id) {
      product.quantity += newProduct.quantity;
    }
  });
  return oldProducts;
};

const reducer = (state, action) => {
  const filterProducts = state.cart.filter(
    (productOfCart) => productOfCart.id !== action.payload?.id
  );

  const alreadyAdded = state.cart.some(
    (oldProduct) => oldProduct.id == action.payload.product?.id
  );

  switch (action.type) {
    case "ADD_PRODUCT":
      if (alreadyAdded) {
        const updatedCart = state.cart.map((product) => {
          if (product.id == action.payload.product.id) {
            return {
              ...product,
              quantity: product.quantity + action.payload.product.quantity,
            };
          }
          return product;
        });
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return {
          ...state,
          cart: updatedCart,
        };
      }
      const newCart = [...state.cart, action.payload.product];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart,
      };

    case "DELETE_PRODUCT":
      localStorage.setItem("cart", JSON.stringify(filterProducts));
      return {
        ...state,
        cart: filterProducts,
      };
    default:
      state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
