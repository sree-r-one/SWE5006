import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Array of navigation items
  const navItems = [
    { name: "Work", href: "/dashboard" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="z-50 flex w-full flex-wrap py-7 md:flex-nowrap md:justify-start">
      <nav className="relative mx-auto flex w-full max-w-7xl basis-full flex-wrap items-center px-4 md:grid md:grid-cols-12 md:px-8">
        <div className="md:col-span-3">
          {/* Logo */}
          <a
            className="inline-block flex-none rounded-xl text-xl font-semibold focus:opacity-80 focus:outline-none"
            href="/"
            aria-label="Preline"
          >
            triver.in
          </a>
          {/* End Logo */}
        </div>

        {/* Button Group */}
        <div className="ms-auto flex items-center gap-x-1 py-1 md:order-3 md:col-span-3 md:gap-x-2 md:ps-6">
          <button
            type="button"
            className="inline-flex items-center gap-x-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-black hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            Sign in
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-x-2 rounded-xl border border-transparent bg-lime-400 px-3 py-2 text-sm font-medium text-black transition hover:bg-lime-500 focus:bg-lime-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            Hire us
          </button>

          <div className="md:hidden">
            <button
              type="button"
              className="flex items-center justify-center rounded-xl border border-gray-200 text-sm font-semibold text-black hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="navbar-menu"
            >
              {!isMenuOpen ? (
                <svg
                  className="shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              ) : (
                <svg
                  className="shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* End Button Group */}

        {/* Collapse */}
        <div
          id="navbar-menu"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } grow basis-full overflow-hidden transition-all duration-300 md:order-2 md:col-span-6 md:block md:w-auto md:basis-auto`}
        >
          <div className="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-center md:gap-x-7 md:gap-y-0">
            {navItems.map((item) => (
              <div key={item.name}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? "relative inline-block text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:h-1 before:w-full before:bg-lime-400"
                      : "inline-block text-black hover:text-gray-600 focus:text-gray-600"
                  }
                >
                  {item.name}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
        {/* End Collapse */}
      </nav>
    </header>
  );
};

export default Navbar;
