import React from "react";
import LangBtn from "./langBtn";

const Navbar = () => {
  return (
    <nav className="fixed max-w-[600px] bg-transparent top-0 right-0">
      <div className="p-2">
        <LangBtn clsName="bg-black/50 px-2 py-3 rounded-full text-white" />
      </div>
    </nav>
  );
};

export default Navbar;
