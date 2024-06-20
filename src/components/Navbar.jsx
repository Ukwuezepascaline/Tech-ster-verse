import logo from "../assets/UPDATED navbar LOGO PNG.svg";
import { NavLink } from "react-router-dom";
import Hero from "./Hero";
import discord from "../assets/discord.svg";
import git from "../assets/git.svg";
import dropdownarrow from "../assets/dropdownarrow.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { HashLink as Link } from "react-router-hash-link";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggling = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // to scroll to the top
  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  return (
    <header className="bg-hero-img bg-cover bg-no-repeat">
      <nav className="w-full flex items-center bg-navbarBackground border-0 pt-[1.5rem] pb-[1.5rem] md:px-10 md:w-full md:border-0">
        <img
          className="w-40  md:w-30 center cursor-pointer"
          src={logo}
          alt=""
          onClick={pageUp}
        />

        <div className="md:flex items-center ml-[20rem] gap-[6rem] hidden">
          <Link
            className={`flex items-center gap-[10px] relative hover:text-navbarHover ${
              activeLink === "#overview" ? "text-navbarLiHover" : "text-white"
            } text-sm font-nunito`}
            smooth
            to="/#overview"
            onClick={() => {
              toggling();
              setActiveLink("#overview");
            }}
          >
            <span className="">Overview</span>
            <img src={dropdownarrow} alt="" />
          </Link>
          {isOpen && (
            <div className="absolute top-16 left-[30rem]">
              <ul className="bg-white border rounded py-2 flex flex-col gap-[0.6rem]">
                <li className="hover:bg-navbarHover  hover:text-navbarLiHover px-4 cursor-pointer">
                  About TechsterVerse
                </li>
                <li className="hover:bg-navbarHover hover:text-navbarLiHover px-4 cursor-pointer">
                  Target Audience
                </li>
                <li className="hover:bg-navbarHover  hover:text-navbarLiHover px-4 cursor-pointer">
                  Test Benefits
                </li>
              </ul>
            </div>
          )}

          <Link
            smooth
            to="/#feature"
            onClick={() => setActiveLink("#feature")}
            className={`hover:text-navbarHover ${activeLink === "#feature" ? "text-navbarLiHover" : "text-white"}  text-sm font-nunito`}
          >
            Features
          </Link>
          <Link
            smooth
            to="/#getInTouch"
            onClick={() => setActiveLink("#getInTouch")}
            className={`hover:text-navbarHover ${activeLink === "#getInTouch" ? "text-navbarLiHover" : "text-white"}  text-sm font-nunito`}
          >
            Get In Touch
          </Link>
          <Link
            smooth
            to="/#faq"
            onClick={() => setActiveLink("#faq")}
            className={`hover:text-navbarHover ${activeLink === "#faq" ? "text-navbarLiHover" : "text-white"}  text-sm font-nunito`}
          >
            FAQ
          </Link>
        </div>
        <div>
          <GiHamburgerMenu className="md:hidden text-white border-[1px] rounded w-[30px] h-[30px] cursor-pointer" />{" "}
        </div>

        <div className="md:flex hidden gap-[2rem]  ml-[7rem] ">
          <div className="bg-white rounded-md py-1 px-2">
            <NavLink to="https://discord.com/">
              <img className="w-7 h-7" src={discord} alt="" />
            </NavLink>
          </div>
          <div className="bg-white rounded-md py-1 px-2">
            <NavLink to="https://github.com/TechSterVerse">
              <img className="w-7 h-7" src={git} alt="" />
            </NavLink>
          </div>
        </div>
      </nav>
      <Hero />
    </header>
  );
};

export default Navbar;
