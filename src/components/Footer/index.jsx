import Instagram from "./icons/white-instagram.png";
import Linkedin from "./icons/white-linkedin.png";
import Email from "./icons/mail-white.png";

import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__text">
        <p>2023 © All rights reserved</p>
        <p>Ivan Shevchenko</p>
      </div>
      <div className="footer__links">
        <a href="https://instagram.com/ivancheii">
          <img src={Instagram} alt="instagram" />
        </a>
        <a href="https://www.linkedin.com/in/ivan-shevchenko-767499233/">
          <img src={Linkedin} alt="linkedin" />
        </a>
        <a href="mailto:ivan.shevchenko.dev@gmail.com">
          <img src={Email} alt="email" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
