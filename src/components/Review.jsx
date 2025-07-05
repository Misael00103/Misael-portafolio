/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

import ReviewCard from "./ReviewCard";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const reviews = [
  { contentKey: "review1", name: "Sophia Ramirez", imgSrc: "/images/people-1.jpg", company: "PixelForge" },
  { contentKey: "review2", name: "Ethan Caldwell", imgSrc: "/images/people-2.jpg", company: "NexaWave" },
  { contentKey: "review3", name: "Liam Bennett", imgSrc: "/images/people-3.jpg", company: "CodeCraft" },
  { contentKey: "review4", name: "Noah Williams", imgSrc: "/images/people-4.jpg", company: "BrightWeb" },
  { contentKey: "review5", name: "Ava Thompson", imgSrc: "/images/people-5.jpg", company: "TechMosaic" },
  { contentKey: "review6", name: "Jonathan", imgSrc: "/images/people-6.jpg", company: "Skyline Digital" },
];

const Review = () => {
  const { t } = useTranslation();

  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "-200% 80%",
        end: "400% 80%",
        scrub: true,
      },
      x: "-1000",
    });
  });

  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">{t("reviewsTitle")}</h2>
        <div className="flex items-stretch gap-3 w-fit scrub-slide">
          {reviews.map(({ contentKey, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={t(contentKey)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;