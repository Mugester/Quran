import React, { useEffect, useState } from "react";
import Logo from "./Images/pngegg.png";
import { Link } from "react-router-dom";
const Header = () => {

  return (
    <div>
      <header className="text-gray-600 body-font fixed w-full bg-stone-300 navbar">
        <div className="container mx-auto flex flex-wrap px-3 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900"
          >
            <img height={80} width={80} src={Logo} />
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 hover:text-purple-600">
              Home
            </Link>
            <Link to="/chapters" className="mr-5 hover:text-purple-600">
              Chapetrs
            </Link>
            <Link to="/others" className="mr-5 hover:text-purple-600">
              Otherss
            </Link>
            <Link to="/counter" className="mr-5 hover:text-purple-600">
              Counter
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
