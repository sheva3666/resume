import { skills } from "./constants";
import "./index.css";
import Skill from "./Skill/Skill";

const Skills = () => (
  <div className="skills-section">
    <h2>Skills</h2>
    <div className="skills">
      {skills.map((skill) => (
        <Skill key={skill} skill={skill} />
      ))}
    </div>
  </div>
);

export default Skills;
