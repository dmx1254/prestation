import React from "react";

import man from "../assets/hero/man.png";

const Hero = () => {
  return (
    <div className="flex items-center justify-around w-screen h-[450px] bg-orange-100">
      <div className="flex flex-col items-start gap-4">
        <h1 className="max-w-[33.3333rem] font-bold text-6xl">
          Choisissez votre coach sportif
        </h1>
        <button className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-400 hover:to-rose-400 py-3 px-4 text-white font-semibold rounded-[20px]">
          Reserver mon coach sportif
        </button>
      </div>
      <img src={man} alt="athletes" className="object-cover" />
    </div>
  );
};

export default Hero;
