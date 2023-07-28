import React, { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav>
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
            <p className="font-bold text-[18px] cursor-pointer text-white ml-1 ">
              {" "}
              Raheleh{" "}
              <span className="sm:block hidden">| Frontend Developer</span>
            </p>
          </Link>

          <ul className="sm:flex hidden gap-10 list-none  ">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
