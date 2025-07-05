/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ imgSrc, title, resume, tags, projectLink, classes }) => {
  const { t } = useTranslation();

  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " +
        classes
      }
    >
      <figure className="img-box aspect-square rounded-lg mb-4">
        <img src={imgSrc} alt={t(title)} loading="lazy" className="img-cover" />
      </figure>

      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{t(title)}</h3>
          {resume && (
            <p
              className="text-sm text-zinc-400 mb-3 animate__animated animate__fadeIn animate__delay-1s"
              id={`resume-${title}`}
            >
              {resume}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tagKey, key) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
              >
                {t(tagKey)}
              </span>
            ))}
          </div>
        </div>

        <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
        </div>
      </div>

      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0"
        aria-label={t("viewProject")}
        aria-describedby={resume ? `resume-${title}` : undefined}
      ></a>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  resume: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;