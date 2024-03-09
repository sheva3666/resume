import Text from "../common/Text";
import TitleOne from "../common/TitleOne";
import "./index.css";

const text = {
  name: "I’m Shevchenko Ivan",
  title: "Full Stack Developer",
  description:
    "I would like to become a part of a friendly and professional team, in a moment I would develop my skills in the field of research and development, in order to achieve team results.",
};

const Review = () => (
  <div className="review">
    <h2 className="review__title">{text.name}</h2>
    <TitleOne title={text.title} />
    <Text maxwidth={960}>{text.description}</Text>
  </div>
);

export default Review;
