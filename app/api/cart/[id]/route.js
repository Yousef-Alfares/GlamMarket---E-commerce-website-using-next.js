import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const Cookies = cookies();

  let cart;

  try {
    const cartFromCookies = Cookies.get("cart");

    cart = JSON.parse(cartFromCookies.value);

    if (cart.length == 1) {
      Cookies.delete("cart");
      return NextResponse.json(
        { message: "This product has been deleted from your cart" },
        { status: 201 }
      );
    }
    const productsFilter = cart.filter(
      (product) => product.id !== +params.id && product
    );

    Cookies.set("cart", JSON.stringify(productsFilter));

    return NextResponse.json(
      { message: "This product has been deleted from your cart" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 404 });
  }
}
