import React, { useState, useEffect, useRef, useContext } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MyContext } from "./../App";
import Logo from "./../../public/logo/logo.png";

const Navbar = () => {
  const context = useContext(MyContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const NavbarLinks = [
    { text: "Beranda", link: "/" },
    { text: "Kontak", link: "/ContactPage" },
  ];

  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target)) {
        closeNavbar();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <nav className={`p-4 sticky top-0 w-full z-50 transition-transform`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-semibold text-xl">
          <img src={Logo} className="w-12" alt="Logo" />
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            {!isOpen ? (
              <div>
                <GiHamburgerMenu style={{ color: "white" }}></GiHamburgerMenu>
              </div>
            ) : (
              <div>
                <FaTimes style={{ color: "white" }}></FaTimes>
              </div>
            )}
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          {NavbarLinks.map((link, index) => (
            <Link key={index} to={link.link}>
              {link.text}
            </Link>
          ))}
        </div>
      </div>
      {isOpen && (
        <>
          <div className="menu md:hidden mt-2 z-50">
            <ul className="">
              {NavbarLinks.map((link, index) => (
                <li key={index} className="py-2">
                  <Link to={link.link} onClick={toggleNavbar}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
