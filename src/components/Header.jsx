import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

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

        <div className="flex-shrink-0">
          <button
            className="menu-btn ml-auto md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="btn btn-secondary"
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
