import Instagram from "./icons/white-instagram.png";
import Linkedin from "./icons/white-linkedin.png";
import Email from "./icons/mail-white.png";

import "./index.css";

const text = {
  rights: "2024 © All rights reserved",
  name: "Ivan Shevchenko",
};

const links = [
  {
    href: "https://instagram.com/ivancheii",
    icon: Instagram,
    alt: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/ivan-shevchenko-767499233/",
    icon: Linkedin,
    alt: "Linkedin",
  },
  {
    href: "mailto:ivan.shevchenko.dev@gmail.com",
    icon: Email,
    alt: "Email",
  },
];

const Footer = () => (
  <div className="footer">
    <div className="footer__text">
      <p>{text.rights}</p>
      <p>{text.name}</p>
    </div>
    <div className="footer__links">
      {links.map(({ href, icon, alt }) => (
        <a key={alt} href={href}>
          <img src={icon} alt={alt} />
        </a>
      ))}
    </div>
  </div>
);

export default Footer;
