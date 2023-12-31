import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./App.css";
import Header from "./components/Header";
import SocialMedias from "./components/SocialMedias";
import Footer from "./components/Footer";
import ImageOne from "./assets/imgOne.png";
import ImageTwo from "./assets/imgTwo.png";
import Review from "./components/Review";

function App() {
  const firstSection = useRef(null);
  const secondSection = useRef(null);
  const thirdSection = useRef(null);
  const { innerHeight } = window;

  const getRatio = (el) => innerHeight / (innerHeight + el.offsetHeight);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray("section").forEach((section, i) => {
      section.bg = section.querySelector(".bg");

      gsap.fromTo(
        section.bg,
        {
          backgroundPosition: () =>
            i ? `50% ${-innerHeight * getRatio(section)}px` : "50% 0px",
        },
        {
          backgroundPosition: () =>
            `50% ${innerHeight * (1 - getRatio(section))}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <Header
        firstSection={firstSection}
        secondSection={secondSection}
        thirdSection={thirdSection}
      />
      <section ref={firstSection}>
        <div className="bg" style={{ backgroundImage: `url(${ImageOne}` }} />
        <Review />
      </section>
      <section ref={secondSection}>
        <div className="bg" style={{ backgroundImage: `url(${ImageTwo}` }} />
        <h1>So smooth</h1>
      </section>
      <section ref={thirdSection}>
        <div className="bg" style={{ backgroundImage: `url(${ImageOne}` }} />
        <h1>Nice, right?</h1>
      </section>
      <Footer />
      <SocialMedias />
    </>
  );
}

export default App;
