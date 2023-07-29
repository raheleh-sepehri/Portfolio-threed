import React, { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { close, menu } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      {/* nav in desktop */}
      <div
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            className="flex items-center "
            to="./"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src="./logo.png"
              className="w-10  rounded-full h-10 object-fill"
            />
            <p className="font-bold text-[18px] cursor-pointer text-white ml-1 flex ">
              
              Raheleh &nbsp;
              <span className="sm:block hidden">| Frontend Developer</span>
            </p>
          </Link>

          <ul className="sm:flex hidden gap-10 list-none  ">
            {navLinks.map((link) => (
              <li
                className={`${
                  active === link.title ? "text-white " : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                key={link.id}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          {/* nav in mobile */}

          <div className="sm:hidden flex flex-1 justify-end items-center ">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] cursor-pointer object-contain"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                toggle ? "flex" : "hidden"
              } p-4 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="sm:hidden flex list-none flex-col justify-end items-start gap-4  ">
                {navLinks.map((link) => (
                  <li
                    className={`${
                      active === link.title ? "text-white " : "text-secondary"
                    } font-poppins text-[16px] font-medium cursor-pointer`}
                    key={link.id}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
