import React, { useState, useEffect } from "react";

import { navcat } from "../utils/data";

import { FaGift, FaBriefcase, FaBookOpen, FaUser } from "react-icons/fa";

import { headerLogo } from "../assets/images";
import { Link } from "react-router-dom";

const Navbar = ({ setNavToggle, navToggle }) => {
  const [catToHandle, setCatToHandle] = useState({});
  const handleItemChange = (item) => {
    setCatToHandle(navcat?.filter((cat) => cat?.title === item)[0]);
    setNavToggle(true);
  };

  return (
    <div className="flex items-center justify-center gap-12 top-0 sticky z-[999] h-[100px] p-4 my-0 bg-white">
      <Link to="/">
        <img
          src={headerLogo}
          alt="logo"
          width={129}
          height={29}
          className="m-0 w-[129px] h-[29px] object-cover"
        />
      </Link>
      <div className="flex items-center gap-4">
        {navcat?.map((item) => (
          <span
            key={item?.id}
            className="text-xs uppercase font-bold text-slate-500 cursor-pointer transition duration-300 hover:text-orange-500"
            onClick={() => handleItemChange(item?.title)}
          >
            {item?.title}
          </span>
        ))}

        {navToggle && (
          <div className="flex absolute items-center justify-center gap-8 bg-white p-4 top-[80%] left-1/2 transform -translate-x-1/2 shadow-md w-full">
            <div className="flex flex-col items-start gap-2">
              {catToHandle?.categories?.catString?.map((cat) => (
                <Link
                  className="text-sm text-slate-500 font-bold transition duration-300 hover:text-orange-500"
                  key={cat?.id}
                  to={cat?.link}
                >
                  {cat?.title}
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-start gap-4 shadow-lg">
                {catToHandle?.categories?.images?.map((cat) => (
                  <div className="flex flex-col items-start" key={cat?.id}>
                    <img
                      src={cat?.image}
                      alt={catToHandle?.title}
                      className="object-contain rounded-tl rounded-tr w-[358px] h-[179px]"
                    />
                    <p className="text-base text-slate-500 font-medium py-2 px-4">
                      {cat?.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center cursor-pointer gap-2 justify-center transition duration-300 hover:text-orange-500">
          <FaGift className="text-[20px]" />
          <span className="text-sm">carte cadeau</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer gap-2 transition duration-300 hover:text-orange-500">
          <FaBriefcase className="text-[20px]" />
          <span className="text-sm">Devenir partenaire</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer gap-2 transition duration-300 hover:text-orange-500">
          <FaBookOpen className="text-[20px]" />
          <span className="text-sm">Le mag'</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer gap-2 transition duration-300 hover:text-orange-500">
          <FaUser className="text-[20px]" />
          <span className="text-sm">Connexion</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
