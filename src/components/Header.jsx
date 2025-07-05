/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [navOpen, setNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".language-button")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6">
        <h1 className="flex-shrink-0">
          <a href="/" className="logo">
            <img
              src="/images/logo.svg"
              width={40}
              height={40}
              alt="Misael Beriguete"
            />
          </a>
        </h1>

        <div className="relative flex-grow md:flex md:justify-center">
          <Navbar navOpen={navOpen} />
        </div>

        <div className="flex items-center gap-4 flex-shrink-0">
          <button
            className="menu-btn ml-auto md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
            aria-label={navOpen ? t("closeMenu") : t("openMenu")}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="btn btn-secondary"
              aria-label={t("contact")}
            >
              {t("contact")}
            </a>
          </div>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 text-sm text-zinc-200 py-2 px-3 rounded-lg hover:bg-zinc-800 transition-colors language-button"
              aria-label={t("changeLanguage")}
              aria-expanded={isDropdownOpen}
            >
              <span className="material-symbols-rounded" aria-hidden="true">
                language
              </span>
              <span>{i18n.language.toUpperCase()}</span>
            </button>

            {isDropdownOpen && (
              <ul
                className="absolute right-0 mt-2 w-40 bg-zinc-800 rounded-lg shadow-lg ring-1 ring-zinc-50/10"
                role="menu"
              >
                <li role="menuitem">
                  <button
                    onClick={() => changeLanguage("en")}
                    className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-700 transition-colors"
                  >
                    <img
                      src="/images/us-flag.svg"
                      alt="United States flag"
                      className="w-5 h-5"
                    />
                    {t("languageEnglish")}
                  </button>
                </li>
                <li role="menuitem">
                  <button
                    onClick={() => changeLanguage("es")}
                    className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-700 transition-colors"
                  >
                    <img
                      src="/images/dominican-republic.svg"
                      alt="Spain flag"
                      className="w-5 h-5"
                    />
                    {t("languageSpanish")}
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;