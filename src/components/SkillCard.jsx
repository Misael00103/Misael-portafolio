/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const SkillCard = ({ imgSrc, label, desc, classes }) => {
  const { t } = useTranslation();

  return (
    <div
      className={
        "flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group " +
        classes
      }
    >
      <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
        <img src={imgSrc} width={32} height={32} alt={t(label)} />
      </figure>

      <div>
        <h3>{t(label)}</h3>
        <p className="text-zinc-400 text-sm">{t(desc)}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;