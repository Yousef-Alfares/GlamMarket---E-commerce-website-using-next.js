import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
  const product = await request.json();

  const Cookies = cookies();

  const cartFromCookis = Cookies.get("cart");

  let cart;

  if (cartFromCookis) {
    cart = JSON.parse(cartFromCookis.value);
  } else {
    cart = [];
  }

  // If the product exist will be quantity add 1 and return true, else will be return false
  const isProductExist = cart.some((productFromCart) => {
    if (productFromCart.id == product.id) {
      productFromCart.quantity += product.quantity;
      Cookies.set("cart", JSON.stringify([...cart]));
      return NextResponse.json(
        { message: "This favorite product has been added" },
        { status: 200 }
      );
    }
    return productFromCart.id == product.id;
  });

  if (!isProductExist) {
    Cookies.set("cart", JSON.stringify([...cart, { ...product }]));
  }

  return NextResponse.json(
    { message: "This favorite product has been added" },
    { status: 200 }
  );
}

export async function GET() {
  const Cookies = cookies();

  try {
    const cartFromCookies = Cookies.get("cart");

    if (!cartFromCookies) {
      return NextResponse.json(
        [{ message: "You don't have any products in your cart yet." }],
        { status: 200 }
      );
    }

    const cart = JSON.parse(cartFromCookies.value);

    return NextResponse.json(cart, { status: 200 });
  } catch (error) {
    return NextResponse.json([{ error: error }], { status: 404 });
  }
}
