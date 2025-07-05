/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

import { ButtonPrimary, ButtonOutline } from "./Button";
import { useTranslation, Trans } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar-1.jpg"
                alt="Misael Beriguete - Portafolio"
                width={40}
                height={40}
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              {t("heroAvailable")}
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20] lg:max-w-[15] mt-5 mb-8 lg:mb-10">
            {t("heroTitle")}
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary
              label={t("heroDownloadCV")}
              icon="download"
              target="_blank"
              href={i18n.language === "en" ? "./images/Resume-EN-Misael-Matos.pdf" : "./images/Resume-EN-Misael-Matos.pdf"}
            />
            <ButtonOutline
              href="#about"
              label={t("heroScrollDown")}
              icon="arrow_downward"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <figure
            className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden animate__animated animate__zoomIn animate__delay-1s"
          >
            <img
              src="/images/hero-banner.png"
              width={656}
              height={800}
              alt="Misael Beriguete"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
