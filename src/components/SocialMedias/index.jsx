import Instagram from "../../assets/instagram.png";
import Telegram from "../../assets/telegram.png";
import Linkedin from "../../assets/linkedin.png";
import Email from "../../assets/mail.png";
import "./index.css";

const SocialMedias = () => {
  return (
    <div className="social-medias">
      <a href="https://instagram.com/ivancheii">
        <img className="social-medias__link" src={Instagram} alt="instagram" />
      </a>
      <a href="https://t.me/ivancheii">
        <img className="social-medias__link" src={Telegram} alt="telegram" />
      </a>
      <a href="https://www.linkedin.com/in/ivan-shevchenko-767499233/">
        <img className="social-medias__link" src={Linkedin} alt="linkedin" />
      </a>
      <a href="mailto:ivan.shevchenko.dev@gmail.com">
        <img className="social-medias__link" src={Email} alt="email" />
      </a>
    </div>
  );
};

export default SocialMedias;
