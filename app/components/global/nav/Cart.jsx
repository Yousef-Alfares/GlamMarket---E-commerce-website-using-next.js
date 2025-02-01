"use client";
import Close from "@/public/icons/Close.svg";
import Image from "next/image";
import Button from "@/app/elements/Button";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import FavoriteIcon from "@/public/icons/FavoriteIcon";
import { FavoritesContext } from "@/app/context/FavoritesContext";

const Cart = () => {
  const { state: cartState, dispatch: cartDispatch } = useContext(CartContext);
  const { state: favoritesState, dispatch: favoritesDispatch } =
    useContext(FavoritesContext);

  const productPrices = cartState.cart.map(
    (product) => product.price * product.quantity
  );

  const totalPrice = productPrices.reduce((prev, current) => prev + current, 0);

  const deleteProductFromCart = (id) => {
    cartDispatch({ type: "DELETE_PRODUCT", payload: { id: id } });
  };

  const addProductToFavorites = (product) => {
    favoritesDispatch({ type: "ADD_PRODUCT", payload: { product: product } });
  };

  return (
    <div className="rounded-[20px] rounded-tr-none bg-light-background-90 backdrop-blur-lg">
      <div
        className={`h-[350px] rounded-tl-[20px] overflow-auto custom-scroll overscroll-none ${
          cartState.cart[0]?.message ? "flex items-center justify-center" : null
        }`}
      >
        {!cartState.cart.length ? (
          <div className="h-full flex justify-center items-center">
            <h3>Your cart is empty</h3>
          </div>
        ) : (
          cartState.cart.map((cart) => (
            <div className={`flex relative overflow-hidden`} key={cart.id}>
              <span className="absolute w-14 h-14 bg-amber-500 rounded-full top-[57px] left-[212px] blur-[100px] opacity-55"></span>
              <div className="w-[20%] bg-white flex justify-center items-center">
                <Image
                  src={cart.image}
                  alt={`Cart image: ${cart.image}`}
                  className="w-12 h-auto"
                  width={48}
                  height={48}
                />
              </div>
              <div className="p-3 w-[80%] h-24 flex items-start justify-between flex-col">
                {/* Title & rate of product */}
                <div className="flex-between w-full">
                  <h2 className="max-w-[75%] text-md font-medium text-gray-text-800 line-clamp-2">
                    {cart.title}
                  </h2>
                  <div className="flex gap-1">
                    <img src={"/icons/star.svg"}width={100} height={100} className="w-auto h-auto" alt="Star icon" />
                    <span className="text-base font-medium text-gray-text-800">
                      {cart.rating}
                    </span>
                  </div>
                </div>
                {/* Price, Quantity, like & close buttons */}
                <div className="flex-between w-full">
                  <h2 className="text-lg font-bold">${cart.price}</h2>
                  <div className="flex-between gap-3">
                    <input
                      type="number"
                      value={cart.quantity}
                      className="w-8 h-9 rounded-lg focus-visible:outline-none border border-light-border text-amber-500 text-center"
                      onChange={(e) => {
                        +e.target.value >= 1
                          ? cartDispatch({
                              type: "ADD_PRODUCT",
                              payload: {
                                product: {
                                  ...cart,
                                  quantity:
                                    cart.quantity > +e.target.value ? -1 : 1,
                                },
                              },
                            })
                          : null;
                      }}
                    />
                    <div className="py-1 px-1 bg-amber-50 rounded-lg cursor-pointer">
                      <FavoriteIcon
                        id={cart.id}
                        onClick={() => {
                          addProductToFavorites({
                            id: cart.id,
                            title: cart.title,
                            image: cart.image,
                            rating: cart.rating.rate,
                            price: cart.price,
                          });
                        }}
                      />
                    </div>
                    <Image
                      src={Close}
                      className="cursor-pointer"
                      alt="Delete icon"
                      onClick={() => {
                        deleteProductFromCart(cart.id);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex-between px-3 py-5 border-t border-light-border-50">
        <h2 className="text-2xl font-bold text-gray-800">
          ${totalPrice.toFixed(2)}
        </h2>
        <Button className="py-[8px] px-[15px] font-medium text-base">
          Check out
        </Button>
      </div>
    </div>
  );
};

export default Cart;
