"use client";
const { useReducer, createContext } = require("react");

export const FavoritesContext = createContext([]);

const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

const reducer = (state, action) => {
  const filterProducts = () => {
    return state.favorites.filter(
      (product) => product.id !== action?.payload?.id
    );
  };

  const alreadyAdded = state.favorites.some(
    (oldProduct) => oldProduct.id == action?.payload?.product?.id
  );

  if (action.type == "ADD_PRODUCT" && alreadyAdded) {
    action.type = "DELETE_PRODUCT";
    action.payload.id = action.payload.product.id;
  }

  switch (action.type) {
    case "ADD_PRODUCT":
      localStorage.setItem(
        "favorites",
        JSON.stringify([...state.favorites, action.payload.product])
      );
      return {
        ...state,
        favorites: [...state.favorites, action.payload.product],
      };

    case "DELETE_PRODUCT":
      localStorage.setItem("favorites", JSON.stringify(filterProducts()));
      return {
        ...state,
        favorites: filterProducts(),
      };
    case "DELETE_ALL_PRODUCTS":
      localStorage.setItem("favorites", JSON.stringify([]));
      return {
        ...state,
        favorites: [],
      };
    default:
      state;
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
