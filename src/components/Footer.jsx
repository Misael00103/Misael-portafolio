/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Resume",
    href: "#resume",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Misael00103",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/misaelberiguete?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    label: "Twitter X",
    href: "https://x.com/beriguetemisae1/status/1509160885197197328?s=46&t=YtK97WTJSPovxEKcVMQUSQ",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/misaeel_7/profilecard/?igsh=MXE4MG5yc2MydHJoOQ%3D%3D",
  },
  {
    label: "CodePen",
    href: "https://codepen.io/Misael00103",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10 mb-10">
          <div className="mb-10 lg:mb-0">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary
              href="mailto:beriguetemisael@gmail.com"
              label="Start project"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Sitemap</p>
              <ul className="space-y-2">
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Socials</p>
              <ul className="space-y-2">
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between pt-10 mb-8">
          <a href="#" className="mb-4 lg:mb-0 logo reveal-up">
            <img
              src="/images/logo.svg"
              width={40}
              height={40}
              alt="Logo"
              className="h-auto"
            />
          </a>

          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2024 <span className="text-zinc-200 font-semibold">misaelcode</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
