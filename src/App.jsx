/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */
import { I18nextProvider } from "react-i18next";
import i18n from "./config/i18n"; // Importa la configuración de i18next
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });

  return (
    <I18nextProvider i18n={i18n}>
      <ReactLenis root>
        <Header />
        <main>
          <Hero />
          <About />
          <Skill />
          <Work />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </ReactLenis>
    </I18nextProvider>
  );
};

export default App;