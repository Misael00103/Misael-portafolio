/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

import { ButtonPrimary } from "./Button";
import { useTranslation, Trans } from "react-i18next";

const sitemap = [
  { labelKey: "home", href: "#home" },
  { labelKey: "about", href: "#about" },
  { labelKey: "work", href: "#work" },
  { labelKey: "resume", href: "#resume" },
  { labelKey: "contact", href: "#contact" },
];

const socials = [
  { labelKey: "github", href: "https://github.com/Misael00103" },
  { labelKey: "linkedin", href: "https://www.linkedin.com/in/misaelberiguete?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { labelKey: "twitterX", href: "https://x.com/beriguetemisae1/status/1509160885197197328?s=46&t=YtK97WTJSPovxEKcVMQUSQ" },
  { labelKey: "instagram", href: "https://www.instagram.com/misaeel_7/profilecard/?igsh=MXE4MG5yc2MydHJoOQ%3D%3D" },
  { labelKey: "codepen", href: "https://codepen.io/Misael00103" },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10 mb-10">
          <div className="mb-10 lg:mb-0">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              {t("footerTitle")}
            </h2>
            <ButtonPrimary
              href="mailto:beriguetemisael@gmail.com"
              label={t("footerStartProject")}
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">{t("footerSitemap")}</p>
              <ul className="space-y-2">
                {sitemap.map(({ labelKey, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {t(labelKey)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">{t("footerSocials")}</p>
              <ul className="space-y-2">
                {socials.map(({ labelKey, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t(labelKey)}
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
            <Trans
              i18nKey="footerCopyright"
              components={{ span: <span className="text-zinc-200 font-semibold" /> }}
            />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;