import Text from "../common/Text";
import TitleOne from "../common/TitleOne";
import "./index.css";

const text = {
  title: "Contacts",
  location: "Location: Czech Republic, Brno.",
  phoneNumber: "Telephone: +420-720-961-393, +380-93-124-70-46",
  email: "Email: sheva3666@gmail.com",
};

const ContactsSection = () => {
  return (
    <div className="contacts-section">
      <TitleOne title={text.title} />
      <div className="contacts-section__content">
        <Text maxwidth={960}>{text.location}</Text>
        <Text maxwidth={960}>{text.phoneNumber}</Text>
        <Text maxwidth={960}>{text.email}</Text>
      </div>
    </div>
  );
};

export default ContactsSection;
