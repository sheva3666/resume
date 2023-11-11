/* eslint-disable react/prop-types */
import Photo from "../../assets/photo.png";
import "./index.css";

const Header = ({ firstSection, secondSection, thirdSection }) => {
  const onNavClick = (ref) => {
    window.scrollTo({
      top: ref?.current?.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="header">
      <div className="header__logo">
        <img className="header__logo-img" src={Photo} alt="" />
        <h2>Ivan Shevchenko</h2>
      </div>
      <div className="header__nav">
        <div className="header__nav-link">Home</div>
        <div
          onClick={() => onNavClick(firstSection)}
          className="header__nav-link"
        >
          About
        </div>
        <div
          onClick={() => onNavClick(secondSection)}
          className="header__nav-link"
        >
          Projects
        </div>
        <div
          onClick={() => onNavClick(thirdSection)}
          className="header__nav-link"
        >
          Contacts
        </div>
      </div>
    </div>
  );
};

export default Header;
