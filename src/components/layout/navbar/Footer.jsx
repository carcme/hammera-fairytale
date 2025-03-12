import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="flex px-4 justify-between py-4 bg-brown-800">
        <Link to="/">
          <span className="text-bisque text-sm">Home</span>
        </Link>
        <a href="https://hammer3.com" target="_blank">
          <span className="text-bisque text-sm">Hammer3 © 2022</span>
        </a>
      </footer>
    </>
  );
};

export default Footer;
