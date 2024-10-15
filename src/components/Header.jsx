import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu and close icons
import CartIcon from "./CartIcon"; // Import CartIcon for the cart icon with total items

const Header = ({ isLogin }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <header
  className={`${
    isVisible ? "translate-y-0" : "-translate-y-full"
  } bg-gradient-to-r bg-gradient-to-r from-stone-950 via-stone-800 to-slate-900 text-white shadow-gray-800 p-4 shadow-lg fixed top-0 left-0 w-full z-50 transition-transform duration-300`}
>
  <div className="container flex justify-between md:justify-around items-center">
    <h1 className="text-2xl font-semibold">
      <Link to="/" className="text-white">
        Product Store
      </Link>
    </h1>

    {/* دکمه منوی همبرگری در حالت موبایل */}
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="text-3xl md:hidden focus:outline-none"
    >
      {isMenuOpen ? <FiX /> : <FiMenu />}
    </button>

    {/* منوی اصلی که در حالت دسکتاپ نمایش داده می‌شود */}
    <nav className="hidden md:flex xl:mr-14 gap-3 space-x-7">
      <Link
        to="/"
        className="hover:text-gray-950 hover:text-xl  text-xl font-medium transition-colors"
      >
        Home
      </Link>
      <Link
        to="/products"
        className="hover:text-gray-950 hover:text-xl  text-xl font-medium transition-colors"
      >
        Products
      </Link>
      <Link
        to="/cart"
        className="hover:text-gray-950 hover:text-xl  text-xl font-medium transition-colors"
      >
        Cart
      </Link>
      <Link
        to="/about"
        className="hover:text-gray-950 hover:text-xl  text-xl font-medium transition-colors"
      >
        About us
      </Link>

    
    </nav>
    <div className=" flex justify-center gap-4 ">
    {isLogin ? null : (
        <Link
          to="/login"
          className="hover:text-gray-950 hidden md:block hover:bg-stone-500 bg-stone-800 rounded-lg px-4 py-2 text-xl font-medium transition-colors "
        >
          Login
        </Link>
      )}
    <CartIcon />
    </div>
    

    {/* منوی موبایل که با کلیک بر روی همبرگری باز می‌شود */}
    <div
      className={` absolute top-0 left-0 h-screen w-64 bg-zinc-200 text-gray-800 transform ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 lg:hidden z-40`}
    >
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Menu</h2>
        <nav className="flex flex-col space-y-4">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-gray-950 font-medium"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-gray-950 font-medium"
          >
            Products
          </Link>
          <Link
            to="/cart"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-gray-950 font-medium"
          >
            Cart
          </Link>
        </nav>
      </div>
    </div>
  </div>
</header>

  );
};

export default Header;
