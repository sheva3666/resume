import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./App.css";

const image1 =
  "https://rare-gallery.com/thumbs/110214-lake-4k-hd-wallpaper-sea-water-waterfall-rocks-mountain-sun-clouds-sky-forest-nature.jpg";
const image2 =
  "https://rare-gallery.com/thumbs/5409247-mountain-mountain-hill-hillside-hill-lake-mountain-lake-hike-top-view-landscape-nature-fjord-horizon-view-from-top-of-the-mountain-cloudy-sunray-road-cloud-water-river-sky-lake-hill-png-images.jpg";
const image3 =
  "https://rare-gallery.com/thumbs/5413062-water-lake-tree-hill-forest-sky-nature-landscape-hill-side-hillside-blue-sky-lake-side-summer-summer-landscape-rural-paisaje-free-pictures.jpg";

function App() {
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
      <section>
        <div className="bg" style={{ backgroundImage: `url(${image1}` }} />
        <h1>Parallax</h1>
      </section>
      <section>
        <div className="bg" style={{ backgroundImage: `url(${image2}` }} />
        <h1>So smooth</h1>
      </section>
      <section>
        <div className="bg" style={{ backgroundImage: `url(${image3}` }} />
        <h1>Nice, right?</h1>
      </section>
    </>
  );
}

export default App;
