"use client";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";
import SlideDownAnimation from "./SlideDownAnimation";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [y, setY] = useState(0);

  const mainMenus = [
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (e: any) => {
    const window = e.currentTarget;
    setY(window.scrollY);
  };

  useEffect(() => {
    setY(window.scrollY);

    window.addEventListener("scroll", (e) => handleNavigation(e));
  }, []);

  return (
    <>
      <SlideDownAnimation
        className={clsx({
          "!fixed w-full z-50 translate-y-1/2 transition-opacity ease-in-out duration-300 delay-150":
            y > 100,
        })}
      >
        <header className="w-full top-0 z-50 bg-white/80 backdrop-blur-sm px-6 md:px-20">
          <div className="max-w-full mx-auto h-20 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 md:w-20 h-10 md:h-20 rounded-full">
                <Image
                  src="/images/avatar.png"
                  alt="avatar"
                  width={80}
                  height={80}
                />
              </div>
              <span className="font-bold text-xl leading-6">DDoong</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden sm:flex items-center gap-8">
              {mainMenus.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="font-semibold text-xl leading-6 hover:text-red-600"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              className="hidden sm:flex items-center gap-2 bg-black text-white p-2 md:px-5 md:py-4 rounded hover:bg-black/80"
              download
            >
              <span>Resume</span>
              <ArrowDownTrayIcon color="#fff" width={20} height={20} />
            </a>

            {/* Mobile Menu Button */}
            <button
              className="sm:hidden p-2 outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </header>
      </SlideDownAnimation>
      {/* Mobile Menu Overlay */}
      <motion.div
        variants={{
          hidden: { opacity: 0, transform: "translateY(-90%)" },
          visible: { opacity: 1, transform: "translateY(0)" },
        }}
        className={clsx({
          "fixed inset-0 -z-10 h-screen bg-black text-white": true,
          "!z-50": isMenuOpen,
        })}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
      >
        <div className="h-20 px-6 flex items-center justify-end">
          <button className="p-2" onClick={toggleMenu} aria-label="Close menu">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <nav
          className={clsx({
            "px-6 py-8": true,
          })}
        >
          <ul className="space-y-6">
            {mainMenus.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.link}
                  className="block text-2xl font-semibold hover:text-red-600"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 bg-white text-black px-5 py-4 rounded border hover:bg-black/80 hover:text-white hover:border-white"
                download
              >
                <span>Resume</span>
                <ArrowDownTrayIcon color="inherit" width={20} height={20} />
              </a>
            </li>
          </ul>
        </nav>
      </motion.div>
    </>
  );
};

export default Header;
