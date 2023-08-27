import React from "react";
import shoes from "../assets/images/big-shoe2.png";

const Prestation = ({ product }) => {
  return (
    <div className="flex items-center justify-center relative mt-8 w-[360px] h-[242px] bg-orange-600 rounded-[10px] overflow-hidden">
      <div className="absolute flex flex-col items-start left-[10%] top-[10%] z-50">
        <p className="max-w-[33.3333rem] text-gray-800 font-bold text-3xl">
          {product?.title}
        </p>
        <p className="text-gray-800 font-medium">{product?.subtitle}</p>
      </div>
      <img
        src={product?.image}
        alt="shoes"
        className="absolute w-full object-cover left-[15%] top-[52%] -translate-y-[50%]"
      />
    </div>
  );
};

export default Prestation;
