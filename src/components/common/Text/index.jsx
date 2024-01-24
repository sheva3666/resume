/* eslint-disable react/prop-types */
import "./index.css";

const Text = ({ children, maxwidth }) => (
  <p style={{ maxWidth: maxwidth }} className="text">
    {children}
  </p>
);

export default Text;
