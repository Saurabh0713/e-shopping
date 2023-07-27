import React, { useState, useContext } from "react";
import appContext from "../context";
import { Link } from "react-router-dom";

export default function Header() {
  const [menu, setMenu] = useState("hidden");
  const { cartItems } = useContext(appContext);

  function handleMenuClick() {
    if (menu === "visible") {
      setMenu("hidden");
    }
    if (menu === "hidden") {
      setMenu("visible");
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-10">
      <nav
        className="flex w-full items-center justify-between py-2 text-neutral-600 shadow-lg hover:text-stone-300 focus:text-neutral-700 dark:bg-gradient-to-r from-neutral-700/80 to-neutral-700/20 dark:text-neutral-200 md:flex-wrap md:justify-start "
        data-te-navbar-ref
      >
        <div className=" flex w-full flex-wrap items-center justify-between px-6">
          <div className="flex items-center">
            <button
              className="mr-2 border-0 bg-transparent py-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:hidden"
              type="button"
              data-te-collapse-init
              data-te-target="#navbarSupportedContentY"
              aria-controls="navbarSupportedContentY"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="[&>svg]:w-5" onClick={handleMenuClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  // stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    // stroke-linecap="round"
                    // stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </span>
            </button>
          </div>
          <Link to="/cart">
          <button className="md:hidden">
            Cart{" "}
            {cartItems.length > 0 && (
              <span className="ml-2 px-1 bg-cyan-600 text-white rounded">
                {cartItems.length}
              </span>
            )}
          </button>
          </Link>
          <div
            className="!visible hidden grow basis-[100%] items-center md:!flex md:basis-auto"
            id="navbarSupportedContentY"
            data-te-collapse-item
          >
            <ul
              className="mr-auto flex flex-col md:flex-row"
              data-te-navbar-nav-ref
            >
              <li data-te-nav-item-ref>
                <Link
                  className="block transition duration-150 ease-in-out hover:text-slate-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-amber-500 dark:focus:text-white md:p-2 [&.active]:text-black/90"
                  to="/"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Home
                </Link>
              </li>
              <li data-te-nav-item-ref>
                <Link
                  className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:text-black/90"
                  to="/contact"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:text-black/90"
                  to="/products"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Products
                </Link>
              </li>
              <li data-te-nav-item-ref>
                <Link
                  className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:text-black/90"
                  to="/cart"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Cart
                  {cartItems.length > 0 && (
                    <span className="ml-2 px-1 bg-cyan-600 text-white rounded">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={`p-2 px-6 bg-slate-300 md:hidden ${menu} `}>
        <button className="float-right font-bold " onClick={handleMenuClick}>
          X
        </button>
        <ul>
          <li className="m-2 cursor-pointer ">
            <Link to="/">Home</Link>
          </li>
          <li className="m-2 cursor-pointer ">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="m-2 cursor-pointer ">
            <Link to="/products">Products</Link>
          </li>
          <li className="m-2 cursor-pointer ">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
