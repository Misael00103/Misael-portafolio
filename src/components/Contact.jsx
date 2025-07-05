/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

import { useTranslation } from "react-i18next";

const socialLinks = [
  // ... (mismo contenido que antes, sin cambios)
];

const Contact = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="section" id="contact">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-w-[12ch]">{t("contactTitle")}</h2>
          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch] reveal-up">
            {t("contactDescription")}
          </p>
          <div className="flex items-center gap-2 mt-auto">
            {socialLinks.map(({ href, icon }, key) => (
              <a
                key={key}
                href={href}
                target="_blank"
                className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <form action="https://getform.io/f/bejjneea" method="POST" className="xl:pl-10 2xl:pl-20">
          <div className="md:grid md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="label reveal-up">
                {t("contactName")}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder={i18n.language === "en" ? "Misael Beriguete" : "Misael Beriguete"}
                className="text-field w-full reveal-up"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="label reveal-up">
                {t("contactEmail")}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder={i18n.language === "en" ? "misael@example.com" : "misael@ejemplo.com"}
                className="text-field w-full reveal-up"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="label reveal-up">
              {t("contactMessage")}
            </label>
            <textarea
              name="message"
              id="message"
              placeholder={i18n.language === "en" ? "Hi!" : "¡Hola!"}
              required
              className="text-field resize-y min-h-32 max-h-80 reveal-up"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up">
            {t("contactSubmit")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;