import "./index.css";

// eslint-disable-next-line react/prop-types
const Link = ({ name, href }) => (
  <a className="link" href={href}>
    {name}
  </a>
);

export default Link;
