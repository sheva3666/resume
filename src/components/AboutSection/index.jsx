import Text from "../common/Text";
import TitleOne from "../common/TitleOne";
import About from "./components/About";
import Skills from "./components/Skills";
import "./index.css";

function AboutSection() {
  return (
    <div className="about-section">
      <TitleOne title="About me" />
      <Text maxwidth={960}>
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </Text>
      <div className="about-section__content">
        <About />
        <Skills />
      </div>
    </div>
  );
}

export default AboutSection;
