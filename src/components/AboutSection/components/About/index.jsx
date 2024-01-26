import "./index.css";

const text = [
  "Hello, I'm Ivan, a front-end developer on a journey to transition into a full-stack developer. Before my career in development, I served as an inspector in the Border Guard Service of Ukraine for nearly seven years. Despite my dedicated service, I didn't feel fulfilled, prompting me to make a significant career shift. Consequently, I left the army to explore the world of front-end development, where I am now actively pursuing my goal of becoming a versatile full-stack developer.",
  "Education: I hold a bachelor's degree in economics and a master's degree in law.",
  "Experience: I have been with SAP Signavio for nearly two years, specializing in products related to Process Mining. Throughout this journey, I have primarily focused on React and GraphQL on the front-end, complemented by my proficiency in Kotlin and Java on the back-end.",
];

const About = () => (
  <div className="about">
    <h2>About</h2>
    {text.map((text) => (
      <p key={text}>{text}</p>
    ))}
  </div>
);

export default About;
