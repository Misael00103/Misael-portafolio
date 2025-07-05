/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

const works = [
  {
    imgSrc: "/images/project-1.jpg",
    title: "project1Title",
    resume: "Admin: username: admin | password: admin | User: username: user | password: user",
    tags: ["tagSQL", "tagPHP", "tagDevelopment"],
    projectLink: "https://help-desk.freesite.online/index.html",
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "project2Title",
    tags: ["tagJavascript", "tagCSS3", "tagFigma"],
    projectLink: "https://challengeencriptador.netlify.app/",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "project3Title",
    tags: ["tagDevelopment", "tagAPI", "tagAngular"],
    projectLink: "https://controlpresupuestoapp.netlify.app/",
  },
  {
    imgSrc: "/images/Scape_resized.jpg",
    title: "project4Title",
    resume: "Email: demo@demo.com | Password: 123456",
    tags: ["React", "Supabase", "TailwindCSS"],
    projectLink: "https://inventarioidigroup.com/login",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "project5Title",
    tags: ["tagECommerce", "tagDevelopment"],
    projectLink: "https://misaelcommerce.netlify.app/",
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "project6Title",
    tags: ["tagWebDesign", "tagDevelopment"],
    projectLink: "https://vcardmisael.netlify.app/",
  },
];

const Work = () => {
  const { t } = useTranslation();

  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up animate__animated animate__fadeInUp">{t("workTitle")}</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, resume, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              resume={resume}
              tags={tags}
              projectLink={projectLink}
              classes={`reveal-up animate__animated animate__fadeInUp animate__delay-${(key % 3) + 1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;