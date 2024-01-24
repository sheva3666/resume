import Text from "../common/Text";
import TitleOne from "../common/TitleOne";
import About from "./components/About";
import Skills from "./components/Skills";
import "./index.css";

const text = {
  title: "About me",
  description:
    "Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.",
};

const AboutSection = () => (
  <div className="about-section">
    <TitleOne title={text.title} />
    <Text maxwidth={960}>{text.description}</Text>
    <div className="about-section__content">
      <About />
      <Skills />
    </div>
  </div>
);

export default AboutSection;
