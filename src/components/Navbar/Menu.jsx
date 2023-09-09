import { navLinks } from "../../constant";
import { useState } from "react";
import { close, menu } from "../../assets";

const Menu = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="flex flex-col space-y-2 text-nav-default font-medium text-sm md:space-y-8  md:flex relative w-full">
        {navLinks.map((nav, index) => (
          <a
            href={`#${nav.id}`}
            className={`hover:text-button-hover cursor-pointer ${
              nav.active ? "text-nav-active font-bold" : ""
            } hidden lg:flex`}
            key={nav.id}
          >
            {nav.title}
          </a>
        ))}

        {/* mobile nav */}
        <div className="lg:hidden flex flex-1 items-end flex-col absolute -top-8 md:-top-20 right-0 cursor-pointer">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-4 h-4 object-contain "
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-2 flex flex-col space-y-6 lg:hidden`}
        >
          {navLinks.map((nav, index) => (
            <a
              href={`#${nav.id}`}
              className={`hover:text-button-hover cursor-pointer ${
                nav.active ? "text-nav-active font-bold" : ""
              } `}
              key={nav.id}
            >
              {nav.title}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Menu;
