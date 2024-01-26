import Instagram from "../../assets/instagram.png";
import Telegram from "../../assets/telegram.png";
import Linkedin from "../../assets/linkedin.png";
import Email from "../../assets/mail.png";
import "./index.css";

const medias = [
  {
    href: "https://instagram.com/ivancheii",
    icon: Instagram,
    alt: "Instagram",
  },
  {
    href: "mailto:ivan.shevchenko.dev@gmail.com",
    icon: Telegram,
    alt: "Telegram",
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

const SocialMedias = () => (
  <div className="social-medias">
    {medias.map(({ href, icon, alt }) => (
      <a className="social-medias__link" key={alt} href={href}>
        <img className="social-medias__link" src={icon} alt={alt} />
      </a>
    ))}
  </div>
);

export default SocialMedias;
