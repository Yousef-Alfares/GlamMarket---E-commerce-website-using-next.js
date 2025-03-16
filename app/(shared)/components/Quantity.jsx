"use client";

import PlusIcon from "@/public/icons/Plus.svg";
import MinusIcon from "@/public/icons/Minus.svg";
import Image from "next/image";

const Quantity = ({ setValueOFQuantity, valueOFQuantity }) => {
  if (valueOFQuantity < 1) {
    setValueOFQuantity(1);
  }

  return (
    <div className="flex gap-4">
      <div
        className="relative inline-flex items-center rounded-lg px-2 py-1 text-gray-400 hover:bg-gray-50 bg-amber-500 border border-light-background hover:border-amber-500 cursor-pointer transition-colors"
        onClick={() => {
          setValueOFQuantity((value) => value - 1);
        }}
      >
        <Image src={MinusIcon} alt="" aria-hidden="true" className="h-4 w-4" />
      </div>
      <input
        type="number"
        value={valueOFQuantity}
        className="w-8 h-9 rounded-lg focus-visible:outline-none border border-light-border text-amber-500 text-center"
        onChange={(e) => {
          setValueOFQuantity(+e.target.value);
        }}
      />
      <div
        className="relative inline-flex items-center rounded-lg px-2 py-1 text-gray-400 hover:bg-gray-50 bg-amber-500 border border-light-background hover:border-amber-500 cursor-pointer transition-colors"
        onClick={() => {
          setValueOFQuantity((value) => value + 1);
        }}
      >
        <Image src={PlusIcon} alt="" aria-hidden="true" className="h-4 w-4" />
      </div>
    </div>
  );
};

export default Quantity;
