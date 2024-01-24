/* eslint-disable react/prop-types */
import Photo from "../../assets/photo.png";
import "./index.css";

const Header = ({ secondSection, thirdSection, forthSection }) => {
  const links = [
    {
      name: "About",
      relatedSection: secondSection,
    },
    {
      name: "Projects",
      relatedSection: thirdSection,
    },
    {
      name: "Contacts",
      relatedSection: forthSection,
    },
  ];

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
        {links.map(({ name, relatedSection }) => (
          <div
            key={name}
            onClick={() => onNavClick(relatedSection)}
            className="header__nav-link"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
