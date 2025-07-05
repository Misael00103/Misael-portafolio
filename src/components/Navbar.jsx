/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const { t } = useTranslation();
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);
    return () => window.removeEventListener("resize", initActiveBox);
  }, []);

  const activeCurrentLink = (event) => {
    event.preventDefault();
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + "px";
    activeBox.current.style.left = event.target.offsetLeft + "px";
    activeBox.current.style.width = event.target.offsetWidth + "px";
    activeBox.current.style.height = event.target.offsetHeight + "px";

    const targetId = event.target.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    targetElement?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navItems = [
    { label: t("home"), link: "#home", className: "nav-link active", ref: lastActiveLink },
    { label: t("about"), link: "#about", className: "nav-link" },
    { label: t("work"), link: "#work", className: "nav-link" },
    { label: t("resume"), link: "#resume", className: "nav-link" },
    { label: t("contact"), link: "#contact", className: "nav-link md:hidden" },
  ];

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;