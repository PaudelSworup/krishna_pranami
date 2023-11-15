import ThemeContext from "@/ApplicationWrapper/ThemeContext";

import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { light_dark } from "@/interfaces/interface";
import { items } from "@/Navcontents/items";
import Switchmode from "./SwitchMode";

const Nav: React.FC<light_dark> = (props) => {
  const { darkmode, toggleMode } = useContext(ThemeContext);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setMobileMenu((prev) => !prev);
  };

  return (
    <>
      <nav
        className={` shadow-2xl   py-2 px-7 md:px-10 md:flex items-center justify-between sticky top-0 z-10  ${
          props.darkmode ? "bg-black" : "bg-slate-100"
        }`}
      >
        <>
          <div className="flex p-4 justify-between items-center">
            <Link href="/">
              <div className="flex gap-2  cursor-pointer justify-center items-center">
                <Image
                  src="https://mahamati.info/resources/Raj%20Shyama%20ji%20(1).jpg"
                  alt=""
                  width={40}
                  height={40} // Set the desired height
                  style={{ width: "auto", height: "auto", borderRadius: "50%" }} // Maintain aspect ratio and apply styling
                />
                <Image
                  src="https://pranami.org/images/logo_pranami.svg"
                  alt=""
                  width={200}
                  height={200} // Set the desired height
                  // style={{ width: "auto", height: "auto", borderRadius: "50%" }} // Maintain aspect ratio and apply styling
                />
              </div>
            </Link>

            <div className="sm:hidden absolute right-6 top-6 flex items-center pr-2">
              <button
                type="button"
                className="relative bg-gray-800 p-1 transition-all duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={toggleMobileMenu}
              >
                <FaBars className="text-white" />
              </button>
            </div>
          </div>

          <div className="hidden transition-all duration-300 ease-in-out sm:flex ml-6">
            {items.map((menuItems, i) => {
              const { menu, to } = menuItems;

              return (
                <li
                  key={i}
                  className="md:my-2 my-[95px] cursor-pointer flex flex-col  justify-center items-center"
                >
                  <Link href={to}>
                    <div
                      className={`${
                        props.darkmode ? "text-white " : "text-black"
                      }cursor-pointer relative p-1 tracking-widest`}
                    >
                      <span className="nav_menu">{menu}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </div>

          <div
            className={`${
              mobileMenu ? "block bg-black " : "hidden"
            } sm:hidden  px-2 pb-3 pt-2 transition duration-300 ease-in-out max-h-[20rem] ${
              props.darkmode ? "bg-black" : "bg-white"
            } `}
          >
            <div className="flex flex-col space-y-4">
              {items.map((menuItems, i) => {
                const { menu, to } = menuItems;

                return (
                  <li
                    key={i}
                    className="md:my-2 cursor-pointer flex flex-col  justify-center items-center"
                  >
                    <div className="text-white cursor-pointer relative p-1 tracking-widest">
                      <span
                        className={` ${
                          props.darkmode
                            ? "text-white nav_menu"
                            : "text-black nav_menus"
                        }`}
                      >
                        <Link href={to}>{menu}</Link>
                      </span>
                    </div>
                  </li>
                );
              })}
            </div>
          </div>
        </>
      </nav>
      <div className="fixed top-1 left-1 z-20">
        <Switchmode darkmode={darkmode} toggleMode={toggleMode} />
      </div>
    </>
  );
};

export default Nav;
