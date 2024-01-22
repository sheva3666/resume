import Text from "../common/Text";
import TitleOne from "../common/TitleOne";
import "./index.css";

const Review = () => {
  return (
    <div className="review">
      <h2 className="review__title">I’m Shevchenko Ivan</h2>
      <TitleOne title="Frontend Developer" />
      <Text maxwidth={960}>
        I would like to become a part of a friendly and professional team, in a
        moment I would develop my skills in the field of research and
        development, in order to achieve team results.
      </Text>
    </div>
  );
};

export default Review;
