
/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

import { useState } from "react";
import { useTranslation } from "react-i18next";

const Resume = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="resume" className="pt-16 lg:pt-24">
      <div className="container reveal-up animate__animated animate__fadeInUp">
        <div className="mb-8 text-center animate__animated animate__fadeInUp animate__delay-1s">
          <h3 className="text-xl font-semibold text-zinc-200">{t("resumePersonalInfo")}</h3>
          <p className="mt-1 text-sm text-zinc-400">
            Misael Matos<br />
            {t("resumePhone")}: 184-940-96331<br />
            {t("resumeEmail")}: <a href="mailto:beriguetemisael@gmail.com" className="text-sky-400 hover:underline">beriguetemisael@gmail.com</a>
          </p>
        </div>

        <div className="mb-8 animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-rounded text-sky-400 text-2xl" aria-hidden="true">description</span>
            <h3 className="title-1">{t("resumeObjective")}</h3>
          </div>
          <p className="text-sm text-zinc-400">{t("resumeObjectiveDesc")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-rounded text-sky-400 text-2xl" aria-hidden="true">school</span>
              <h3 className="title-1">{t("resumeEducation")}</h3>
            </div>
            <ul className="relative border-l-2 border-zinc-600 space-y-6 pl-5">
              <li className="relative">
                <div className="absolute -left-[26px] top-0 w-3 h-3 bg-sky-400 rounded-full"></div>
                <h4 className="font-semibold text-base">{t("resumeEducation1")}</h4>
                <span className="text-xs text-sky-300">{t("resumeEducation1Date")}</span>
                <p className="mt-1 text-xs">{t("resumeEducation1Desc")}</p>
              </li>
              <li className="relative">
                <div className="absolute -left-[26px] top-0 w-3 h-3 bg-sky-400 rounded-full"></div>
                <h4 className="font-semibold text-base">{t("resumeEducation2")}</h4>
                <span className="text-xs text-sky-300">{t("resumeEducation2Date")}</span>
                <p className="mt-1 text-xs">{t("resumeEducation2Desc")}</p>
              </li>
            </ul>
          </div>

          <div className="animate__animated animate__fadeInUp animate__delay-4s">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-rounded text-sky-400 text-2xl" aria-hidden="true">work</span>
              <h3 className="title-1">{t("resumeExperience")}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="relative border-l-2 border-zinc-600 space-y-6 pl-5">
                {["1", "2", "3", "4"].map((id) => (
                  <li key={id} className="relative">
                    <div className="absolute -left-[26px] top-0 w-3 h-3 bg-sky-400 rounded-full"></div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-base">{t(`resumeExperience${id}`)}</h4>
                        <span className="text-xs text-sky-300">{t(`resumeExperience${id}Date`)}</span>
                      </div>
                      <button
                        onClick={() => toggleExpand(id)}
                        className="text-sky-400 hover:text-sky-300 focus:outline-none"
                        aria-expanded={!!expanded[id]}
                        aria-controls={`experience-desc-${id}`}
                        aria-label={expanded[id] ? t("collapse") : t("expand")}
                      >
                        <span className="material-symbols-rounded text-xl">
                          {expanded[id] ? "expand_less" : "expand_more"}
                        </span>
                      </button>
                    </div>
                    <div
                      id={`experience-desc-${id}`}
                      className={`mt-1 text-xs text-zinc-400 overflow-hidden transition-all duration-300 ease-in-out ${
                        expanded[id] ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {t(`resumeExperience${id}Desc`)}
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="relative border-l-2 border-zinc-600 space-y-6 pl-5">
                {["5", "6", "7", "8"].map((id) => (
                  <li key={id} className="relative">
                    <div className="absolute -left-[26px] top-0 w-3 h-3 bg-sky-400 rounded-full"></div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-base">{t(`resumeExperience${id}`)}</h4>
                        <span className="text-xs text-sky-300">{t(`resumeExperience${id}Date`)}</span>
                      </div>
                      <button
                        onClick={() => toggleExpand(id)}
                        className="text-sky-400 hover:text-sky-300 focus:outline-none"
                        aria-expanded={!!expanded[id]}
                        aria-controls={`experience-desc-${id}`}
                        aria-label={expanded[id] ? t("collapse") : t("expand")}
                      >
                        <span className="material-symbols-rounded text-xl">
                          {expanded[id] ? "expand_less" : "expand_more"}
                        </span>
                      </button>
                    </div>
                    <div
                      id={`experience-desc-${id}`}
                      className={`mt-1 text-xs text-zinc-400 overflow-hidden transition-all duration-300 ease-in-out ${
                        expanded[id] ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {t(`resumeExperience${id}Desc`)}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 animate__animated animate__fadeInUp animate__delay-5s">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-rounded text-sky-400 text-2xl" aria-hidden="true">volunteer_activism</span>
            <h3 className="title-1">{t("resumeVolunteerWork")}</h3>
          </div>
          <ul className="relative border-l-2 border-zinc-600 space-y-6 pl-5">
            <li className="relative">
              <div className="absolute -left-[26px] top-0 w-3 h-3 bg-sky-400 rounded-full"></div>
              <h4 className="font-semibold text-base">{t("resumeVolunteer1")}</h4>
              <span className="text-xs text-sky-300">{t("resumeVolunteer1Date")}</span>
              <p className="mt-1 text-xs">{t("resumeVolunteer1Desc")}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
