import Link from "../common/Link";
import Text from "../common/Text";
import TitleOne from "../common/TitleOne";
import "./index.css";

const text = {
  title: "Projects",
  description:
    "So far I don't have anything deployed yet. But you can see my code in github where you can find few training projects. I cannot share anything from my current work because I don't have permission for it.",
  linkName: "Go to Github",
  href: "https://github.com/sheva3666",
};

function ProjectsSection() {
  return (
    <div className="projects-section">
      <TitleOne title={text.title} />
      <Text maxwidth={960}>{text.description}</Text>
      <Link name={text.linkName} href={text.href} />
    </div>
  );
}

export default ProjectsSection;
