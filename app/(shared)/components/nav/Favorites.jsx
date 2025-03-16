import Image from "next/image";
import Button from "@/app/(shared)/components/Button";
import { FavoritesContext } from "@/app/(shared)/context/FavoritesContext";
import { useContext } from "react";
import FavoriteIcon from "@/public/icons/FavoriteIcon";
import StarIcon from "@/public/icons/StarIcon";

const Favorites = () => {
  const { state, dispatch } = useContext(FavoritesContext);

  const deleteProductFromFavorites = (id) => {
    dispatch({ type: "DELETE_PRODUCT", payload: { id: id } });
  };

  const removeAllFavorites = () => {
    dispatch({ type: "DELETE_ALL_PRODUCTS" });
  };

  return (
    <div className="rounded-[20px] rounded-tr-none overflow-hidden">
      <div
        className={`h-[350px] bg-light-background rounded-tl-[20px] overflow-auto custom-scroll overscroll-none`}
      >
        {!state.favorites.length ? (
          <div className="h-full flex justify-center items-center">
            <h3>Your favorites is empty</h3>
          </div>
        ) : (
          state.favorites.map((favorite, index) => (
            <div className={`flex relative overflow-hidden`} key={index}>
              <span className="absolute w-14 h-14 bg-amber-500 rounded-full top-[57px] left-[212px] blur-[100px] opacity-55"></span>
              <div className="w-[20%] bg-white flex justify-center items-center">
                <Image
                  src={favorite.image}
                  alt={`Image: ${favorite.title}`}
                  className="w-12"
                  width={48}
                  height={48}
                />
              </div>
              <div className="p-3 w-[80%] h-24 flex items-start justify-between flex-col">
                {/* Title & rate of product */}
                <div className="flex-between w-full">
                  <h2 className="text-md font-medium text-gray-text-800 max-w-[240px]">
                    {favorite.title}
                  </h2>
                  <div className="flex gap-1">
                    <StarIcon className="w-auto h-auto" />
                    <span className="text-base font-medium text-gray-text-800">
                      {favorite.rating}
                    </span>
                  </div>
                </div>
                {/* Price, Quantity, like & close buttons */}
                <div className="flex-between w-full">
                  <h2 className="text-lg font-bold">${favorite.price}</h2>
                  <div className="py-1 px-1 bg-amber-50 rounded-lg cursor-pointer">
                    <FavoriteIcon
                      id={favorite.id}
                      onClick={() => deleteProductFromFavorites(favorite.id)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex items-center justify-end bg-light-background px-3 py-5 border-t border-light-border-50">
        <Button
          onClick={() => removeAllFavorites()}
          className={`py-[8px] px-[15px] font-medium text-base bg-red ${
            !state.favorites.length
              ? "opacity-50 hover:bg-red hover:border-light-background hover:text-white"
              : "hover:bg-light-background hover:text-red"
          }`}
          disabled={!state.favorites.length}
        >
          Remove All
        </Button>
      </div>
    </div>
  );
};

export default Favorites;
