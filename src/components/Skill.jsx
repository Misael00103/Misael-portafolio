/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

import SkillCard from "./SkillCard";
import { useTranslation } from "react-i18next";

const skillItem = [
  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
   {
    imgSrc: "/images/react-svgrepo.svg",
    label: "React Native",
    desc: "Framework for Mobile",
  },
   {
    imgSrc: "/images/postgresql.svg",
    label: "Postgres",
    desc: "Database",
  },
   {
    imgSrc: "/images/angular.svg",
    label: "Angular",
    desc: "Framework",
  },
   {
    imgSrc: "/images/vite.svg",
    label: "Vite",
    desc: "User Interface",
  }
];

const Skill = () => {
  const { t } = useTranslation();

  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">{t("skillsTitle")}</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          {t("skillsDescription")}
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;