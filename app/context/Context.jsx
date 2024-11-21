import React from "react";
import UserProvider from "./UserContext";
import FavoritesProvider from "./FavoritesContext";
import CartProvider from "./CartContext";

const Context = ({ children }) => {
  return (
    <UserProvider>
      <FavoritesProvider>
        <CartProvider>{children}</CartProvider>
      </FavoritesProvider>
    </UserProvider>
  );
};

export default Context;
