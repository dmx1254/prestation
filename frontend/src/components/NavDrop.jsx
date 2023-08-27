import React from "react";

const NavDrop = ({ navToggle, click }) => {
  return (
    navToggle && (
      <div
        className="fixed top-0 left-0 w-screen h-screen z-[50] bg-black opacity-40"
        onClick={click}
      ></div>
    )
  );
};

export default NavDrop;
